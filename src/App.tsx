import { Routes, Route} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import ContactForm from "./Pages/ContactForm";
import About from "./Pages/About";
import CaseStudies from "./Pages/CaseStudies";
import Resources from "./Pages/Resources";


function App() {



  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/case-studies" element={<CaseStudies/>}/>
      <Route path="/resources" element={<Resources/>}/>
      <Route path="/contact" element={<ContactForm/>}/>
    </Routes>
 
    </>
  )
}

export default App
