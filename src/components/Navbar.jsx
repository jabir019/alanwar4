import { NavLink } from "react-router-dom";
import logo from "../assets/logo-pondok.svg";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
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
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/profil" className="nav-link">
                  PROFIL
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  PROGRAM
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  GALERI
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
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
