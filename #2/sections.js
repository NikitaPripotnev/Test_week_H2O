import { inputs } from "./inputs"
import { rules } from "./rules"
import { fetchFormAction } from "./formActionService"
import { StageManager } from "./StageManager"
import { personnelInputs } from "../inputs/personnel"
import { additionals } from "./additionals"
import { calculations } from "./calculations"
import { chief } from "./chief"
import { contract } from "./contract"
import { foremanWorkStarting } from "./foremanWorkStarting"
import { foremanReportObject } from "./foremanReportObject"
import { foremanReportWarehouse } from "./foremanReportWarehouse"
import { tools } from "./tools"
import { inspection } from "./inspection"
import { kp_primary } from "./kp_primary"
import { managerOrderReport } from "./managerOrderReport"
import { managerOrderClose } from "./managerOrderClose"
import { operator } from "./operator"
import { primaryInfo } from "./primaryInfo"
import { quality } from "./quality"
import { starting } from "./starting"
import { task } from "./task"
import { selling } from "./selling"

export const PRIMARY_INFORMATION = ({
    orderType,
    orderCreator,
    isPassport,
    cleaningType,
    serviceType,
    counterparty,
    additionalService,
    source,
    prepaymentType,
    stages,
    user,
    archived
}) => {
    let newInputs = []
    if (rules[user.role]?.sections.primaryInformation) {
        let disabled = false
        if (archived || stages.includes("ORDER_TO_DIVISION")) {
            disabled = true
        }
        if (orderCreator) {
            newInputs.push([
                primaryInfo.orderCreator(disabled),
                primaryInfo.orderCreatedAt(disabled)
            ])
        }
        newInputs.push([primaryInfo.cleaningType(disabled), primaryInfo.orderType(disabled)])
        newInputs.push([primaryInfo.buildingType(disabled), primaryInfo.buildingClass(disabled)])
        newInputs.push(
            counterparty === "Физ. лицо"
                ? [primaryInfo.counterparty(disabled), primaryInfo.sex(disabled)]
                : [primaryInfo.counterparty(disabled), primaryInfo.organization(disabled)]
        )
        newInputs.push([primaryInfo.contactInfo(disabled)])
        newInputs.push([primaryInfo.isPassport(disabled)])
        if (isPassport) {
            newInputs.push([
                primaryInfo.passportFullname(disabled),
                primaryInfo.passportPhone(disabled),
                primaryInfo.passportBirthday(disabled)
            ])
            newInputs.push([
                primaryInfo.passportSeries(disabled),
                primaryInfo.passportNumber(disabled),
                primaryInfo.subdivisionCode(disabled),
                primaryInfo.issuedDate(disabled)
            ])
            newInputs.push([primaryInfo.issuedBy(disabled)])
            newInputs.push([primaryInfo.residencePlace(disabled)])
        }
        newInputs.push([primaryInfo.address(disabled)])
        if (serviceType !== "Остекление") {
            newInputs.push([primaryInfo.objectArea(disabled), primaryInfo.bathroom(disabled)])
        }
        newInputs.push([primaryInfo.serviceType(disabled), primaryInfo.additionalService(disabled)])
        if (additionalService && additionalService.includes("Балкон")) {
            newInputs.push([primaryInfo.balconies(disabled)])
        }
        newInputs.push([primaryInfo.windows(disabled)])
        newInputs.push([primaryInfo.comment(disabled)])
        newInputs.push([primaryInfo.services(disabled, serviceType)])
        newInputs.push([primaryInfo.cleaningDuration(disabled), primaryInfo.cost(disabled)])
        const prepaymentRow = [primaryInfo.discount(disabled), primaryInfo.prepaymentType(disabled)]
        if (prepaymentType === "На объекте" || prepaymentType === "Внесена") {
            prepaymentRow.push(primaryInfo.prepaymentSelect(disabled))
        }
        if (prepaymentType === "Бронирование даты" || prepaymentType === "Выезд на осмотр") {
            prepaymentRow.push(primaryInfo.prepaymentText(disabled))
        }
        newInputs.push([...prepaymentRow])
        newInputs.push(
            source === "от Партнеров" ||
                source === "Рекомендации" ||
                source === "Абонемент" ||
                source === "Рамочный договор" ||
                source === "Объект из ППО"
                ? [primaryInfo.attractionSource(disabled), primaryInfo.sourceTypeText(disabled)]
                : [primaryInfo.attractionSource(disabled), primaryInfo.sourceTypeSelect(disabled)]
        )
        newInputs.push([primaryInfo.crmLink(disabled)])
        if (orderType === "Уборка" && cleaningType === "Разовая уборка") {
            newInputs.push([primaryInfo.photosObject(disabled)])
        }
    }

    return {
        title: "Первичная информация",
        name: "primaryInformation",
        inputs: [...newInputs],
        active: true
    }
}

