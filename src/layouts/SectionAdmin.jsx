import Logo from "../assets/logoaja.svg";

export default function SectionAdmin() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="logo" />
          </a>
          <div>
            <button className="btn btn-danger">Logout</button>
          </div>
        </div>
      </nav>
      <div className="container m-5 ">
        <div className="row justify-content-center">
          <div className="col-6 bg-angger">
            <form>
              <h2 className="text-center text-primary">
                Membuat Postingan Website
              </h2>
              <div id="emailHelp" className="form-text">
                Featured Media
              </div>
              <input type="file" className="form-control" />
              <div className="mb-3">
                <div id="emailHelp" className="form-text">
                  Judul
                </div>
                <input
                  type="username"
                  className="form-control"
                  id="username"
                  placeholder="Judul Postingan"
                />
              </div>
              <div className="mb-3">
                <div id="emailHelp" className="form-text">
                  Konten
                </div>
                <input
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

      <footer className="bg-primary text-center">
        <p className="text-white">Created by Jabir</p>
      </footer>
    </>
  );
}
