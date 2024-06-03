import MainLayout from "../layouts/MainLayout";
import Profil1 from "../assets/profil1.png";
import SectionProfil from "../layouts/SectionProfil";

export default function Profil() {
  return (
    <>
      <MainLayout>
        <section className="section-profil">
          <div className="container">
            {/* bacground & overlay */}
            <div className="bg overlay-bg"></div>
            <img
              src={Profil1}
              className="object-fit-cover bg img-bg"
              alt="profil1"
            />

            <div className="row h-100 align-items-center justify-item-center ">
              <div className="col-md-6 col-12 text-white align-self-center mt-5 ">
                <h1>Profil</h1>
              </div>
            </div>
          </div>
        </section>
        <SectionProfil />
      </MainLayout>
    </>
  );
}