export const SELLING = ({
    responsibleManager,
    stages,
    currentStage,
    user,
    archived,
    responsibleUsers
}) => {
    let newInputs = []

    if (rules[user.role]?.sections.selling) {
        const availableAction = StageManager.checkAvailableStageByRole(currentStage, user.role)
        let disabled = archived || stages.includes("ORDER_TO_DIVISION")

        if (responsibleManager) {
            newInputs.push([selling.division(true), selling.responsibleManager(true)])
        } else {
            newInputs.push([selling.division(disabled)])
        }

        newInputs.push([selling.cleaningDate(disabled), selling.soldAt(disabled)])

        if (stages.includes("TAKE_ORDER")) {
            newInputs.push([selling.contract(), selling.act()])
        }
        if (availableAction) {
            const action = fetchFormAction({
                archived,
                section: "SELLING",
                user,
                currentStage,
                responsibleUsers
            })
            if (action) {
                newInputs.push([action])
            }
        }
    }
    return {
        title: "Продажа",
        name: "selling",
        inputs: [...newInputs],
        active: true
    }
}

export const STARTING = ({ stages, currentStage, user, archived, responsibleUsers }) => {
    let newInputs = []
    if (rules[user?.role]?.sections.starting) {
        const availableAction = StageManager.checkAvailableStageByRole(currentStage, user.role)

        if (user?.role === "ORDER_MANAGER" || user?.role === "CHIEF") {
            if (stages.includes("TAKE_ORDER") && currentStage !== "CHANGE_REQUEST") {
                newInputs.push([
                    startingstarting.cleaningApprovalInfo(
                        stages.includes("APPROVE_CLEANING"),
                        false
                    )
                ])
            }
            if (currentStage === "APPROVE_CLEANING") {
                newInputs.push([starting.nzTask()])
            }
            if (stages.includes("FILL_NZ_WITH_TASK")) {
                newInputs.push([starting.nzFront()])
            }
        }

        if (availableAction) {
            const action = fetchFormAction({
                archived,
                section: "STARTING",
                user,
                currentStage,
                responsibleUsers
            })
            if (action) {
                newInputs.push([action])
            }
        }
    }
    return {
        title: "Запуск уборки",
        name: "starting",
        inputs: newInputs,
        active: true
    }
}

export const FOREMAN_WORK_STARTING = ({
    reportDate,
    additionalServices,
    additionalServicesPhotos,
    stages,
    currentStage,
    user,
    archived,
    responsibleUserId
}) => {
    const newInputs = []

    if (
        rules[user?.role]?.sections.foremanWorkStarting &&
        (user.role !== "FOREMAN" || responsibleUserId === user.id)
    ) {
        const availableAction = StageManager.checkAvailableStageByRole(currentStage, user.role)
        const disabled = stages.includes("CLEANING_STARTED")
        const temporaryDisable = currentStage === "APPROVE_NZ" && user.role === "ORDER_MANAGER"

        if (reportDate) {
            newInputs.push([
                foremanWorkStarting.division(true),
                foremanWorkStarting.foreman(true),
                foremanWorkStarting.reportDate(true)
            ])
        } else {
            newInputs.push([foremanWorkStarting.division(true), foremanWorkStarting.foreman(true)])
        }

        newInputs.push([foremanWorkStarting.cleaningTask(true)])(
            user.role === "CHIEF" || user.role === "FOREMAN"
        ) &&
            newInputs.push([
                foremanWorkStarting.clientConfirmationInfo(
                    stages.includes("CLIENT_CONFIRMATION"),
                    false
                )
            ])

        const mainServicesApproved = stages.includes("ADD_SERVICES_RESPONSE")
        if (stages.includes("CLIENT_CONFIRMATION") && (availableAction || mainServicesApproved)) {
            newInputs.push([foremanWorkStarting.actualServices(mainServicesApproved)])
            newInputs.push([foremanWorkStarting.contractPhoto(mainServicesApproved)])
        }

        additionalServicesPhotos &&
            newInputs.push([foremanWorkStarting.additionalServicesPhotos(true)])

        const addServicesApproved = stages.includes("ADD_SERVICES_TO_CONFIRMATION")
        if (
            additionalServices &&
            mainServicesApproved &&
            (availableAction || addServicesApproved)
        ) {
            //Проверять есть ли additionalService
            newInputs.push([
                foremanWorkStarting.additionalServices(
                    disabled || !availableAction,
                    currentStage === "ADD_SERVICES_RESPONSE"
                )
            ])
        }
        if (additionalServices && addServicesApproved && (availableAction || disabled)) {
            newInputs.push([foremanWorkStarting.addContractPhoto(disabled)])
        }

        if (availableAction) {
            const action = fetchFormAction({
                archived,
                section: "FOREMAN_WORK_STARTING",
                user,
                currentStage,
                responsibleUserId
            })
            if (action) {
                newInputs.push([action])
            }
        }
    }
    return {
        title: "Сверка с клиентом выполняемых услуг",
        name: "foremanReport",
        inputs: [...newInputs]
    }
}

