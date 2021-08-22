// JS 에서는 변수, 상수, 함수는 사용하기 전에
// 먼저 선언하라
const func1 = function () {
  console.log("기본 함수 선언하기");
};

// ES6+ 에서 권장하는 화살표 함수 선언하기
const func2 = () => {
  console.log("Arrow, 화살표 함수 선언하기");
};

// 매개변수가 있는 함수 선언하기
const func3 = function (num1, num2) {
  console.log(num1, num2, num1 + num2);
};

// 매개변수가 있는 함수 호출(실행)하기
func3(100, 200);
func3();

// 매개변수가 있는 화살표 함수 선언하기
const func4 = (num1, num2) => {
  console.log(num1, num2, num1 + num2);
};

// 매개변수가 1개만 있는 화살표 함수 선언하기
// prettier 가 적용이 안된다면 다음과 같이 선언 할 수 있다
// 매개변수가 1개만 있으면 () 묶지 않아도 된다
// const func5 = num1 => {};

// return 이 있는 함수 선언
const returnFunc1 = function () {
  return 300;
};

returnFunc1(); // 결과를 전혀 확인할 수 없는 함수

// 함수를 실행하고 return 된 결과를 변수 ret1 에 담아라
let ret1 = returnFunc1();
console.log(ret1);

// return 이 있는 화살표 함수 선언
const returnFunc2 = () => {
  let a = 100;
  let b = 200;
  return 500;
};

// 화살표 함수의 매우 특별한 선언
// 함수 내부에 return 명령문 한개만 있는 경우
// 다른 명령은 일체 없는 경우
// const returnFunc3 = () => {
//     return 500 + 500;
// };
const returnFunc3 = () => 500 + 500;
const ret3 = returnFunc3();
console.log(ret3);

// 매개변수가 있고 return 이 있는 화살표 함수
const returnFunc4 = (num1) => {
  return num1 * num1;
};

let ret4 = returnFunc4(100);
console.log(ret4);

const returnFunc5 = (num1) => num1 * num1;
let ret5 = returnFunc5(100);
console.log(ret5);

fetch("localhost:3000")
  .then((res) => res.json())
  .then((result) => console.log(result));

fetch("localhost:3000")
  .then((res) => {
    return res.json();
  })
  .then((result) => {
    return console.log(result);
  });
