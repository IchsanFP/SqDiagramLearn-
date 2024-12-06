import ButtonNav from "../../components/ButtonNav";
import Navbar from "../../components/Header";
import Paragraph from "../../components/Materi/Paragraph";
import Image from "../../components/Materi/Image";
import P3 from "../../assets/pembahasan/pem3.png"
export default function Pembahasan3(){
    return(
        <>
        <Navbar />
        <section id="#" className="pb-5 pt-[120px] bg-secondary min-h-screen">  
            <div className="container">
                <div className="flex flex-col m-auto max-w-[1024px] gap-3">
                    <h1 className="text-3xl font-bold text-black font-poppins text-center mb-6">
                        Pembahasan
                    </h1>
                    <div className="flex gap-9 flex-col lg:flex-row max-w-[1090px] justify-between">
                        <div className="w-[142px]">
                            <p className="font-poppins text-base font-semibold text-black">Pertanyaan  <span className="text-xl">1</span> </p>
                        </div>

                        <div className="flex flex-col w-full gap-9">
                            <div className="flex w-full flex-col gap-9 border-2 rounded-[10px] border-primary px-12 py-5">
                                <div className="w-full">
                                    <p className="font-poppins text-base font-semibold text-black text-justify">
                                        Sebuah Hotel ingin membuat sebuah aplikasi pemesanan kamar hotel. Berikut adalah use case scenario atau deskripsi pemesanan kamar hotel:
                                    </p>
                                    
                                    <p className="font-poppins text-base font-semibold text-black text-justify">
                                        <ol className="list-decimal ml-4">
                                            <li>Pengguna sudah masuk kedalam aplikasi pemesanan kamar hotel.</li>
                                            <li>Pengguna memilih kamar yang diinginkan.</li>
                                            <li>Aplikasi pemesanan kamar hotel meminta informasi kamar kepada resepsionis.</li>
                                            <li>Resepsionis memberikan informasi ketersediaan kamar.</li>
                                            <li>Setelah menerima informasi ketersediaan kamar, pengguna melakukan pemesanan dan
                                                pembayaran.
                                            </li>
                                            <li>Aplikasi pemesanan kamar hotel mengirim informasi pemesanan dan pembayaran kepada
                                                resepsionis.</li>
                                            <li>Resepsionis mengkonfirmasi pemesanan dan pembayaran.</li>
                                            <li>Pengguna menerima konfirmasi pemesanan dan pembayaran.</li>
                                        </ol>
                                    </p>

                                    <p className="font-poppins text-base font-semibold text-black text-justify">
                                        berdasarkan studi kasus diatas, buatlah sequence diagram dengan benar
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex flex-col w-full gap-2">
                                <p className="text-black font-poppins text-lg font-semibold">Jawaban yang benar :</p>
                                <Image src={P3} alt="" />
                                <Paragraph className="font-semibold">Penjelasan</Paragraph>
                                <Paragraph>
                                    Pada jawaban diatas terdapat aktor dan objek yaitu pengguna, appsPemesananHotel, dan
                                    resepsionis. Pertama-tama pengguna memilih kamar, appsPemesananHotel meminta informasi kamar
                                    kepada resepsionis, Resepsionis memberikan informasi ketersediaan kamar, Setelah menerima
                                    informasi ketersediaan kamar, pengguna melakukan pemesanan dan pembayaran. appsPemesananHotel
                                    akan mengirimkan informasi pemesanan dan pembayaran kepada resepsonis. resepsionis
                                    mengkonfirmasi pemesanan dan pembayaran. pengguna menerima konfirmasi pemesanan dan pembayaran.
                                </Paragraph>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-end">
                        <ButtonNav to="/latihan">Kembali ke Topik Latihan</ButtonNav>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
