export const operator = {
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
    conflictResolutionInfo: (disabled, controlled) => ({
        disabled: !controlled,
        type: "fieldArray",
        name: "conflictResolutionInfo",
        title: "",
        disableMode: true,
        items: [
            {
                disabled: true,
                title: "Дата звонка",
                name: "date",
                className: "input50",
                type: "date",
                singleDate: true,
                required: true
            },
            {
                disabled: disabled,
                title: "Результат",
                name: "result",
                className: "input50",
                type: "text",
                required: true
            }
        ]
    })
}
