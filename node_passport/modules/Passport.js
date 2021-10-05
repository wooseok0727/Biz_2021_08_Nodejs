import passport from "passport";
import passportLocal from "passport-local";

// local login 정책을 수행하는 모듈
const LocalStrategy = passportLocal.Strategy;

const exportPassport = () => {
  // 로그인이 성공했을 때 (내부에서) 호출되는 함수
  passport.serializeUser((user, done) => {
    console.log("로그인 성공");
    done(null, user);
  });
  // 로그인이 정상적으로 수행된 후 client에서 세션이 유효한지
  // 문의가 들어왔을때 실행되는 함수
  passport.deserializeUser((user, done) => {
    console.log("DES", user);
    done(null, user);
  });

  // 로그인을 실제 수행하는 함수
  passport.use(
    new LocalStrategy(
      {
        // login을 수행할 때 전달될 변수명 설정
        usernameField: "userid",
        passwordField: "password",
        session: true, // 세션 저장하기
      },
      (userid, password, done) => {
        return done(null, { userid: "root", password: "12345" });
      }
    )
  );
};

export default exportPassport;
