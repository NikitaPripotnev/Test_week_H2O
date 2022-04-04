export const task = {
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
    cleaningDate: (disabled, required) => ({
        disabled: disabled,
        title: "Дата уборки",
        name: "cleaningDate",
        className: "input50",
        type: "date",
        cleaningDate: true,
        required: required !== false
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
    address: (disabled) => ({
        disabled: disabled,
        title: "Адрес",
        name: "address",
        type: "address",
        className: "input100"
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
    responsibleManager: (disabled) => ({
        disabled: disabled,
        title: "Ответственный менеджер",
        name: "responsibleManager",
        className: "input50 input_inspectManager",
        type: "user"
    }),
    foreman: (disabled) => ({
        disabled: disabled,
        title: "Бригадир",
        name: "foreman",
        type: "user",
        role: "FOREMAN"
    }),
    totalCost: (disabled) => ({
        disabled: disabled,
        title: "Стоимость",
        name: "totalCost",
        className: "input50",
        type: "text"
    }),
    cleaningTask: (disabled) => ({
        disabled: disabled,
        title: "Задача (ЦУ для выполнения работ)",
        name: "cleaningTask",
        className: "input100",
        type: "text",
        multiline: true
    }),
    objectArea: (disabled) => ({
        disabled: disabled,
        title: "Площадь(м2)",
        name: "objectArea",
        className: "input33",
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
    cleanerNumber: (disabled) => ({
        disabled: disabled,
        title: "Кол-во клинеров",
        name: "cleanerNumber",
        className: "input20",
        type: "text",
        mask: "number"
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
    })
}
