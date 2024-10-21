import RowRiwayat from "./rowRiwayat";

export default function rowRiwayatPekerjaan(){
    return(
        <div className="container mx-auto p-2 text-center pt-20">
          <h2 className="text 2xl:">Riwayat Pekerjaan </h2>
         <div>
        
          <RowRiwayat tahun="2021-2022" instansi="Windu Stamp & Digital Printing" jabatan="Design grafis"/>
          <RowRiwayat tahun="2020-2022" instansi="SMK Krija Bhakti Utama" jabatan="Editor"/>
          <RowRiwayat tahun="2021-Sekarang" instansi="MDT Sirnarasa" jabatan="Operator"/>
          <RowRiwayat tahun="2021-Sekarang" instansi="Toko Mainan Abah" jabatan="Kepala Toko"/>
          
         </div>
          </div>
    );
}