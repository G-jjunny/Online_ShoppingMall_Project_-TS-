import { useNavigate } from "react-router-dom";
import Form from "../../../components/form/Form";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/user/user.slice";

const SignUp = () => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");

  const dispatch = useDispatch();

  const auth = getAuth(app);
  const handleSignUpAndLogin = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // 리덕스 스토어에 담는 로직
        dispatch(
          setUser({
            email: userCredential.user.email,
            token: userCredential.user.token,
            id: userCredential.user.uid,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        return (
          error && setFirebaseError("이메일 또는 비밀번호가 잘못되었습니다.")
        );
      });
  };

  return (
    <Form
      title={"가입하기"}
      getDataForm={handleSignUpAndLogin}
      firebaseError={firebaseError}
    />
  );
};

export default SignUp;
