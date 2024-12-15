import React, { useState, useEffect } from "react";
import './FullQuiz.css';
import questions from "./questions"; // Import danh sách câu hỏi từ file riêng

function FullQuiz({ playerName, numQuestions }) {
  const [answers, setAnswers] = useState(new Array(numQuestions).fill(null)); // Mảng lưu đáp án của từng câu hỏi
  const [showResult, setShowResult] = useState(false); // Kiểm tra nếu quiz đã hoàn thành
  const [score, setScore] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  // Hàm trộn câu hỏi ngẫu nhiên và chọn ra câu hỏi cần thiết
  const shuffleQuestions = (questions) => {
    const shuffledQuestions = [...questions];
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
    return shuffledQuestions.slice(0, numQuestions); // Lấy số câu hỏi cần thiết
  };

  // Sử dụng useEffect để chỉ trộn câu hỏi một lần khi quiz bắt đầu
  useEffect(() => {
    const shuffled = shuffleQuestions(questions);
    setSelectedQuestions(shuffled); // Cập nhật danh sách câu hỏi ngẫu nhiên
  }, [numQuestions]); // Chạy lại khi số lượng câu hỏi thay đổi

  // Hàm xử lý khi người dùng chọn đáp án cho câu hỏi
  const handleAnswer = (questionIndex, selectedOption, event) => {
    event.preventDefault(); // Ngừng hành động mặc định của button
    if (!showResult) {
      const updatedAnswers = [...answers];
      updatedAnswers[questionIndex] = selectedOption; // Cập nhật đáp án cho câu hỏi đã chọn
      setAnswers(updatedAnswers); // Cập nhật lại mảng answers
    }
  };

  // Hàm tính điểm khi người dùng hoàn thành quiz
  const calculateScore = (event) => {
    event.preventDefault(); // Ngừng hành động mặc định của button
    let newScore = 0;
    // Duyệt qua từng câu hỏi và kiểm tra đáp án người dùng
    selectedQuestions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        newScore++; // Tăng điểm nếu câu trả lời đúng
      }
    });
    setScore(newScore); // Lưu lại điểm số
    setShowResult(true); // Hiển thị kết quả
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="result-container">
          <h2>@@@@@@@@@@</h2>
          <p>
            {playerName}, M Đúng Được {score}/{numQuestions}
          </p>

          {/* Hiển thị các câu trả lời sai */}
          <div className="incorrect-answers-container">
            <h3>Danh Sách Câu Sai Nek ! Sai Nhiều v</h3>
            <div className="incorrect-answers-list">
              {selectedQuestions.map((question, index) => {
                if (answers[index] !== question.correctAnswer) {
                  return (
                    <div key={index} className="incorrect-answer">
                      <p className="question-text">{question.question}</p>

                      {/* Hiển thị các chi tiết cho câu hỏi */}
                      <div className="question-details">
                        <p>{question.details && question.details.join(', ')}</p>
                      </div>

                      {/* Hiển thị các đáp án */}
                      <div className="answers-list">
                        {question.answers.map((answer, ansIndex) => (
                          <div
                            key={ansIndex}
                            className={`answer-option ${answers[index] === answer.split(". ")[0] ? 'selected' : ''}`}
                          >
                            <button
                              type="button" // Đảm bảo đây là button không gửi form
                              onClick={(event) => handleAnswer(index, answer.split(". ")[0], event)}
                              disabled={showResult} // Disable khi quiz đã hoàn thành
                              className={`answer-button ${answers[index] === answer.split(". ")[0] ? 'selected' : ''}`}
                            >
                              {answer}
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Hiển thị câu trả lời người dùng đã chọn và câu trả lời đúng */}
                      <div className="selected-answer">
                        <strong>Câu M Chọn Sai :</strong> {answers[index]}
                      </div>
                      <div className="correct-answer">
                        <strong>Câu Đúng nek ! Học Đi:</strong> {question.correctAnswer}
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2>K làm Gà đổi Qua Chicken à</h2>

          <form>
            {selectedQuestions.map((question, index) => (
              <div key={index} className="question-container">
                <h3>Question {index + 1}</h3>
                <p className="question-text">{question.question}</p>

                {/* Hiển thị các chi tiết cho câu hỏi */}
                <div className="question-details">
                  <p>{question.details && question.details.join(', ')}</p>
                </div>

                {/* Hiển thị các đáp án */}
                <div className="answers-container">
                  {question.answers.map((answer, ansIndex) => (
                    <div key={ansIndex} className="answer-option">
                      <button
                        type="button" // Đảm bảo đây là button không gửi form
                        onClick={(event) => handleAnswer(index, answer.split(". ")[0], event)}
                        disabled={showResult} // Disable khi quiz đã hoàn thành
                        className={`answer-button ${answers[index] === answer.split(". ")[0] ? 'selected' : ''}`}
                      >
                        {answer}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </form>

          <div className="next-button-container">
            <button
              type="button" // Đảm bảo đây là button không gửi form
              onClick={calculateScore}
              className="next-button"
            >
              Xong R ! Ấn Đây Để Nộp
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FullQuiz;
