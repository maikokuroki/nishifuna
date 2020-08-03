import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import  Main  from './components/MainComponent';
import Eat from './components/EatComponent';
import MainBody from './components/MainBody';
import Footer from './components/FooterComponent';
import Venue from './components/PlayComponent';
import Router from './components/RouterComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          
        <Main />
      
      </div>
    </BrowserRouter>
  );
}

export default App;
