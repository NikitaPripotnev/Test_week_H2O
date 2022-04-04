export const selling = {
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
    cleaningDate: (disabled, required) => ({
        disabled: disabled,
        title: "Дата уборки",
        name: "cleaningDate",
        className: "input50",
        type: "date",
        cleaningDate: true,
        required: required !== false
    }),
    soldAt: (disabled) => ({
        disabled: disabled,
        title: "Продал",
        name: "soldAt",
        className: "input50 input_inspectManager",
        type: "user",
        role: "OPERATOR"
    }),
    contract: (disabled) => ({
        disabled: disabled,
        name: "contract",
        title: "Договор",
        type: "document",
        button: "Добавить Договор",
        fileType: "contract",
        fileRules: { write: false, read: true }
    }),
    act: (disabled) => ({
        disabled: disabled,
        name: "act",
        title: "Акт",
        type: "document",
        button: "Добавить Акт",
        fileType: "act",
        fileRules: { write: false, read: true }
    })
}
