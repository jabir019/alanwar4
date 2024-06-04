import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Photo from "../assets/Rectangle 35.png";

export default function SectionPosts() {
  // Ekspor default fungsi SectionPosts

  const [posts, setPosts] = useState(null);

  // Menggunakan hook useState untuk membuat state posts dengan nilai awal null

  const params = useParams();

  // Menggunakan hook useParams untuk mendapatkan fungsi params

  useEffect(() => {
    fetch(
      `https://jabir.neuversity.site/wp-json/wp/v2/posts/${params.id}?_embed`
      // Menggunakan hook useEffect untuk fetch data dari API WordPress
    )
      .then((Response) => Response.json())
      // Mengonversi response menjadi JSON
      .then((data) => {
        // Mengatur state posts dengan data yang diterima
        if (data.id) setPosts(data);

        // Jika data.id ada, maka setPosts dengan data
        console.log(data);
        // Mengirimkan data ke console
      });
  }, []);
  return (
    <>
      {posts ? (
        // Jika posts ada, tampilkan

        <>
          <div
            style={{ height: "60vh", width: "100%", objectFit: "cover" }}
            className="bg-primary"
          >
            <img
              src={
                posts._embedded["wp:featuredmedia"]
                  ? posts._embedded["wp:featuredmedia"][0].media_details.sizes
                      .thumbnail.source_url
                  : // Mengambil gambar dari API WordPress
                    "https://picsum.photos/300/300?"
                // Mengambil gambar dari API WordPress
              }
              className="w-100 h-100 object-fit-cover"
              alt="random image"
            />
          </div>

          <div className="container mt-5">
            <h1>{posts.title.rendered}</h1>
            {/* Mengambil judul dari API WordPress */}
            <div
              dangerouslySetInnerHTML={{ __html: posts.content.rendered }}
              // Mengambil konten dari API WordPress
            ></div>
          </div>
        </>
      ) : (
        // Jika posts tidak ada, tampilkan
        <>Data Tidak ditemukan</>
      )}
    </>
  );
}
