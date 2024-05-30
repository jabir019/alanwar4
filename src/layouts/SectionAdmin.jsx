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

      <div className="container">
        <div className="row">
          <div className="col-6"></div>
        </div>
      </div>
    </>
  );
}
