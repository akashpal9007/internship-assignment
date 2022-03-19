import './App.css';
import './Components/Header';
import Header from './Components/Header';
import { Routes,Route} from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About'
import Company from './Pages/Company'
import Team from './Pages/Team'
import Join from './Pages/Join'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/team" element={<Team />}/>
          <Route path="/abouut" element={<About />}/>
          <Route path="/joinnow" element={<Join />}/>
          <Route path="/company" element={<Company />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
