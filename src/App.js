import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Cards from './components/Cards';
import HeroSection from './components/HeroSection';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar /><Body/>
        <HeroSection/>
         
        
        <Cards/>
        <Footer/>
        <Switch>
          <Route path='/' exact element={Home} />
          <Route path='/services' element={Services} />
          <Route path='/products' element={Products} />
          <Route path='/sign-up' element={SignUp} />
        </Switch>
      </Router>
    </>
  );
  
}

export default App;
