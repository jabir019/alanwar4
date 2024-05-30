import Logo from "../assets/logoaja.svg";

export default function SectionDashbor() {
  return (
    <>
      <section>
        <div className="container m-5">
          <div className="row justify-content-center">
            <div className="col-6 bg-angger">
              <form>
                <h3 className="text-center text-primary py-2">
                  Al-Anwar 4 - Admin Login
                </h3>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="username"
                    className="form-control"
                    id="username"
                  />
                  <div id="emailHelp" className="form-text">
                    Admin Username
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Ingat saya
                  </label>
                </div>
                <button type="submit" className="btn btn-primary mb-2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
