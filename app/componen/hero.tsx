import foto from"../foto.jpeg";
import "../asep-style.css";
export default function Hero(){
    return(
        <div className="container mx-auto p-2 text-center">
        <h1 className="text-blue-950 font-bold">CV Online</h1>
        <h2 className="text-3xl">Asep Saepuloh</h2>
        <Profile />
        <p>
          Saya adalah seorang yang sangat berminat untuk menjadi programmer. Dengan rasa ingin tahu yang tinggi terhadap teknologi dan pengembangan perangkat lunak, saya telah mulai belajar berbagai bahasa pemrograman seperti Python dan JavaScript. Saya menikmati proses memecahkan masalah dan menciptakan solusi yang inovatif.
          </p>
          </div>
    );
    function Profile() {
        return (
          <img
            src={foto.src}
            alt="Asep Saepuloh"
            className="fotoku"
          />
        );
      }
}