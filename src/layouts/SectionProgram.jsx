import kegiatan from "../assets/Mask group.png";
import CardProgram from "../components/CardProgram";

export default function SectionProgram() {
  return (
    <>
      <section className="container bg-primary-subtle py-5">
        <div className="row">
          <div className="col-md-4 col-12">
            <h1 className="text-primary">
              Program Unggulan Pondok Pesantren Al-Anwar IV
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              quae velit molestiae quam, eligendi eaque est maiores asperiores.
              Incidunt, saepe?
            </p>
            <div>
              <img className="w-100 mb-3" src={kegiatan} alt="kegiatan" />
            </div>
          </div>

          <div className="col-md-4 col-12 mt-3 mt-md-0">
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
              deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae velit molestiae quam, eligendi eaque est maiores asperiores. Incidunt, saepe?"
            />
            <CardProgram
              judul="Metode Al-qur'an Yanbu'a"
              deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae velit molestiae quam, eligendi eaque est maiores asperiores. Incidunt, saepe?"
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
      </section>
    </>
  );
}
