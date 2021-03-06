/**
 * JS에서의 배열
 * 배열요소의 타입이 고정이 아니다
 *      다른 type 의 요소를 같은 배열에 저장할 수 있다
 */

// JS 에서 배열을 만들기
// blank  배열
let array1 = [];
// 초기값이 있는 배열
let array2 = [1, 2, 3, 4, 5, 6, 7, 8];
let array3 = [1, 2, "우리나라", "대한민국"];
let array4 = Array(1, 2, 3, 4, 5, 6);
let array5 = Array();

// 기존의 배열에 새로운 요소(item)을 추가하는 방법
array1.push(10, 20);
array1.push("대한민국");
array1.push(1, 2, 3, 4, 5);
console.log(array1);

array3.push(100, 200, 300);
console.log(array3);

// 배열.length 속성으로 통해서 배열의 크기를 알 수 있다.
let arrayLength = array3.length;

// 특정한 위치(index)를 지정하여 배열요소를 저장
// 기존에 값이 있으면 삭제되고 새로운 값으로 대체된다
array3[3] = "Republic of Korea";
console.log(array3);

// 특정한 위치(index)에 저장된 값을 읽어서 다른 변수에 저장하기
let index1 = array3[3];
console.log(index1);

// 배열의 맨 끝에 저장된 요소를 읽기
// 배열의 요소는 0 ~ (크기 -1)
let index2 = array3[array3.length - 1];

// 배열과 반복문
// 동기방식으로 사용되는 일반적인 코드
//    for 문이 시작 출력되고
//    배열쇼로들이 출력되고
//    for 문 종료가 출력된다
console.log("for 시작");
for (let i = 0; i < array3.length; i++) {
  console.log(array3[i]);
}
console.log("for 종료");

// 비동기 callback 방식으로 사용하기
//    비동기 시작
//    요소들 출력
//    비동기 종료
//    와 같이 순서대로 작동된다는 보장이 없다.
console.log("비동기 시작");
array3.forEach(function (index) {
  console.log(index);
});
console.log("비동기 종료");

// 화살표 함수를 사용한 forEach 반복문
array3.forEach((index) => {
  console.log(index);
});

/**
 * 내부적으로 forEach() 실행되면서
 * 내부의 함수에서 배열요소를 기준으로 연산이 이루어 지고
 * 그 결과를 통째로 다른 변수에 담을 수 있다
 *
 * 만약 array3의 요소가 5개이다
 * 1. map() 함수내의 화살표 함수는 5번 실행이 될것이다
 * 2. 화살표 함수의 코드에서 마지막에 return 이 있으므로
 *     return 문이 5번 실행될 것이다
 * 3. 또다른 배열.push(return 된결과) 의 코드가 5번 실행된다.
 *
 * 이 결과는 array3에 담긴 모든 요소에 끝에 문자열 A 부착되고
 * 문자열 A 부착된 요소들이 또다른 배열에 push 되어
 * 새로운 배열이 만들어 진다
 */

let array6 = array3.map((index) => {
  console.log(index);
  return index + "A";
});
console.log(array6);

let numArray = [2, 3, 4, 5, 6, 1, 2, 3, 5];
console.log("숫자배열", numArray);

let squaredArray = numArray.map((index) => {
  return index * index;
});
squaredArray = numArray.map((index) => index * index);

// map 은 내부의 함수에 요소와 배열의 index 값을 매개변수로
// 전달 할 수 있고
// 내부 코드에서는 전달받은 요소와 index를 활용하여 코드를
// 작성할 수 있다
numArray.map((num, index) => {
  console.log(index, "번째:", num);
});

console.log("제곱한배열", squaredArray);

// 배열의 요소, index, 자기자신의 복제배열을
// 매개변수로 전달하여 다양한 코드에서 활용할 수 있다
squaredArray.map((num, index, defalut) => {
  console.log(defalut, "의", index, "번째 요소", num);
});

// 원 배열에서 특정한 조건에 맞는 요소만 추출하여
// 다른 배열로 만들고 싶을 때
// 내부 코드에서 특정 요소가 연산 될 때
// 마지막에 return true 인 경우만 해당 요소를 다른 배열에
// push

// return 문이 true 일때 해당하는 요소값이 짝수배열에 push 된다
// return 결과가 짝수배열에 저장되는 것이 아니다!!
let evenArray = numArray.filter((index) => {
  return index % 2 == 0;
});

let strArray = ["aaa", "bbb", "ccc"];

// 문자열 내에 영문자 a 또는 b 가 있으면
//  !!~요소.search/[ab]+/
let newArray = strArray.filter((str, index, defalut) => {
  return !!~str.search(/[ab]+/);
});
console.log(newArray);
