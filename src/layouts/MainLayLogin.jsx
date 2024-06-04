import NavLogin from "../components/NavLogin";
import FootLogin from "../components/FootLogin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function MainLayLogin({ children }) {
  // Ekspor default fungsi MainLayLogin yang menerima props children

  const navigate = useNavigate();
  // Menggunakan hook useNavigate untuk mendapatkan fungsi navigate

  function checkAuth() {
    // Fungsi checkAuth untuk memeriksa apakah pengguna telah login
    const token = localStorage.getItem("token");
    // Mengambil token dari local storage

    if (!token) {
      navigate("/admin/login");
      // Jika token tidak ada, maka redirect ke halaman login
    }
  }

  // check auth ketika pertama kali halaman diakses
  // useEffect mount
  useEffect(() => {
    // Fungsi checkAuth dipanggil ketika effect dijalankan
    checkAuth();
  }),
    [];
  // Dependency array kosong, maka effect hanya dijalankan sekali ketika component pertama kali dirender

  return (
    <div className="d-flex flex-column " style={{ minHeight: "100vh" }}>
      <NavLogin />

      <main>{children}</main>

      <FootLogin />
    </div>
  );
}
