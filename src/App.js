import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import Entreprises from "./pages/entreprises";
import Metiers from "./pages/metiers";
import Formation from "./pages/formation";
import Ecole from "./pages/ecole";
import Technologies from "./pages/technologies";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/ecole" component={Ecole} exact />
          <Route path="/entreprises" component={Entreprises} exact />
          <Route path="/metiers" component={Metiers} exact />
          <Route path="/formation" component={Formation} exact />
          <Route path="/technologies" component={Technologies} exact />
          <Route path="/signin" component={SigninPage} exact />
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
