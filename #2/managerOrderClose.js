export const managerOrderClose = {
    division: (disabled) => ({
        disabled: disabled,
        title: "Подразделение",
        name: "division",
        className: "input100",
        type: "select",
        items: [{ value: "ПРР", text: "ПРР" }]
    }),
    responsibleManager: (disabled) => ({
        disabled: disabled,
        title: "Ответственный менеджер",
        name: "responsibleManager",
        className: "input50 input_inspectManager",
        type: "user"
    }),
    reportDate: (disabled) => ({
        disabled: disabled,
        title: "Дата отчета",
        name: "reportDate",
        className: "input33",
        singleDate: true,
        type: "date"
    }),
    orderManagerComment: (disabled) => ({
        disabled: disabled,
        name: "orderManagerComment",
        title: "Комментарий Мобильного менеджера",
        type: "text",
        multiline: true
    }),
    additionalExpanses: (disabled) => ({
        disabled: disabled,
        title: "Доп. расходы",
        name: "additionalExpanses",
        className: "input20",
        type: "text",
        mask: "number"
    }),
    mistakesFiles: (disabled) => ({
        disabled: disabled,
        name: "mistakesFiles",
        title: "Контент доработок",
        max: 15,
        type: "documentList",
        button: "Добавить файл",
        required: true
    })
}
