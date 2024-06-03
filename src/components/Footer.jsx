import anakhormat from "../assets/anakhormat.png";
import elips from "../assets/elips1.png";
import elips2 from "../assets/elips2.png";
import elips3 from "../assets/elips3.png";

export default function Footer() {
  return (
    <>
      <footer className="position-relative py-5 mt-auto mb-0">
        <div className="container ">
          <div className="row   align-items-center justify-items-end">
            <div className="col-12 col-md-8">
              <h2 className="text-white text-start ">
                Mewujudkan santri yang berakhlakul karimah, religius dan
                berwawasan intelektual.
              </h2>
            </div>
            <div className="col-12 col-md-4  ">
              <div className=" d-flex justify-content-center align-items-center position-relative">
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
        </div>
        <div className="bg overlay-bg"></div>
        <img
          src={anakhormat}
          className="object-fit-cover bg img-bg "
          alt="anakhormat"
        />
      </footer>
      <div className="bg-primary text-center mb-0 ">
        <div className="container">
          <p className="text-white py-2 mb-0">Copyright ©️ 2024 by Jabir</p>
        </div>
      </div>
    </>
  );
}
