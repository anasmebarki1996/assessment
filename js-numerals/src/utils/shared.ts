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

export {
    c,
    splitNumber,
    handleDigits
};