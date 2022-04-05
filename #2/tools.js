export const tools = {
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
    toolsComment: (disabled) => ({
        disabled: disabled,
        name: "toolsComment",
        title: "Комментарий по приему ТМЦ на склад",
        type: "text",
        multiline: true
    }),
    nzBack: (disabled) => ({
        disabled: disabled,
        name: "nzBack",
        title: "Наряд заказ(результат)",
        type: "document",
        button: "Загрузить документ",
        fileType: "pdf"
    })
}
