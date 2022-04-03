function moneyToRanks(input) {
    let result = ""
    const currency = [
        [
            "",
            "тысяч",
            "миллион",
            "миллиард",
            "триллион",
            "квадриллион",
            "квинтиллион",
            "секстиллион",
            "септиллион",
            "октиллион",
            "нониллион",
            "дециллион"
        ],
        ["а", "и", ""],
        ["", "а", "ов"]
    ]
    if (input === "" || input === "0") return " ноль" // 0
    input = input.split(/(?=(?:\d{3})+$)/)
    if (input[0].length === 1) input[0] = "00" + input[0]
    if (input[0].length === 2) input[0] = "0" + input[0]
    for (let j = input.length - 1; j >= 0; j--) {
        if (input[j] !== "000") {
            result =
                (j === input.length - 2 && (input[j][2] === "1" || input[j][2] === "2")
                    ? morph(input[j], 1)
                    : morph(input[j])) +
                declensionOfInput(
                    input[j],
                    currency[0][input.length - 1 - j],
                    j === input.length - 2 ? currency[1] : currency[2]
                ) +
                result
        }
    }
    function morph(input, units) {
        // преобразовать трёхзначные числа
        const currency = [
            [
                "",
                " один",
                " два",
                " три",
                " четыре",
                " пять",
                " шесть",
                " семь",
                " восемь",
                " девять"
            ],
            [
                " десять",
                " одиннадцать",
                " двенадцать",
                " тринадцать",
                " четырнадцать",
                " пятнадцать",
                " шестнадцать",
                " семнадцать",
                " восемнадцать",
                " девятнадцать"
            ],
            [
                "",
                "",
                " двадцать",
                " тридцать",
                " сорок",
                " пятьдесят",
                " шестьдесят",
                " семьдесят",
                " восемьдесят",
                " девяносто"
            ],
            [
                "",
                " сто",
                " двести",
                " триста",
                " четыреста",
                " пятьсот",
                " шестьсот",
                " семьсот",
                " восемьсот",
                " девятьсот"
            ],
            ["", " одна", " две"]
        ]
        return (
            currency[3][input[0]] +
            (input[1] === 1
                ? currency[1][input[2]]
                : currency[2][input[1]] + (units ? currency[4][input[2]] : currency[0][input[2]]))
        )
    }
    return result
}
function declensionOfInput(input, currency, declension) {
    let arr = [2, 0, 1, 1, 1, 2, 2, 2, 2, 2]
    return currency === ""
        ? ""
        : " " +
              currency +
              (input[input.length - 2] === "1"
                  ? declension[2]
                  : declension[arr[input[input.length - 1]]])
}
function firstUpperCase(currency) {
    return currency[1].toUpperCase() + currency.substring(2)
}
function moneyToString(input) {
    input = Number(input).toFixed(2).split(".") // округлить до сотых и сделать массив двух чисел: до точки и после неё
    return firstUpperCase(
        moneyToRanks(input[0]) + declensionOfInput(input[0], "рубл", ["ь", "я", "ей"])
    )
}

console.log(moneyToString(1234527832))
