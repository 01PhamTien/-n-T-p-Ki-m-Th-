import React, { useState } from "react";
import "./Settings.css";

function Settings({ onSubmit, defaultNumQuestions }) {
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [numQuestions, setNumQuestions] = useState(defaultNumQuestions);

  const handleDifficultySelect = (difficultyLevel) => {
    setSelectedDifficulty(difficultyLevel); // Lưu độ khó
  };

  const handleNumQuestionsSelect = (num) => {
    setNumQuestions(num); // Lưu số câu hỏi đã chọn
  };

  const handleStart = () => {
    if (numQuestions > 0 && selectedDifficulty) {
      onSubmit(numQuestions, selectedDifficulty); // Truyền số câu hỏi và độ khó
    } else {
      alert("Please select a valid number of questions and difficulty!"); // Thông báo nếu chưa chọn đủ
    }
  };

  return (
    <div className="settings-container">
      <div className="settings-box">
        <h2>:))</h2>
        <p>Chọn Đi ! M muốn làm bao nhiêu câu @@@</p>
        
        {/* Chọn số lượng câu hỏi */}
        <div className="button-container">
          {[25, 50, 75, 100, 125].map((num) => (
            <button
              key={num}
              onClick={() => handleNumQuestionsSelect(num)}
              className={`question-button ${num === numQuestions ? 'selected' : ''}`}
            >
              {num} Câu
            </button>
          ))}
        </div>

        {/* Chọn chế độ (Easy/Hard) */}
        <div className="difficulty-container">
          <h3>Chọn Làm Gà Hay Chicken Đi</h3> {/* Dòng chữ chọn chế độ */}
          <button
            onClick={() => handleDifficultySelect("easy")}
            className={`difficulty-button ${selectedDifficulty === "easy" ? 'selected' : ''}`}
          >
            Chicken Chọn
          </button>
          <button
            onClick={() => handleDifficultySelect("hard")}
            className={`difficulty-button ${selectedDifficulty === "hard" ? 'selected' : ''}`}
          >
            Gà Chọn
          </button>
        </div>

        <button onClick={handleStart} className="start-button">
          làm 
        </button>
      </div>
    </div>
  );
}

export default Settings;
