export const calculations = {
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
    address: (disabled) => ({
        disabled: disabled,
        title: "Адрес",
        name: "address",
        type: "address",
        className: "input100"
    }),
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
    comment: (disabled) => ({
        disabled: disabled,
        title: "Комментарий",
        name: "comment",
        className: "input100",
        type: "text",
        multiline: true,
        required: false
    }),
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
    })
}
