export default function ConfirmationPopup({ onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000] bg-opacity-50">
      <div className="bg-[#9CA5CE] w-[390px] p-8 rounded-lg shadow-lg text-center flex justify-center gap-4 flex-col">
        <p className="font-poppins text-base text-[#2e2d2c] font-medium">Apakah Anda Yakin Ingin Pindah Halaman?</p>
        <p className="font-poppins text-sm text-[#494a51] font-normal">Jika Anda yakin untuk pindah halaman. Soal yang telah Anda isi, jawabannya akan hilang.</p>
        <div className="flex justify-center gap-4">
          <button onClick={onConfirm} className="px-6 py-3 font-poppins text-base font-medium text-primary w-[135px] border-2 border-btn bg-transparent rounded-[10px] hover:shadow-lg hover:opacity-80 duration-300 hover:text-white hover:bg-[#005071]">
            Ya
          </button>
          <button onClick={onClose} className="px-6 py-3 font-poppins text-base font-medium text-white w-[135px] bg-btn rounded-[10px] hover:shadow-lg hover:opacity-80 duration-300 hover:bg-[#005071]">
            Tidak
          </button>
        </div>
      </div>
    </div>
  );
}
