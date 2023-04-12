//IWA_7.3:

const value = "3";
const result1:number =Number(value); //ie parseInt();
const sum = result1 + 4 + result1;
console.log(sum + " "+ typeof(sum));

//IMW_7.4:

const nickname:string = "Timmy";
const firstName:string = "Timothy";
const something:string="Duane";

const checkName =(name)=>{
if (name === nickname) {
  console.log(`Good morning, ${nickname}!`);
} else if (name===firstName) {
  console.log(`Good morning, ${firstName}!`);
} else {
  console.log("Good morning!");
}
}
checkName(nickname); //Good morning, Timmy!
checkName(firstName); //Good morning, Timothy!
checkName(something); //Good morning,
//IMW_7.5:

const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394.00'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'
//⁡⁢⁣⁢====================================================================⁡

// ⁡⁣⁣⁢const owed = parseInt('R' + leoBalance + sarahBalance)⁡
// ⁡⁣⁣⁢const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"⁡
// ⁡⁣⁣⁢const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"⁡
// ⁡⁣⁣⁢const total = "Total amount owed: "⁡
// ⁡⁣⁣⁢const result = leo + sarah + divider + divider + total + owed + divider⁡

// ⁡⁣⁣⁢console.log(result)⁡

let leosRevisedBalance1 = Math.abs(Number(leoBalance)).toFixed(2);
let leosRevisedBalance2=Number(leosRevisedBalance1);
let sarahRevisedBalance1=Math.abs(Number(sarahBalance)).toFixed(2);
let sarahRevisedBalance2= Number(sarahRevisedBalance1);

const owed = 'R' + (leosRevisedBalance2 + sarahRevisedBalance2);
const leo = `${leoName} ${leoSurname.trim()} (Owed R${leosRevisedBalance1})`;
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed R${sarahRevisedBalance1})`;
const total = "Total amount owed: "
const newLine = "\n";

const result = leo + newLine +sarah +newLine +divider + newLine+ total +owed+newLine+divider ; 
console.log(result)
//⁡⁢⁣⁢====================================================================⁡


// Leo Musvaire (Owed: R 9394.00)
// Sarah Kleinhans (Owed: R 4582.20)

// ----------------------------------
//   Total amount owed: R 14 976.20
// ----------------------------------