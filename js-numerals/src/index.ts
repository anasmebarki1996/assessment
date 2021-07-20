import { c, handleDigits, splitNumber } from "./utils/shared";

const calculate = (entredNumber:number) : string => {
    if(entredNumber < 0 ) return "unhandled number";
    else if (entredNumber === 0 ) return "zero";
    let textNumber  ='';
    let entredNumberString:string = entredNumber.toString();
    let devided_number = splitNumber(entredNumberString,3);
    let indexArray;
    let number0 = parseInt(devided_number[devided_number.length-1].split("").reverse().join("")); 
    let number1 = devided_number[devided_number.length-2] ? parseInt(devided_number[devided_number.length-2].split("").reverse().join("")) : null;
    for(let i=0; i<devided_number.length ; i++)
    {
        indexArray=devided_number.length-i-1;
        textNumber += handleDigits(+devided_number[i][0], +devided_number[i][1], +devided_number[i][2] ) + c[indexArray] + " ";
        if(indexArray===1 && number0 && number1 && number0<100 )    textNumber+="and "
    }
    return textNumber.trim();
}


console.log(42+"\t=== "+calculate(42));
console.log(7+"\t=== "+calculate(7));
console.log(2001+"\t=== "+calculate(2001));
console.log(1999+"\t=== "+calculate(1999));
console.log(17999+"\t=== "+calculate(17999));
console.log(342251+"\t=== "+calculate(342251));
console.log(1300420+"\t=== "+calculate(1300420));
