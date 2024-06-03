import { useEffect, useState } from "react";
import kegiatan1 from "../assets/kegiatan1.png";
import kegiatan2 from "../assets/kegiatan2.png";
import kegiatan3 from "../assets/kegiatan3.png";
import { Link } from "react-router-dom";

export default function SectionKegiatan() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://web.abdulhaxor.my.id/wp-json/wp/v2/posts?_embed")
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
                    src={
                      post._embedded["wp:featuredmedia"]
                        ? post._embedded["wp:featuredmedia"][0]["source_url"]
                        : "https://picsum.photos/100/100?"
                    }
                    className="card-img-top card-blog-img"
                    alt="kegiatan1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{post.title.rendered}</h5>
                    <p
                      className="card-text"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    />
                    <Link to={`/posts/${post.id}`}>Lihat Kegiatan</Link>
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
