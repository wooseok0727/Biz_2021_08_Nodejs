for (let i = 0; i < 100; i++) {
  console.log(i);
}

let total = 0;
for (let i = 0; i < 100; i++) {
  total += i + 1;
}
console.log("합계 :", total);

total = 0;
for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    total += i;
  }
}
console.log("짝수의 합 :", total);
