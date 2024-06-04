import { useState } from "react";

import MainLayout from "../layouts/MainLayout";
import Profil1 from "../assets/profil1.png";

export default function Pendaftaran() {
  const [name, setName] = useState("");
  const [nik, setNik] = useState("");
  const [phone, setPhone] = useState("");
  const [namapanggilan, setNamapanggilan] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // window.open("https://wa.me/<nomor_wa>?text=" =+ encodeURIComponent('<format penulisan>'.trim((). "blank")");

    window.open(
      "https://wa.me/+6285280005195?text=" +
        encodeURIComponent(
          `

Halo saya ingin mendaftar ke pondok,

*berikut data diri saya*

- Nama : ${name}
- Email : ${nik}
- Nomor HP : ${namapanggilan}
- Alamat : ${phone}


      `.trim()
        ),
      "_blank"
    );
  }

  return (
    <>
      <MainLayout>
        <section className="section-profil">
          <div className="container">
            {/* bacground & overlay */}
            <div className="bg overlay-bg"></div>
            <img src={Profil1} className="bg img-bg" alt="profil1" />

            <div className="row h-100 align-items-center justify-item-center ">
              <div className="col-md-6 col-12 text-white align-self-center mt-5 ">
                <h1>Pendaftaran</h1>
              </div>
            </div>
          </div>
        </section>

        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6 col-12">
              <div className="colored-block">
                <p className="text-center">Formulir Data Diri</p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="container mt-5 bg-angger">
            <div className="row justify-content-center">
              <div className="col-md-4 col-12 me-1">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Nama Lengkap & Gelar*</label>
                    <input
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      type="text"
                      className="form-control"
                      id="nama"
                      placeholder="ex. John Wick"
                    />
                  </div>
                  <div className="mb-3">
                    <label>NIK/Nomor KTP*</label>
                    <input
                      value={nik}
                      onChange={(event) => setNik(event.target.value)}
                      type="number"
                      className="form-control"
                      id="nik"
                      placeholder="masukkan NIK/Nomor KTP"
                    />
                  </div>
                </form>
              </div>
              <div className="col-md-4 col-12">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Nama Panggilan*</label>
                    <input
                      value={namapanggilan}
                      onChange={(event) => setNamapanggilan(event.target.value)}
                      type="text"
                      className="form-control"
                      id="nama"
                      placeholder="ex. John"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Nomor Telephone*</label>
                    <input
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      type="number"
                      className="form-control"
                      id="nik"
                      placeholder="+628xx-xxxx-xxxx"
                    />
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="align-self-center btn btn-primary mt-3"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
