import { useState } from "react";
import "./App.css";

function App() {
  const questions = [
    {
      question: "Which is the largest animal in the world?",
      answers: [
        { Text: "shark", correct: false },
        { Text: "whale", correct: true },
        { Text: "girraf", correct: false },
        { Text: "hippo", correct: false },
      ],
    },
    {
      question: "Which is the smallest continent in the world?",
      answers: [
        { Text: "Asia", correct: false },
        { Text: "Artic", correct: false },
        { Text: "Australia", correct: true },
        { Text: "Africa", correct: false },
      ],
    },
    {
      question: "Which is used to find the remainder in Javascript?",
      answers: [
        { Text: "**", correct: false },
        { Text: "%", correct: true },
        { Text: "/", correct: false },
        { Text: "***", correct: false },
      ],
    },
    {
      question: "Which is the largest country however, small continent?",
      answers: [
        { Text: "Nepal", correct: false },
        { Text: "India", correct: false },
        { Text: "Australia", correct: true },
        { Text: "Japan", correct: false },
      ],
    },
    {
      question: "In which country boys do make up?",
      answers: [
        { Text: "Japan", correct: false },
        { Text: "china", correct: false },
        { Text: "South Korea", correct: false },
        { Text: "Japan and South Korea", correct: true },
      ],
    },
    {
      question: "Who is the best hacker in the world?",
      answers: [
        { Text: "Kevin Mitnick", correct: true },
        { Text: "Adrian Lamo", correct: false },
        { Text: "Albert Gonzalez", correct: false },
        { Text: "Jeanson James Ancheta", correct: false },
      ],
    },
    {
      question: "Who is the ceo of facebook?",
      answers: [
        { Text: "Mark Zuckerberg", correct: true },
        { Text: "Adrian Lamo", correct: false },
        { Text: "Steve Jobs", correct: false },
        { Text: "Elon musk", correct: false },
      ],
    },
    {
      question: "Who is the ceo Tesla and Spacex?",
      answers: [
        { Text: "Mark Zuckerberg", correct: false },
        { Text: "Adrian Lamo", correct: false },
        { Text: "Steve Jobs", correct: false },
        { Text: "Elon musk", correct: true },
      ],
    },
    {
      question: "Who is the ceo Apple 🍎?",
      answers: [
        { Text: "Mark Zuckerberg", correct: false },
        { Text: "Adrian Lamo", correct: false },
        { Text: "Steve Jobs", correct: true },
        { Text: "Elon musk", correct: false },
      ],
    },
    {
      question: "Who made a fitst website?",
      answers: [
        { Text: "Mark Zuckerberg", correct: false },
        { Text: " Tim Berners-Lee", correct: true },
        { Text: "Steve Jobs", correct: false },
        { Text: "Elon musk", correct: false },
      ],
    },
    {
      question: "Who the ceo of Microsoft?",
      answers: [
        { Text: "Mark Zuckerberg", correct: false },
        { Text: " Bill gates", correct: false },
        { Text: " Satya Nadella", correct: true },
        { Text: "Elon musk", correct: false },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const nextQuestion = () => {
    setAnswered(false);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const handleAnswer = (index, correct) => {
    setAnswered(true);
    setSelectedAnswer(index);
    if (correct) {
      setScore(score + 1);
    }
  };
  return (
    <>
      <div className=" h-screen   flex justify-center items-center ">
        <div className="container-div bg-white bg-opacity-25 px-12 py-20 rounded-lg border border-black">
          <div className="flex justify-center ">
            <h1 className="text-xl">Quiz</h1>
          </div>
          {showScore ? (
            <div>
              You score {score} of {questions.length}
            </div>
          ) : (
            <div>
              <div className="text-center whitespace-pre-wrap">
                {questions[currentQuestion].question}
              </div>
              {questions[currentQuestion].answers.map((option, index) => (
                <button
                  onClick={() => handleAnswer(index, option.correct)}
                  className={`bg-blue-900 text-white block mb-3 w-96 h-9 ${
                    answered
                      ? option.correct
                        ? "bg-blue-600"
                        : selectedAnswer === index
                        ? "bg-red-700"
                        : ""
                      : ""
                  }`}
                  key={index}
                >
                  {option.Text}
                </button>
              ))}
              <div className="flex justify-center ">
                <button
                  className="bg-blue-800 text-white text-xl rounded-lg cursor-pointer hover:bg-blue-700 active:bg-blue-900 py-3 px-8"
                  disabled={answered ? "" : "disabled"}
                  onClick={nextQuestion}
                >
                  Next
                </button>
              </div>
              <p className="text-center text-gray-200">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
