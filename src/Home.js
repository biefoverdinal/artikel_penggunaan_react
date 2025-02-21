import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const DarkVariantExample = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/736x/5b/da/93/5bda935066a392cbcfe4102b69e42a92.jpg"
          alt="First slide"
          style={{
            maxHeight: "700px !important",
            objectFit: "cover !important",
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/736x/26/b8/ad/26b8ade8609c7aa4c8a659078aeefa97.jpg"
          alt="Second slide"
          style={{
            maxHeight: "700px !important",
            objectFit: "cover !important",
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/736x/47/14/c8/4714c8256c33ffd85caee8851e6edc8b.jpg"
          alt="Third slide"
          style={{
            maxHeight: "700px !important",
            objectFit: "cover !important",
          }}
         />
      </Carousel.Item>
    </Carousel>
  );
};

const Home = () => {
  return (
    <div>
      <DarkVariantExample />
      <div className="content">
        <h2>Welcome to the Blog Tutorial: HTML, CSS, and JavaScript</h2>
        <p>
          Selamat datang di blog tutorial HTML, CSS, dan JavaScript untuk
          pemula! Di sini, Anda akan belajar dasar-dasar HTML melalui berbagai
          tutorial yang mudah diikuti dan dilengkapi dengan contoh-contoh
          praktis. Tujuan kami adalah membantu Anda memahami HTML dengan baik
          sehingga Anda bisa membangun halaman web yang menarik dan fungsional.
        </p>
        <p>
          Mulailah dengan mengenal HTML di bagian <strong>Materi</strong>, di
          mana kami akan membahas elemen-elemen dasar HTML, struktur dokumen,
          dan teknik-teknik penting lainnya. Selain itu, Anda juga akan
          menemukan panduan mengenai CSS untuk mempercantik tampilan halaman
          web, serta JavaScript untuk menambahkan interaktivitas pada halaman
          Anda.
        </p>
        <p>
          Disini kita akan mencoba belajar untuk membuap website Real Drum
          dengan menggunakan HTML, CSS , JavaScript. Dan saya akan menjelaskan
          juga Elemen apa saja yg akan di giunakan dalam pembuatan Website Real
          Drum tersebut
        </p>
      </div>

      {/* Footer di bagian paling bawah */}
      <footer className="footer">
        <p>Hak Cipta &copy; 2024 Biefo Verdinal</p>
      </footer>
    </div>
  );
};

export default Home;
