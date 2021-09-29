import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from './components/Menu';
import { Container, Row } from 'react-bootstrap';

function App(): JSX.Element {
  return (
    <Container className="App">
      <Row>
        <Menu>
          
        </Menu>
      </Row>
      <Row>
        <h1>Mineral #</h1>
      </Row>
    </Container>
  );
}

export default App;