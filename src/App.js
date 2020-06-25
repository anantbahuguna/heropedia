import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/Home'
import InfoPage from './pages/InfoPage'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route exact path='/info' component={InfoPage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
