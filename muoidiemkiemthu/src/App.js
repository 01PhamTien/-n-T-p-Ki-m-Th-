import React, { useState } from "react";
import Welcome from "./Welcome";
import Settings from "./Settings";
import Quiz from "./Quiz";
import FullQuiz from "./FullQuiz"; // Thêm FullQuiz

function App() {
  const [playerName, setPlayerName] = useState("");
  const [numQuestions, setNumQuestions] = useState(5); // Giá trị mặc định
  const [difficulty, setDifficulty] = useState(""); // Độ khó mặc định
  const [currentPage, setCurrentPage] = useState("welcome");

  const goToSettings = (name) => {
    setPlayerName(name);
    setCurrentPage("settings");
  };

  const goToQuiz = (numQuestions, selectedDifficulty) => {
    setNumQuestions(numQuestions);
    setDifficulty(selectedDifficulty); // Lưu độ khó
    setCurrentPage(selectedDifficulty === "hard" ? "fullquiz" : "quiz"); // Chuyển tới quiz hoặc fullquiz
  };

  return (
    <div className="App">
      {currentPage === "welcome" && <Welcome onJoin={goToSettings} />}
      {currentPage === "settings" && (
        <Settings onSubmit={goToQuiz} defaultNumQuestions={numQuestions} />
      )}
      {currentPage === "quiz" && (
        <Quiz playerName={playerName} numQuestions={numQuestions} difficulty={difficulty} />
      )}
      {currentPage === "fullquiz" && (
        <FullQuiz playerName={playerName} numQuestions={numQuestions} difficulty={difficulty} />
      )}
    </div>
  );
}

export default App;  