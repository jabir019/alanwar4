import kegiatan from "../assets/Mask group.png";
import CardProgram from "../components/CardProgram";

export default function SectionProgram() {
  return (
    <section className="bg-angger">
      <div className="container py-5">
        <div className="row h-100">
          <div className="col-md-4 col-12">
            <div className="d-flex flex-column h-100 text-primary">
              <h1>Program Unggulan Pondok Pesantren Al-Anwar IV</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam quae velit molestiae quam, eligendi eaque est maiores
                asperiores. Incidunt, saepe?
              </p>
              <div>
                <img
                  className="w-100 object-fit-cover img-program "
                  // Membuat elemen img dengan src dari variabel kegiatan dan alt "kegiatan"
                  src={kegiatan}
                  alt="kegiatan"
                />
              </div>
            </div>
          </div>

          <div className="col-md-4 col-12 mt-3 mt-md-0">
            {/* Membuat elemen div dengan class "col-md-4 col-12 mt-3 mt-md-0" yang berfungsi sebagai kolom kedua */}
            <div className="d-flex flex-column h-100">
              <CardProgram
                judul="Tahfidz Alqur'an"
                deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae velit molestiae quam, eligendi eaque est maiores asperiores. Incidunt, saepe?"
              />
              <CardProgram
                judul="Juz 'Amma"
                deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae velit molestiae quam, eligendi eaque est maiores asperiores. Incidunt, saepe?"
              />
              <CardProgram
                judul="Kitab Kuning Bandongan"
                deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae velit molestiae quam"
              />
            </div>
          </div>
          <div className="col-md-4 col-12 mt-3 mt-md-0">
            <div className="d-flex flex-column h-100">
              <CardProgram
                judul="Metode Alqur'an Yanbu'a"
                deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae velit"
              />
              <CardProgram
                judul="Metode Nahwu Al-Asas"
                deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae velit molestiae quam, eligendi eaque est maiores asperiores. Incidunt, saepe?"
              />
              <CardProgram
                judul="Sorogan Kutubus Salaf"
                deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae velit molestiae quam, eligendi eaque est maiores asperiores. Incidunt, saepe?"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
