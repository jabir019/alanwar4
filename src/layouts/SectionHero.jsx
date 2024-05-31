import { NavLink } from "react-router-dom";
import foto from "../assets/background-1.png";
import background from "../assets/bacground.png";

export default function SectionHero() {
  return (
    <>
      <section className="position-relative">
        <div className="container">
          {/* bacground & overlay */}
          <div className="bg overlay-bg"></div>
          <img
            src={background}
            className="bg img-bg object-fit-cover"
            alt="blur"
          />

          <div className="row">
            <div className="col-md-6 col-12 text-white align-self-center">
              <h5>Selamat datang di</h5>
              <h1>Pondok Pesantren Alanwar IV Sarang</h1>
              <p>
                Didirikan oleh KH. Maimoen Zubair pada tahun 2018.dan diasuh
                oleh putra beliau KH. Taj Yasin Maimoen bersama dengan istri Ny.
                Hj. Nawal Nur Arafah yang di dalamnya termuat Lembaga SMK Al
                Anwar Sarang dan MTS Sains Al Anwar 4.
              </p>
              <NavLink
                to={"/pendaftaran"}
                type="button"
                className="btn btn-light btn-mb"
              >
                PENDAFTARAN
              </NavLink>

              <NavLink
                to={"/profil"}
                type="button"
                className="btn btn-outline-warning  btn-mb m-3 "
              >
                PROFIL
              </NavLink>
            </div>
            <div className="col-md-6 object-fit-cover col-12 align-self-end">
              <img className="w-100" src={foto} alt="foto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
