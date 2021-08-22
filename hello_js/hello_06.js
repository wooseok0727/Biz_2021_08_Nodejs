let array1 = ["aaa", "bbb", "ccc"];

array1.forEach((index) => {
  console.log(index.search(/[ab]+/));
});

/**
 * 문자열.search(찾는문자열)
 * 문자열 내에 찾는 문자열이 있으면
 * 위치값을 return(-1 보다 큰값)
 * 없으면 -1을 return;
 */
let newArray = array1.filter((index) => {
  return index.search(/[ab]+/) > -1;
});

// !!~요소.search(/[ab]+/) 의 연산 결과
// 요소.search() 의 값이 0 미만이면 false
//      0 이상이면 true로 바꾸는 논리 비트 연산식
newArray = array1.filter((index) => {
  return !!~index.search(/[ab]+/);
});
console.log(newArray);

// 배열1의 요소에 한개라도
// 영문자 a 또는 b가 포함된 것이 있냐?
//
// some 함수는 filter와 성질이 비슷한데
// 최종 결과물이 배열이 아닌 boolean
let yesNo = array1.some((index) => {
  return !!~index.search(/[ab]+/);
});
if (yesNo) {
  console.log("배열1에는 영문자 a 나 b가 있음");
} else {
  console.log("배열1에는 영문자 a 나 b가 없음");
}