export const FOREMAN_REPORT_OBJECT = ({
    reportDate,
    stages,
    currentStage,
    user,
    archived,
    responsibleUserId,
    actualCostCard
}) => {
    const newInputs = []

    if (
        rules[user?.role]?.sections.foremanReportObject &&
        (user.role !== "FOREMAN" || responsibleUserId === user.id)
    ) {
        const availableAction = StageManager.checkAvailableStageByRole(currentStage, user.role)
        const temporaryDisable = currentStage === "APPROVE_NZ_BACK" && user.role === "ORDER_MANAGER"
        if (reportDate) {
            newInputs.push([
                foremanReportObject.division(true),
                foremanReportObject.foreman(true),
                foremanReportObject.reportDate(true)
            ])
        } else {
            newInputs.push([foremanReportObject.division(true), foremanReportObject.foreman(true)])
        }

        newInputs.push([foremanReportObject.cleaningDate(true)])

        const workStarted = stages.includes("WORK_STARTING")

        if (stages.includes("CLEANING_STARTED") && (availableAction || workStarted)) {
            newInputs.push([foremanReportObject.workBeginning(workStarted)])
        }

        const cleaningEnded = stages.includes("CLEANING_ENDED")
        if (workStarted) {
            newInputs.push([
                foremanReportObject.foremanCheckList(
                    cleaningEnded || (user.role !== "FOREMAN" && user.role !== "CHIEF")
                )
            ])
        }
        if (workStarted && (availableAction || cleaningEnded)) {
            newInputs.push([foremanReportObject.workProcess(cleaningEnded)])
        }

        const workEnded = stages.includes("WORK_ENDING")
        if (cleaningEnded && (availableAction || workEnded)) {
            newInputs.push([
                foremanReportObject.actualCostCash(workEnded && !temporaryDisable),
                foremanReportObject.actualCostCard(workEnded && !temporaryDisable)
            ])
            actualCostCard > 0 && newInputs.push([foremanReportObject.paymentCheck()])
            newInputs.push([foremanReportObject.workEnding(workEnded)])
        }

        if (availableAction) {
            const action = fetchFormAction({
                archived,
                section: "FOREMAN_REPORT_OBJECT",
                user,
                currentStage,
                responsibleUserId
            })
            if (action) {
                newInputs.push([action])
            }
        }
    }
    return {
        title: "Отчет бригадира (объект)",
        name: "foremanReport",
        inputs: [...newInputs]
    }
}

