import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  loginThunk,
  selectSignupAsyncState,
  selectUserId,
} from "../../modules/authSlice.config";
import { useDispatch, useSelector } from "react-redux";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector(selectUserId);
  const [formState, setFormState] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const { isSignupSuccess } = useSelector(selectSignupAsyncState);

  useEffect(() => {
    if (isSignupSuccess) {
      navigate("/login");
    }
  }, [isSignupSuccess]);

  const handleChange = (e) => {
    if (e.target === e.currentTarget) return;

    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const hadleSignUp = (e) => {
    e.preventDefault();
    dispatch(loginThunk({ ...formState }));
    // 회원가입 성공시
    if (false) {
      navigate("/login");
    }
  };
  return (
    <form onSubmit={hadleSignUp} onChange={handleChange}>
      <h1>회원가입</h1>
      <input
        name="id"
        type="text"
        placeholder="아이디"
        minLength={4}
        maxLength={10}
        value={formState.id}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="비밀번호"
        minLength={4}
        maxLength={10}
        value={formState.password}
        required
      />
      <input
        name="nickname"
        type="text"
        placeholder="닉네임"
        minLength={1}
        maxLength={10}
        value={formState.nickname}
        required
      />
      <button type=""></button>
      <Link to="/signup"></Link>
    </form>
  );
}
