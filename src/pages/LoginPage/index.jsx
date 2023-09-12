import { Link } from "react-router-dom";
import SignIn from "./SignIn/SignIn";

const LoginPage = () => {
  return (
    <div className="page">
      <div className="form_container">
        <h1>로그인</h1>
        <SignIn />
        <p>계정이 없습니까?</p>
        <Link to={"/resister"}>가입하기</Link>
      </div>
    </div>
  );
};

export default LoginPage;
