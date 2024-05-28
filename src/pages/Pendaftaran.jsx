import MainLayout from "../layouts/MainLayout";
import Profil1 from "../assets/profil1.png";

export default function Pendaftaran() {
  return (
    <>
      <MainLayout>
        <section className="section-profil">
          <div className="container">
            {/* bacground & overlay */}
            <div className="bg overlay-bg"></div>
            <img src={Profil1} className="bg img-bg" alt="profil1" />

            <div className="row h-100 align-items-center justify-item-center ">
              <div className="col-md-6 col-12 text-white align-self-center mt-5 ">
                <h1>Pendaftaran</h1>
              </div>
            </div>
          </div>
        </section>

        <div class="container mt-5">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="colored-block">
                <p>wkwkwkwkw</p>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
