import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/navbar';
import Home from './pages/home'
import TopNavbar from './components/topNavbar';
import Playbar from './components/playbar';
function App() {
  return (
    <BrowserRouter>
      <div className='mainApp'>
        <Navbar />
        <div className='mainBox'>
          <TopNavbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            {/* <Route exact path="/about" element={<About />}></Route> */}
          </Routes>
        </div>
        <Playbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
