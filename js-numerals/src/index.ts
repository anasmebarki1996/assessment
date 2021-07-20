const a:string[] = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
const b:string[] = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
const c:string[] = ['', 'thousand', 'million', 'billion', 'trillion'];


const splitNumber = (number1 :string , devider:number) : string[] => {
    number1 =  number1.split("").reverse().join("");
    
    let array_digits = [];
    for (var i = 0; i < number1.length; i += devider) {
        array_digits.push(number1.substring(i, i + devider));
    }
    return array_digits.reverse();
}

const handleDigits = (firstDigit:number ,secondDigit:number, thirdDigit:number) : string=> {
    let text="";
    if(thirdDigit) text+= a[thirdDigit] + "hundred ";
    let AdditionOfSecondAndFirstDigit = secondDigit * 10  + firstDigit;
    if(firstDigit || secondDigit)
    {
        if(thirdDigit) text+= "and "
        if(AdditionOfSecondAndFirstDigit && AdditionOfSecondAndFirstDigit <=19) text += a[AdditionOfSecondAndFirstDigit];
        else {
            if(secondDigit) text+=b[secondDigit];
            if(firstDigit){
                if(secondDigit) text+="-";
                text+=a[firstDigit];
            }
            else text+=" "
        }
    }
    
    return text;
}

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
