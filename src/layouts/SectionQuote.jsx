import cahngaji from "../assets/cahngaji.png";

export default function SectionQuote() {
  // mendefinisikan sebuah fungsi komponen bernama SectionQuote. Fungsi ini akan mengembalikan JSX (JavaScript XML) yang akan dirender sebagai komponen.
  return (
    <>
      {/* mengembalikan JSX yang akan dirender sebagai komponen */}
      <section className="section-hero h-100 ">
        {/* mendefinisikan sebuah elemen <section> dengan nama kelas "section-hero" dan "h-100". Nama kelas "h-100" digunakan untuk membuat elemen ini memiliki tinggi 100% dari tinggi layar. */}
        <div className="container">
          <div className="row align-items-center h-100 justify-content-center text-center mt-5 ">
            {/* kelas "row" digunakan untuk membuat elemen ini berfungsi sebagai baris, sedangkan nama kelas lainnya digunakan untuk mengatur posisi dan tampilan elemen ini */}
            <div className="col-8 text-white my-5 ">
              <h5>KH. Maimoen Zubair</h5>
              <h1 className="mt-3">
                "Ojo mikir engko dadi opo. Sing penting saiki sinau sing
                sregep."
              </h1>
              <button type="button" class="btn btn-warning btn-lg m-3 ">
                AYO MONDOK SEKARANG
              </button>
            </div>
          </div>
        </div>

        <div className="bg overlay-bg"></div>
        <img
          src={cahngaji}
          className="object-fit-cover bg img-bg"
          alt="cahngaji"
        />
      </section>
    </>
  );
}
