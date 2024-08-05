 import './App.css';
import About from './components/About';
import Certificates from './components/Certificates';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

 function App() {
  return (
    <div className="">
      <Navbar />
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
    

         </Routes>
         <Footer/>
    </div>
  );
}

export default App;
