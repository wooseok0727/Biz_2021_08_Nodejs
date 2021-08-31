// fetch를 사용하여 서버에 데이터를 요청하기 위해 별도의
// 함수를 선언하기
const order_input = (table_id, menu_id) => {
  // path Varriable 방식으로 menu_id 값을 URL에 포함하여
  // getter 요청하기

  /**
   * 만약 3번 테이블에 5번 메뉴를 추가하려고 Request를 한다면
   * localhost:3000/order/3/input/5 과 같은 URL을 만들어
   * 서버로 request 한다
   * 이런식으로 만드는 URL 방식을 RESTful 요청 이라고 한다
   */
  fetch(`/pos/order/${table_id}/input/${menu_id}`)
    .then((res) => res.json())
    .then((result) => console.log(result));
};

// DOMContentLoaded event를 설정하면
// JS 코드가 HTML의 어떤 부분에 있어도 상관없이 작동이 된다
document.addEventListener("DOMContentLoaded", () => {
  const product_article = document.querySelector("article.product_list");
  const order_article = document.querySelector("article.order_list");
  const table_id = order_article.dataset.table_id;

  if (product_article) {
    product_article.addEventListener("click", (e) => {
      const target = e.target;
      // index.pug의 table layout click 설정
      if (target.tagName === "DIV" && target.className.includes("menu")) {
        const menu_id = target.dataset.menu_id;
        // lert(menu_id + "번 선택됨");
        // document.location.href = `/pos/order/input/${menu_id}`;

        // fetch 전송을 위한 함수 호출
        order_input(table_id, menu_id);
      }
    });
  }
});
