import { SERVICES } from "../util/templates"
import { serviceTypes } from "../util/types"

export const inputs = {
    orderCreator: (disabled) => ({
        title: "Заявку создал",
        name: "orderCreator",
        className: "input50",
        disabled: true,
        type: "user"
    }),
    orderCreatedAt: (disabled) => ({
        title: "Дата создания",
        name: "orderCreatedAt",
        className: "input50",
        singleDate: true,
        disabled: true,
        type: "date"
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
    clientFullname: (disabled, required) => ({
        disabled: disabled,
        title: "Имя",
        name: "clientFullname",
        className: "input50",
        type: "text",
        required: required !== false
    }),
    clientPhone: (disabled) => ({
        disabled: disabled,
        title: "Телефон",
        name: "clientPhone",
        className: "input50",
        type: "text",
        mask: "+7(999)999-99-99"
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
    buildingType: (disabled) => ({
        disabled: disabled,
        title: "Тип объекта",
        name: "buildingType",
        className: "input50 input_objectType",
        type: "select",
        items: [
            { value: "Квартира", text: "Квартира" },
            { value: "Коттедж", text: "Коттедж" },
            { value: "Коммерческий объект", text: "Коммерческий объект" },
            { value: "Проектный объект", text: "Проектный объект" }
        ]
    }),
    buildingClass: (disabled) => ({
        disabled: disabled,
        title: "Объект",
        name: "buildingClass",
        className: "input50",
        type: "select",
        items: {
            flat: [
                { value: "студия", text: "студия" },
                { value: "1к.", text: "1к." },
                { value: "евро2", text: "евро2" },
                { value: "2к.", text: "2к." },
                { value: "евро3", text: "евро3" },
                { value: "3к.", text: "3к." },
                { value: "4к.", text: "4к." },
                { value: "5к.", text: "5к." },
                { value: "свыше 5к.", text: "свыше 5к." },
                { value: "этажная", text: "этажная" }
            ],
            cottage: [{ value: "Коттедж/Дом/Таунхаус", text: "Коттедж/Дом/Таунхаус" }],
            commercial: [
                { value: "Авто/ЖД вокзалы", text: "Авто/ЖД вокзалы" },
                { value: "Автостоянки(паркинг)", text: "Автостоянки(паркинг)" },
                { value: "АЗС/АГНКС", text: "АЗС/АГНКС" },
                { value: "Аптека", text: "Аптека" },
                { value: "Арендатор", text: "Арендатор" },
                { value: "Аэропорт", text: "Аэропорт" },
                { value: "Бани/Сауны", text: "Бани/Сауны" },
                {
                    value: "Банкетные залы/площадки для мероприятий",
                    text: "Банкетные залы/площадки для мероприятий"
                },
                { value: "Банки", text: "Банки" },
                { value: "Бассейн", text: "Бассейн" },
                { value: "Батутный центр", text: "Батутный центр" },
                { value: "Бизнес центр/Деловой центр", text: "Бизнес центр/Деловой центр" },
                { value: "Больница/Клиника/Стоматология", text: "Больница/Клиника/Стоматология" },
                {
                    value: "Военные объекты/Объекты силовых ведоств",
                    text: "Военные объекты/Объекты силовых ведоств"
                },
                { value: "Гипермаркет", text: "Гипермаркет" },
                { value: "Гольфклубы", text: "Гольфклубы" },
                { value: "Гостиница/отель/хостел", text: "Гостиница/отель/хостел" },
                { value: "Государтсвенное учреждение", text: "Государтсвенное учреждение" },
                {
                    value: "Детский сад/детский центр/частные образовательные учреждения",
                    text: "Детский сад/детский центр/частные образовательные учреждения"
                },
                { value: "Диллерский центр", text: "Диллерский центр" },
                { value: "Кинотеатр", text: "Кинотеатр" },
                { value: "Клубы/кальянные/бары", text: "Клубы/кальянные/бары" },
                { value: "Кондитерские", text: "Кондитерские" },
                { value: "Лаборатории", text: "Лаборатории" },
                { value: "Логистические центры", text: "Логистические центры" },
                { value: "Магазин", text: "Магазин" },
                { value: "Мастерские столярные и т.п.", text: "Мастерские столярные и т.п." },
                { value: "Музей/филармония/капелла/театр", text: "Музей/филармония/капелла/театр" },
                { value: "НИИ", text: "НИИ" },
                { value: "Общепит/кафе/ресторан", text: "Общепит/кафе/ресторан" },
                { value: "Офисные помещения (В БЦ)", text: "Офисные помещения (В БЦ)" },
                {
                    value: "Офисные помещения (Отдельностоящие)",
                    text: "Офисные помещения (Отдельностоящие)"
                },
                { value: "Пищевые комбинаты", text: "Пищевые комбинаты" },
                { value: "Прачечные", text: "Прачечные" },
                { value: "Предприятия по фасовке", text: "Предприятия по фасовке" },
                {
                    value: "Производствоственные помещения/Завод/Фабрика/Цех",
                    text: "Производствоственные помещения/Завод/Фабрика/Цех"
                },
                { value: "Салон красоты/Барбершоп", text: "Салон красоты/Барбершоп" },
                {
                    value: "Санаторий/база отдыха/пансионат",
                    text: "Санаторий/база отдыха/пансионат"
                },
                { value: "Сетевой ресторан/общепит", text: "Сетевой ресторан/общепит" },
                { value: "Сетевые магазины", text: "Сетевые магазины" },
                {
                    value: "Сетевые мед. центры/стомоталогии",
                    text: "Сетевые мед. центры/стомоталогии"
                },
                { value: "Сетевые спортклубы", text: "Сетевые спортклубы" },
                { value: "Сетевые СТО", text: "Сетевые СТО" },
                { value: "Складские помещения", text: "Складские помещения" },
                { value: "Спа комплекс/аквапарки", text: "Спа комплекс/аквапарки" },
                {
                    value: "Спортивный центр/спортклуб/стадион",
                    text: "Спортивный центр/спортклуб/стадион"
                },
                {
                    value: "Станции технического обслуживания (СТО)",
                    text: "Станции технического обслуживания (СТО)"
                },
                { value: "Стройплощадка/стройка", text: "Стройплощадка/стройка" },
                { value: "Студии частного мастерства", text: "Студии частного мастерства" },
                {
                    value: "Типографии/Предприятия печатного производства",
                    text: "Типографии/Предприятия печатного производства"
                },
                { value: "Торговый центр/ТРЦ", text: "Торговый центр/ТРЦ" },
                {
                    value: "Транспорт (автобусы, автомобили, фургоны, вагоны, самолеты)",
                    text: "Транспорт (автобусы, автомобили, фургоны, вагоны, самолеты)"
                },
                { value: "Университет/Школа", text: "Университет/Школа" },
                { value: "Управляющие компании/ЖКХ", text: "Управляющие компании/ЖКХ" },
                { value: "Церковь/Монастырь", text: "Церковь/Монастырь" },
                { value: "Яхты,корабль", text: "Яхты,корабль" }
            ]
        }
    }),
    counterparty: (disabled) => ({
        disabled: disabled,
        title: "Контрагент",
        name: "counterparty",
        className: "input50",
        type: "select",
        items: [
            { value: "Физ. лицо", text: "Физ. лицо" },
            { value: "Юр. лицо", text: "Юр. лицо" }
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
    cleaningDuration: (disabled) => ({
        disabled: disabled,
        title: "Продолжительность",
        name: "cleaningDuration",
        className: "input33",
        type: "text"
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
    responsibleManagerText: (disabled) => ({
        disabled: disabled,
        title: "Ответственный менеджер",
        name: "responsibleManager",
        className: "input50",
        type: "text"
    }),
    responsibleManagerPhone: (disabled) => ({
        disabled: disabled,
        title: "Телефон менеджера",
        name: "responsibleManagerPhone",
        className: "input50",
        type: "text"
    }),
    photosObject: (disabled) => ({
        disabled: disabled,
        name: "photosObject",
        title: "Фото объекта",
        max: 150,
        type: "documentList",
        button: "Загрузить фото"
    }),

    //Осмотр/расчет
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
    }),

    //SELLING
    totalCost: (disabled) => ({
        disabled: disabled,
        title: "Стоимость",
        name: "totalCost",
        className: "input50",
        type: "text"
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
    paymentType: (disabled) => ({
        disabled: disabled,
        title: "Тип оплаты",
        name: "paymentType",
        className: "input50",
        type: "select",
        items: [
            {
                value: "р/c (НДС)",
                text: "р/c (НДС)"
            },
            {
                value: "р/c (без НДС)",
                text: "р/c (без НДС)"
            },
            {
                value: "Наличные",
                text: "Наличные"
            }
        ]
    }),
    soldAt: (disabled) => ({
        disabled: disabled,
        title: "Продал",
        name: "soldAt",
        className: "input50 input_inspectManager",
        type: "user",
        role: "OPERATOR"
    }),

    kp: (disabled) => ({
        disabled: disabled,
        name: "kp",
        title: "КП",
        type: "document",
        button: "Добавить КП",
        fileType: "kp",
        fileRules: { write: true, read: true }
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
    cleaningNote: (disabled) => ({
        disabled: disabled,
        title: "Примечание к уборке",
        name: "cleaningNote",
        className: "input100",
        type: "text"
    }),

    //Уборка
    foreman: (disabled) => ({
        disabled: disabled,
        title: "Бригадир",
        name: "foreman",
        type: "user",
        role: "FOREMAN"
    }),
    teamSection: (disabled) => ({
        disabled: disabled,
        name: "nzTeam",
        className: "input50",
        type: "statusButton",
        section: {
            title: "Бригада",
            name: "nzTeam",
            inputs: [
                {
                    className: "td20",
                    name: "personnelId",
                    title: "Сотрудник",
                    default: "",
                    placeholder: "Укажите сотрудника",
                    type: "select",
                    required: true
                },
                {
                    className: "td15",
                    name: "jobPosition",
                    title: "Должность",
                    default: "",
                    placeholder: "Введите должность",
                    required: true
                },
                {
                    className: "td15",
                    name: "salary",
                    title: "Ставка",
                    default: "",
                    placeholder: "Введите ставку",
                    required: true
                },
                {
                    className: "td15",
                    name: "addSalary",
                    title: "Доп. ставка",
                    default: 0,
                    placeholder: "0",
                    required: false
                },
                {
                    name: "note",
                    title: "Примечание",
                    default: "",
                    placeholder: "Напишите примечание"
                }
            ]
        }
    }),
    toolsManager: (disabled) => ({
        disabled: disabled,
        title: "Менеджер АХО",
        name: "toolsManager",
        className: "input60",
        type: "user",
        role: "TOOLS_MANAGER"
    }),

    toolsSection: (toolsItems, toolsTemplate) => {
        return {
            title: "Инвентарь",
            buttonCaption: "Инвентарь не используется",
            name: "nzTools",
            placeholderIn: "Закрыть таблицу",
            placeholderOut: "Открыть таблицу",
            template: toolsTemplate,
            custom: "Добавить инвентарь",
            sections: [
                { name: "chemistry", title: "Химия" },
                { name: "consumables", title: "Расходники" },
                { name: "inventory", title: "Инвентарь" },
                { name: "overall", title: "Спец.одежда/СИЗ" },
                { name: "equipment", title: "Оборудование" }
            ],
            inputs: [
                {
                    name: "id",
                    title: "Наименование",
                    placeholder: "Укажите наименование инвентаря",
                    default: "",
                    required: true,
                    type: "select",
                    items: toolsItems
                },
                {
                    name: "measure",
                    title: "Ед. измерения",
                    placeholder: "",
                    default: "",
                    className: "td10"
                },
                {
                    name: "out",
                    title: "Выдано",
                    placeholder: "0",
                    default: "",
                    validate: (input) => input !== 0 && input !== "0",
                    className: "td20"
                }
            ]
        }
    },
    scheduleSection: (personnelItems) => {
        return {
            title: "Расписание сотрудников",
            buttonCaption: "Расписание не используется",
            name: "daySchedules",
            placeholderIn: "Закрыть таблицу",
            placeholderOut: "Открыть таблицу",
            sections: [
                { name: "cleaners", title: "Клинеры" },
                { name: "foremans", title: "Бригадиры" }
            ],
            inputs: [
                {
                    name: "id",
                    title: "Имя сотрудника",
                    placeholder: "Укажите сотрудника",
                    default: "",
                    required: true,
                    type: "select",
                    items: personnelItems
                },
                {
                    name: "status",
                    title: "Статус",
                    placeholder: "Укажите рабочий статус",
                    default: "",
                    required: true,
                    type: "select",
                    items: {
                        cleaners: [
                            { value: "WORKING", text: "Работает" },
                            { value: "NOT_WORKING", text: "Не работает" }
                        ],
                        foremans: [
                            { value: "WORKING", text: "Работает" },
                            { value: "NOT_WORKING", text: "Не работает" }
                        ]
                    }
                }
            ]
        }
    },

    nzTask: (disabled, caption) => ({
        disabled: disabled,
        name: "nzTask",
        title: "Наряд заказ",
        type: "inputNZ",
        caption: caption || "Заполнить наряд заказ"
    }),
    nzTeam: (disabled) => ({
        disabled: disabled,
        name: "nzTeam",
        title: "Наряд заказ",
        type: "inputNZ",
        caption: "Собрать бригаду"
    }),
    nzTools: (disabled) => ({
        disabled: disabled,
        name: "nzTools",
        title: "Наряд заказ",
        type: "inputNZ",
        caption: "Добавить инвентарь"
    }),
    cleaningResult: (disabled) => ({
        disabled: disabled,
        title: "Результат уборки",
        name: "cleaningResult",
        className: "input100",
        type: "text"
    }),
    nzTaskDate: (disabled) => ({
        disabled: disabled,
        title: "Дата отчета",
        name: "nzTaskDate",
        className: "input100",
        singleDate: true,
        type: "date"
    }),
    cleaningTask: (disabled) => ({
        disabled: disabled,
        title: "Задача (ЦУ для выполнения работ)",
        name: "cleaningTask",
        className: "input100",
        type: "text",
        multiline: true
    }),
    routeStatus: (disabled) => ({
        disabled: disabled,
        title: "Маршрут",
        name: "routeStatus",
        className: "input100",
        type: "checkboxGroup",
        required: false,
        items: [
            {
                name: "oneway",
                value: "Туда",
                caption: "Туда"
            },
            {
                name: "backway",
                value: "Обратно",
                caption: "Обратно"
            }
        ]
    }),
    documentsStatus: (disabled) => ({
        disabled: disabled,
        title: "Документы",
        name: "documentsStatus",
        className: "input100",
        type: "checkboxGroup",
        required: false,
        items: [
            {
                name: "UPD",
                caption: "Акт(УПД)"
            },
            {
                name: "contract",
                caption: "Договор"
            },
            {
                name: "register",
                caption: "Опись"
            },
            {
                name: "checkList",
                caption: "Чек-лист/Буклет"
            },
            {
                name: "account",
                caption: "Счёт(чек)"
            },
            {
                name: "gift",
                caption: "Подарок"
            }
        ]
    }),
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

    nzFront: (disabled) => ({
        disabled: disabled,
        name: "nzFront",
        title: "Наряд заказ",
        type: "document",
        button: "Загрузить Наряд заказ",
        fileType: "nz",
        fileRules: { write: true, read: true }
    }),

    //Отчет бригадира
    clientConfirmationInfo: (disabled, controlled) => ({
        disabled: !controlled,
        type: "fieldArray",
        name: "clientConfirmationInfo",
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

    reportDate: (disabled) => ({
        disabled: disabled,
        title: "Дата отчета",
        name: "reportDate",
        className: "input33",
        singleDate: true,
        type: "date"
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
    contractPhoto: (disabled) => ({
        disabled: disabled,
        name: "contractPhoto",
        title: "Фото подписанного договора",
        type: "document",
        button: "Загрузить фото",
        fileType: "jpg",
        accept: "image/*;capture=camera"
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
    additionalServicesPhotos: (disabled) => ({
        disabled: disabled,
        name: "additionalServicesPhotos",
        title: "Фотографии загрязнений",
        max: 150,
        type: "documentList",
        button: "Загрузить фото",
        required: true
    }),
    addContractPhoto: (disabled) => ({
        disabled: disabled,
        name: "addContractPhoto",
        title: "Фото договора доп.услуг",
        type: "document",
        button: "Загрузить фото",
        fileType: "jpg",
        accept: "image/*;capture=camera"
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
    workEnding: (disabled) => ({
        disabled: disabled,
        name: "workEnding",
        title: "Окончание работ",
        type: "document",
        button: "Загрузить фото",
        fileType: "jpg",
        accept: "image/*;capture=camera"
    }),

    foremanComment: (disabled) => ({
        disabled: disabled,
        name: "foremanComment",
        title: "Комментарий по работе на объекте",
        type: "text",
        multiline: true
    }),
    actualServices: (disabled) => ({
        disabled: disabled,
        title: "Выполняемые услуги",
        className: "actualServices",
        placeholderIn: "Закрыть таблицу",
        placeholderOut: "Открыть таблицу",
        type: "table",
        name: "actualServices",
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
                name: "status",
                type: "checkboxSelector",
                title: "Статус сверки",
                default: null,
                className: "table__td_25",
                validate: (value) => value !== null,
                placeholder: "Не выбрано",
                items: [
                    {
                        value: true,
                        text: "Подтверждено"
                    },
                    {
                        value: false,
                        text: "Не требуется"
                    }
                ]
            }
        ]
    }),

    additionalServices: (disabled, stageCheck) => ({
        disabled: disabled,
        title: "Дополнительные услуги",
        className: "additionalServices",
        placeholderIn: "Закрыть таблицу",
        placeholderOut: "Открыть таблицу",
        type: "table",
        name: "additionalServices",
        custom: stageCheck && "Добавить помещение",
        sections: [
            { name: "glasses", title: "Окна" },
            { name: "balcony", title: "Балкон" },
            { name: "rooms", title: "Комната" },
            { name: "kitchen", title: "Кухня" },
            { name: "bath", title: "Санузел" }
        ],
        inputs: !stageCheck
            ? [
                  {
                      name: "name",
                      title: "Наименование работ",
                      default: "",
                      multiline: true,
                      required: true
                  },
                  {
                      name: "amount",
                      title: "Сумма",
                      default: 0,
                      className: "table__td_25",
                      required: false
                  },
                  {
                      name: "status",
                      type: "checkboxSelector",
                      title: "Статус сверки",
                      default: null,
                      className: "table__td_25",
                      validate: (value) => value !== null,
                      placeholder: "Не выбрано",
                      items: [
                          {
                              value: true,
                              text: "Подтверждено"
                          },
                          {
                              value: false,
                              text: "Не требуется"
                          }
                      ]
                  }
              ]
            : [
                  {
                      name: "name",
                      title: "Наименование работ",
                      default: "",
                      multiline: true,
                      required: true
                  },
                  {
                      name: "amount",
                      title: "Сумма",
                      default: 0,
                      className: "table__td_25",
                      required: false
                  }
              ]
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
    nzBack: (disabled) => ({
        disabled: disabled,
        name: "nzBack",
        title: "Наряд заказ(результат)",
        type: "document",
        button: "Загрузить документ",
        fileType: "pdf"
    }),

    //Оцнка менеджера АХО

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
    }),
    toolsComment: (disabled) => ({
        disabled: disabled,
        name: "toolsComment",
        title: "Комментарий по приему ТМЦ на склад",
        type: "text",
        multiline: true
    }),

    //Проверка менеджера
    orderManagerComment: (disabled) => ({
        disabled: disabled,
        name: "orderManagerComment",
        title: "Комментарий Мобильного менеджера",
        type: "text",
        multiline: true
    }),

    //EXPANSES
    supposedExpansesTitle: (disabled) => ({
        disabled: disabled,
        type: "title",
        title: "Предполагаемые расходы"
    }),
    employeesSalary: (disabled) => ({
        disabled: disabled,
        title: "Работники(ФОТ)",
        name: "employeesSalary",
        className: "input20",
        type: "text",
        mask: "number"
    }),
    consumables: (disabled) => ({
        disabled: disabled,
        title: "Расходники",
        name: "consumables",
        className: "input20",
        type: "text",
        mask: "number"
    }),
    cleanerNumber: (disabled) => ({
        disabled: disabled,
        title: "Кол-во клинеров",
        name: "cleanerNumber",
        className: "input20",
        type: "text",
        mask: "number"
    }),
    durationCleaningTime: (disabled) => ({
        disabled: disabled,
        title: "Время(ч)",
        name: "durationCleaningTime",
        className: "input20",
        type: "text",
        mask: "number"
    }),
    actualTitle: () => ({
        type: "title",
        title: "Фактические данные"
    }),
    actualExpansesTitle: (disabled) => ({
        disabled: disabled,
        type: "title",
        title: "Фактические расходы"
    }),
    actualCost: (disabled) => ({
        disabled: disabled,
        title: "Стоимость",
        name: "actualCost",
        className: "input20",
        type: "text",
        mask: "number"
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
    actualEmployeesSalary: (disabled) => ({
        disabled: disabled,
        title: "Работники(ФОТ)",
        name: "actualEmployeesSalary",
        className: "input20",
        type: "text",
        mask: "number"
    }),
    actualConsumables: (disabled) => ({
        disabled: disabled,
        title: "Расходники",
        name: "actualConsumables",
        className: "input20",
        type: "text"
    }),
    documentsReturn: (disabled) => ({
        disabled: disabled,
        title: "Возврат документов",
        name: "documentsReturn",
        className: "input100",
        type: "checkboxGroup",
        required: false,
        items: [
            {
                name: "UPD",
                caption: "Акт(УПД)"
            },
            {
                name: "contract",
                caption: "Договор"
            }
        ]
    }),
    actualTeam: (disabled) => {
        const inputs = [
            {
                className: "td25",
                name: "personnelId",
                title: "Сотрудник",
                default: "",
                placeholder: "Укажите сотрудника",
                type: "select",
                required: true
            },
            {
                className: "td10",
                name: "jobPosition",
                title: "Должность",
                default: "",
                multiline: true,
                placeholder: "Введите должность",
                required: true
            },
            {
                className: "td7",
                name: "salary",
                title: "Ставка",
                default: 0,
                mask: "number",
                placeholder: "Введите ставку",
                required: true
            },
            {
                className: "td7",
                name: "addSalary",
                title: "Доп. выплата",
                default: 0,
                mask: "number",
                placeholder: "0",
                required: false
            },
            {
                name: "status",
                className: "td15",
                title: "Статус работы",
                default: "WORKING",
                placeholder: "Выберите стутус",
                type: "select",
                items: [
                    {
                        value: "WORKING",
                        text: "Работает"
                    },
                    {
                        value: "NOT_WORKING",
                        text: "Не работает"
                    }
                ]
            },
            {
                className: "td7",
                name: "rate",
                title: "Оценка",
                default: "",
                type: "select",
                items: [
                    {
                        value: 0,
                        text: "-"
                    },
                    {
                        value: 1,
                        text: "1"
                    },
                    {
                        value: 2,
                        text: "2"
                    },
                    {
                        value: 3,
                        text: "3"
                    },
                    {
                        value: 4,
                        text: "4"
                    },
                    {
                        value: 5,
                        text: "5"
                    }
                ],
                required: true,
                placeholder: "1-5"
            },
            {
                name: "comment",
                title: "Комментарий",
                default: "",
                multiline: true,
                placeholder: "Напишите комментарий",
                required: true
            }
        ]
        return {
            disabled: disabled,
            name: "actualTeam",
            type: "personnel",
            title: "Бригада",
            inputs: inputs
        }
    },
    actualCleanerNumber: (disabled) => ({
        disabled: disabled,
        title: "Кол-во клинеров",
        name: "actualCleanerNumber",
        className: "input20",
        type: "text"
    }),
    actualDurationCleaningTime: (disabled) => ({
        disabled: disabled,
        title: "Время(ч)",
        name: "actualDurationCleaningTime",
        className: "input20",
        type: "text",
        mask: "number"
    }),
    actualObjectArea: (disabled) => ({
        disabled: disabled,
        title: "Квадратура(м2)",
        name: "actualObjectArea",
        className: "input20",
        type: "text",
        mask: "number"
    }),
    actualTools: (disabled, toolsItems) => {
        return {
            title: "Инвентарь",
            buttonCaption: "Инвентарь не используется",
            name: "actualTools",
            type: "tools",
            placeholderIn: "Закрыть таблицу",
            placeholderOut: "Открыть таблицу",
            disabled: disabled,
            toolbar: false,
            sections: [
                { name: "chemistry", title: "Химия" },
                { name: "consumables", title: "Расходники" },
                { name: "inventory", title: "Инвентарь" },
                { name: "overall", title: "Спец.одежда/СИЗ" },
                { name: "equipment", title: "Оборудование" }
            ],
            inputs: [
                {
                    name: "id",
                    title: "Наименование",
                    placeholder: "Укажите наименование инвентаря",
                    default: "",
                    required: true,
                    type: "select",
                    items: toolsItems,
                    disabled: true
                },
                {
                    name: "out",
                    title: "Взято",
                    placeholder: "0",
                    default: "",
                    validate: (input) => input !== 0 && input !== "0",
                    className: "td20",
                    mask: "number",
                    disabled: true
                },
                {
                    name: "in",
                    title: "Вернулось",
                    placeholder: "0",
                    default: "",
                    mask: "number",
                    required: true,
                    className: "td20"
                }
            ]
        }
    },
    logisticTitle: () => ({
        type: "title",
        title: "Расходы на логистику"
    }),

    logisticExpansesTaxiRouteThere: (disabled) => ({
        disabled: disabled,
        title: "Такси туда",
        name: "logisticExpansesTaxiRouteThere",
        className: "input20",
        type: "text",
        mask: "number"
    }),
    logisticExpansesTaxiRouteBack: (disabled) => ({
        disabled: disabled,
        title: "Такси обратно",
        name: "logisticExpansesTaxiRouteBack",
        className: "input20",
        type: "text",
        mask: "number"
    }),
    logisticExpansesPetrolRoute: (disabled) => ({
        disabled: disabled,
        title: "Бензин",
        name: "logisticExpansesPetrolRoute",
        className: "input20",
        type: "text",
        mask: "number"
    }),
    rentTMC: (disabled) => ({
        disabled: disabled,
        title: "Аренда ТМЦ",
        name: "rentTMC",
        className: "input20",
        type: "text"
    }),
    contractWork: (disabled) => ({
        disabled: disabled,
        title: "Подрядные раб.",
        name: "contractWork",
        className: "input20",
        type: "text"
    }),
    actualExpansesTaxiThere: (disabled) => ({
        disabled: disabled,
        title: "Расходы на такси туда",
        name: "actualExpansesTaxiThere",
        className: "input20",
        type: "text"
    }),
    actualExpansesTaxiBack: (disabled) => ({
        disabled: disabled,
        title: "Расходы на такси обратно",
        name: "actualExpansesTaxiBack",
        className: "input20",
        type: "text"
    }),
    actualExpansesPetrol: (disabled) => ({
        disabled: disabled,
        title: "Расходы на бензин",
        name: "actualExpansesPetrol",
        className: "input20",
        type: "text"
    }),
    actualRentTMC: (disabled) => ({
        disabled: disabled,
        title: "Аренда ТМЦ",
        name: "actualRentTMC",
        className: "input20",
        type: "text"
    }),
    actualContractWork: (disabled) => ({
        disabled: disabled,
        title: "Подрядные раб.",
        name: "actualContractWork",
        className: "input20",
        type: "text"
    }),
    tax: (disabled) => ({
        disabled: disabled,
        title: "Налог",
        name: "tax",
        className: "input33",
        type: "text"
    }),
    proceeds: () => ({
        title: "Выручка",
        name: "proceeds",
        className: "input33",
        type: "text",
        mask: "number"
    }),
    marginality: () => ({
        title: "Маржа",
        name: "marginality",
        className: "input33",
        type: "text",
        mask: "number",
        disabled: true
    }),
    grossProfit: () => ({
        title: "Валовая прибыль",
        name: "grossProfit",
        className: "input33",
        type: "text",
        mask: "number",
        disabled: true
    }),
    cleaningExpansesInfo: (disabled) => {
        return {
            title: "Расходы по уборке",
            name: "chiefReport.cleaningExpansesInfo",
            type: "table",
            placeholderIn: "Закрыть таблицу",
            placeholderOut: "Открыть таблицу",
            disabled: disabled,
            sections: [
                { name: "object", title: "Объект" },
                { name: "logistic", title: "Логистика" }
            ],
            inputs: [
                {
                    name: "name",
                    title: "Наименование",
                    placeholder: "Укажите наименование",
                    default: "",
                    type: "text",
                    required: false,
                    disabled: true
                },
                {
                    name: "prediction",
                    title: "Предположение",
                    placeholder: "0",
                    default: "",
                    className: "td20",
                    required: false,
                    disabled: true
                },
                {
                    name: "fact",
                    title: "Факт",
                    placeholder: "0",
                    default: "",
                    required: false,
                    className: "td20",
                    disabled: true
                }
            ]
        }
    },
    chiefComment: (disabled) => ({
        disabled: disabled,
        title: "Комментарий руководителя",
        name: "chiefComment",
        className: "input100",
        type: "text"
    }),

    //Контроль качества
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
    recleaning: (disabled) => ({
        disabled: disabled,
        title: "Повторная уборка",
        name: "recleaning",
        className: "input50",
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
    }),

    //ORDER_MANAGER_ORDER_CLOSING
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
    }),

    //OPERATOR_ORDER_CLOSING
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
    }),

    //Chief Report
    chiefExpansesReport: (disabled) => ({
        type: "reportTable",
        disabled: disabled,
        name: "chiefExpansesReport",
        table1: {
            caption: "Информация по объекту",
            th: ["Наименование", "План"],
            name: "object"
        },
        table2: {
            caption: "Денежные данные",
            th: ["Наименование", "План", "Факт", "Экономия/перерасход"],
            name: "expanses"
        }
    }),

    //КПО
    permitRegime: (disabled) => ({
        disabled: disabled,
        title: "Пропускной режим",
        name: "permitRegime",
        className: "input100",
        type: "select",
        items: [
            { value: "Да", text: "Да" },
            { value: "Нет", text: "Нет" }
        ]
    }),
    personnelRequirements: (disabled) => ({
        disabled: disabled,
        title: "Требования к линейному персоналу(ЛП)",
        name: "personnelRequirements",
        className: "input100",
        type: "text"
    }),
    cleaningSchedule: (disabled) => ({
        disabled: disabled,
        title: "График работ",
        name: "cleaningSchedule",
        className: "input50",
        type: "text"
    }),
    targetDate: (disabled) => ({
        disabled: disabled,
        title: "Сроки выполнения",
        name: "targetDate",
        className: "input50",
        type: "text"
    }),
    tender: (disabled) => ({
        disabled: disabled,
        title: "Тендер",
        name: "tender",
        className: "input20",
        type: "select",
        items: [
            { value: "Да", text: "Да" },
            { value: "Нет", text: "Нет" }
        ]
    }),
    technicalTask: (disabled) => ({
        disabled: disabled,
        title: "ТЗ",
        name: "technicalTask",
        className: "input15",
        type: "select",
        items: [
            { value: "Да", text: "Да" },
            { value: "Нет", text: "Нет" }
        ]
    }),
    testSuitcase: (disabled) => ({
        disabled: disabled,
        title: "Тестовый чемодан",
        name: "testSuitcase",
        className: "input33",
        type: "select",
        items: [
            { value: "Да", text: "Да" },
            { value: "Нет", text: "Нет" }
        ]
    }),
    contactPerson: (disabled) => ({
        disabled: disabled,
        title: "Контактное лицо",
        name: "contactPerson",
        className: "input100",
        type: "text"
    }),

    //CALCULATION_PARAMETERS
    objectArea: (disabled) => ({
        disabled: disabled,
        title: "Площадь(м2)",
        name: "objectArea",
        className: "input33",
        type: "text",
        mask: "number"
    }),
    ceilingHeight: (disabled) => ({
        disabled: disabled,
        title: "Высота потолков(м)",
        name: "ceilingHeight",
        className: "input33",
        type: "text"
    }),
    bathroom: (disabled) => ({
        disabled: disabled,
        title: "Кол-во сан.узлов",
        name: "bathroom",
        className: "input33",
        type: "text",
        mask: "number"
    }),
    flooring: (disabled) => ({
        disabled: disabled,
        title: "Напольное покрытие",
        name: "flooring",
        className: "input100",
        type: "text"
    }),
    walls: (disabled) => ({
        disabled: disabled,
        title: "Стены",
        name: "walls",
        className: "input100",
        type: "text"
    }),
    stairs: (disabled) => ({
        disabled: disabled,
        title: "Тех.помещения, лестницы, комнаты",
        name: "stairs",
        className: "input100",
        type: "text"
    }),
    furniture: (disabled) => ({
        disabled: disabled,
        title: "Мебель(есть/нет;материалы)",
        name: "furniture",
        className: "input100",
        type: "text"
    }),
    pollutionDegree: (disabled) => ({
        disabled: disabled,
        title: "Степень загрязнения",
        name: "pollutionDegree",
        className: "input100",
        type: "select",
        items: [
            { value: "Небольшое", text: "Небольшое" },
            { value: "Среднее", text: "Среднее" },
            { value: "Сильное", text: "Сильное" }
        ]
    }),

    //ADDITIONAL_TYPES_WORK
    glazingWashing: (disabled) => ({
        disabled: disabled,
        title: "Мытьё остекления и фасадов",
        name: "glazingWashing",
        className: "input100",
        type: "text"
    }),
    industrialAlpinism: (disabled) => ({
        disabled: disabled,
        title: "Промышленный альпинизм",
        name: "industrialAlpinism",
        className: "input100",
        type: "text"
    }),
    rotaryCleaning: (disabled) => ({
        disabled: disabled,
        title: "Роторная чистка",
        name: "rotaryCleaning",
        className: "input100",
        type: "text"
    }),
    dryCleaning: (disabled) => ({
        disabled: disabled,
        title: "Химчистка",
        name: "dryCleaning",
        className: "input100",
        type: "text"
    }),
    otherServices: (disabled) => ({
        disabled: disabled,
        title: "Иные услуги",
        name: "otherServices",
        className: "input100",
        type: "text"
    }),
    workComplexity: (disabled) => ({
        disabled: disabled,
        title: "Сложность работ (в свободной форме)",
        name: "workComplexity",
        className: "input100",
        type: "text"
    }),

    //KP
    priceWithoutDiscount: (disabled) => ({
        disabled: disabled,
        title: "Стоимость без скидки",
        name: "priceWithoutDiscount",
        className: "input33",
        type: "text"
    }),
    kpDiscount: (disabled) => ({
        disabled: disabled,
        title: "Скидка %",
        name: "kpDiscount",
        className: "input33",
        type: "text"
    }),
    priceWithDiscount: (disabled) => ({
        disabled: disabled,
        title: "Стоимость со скидкой",
        name: "priceWithDiscount",
        className: "input33",
        type: "text"
    }),
    kpCreatedAt: (disabled) => ({
        disabled: disabled,
        title: "Дата",
        name: "workComplexity",
        className: "input50",
        singleDate: true,
        type: "date"
    }),
    kpDateEnd: (disabled) => ({
        disabled: disabled,
        title: "Предложение действительно до",
        name: "workComplexity",
        className: "input100",
        type: "date",
        singleDate: true
    }),
    kpComment: (disabled) => ({
        disabled: disabled,
        title: "Комментарий",
        name: "kpComment",
        className: "input100",
        type: "text"
    }),

    //Contract
    contractNumber: (disabled) => ({
        disabled: disabled,
        title: "Номер договора",
        name: "contractNumber",
        className: "input33",
        type: "text"
    }),
    createdAt: (disabled) => ({
        disabled: disabled,
        title: "Дата",
        name: "createdAt",
        className: "input33",
        singleDate: true,
        type: "date"
    }),
    contractDate: (disabled) => ({
        disabled: disabled,
        title: "Дата договора",
        name: "contractDate",
        className: "input33",
        type: "date",
        singleDate: true
    }),
    clientBirthday: (disabled) => ({
        disabled: disabled,
        title: "Дата рождения",
        name: "clientBirthday",
        className: "input33",
        type: "text",
        required: false
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
    serviceDescription: (disabled) => ({
        disabled: disabled,
        title: "Описание услуг",
        name: "serviceDescription",
        className: "input100",
        type: "text",
        multiline: true
    }),
    scheduleWork: (disabled) => ({
        disabled: disabled,
        title: "График работы",
        name: "scheduleWork",
        className: "input33",
        type: "text"
    }),
    staffCount: (disabled) => ({
        disabled: disabled,
        title: "Количество персонала",
        name: "staffCount",
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
    })
}
