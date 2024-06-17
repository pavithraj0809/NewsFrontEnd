import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Homenavbar';
import Homenavbar from './Components/Homenavbar';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import News from './Components/News';
import User from './Components/User';
import Contact from './Components/Contact'
import NewsDetail from './Components/NewsDetail';
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
    <div>
      <Router>
      <Toaster></Toaster>
      <Homenavbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/users" element={<User/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='/detail/:id' element={<NewsDetail></NewsDetail>}/>
      </Routes>
      </Router>
    </div>
      
    </>
  );
}

export default App;
