import "./componen/rowRiwayatPekerjaan";
import "./componen/rowRiwayatPendidikan";
import RowRiwayatPendidikan from "./componen/rowRiwayatPendidikan";
import RowRiwayatPekerjaan from "./componen/rowRiwayatPekerjaan";
import Hero from "./componen/hero";
import FavColor from "./componen/warna";
import Form from "./componen/inKuis";
import ContactForm from "./componen/ContactForm";





export default function Gallery() {
  return (
    <section>
        <Hero/>   
        <RowRiwayatPendidikan/>  
        <RowRiwayatPekerjaan/>
        <FavColor/>
        <Form/>
        <ContactForm/>
    </section>
  );
}
