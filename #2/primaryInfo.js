export const primaryInfo = {
    orderCreator: (disabled) => ({
        title: "Заявку создал",
        name: "orderCreator",
        className: "input50",
        disabled: true,
        type: "user"
    }),
    cleaningType: (disabled) => ({
        disabled: disabled,
        title: "Тип уборки",
        name: "cleaningType",
        className: "input50",
        type: "select",
        items: [
            { value: "Разовая уборка", text: "Разовая уборка" },
            { value: "Рамочный договор", text: "Рамочный договор" },
            { value: "Абонемент", text: "Абонемент" }
        ]
    }),
    orderType: (disabled) => ({
        disabled: disabled,
        title: "Тип заявки",
        name: "orderType",
        className: "input50",
        type: "select",
        items: [
            { value: "Осмотр/расчет", text: "Осмотр/расчет" },
            { value: "Уборка", text: "Уборка" }
        ]
    }),
    sex: (disabled) => ({
        disabled: disabled,
        title: "Пол",
        name: "sex",
        className: "input50",
        type: "select",
        items: [
            { value: "Мужской", text: "Мужской" },
            { value: "Женский", text: "Женский" }
        ]
    }),
    organization: (disabled) => ({
        disabled: disabled,
        title: "Организация",
        name: "organization",
        className: "input50",
        type: "text"
    }),
    contactInfo: (disabled) => ({
        disabled: disabled,
        name: "contactInfo",
        type: "fieldArray",
        items: [
            {
                disabled: disabled,
                title: "Имя",
                name: "clientFullname",
                className: "input50",
                type: "text",
                required: true
            },
            {
                disabled: disabled,
                title: "Телефон",
                name: "clientPhone",
                className: "input50",
                type: "text",
                mask: "+7(999)999-99-99",
                required: true
            }
        ]
    }),

    isPassport: (disabled) => ({
        disabled: disabled,
        caption: "Ввести паспортные данные?",
        title: "Паспортные данные",
        name: "isPassport",
        className: "input100",
        type: "checkbox",
        required: false
    }),
    passportFullname: (disabled) => ({
        disabled: disabled,
        title: "ФИО",
        name: "passportData.passportFullname",
        className: "input33",
        type: "text",
        required: true
    }),
    passportPhone: (disabled) => ({
        disabled: disabled,
        title: "Номер телефона",
        name: "passportData.passportPhone",
        className: "input33",
        type: "text",
        required: true
    }),
    passportBirthday: (disabled) => ({
        disabled: disabled,
        title: "Дата рождения",
        name: "passportData.passportBirthday",
        className: "input33",
        type: "text",
        required: true
    }),
    passportSeries: (disabled) => ({
        disabled: disabled,
        title: "Серия паспорта",
        name: "passportData.passportSeries",
        className: "input33",
        type: "text",
        mask: "number",
        required: true
    }),
    passportNumber: (disabled) => ({
        disabled: disabled,
        title: "Номер паспорта",
        name: "passportData.passportNumber",
        className: "input33",
        type: "text",
        mask: "number",
        required: true
    }),
    subdivisionCode: (disabled) => ({
        disabled: disabled,
        title: "Код подразделения",
        name: "passportData.subdivisionCode",
        className: "input33",
        type: "text",
        mask: "number",
        required: true
    }),
    issuedBy: (disabled) => ({
        disabled: disabled,
        title: "Кем выдан",
        name: "passportData.issuedBy",
        className: "input66",
        type: "text",
        multiline: true,
        required: true
    }),
    issuedDate: (disabled) => ({
        disabled: disabled,
        title: "Дата выдачи",
        name: "passportData.issuedDate",
        className: "input66",
        type: "text",
        required: true
    }),
    residencePlace: (disabled) => ({
        disabled: disabled,
        title: "Адрес прописки",
        name: "passportData.residencePlace",
        className: "input100",
        type: "text",
        required: true
    }),
    address: (disabled) => ({
        disabled: disabled,
        title: "Адрес",
        name: "address",
        type: "address",
        className: "input100"
    }),
    objectArea: (disabled) => ({
        disabled: disabled,
        title: "Площадь(м2)",
        name: "objectArea",
        className: "input33",
        type: "text",
        mask: "number"
    }),
    bathroom: (disabled) => ({
        disabled: disabled,
        title: "Кол-во сан.узлов",
        name: "bathroom",
        className: "input33",
        type: "text",
        mask: "number"
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
    balconies: (disabled) => ({
        disabled: disabled,
        name: "balconies",
        type: "fieldArray",
        items: [
            {
                disabled: disabled,
                title: "Площадь балкона",
                name: "balconyArea",
                className: "input33",
                type: "text",
                mask: "number",
                required: true
            },
            {
                disabled: disabled,
                title: "Вид балкона",
                name: "balconyType",
                className: "input33",
                type: "select",
                required: true,
                items: [
                    { value: "Стандартный", text: "Стандартный" },
                    { value: "Балкон панорамный", text: "Балкон панорамный" },
                    { value: "Французский балкон", text: "Французский балкон" }
                ]
            },
            {
                disabled: disabled,
                title: "Материал балкона",
                name: "balconyMaterial",
                className: "input33",
                type: "select",
                required: true,
                items: [
                    { value: "Дерево", text: "Дерево" },
                    { value: "Пластик", text: "Пластик" }
                ]
            }
        ]
    }),
    windows: (disabled) => ({
        disabled: disabled,
        name: "windows",
        type: "fieldArray",
        items: [
            {
                disabled: disabled,
                title: "Количество окон",
                name: "windowNumber",
                className: "input33",
                type: "text",
                mask: "number",
                required: false
            },
            {
                disabled: disabled,
                title: "Вид окна",
                name: "windowType",
                className: "input33",
                type: "select",
                required: false,
                items: [
                    { value: "Входная группа", text: "Входная группа" },
                    {
                        value: "Одностворчатое (классическое 1300*800мм)",
                        text: "Одностворчатое (классическое 1300*800мм)"
                    },
                    {
                        value: "Двухстворчатое (классическое 1300*1400мм)",
                        text: "Двухстворчатое (классическое 1300*1400мм)"
                    },
                    {
                        value: "Трехстворчатое окно (классическое 2040*1400мм)",
                        text: "Трехстворчатое окно (классическое 2040*1400мм)"
                    },
                    {
                        value: "Трехстворчатое окно (классическое 2040*2040мм)",
                        text: "Трехстворчатое окно (классическое 2040*2040мм)"
                    },
                    { value: "Т-образное двухстворчатое", text: "Т-образное двухстворчатое" },
                    { value: "Т-образное трёхстворчатое", text: "Т-образное трёхстворчатое" },
                    {
                        value: "Панорамное (с одной стороны)",
                        text: "Панорамное окно (с одной стороны)"
                    }
                ]
            },
            {
                disabled: disabled,
                title: "Материал окна",
                name: "windowMaterial",
                className: "input33",
                type: "select",
                required: false,
                items: [
                    { value: "Дерево", text: "Дерево" },
                    { value: "Пластик", text: "Пластик" }
                ]
            }
        ]
    }),
    comment: (disabled) => ({
        disabled: disabled,
        title: "Комментарий",
        name: "comment",
        className: "input100",
        type: "text",
        multiline: true,
        required: false
    }),
    services: (disabled, serviceType) => ({
        disabled: disabled,
        title: "Выполняемые работы",
        className: "primaryServices",
        buttonCaption: "Помещение не убирается",
        placeholderIn: "Закрыть таблицу",
        placeholderOut: "Открыть таблицу",
        type: "table",
        name: "services",
        template: SERVICES[serviceTypes(serviceType)] || SERVICES.luxe,
        validate: (v) => v.length > 0,
        custom: "Добавить помещение",
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
            }
        ]
    }),
    cleaningDuration: (disabled) => ({
        disabled: disabled,
        title: "Продолжительность",
        name: "cleaningDuration",
        className: "input33",
        type: "text"
    }),
    cost: (disabled) => ({
        disabled: disabled,
        title: "Стоимость",
        name: "cost",
        className: "input33",
        type: "text",
        mask: "number"
    }),
    discount: (disabled) => ({
        disabled: disabled,
        title: "Скидка",
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
    prepaymentType: (disabled) => ({
        disabled: disabled,
        title: "Тип предоплаты",
        name: "prepaymentType",
        className: "input50",
        type: "select",
        items: [
            {
                value: "Без предоплаты",
                text: "Без предоплаты"
            },
            {
                value: "На объекте",
                text: "На объекте"
            },
            {
                value: "Внесена",
                text: "Внесена"
            },
            {
                value: "Бронирование даты",
                text: "Бронирование даты"
            },
            {
                value: "Выезд на осмотр",
                text: "Выезд на осмотр"
            }
        ]
    }),
    prepaymentSelect: (disabled) => ({
        disabled: disabled,
        title: "Предоплата(%)",
        name: "prepayment",
        className: "input100",
        type: "select",
        required: true,
        items: [
            { value: 0, text: "0%" },
            { value: 10, text: "10%" },
            { value: 20, text: "20%" },
            { value: 30, text: "30%" },
            { value: 40, text: "40%" },
            { value: 50, text: "50%" },
            { value: 60, text: "60%" },
            { value: 70, text: "70%" },
            { value: 80, text: "80%" },
            { value: 90, text: "90%" },
            { value: 100, text: "100%" }
        ]
    }),
    prepaymentText: (disabled) => ({
        disabled: disabled,
        title: "Предоплата(₽)",
        name: "prepayment",
        className: "input100",
        type: "text",
        required: true
    }),
    attractionSource: (disabled) => ({
        disabled: disabled,
        title: "Источник",
        name: "attractionSource",
        className: "input50",
        type: "select",
        items: [
            { value: "Контекстная реклама (Google)", text: "Контекстная реклама (Google)" },
            { value: "Контекстная реклама (Yandex)", text: "Контекстная реклама (Yandex)" },
            { value: "SEO (сайт)", text: "SEO (сайт)" },
            {
                value: "Таргетированная реклама (Instagram)",
                text: "Таргетированная реклама (Instagram)"
            },
            { value: "What`sapp", text: "What`sapp" },
            { value: "Тендер", text: "Тендер" },
            { value: "Наша база", text: "Наша база" },
            { value: "Холодная база", text: "Холодная база" },
            { value: "Instagram", text: "Instagram" },
            { value: "Реклама на машине", text: "Реклама на машине" },
            { value: "Рамочный договор", text: "Рамочный договор" },
            { value: "Объект из ППО", text: "Объект из ППО" },
            { value: "Листовки/Буклеты/Визитки", text: "Листовки/Буклеты/Визитки" },
            { value: "Почта (office)", text: "Почта (office)" },
            { value: "Постоянный клиент", text: "Постоянный клиент" },
            { value: "от Партнеров", text: "от Партнеров" },
            { value: "Рекомендации", text: "Рекомендации" },
            { value: "Абонемент", text: "Абонемент" }
        ]
    }),
    sourceTypeSelect: (disabled) => ({
        disabled: disabled,
        title: "Способ контакта",
        name: "sourceType",
        className: "input50",
        type: "select",
        items: [
            { value: "-", text: "-" },
            { value: "Входящий звонок", text: "Входящий звонок" },
            { value: "Заявка", text: "Заявка" },
            { value: "Переписка", text: "Переписка" },
            { value: "Перевод на звонок", text: "Перевод на звонок" },
            { value: "Обзвон", text: "Обзвон" },
            { value: "Перевод на Звонок", text: "Перевод на Звонок" },
            { value: "Блогер", text: "Блогер" },
            { value: "Рассылка", text: "Рассылка" },
            { value: "Повторный заказ (Клиент)", text: "Повторный заказ (Клиент)" }
        ]
    }),
    sourceTypeText: (disabled) => ({
        disabled: disabled,
        title: "Тип источника",
        name: "sourceType",
        className: "input50",
        type: "text"
    }),
    crmLink: (disabled) => ({
        disabled: disabled,
        title: "Ссылка на ЦРМ",
        name: "crmLink",
        className: "input33",
        type: "text"
    }),
    photosObject: (disabled) => ({
        disabled: disabled,
        name: "photosObject",
        title: "Фото объекта",
        max: 150,
        type: "documentList",
        button: "Загрузить фото"
    })
}
