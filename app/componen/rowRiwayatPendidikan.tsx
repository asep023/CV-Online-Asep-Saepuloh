import RowRiwayat from "./rowRiwayat";

export default function rowRiwayatPendidikan(){
    return(
        <div className="container mx-auto p-2 text-center pt-20">
          <h2 className="text 2xl:">Riwayat Sekolah </h2>
         <div>
          <RowRiwayat jenjang="SD" sekolah="SDN Citeras 01" tahun="2010-2016"/>
          <RowRiwayat jenjang="SMP" sekolah="SMP Al-Ilyas Malangbong" tahun="2016-2019"/>
          <RowRiwayat jenjang="SMK" sekolah="SMK Krija Bhakti Utama" tahun="2019-2022"/>
          <RowRiwayat jenjang="Perguruan Tinggi" sekolah="Universitas Ma'soem" tahun="2022-sekarang"/>
         </div>
          </div>
    );
}