export const FOREMAN_REPORT_WAREHOUSE = ({
    reportDate,
    stages,
    currentStage,
    user,
    archived,
    responsibleUserId
}) => {
    const newInputs = []

    if (
        rules[user?.role]?.sections.foremanReportWarehouse &&
        (user.role !== "FOREMAN" || responsibleUserId === user.id)
    ) {
        const disable = stages.includes("FOREMAN_REPORT")
        const temporaryDisable = currentStage === "APPROVE_NZ_BACK" && user.role === "ORDER_MANAGER"
        const availableAction = StageManager.checkAvailableStageByRole(currentStage, user.role)

        if (reportDate) {
            newInputs.push([
                foremanReportWarehouse.division(true),
                foremanReportWarehouse.foreman(true),
                foremanReportWarehouse.reportDate(true)
            ])
        } else {
            newInputs.push([
                foremanReportWarehouse.division(true),
                foremanReportWarehouse.foreman(true)
            ])
        }

        if (stages.includes("ON_WAREHOUSE") && (availableAction || disable)) {
            newInputs.push([foremanReportWarehouse.actualTitle()])
            newInputs.push([
                foremanReportWarehouse.actualObjectArea(disable && !temporaryDisable),
                foremanReportWarehouse.actualDurationCleaningTime(true),
                foremanReportWarehouse.actualCleanerNumber(true),
                foremanReportWarehouse.actualEmployeesSalary(true)
            ])
            newInputs.push([
                foremanReportWarehouse.actualExpansesTaxiThere(disable && !temporaryDisable),
                foremanReportWarehouse.actualExpansesTaxiBack(disable && !temporaryDisable),
                foremanReportWarehouse.actualExpansesPetrol(disable && !temporaryDisable)
            ])
            newInputs.push([foremanReportWarehouse.actualTeam(disable && !temporaryDisable)])
            newInputs.push([foremanReportWarehouse.foremanComment(disable && !temporaryDisable)])
        }
        if (availableAction) {
            const action = fetchFormAction({
                archived,
                section: "FOREMAN_REPORT_WAREHOUSE",
                user,
                currentStage,
                responsibleUserId
            })
            if (action) {
                newInputs.push([action])
            }
        }
    }
    return {
        title: "Отчет бригадира (склад)",
        name: "foremanReport",
        inputs: [...newInputs]
    }
}

export const TOOLS_REPORT = ({
    reportDate,
    stages,
    currentStage,
    user,
    archived,
    responsibleUserId
}) => {
    const newInputs = []
    if (
        rules[user?.role]?.sections.toolsReport &&
        (user.role !== "FOREMAN" || responsibleUserId === user.id)
    ) {
        const disabled = stages.includes("TOOLS_REPORT")
        const availableAction = StageManager.checkAvailableStageByRole(currentStage, user.role)
        const temporaryDisable = currentStage === "APPROVE_NZ_BACK" && user.role === "ORDER_MANAGER"

        // if (reportDate) {
        //     newInputs.push([inputs.division(true), inputs.toolsManager(true), inputs.reportDate(true)])
        // } else {
        //     newInputs.push([inputs.division(true), inputs.toolsManager(true)])
        // }

        if (availableAction || disabled) {
            newInputs.push([
                tools.actualConsumables(true),
                tools.documentsReturn(disabled && !temporaryDisable)
            ])
            newInputs.push([tools.actualTools(disabled && !temporaryDisable)])
            newInputs.push([tools.toolsComment(disabled && !temporaryDisable)])
        }

        if (stages.includes("TOOLS_REPORT")) {
            newInputs.push([tools.nzBack(true)])
        }

        if (availableAction) {
            const action = fetchFormAction({
                archived,
                section: "TOOLS_REPORT",
                user,
                currentStage,
                responsibleUserId
            })
            if (action) {
                newInputs.push([action])
            }
        }
    }
    return {
        title: "Возврат инвентаря",
        name: "toolsReport",
        inputs: [...newInputs]
    }
}

export const ORDER_MANAGER_REPORT = ({ reportDate, stages, currentStage, user, archived }) => {
    const newInputs = []

    if (rules[user?.role]?.sections.orderManagerReport) {
        if (reportDate) {
            newInputs.push([
                managerOrderReport.division(true),
                managerOrderReport.responsibleManager(true),
                managerOrderReport.reportDate(true)
            ])
        } else {
            newInputs.push([
                managerOrderReport.division(true),
                managerOrderReport.responsibleManager(true)
            ])
        }
        const availableAction = StageManager.checkAvailableStageByRole(currentStage, user.role)
        const disabled = stages.includes("ORDER_MANAGER_REPORT")

        if (availableAction || disabled) {
            newInputs.push([managerOrderReport.orderManagerComment(disabled)])
            newInputs.push([managerOrderReport.nzFrontPhoto(), managerOrderReport.nzBackPhoto()])
        }

        if (availableAction) {
            const action = fetchFormAction({
                archived,
                section: "ORDER_MANAGER_REPORT",
                user,
                currentStage
            })
            if (action) {
                newInputs.push([action])
            }
        }
    }
    return {
        title: "Проверка менеджера",
        name: "orderManagerReport",
        inputs: [...newInputs]
    }
}

