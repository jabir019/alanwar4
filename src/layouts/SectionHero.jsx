import foto from "../assets/background-1.png";
import background from "../assets/bacground.png";

export default function SectionHero() {
  return (
    <>
      <section className="position-relative">
        <div className="container">
          {/* bacground & overlay */}
          <div className="bg overlay-bg"></div>
          <img src={background} className="bg img-bg" alt="blur" />

          <div className="row align-items-center ">
            <div className="col-6 text-white ">
              <h5>Selamat datang di</h5>
              <h1>Pondok Pesantren Alanwar IV Sarang</h1>
              <p>
                Didirikan oleh KH. Maimoen Zubair pada tahun 2018.dan diasuh
                oleh putra beliau KH. Taj Yasin Maimoen bersama dengan istri Ny.
                Hj. Nawal Nur Arafah yang di dalamnya termuat Lembaga SMK Al
                Anwar Sarang dan MTS Sains Al Anwar 4.
              </p>
              <button type="button" className="btn btn-light btn-mb">
                Pendaftaran
              </button>

              <button type="button" className="btn btn-outline-warning  btn-mb">
                Profil
              </button>
            </div>
            <div className="col-6">
              <img className="w-100" src={foto} alt="foto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
