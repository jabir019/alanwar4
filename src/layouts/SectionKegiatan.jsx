import { useEffect, useState } from "react";
import kegiatan1 from "../assets/kegiatan1.png";
import kegiatan2 from "../assets/kegiatan2.png";
import kegiatan3 from "../assets/kegiatan3.png";

export default function SectionKegiatan() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jabir.neuversity.site/wp-json/wp/v2/posts?")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return (
    <>
      <section>
        <div className="container py-5 text-primary ">
          <h3>Kegiatan Pondok</h3>
        </div>
        <div className="container h-100 ">
          <div className="row mx-auto align-items-center justify-content-center ">
            {posts.map((post) => (
              <div className="col-md-3 col-12 mb-3">
                <div className="card">
                  <img
                    src={kegiatan1}
                    className="card-img-top"
                    alt="kegiatan1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{post.title.rendered}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
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
