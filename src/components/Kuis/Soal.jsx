import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Header";
import Popup from "./Popup"
import ConfirmationPopup from "./ConfirmationPopup"
import QuestionCard from "./QuestionCard"


export default function SoalKuis({ questions }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [nextPage, setNextPage] = useState(null);
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedExplanation, setSelectedExplanation] = useState("");

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // Reset state when questions change
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowPopup(false);
    setSelectedExplanation("");
  }, [questions]);

  // Handler
  const handleNavClick = (event, to) => {
    event.preventDefault();
    setNextPage(to);
    setShowConfirmation(true);
  };

  const handleConfirmNavigation = () => {
    setShowConfirmation(false);
    if (nextPage) navigate(nextPage);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer) {
      const selectedOption = currentQuestion.options.find((option) => option.value === selectedAnswer);
      setIsCorrect(selectedAnswer === currentQuestion.correctAnswer);
      setSelectedExplanation(selectedOption.explanation);
      setShowPopup(true);
    }
  };

  const handleRetry = () => {
    setShowPopup(false);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setShowPopup(false);
      setSelectedExplanation("");
    }
  };

  const handleGoToMainTopic = () => {
    navigate("/kuis");
  };

  return (
    <>
      <Navbar onNavClick={handleNavClick} />
      <section id="#" className="pb-5 pt-[120px] bg-secondary min-h-screen">
        <div className="container">
          <div className="flex flex-col m-auto max-w-[1024px] gap-3">
            <QuestionCard
              id={currentQuestion.id}
              imgSrc={currentQuestion.imgSrc}
              question={currentQuestion.question}
              options={currentQuestion.options}
              selectedAnswer={selectedAnswer}
              onAnswerChange={(e) => setSelectedAnswer(e.target.value)}
            />
            <div className="flex justify-end">
              <button
                onClick={handleCheckAnswer}
                disabled={!selectedAnswer}
                className={`flex items-center justify-center px-4 py-3 text-sm font-sm text-white transition ease-in-out rounded-[10px] font-poppins ${
                  selectedAnswer ? "bg-btn hover:shadow-lg hover:opacity-80 duration-300 hover:bg-[#005071]" : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Cek Jawaban 
              </button>
            </div>
          </div>
        </div>
        {showPopup && (
          <Popup
            explanation={selectedExplanation}
            isCorrect={isCorrect}
            onClose={() => setShowPopup(false)}
            onRetry={handleRetry}
            onNext={handleNextQuestion}
            isLastQuestion={isLastQuestion}
            onGoToMainTopic={handleGoToMainTopic}
          />
        )}
        {showConfirmation && (
          <ConfirmationPopup onClose={() => setShowConfirmation(false)} onConfirm={handleConfirmNavigation} />
        )}
      </section>
    </>
  );
}
