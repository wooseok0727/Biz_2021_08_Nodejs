let array1 = new Array();
let array2 = [];

// 10개의 난수를 만들어
// blank 배열 array2 에 저장하고 console 에 출력하기

// Math.random() 함수
// 0 부터 1미만의 임의(난수)의 실수를 만들어 return 하는 함수

// Math.floor() 함수
// 실수의 소수점 이하를 잘라서 정수로 만드는 함수

for (let i = 0; i < 10; i++) {
  // 1 ~ 100 까지 범위의 임의 난수를 생성하기 코드
  let rnd = Math.floor(Math.random() * 100) + 1;
  array2.push(rnd);
}
console.log(array2);

// array2 에 담긴 숫자 중에서 짝수만 출력하기
for (let i = 0; i < array2.length; i++) {
  if (array2[i] % 2 == 0) {
    console.log(array2[i]);
  }
}

// array2 에 담긴 숫자 중에서 짝수만 골라서 array3 에 옮겨 담기
// 전통적인 for 문을 이용한 배열의 filtering
let array3 = [];
for (let i = 0; i < array2.length; i++) {
  if (array2[i] % 2 == 0) {
    array3.push(array2[i]);
  }
}
console.log(array3);

// ES6+ 에서 등장한 배열 관련 함수들 중의 한가지
// for(int 요소 : 배열) { }
let arrayEven = array2.filter((index) => index % 2 == 0);
console.log(arrayEven);
