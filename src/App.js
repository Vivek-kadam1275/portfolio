 import './App.css';
import About from './components/About';
 import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

 function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projects' element={<Projects/>}/>
    

         </Routes>
     </div>
  );
}

export default App;
