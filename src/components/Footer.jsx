import anakhormat from "../assets/anakhormat.png";
import elips from "../assets/elips1.png";

export default function Footer() {
  return (
    <>
      <footer
        className="position-relative py-5 mt-auto mb-0"
        style={{
          height: "60vh",
        }}
      >
        <div className="container h-100">
          <div className="row h-100  align-items-center justify-items-center">
            <div className="col-12 col-md-8">
              <h2 className="text-white text-start ">
                Mewujudkan santri yang berakhlakul karimah, religius dan
                berwawasan intelektual.
              </h2>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
              <a
                href="https://www.youtube.com/@alanwar4media806"
                target="_blank"
              >
                <div className="icon-cont">
                  <div className="icon-cont2">
                    <img className="d-flex" src={elips} alt="yusup" />
                  </div>
                </div>
              </a>
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
