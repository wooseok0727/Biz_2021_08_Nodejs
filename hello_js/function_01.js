const func1 = function () {
  console.log("나는 함수 1 입니다");
};

func3();
func1();

// func2() 를 호출하였는데 아직 func2가 선언된 명령문을 만나지 못하여
// 여기에서 오류가 발생한다.
func2();

const func2 = function () {
  console.log("나는 함수 2 입니다");
};

// ES6 이전에 사용하던 코드

// 호이스팅...
// 아래와 같은 방식으로 선언된 함수가 있으면
// JS 는 실행을 할때 이 함수를 호출한 곳이 있는지 먼저 검사
// 만약 선언문 보다 먼저 호출(사용한) 곳이 있으면
// 내부적으로 코드의 위치를 변경하는 시도를 한다

function func3() {
  console.log("나는 함수 3 입니다");
}
