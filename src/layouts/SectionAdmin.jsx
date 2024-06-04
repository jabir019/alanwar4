import { useState } from "react";

import Swal from "sweetalert2";

export default function SectionAdmin() {
  const [judul, setJudul] = useState("");
  // State untuk menyimpan judul postingan, awalnya kosong

  const [konten, setKonten] = useState("");
  // State untuk menyimpan konten postingan, awalnya kosong

  const [isLoading, setIsLoading] = useState(false);
  // State untuk menunjukkan apakah sedang loading atau tidak

  const [image, setImage] = useState(null);
  // State untuk menyimpan gambar yang akan diupload

  async function uploadImage(image) {
    // Fungsi untuk mengupload gambar ke server

    const formData = new FormData();
    // Membuat instance FormData untuk mengirimkan file

    formData.append("file", image);
    // Menambahkan file gambar ke formData

    const response = await fetch(
      "https://jabir.neuversity.site/wp-json/wp/v2/media",
      // Mengirimkan request ke server untuk mengupload gambar

      {
        method: "POST",
        // Metode request adalah POST

        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          // Menambahkan token autentikasi ke header
        },
        body: formData,
        // Mengirimkan formData sebagai body request
      }
    );
    const data = await response.json();
    // Mengambil response dari server dan mengkonversinya ke JSON

    if (!data.id) throw new Error("tidak ada gambar");
    // Jika tidak ada ID gambar, maka throw error

    return data.id;
    // Mengembalikan ID gambar yang telah diupload
  }

  async function createPost() {
    // Fungsi untuk membuat postingan baru

    const featured_media_id = await uploadImage(image);
    // Mengupload gambar dan mengambil ID-nya

    fetch("https://jabir.neuversity.site/wp-json/wp/v2/posts", {
      // Mengirimkan request ke server untuk membuat postingan baru

      method: "POST",
      // Metode request adalah POST

      headers: {
        "Content-Type": "application/json",
        // Menentukan tipe konten sebagai JSON

        Authorization: "Bearer " + localStorage.getItem("token"),
        // Menambahkan token autentikasi ke header
      },
      body: JSON.stringify({
        // Mengirimkan data postingan sebagai JSON

        title: judul,
        // Judul postingan

        content: konten,
        status: "publish",
        // Status postingan adalah publish

        featured_media: featured_media_id, // ID gambar yang telah diupload
      }),
    }).then(async (Response) => {
      // Mengambil response dari server

      const data = await Response.json();
      // Mengambil response dari server dan mengkonversinya ke JSON

      console.log(data);
      // Mencetak data ke console

      if (Response.ok) {
        // Jika response berhasil

        Swal.fire({
          // Menampilkan pesan konfirmasi berhasil

          title: "Berhasil",
          text: "Berhasil",
          icon: "success",
        });
      } else {
        // Jika response gagal
        Swal.fire({
          // Menampilkan pesan konfirmasi gagal

          title: "Gagal",
          text: "Gagal",
          icon: "error",
        });
      }
    });
  }

  function handleSubmit(event) {
    // Mencegah default behavior dari form submit

    event.preventDefault();

    createPost();
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        {/* Row untuk mengatur layout horizontal */}

        <div className="my-5 px-3 bg-angger">
          {/* Container untuk mengatur layout vertikal */}

          <div className="col-12 col-md-8 m-auto">
            {/* Container untuk mengatur layout kolom */}

            <form onSubmit={handleSubmit} encType="multipart/form-data">
              {/* Judul form */}

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
                // Input file untuk mengupload gambar
              />
              <div className="mb-3">
                <div id="emailHelp" className="form-text">
                  Judul
                </div>
                <input
                  value={judul}
                  onInput={(event) => setJudul(event.target.value)}
                  // Input text untuk mengisi judul postingan

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
                  // Textarea untuk mengisi konten postingan
                />
              </div>
              <button type="submit" className="btn btn-primary mb-2">
                {/* Tombol submit untuk mengirim data ke server */}
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
