// we figure out to create arrays where we should put numbers that we can't handle 
const a:string[] = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
const b:string[] = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
const c:string[] = ['', 'thousand', 'million', 'billion', 'trillion'];


// splitNumber is function to split the entredNumber with divider which means how many digit we should have in each index of array 
const splitNumber = (number1 :string , devider:number) : string[] => {
    // we reverse the number to make the small digit to get the degree of digits
    number1 =  number1.split("").reverse().join("");
    
    let array_digits = [];
    for (var i = 0; i < number1.length; i += devider) {
        array_digits.push(number1.substring(i, i + devider));
    }
    // after we split with the divider we reverse the array ( not the caracters)
    return array_digits.reverse();
}

const handleDigits = (firstDigit:number ,secondDigit:number, thirdDigit:number) : string=> {
    // if we have a number like 123
    // 3 is the first digit & last digit
    // 2 is the second digit
    // 1 is the third digit
    let text="";
    // if we the third digit exists we should add to it hundred
    // the thirdDigit means the index of the array ( it should be from 1 to 9 so we find it in the array)
    // in arabicConversion2 & arabicConversion2 the thirdDigit can be form 1 to 19
    if(thirdDigit) text+= a[thirdDigit] + "hundred ";
    // here we do the additon of the last two digits if we have ['1','9'] 
    let AdditionOfSecondAndFirstDigit = secondDigit * 10  + firstDigit;
    // if we have the third digit and one of the first & second digits so we have to add "and"
    if(firstDigit || secondDigit)
    {
        if(thirdDigit) text+= "and "
        // if AdditionOfSecondAndFirstDigit is less then 19 so it exist in array a
        if(AdditionOfSecondAndFirstDigit && AdditionOfSecondAndFirstDigit <=19) text += a[AdditionOfSecondAndFirstDigit];
        // else we should search of each digit in the array a
        else {
            // if secondDigit is a number so it exist in the array a
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