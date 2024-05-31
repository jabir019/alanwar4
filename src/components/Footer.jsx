import anakhormat from "../assets/anakhormat.png";
import elips from "../assets/elips1.png";
import elips2 from "../assets/elips2.png";
import elips3 from "../assets/elips3.png";

export default function Footer() {
  return (
    <>
      <footer className="section-hero mt-5">
        <div className="container h-100">
          <div className="row  h-100 align-items-center justify-items-center">
            <div className="col-6">
              <h2 className="text-white text-start ">
                Mewujudkan santri yang berakhlakul karimah, religius dan
                berwawasan intelektual.
              </h2>
            </div>
            <div className="col-4 position-relative d-flex justify-content-center align-items-center ">
              <img
                className="position-absolute"
                width={150}
                height={150}
                src={elips3}
                alt=""
              />
              <img
                className="position-absolute"
                width={150}
                height={150}
                src={elips2}
                alt=""
              />
              <img
                className="position-absolute"
                width={50}
                height={50}
                src={elips}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="bg overlay-bg"></div>
        <img
          src={anakhormat}
          className="object-fit-cover bg img-bg "
          alt="anakhormat"
        />

        <div className="bg-primary text-center m-0 ">
          <div className="container">
            <p className="text-white">Copyright ©️ 2024 by Jabir</p>
          </div>
        </div>
      </footer>
    </>
  );
}
