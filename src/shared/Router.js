import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../components/auth/SignUp";
import Login from "../components/auth/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<div>Home</div>} />
        <Route path="/detail/:id" element={<div>상세 화면</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<div>프로필 화면</div>} />
      </Routes>
    </BrowserRouter>
  );
}
