// 객체를 요소로 포함하는 배열
let addressBook = [
  { name: "홍길동", tel: "1111", addr: "서울시", age: 33 },
  { name: "박문수", tel: "3333", addr: "광주시", age: 22 },
  { name: "장보고", tel: "2222", addr: "부산시", age: 16 },
];
console.table(addressBook);

addressBook.forEach((index) => {
  if (index.name === "박문수") {
    console.log(index);
  }
});

let MZ = addressBook.filter((index) => {
  return index.age < 30;
});
console.table(MZ);

// 주소록 객체배열에 생년 칼럼을 추가하고 데이터를 포함하여
// 생년월일 배열을 만들기
let birthday = addressBook.map((index) => {
  return { ...index, birth: 2020 - index.age };
});

console.table(birthday);

/**
 * 전개연산자 spread 연산자
 * 배열, 객체를 복사 연산 수행할때 자기자신의 전체를
 * 나타내는 연산자
 */

let addr = { name: "홍길동", tel: "111", age: 33 };
// 주소 객체에 새로운 요소를 추가하여
// 새로운 객체로 복제하고자 할 때
let newAddr = addr;
newAddr.birth = 1999;

console.table(newAddr);

// 일단 주소 객체를 전체를 펼쳐두고(spread 하고)
// 새로운 생년 요소를 추가하고 값을 2000으로 설정한 후
// 그 결과를 새객체2에 저장하라
let newAddr2 = { ...addr, birth: 2000 };

// 주소객체의 이름 요소의 값을 이몽룡으로 변경하고
// 새객체 3에 저장하라
let newAddr3 = { ...addr, name: "이몽룡" };
console.log(addr);
console.log(newAddr3);
