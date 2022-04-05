export const starting = {
    cleaningApprovalInfo: (disabled, controlled) => ({
        disabled: !controlled,
        type: "fieldArray",
        name: "cleaningApprovalInfo",
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
    }),
    nzTask: (disabled, caption) => ({
        disabled: disabled,
        name: "nzTask",
        title: "Наряд заказ",
        type: "inputNZ",
        caption: caption || "Заполнить наряд заказ"
    }),
    nzFront: (disabled) => ({
        disabled: disabled,
        name: "nzFront",
        title: "Наряд заказ",
        type: "document",
        button: "Загрузить Наряд заказ",
        fileType: "nz",
        fileRules: { write: true, read: true }
    })
}
