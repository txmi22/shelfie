import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Header from './Components/Header/Header';

function App() {
      return (
        <div className="App">
          <Header />
          <div className='main-container'>
            {routes}
          </div>
        </div>
      )
    }

export default App;
