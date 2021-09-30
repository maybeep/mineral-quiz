import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from './components/Menu';
import { Container, Row } from 'react-bootstrap';

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

  return (
    <Container className="App">
      <Row>
        
      </Row>
      <Row>
        <div className='question-section'>
						<div className='question-count'>
							<span>Mineral 1</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[0].questionText}</div>
					</div>
          <div className='answer-section'>
						{questions[0].answerOptions.map((answerOption, index) => (
              <button>{answerOption.answerText}</button>
            ))}
					</div>
      </Row>
    </Container>
  );
}

export default App;