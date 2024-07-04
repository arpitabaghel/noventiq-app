import './App.css';
import React from "react"
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <div className='app-logo'>
        <img src='/noventiq-logo.svg'/>
        </div>
        <LoginForm/>
        <div className='app-footer'>
        Copyright 2024 Noventiq | Powered by Noventiq
      </div>
      </header>
     
    </div>
  );
}

export default App;
