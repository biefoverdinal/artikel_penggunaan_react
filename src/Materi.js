import React from "react";
import "./css/Materi.css";

const Materi = () => {
  return (
    <div className="wrapper">
      <div className="slider">
        <div className="slide materi penjelasan-html-css-js">
          <h3>
            <strong>
              Pelajari Dasar-Dasar Pengembangan Web – Penjelasan HTML, CSS, dan
              JavaScript untuk Pemula
            </strong>
          </h3>
          <div className="materi-images">
            <img
              src="https://i.pinimg.com/736x/47/14/c8/4714c8256c33ffd85caee8851e6edc8b.jpg"
              className="materi-image"
              alt="Materi"
            />
          </div>
          <p>
            Jika Anda mempelajari pengembangan web, Anda akan menemukan
            istilah-istilah seperti <strong>HTML</strong>, <strong>CSS</strong>,
            dan <strong>JavaScript</strong>. Istilah-istilah ini sering disebut
            sebagai fondasi utama dalam membangun situs web modern.
          </p>

          <p>
            Ketiga alat ini dominan dalam pengembangan web. Setiap pustaka atau
            alat sering kali bergantung pada <strong>HTML</strong>,{" "}
            <strong>CSS</strong>, dan <strong>JavaScript</strong>. Oleh karena
            itu, pemahaman mendalam terhadap ketiganya sangat penting bagi siapa
            saja yang ingin menjadi pengembang web yang sukses.
          </p>

          <p>
            Anda akan menemukan bahwa hampir semua situs web dibangun
            menggunakan kombinasi ketiga bahasa ini. Mereka memberikan fondasi
            untuk struktur, gaya, dan interaksi yang kita nikmati dalam
            pengalaman online kita sehari-hari.
          </p>

          <p>
            Namun, mungkin Anda bertanya-tanya mengapa HTML, CSS, dan JavaScript
            begitu penting dan umum digunakan. Setiap bahasa ini memiliki peran
            khusus: HTML untuk struktur dasar konten, CSS untuk mengatur
            tampilan dan layout, dan JavaScript untuk menambahkan interaktivitas
            dan dinamika ke dalam halaman web.
          </p>

          <p>
            Baiklah, dengan penjelasan ini, Anda tidak perlu lagi bingung. Dalam
            artikel ini, saya akan menguraikan dasar-dasar <strong>HTML</strong>
            , <strong>CSS</strong>, dan <strong>JavaScript</strong>, serta
            bagaimana ketiganya bekerja bersama untuk menciptakan pengalaman web
            yang kaya dan responsif.
          </p>
        </div>

        <div className="slide materi html">
          <h2>
            <strong>Apa itu HTML</strong>
          </h2>
          <p>
            HTML (HyperText Markup Language) adalah bahasa markup yang digunakan
            untuk membangun struktur dasar halaman web. HTML menggunakan elemen-
            elemen markup untuk mendefinisikan bagian-bagian dari halaman web,
            seperti heading, paragraf, gambar, dan link.
          </p>

          <p>
            HTML merupakan fondasi dari sebuah halaman web. Dengan HTML, Anda
            dapat menentukan struktur konten halaman web Anda, yang kemudian
            akan diberi gaya dengan CSS dan fungsionalitas dinamis menggunakan
            JavaScript.
          </p>
          <p>
            Sebelum kita mulai membuat programnya, silahkan unduh file gambar
            dan soundnya terlebih dahulu dengan mengklik tautan ini:
            <a
              href="https://github.com/biefoverdinal/file_download_bahan_tugas_ta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unduh File
            </a>
          </p>
          <p>
            <strong>
              Berikut adalah contoh kode HTML dasar untuk halaman Drum Kit:
            </strong>
          </p>
          <div className="example-code">
            <pre>
              {`
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <title>Drum Kit</title>
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet">
</head>
<body>
  <h1 id="title">Drum 🥁 Kit</h1>
  <div class="set">
    <button class="w drum">w</button>
    <button class="a drum">a</button>
    <button class="s drum">s</button>
    <button class="d drum">d</button>
    <button class="j drum">j</button>
    <button class="k drum">k</button>
    <button class="l drum">l</button>
  </div>
  <script src="index.js"></script>
  <footer>
    Made with ❤️ in London.
  </footer>
</body>
</html>
              `}
            </pre>
          </div>
          <div className="materi-images">
            <img
              src="https://i.pinimg.com/736x/e3/fa/eb/e3faebbf742e34483f886fcee4a0e397.jpg"
              alt="HTML"
              className="materi-image"
            />
          </div>
          <h1>Index.html (Tidak menggunakan css) </h1>

          <div className="slide penjelasan ">
            <h2>Penjelasan dari scriptnya</h2>
            <ul>
              <li>
                <code>&lt;!DOCTYPE html&gt;</code>: Menentukan jenis dokumen dan
                versi HTML (HTML5).
              </li>
              <li>
                <code>&lt;html lang="en" dir="ltr"&gt;</code>: Elemen root
                dengan bahasa diatur ke Inggris dan arah teks kiri-ke-kanan.
              </li>
              <li>
                <code>&lt;head&gt;</code>: Berisi metadata dan tautan ke sumber
                daya eksternal.
              </li>
              <li>
                <code>&lt;meta charset="utf-8"&gt;</code>: Menentukan pengkodean
                karakter.
              </li>
              <li>
                <code>&lt;title&gt;Drum Kit&lt;/title&gt;</code>: Mengatur judul
                halaman web.
              </li>
              <li>
                <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code>:
                Menautkan file CSS eksternal.
              </li>
              <li>
                <code>
                  &lt;link href="https://fonts.googleapis.com/css?family=Arvo"
                  rel="stylesheet"&gt;
                </code>
                : Menautkan font eksternal.
              </li>
              <li>
                <code>&lt;body&gt;</code>: Berisi konten halaman web.
              </li>
              <li>
                <code>&lt;h1 id="title"&gt;Drum 🥁 Kit&lt;/h1&gt;</code>: Header
                dengan ID "title".
              </li>
              <li>
                <code>&lt;div class="set"&gt;</code>: Kontainer untuk tombol
                drum.
              </li>
              <li>
                <code>&lt;button class="w drum"&gt;w&lt;/button&gt;</code>:
                Tombol dengan kelas "w" dan "drum" untuk setiap suara drum.
              </li>
              <li>
                <code>&lt;script src="index.js"&gt;&lt;/script&gt;</code>:
                Menautkan file JavaScript eksternal.
              </li>
              <li>
                <code>
                  &lt;footer&gt;Made with ❤️ in London.&lt;/footer&gt;
                </code>
                : Elemen footer.
              </li>
            </ul>
          </div>
        </div>

        <div className="slide materi css">
          <h2>
            <strong>Apa itu CSS</strong>
          </h2>
          <p>
            CSS (Cascading Style Sheets) adalah bahasa desain yang digunakan
            untuk mempercantik tampilan dan layout halaman web. Ini memisahkan
            tata letak dan gaya dari struktur konten (HTML), sehingga
            memungkinkan pengembang web untuk dengan mudah mengontrol aspek
            visual dari situs web mereka.
          </p>
          <p>
            CSS terdiri dari aturan-aturan (rules) yang menentukan bagaimana
            elemen-elemen HTML akan ditampilkan di layar, termasuk ukuran,
            warna, font, dan tata letak. Dengan menggunakan CSS, Anda dapat
            membuat halaman web yang lebih menarik, konsisten, dan mudah diakses
            bagi pengguna.
          </p>
          <p>
            <strong>
              {" "}
              Berikut adalah contoh kode CSS yang mengatur warna latar belakang
              dan warna font dari halaman Drum Kit:
            </strong>
          </p>
          <div className="example-code">
            <pre>
              {`
body {
  text-align: center;
  background-color: #283149;
}

h1 {
  font-size: 5rem;
  color: #DBEDF3;
  font-family: "Arvo", cursive;
  text-shadow: 3px 0 #DA0463;
}

footer {
  color: #DBEDF3;
  font-family: sans-serif;
}

.w {
  background-image: url(./images/tom1.png);
}

.a {
  background-image: url(./images/tom2.png);
}

.s {
  background-image: url(./images/tom3.png);
}

.d {
  background-image: url(./images/tom4.png);
}

.j {
  background-image: url(./images/snare.png);
}

.k {
  background-image: url(./images/crash.png);
}

.l {
  background-image: url(./images/kick.png);
}

.set {
  margin: 10% auto;
}

.game-over {
  background-color: red;
  opacity: 0.8;
}

.pressed {
  box-shadow: 0 3px 4px 0 #DBEDF3;
  opacity: 0.5;
}

.red {
  color: red;
}

.drum {
  outline: none;
  border: 10px solid #404B69;
  font-size: 5rem;
  font-family: 'Arvo', cursive;
  line-height: 2;
  font-weight: 900;
  color: #56da04;
  text-shadow: 3px 0 #DBEDF3;
  border-radius: 15px;
  display: inline-block;
  width: 150px;
  height: 150px;
  text-align: center;
  margin: 10px;
  background-color: white;
}
              `}
            </pre>
          </div>
          <div className="materi-images">
            <img
              src="https://i.pinimg.com/736x/d9/79/d1/d979d11f45b466ff7765f1f363837ed0.jpg"
              alt="CSS"
              className="materi-image"
            />
          </div>
          <h1>styles.css (Sudah enggunakan css)</h1>

          <div className="slide penjelasan ">
            <h2>Penjelasan dari scriptnya</h2>
            <ul>
              <li>
                <code>body</code>: Gaya untuk elemen body.
                <ul>
                  <li>
                    <code>text-align: center;</code>: Menyelaraskan teks ke
                    tengah.
                  </li>
                  <li>
                    <code>background-color: #283149;</code>: Mengatur warna
                    latar belakang.
                  </li>
                </ul>
              </li>
              <li>
                <code>h1</code>: Gaya untuk elemen h1.
                <ul>
                  <li>
                    <code>font-size: 5rem;</code>: Mengatur ukuran font.
                  </li>
                  <li>
                    <code>color: #DBEDF3;</code>: Mengatur warna font.
                  </li>
                  <li>
                    <code>font-family: "Arvo", cursive;</code>: Mengatur
                    keluarga font.
                  </li>
                  <li>
                    <code>text-shadow: 3px 0 #DA0463;</code>: Menambahkan
                    bayangan teks.
                  </li>
                </ul>
              </li>
              <li>
                <code>footer</code>: Gaya untuk elemen footer.
                <ul>
                  <li>
                    <code>color: #DBEDF3;</code>: Mengatur warna font.
                  </li>
                  <li>
                    <code>font-family: sans-serif;</code>: Mengatur keluarga
                    font.
                  </li>
                </ul>
              </li>
              <li>
                <code>.w</code>, <code>.a</code>, <code>.s</code>,{" "}
                <code>.d</code>, <code>.j</code>, <code>.k</code>,{" "}
                <code>.l</code>: Gaya untuk setiap tombol drum dengan gambar
                latar spesifik.
              </li>
              <li>
                <code>.set</code>: Gaya untuk kontainer tombol drum.
                <ul>
                  <li>
                    <code>margin: 10% auto;</code>: Menyelaraskan kontainer
                    dengan margin.
                  </li>
                </ul>
              </li>
              <li>
                <code>.game-over</code>: Gaya untuk kelas bernama "game-over".
                <ul>
                  <li>
                    <code>background-color: red;</code>: Mengatur warna latar
                    belakang.
                  </li>
                  <li>
                    <code>opacity: 0.8;</code>: Mengatur opasitas.
                  </li>
                </ul>
              </li>
              <li>
                <code>.pressed</code>: Gaya untuk kelas bernama "pressed".
                <ul>
                  <li>
                    <code>box-shadow: 0 3px 4px 0 #DBEDF3;</code>: Menambahkan
                    bayangan kotak.
                  </li>
                  <li>
                    <code>opacity: 0.5;</code>: Mengatur opasitas.
                  </li>
                </ul>
              </li>
              <li>
                <code>.red</code>: Gaya untuk kelas bernama "red".
                <ul>
                  <li>
                    <code>color: red;</code>: Mengatur warna font.
                  </li>
                </ul>
              </li>
              <li>
                <code>.drum</code>: Gaya untuk tombol drum.
                <ul>
                  <li>
                    <code>outline: none;</code>: Menghapus outline.
                  </li>
                  <li>
                    <code>border: 10px solid #404B69;</code>: Menambahkan
                    border.
                  </li>
                  <li>
                    <code>font-size: 5rem;</code>: Mengatur ukuran font.
                  </li>
                  <li>
                    <code>font-family: 'Arvo', cursive;</code>: Mengatur
                    keluarga font.
                  </li>
                  <li>
                    <code>line-height: 2;</code>: Mengatur tinggi garis.
                  </li>
                  <li>
                    <code>font-weight: 900;</code>: Mengatur ketebalan font.
                  </li>
                  <li>
                    <code>color: #56da04;</code>: Mengatur warna font.
                  </li>
                  <li>
                    <code>text-shadow: 3px 0 #DBEDF3;</code>: Menambahkan
                    bayangan teks.
                  </li>
                  <li>
                    <code>border-radius: 15px;</code>: Mengatur radius border.
                  </li>
                  <li>
                    <code>display: inline-block;</code>: Membuat tombol menjadi
                    blok sebaris.
                  </li>
                  <li>
                    <code>width: 150px;</code>: Mengatur lebar.
                  </li>
                  <li>
                    <code>height: 150px;</code>: Mengatur tinggi.
                  </li>
                  <li>
                    <code>text-align: center;</code>: Menyelaraskan teks.
                  </li>
                  <li>
                    <code>margin: 10px;</code>: Menambahkan margin.
                  </li>
                  <li>
                    <code>background-color: white;</code>: Mengatur warna latar
                    belakang.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="slide materi js">
          <h2>
            <strong>Apa itu JavaScript</strong>
          </h2>
          <p>
            JavaScript adalah bahasa pemrograman yang digunakan untuk membuat
            halaman web interaktif. Bersama dengan HTML dan CSS, JavaScript
            adalah salah satu teknologi inti dalam pengembangan web.
          </p>
          <p>
            JavaScript memungkinkan Anda untuk menambahkan fungsi-fungsi dinamis
            ke dalam halaman web, seperti manipulasi elemen HTML, interaksi
            pengguna, animasi, validasi formulir, dan banyak lagi. Ini membuat
            pengalaman pengguna lebih interaktif dan responsif.
          </p>
          <p>
            <strong>
              {" "}
              Berikut adalah contoh kode JavaScript untuk memunculkan suara Drum
              Kit ketika tombol-tombol `.drum` di klik:
            </strong>
          </p>
          <div className="example-code">
            <pre>
              {`
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

      default:
        console.log(buttonInnerHTML);
        break;
    }
  });
}
              `}
            </pre>
          </div>
          <div className="materi-images">
            <iframe
              src="https://www.youtube.com/embed/a-X63kOwojE"
              title="Hasil Tugas Ta Perancantan Web"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <h1>script.js (Hasil dari semua scriptnya yang telah digabungkan)</h1>

          <div className="slide penjelasan ">
            <h2>Penjelasan dari scriptnya</h2>
            <ul>
              <li>
                <code>
                  var numberOfDrumButtons =
                  document.querySelectorAll(".drum").length;
                </code>
                : Mendapatkan jumlah elemen dengan kelas "drum".
              </li>
              <li>
                <code>for (var i = 0; i &lt; numberOfDrumButtons; i++) </code>:
                Melakukan loop melalui semua tombol drum.
              </li>
              <li>
                <code>
                  document.querySelectorAll(".drum")[i].addEventListener"click",
                  function(){" "}
                </code>
                : Menambahkan event listener klik ke setiap tombol.
              </li>
              <li>
                <code>var buttonInnerHTML = this.innerHTML;</code>: Mendapatkan
                inner HTML dari tombol yang diklik.
              </li>
              <li>
                <code>switch (buttonInnerHTML) </code>: Memeriksa inner HTML
                tombol.
              </li>
              <li>
                <code>case "w":</code>: Memutar file suara yang sesuai untuk
                setiap tombol.
              </li>
              <li>
                <code>default:</code>: Mencatat inner HTML jika tidak ada kasus
                yang cocok.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer di bagian paling bawah */}
      <footer className="footer">
        <p>Hak Cipta &copy; 2024 Biefo Verdinal</p>
      </footer>
    </div>
  );
};

export default Materi;