export const ORDER_MANAGER_ORDER_CLOSING = ({
    lastSection,
    sectionNumber,
    reportDate,
    stages,
    currentStage,
    user,
    archived
}) => {
    const newInputs = []

    if (rules[user?.role]?.sections.orderManagerOrderClosing) {
        const availableAction = StageManager.checkAvailableStageByRole(currentStage, user.role)
        const disabled = !lastSection || stages.includes("TO_CHIEF_REPORT")

        if (reportDate) {
            newInputs.push([
                managerOrderClose.division(true),
                managerOrderClose.responsibleManager(true),
                managerOrderClose.reportDate(true)
            ])
        }
        if (availableAction || !lastSection) {
            newInputs.push([managerOrderClose.additionalExpanses(disabled)])
            newInputs.push([managerOrderClose.orderManagerComment(disabled)])
            newInputs.push([managerOrderClose.mistakesFiles(disabled)])
        }

        if (availableAction && lastSection) {
            const action = fetchFormAction({
                archived,
                section: "ORDER_MANAGER_ORDER_CLOSING",
                user,
                currentStage
            })
            if (action) {
                newInputs.push([action])
            }
        }
    }
    return {
        title: "Исправление недочетов",
        name: "orderClosing." + sectionNumber,
        inputs: [...newInputs]
    }
}

export const OPERATOR_ORDER_CLOSING = ({
    lastSection,
    sectionNumber,
    reportDate,
    stages,
    currentStage,
    user,
    archived
}) => {
    const newInputs = []

    if (rules[user?.role]?.sections.operatorOrderClosing) {
        const availableAction = StageManager.checkAvailableStageByRole(currentStage, user.role)
        const disabled = !lastSection || stages.includes("TO_CHIEF_REPORT")

        if (reportDate) {
            newInputs.push([
                operator.division(true),
                operator.responsibleManager(true),
                operator.reportDate(true)
            ])
        }
        if (availableAction || !lastSection) {
            newInputs.push([operator.conflictResolutionInfo(disabled, false)])
        }

        if (availableAction && lastSection) {
            const action = fetchFormAction({
                archived,
                section: "OPERATOR_ORDER_CLOSING",
                user,
                currentStage
            })
            if (action) {
                newInputs.push([action])
            }
        }
    }
    return {
        title: "Улаживание конфликта",
        name: "orderClosing." + sectionNumber,
        inputs: [...newInputs]
    }
}

export const QUALITY_CONTROL = ({
    lastSection,
    sectionNumber,
    reportDate,
    stages,
    currentStage,
    user,
    archived,
    responsibleUserId
}) => {
    const newInputs = []
    //ТУТ логика available action теряется, нужно будет переписать
    if (
        rules[user?.role]?.sections.qualityControl &&
        (user.role !== "FOREMAN" || responsibleUserId === user.id)
    ) {
        const availableAction = StageManager.checkAvailableStageByRole(currentStage, user.role)
        const disabled = !lastSection || stages.includes("TO_CHIEF_DECISION")

        if (reportDate) {
            newInputs.push([
                quality.division(true),
                quality.responsibleManager(true),
                quality.reportDate(true)
            ])
        }
        if (
            user.role === "OPERATOR" ||
            user.role === "CHIEF" ||
            ((user.role === "ORDER_MANAGER" || user.role === "FOREMAN") && !lastSection) ||
            stages.includes("TO_CHIEF_DECISION")
        ) {
            newInputs.push([
                quality.qualityRating(disabled),
                quality.serviceRating(disabled),
                quality.discountNextCleaning(disabled)
            ])
            newInputs.push([quality.clientComment(disabled)])
            newInputs.push([quality.qualityControlComment(disabled)])
            newInputs.push([quality.qualityControlFiles(disabled)])
        }

        if ((user.role === "OPERATOR" || user.role === "CHIEF") && lastSection) {
            const action = fetchFormAction({
                archived,
                section: "QUALITY_CONTROL",
                user,
                currentStage
            })
            if (action) {
                newInputs.push([action])
            }
        }

        return {
            title: "Оценка качества",
            name: "orderClosing." + sectionNumber,
            inputs: newInputs
        }
    }
    return {
        title: "Оценка качества",
        name: "orderClosing." + sectionNumber,
        inputs: []
    }
}

