export const managerOrderReport = {
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
    nzFrontPhoto: (disabled) => ({
        disabled: disabled,
        name: "nzFrontPhoto",
        title: "Наряд заказ(задача)",
        type: "document",
        button: "Загрузить фото",
        fileType: "jpg",
        accept: "image/*;capture=camera"
    }),
    nzBackPhoto: (disabled) => ({
        disabled: disabled,
        name: "nzBackPhoto",
        title: "Наряд заказ(результат)",
        type: "document",
        button: "Загрузить фото",
        fileType: "jpg",
        accept: "image/*;capture=camera"
    })
}
