//IWA_7.3:
var value = "3";
var result1 = Number(value); //ie parseInt();
var sum = result1 + 4 + result1;
console.log(sum + " " + typeof (sum));
//IMW_7.4:
var nickname = "Timmy";
var firstName = "Timothy";
if (nickname) {
    console.log("Good morning, ".concat(nickname, "!"));
}
else if (firstName) {
    console.log("Good morning, ".concat(firstName, "!"));
}
else {
    console.log("Good morning!");
}
//IMW_7.5:
var leoName = 'Leo';
var leoSurname = 'Musvaire     ';
var leoBalance = '-9394.00';
var sarahName = 'Sarah    ';
var sarahSurname = 'Kleinhans';
var sarahBalance = '-4582.21000111';
var divider = '----------------------------------';
//⁡⁢⁣⁢====================================================================⁡
// ⁡⁣⁣⁢const owed = parseInt('R' + leoBalance + sarahBalance)⁡
// ⁡⁣⁣⁢const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"⁡
// ⁡⁣⁣⁢const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"⁡
// ⁡⁣⁣⁢const total = "Total amount owed: "⁡
// ⁡⁣⁣⁢const result = leo + sarah + divider + divider + total + owed + divider⁡
// ⁡⁣⁣⁢console.log(result)⁡
var leosRevisedBalance1 = Math.abs(Number(leoBalance)).toFixed(2);
var leosRevisedBalance2 = Number(leosRevisedBalance1);
var sarahRevisedBalance1 = Math.abs(Number(sarahBalance)).toFixed(2);
var sarahRevisedBalance2 = Number(sarahRevisedBalance1);
var owed = 'R' + (leosRevisedBalance2 + sarahRevisedBalance2);
var leo = "".concat(leoName, " ").concat(leoSurname.trim(), " (Owed R").concat(leosRevisedBalance1, ")");
var sarah = "".concat(sarahName.trim(), " ").concat(sarahSurname, " (Owed R").concat(sarahRevisedBalance1, ")");
var total = "Total amount owed: ";
var newLine = "\n";
console.log(leo);
console.log(sarah);
console.log(leosRevisedBalance2);
console.log(sarahRevisedBalance2);
var result = leo + newLine + sarah + newLine + divider + newLine + total + owed + newLine + divider;
console.log(result);
//⁡⁢⁣⁢====================================================================⁡
// Leo Musvaire (Owed: R 9394.00)
// Sarah Kleinhans (Owed: R 4582.20)
// ----------------------------------
//   Total amount owed: R 14 976.20
// ----------------------------------
