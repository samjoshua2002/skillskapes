import React from 'react';

import Home from './Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <section id="home" >
          <Home/>
        </section>
       
      </div>
      
     
    </div>
  );
}

export default App;
