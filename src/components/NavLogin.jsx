import Logo from "../assets/logoaja.svg";
import { useNavigate } from "react-router-dom";

export default function NavLogin() {
  const navigate = useNavigate();

  function handleLogout() {
    const konfirmasi = confirm("Apakah anda yakin ingin keluar?");
    if (konfirmasi) {
      // remove token
      localStorage.removeItem("token");

      // redirect ke halaman login
      navigate("/admin/login");
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="logo" />
          </a>
          <div>
            <button onClick={handleLogout} className="btn btn-danger">
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
