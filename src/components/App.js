import React from "react";
import Signup from "./pages/Signup";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Private from "./pages/Private";
import ForgotPass from "./pages/ForgotPass";
import UpdateProfile from "./pages/UpdateProfile";
import Dashboard from "./drive/Dashboard";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Private exact path="/" component={Dashboard} />
          <Private exact path="/folder/:folderId" component={Dashboard} />
          <Private path="/user" component={Profile} />
          <Private path="/update-profile" component={UpdateProfile} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPass} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
