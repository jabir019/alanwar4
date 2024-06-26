import Profil2 from "../assets/profil2.png";

export default function SectionProfil() {
  return (
    <>
      <section className="container py-3">
        <div className="row py-3 justify-content-center ">
          <div className="col-12">
            <img
              src={Profil2}
              className="w-100 object-fit-cover"
              alt="profil2"
            />
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col-md-8 col-12">
            <h1 className="text-primary mb-5">
              Profil Pondok Pesantren Al-Anwar IV Sarang, Rembang, Jawa Tengah.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur nisi dolorem quidem at ipsam beatae, ex quibusdam
              consectetur ipsa laborum id facilis debitis modi, porro, ducimus a
              vel. Expedita consectetur doloremque placeat harum distinctio, eum
              veritatis a adipisci culpa ullam, et sint ea eos voluptates vero
              error cumque modi provident.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae dolor illum cum eum, rerum id libero consequuntur
              consectetur vero possimus ex dignissimos deleniti dolorum impedit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              perspiciatis adipisci quia ad tenetur optio eaque assumenda illo
              nesciunt eius, voluptatum doloremque, sunt vitae aspernatur ipsa
              laborum magnam ex minima repudiandae dolores sequi, aliquam
              incidunt quas distinctio. Non ipsam maiores odio id ullam, sequi
              delectus est impedit aspernatur ad neque?
            </p>
          </div>
          <div className="col-md-4 col-12 bg-secondary-subtle d-flex flex-column mb-3 ">
            <h2>Visi</h2>
            <p>
              Mewujudkan Santri yang Berakhlakul Karimah, Religius, dan
              Berwawasan Intelektual.
            </p>
            <h2>Misi</h2>
            <p>
              Menyiapkan generasi bangsa yang terampil, produktif, siap bersaing
              di dunia usaha dan industri.
            </p>
            <p>Membentuk karakter yang santun dan bermanfaat.</p>
            <p>
              Menanamkan keilmuan yang berlandaskan Al-Quran dan kutubussalaf.
            </p>

            <button className="btn btn-primary mt-auto text-white ">
              DOWNLOAD BROSUR
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
