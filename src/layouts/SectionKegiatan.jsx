import { useEffect, useState } from "react";
import kegiatan1 from "../assets/kegiatan1.png";
import kegiatan2 from "../assets/kegiatan2.png";
import kegiatan3 from "../assets/kegiatan3.png";
import { Link } from "react-router-dom";

export default function SectionKegiatan() {
  // Ekspor default fungsi SectionKegiatan

  const [posts, setPosts] = useState([]);
  // Menggunakan hook useState untuk membuat state posts dengan nilai awal kosong

  useEffect(() => {
    // Menggunakan hook useEffect untuk fetch data dari API WordPress
    fetch("https://jabir.neuversity.site/wp-json/wp/v2/posts?_embed")
      // Fetch data dari API WordPress

      .then((response) => response.json())
      // Mengonversi response menjadi JSON

      .then((data) => setPosts(data));
    // Mengatur state posts dengan data yang diterima
  }, []);
  // menutup fungsi useEffect dan memberikan array kosong sebagai dependensi. Artinya, fungsi useEffect ini akan dijalankan hanya sekali saat komponen pertama kali dirender.

  useEffect(() => {
    // Menggunakan hook useEffect untuk menampilkan data dari state posts
    console.log(posts);
    // Mengirimkan data ke console
  }, [posts]);

  // menutup fungsi useEffect dan memberikan array [posts] sebagai dependensi. Artinya, fungsi useEffect ini akan dijalankan setiap kali state posts berubah.
  return (
    <>
      <section>
        <div className="container text-center mt-5 py-2 text-primary ">
          <h3>Kegiatan Pondok</h3>
        </div>
        <div className="container h-100 ">
          <div className="row mx-auto align-items-center justify-content-center ">
            {posts.map((post) => (
              // Mapping data posts
              <div className="col-md-3 col-12 mb-3">
                <div className="card">
                  <img
                    src={
                      post._embedded["wp:featuredmedia"]
                        ? post._embedded["wp:featuredmedia"][0]["source_url"]
                        : "https://picsum.photos/100/100?"
                      // Mengambil gambar dari API WordPress
                    }
                    className="card-img-top card-blog-img"
                    alt="kegiatan1"
                  />
                  <div className="card-body">
                    <h5 className="card-title card-blog-title ">
                      {post.title.rendered}
                      {/* Mengambil judul dari API WordPress */}
                    </h5>
                    <p
                      className="card-blog-description card-text"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                        // Mengambil deskripsi dari API WordPress
                      }}
                    />
                    <Link className="btn btn-primary" to={`/posts/${post.id}`}>
                      Lihat Kegiatan
                    </Link>
                    {/* Mengarahkan ke halaman posts dengan id yang sesuai */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
