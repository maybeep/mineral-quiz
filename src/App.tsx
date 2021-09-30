import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Col, Container, Row } from 'react-bootstrap';

function App(): JSX.Element {
  // https://github.com/chrisblakely01/quiz-app/blob/master/starter/src/App.js
  const questions = [
    {
      questionText: 'What is the formula for Quartz?',
      answerOptions: [
        { answerText: '(Na, K) Al Si3 O8', isCorrect: false },
        { answerText: 'Na3 K Al4 Si4 O16', isCorrect: false },
        { answerText: 'Si O2', isCorrect: true },
        { answerText: 'Na Al Si3 O8 to Ca Al2 Si2 O8', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the formula for Alkali Feldspar Series?',
      answerOptions: [
        { answerText: 'Si O2', isCorrect: false },
        { answerText: '(Na, K) Al Si3 O8', isCorrect: true },
        { answerText: 'Na Al Si3 O8 to Ca Al2 Si2 O8', isCorrect: false },
        { answerText: 'Na3 K Al4 Si4 O16', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the formula for Nepheline (Feldspathoid)?',
      answerOptions: [
        { answerText: 'Na3 K Al4 Si4 O16', isCorrect: true },
        { answerText: '(Na, K) Al Si3 O8', isCorrect: false },
        { answerText: 'Si O2', isCorrect: false },
        { answerText: 'Na Al Si3 O8 to Ca Al2 Si2 O8', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the formula for Plagioclase Feldspar Series?',
      answerOptions: [
        { answerText: 'Na3 K Al4 Si4 O16', isCorrect: false },
        { answerText: '(Na, K) Al Si3 O8', isCorrect: false },
        { answerText: 'Si O2', isCorrect: false },
        { answerText: 'Na Al Si3 O8 to Ca Al2 Si2 O8', isCorrect: true },
      ],
    },
  ];

  // state for holding current quesition number
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // go to next question when answer is clicked
  const handleAnswerButtonClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    } else {
      // show score after last question
      setShowScore(true);
    }
  }

  // state for storing whether or not to show the score screen
  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  // state for storing which image to show (corresponds with question #)
  const [image, setImage] = useState(0);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <Header />
      </div>
      <div className='row'>
        <div className='col-sm-2'>
          <Menu />
        </div>
        <div className='col'>
        <div className='app'>
          {showScore ? (
            <div className='score-section'>
              You scored {score} out of {questions.length}
            </div>
          ) : (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className='question-text'>{questions[currentQuestion].questionText}</div>
              </div>
              <div className='answer-section'>
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                  <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                ))}
              </div>
            </>
          )}
        </div>
        </div>
        <div className='col'>
        <div className='mineral-image'>
          <h1>Image</h1>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;