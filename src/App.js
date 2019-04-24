import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GeolocationDemo from './GeolocationDemo';
import QrCodeDemo from './QrCodeDemo';
import './App.css';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/qr-demo" component={QrCodeDemo} />
      </div>
    </Router>
  );
}

export default App;
