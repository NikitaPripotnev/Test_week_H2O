export const contract = {
    contractNumber: (disabled) => ({
        disabled: disabled,
        title: "Номер договора",
        name: "contractNumber",
        className: "input33",
        type: "text"
    }),
    contractDate: (disabled) => ({
        disabled: disabled,
        title: "Дата договора",
        name: "contractDate",
        className: "input33",
        type: "date",
        singleDate: true
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
    address: (disabled) => ({
        disabled: disabled,
        title: "Адрес",
        name: "address",
        type: "address",
        className: "input100"
    }),
    contractCost: (disabled) => ({
        disabled: disabled,
        title: "Стоимость уборки",
        name: "contractCost",
        className: "input33",
        type: "text",
        multiline: true,
        required: true
    }),
    serviceType: (disabled) => ({
        disabled: disabled,
        title: "Вид услуги",
        name: "serviceType",
        className: "input50",
        type: "select",
        items: [
            { value: "Поддерживающая уборка", text: "Поддерживающая уборка" },
            { value: "Генеральная уборка Luxe", text: "Генеральная уборка Luxe" },
            {
                value: "Послестроительная уборка(комплексная)",
                text: "Послестроительная уборка(комплексная)"
            },
            { value: "Химчистка", text: "Химчистка" },
            { value: "Остекление", text: "Остекление" },
            { value: "Пром. альпинизм", text: "Пром. альпинизм" },
            { value: "Роторная чистка", text: "Роторная чистка" },
            { value: "Дезинфекция", text: "Дезинфекция" },
            { value: "Нанесение полимера", text: "Нанесение полимера" },
            { value: "Уборка территории", text: "Уборка территории" },
            { value: "Уборка снега", text: "Уборка снега" },
            { value: "Спец. работы", text: "Спец. работы" }
        ]
    }),
    additionalService: (disabled) => ({
        disabled: disabled,
        title: "Доп.услуги",
        name: "additionalService",
        className: "customField input50",
        type: "multipleSelector",
        placeholder: "Выберите значения",
        items: [
            { value: "Химчистка", text: "Химчистка" },
            { value: "Балкон", text: "Балкон" },
            { value: "Дезинфекция", text: "Дезинфекция" },
            { value: "Роторная чистка", text: "Роторная чистка" },
            { value: "Нанесение полимера", text: "Нанесение полимера" },
            { value: "Доп. работы", text: "Доп. работы" },
            { value: "Спец. работы", text: "Спец. работы" }
        ]
    }),
    contractServices: (disabled, serviceType) => ({
        disabled: disabled,
        title: "Выполняемые работы",
        buttonCaption: "Помещение не убирается",
        placeholderIn: "Закрыть таблицу",
        placeholderOut: "Открыть таблицу",
        type: "table",
        custom: "Добавить помещение",
        name: "services",
        template: SERVICES[serviceTypes(serviceType)] || SERVICES.luxe,
        sections: [
            { name: "glasses", title: "Окна" },
            { name: "balcony", title: "Балкон" },
            { name: "rooms", title: "Комната" },
            { name: "kitchen", title: "Кухня" },
            { name: "bath", title: "Санузел" }
        ],
        inputs: [
            { name: "name", title: "Наименование работ", default: "", required: true },
            {
                name: "note",
                title: "Примечание",
                default: "",
                className: "table__td_40",
                required: false
            }
        ]
    })
}
