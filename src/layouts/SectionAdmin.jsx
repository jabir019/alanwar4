import { useState } from "react";

import Swal from "sweetalert2";

export default function SectionAdmin() {
  const [judul, setJudul] = useState("");
  const [konten, setKonten] = useState("");

  function createPost() {
    fetch("https://web.abdulhaxor.my.id/wp-json/wp/v2/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title: judul,
        content: konten,
        status: "publish",
      }),
    }).then(async (Response) => {
      const data = await Response.json();
      console.log(data);

      if (Response.ok) {
        Swal.fire({
          title: "Berhasil",
          text: "Berhasil",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Gagal",
          text: "Gagal",
          icon: "error",
        });
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    createPost();
  }

  return (
    <div className="container my-5 ">
      <div className="row justify-content-center">
        <div className="col-6 bg-angger">
          <form onSubmit={handleSubmit}>
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
