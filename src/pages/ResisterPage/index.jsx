import { Link } from "react-router-dom";
import SignUp from "./sign-up/SignUp";

const ResisterPage = () => {
  return (
    <div className="page">
      <div className="form_container">
        <h1>회원가입</h1>
        <SignUp />
        <p>이미 계정이 있습니까?</p>
        <Link to={"/login"}>로그인하기</Link>
      </div>
    </div>
  );
};

export default ResisterPage;
