
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Applications from "./components/Applications"
import Ourcompany from "./components/Ourcompany"
import Development from './components/Development';

function App() {
  

  return (
    <>
      <Router>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/application" element={<Applications/>}/>
         <Route path="/company" element={<Ourcompany/>}/>
         <Route path="/development" element={<Development/>}/>
        
      </Routes>
    </Router>
    </>
  )
}

export default App
