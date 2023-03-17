import React from 'react';
import Footer from "./FooterDiv/Footer";
import NavBar from './NavBar/Navbar';
import Search from './SearchDiv/search';
import Value from "./ValueDiv/Value";
import Jobs from "./JobDiv/jobs";

const App = () => {
  return (
    
    <div className='w-65 m-auto  bg-white'>
      
    <NavBar/>
    <Search/>
    <Jobs/>
     <Value/>
    <Footer/>

    </div>
    
  )
}

export default App