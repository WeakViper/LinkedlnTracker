import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './SignInSignUp/SignIn';
import SignUp from './SignInSignUp/SignUp';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>

        <Routes>
          <Route path="/signin" element={<SignIn />} />
        </Routes>

        <Routes>
          <Route path="/signup" element={<SignUp />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
