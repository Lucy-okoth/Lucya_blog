import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Navbar from './NavBar';
import Home from './Home';
function App() {
  
  
  return (
    <div className="App">
      <Navbar />
      
      <div className="container"></div>
      <div className="content">
      <Home />
      
      </div>

    </div>
  );
}

export default App;
