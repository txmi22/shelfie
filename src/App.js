import React from 'react';
import './App.css';
// import Dashboard from '../src/Components/Dashboard/Dashboard'
// import Form from '../src/Components/Form/Form'
import routes from './routes';
import Header from './Components/Header/Header';

function App() {
      return (
        <div className="App">
          <Header />
          <div>
            {routes}
        </div>
        {/* <Dashboard/>
        <Form/> */}
        </div>
      )
    }

export default App;
