import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./SignInSignUp/SignIn";
import SignUp from "./SignInSignUp/SignUp";
import Home from "./Home/Home";
import AddContact from "./Home/addContact";
import NewChat from "./ChatInterface/NewChat";
import EnterExistingChat from "./ChatInterface/EnterExistingChat";
import ContinueChat from "./ChatInterface/ContinueChat";
import { auth } from "./firebase-config";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./Redirect/ProtectedRoute";
import AuthRedirect from "./Redirect/AuthRedirect";
import Profile from "./ProfilePage/Profile";

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
                <AuthRedirect>
                  <SignIn />
                </AuthRedirect>
              }
            />
            <Route
              path="/signup"
              element={
                <AuthRedirect>
                  <SignUp />
                </AuthRedirect>
              }
            />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addContact"
              element={
                <ProtectedRoute>
                  <AddContact />
                </ProtectedRoute>
              }
            />
            <Route
              path="/newchat"
              element={
                <ProtectedRoute>
                  <NewChat />
                </ProtectedRoute>
              }
            />
            <Route
              path="/enterchats"
              element={
                <ProtectedRoute>
                  <EnterExistingChat />
                </ProtectedRoute>
              }
            />
            <Route
              path="/continuechat"
              element={
                <ProtectedRoute>
                  <ContinueChat />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
