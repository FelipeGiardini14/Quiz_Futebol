import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import './GameOver.css';

export const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameOver">
        <h2>Game Over</h2>
        <p>Pontuação: {`${ 
          quizState.score > 0 ? quizState.score : quizState.correctQuestions
        }`}</p>
        <p>Acertou {quizState.correctQuestions} de {quizState.questions.length} perguntas</p>
        <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  );
};

export default GameOver;