import MainLayout from "../layouts/MainLayout";
import Profil1 from "../assets/profil1.png";
import SectionProfil from "../layouts/SectionProfil";

export default function Profil() {
  return (
    <>
      <MainLayout>
        <section className="section-hero">
          <div className="container">
            <div className="row align-items-center justify-content-center ">
              <h1>PROFIL</h1>
            </div>

            <div className=" bg overlay-bg"></div>
            <img
              src={Profil1}
              className="bg img-bg object-fit-cover"
              alt="profil1"
            />
          </div>
        </section>
        <SectionProfil />
      </MainLayout>
    </>
  );
}
