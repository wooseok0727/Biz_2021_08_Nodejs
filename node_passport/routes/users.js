import passport from "passport";
import express from "express";

const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/**
 * react 와 nodejs API를 연동하여 login 구현하기
 * login router는 반드시 POST 로 구현해야 한다
 * oAuth2.0 passport 방식으로 login을 할때는
 * 정책상 반드시 POST로 요청을 해야 한다
 *
 * passport를 사용하여 Login을 수행할때 router의
 * path와 callback 함수사이에서 login 정책을 수행할 미들웨어
 * passport.authenticate("local")
 */

router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log(req.user);
  res.json({ userid: req.user.userid, password: req.user.password });
});

/**
 * 클라이언트에서 서버로 데이터를 전송하는 방법
 * queryString : 주소창에 ?변수1=값&변수2=값 과 같은 형식으로 전송
 *    http://localhost:8080/user?id=root&password=1234
 * => 서버에서 받을때는 req.query
 * pathVarriable : 주소창에 보내는데 URL과 섞어서 보내는 방식
 *    http://localhost:8080/user/callor/1234
 * => router.get("/user/:id/:password")
 * => 서버에서 받을때 req.params.변수
 *
 * POST 로 전송된 데이터는 전송되는 순간 노출을 최소화할수 있다
 * https 를 사용하면 데이터가 암호화 되어 전송된다
 * => 서버에서 받을때는 req.body.변수
 */

router.post("/join", (req, res) => {
  console.log(req.body);
  const { userid, password, email } = req.body;
  res.json({ userid, password, email });
});

export default router;
