import NavLogin from "../components/NavLogin";
import FootLogin from "../components/FootLogin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function MainLayLogin({ children }) {
  const navigate = useNavigate();

  function checkAuth() {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/admin/login");
    }
  }

  // check auth ketika pertama kali halaman diakses
  // useEffect mount
  useEffect(() => {
    checkAuth();
  }),
    [];

  return (
    <div className="d-flex flex-column " style={{ minHeight: "100vh" }}>
      <NavLogin />

      <main>{children}</main>

      <FootLogin />
    </div>
  );
}
