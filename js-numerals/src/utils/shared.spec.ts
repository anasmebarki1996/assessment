import { handleDigits, splitNumber } from "./shared";

describe('splitNumber function', () => {

    it('split a number by 3', () => {
        let entredNumber = "12345678";
        let devider = 3;
        let result = ['21' ,'543','876'];
        let splitedNumber = splitNumber(entredNumber,devider)
        expect(splitedNumber).toEqual(result);
    });

    it('split a number by 2', () => {
        let entredNumber = "123456789";
        let devider = 2;
        let result = ['1','32','54','76','98'];
        let splitedNumber = splitNumber(entredNumber,devider)
        expect(splitedNumber).toEqual(result);
    });

    it('split a number by 1', () => {
        let entredNumber = "1234";
        let devider = 1;
        let result = ['1' ,'2','3','4'];
        let splitedNumber = splitNumber(entredNumber,devider)
        expect(splitedNumber).toEqual(result);
    });
});


describe('handleDigits function', () => {

    it('handleDigits handle the number 123', () => {
        let result = "one hundred and twenty-three ";
        let splitedNumber = handleDigits(3,2,1)
        expect(splitedNumber).toEqual(result);
    });

    it('handleDigits handle the number 312', () => {
        let result = "three hundred and twelve ";
        let splitedNumber = handleDigits(2,1,3)
        expect(splitedNumber).toEqual(result);
    });

    it('handleDigits handle the number 12 -- thirdDigits === 0', () => {
        let result = "twelve ";
        let splitedNumber = handleDigits(2,1,0);
        expect(splitedNumber).toEqual(result);
    });

});
