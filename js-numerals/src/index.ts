const { arabicConversion1, arabicConversion2, arabicConversion3 } = require("./utils");


console.log(42+"\t=== "+arabicConversion1.calculate(42));
console.log(7+"\t=== "+arabicConversion1.calculate(7));
console.log(2001+"\t=== "+arabicConversion1.calculate(2001));
console.log(1999+"\t=== "+arabicConversion1.calculate(1999));
console.log(17999+"\t=== "+arabicConversion1.calculate(17999));
console.log(342251+"\t=== "+arabicConversion1.calculate(342251));
console.log(1300420+"\t=== "+arabicConversion1.calculate(1300420));

console.log("\n############### arabicConversion1 ###############")
console.log(1999+"\t=== "+arabicConversion1.calculate(1999));
console.log("\n############### arabicConversion2 ###############")
console.log(1999+"\t=== "+arabicConversion2.calculate(1999));
console.log(2999+"\t=== "+arabicConversion2.calculate(2999));
console.log("\n############### arabicConversion3 ###############")
console.log(2999+"\t=== "+arabicConversion3.calculate(2999));
console.log("\n\n")
