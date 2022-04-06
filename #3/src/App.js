import CustomSelect from './components/customField/CustomSelect'

function App() {
	return (
		<div className='App' key='app'>
			<CustomSelect
				key='123'
				title='Пропускной режим'
				name='permitRegime'
				className='input100'
				type='select'
				groups={[
					{
						name: 'Заголовок 1',
						items: [
							{ value: 'Небольшое', text: 'Небольшое' },
							{ value: 'Среднее', text: 'Среднее' },
							{ value: 'Сильное', text: 'Сильное' },
						],
					},
					{
						items: [
							{ value: 'Небольшое', text: 'Небольшое' },
							{ value: 'Среднее', text: 'Среднее' },
							{ value: 'Сильное', text: 'Сильное' },
						],
					},
				]}
				group={false}
			/>
		</div>
	)
}

export default App
