import './App.css';
import AboutUs from './OtherPages/AboutUS/AboutUs.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from './Pages/Project';
import OurTeam from './OtherPages/OurTeam/OurTeam';
import Work from './OtherPages/Work/Work';
import Service from './OtherPages/Service/Service';
import Blog from './OtherPages/Blog/Blog';
import Contact from './Components/WorksComs/Contact/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Project/> */}
        <Routes>
          <Route path='/about' element={<AboutUs />} />
          <Route path='/Housing' element={<Project />} />
          <Route path='/team' element={<OurTeam />} />
          <Route path='/work' element={<Work />} />
          <Route path='/service' element={<Service />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1>Error Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
