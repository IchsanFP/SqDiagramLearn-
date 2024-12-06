import IconX from "../../assets/iconX.svg"
import iconCeklis from "../../assets/iconCeklis.svg"

export default function Popup({ explanation, isCorrect, onClose, onNext, isLastQuestion, onGoToMainTopic }) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000] bg-opacity-50">
        <div className="bg-[#9CA5CE] p-5 rounded-lg shadow-lg w-[390px] text-center flex justify-center gap-2 flex-col">
          <div className="m-auto justify-center items-center">
            {isCorrect ? (
              <img src={iconCeklis} alt="" width={50} height={50} />
            )  : (
              <img src={IconX} alt="" width={50} height={50}/>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-poppins text-base text-[#2e2d2c] font-medium">
              {isCorrect ? "Jawaban Anda Benar" : "Jawaban Anda Salah"}
            </p>
            <p className="font-poppins text-sm text-[#494a51] font-normal">
              {explanation}
            </p>
          </div>
          <div className="flex justify-center m-2">
            {isCorrect ? (
              isLastQuestion ? (
                <button onClick={onGoToMainTopic} className="px-6 py-3 font-poppins text-base font-medium text-white bg-btn rounded-[10px] hover:shadow-lg hover:opacity-80 duration-300 hover:bg-[#005071]">
                  Kembali ke Topik Kuis
                </button>
              ) : (
                <button onClick={onNext} className="px-6 py-3 font-poppins text-base font-medium text-white bg-btn rounded-[10px] hover:shadow-lg hover:opacity-80 duration-300 hover:bg-[#005071]">
                  Soal Selanjutnya
                </button>
              )
            ) : (
              <button onClick={onClose} className="px-6 py-3 font-poppins text-base font-medium text-white bg-btn rounded-[10px] hover:shadow-lg hover:opacity-80 duration-300 hover:bg-[#005071]">
                Coba Lagi
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }