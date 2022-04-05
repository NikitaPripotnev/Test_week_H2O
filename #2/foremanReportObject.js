export const foremanReportObject = {
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
    cleaningDate: (disabled, required) => ({
        disabled: disabled,
        title: "Дата уборки",
        name: "cleaningDate",
        className: "input50",
        type: "date",
        cleaningDate: true,
        required: required !== false
    }),
    workBeginning: (disabled) => ({
        disabled: disabled,
        name: "workBeginning",
        title: "Начало работ",
        type: "document",
        button: "Загрузить фото",
        fileType: "jpg",
        accept: "image/*;capture=camera"
    }),
    foremanCheckList: (disabled) => ({
        disabled: disabled,
        title: "Выполняемые работы",
        className: "primaryServices",
        buttonCaption: "Помещение не убирается",
        placeholderIn: "Закрыть таблицу",
        placeholderOut: "Открыть таблицу",
        type: "table",
        name: "foremanCheckList",
        toolbar: false,
        checkList: true,
        sections: [
            { name: "glasses", title: "Окна" },
            { name: "balcony", title: "Балкон" },
            { name: "rooms", title: "Комната" },
            { name: "kitchen", title: "Кухня" },
            { name: "bath", title: "Санузел" }
        ],
        inputs: [
            {
                name: "name",
                title: "Наименование работ",
                default: "",
                multiline: true,
                required: true
            },
            {
                name: "note",
                title: "Примечание",
                default: "",
                className: "table__td_40",
                multiline: true,
                required: false
            },
            {
                name: "status",
                type: "checkbox",
                title: "Статус выполнения",
                default: false,
                className: "table__td_40",
                required: false,
                caption: "Выполнено"
            }
        ]
    }),
    workProcess: (disabled) => ({
        disabled: disabled,
        name: "workProcess",
        title: "Контент c объекта",
        max: 150,
        type: "documentList",
        button: "Загрузить фото",
        required: true
    }),
    actualCostCash: (disabled) => ({
        disabled: disabled,
        title: "Выплачено наличными",
        name: "actualCostCash",
        className: "input20",
        type: "text",
        mask: "number"
    }),
    actualCostCard: (disabled) => ({
        disabled: disabled,
        title: "Выплачено безнал.",
        name: "actualCostCard",
        className: "input20",
        type: "text",
        mask: "number"
    }),
    paymentCheck: (disabled) => ({
        disabled: disabled,
        name: "paymentCheck",
        title: "Подтверждение оплаты",
        type: "document",
        button: "Загрузить фото",
        fileType: "jpg",
        accept: "image/*;capture=camera"
    }),
    workEnding: (disabled) => ({
        disabled: disabled,
        name: "workEnding",
        title: "Окончание работ",
        type: "document",
        button: "Загрузить фото",
        fileType: "jpg",
        accept: "image/*;capture=camera"
    })
}
