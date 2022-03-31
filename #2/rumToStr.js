function num_letters(k, d) {
    var i = '', e = [
        ['','тысяч','миллион','миллиард','триллион','квадриллион','квинтиллион','секстиллион','септиллион','октиллион','нониллион','дециллион'],
        ['а','и',''],
        ['','а','ов']
    ];
    if (k == '' || k == '0') return ' ноль'; // 0
    k = k.split(/(?=(?:\d{3})+$)/);
    if (k[0].length == 1) k[0] = '00'+k[0];
    if (k[0].length == 2) k[0] = '0'+k[0];
    for (var j = (k.length - 1); j >= 0; j--) {
        if (k[j] != '000') {
            i = (((d && j == (k.length - 1)) || j == (k.length - 2)) && (k[j][2] == '1' || k[j][2] == '2') ? t(k[j],1) : t(k[j])) + declOfNum(k[j], e[0][k.length - 1 - j], (j == (k.length - 2) ? e[1] : e[2])) + i;
        }
    }
    function t(k, d) {  // преобразовать трёхзначные числа
        var e = [
            ['',' один',' два',' три',' четыре',' пять',' шесть',' семь',' восемь',' девять'],
            [' десять',' одиннадцать',' двенадцать',' тринадцать',' четырнадцать',' пятнадцать',' шестнадцать',' семнадцать',' восемнадцать',' девятнадцать'],
            ['','',' двадцать',' тридцать',' сорок',' пятьдесят',' шестьдесят',' семьдесят',' восемьдесят',' девяносто'],
            ['',' сто',' двести',' триста',' четыреста',' пятьсот',' шестьсот',' семьсот',' восемьсот',' девятьсот'],
            ['',' одна',' две']
        ];
        return e[3][k[0]] + (k[1] == 1 ? e[1][k[2]] : e[2][k[1]] + (d ? e[4][k[2]] : e[0][k[2]]));
    }
    return i;
}
function declOfNum(n, t, o) {
    var k = [2,0,1,1,1,2,2,2,2,2];
    return (t == '' ? '' : ' ' + t + (n[n.length-2] == "1"?o[2]:o[k[n[n.length-1]]]));
}
function razUp(e) {
    return e[1].toUpperCase() + e.substring(2);
}
export default function sum_letters(a) {
    a = Number(a).toFixed(2).split('.');  // округлить до сотых и сделать массив двух чисел: до точки и после неё
    return razUp(num_letters(a[0]) + declOfNum(a[0], 'рубл', ['ь','я','ей']));
}