export const CHIEF_REPORT = ({ reportDate, stages, currentStage, user, archived }) => {
    let newInputs = []
    if (rules[user?.role]?.sections.chiefReport) {
        let disabled = stages.includes("CHIEF_REPORT")
        if (stages.includes("ORDER_CLOSED")) {
            newInputs.push([chief.chiefExpansesReport(disabled)])
        }

        const action = fetchFormAction({ archived, section: "CHIEF_REPORT", user, currentStage })
        if (action) {
            newInputs.push([action])
        }
    }
    return {
        title: "Отчет руководителя",
        name: "chiefReport",
        inputs: [...newInputs]
    }
}
//в инпуте не нашел orderClosingAction
export const ORDER_CLOSING = ({ currentStage, user, archived }) => {
    if (rules[user?.role]?.sections.orderClosing) {
        return {
            title: "Закрытие заявки",
            name: "orderClosing",
            inputs: [
                StageManager.checkAvailableStageByRole(currentStage, user.role) && !archived
                    ? [inputs.orderClosingAction()]
                    : []
            ]
        }
    }
    return {
        title: "Закрытие заявки",
        name: "orderClosing",
        inputs: []
    }
}

export const INSPECTION = ({ kpo, stages, currentStage, user, archived }) => {
    if (user.role === "OPERATOR" || user.role === "CHIEF" || user.role === "ORDER_MANAGER") {
        let newInputs = []
        if (stages.includes("TAKE_ORDER")) {
            newInputs.push([
                inspection.division(),
                inspection.responsibleManager(),
                inspection.inspectionDate()
            ])
        } else {
            newInputs.push([inspection.division()])
        }
        if (stages.includes("SELECT_INSPECTION_DATE")) {
            newInputs.push([inspection.inspectionComment()])
            if (kpo) {
                newInputs.push([inspection.kpo(), inspection.smeta()])
            } else {
                newInputs.push([inspection.kpo()])
            }
        }
        if (!archived && StageManager.checkAvailableStageByRole(currentStage, user.role)) {
            switch (currentStage) {
                case undefined:
                case null:
                case "ORDER_CREATION":
                    newInputs.push([inspection.orderToDivisionAction()])
                    break
                case "ORDER_TO_DIVISION":
                    newInputs.push([inspection.takeOrderAction()])
                    break
                case "TAKE_ORDER":
                    newInputs.push([inspection.selectInspectionDateAction()])
                    break
                case "SELECT_INSPECTION_DATE":
                    newInputs.push([inspection.toSellingAction()])
                    break
                default:
                    break
            }
        }

        return {
            title: "Осмотр/расчет",
            name: "inspectionAndAccounting",
            inputs: [...newInputs]
        }
    }

    return {
        title: "Осмотр/расчет",
        name: "inspectionAndAccounting",
        inputs: []
    }
}

//KPO
//*********************************************
export const CALCULATION_COMMERCIAL_OBJECTS = (createdAt) => ({
    title: "Расчет коммерческих объектов",
    name: "calculationCommercialObjects",
    inputs: [
        createdAt
            ? [calculations.responsibleManager(true), calculations.createdAt(true)]
            : [calculations.responsibleManager(true)],
        [calculations.buildingType(), calculations.serviceType()],
        [calculations.address()],
        [calculations.permitRegime()],
        [calculations.personnelRequirements()],
        [calculations.cleaningSchedule(), calculations.targetDate()],
        [
            calculations.paymentType(),
            calculations.tender(),
            calculations.technicalTask(),
            calculations.testSuitcase()
        ],
        [calculations.contactPerson()],
        [calculations.comment()]
    ]
})

