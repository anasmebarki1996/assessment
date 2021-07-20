import { c, handleDigits, splitNumber } from "./shared";

const calculate = (entredNumber:number) : string => {
    if(entredNumber < 0 ) return "unhandled number";
    else if (entredNumber === 0 ) return "zero";
    let textNumber  ='';
    let entredNumberString:string = entredNumber.toString();
    // split entred number for each 3 digits 
    // example : 123 456 789 => [ '321', '654', '987' ]
    let devided_number = splitNumber(entredNumberString,3);
    let indexArray;
    // number 0 is the last right number 
    // number 1 is the before last right number 
    // example : the entred number is 123 456 789 
    // in this case number0 = 789 and it exists always
    // and number1 = 456 and it could be undefined if the entred number is less then 1000
    let number0 = parseInt(devided_number[devided_number.length-1].split("").reverse().join("")); 
    let number1 = devided_number[devided_number.length-2] ? parseInt(devided_number[devided_number.length-2].split("").reverse().join("")) : null;
  

    // handle every value of table devided_number 
    for(let i=0; i<devided_number.length ; i++)
    {
        // handle the three digits of each number starting by last part
        // c is table where we defined if thounds or millions ...
        // so we start by the big options because we start handle the first splited number 
        // in this case : the first split is 321 which is 321 millions 
        indexArray=devided_number.length-i-1;
        textNumber += handleDigits(+devided_number[i][0], +devided_number[i][1], +devided_number[i][2] ) + c[indexArray] + " ";
        // this condition check if number1 exists and number0 is less then 100 to add "and " between them
        if(indexArray===1 && number0 && number1 && number0<100 )    textNumber+="and "
    }
    return textNumber.trim();
}
export {
    calculate
}