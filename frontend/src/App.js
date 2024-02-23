import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./SignInSignUp/SignIn";
import SignUp from "./SignInSignUp/SignUp";
import Home from "./Home/Home";
import AddContact from "./Home/addContact";
import NewChat from "./ChatInterface/NewChat";
import { auth } from "./firebase-config";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./Redirect/ProtectedRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/signin"
              element={
                <ProtectedRoute redirectTo="/home">
                  <SignIn />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <ProtectedRoute redirectTo="/home">
                  <SignUp />
                </ProtectedRoute>
              }
            />
            <Route
              path="/home"
              element={
                <ProtectedRoute redirectTo="/signin">
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/addContact" element={<AddContact />} />
            <Route path="/newchat" element={<NewChat />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
