import React from 'react';
import './App.css';
import { Navbar } from '../Navbar/Navbar';
import WelcomeBar from '../WelcomeBar/WelcomeBar';
import PortalList from '../PortaList/PortalList';
import Footer from '../Footer/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <WelcomeBar />
      <PortalList />
      <Footer />
    </div>
  );
}


//
export default App;
