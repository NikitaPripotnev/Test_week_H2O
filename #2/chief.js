export const chief = {
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
    })
}
