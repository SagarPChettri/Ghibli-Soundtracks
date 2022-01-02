import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Body from '../Body';

import Footer from '../Footer';

function Home() {
  return (
    <><Body/>
      <HeroSection />
      
      <Cards />
      <Footer />
    </>
  );
}

export default Home;