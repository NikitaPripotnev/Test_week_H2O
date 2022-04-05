export const quality = {
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
    qualityRating: (disabled) => ({
        disabled: disabled,
        title: "Оценка качества",
        name: "qualityRating",
        className: "input33",
        type: "rating"
    }),
    serviceRating: (disabled) => ({
        disabled: disabled,
        title: "Оценка сервиса",
        name: "serviceRating",
        className: "input33",
        type: "rating"
    }),
    discountNextCleaning: (disabled) => ({
        disabled: disabled,
        title: "Скидка на след. уборку",
        name: "discount",
        className: "input50",
        type: "select",
        items: [
            { value: 0, text: "0%" },
            { value: 5, text: "5%" },
            { value: 10, text: "10%" },
            { value: 15, text: "15%" },
            { value: 20, text: "20%" }
        ]
    }),
    clientComment: (disabled) => ({
        disabled: disabled,
        title: "Комментарий клиента",
        name: "clientComment",
        className: "input100",
        multiline: true,
        type: "text"
    }),
    qualityControlComment: (disabled) => ({
        disabled: disabled,
        title: "Комментарий менеджера продаж",
        name: "qualityControlComment",
        className: "input100",
        multiline: true,
        type: "text"
    }),
    qualityControlFiles: (disabled) => ({
        disabled: disabled,
        name: "qualityControlFiles",
        title: "Скрин переписки/Запись разговора",
        max: 15,
        type: "documentList",
        button: "Добавить файл",
        required: true
    })
}
