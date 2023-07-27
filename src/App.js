import './App.css';
import AboutUs from './OtherPages/AboutUS/AboutUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from './Project';
import OurTeam from './OtherPages/OurTeam/OurTeam';
import Work from './OtherPages/Work/Work';
import Service from './OtherPages/Service/Service';
import Blog from './OtherPages/Blog/Blog';
import Contact from './Components/WorksComs/Contact/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Project/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/team' element={<OurTeam/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
