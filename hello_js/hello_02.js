// JS 에서 (JSON)type 객체 만들기

// blank 객체
let obj1 = {};

// blank 객체에 변수와 값을 동시에 추가하기
//      name, tel  이라는 변수를 obj1 에 새로 생성하고
//      각각 값을 저장한다
obj1.name = "이몽룡";
obj1.tel = "1111111";

// 초기값이 있는 객체만들기
let obj2 = {
  name: "홍길동",
  tel: "12341234",
};

console.log(obj1);
console.log(obj2);

console.table(obj1);
console.table(obj2);

// console.table() 은 1개의 객체만 console에 출력하는 함수
// console.table(obj1, obj2);

const con = (m) => console.log(m);
con(300 * 100);
