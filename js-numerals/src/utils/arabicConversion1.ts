import { c, handleDigits, splitNumber } from "./shared";

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
export {
    calculate
}