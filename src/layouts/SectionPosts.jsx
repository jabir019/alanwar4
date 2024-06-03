import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Photo from "../assets/Rectangle 35.png";

export default function SectionPosts() {
  const [posts, setPosts] = useState(null);

  const params = useParams();

  useEffect(() => {
    fetch(
      `https://jabir.neuversity.site/wp-json/wp/v2/posts/${params.id}?_embed`
    )
      .then((Response) => Response.json())
      .then((data) => {
        if (data.id) setPosts(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      {posts ? (
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
                  : "https://picsum.photos/300/300?"
              }
              className="w-100 h-100 object-fit-cover"
              alt="random image"
            />
          </div>

          <div className="container mt-5">
            <h1>{posts.title.rendered}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: posts.content.rendered }}
            ></div>
          </div>
        </>
      ) : (
        <>Data Tidak ditemukan</>
      )}
    </>
  );
}
