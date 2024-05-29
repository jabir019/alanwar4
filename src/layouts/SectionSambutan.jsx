import abi from "../assets/fotoabi.png";

export default function SectionSambutan() {
  return (
    <>
      <section className="container py-5">
        <div className="row py-5">
          <div className="col-md-6 col-12">
            <img className="w-100" src={abi} alt="fotoabi" />
          </div>
          <div className="col-md-6 col-12">
            <h4>KH. Taj Yasin Maimoen</h4>
            <h2>
              Sambutan Pengasuh Pondok Pesantren Al Anwar IV Sarang, Rembang,
              Jawa Tengah.
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis doloribus dignissimos repellendus blanditiis harum
              eveniet quod? Corporis repudiandae cum officiis est nobis sequi
              numquam doloribus minus, suscipit soluta magnam amet assumenda
              quam aliquid natus consequuntur expedita fugiat dolores rerum? Ab
              nihil consequatur quod aspernatur facere odio sapiente quas
              accusamus et.
            </p>
            <button className="bg-primary text-white">BACA SELENGKAPNYA</button>
          </div>
        </div>
      </section>
    </>
  );
}
