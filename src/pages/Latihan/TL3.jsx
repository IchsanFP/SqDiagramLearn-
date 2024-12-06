import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { notasi } from "../../components/Data";

import Navbar from "../../components/Header";
import NotasiList from "../../components/Latihan/NotasiList";
import FileUpload from "../../components/Latihan/Upload";
import ConfirmationPopup from "../../components/Kuis/ConfirmationPopup"
import ButtonNav from "../../components/ButtonNav";

export default function T1_Latihan3(){
    const [nextPage, setNextPage] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const navigate = useNavigate();

    const handleConfirmNavigation = () => {
        setShowConfirmation(false);
        if (nextPage) navigate(nextPage);
      };

    // Handler
    const handleNavClick = (event, to) => {
        event.preventDefault();
        setNextPage(to);
        setShowConfirmation(true);
    };

    return(
        <>
        <Navbar onNavClick={handleNavClick}/>
        <section id="#" className="pb-5 pt-[120px] bg-secondary min-h-screen">  
            <div className="container">
                <div className="flex flex-col m-auto max-w-[1024px] gap-3">
                    <div className="flex gap-9 flex-col lg:flex-row max-w-[1090px] justify-between">
                        <div className="w-[142px]">
                            <p className="font-poppins text-base font-semibold text-black">Pertanyaan  <span className="text-xl">1</span> </p>
                        </div>

                        <div className="flex w-full flex-col gap-9 border-2 rounded-[10px] border-primary px-12 py-5">
                            <div className="w-full">
                                <p className="font-poppins text-base font-semibold text-black text-justify">
                                Sebuah Hotel ingin membuat sebuah aplikasi pemesanan kamar hotel. Berikut adalah use case
                                scenario atau deskripsi pemesanan kamar hotel:
                                </p>
                                
                                <p className="font-poppins text-base font-semibold text-black text-justify">
                                    <ol className="list-decimal ml-4">
                                        <li>Pengguna sudah masuk kedalam aplikasi pemesanan kamar hotel.</li>
                                        <li>Pengguna memilih kamar yang diinginkan.</li>
                                        <li>Aplikasi pemesanan kamar hotel meminta informasi kamar kepada resepsionis.</li>
                                        <li>Resepsionis memberikan informasi ketersediaan kamar.</li>
                                        <li>Setelah menerima informasi ketersediaan kamar, pengguna melakukan pemesanan dan pembayaran.
                                        </li>
                                        <li>Aplikasi pemesanan kamar hotel mengirim informasi pemesanan dan pembayaran kepada resepsionis.</li>
                                        <li>Resepsionis mengkonfirmasi pemesanan dan pembayaran.</li>
                                        <li>Pengguna menerima konfirmasi pemesanan dan pembayaran.</li>
                                    </ol>
                                </p>

                                <p className="font-poppins text-base font-semibold text-black text-justify">
                                    berdasarkan studi kasus diatas, buatlah sequence diagram dengan benar
                                </p>
                                
                            </div>

                            <div className="gap-2 w-full flex flex-col justify-start">
                                <p className="font-poppins text-sm font-normal text-[#6e767a]">Jawab</p>

                                <div className="gap-2 w-full p-4 flex-col  flex items-start justify-between h-[465px] rounded-[10px] bg-slate-400">
                                    <NotasiList notasi={notasi}/>
                                </div>
                                <FileUpload/>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-end">
                        <ButtonNav to="/latihanT3/pembahasanT3">Selesai</ButtonNav>
                    </div>
                </div>
            </div>
            {showConfirmation && (
                <ConfirmationPopup onClose={() => setShowConfirmation(false)} onConfirm={handleConfirmNavigation} />
            )}
        </section>
        </>
    );
}
