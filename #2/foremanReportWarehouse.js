export const foremanReportWarehouse = {
    division: (disabled) => ({
        disabled: disabled,
        title: "Подразделение",
        name: "division",
        className: "input100",
        type: "select",
        items: [{ value: "ПРР", text: "ПРР" }]
    }),
    foreman: (disabled) => ({
        disabled: disabled,
        title: "Бригадир",
        name: "foreman",
        type: "user",
        role: "FOREMAN"
    }),
    reportDate: (disabled) => ({
        disabled: disabled,
        title: "Дата отчета",
        name: "reportDate",
        className: "input33",
        singleDate: true,
        type: "date"
    }),
    actualTitle: () => ({
        type: "title",
        title: "Фактические данные"
    }),
    actualObjectArea: (disabled) => ({
        disabled: disabled,
        title: "Квадратура(м2)",
        name: "actualObjectArea",
        className: "input20",
        type: "text",
        mask: "number"
    }),
    actualDurationCleaningTime: (disabled) => ({
        disabled: disabled,
        title: "Время(ч)",
        name: "actualDurationCleaningTime",
        className: "input20",
        type: "text",
        mask: "number"
    }),
    actualCleanerNumber: (disabled) => ({
        disabled: disabled,
        title: "Кол-во клинеров",
        name: "actualCleanerNumber",
        className: "input20",
        type: "text"
    }),
    actualEmployeesSalary: (disabled) => ({
        disabled: disabled,
        title: "Работники(ФОТ)",
        name: "actualEmployeesSalary",
        className: "input20",
        type: "text",
        mask: "number"
    }),
    actualExpansesTaxiThere: (disabled) => ({
        disabled: disabled,
        title: "Расходы на такси туда",
        name: "actualExpansesTaxiThere",
        className: "input20",
        type: "text"
    }),
    actualExpansesTaxiBack: (disabled) => ({
        disabled: disabled,
        title: "Расходы на такси обратно",
        name: "actualExpansesTaxiBack",
        className: "input20",
        type: "text"
    }),
    actualExpansesPetrol: (disabled) => ({
        disabled: disabled,
        title: "Расходы на бензин",
        name: "actualExpansesPetrol",
        className: "input20",
        type: "text"
    }),
    actualTeam: (disabled) => {
        const inputs = [
            {
                className: "td25",
                name: "personnelId",
                title: "Сотрудник",
                default: "",
                placeholder: "Укажите сотрудника",
                type: "select",
                required: true
            },
            {
                className: "td10",
                name: "jobPosition",
                title: "Должность",
                default: "",
                multiline: true,
                placeholder: "Введите должность",
                required: true
            },
            {
                className: "td7",
                name: "salary",
                title: "Ставка",
                default: 0,
                mask: "number",
                placeholder: "Введите ставку",
                required: true
            },
            {
                className: "td7",
                name: "addSalary",
                title: "Доп. выплата",
                default: 0,
                mask: "number",
                placeholder: "0",
                required: false
            },
            {
                name: "status",
                className: "td15",
                title: "Статус работы",
                default: "WORKING",
                placeholder: "Выберите стутус",
                type: "select",
                items: [
                    {
                        value: "WORKING",
                        text: "Работает"
                    },
                    {
                        value: "NOT_WORKING",
                        text: "Не работает"
                    }
                ]
            },
            {
                className: "td7",
                name: "rate",
                title: "Оценка",
                default: "",
                type: "select",
                items: [
                    {
                        value: 0,
                        text: "-"
                    },
                    {
                        value: 1,
                        text: "1"
                    },
                    {
                        value: 2,
                        text: "2"
                    },
                    {
                        value: 3,
                        text: "3"
                    },
                    {
                        value: 4,
                        text: "4"
                    },
                    {
                        value: 5,
                        text: "5"
                    }
                ],
                required: true,
                placeholder: "1-5"
            },
            {
                name: "comment",
                title: "Комментарий",
                default: "",
                multiline: true,
                placeholder: "Напишите комментарий",
                required: true
            }
        ]
        return {
            disabled: disabled,
            name: "actualTeam",
            type: "personnel",
            title: "Бригада",
            inputs: inputs
        }
    },
    foremanComment: (disabled) => ({
        disabled: disabled,
        name: "foremanComment",
        title: "Комментарий по работе на объекте",
        type: "text",
        multiline: true
    })
}
