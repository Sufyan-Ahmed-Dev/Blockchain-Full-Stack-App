import Navbar from "./components/Navbar"
import './App.css';
import Welcome from "./components/Welcome";
import Transiction from "./components/Transiction";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      
       <Navbar></Navbar>
       <div className="mt-5"></div>
       <div className="mt-5"></div>
       <div className="mt-5"></div>
       <Welcome></Welcome>
       <div className="mt-5"></div>
       <Transiction></Transiction>
       <div className="mt-5"></div>
       <Footer></Footer>
    </div>
  );
}

export default App;
