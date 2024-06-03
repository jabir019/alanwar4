import cahngaji from "../assets/cahngaji.png";

export default function SectionQuote() {
  return (
    <>
      <section className="section-hero h-100 ">
        <div className="container">
          <div className="row align-items-center h-100 justify-content-center text-center mt-5 ">
            <div className="col-8 text-white mt-2 ">
              <h5>KH. Maimoen Zubair</h5>
              <h1 className="mt-3">
                "Ojo mikir engko dadi opo. Sing penting saiki sinau sing
                sregep."
              </h1>
              <button type="button" class="btn btn-warning btn-lg m-3 ">
                AYO MONDOK SEKARANG
              </button>
            </div>
          </div>
        </div>

        <div className="bg overlay-bg"></div>
        <img
          src={cahngaji}
          className="object-fit-cover bg img-bg"
          alt="cahngaji"
        />
      </section>
    </>
  );
}
