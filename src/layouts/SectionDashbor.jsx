import React, { useState, useEffect } from "react";
import MainLayLogin from "./MainLayLogin";

export default function SectionDashbor() {
  const [isSuccess, setIsSuccess] = useState(null);
  const [data, setData] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setData(true);
    fetch("https://jabir.neuversity.site/wp-json/jwt-auth/v1/token", {
      method: "POST",
      body: new URLSearchParams({
        username: username,
        password: password,
      }),
    })
      .then((resp) => {
        if (resp.ok) {
          setIsSuccess(true);
          console.log("berhasil");
        } else {
          setIsSuccess(false);
          console.log("gagal");
        }

        return resp.json();
      })
      .then((data) => {
        console.log(data);
        if (data.token) {
          alert("Login Berhasil");
        } else {
          alert("Login Gagal");
        }
      })
      .catch((error) => console.error("Error:", error));
  }

  return (
    <section>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-6 bg-angger">
            <form onSubmit={handleSubmit}>
              <h3 className="text-center text-primary py-2">
                Al-Anwar 4 - Admin Login
              </h3>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input type="username" className="form-control" id="username" />
                <div
                  id="emailHelp"
                  className="form-text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                >
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
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
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
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary mb-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
