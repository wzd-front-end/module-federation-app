import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Container from "./Components/Container";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Container/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
