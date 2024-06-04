import React, { useState, useEffect } from "react";
// Import useNavigate dari react-router-dom untuk mengarahkan ke halaman lain
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// Import Swal dari sweetalert2 untuk menampilkan pesan konfirmasi

export default function SectionAdminLogin() {
  const [isSuccess, setIsSuccess] = useState(null);
  const [data, setData] = useState(null);
  // Membuat state isSuccess dan setData untuk menampung hasil login

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Membuat state username dan password untuk menampung input user

  const navigate = useNavigate();

  function handleSubmit(event) {
    // Fungsi handleSubmit untuk menangani submit form

    event.preventDefault();
    // Mencegah default behavior dari form submit

    setData(true);
    // Mengubah state setData menjadi true untuk menandai proses login

    fetch("https://jabir.neuversity.site/wp-json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Mengirimkan request POST ke API untuk login
      },

      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Mengirimkan data username dan password dalam format JSON

        if (data.token) {
          Swal.fire({
            title: "Login Berhasil",
            text: "Anda Berhasil Login",
            icon: "success",
          });
          localStorage.setItem("token", data.token);
          // Jika login berhasil, maka menampilkan pesan konfirmasi dan menyimpan token ke localStorage

          navigate("/admin");
          // Mengarahkan ke halaman admin
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
  // Jika login gagal, maka menampilkan pesan error

  return (
    // Render form login

    <section className="container">
      <div className=" my-5 px-3">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 bg-angger">
            <form onSubmit={handleSubmit}>
              {/* Membuat elemen form dengan onSubmit yang mengarah ke fungsi handleSubmit */}

              <h3 className="text-center text-primary py-2">
                Al-Anwar 4 - Admin Login
              </h3>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  {/* Membuat elemen label dengan htmlFor "username" dan className "form-label" untuk menampilkan label */}
                  Username
                </label>
                <input
                  type="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className="form-control"
                  id="username"
                  // Membuat elemen input dengan type "username", value dari state username,
                  // onChange yang mengarah ke fungsi setUsername, dan className "form-control" untuk styling
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  {/* Membuat elemen label dengan htmlFor "exampleInputPassword1" dan className "form-label" untuk menampilkan label */}
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  // Membuat elemen input dengan type "password", value dari state password,
                  // onChange yang mengarah ke fungsi setPassword, dan className "form-control" untuk styling
                />
              </div>
              <div className="mb-3 form-check">
                {/* Membuat elemen div dengan className "mb-3 form-check" untuk menambahkan margin bottom dan styling */}

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
                // Membuat elemen button dengan onClick yang mengarah ke fungsi handleSubmit,
                // type "submit", dan className "btn btn-primary mb-2" untuk styling
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
