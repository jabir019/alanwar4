import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function SectionAdminLogin() {
  const [isSuccess, setIsSuccess] = useState(null);
  const [data, setData] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    setData(true);
    fetch("https://web.abdulhaxor.my.id/wp-json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          Swal.fire({
            title: "Login Berhasil",
            text: "Anda Berhasil Login",
            icon: "success",
          });
          localStorage.setItem("token", data.token);
          navigate("/admin");
        } else {
          Swal.fire({
            title: "Login Gagal",
            text: "Login Gagal",
            icon: "error",
          });
        }
      })
      .catch((error) => console.error("Error:", error));
  }

  return (
    <section>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-8 bg-angger">
            <form onSubmit={handleSubmit}>
              <h3 className="text-center text-primary py-2">
                Al-Anwar 4 - Admin Login
              </h3>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className="form-control"
                  id="username"
                />
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
