import Navbar from "./components/Navbar"
import './App.css';
import Welcome from "./components/Welcome";
import Transiction from "./components/Transiction";
import Footer from "./components/Footer";
import WhiteListUser from "./components/WhiteListUser";
import WhiteListAdminMInting from "./components/WhiteListAdminMInting";
import PublicMinting from "./components/PublicMinting";
function App() {
  return (
    <div className="App">
      
       <Navbar></Navbar>
       <div className="mt-5"></div>
       <div className="mt-5"></div>
       <div className="mt-5"></div>
       <Welcome></Welcome>
       
       <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
          <WhiteListUser></WhiteListUser>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
          <WhiteListAdminMInting ></WhiteListAdminMInting>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
          <PublicMinting></PublicMinting>
          </div>
        </div>
       </div>
       
       
      
       
       <div className="mt-5"></div>
       <Transiction></Transiction>
       <div className="mt-5"></div>
       <Footer></Footer>
    </div>
  );
}

export default App;
