function ePrimo(num) {
  let divisor = 2;
  while(num%divisor !== 0) {
    divisor++;
  };

  if(num === divisor) {
    console.log(`${divisor} ${num} É Primo`);
  }else {
    console.log(`${divisor} ${num} Não primo`);
  };
}

ePrimo(15);

console.log(2%2)
// divisivel por ele mesmo e por 1