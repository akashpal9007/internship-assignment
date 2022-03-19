import './App.css';
import './Components/Header';
import Header from './Components/Header';
import { Routes,Route} from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
