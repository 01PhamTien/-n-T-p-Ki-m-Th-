import React, { useState, useEffect } from "react";
import './Quiz.css'; // Import CSS riêng cho quiz

import questions from "./questions"; // Import danh sách câu hỏi từ file riêng

// Hàm để xáo trộn mảng
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Hoán đổi phần tử
  }
  return array;
};

function Quiz({ playerName, numQuestions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Trạng thái lưu đáp án đã chọn
  const [answerStatus, setAnswerStatus] = useState(null); // Trạng thái đáp án đúng/sai
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [correctAnswerSelected, setCorrectAnswerSelected] = useState(false); // Trạng thái đúng câu trả lời

  useEffect(() => {
    const shuffled = shuffleArray([...questions]);
    setShuffledQuestions(shuffled);
  }, []);

  // Hàm xử lý khi người dùng chọn một đáp án
  const handleAnswer = (selectedOption) => {
    setSelectedAnswer(selectedOption); // Lưu đáp án đã chọn

    const correctAnswer = shuffledQuestions[currentQuestion].correctAnswer; // Đáp án đúng từ câu hỏi

    // Kiểm tra đáp án người dùng chọn
    if (selectedOption === correctAnswer) {
      setAnswerStatus("correct"); // Đáp án đúng
      setScore(score + 1); // Tăng điểm khi đúng
      setCorrectAnswerSelected(true); // Đánh dấu đáp án đúng
    } else {
      setAnswerStatus("incorrect"); // Đáp án sai
      setCorrectAnswerSelected(false); // Đánh dấu đáp án sai
    }
  };

  // Hàm xử lý khi người dùng chuyển sang câu hỏi tiếp theo
  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < numQuestions && nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null); // Reset đáp án đã chọn
      setAnswerStatus(null); // Reset trạng thái đáp án
      setCorrectAnswerSelected(false); // Reset trạng thái đáp án đúng
    } else {
      setShowResult(true); // Hiển thị kết quả khi hết câu hỏi
    }
  };

  // Thêm sự kiện lắng nghe phím Enter
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleNext();
      }
    };

    // Thêm sự kiện khi component mount
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup sự kiện khi component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentQuestion, shuffledQuestions, numQuestions]);

  return (
    <div className="quiz-wrapper">
      <div className="quiz-container">
        {showResult ? (
          <div className="result-container">
            <h2>Chọn Làm Gà À</h2>
            <p>{playerName}, Đúng được {score}/{numQuestions}</p>
          </div>
        ) : (
          <div>
            <h2>Con Gà Này {currentQuestion + 1}/{numQuestions}</h2>
            <div className="question-container">
              <p className="question-text">{shuffledQuestions[currentQuestion]?.question}</p>
              <div className="details-container">
                {shuffledQuestions[currentQuestion]?.details?.length > 0 && shuffledQuestions[currentQuestion].details.map((detail, index) => (
                  <p key={index}>{detail}</p>
                ))}
              </div>

              <div className="answers-container">
                {shuffledQuestions[currentQuestion]?.answers?.length > 0 && shuffledQuestions[currentQuestion].answers.map((answer, index) => {
                  const answerLabel = answer.split(". ")[0]; // Lấy chữ cái (A, B, C, D)
                  let buttonClass = "";

                  if (selectedAnswer) {
                    if (selectedAnswer === answerLabel && selectedAnswer === shuffledQuestions[currentQuestion]?.correctAnswer) {
                      buttonClass = "correct";
                    } else if (selectedAnswer === answerLabel && selectedAnswer !== shuffledQuestions[currentQuestion]?.correctAnswer) {
                      buttonClass = "incorrect";
                    }
                  }

                  return (
                    <button
                      key={index}
                      className={`answer-button ${buttonClass}`}
                      onClick={() => handleAnswer(answerLabel)}
                      disabled={selectedAnswer !== null}
                    >
                      {answer}
                    </button>
                  );
                })}
              </div>

              <div className="next-button-container">
  <button onClick={handleNext} className="next-button">
    Câu Tiếp --->
  </button>
  {/* Thông báo "Đúng rồi!" nếu đáp án đúng */}
  {answerStatus === "correct" && (
    <div className="correct-answer-message-container">
      <p className="correct-answer-message">Gớm Mày !</p>
    </div>
  )}
</div>

              {answerStatus === "incorrect" && (
                <div className="correct-answer-info">
                  <p><strong className="aaa">Có Thế Cũng Sai  :</strong></p>
                  <div className="correct-answer">
                    {shuffledQuestions[currentQuestion]?.answers.map((answer, index) => {
                      const answerLabel = answer.split(". ")[0];
                      if (answerLabel === shuffledQuestions[currentQuestion]?.correctAnswer) {
                        return (
                          <p key={index}>
                            <strong>{answer}</strong>
                          </p>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
