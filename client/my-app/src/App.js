import Navbar from "./components/Navbar"
import './App.css';
import Welcome from "./components/Welcome";
import Transiction from "./components/Transiction";
import Footer from "./components/Footer";
import WhiteListUser from "./components/WhiteListUser";
import WhiteListAdminMInting from "./components/WhiteListAdminMInting";
import PublicMinting from "./components/PublicMinting";
import AddAdmin from "./components/AddAdmin";
import AddUser from "./components/AddUser";
import UpdateBaseUri from "./components/UpdateBaseUri";
function App() {
  return (
    <div className="App">
      
       <Navbar></Navbar>
       <div className="mt-5"></div>
       <div className="mt-5"></div>
       <div className="mt-5"></div>
       <Welcome></Welcome>
       
       <div className="container">
        <h2 className="text-center">All Functions</h2>
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
          <div className="col-lg-4 col-md-6 col-sm-12">
          <AddAdmin></AddAdmin>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
          <AddUser></AddUser>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
          <UpdateBaseUri></UpdateBaseUri>
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
