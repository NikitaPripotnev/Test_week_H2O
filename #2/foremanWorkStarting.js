export const foremanWorkStarting = {
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
    addContractPhoto: (disabled) => ({
        disabled: disabled,
        name: "addContractPhoto",
        title: "Фото договора доп.услуг",
        type: "document",
        button: "Загрузить фото",
        fileType: "jpg",
        accept: "image/*;capture=camera"
    }),
    cleaningTask: (disabled) => ({
        disabled: disabled,
        title: "Задача (ЦУ для выполнения работ)",
        name: "cleaningTask",
        className: "input100",
        type: "text",
        multiline: true
    }),
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
    contractPhoto: (disabled) => ({
        disabled: disabled,
        name: "contractPhoto",
        title: "Фото подписанного договора",
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
    })
}
