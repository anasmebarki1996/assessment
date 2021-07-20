import { calculate } from "./arabicConversion2";

describe('calculate arabicConversion2', () => {
    let entredNumber:number , result:string , textNumber:string;

    it('conversion the number 7', () => {
        entredNumber = 7;
        result = "seven";
        textNumber = calculate(entredNumber)
        expect(textNumber).toEqual(result);
    });

    it('conversion the number 42', () => {
        entredNumber = 42;
        result = "forty-two";
        textNumber = calculate(entredNumber)
        expect(textNumber).toEqual(result);
    });

    it('conversion the number 2001', () => {
        entredNumber = 2001;
        result = "two thousand and one";
        textNumber = calculate(entredNumber)
        expect(textNumber).toEqual(result);
    });

    it('conversion the number 1999', () => {
        entredNumber = 1999;
        result = "nineteen hundred and ninety-nine";
        textNumber = calculate(entredNumber)
        expect(textNumber).toEqual(result);
    });

    it('conversion the number 17999', () => {
        entredNumber = 17999;
        result = "seventeen thousand nine hundred and ninety-nine";
        textNumber = calculate(entredNumber)
        expect(textNumber).toEqual(result);
    });

    it('conversion the number 342251', () => {
        entredNumber = 342251;
        result = "three hundred and forty-two thousand two hundred and fifty-one";
        textNumber = calculate(entredNumber)
        expect(textNumber).toEqual(result);
    });

    it('conversion the number 1300420', () => {
        entredNumber = 1300420;
        result = "one million three hundred thousand four hundred and twenty";
        textNumber = calculate(entredNumber)
        expect(textNumber).toEqual(result);
    });

});
