import React from "react";
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
import RemoveUser from "./components/RemoveUser";
import RemoveAdmin from "./components/RemoveAdmin";
import TokenURI from "./components/TokenURI";
import BalanceOf from "./components/BalanceOf";
import OwnerOf from "./components/OwnerOf";
import NFTName from "./components/NFTName";
import CheckWhiteListAdmin from "./components/CheckWhiteListAdmin";
import CheckWhiteListUser from "./components/CheckWhiteListUser";
import Button from "./components/Button";
function App() {
  return (
    <div className="App">
      
       <Navbar></Navbar>
       <div className="mt-5"></div>
       <div className="mt-5"></div>
       <div className="mt-5"></div>
       <Welcome></Welcome>
       <div className="mt-5"></div>
       <div className="mt-5"></div>
       <Button></Button>
      
       <div className="container my-5">
       <div className="section-title">
            {/* <h2>Courses</h2> */}
            <p>All Functions</p>
          </div>
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
          <div className="col-lg-4 col-md-6 col-sm-12">
           <RemoveUser></RemoveUser>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
          <RemoveAdmin></RemoveAdmin>
           </div>
           <div className="col-lg-4 col-md-6 col-sm-12">
            <TokenURI></TokenURI>
           </div>
           <div className="col-lg-4 col-md-6 col-sm-12">
          <BalanceOf></BalanceOf>
           </div>
           <div className="col-lg-4 col-md-6 col-sm-12">
            <OwnerOf></OwnerOf>
           </div>
           <div className="col-lg-4 col-md-6 col-sm-12">
            <NFTName></NFTName>
           </div>
           <div className="col-lg-4 col-md-6 col-sm-12">
            <CheckWhiteListAdmin></CheckWhiteListAdmin>
           </div>
           <div className="col-lg-4 col-md-6 col-sm-12">
            <CheckWhiteListUser></CheckWhiteListUser>
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
