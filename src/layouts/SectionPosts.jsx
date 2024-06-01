import { useParams } from "react-router-dom";
import Photo from "../assets/Rectangle 35.png";

export default function SectionPosts() {
  const params = useParams();
  return (
    <>
      <div style={{ height: "20vh", width: "100vw" }} className="bg-primary">
        <img src={Photo} alt="photo" className="w-100 h-100 object-fit-cover" />
      </div>

      <div className="container mt-5">
        <h1>Post Detail</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ea
            possimus quibusdam iusto animi optio quod. Asperiores eos sed odio
            ducimus nisi est et eveniet?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad libero
            corrupti, reprehenderit, mollitia aliquam numquam quam reiciendis,
            est temporibus voluptatum veniam minima blanditiis amet architecto?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            consequuntur minus tempore totam accusamus ratione porro, quia,
            repudiandae est, dignissimos nemo a rem sed rerum tempora quisquam
            aspernatur facilis deleniti inventore hic voluptatibus ducimus.
            Maxime repellat dolorem quas magni quisquam aperiam. Deserunt
            placeat, iusto culpa nulla rem nostrum vel nisi illum quisquam sint
            reiciendis laboriosam quam cumque laborum explicabo soluta itaque
            mollitia nobis illo sapiente corporis in molestias tempore. Mollitia
            quam, quasi architecto expedita rerum, ad sit sunt unde natus
            laborum pariatur qui, similique in? Vitae odio necessitatibus ipsam?
            Ab laboriosam, nesciunt iusto modi explicabo repellat aliquid
            repudiandae reprehenderit fugit.
          </p>
        </div>
      </div>
    </>
  );
}
