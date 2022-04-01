import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchUserInfo, fetchUsersByRole } from '../API/user'
import { loginUser } from '../API/auth'
import {
	fetchAllOrderByActionDate,
	fetchAllOrderByCleaningDate,
	fetchOrder,
	updateOrder,
} from '../API/order'
import { StageManager } from '../order/StageManager'
import { fetchDate } from '../util/currentTime'
import { fetchSchedule } from '../API/schedule'
import { fixAddress } from '../util/strings'

//STAFF
function* fetchUser() {
	try {
		const user = yield call(fetchUserInfo)
		yield put({ type: 'FETCH_USER_SUCCEEDED' })
		yield put({ type: 'CHANGE_USER_INFO', user: user })
	} catch (e) {
		yield put({ type: 'FETCH_USER_FAILED', message: e.message })
	}
}

function* authUser(action) {
	try {
		yield put({ type: 'AUTH_LOGIN_REQUESTED' })
		const token = yield call(loginUser, action.payload)
		yield call(() => localStorage.setItem('jwtToken', JSON.stringify(token)))
		yield put({ type: 'AUTH_LOGIN_SUCCEEDED', token: token })
		yield put({ type: 'USER_FETCH_REQUESTED' })
		const user = yield call(fetchUserInfo)
		yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
	} catch (e) {
		yield put({ type: 'USER_FETCH_FAILED', message: e.message })
		//Или ошибка в запросе данных
	}
}

function* updateUser() {
	try {
		yield put({ type: 'app/FETCH_USER_INFO_REQUESTED' })
		const userInfo = yield call(fetchUserInfo)
		yield put({
			type: 'app/CHANGE_USER_INFO',
			payload: { ...userInfo, roleName: userInfo.role },
		})
		yield put({ type: 'app/FETCH_USER_INFO_SUCCESS' })
	} catch (error) {
		if (error === 'token expired') {
			localStorage.removeItem('jwtToken')
			yield put({ type: 'app/logout' })
		}
		yield put({ type: 'app/FETCH_USER_INFO_FAILED' })
	}
}

//ORDERS
function* updateOrderAsync(order) {
	try {
		yield put({ type: 'order/UPDATE_ORDER_REQUESTED' })
		const newOrder = yield call(updateOrder, order.payload)
		yield put({ type: 'order/CHANGE_ACTIVE_ORDER', payload: newOrder })
		yield put({
			type: 'app/changeFormAction',
			payload: { action: 'RESET_FORM' },
		})
		yield put({ type: 'order/UPDATE_ORDER_SUCCESS' })
		yield put({
			type: 'notification/SHOW_NOTICE',
			payload: { type: 'success', message: 'Форма успешно сохранена!' },
		})
	} catch (e) {
		yield put({ type: 'order/UPDATE_ORDER_FAILED' })
		yield put({
			type: 'notification/SHOW_NOTICE',
			payload: { type: 'error', message: 'Ошибка при сохранении!' },
		})
	} finally {
		yield put({ type: 'app/changeFormAction', payload: { action: 'NONE' } })
	}
}

function* fetchOrderAsync(id) {
	try {
		yield put({ type: 'order/FETCH_ORDER_REQUESTED' })
		const order = yield call(fetchOrder, id.payload)
		yield put({ type: 'order/CHANGE_ACTIVE_ORDER', payload: order })
		yield put({
			type: 'app/changeFormAction',
			payload: { action: 'RESET_FORM' },
		})
		yield put({ type: 'order/FETCH_ORDER_SUCCESS' })
	} catch (e) {
		yield put({ type: 'order/FETCH_ORDER_FAILED' })
	} finally {
		// yield put({type: "app/changeFormAction", payload: {action: "NONE"}});
	}
}

