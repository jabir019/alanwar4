import MainLayout from "../layouts/MainLayout";

export default function Program() {
  return (
    <>
      <MainLayout>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-4">
              <img src={WNF} className="w-100" alt="wnf" />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
