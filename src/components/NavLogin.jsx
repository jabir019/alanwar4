import Logo from "../assets/logoaja.svg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function NavLogin() {
  const navigate = useNavigate();

  function handleLogout() {
    // menampilkan pesan logout menggunakan sweetalert2
    Swal.fire({
      title: "Logout",
      text: "Apakah anda yakin ingin keluar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        //remove token
        localStorage.removeItem("token");

        // menampilkan pesan berhasil logout
        Swal.fire({
          title: "Logout Berhasil",
          text: "Anda Berhasil Logout",
          icon: "success",
        });

        // redirect ke halaman login
        navigate("/admin/login");
      }
    });
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
