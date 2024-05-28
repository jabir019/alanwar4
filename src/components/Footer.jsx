import anakhormat from "../assets/anakhormat.png";

export default function Footer() {
  return (
    <>
      <section className="section-hero mt-5">
        <div className="container h-100">
          <div className="row  h-100 align-items-center justify-items-center">
            <div className="col-6 ">
              <h2 className="text-white text-start ">
                Mewujudkan santri yang berakhlakul karimah, religius dan
                berwawasan intelektual.
              </h2>
            </div>
          </div>
        </div>
        <div className="bg overlay-bg"></div>
        <img src={anakhormat} className="bg img-bg " alt="anakhormat" />
      </section>
    </>
  );
}
