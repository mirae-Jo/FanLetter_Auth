import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const hadleSignIn = () => {};
  return (
    <form onSubmit={hadleSignIn}>
      <h1>로그인</h1>
      <input
        type="text"
        placeholder="아이디"
        minLength={4}
        maxLength={10}
        required
      />
      <input
        type="password"
        placeholder="비밀번호"
        minLength={4}
        maxLength={10}
        required
      />
      <button type=""></button>
      <Link to="/login"></Link>
    </form>
  );
}
