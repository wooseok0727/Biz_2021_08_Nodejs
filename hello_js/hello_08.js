// 전개연산자(spread, ...)
// 배열과 객체의 값을 원본은 유지하면서
// 새로운 복제본을 만들 때
// 일부를 추가, 변경(update)하고자 할때
// 코드를 간소하게 사용할 수 있도록 하는 연산자

let array = [1, 2, 3];

// 구상하기는 "배열"에 담긴 값을 새배열에 복제하고
// "새배열"에 10을 추가하여 새로운 배열을 생성하고 싶었다
// 여기까지는 잘 된것 같은데
// 문제는 원본 배열이 변형되었다
let newArray = array;
newArray.push(10);
console.log(newArray);

let newArray2 = [];
array.forEach((index) => {
  newArray2.push(index);
});
newArray2.push(40);

// 전개연산자 사용하기
// 원본인 "배열"의 모든 요소를 펼쳐 놓고
// 거기에 새로운 값이 20을 추가하고
// 값들만 새배열에 복제하기
// 원본 배열은 손상 시키지 않고 새로운 요소가 추가된
// 배열을 다시 만들수 있다
let newArray3 = [...array, 20];
console.table(newArray3);
console.table(array);

let newArray4 = [...array, 30];
console.table(newArray4);

// 원본인 "객체"를 변형하지 않고
// 원본의 내용을 모두 포함하면서
// 새로운 요소인 주소가 추가된
// "객체복제" 객체를 만드는 방법
let obj = { name: "홍길동", tel: "1111" };
let cloneObj = { ...obj, addr: "서울시" };

let numArray = [100, 200, 300, 400, 500];

// 변수 "백","이백","삼백","사백","오백"을 선언하고
// 숫자배열에 담긴 요소들을 순서대로
// 한개씩 선언된 변수에 담아서 초기화 하라
let [백, 이백, 삼백, 사백, 오백] = numArray;

let 백1 = 100;
let 이백1 = 200;
let 삼백1 = 300;

console.log(백, 이백, 삼백, 사백, 오백);

// 배열의 요소를 만들고
let 나라들 = ["KOREA", "USA", "CHINA", "JAPAN", "ENGLISH"];
// 배열의 요소를 초기값을 갖는 변수를 생성하기
let [한국, 미국, 중국, 일본, 영국] = 나라들;
console.log(한국, 미국, 중국, 일본, 영국);
