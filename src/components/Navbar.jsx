import { NavLink } from "react-router-dom";
import logo from "../assets/logo-pondok.svg";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <NavLink to={"/"} className="navbar-brand">
            <img src={logo} alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-3 ">
              <li className="nav-item">
                <NavLink to="/" className="nav-link text-white">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/profil" className="nav-link text-white">
                  PROFIL
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/program" className="nav-link text-white">
                  PROGRAM
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/galeri" className="nav-link text-white ">
                  GALERI
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/kontak" className="nav-link text-white">
                  KONTAK
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
