export default function QuestionCard({ id, imgSrc, question, options, selectedAnswer, onAnswerChange }) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-9 max-w-full sm:max-w-[1024px] justify-between">
      <div className="w-[142px]">
        <p className="text-base font-semibold text-black font-poppins">
          Pertanyaan <span className="text-xl">{id}</span>
        </p>
      </div>
      <div className="bg-[#9CA5CE] flex w-full flex-col gap-9 border-2 rounded-[10px] border-primary px-12 py-5">
        <div className="w-full">
          <p className="text-base font-semibold text-justify text-black font-poppins">
            {question}
          </p>
          <img src={imgSrc} alt="" className="m-auto" />
        </div>
        <div className="flex flex-col justify-start w-full gap-2">
          <p className="font-poppins text-sm font-normal text-[#6e767a]">Choose one</p>
          <div className="flex flex-col w-full gap-2">
            {options.map((option, index) => (
              <AnswerOption
                key={index}
                option={option}
                selectedAnswer={selectedAnswer}
                onAnswerChange={onAnswerChange}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Komponen untuk Pilihan Jawaban
function AnswerOption({ option, selectedAnswer, onAnswerChange }) {
  return (
    <div className="rounded-[10px] px-6 py-4 w-full bg-[#e0e3f0] flex gap-2">
      <input
        type="radio"
        name="answer"
        value={option.value}
        className="w-4"
        onChange={onAnswerChange}
        checked={selectedAnswer === option.value}
      />
      <p className="text-base font-normal text-black font-poppins">{option.text}</p>
    </div>
  );
}