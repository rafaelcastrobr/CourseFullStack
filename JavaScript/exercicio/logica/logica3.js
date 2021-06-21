function numeros (num) {
  if (typeof num !== 'number') return num;
  if (num % 3 === 0 && num % 5 === 0) return `FizzBuzz`;
  if (num % 3 === 0) return `Fiz`;
  if (num % 5 === 0) return `Buzz`;
  return num;
}

for (let i = 0; i <= 100; i++) {
  console.log(i + numeros(i));
}

