let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

/*
*const varCA = varA;
*
*varA = varB;
*varB = varC;
*varC = varCA;
*
*/

[varA, varB, varC] = [varB, varC, varA]


console.log(varA, varB, varC);

