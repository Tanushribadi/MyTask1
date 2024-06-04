//import logo from './logo.svg';
import './App.css';
import { Firstpage } from './Components/Firstpage';
import { Secondpag } from './Components/Secondpag';
import { Thirdpage } from './Components/Thirdpage';
import {Forthpage } from './Components/Forthpage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
    
     <Router>
      <Routes>
        <Route path="/" element={<Firstpage/>}/>
        <Route path="/next" element={<Secondpag/>}/>
        <Route path="/third" element={<Thirdpage/>}/>
        <Route path="/forth" element={<Forthpage/>}/>
      </Routes>
     </Router>
     
    </div>
    
  );
}

export default App;
