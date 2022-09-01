import React from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Router>
        <Header>
        <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
