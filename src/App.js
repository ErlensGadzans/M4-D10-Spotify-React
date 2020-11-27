import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import ArtistPage from "./components/ArtistPage"

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Route path="/artist" exact component={ArtistPage} />

        <Footer />
      </Router>
    );
  }
}

export default App;