import MainLayout from "../layouts/MainLayout";
import Musang from "../assets/musang.webp";

export default function NotFound() {
  return (
    <>
      <MainLayout>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-8">
              <img className="w-100" src={Musang} alt="musang" />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
