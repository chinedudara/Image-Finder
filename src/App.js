import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import About from './components/pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" render={() => <Search />} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
