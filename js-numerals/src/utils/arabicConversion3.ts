import { c, handleDigits, splitNumber } from "./shared";

const calculate = (entredNumber:number) => {
    if(entredNumber < 0 ) return "unhandled number";
    else if (entredNumber === 0 ) return "zero";
    let textNumber  ='';
    let devided_number;
    let entredNumberString:string = entredNumber.toString();
   
    // this case handle all number of digits 
    if(entredNumberString.length === 4)
    {
        // here we split the number of 4 digits to 4 parts 
        devided_number = splitNumber(entredNumberString,1);
        if(parseInt(entredNumberString)< 2000)
        {
            // 1999 => [ '1', '9', '9', '9' ]
            // +devided_number[1]+devided_number[0]*10 means that we add 1 * 10 + 9 => 19
            // 19 in array will be nineteen
            textNumber = handleDigits(+devided_number[3],+devided_number[2],+devided_number[1]+(+devided_number[0]*10))        }
        else
        {
            // 2786 => [ '2', '7', '8', '6' ]
            // we dont have 27 in array a
            // that's why we added this case to handle when we have the two first number like 27
            // so we figure out to handle 27 alone and 86 alone and add hundred to 27 
            textNumber += handleDigits(+devided_number[1],+devided_number[0],0) + "hundred "
            if((+devided_number[0] || +devided_number[1]) && (+devided_number[2] || +devided_number[3])) textNumber+= "and "
            textNumber += handleDigits(+devided_number[3],+devided_number[2],0)
        }
    }
    else {
        devided_number = splitNumber(entredNumberString,3);
        // handle every value of table devided_number 
        let indexArray;
        // number 0 is the last right number 
        // number 1 is the before last right number 
        // example : the entred number is 123 456 789 
        // in this case number0 = 789 and it exists always
        // and number1 = 456 and it could be undefined if the entred number is less then 1000
        let number0 = parseInt(devided_number[devided_number.length-1].split("").reverse().join("")); 
        let number1 = devided_number[devided_number.length-2] ? parseInt(devided_number[devided_number.length-2].split("").reverse().join("")) : null;
        
        for(let i=0; i<devided_number.length ; i++)
        {
            // handle the three digits of each number starting by last part
            // c is table where we defined if thounds or millions ...
            // so we start by the big options because we start handle the first splited number 
            // in this case : the first split is 321 which is 321 millions 
            indexArray=devided_number.length-i-1;
            textNumber += handleDigits(+devided_number[i][0], +devided_number[i][1], +devided_number[i][2] ) + c[indexArray] + " ";
            // this condition check if number1 exists and number0 is less then 100 to add "and " between them
            if(indexArray===1 && number0<100 && number1)    textNumber+="and "
        }
    }
    return textNumber.trim();
}


export {
    calculate
}
