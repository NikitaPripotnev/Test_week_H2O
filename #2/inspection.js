export const inspection = {
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
    inspectionDate: (disabled) => ({
        disabled: disabled,
        title: "Дата осмотра",
        name: "inspectionDate",
        className: "input50",
        singleDate: true,
        type: "date"
    }),
    inspectionComment: (disabled) => ({
        disabled: disabled,
        title: "Комментарий",
        name: "inspectionComment",
        className: "input100",
        type: "text"
    }),
    kpo: (disabled) => ({
        disabled: disabled,
        name: "kpo",
        title: "Карта пред. осмотра",
        type: "document",
        button: "Добавить КПО",
        fileType: "kpo",
        fileRules: { write: true, read: true }
    }),
    smeta: (disabled) => ({
        disabled: disabled,
        name: "smeta",
        title: "Смета",
        type: "document",
        button: "Добавить Смету",
        fileType: "smeta",
        fileRules: { write: true, read: true }
    })
}