function* updateEvents(action) {
	try {
		const { user, date } = action.payload
		yield put({ type: 'order/FETCH_ORDERS_REQUESTED' })
		const [cleanings, actions, schedule, foremans] = yield all([
			call(
				fetchAllOrderByCleaningDate,
				fetchDate(date).startOf('month').subtract(2, 'week').toISOString(),
				fetchDate(date).endOf('month').add(2, 'week').toISOString()
			),
			call(
				fetchAllOrderByActionDate,
				fetchDate(date).startOf('month').subtract(2, 'week').toISOString(),
				fetchDate(date).endOf('month').add(2, 'week').toISOString()
			),
			call(
				fetchSchedule,
				fetchDate(date).startOf('month').subtract(2, 'week').toISOString(),
				fetchDate(date).endOf('month').add(2, 'week').toISOString()
			),
			call(fetchUsersByRole, 'FOREMAN'),
		])

		const cleaningsForCalendar = cleanings.reduce((accum, cleaning) => {
			if (
				!cleaning.archived &&
				cleaning.cleaningDate &&
				cleaning.stageName !== 'ORDER_CREATION' &&
				(user.role !== 'FOREMAN' || cleaning.responsibleUsers.includes(user.id))
			) {
				return [
					...accum,
					{
						...cleaning,
						address: fixAddress(cleaning.address),
						stageName: cleaning.stageName,
						stageGroup: 'cleaning',
						start: fetchDate(cleaning.cleaningDate.startDate).toDate(),
						end: fetchDate(cleaning.cleaningDate.endDate).toDate(),
						status: 'process',
					},
				]
			}
			return accum
		}, [])

		const emptySlots = schedule?.flatMap(daySchedule => {
			const available = daySchedule.personnel.filter(
				personnel =>
					personnel.status === 'WORKING' &&
					foremans.some(f => f.id === personnel.personnelId)
			).length
			const cleaningsAtDay = cleanings.filter(
				cleaning =>
					cleaning.serviceType !== 'Поддерживающая уборка' &&
					fetchDate(cleaning.cleaningDate.startDate)
						.startOf('day')
						.isSameOrBefore(daySchedule.date) &&
					fetchDate(cleaning.cleaningDate.endDate)
						.endOf('day')
						.isSameOrAfter(daySchedule.date)
			)
			const resultAvailable = Math.max(available - cleaningsAtDay.length, 0)

			return new Array(resultAvailable).fill('').map(_ => ({
				stageGroup: 'empty',
				type: 'empty',
				start: fetchDate(daySchedule.date).startOf('day').toDate(),
				end: fetchDate(daySchedule.date).endOf('day').toDate(),
				address: 'Свободная дата',
				allDay: true,
			}))
		})

		const emptyGlasses = schedule?.flatMap(daySchedule => {
			const available = daySchedule.personnel.filter(
				personnel =>
					personnel.status === 'WORKING' &&
					foremans.some(f => f.id === personnel.personnelId)
			)
			const cleaningsAtDay = cleanings.filter(
				cleaning =>
					cleaning.serviceType === 'Остекление' &&
					fetchDate(cleaning.cleaningDate.startDate)
						.startOf('day')
						.isSameOrBefore(daySchedule.date) &&
					fetchDate(cleaning.cleaningDate.endDate)
						.endOf('day')
						.isSameOrAfter(daySchedule.date)
			)
			// Не знаю как иначе сделать конструкцию, чтобы записывало в 1 день 2 уборки
			let arrCheck = 0
			if (available.length === 1 && cleaningsAtDay.length < 2) {
				arrCheck = 1
			}
			return new Array(arr).fill('').map(_ => ({
				stageGroup: 'empty',
				type: 'empty',
				start: fetchDate(daySchedule.date).startOf('day').toDate(),
				end: fetchDate(daySchedule.date).endOf('day').toDate(),
				address: 'Свободное окно для уборки стекол',
				allDay: true,
			}))
		})

		const eventsForCalendar = actions.reduce((accum, _order) => {
			const events = [...accum]
			const order = { ..._order, address: fixAddress(_order.address) }
			if (order.stageName) {
				//Если заявка в архиве, то выводить только для руководителя
				if (order.archived) {
					if (user.role === 'CHIEF') {
						return [
							...accum,
							{
								...order,
								events: [],
								stageGroup: StageManager.defineStageGroup(order.stageName),
								start: fetchDate(order.startDate).toDate(),
								end: fetchDate(order.endDate).toDate(),
								status: 'completed',
							},
						]
					}
					return accum
				}

				if (order.stageName === 'ORDER_CREATION') {
					//Если Заявка только создана, видит ее только создавший
					order.responsibleUsers.includes(user.id) &&
						events.push({
							...order,
							events: [],
							stageGroup: StageManager.defineStageGroup(order.stageName),
							start: fetchDate(order.startDate).toDate(),
							end: fetchDate(order.endDate).toDate(),
							status: 'process',
						})
				} else if (
					order.stageName === 'RESERVE_ORDER' ||
					order.stageName === 'CHANGE_COST'
				) {
					//??
					;(order.responsibleUsers.includes(user.id) ||
						user.role === 'OPERATOR') &&
						events.push({
							...order,
							events: [],
							stageGroup: StageManager.defineStageGroup(order.stageName),
							start: fetchDate(order.startDate).toDate(),
							end: fetchDate(order.endDate).toDate(),
							status: 'process',
						})
				} else if (
					StageManager.checkAvailableStageByRole(order.stageName, user.role) &&
					!StageManager.hideEvents(order.stageName, user.role)
				) {
					if (user.role === 'FOREMAN' || user.role === 'TOOLS_MANAGER') {
						if (order.responsibleUsers.includes(user.id)) {
							events.push({
								...order,
								events: [],
								stageGroup: StageManager.defineStageGroup(order.stageName),
								start: fetchDate(order.startDate).toDate(),
								end: fetchDate(order.endDate).toDate(),
								status: 'process',
							})
						}
					} else {
						events.push({
							...order,
							events: [],
							stageGroup: StageManager.defineStageGroup(order.stageName),
							start: fetchDate(order.startDate).toDate(),
							end: fetchDate(order.endDate).toDate(),
							status: 'process',
						})
					}
				}
			}
			return events
		}, [])

		yield put({
			//Нужно обсудить как, кто и что должны видеть, либо все, либо конкретный человек
			type: 'order/CHANGE_EVENTS',
			payload: [...eventsForCalendar, ...cleaningsForCalendar, ...emptySlots],
		})
		yield put({ type: 'order/FETCH_ORDERS_SUCCESS' })
	} catch (e) {
		console.log('error', e)
		yield put({ type: 'order/FETCH_ORDERS_FAILED' })
	}
}

function* orderToArchive(action) {
	yield put({
		type: 'app/changeFormAction',
		payload: { action: 'TO_ARCHIVE', reason: action.payload },
	})
	// yield put({type: "app/changeFormAction", payload: {action:"NONE"}});
	yield put({ type: 'popup/closeArchivePopup' })
}

function* hideSidebar() {
	yield put({ type: 'app/HIDE_SIDEBAR' })
}

export function* mainSaga() {
	yield takeEvery('app/FETCH_USER_INFO', fetchUser)
	yield takeLatest('app/UPDATE_USER_INFO', updateUser)
	yield takeLatest('app/changeFormAction', hideSidebar)

	yield takeEvery('order/UPDATE_ORDER', updateOrderAsync)
	yield takeEvery('order/FETCH_ORDER', fetchOrderAsync)
	yield takeLatest('order/UPDATE_EVENTS', updateEvents)
	yield takeLatest('order/ORDER_TO_ARCHIVE', orderToArchive)
}
