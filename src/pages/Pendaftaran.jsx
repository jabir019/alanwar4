import MainLayout from "../layouts/MainLayout";
import Profil1 from "../assets/profil1.png";

export default function Pendaftaran() {
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
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-4 col-12 me-1">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Nama Lengkap & Gelar*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nama"
                      placeholder="ex. John Wick"
                    />
                  </div>
                  <div className="mb-3">
                    <label>NIK/Nomor KTP*</label>
                    <input
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
                      type="text"
                      className="form-control"
                      id="nama"
                      placeholder="ex. John"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Nomor Telephone*</label>
                    <input
                      type="number"
                      className="form-control"
                      id="nik"
                      placeholder="+628xx-xxxx-xxxx"
                    />
                  </div>
                </form>
              </div>
              <div className="col-md-8 col-12">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email Aktif*
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="InputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Pastikan Email Anda benar"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-me-4 col-12me-1">
              <form>
                <div className="mb-3">
                  <label className="form-label">Tempat Lahir*</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nama"
                    placeholder="ex. Kota"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="jenis_kelamin">Jenis Kelamin*:</label>
                  <br />
                  <input
                    type="radio"
                    id="laki_laki"
                    name="jenis_kelamin"
                    defaultValue="Laki-laki"
                  />
                  <label htmlFor="laki_laki">Laki-laki</label>
                  <input
                    type="radio"
                    id="perempuan"
                    name="jenis_kelamin"
                    defaultValue="Perempuan"
                    className="ms-3"
                  />
                  <label htmlFor="perempuan">Perempuan</label>
                </div>
              </form>
            </div>
            <div className="col-md-4 col-12">
              <form>
                <div className="mb-3">
                  <label className="form-label">Tanggal Lahir*</label>
                  <input
                    type="date"
                    className="form-control"
                    id="nama"
                    placeholder="DD/MM/YYYY"
                  />
                </div>
                <div className="mb-3">
                  <label>Pekerjaan*</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nik"
                    placeholder="ex. Pengangguran"
                  />
                </div>
              </form>
            </div>
            <div className="col-md-8 col-12">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Alamat Lengkap*
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="InputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="ex. Jln. Kenangan"
                />
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4 col-12 me-1">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Provinsi*</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected="" disabled>
                        Provinsi
                      </option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label>Kecamatan*</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected="" disabled>
                        Kecamatan
                      </option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="col-md-4 col-12">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Kabupaten/Kota*</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected="" disabled>
                        Kabupaten/Kota
                      </option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label>Kelurahan/Desa*</label>
                    <input
                      type="number"
                      className="form-control"
                      id="nik"
                      placeholder="ex. Kalipang"
                    />
                  </div>
                </form>
              </div>
              <div className="col-md-4 col-12">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Pendidikan Terakhir*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nama"
                      placeholder="ex. John"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Kepengurusan di NU*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nik"
                      placeholder="ex. Ketua"
                    />
                  </div>
                </form>
              </div>
              <div className="col-md-4 col-12">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Status Pernikahan*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nama"
                      placeholder="ex. John"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Jabatan Kepengurusan*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nik"
                      placeholder="ex. Ketua"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-12">
                <div className="mb-3">
                  <label htmlFor="jenis_kelamin">
                    Apakah pernah Belajar dan Mengaji di Pondok Pesantren?
                  </label>
                  <br />
                  <input
                    type="radio"
                    id="iya-pernah"
                    name="iya-pernah"
                    defaultValue="iya-pernah"
                  />
                  <label htmlFor="laki_laki"> Iya Pernah</label>
                  <br />
                  <input
                    type="radio"
                    id="tidak-pernah"
                    name="tidak-pernah"
                    defaultValue="tidak-pernah"
                  />
                  <label htmlFor="tidak-pernah"> Tidak Pernah</label>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
