import { useState } from "react";

export default function SectionAdmin() {
  const [judul, setJudul] = useState("");
  const [konten, setKonten] = useState("");

  return (
    <div className="container my-5 ">
      <div className="row justify-content-center">
        <div className="col-6 bg-angger">
          <form>
            <h2 className="text-center text-primary">
              Membuat Postingan Website
            </h2>
            <div id="emailHelp" className="form-text">
              Featured Media
            </div>
            <input type="file" className="form-control" />
            <div className="mb-3">
              <div id="emailHelp" className="form-text">
                Judul
              </div>
              <input
                value={judul}
                onInput={(event) => setJudul(event.target.value)}
                type="username"
                className="form-control"
                id="judul"
                rows={4}
                placeholder="Judul Postingan"
              />
            </div>
            <div className="mb-3">
              <div id="emailHelp" className="form-text">
                Konten
              </div>
              <textarea
                value={konten}
                onInput={(event) => setKonten(event.target.value)}
                type="username"
                className="form-control"
                id="username"
                placeholder="Konten Postingan"
              />
            </div>
            <button type="submit" className="btn btn-primary mb-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
