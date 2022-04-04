export const kp_primary = {
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
    createdAt: (disabled) => ({
        disabled: disabled,
        title: "Дата",
        name: "createdAt",
        className: "input33",
        singleDate: true,
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
    address: (disabled) => ({
        disabled: disabled,
        title: "Адрес",
        name: "address",
        type: "address",
        className: "input100"
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
    sourceTypeText: (disabled) => ({
        disabled: disabled,
        title: "Тип источника",
        name: "sourceType",
        className: "input50",
        type: "text"
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
    })
}
