import './Welcome.css'

import { useContext, useState } from 'react';
import { QuizContext } from '../context/quiz';

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [show, setShow] = useState(false);

  return (
    <div id="welcome">
        <h2>Seja bem-vindo!</h2>
        <p id="regras">
          <span className="cor_p1">Resposta correta = +10 pontos </span>
          |
          <span className="cor_p2"> Resposta errada = -5 pontos </span>
        </p>

        {show && <p>Se o Score final for menor que 0, será contado o número de acertos.</p>}
        <button className="leiaMaisButton" type='button' onClick={() => setShow(!show)}>
          {show === true ? 'Ocultar' : 'Leia mais'}
        </button>

        <p id="click">Clique no botão para começar:</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>
          INICIAR
        </button>
    </div>
  );
};

export default Welcome