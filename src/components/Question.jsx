import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import './Question.css'

import Option from "./Option";
import data from "../data/questions";

//Embaralhar opções
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
const shuffledOptions = data.map((teste) =>
  shuffleArray(teste.options)
);

//Inicio
const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: {answer: currentQuestion.answer, option}
    });
  };

  return (
    <div id="question">
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Option 
            option={option} 
            key={option} 
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
          />
        ))}
      </div>
      {quizState.answerSelected && (
        <button onClick={() => dispatch({type:"CHANGE_QUESTION"})}>CONTINUAR</button>
      )}
    </div>
  );
};

export default Question;