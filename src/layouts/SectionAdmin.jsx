import { useState } from "react";

import Swal from "sweetalert2";

export default function SectionAdmin() {
  const [judul, setJudul] = useState("");
  const [konten, setKonten] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // state image
  const [image, setImage] = useState(null);

  async function uploadImage(image) {
    const formData = new FormData();
    formData.append("file", image);

    const response = await fetch(
      "https://jabir.neuversity.site/wp-json/wp/v2/media",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: formData,
      }
    );
    const data = await response.json();
    if (!data.id) throw new Error("tidak ada gambar");

    return data.id;
  }

  async function createPost() {
    const featured_media_id = await uploadImage(image);
    fetch("https://jabir.neuversity.site/wp-json/wp/v2/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title: judul,
        content: konten,
        status: "publish",
        featured_media: featured_media_id,
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
    <div className="container">
      <div className="row justify-content-center">
        <div className="my-5 px-3 bg-angger">
          <div className="col-12 col-md-8 m-auto">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <h2 className="text-center text-primary py-3">
                Membuat Postingan Website
              </h2>
              <div id="emailHelp" className="form-text">
                Featured Media
              </div>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setImage(e.target.files[0])}
                id="featured_media"
              />
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
    </div>
  );
}
