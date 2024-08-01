import './App.css';
import appImg from './assets/app-img.png';
import tickImg from './assets/checked-tick.svg';
import crossImg from './assets/cross.svg';
import trophyImg from './assets/trophy.svg';
import neuralNet from "./assets/Neural_network.svg";
import convAnim from "./assets/conv_anim.gif"
import neiImg from './assets/NEI.png';
import ussImg from "./assets/team/ussumane.soare.png"
import gustImg from "./assets/team/gustavo.jacinto.png"
import ruiImg from './assets/team/rui.duarte.png';
import questionSet from './questions';
import React, { useState } from 'react';

function getRandomSubarray(arr, size) {
  var shuffled = arr.slice(0)
  for(let i = shuffled.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = shuffled[i]
    shuffled[i] = shuffled[j]
    shuffled[j] = temp
  }
  return shuffled.slice(0, size);
}

function generateAnswerSet(question, size) {
  var ans = getRandomSubarray(Array.from(questionSet.keys()), size);
  while (!ans.includes(question)) {
    ans = getRandomSubarray(Array.from(questionSet.keys()), size);
  }
  return ans;
}

function App() {
  const numQuestions = 6;
  const numAnswers = 4;

  const screen= {
    BEGIN: 0,
    MORE_INFO: 1,
    SELECT_MODE: 2,
    QUESTION: 3,
    ANSWER: 4,
    SCORE: 5,
  };
  
  const [questions] = useState(getRandomSubarray(Array.from(questionSet.keys()), numQuestions));

  const [currentScreen, setScreen] = useState(screen.BEGIN);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerSet, setAnswerSet] = useState(generateAnswerSet(questions[0], numAnswers));
  const [score, setScore] = useState(0);
  const [lastAnswer, setLastAnswer] = useState(false);

  const [isHardMode, setHardMode] = useState(false);

	const handleAnswerOptionClick = (answerOption) => {
    setLastAnswer(answerOption);
		if (answerOption === questions[currentQuestion]) {
      setScore(score + 1);
    }
    setScreen(screen.ANSWER);
  };
  
  const handleNextQuestionClick = () => {
    const nextQuestion = currentQuestion + 1;

		if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setAnswerSet(generateAnswerSet(questions[nextQuestion], numAnswers));
      setScreen(screen.QUESTION);
		} else {
			setScreen(screen.SCORE);
		}
  };

  switch (currentScreen) {
    case screen.BEGIN:
      return (
        <>
          <div className='nei-img'>
            <img src={neiImg} />
            <span>2024</span>
          </div>
          <div className='app'>
            <div className='question-section'>
              <div className='question-count'>
                <span>Bem-vindo ao quiz "Consegues pensar como a inteligência artificial?"</span>
              </div>
              <div className='question-text'>
                <p>
                  Há várias tecnologias de identificação de objetos que observam as images de uma forma diferente de que conhecemos. As redes neuronais treinadas para estas tarefas realizam modificações nas imagens originais. Estas modificações são importantes para que os computadores consigam identificar a presença de certos padrões. Achas que consegues acertar na imagem que diz respeito à forma que a rede neuronal a interpreta?
                </p>
                <p>
                Neste jogo vamos testar os teus conhecimentos sobre a forma como as imagens são reconhecidas pelas redes neuronais.
                </p>
              </div>
            </div>
            <div className='answer-section'>
              <button onClick={() => setScreen(screen.MORE_INFO)}>Saber mais...</button>
              <button className='start-btn' onClick={() => setScreen(screen.SELECT_MODE)}>Começar!</button>
            </div>
          </div>
          <img className='app-img' src={appImg} />
        </>
      );

    case screen.MORE_INFO:
      return (
        <>
          <div className='nei-img'>
            <img src={neiImg} />
            <span>2024</span>
          </div>
          <div className='app'>
            <div className='question-section'>
              <div className='question-count'>
                <span>Saber mais...</span>
              </div>
              <div className='question-text'>
                <p>
                Uma rede neuronal é um sistema computacional desenvolvido com base no cérebro. É constituido por vários "neurónios" artificiais interligados que transformam dados de entrada (neste caso, uma imagem) numa saída (neste caso, o tipo de objeto detetado).
                </p>
                <div className='about-img'>
                  <img src={neuralNet} />
                  <p>Um exemplo simples de uma rede neuronal. Esta rede tem duas entradas e uma saída, com 5 neurónios no meio a transformar os dados de entrada.</p>
                </div>
                <p>
                Existem vários tipos de redes neuronais criadas para vários fins. Um tipo muito usado para a classificação de objetos é a rede neuronal convolucional. Este tipo de rede chama-se convolucional por realizar várias convoluções na imagem à entrada, ou seja, processa a imagem em várias partes.
                </p>
                <div className='question-img'><img src={convAnim} /></div>
                <p>
                Este processo transforma a imagem numa série de imagens mais pequenas, realçando algumas características das imagens. Estas redes convolucionais têm várias camadas que transfomram as características da imagem noutras mais simples para se chegar a um resultado de classificação.
                </p>
                <p>
                A rede é treinada comparando os seus resultados com as classificações corretas. Iterativamente durante o treino, a rede ajusta-se para aproximar-se à classificação correta.
                </p>
              </div>
            </div>
            <div className='answer-section'>
              <button onClick={() => setScreen(screen.BEGIN)}>Voltar</button>
              <button className='start-btn' onClick={() => setScreen(screen.SELECT_MODE)}>Começar!</button>
            </div>
          </div>
        </>
      );

    case screen.SELECT_MODE:
      return (
        <>
          <div className='nei-img'>
            <img src={neiImg} />
            <span>2024</span>
          </div>
          <div className='app'>
            <div className='question-section'>
              <div className='question-count'>
                <span>Escolhe o modo:</span>
              </div>
            </div>
            <div className='answer-section'>
                <button style={{textAlign: 'center'}} className='start-btn' onClick={() => setScreen(screen.QUESTION)}>Fácil<br />(A partir da imagem original)</button>
                <button style={{textAlign: 'center'}} onClick={() => {setHardMode(true);setScreen(screen.QUESTION)}}>Difícil<br />(A partir de uma imagem dentro da rede)</button>
            </div>
          </div>
        </>
      );

    case screen.QUESTION:
      return (
        <>
          <div className='nei-img'>
            <img src={neiImg} />
            <span>2024</span>
          </div>
          <div className='app'>
            <div className='question-section'>
              <div className='question-count'>
                <span>Pergunta {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-img'>
                <img src={isHardMode ? questionSet[questions[currentQuestion]].harderImg : questionSet[questions[currentQuestion]].questionImg} />
              </div>
              <div className='question-text'>{questionSet[questions[currentQuestion]].questionText}</div>
            </div>
            <div className='answer-section'>
              {answerSet.map((answerOption) => (
                <button className='answer-choice' onClick={() => handleAnswerOptionClick(answerOption)} style={{backgroundImage: `url(${isHardMode ? questionSet[answerOption].questionImg : questionSet[answerOption].answerImg})`}} />
              ))}
            </div>
          </div>
        </>
      );

    case screen.ANSWER:
      return (
        <>
        <div className='nei-img'>
          <img src={neiImg} />
          <span>2024</span>
        </div>
        <div className='app'>
          <div className='question-section'>
            <div className='question-count'>
              <span>Pergunta {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questionSet[questions[currentQuestion]].questionText}</div>
            <div className='show-answer'>
              <div className='show-answer-imgs'>
              {lastAnswer === questions[currentQuestion] ? (
                <>
                  <div className='show-answer-img'>
                    <img className='correct' src={isHardMode ? questionSet[questions[currentQuestion]].harderImg : questionSet[questions[currentQuestion]].answerImg} />
                  </div>
                  <div className='show-answer-img'>
                    <img className='tick' src={tickImg} />
                  </div>
                </>
              ) : (
                <>
                  <div className='show-answer-img'>
                    <img src={isHardMode ? questionSet[questions[currentQuestion]].harderImg : questionSet[questions[currentQuestion]].answerImg} />
                  </div>
                  <div className='show-answer-img'>
                    <img className='incorrect' src={isHardMode ? questionSet[lastAnswer].harderImg : questionSet[lastAnswer].answerImg} />
                  </div>
                  <div className='show-answer-img'>
                    <img className='cross' src={crossImg} />
                  </div>
                </>
              )}
              </div>
              <div className='show-answer-explain'>
                <div className='show-answer-text'>
                  {isHardMode ? questionSet[questions[currentQuestion]].hardAnswerText : questionSet[questions[currentQuestion]].answerText}
                </div>
                <div className='question-img'>
                  <img className='harder-img' src={questionSet[questions[currentQuestion]].questionImg} />
                </div>
              </div>
            </div>
          </div>
          <div className='answer-section'>
            <button onClick={() => handleNextQuestionClick()}>
              {currentQuestion + 1 < questions.length ? (
                <>Pr&oacute;xima pergunta!</>
              ) : (
                <>Ver pontua&ccedil;&atilde;o!</>
              )}
            </button>
          </div>
        </div>
        </>
      );

    case screen.SCORE:
      return (
        <>
        <div className='nei-img'>
          <img src={neiImg} />
          <span>2024</span>
        </div>
        <div className='app'>
          {score > questions.length/2 &&
            <div className='trophy-section'>
              <img src={trophyImg} />
            </div>
          }
          <div className='score-section'>
            {score > questions.length/2 &&
              <>Parab&eacute;ns!</>
            } Acertaste {score} em {questions.length}!
          </div>
          <div className='credits-section'>
            <p>Obrigado por teres participado e esperemos que tenhas gostado!</p>
            <p>Esta actividade foi criada no <a href="https://www.inesc-id.pt/">INESC-ID</a>, e foi desenvolvida por:</p>
            <div className='team-pics'>
              <div className='team-pic'>
                <div><img src={ussImg}/></div>
                <div>Ussumane Soaré</div>
              </div>
              <div className='team-pic'>
                <div><img src={gustImg}/></div>
                <div>Gustavo Jacinto</div>
              </div>
              <div className='team-pic'>
                <div><img src={ruiImg} /></div>
                <div>Rui Duarte</div>
              </div>
            </div>
          </div>
          <div className='answer-section'>
            <button onClick={() => window.location.reload(false)}>Jogar outra vez!</button>
          </div>
        </div>
        </>
      );

    default:
      // should not happen
      return;
  }
}

export default App;


/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/