import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SingleArtist from "./components/SingleArtist";

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar title="Spotify" />
        <Route path="/" exact component={Home} />
        <Route path="/artist/:id" exact component={SingleArtist} />
        <Footer />
      </Router>
    );
  }
}

export default App;
