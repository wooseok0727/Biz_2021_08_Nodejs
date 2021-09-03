# Nodejs + Express + MongoDB API Server

- view와 독립적인(상관없는) 순수 API Server 실습
- 순수 \*.html 에서 서버에 RESTful 요청을 수행하는 실습

## nodejs + express 프로젝트 생성 후 할일 들

npm install cookie-parser
npm install debug
npm install express
npm install http-errors
npm install morgan
npm install pug

## nodejs + MongoDB 연동

- native 방식, ORM 방식이 있다
- native 방식 : mongoDB Client 를 설정하여 직접 명령을 전달하기
- ORM 방식 : mongoose를 사용하여 modeling 방식으로 사용하기
- mongoose dependency를 설정 : npm install mongoose

### MongoDB Atlas 접속정보

mongodb+srv://wooseok:<password>@cluster0.ivvgw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