export const CALCULATION_PARAMETERS = {
    title: "Параметры для расчета",
    name: "calculationParameters",
    calculations: [
        [calculations.objectArea(), calculations.ceilingHeight(), calculations.bathroom()],
        [calculations.flooring()],
        [calculations.walls()],
        [calculations.stairs()],
        [calculations.furniture()],
        [calculations.pollutionDegree()]
    ]
}
export const ADDITIONAL_TYPES_WORK = {
    title: "Дополнительные виды работ",
    name: "additionalTypesWork",
    inputs: [
        [additionals.glazingWashing()],
        [additionals.industrialAlpinism()],
        [additionals.rotaryCleaning()],
        [additionals.dryCleaning()],
        [additionals.otherServices()],
        [additionals.workComplexity()]
    ]
}
//*********************************************

//KP
//*********************************************
export const KP_PRIMARY_INFORMATION = ({ counterparty, source, createdAt }) => {
    return {
        title: "Первичная информация",
        name: "primaryInformation",
        inputs: [
            createdAt
                ? [
                      kp_primary.division(true),
                      kp_primary.responsibleManager(true),
                      kp_primary.createdAt(true)
                  ]
                : [kp_primary.division(true), kp_primary.responsibleManager(true)],
            [kp_primary.cleaningType(), kp_primary.orderType()],
            [kp_primary.buildingType(), kp_primary.buildingClass()],
            counterparty === "Физ. лицо"
                ? [kp_primary.counterparty(), kp_primary.sex()]
                : [kp_primary.counterparty(), kp_primary.organization()],
            [kp_primary.clientFullname(), inputs.clientPhone()],
            [kp_primary.address()],
            [kp_primary.serviceType(), kp_primary.additionalService()],
            [kp_primary.cleaningDuration(), kp_primary.cost(), kp_primary.paymentType()],
            source === "от Партнеров" ||
            source === "Рекомендации" ||
            source === "Абонемент" ||
            source === "Рамочный договор" ||
            source === "Объект из ППО"
                ? [kp_primary.attractionSource(), kp_primary.sourceTypeText()]
                : [kp_primary.attractionSource(), kp_primary.sourceTypeSelect()],
            [
                kp_primary.priceWithoutDiscount(),
                kp_primary.kpDiscount(),
                kp_primary.priceWithDiscount()
            ],
            [kp_primary.kpCreatedAt(), kp_primary.kpDateEnd()],
            [kp_primary.kpComment()]
        ]
    }
}
//*********************************************

//CONTRACT
//*********************************************
export const CONTRACT_GENERAL_INFORMATION = () => ({
    title: "Общая информация",
    name: "contract",
    inputs: [
        [contract.contractNumber(), contract.contractDate(), contract.cleaningDate(false, false)],
        [contract.address()],
        [contract.contractCost()],
        [contract.serviceType(), contract.additionalService()],
        [contract.contractServices()]
    ]
})
//*********************************************

//NZ
//*********************************************
export const TASK = (stage, user) => {
    let disabled = false
    if (user?.roleName !== "CHIEF" && user?.roleName !== "ORDER_MANAGER") {
        disabled = true
    }
    if (stage === "FILL_NZ_WITH_TASK") {
        disabled = true
    }
    return {
        title: "Задача",
        name: "nzTask",
        active: true,
        inputs: [
            [task.serviceType(true), task.cleaningDate(true)],
            [task.contactInfo(true)],
            [task.address(true)],
            [task.buildingType(true), task.buildingClass(true)],
            [task.responsibleManager(true), task.foreman(disabled), task.totalCost(true)],
            [task.cleaningTask(disabled)],
            [
                task.objectArea(true),
                task.durationCleaningTime(disabled),
                task.cleanerNumber(disabled),
                task.employeesSalary(disabled),
                task.consumables(disabled)
            ],
            [task.documentsStatus(disabled)],
            [task.logisticTitle()],
            [
                task.logisticExpansesTaxiRouteThere(disabled),
                task.logisticExpansesTaxiRouteBack(disabled),
                task.logisticExpansesPetrolRoute(disabled)
            ]
        ]
    }
}

//NZ
//*********************************************
export const PERSONNEL = () => {
    return {
        title: "Информация о сотруднике",
        name: "personnel",
        inputs: [
            [
                personnelInputs.fullname(false),
                personnelInputs.birthday(false),
                personnelInputs.phone(false)
            ],
            [
                personnelInputs.division(false),
                personnelInputs.jobPosition(false),
                personnelInputs.rank(false)
            ],
            [personnelInputs.savePersonnelAction(false)]
        ]
    }
}
