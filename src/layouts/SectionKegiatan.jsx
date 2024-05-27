import kegiatan1 from "../assets/kegiatan1.png";
import kegiatan2 from "../assets/kegiatan2.png";
import kegiatan3 from "../assets/kegiatan3.png";

export default function SectionKegiatan() {
  return (
    <>
      <section>
        <div className="container py-5 text-primary">
          <h3>Kegiatan Pondok</h3>
        </div>
        <div className="container">
          <div className="row mx-auto ">
            <div className="col-3">
              <div className="card">
                <img src={kegiatan1} className="card-img-top" alt="kegiatan1" />
                <div className="card-body">
                  <h5 className="card-title">Belajar Web tanpa Coding</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src={kegiatan2} className="card-img-top" alt="kegiatan2" />
                <div className="card-body">
                  <h5 className="card-title">Belajar Front end</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src={kegiatan3} className="card-img-top" alt="kegiatan3" />
                <div className="card-body">
                  <h5 className="card-title">Belajar Coding</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
