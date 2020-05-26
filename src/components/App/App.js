import React from 'react';
import './App.css';
import { Navbar } from '../Navbar/Navbar';
import WelcomeBar from '../WelcomeBar/WelcomeBar';
import PortalList from '../PortaList/PortalList';
import Footer from '../Footer/Footer';
import {
  BrowserRouter as Switch, Route, Link } from "react-router-dom"



function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/jobs">
          <h1>Jobs page</h1>
        </Route>
        <Route path="/sports">
          <h1>Sports page</h1>
        </Route>
        <Route path="/corporate">
          <h1>Corporate page</h1>
        </Route>
        <Route path="/travel">
          <h1>Travel page</h1>
        </Route>
        <Route exact path="/">
          <div>
            
            <WelcomeBar />
            <PortalList />
            <Footer />
          </div>
        </Route>
      </Switch>
      
    </div>
  );
}


//
export default App;
