import React from 'react'
import { useState } from 'react';
import { ethers } from "ethers";

function Welcome() {


  // usetstate for storing and retrieving wallet details
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });
  
   // Function for getting handling all events
   const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
      address: account,
    });
  
    // Setting a balance
    getbalance(account);
  };
async function ConnectWallet (){
    // Asking if metamask is already present or not
    try {
        if (window.ethereum) {
  
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts", });
        console.log(accounts);
        const detail = accountChangeHandler(accounts[0]);
        return detail
    }
       
      } catch (error) {
        console.log(error);
  
        throw new Error("No ethereum object");
      }
    };

 

   // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
  
    // Requesting balance method
    window.ethereum
      .request({ 
        method: "eth_getBalance", 
        params: [address, "latest"] 
      })
      .then((balance) => {
        // Setting balance
        setdata({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };
  

    // function TransferMoney() {
    //     alert("NFT minting Func will be pending")
    // }

    return (
        <>
            <div className="container ">
                <div className="row justify-content-center" >
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        {/* <!-- ======= Hero Section ======= --> */}
                        <div className="mt-lg-5"></div>
                        <div className="mt-lg-3"></div>
                        <section className="d-flex justify-content-center align-items-center ">

                            <div className="container position-relative">
                                <h2>Connect Wallet Transfer Securily</h2>
                                <h4>Decenterilize app connect wallet and minting NFT's For OpenSea</h4>
                                <a href="courses.html" className="btn btn-outline-success mt-3" onClick={ConnectWallet} >Connect Wallet</a>
                            </div>
                        </section>
                        {/* <!-- End Hero --> */}

                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
                    <div className="card" >
                        <div className=" g-0">

                            <div className=" align-items-center">
                                <div className="card-body p-lg-3 p-4 text-black">

                                    <form>

                                        <div className="d-flex align-items-center mb-3 pb-1">

                                            <span className="h4 fw-bold mb-0">Your Account Detail</span>
                                        </div>

                                        {/* <h5 className="fw-normal mb-3 pb-3">Sign into your account</h5> */}

                                        <div className="form-outline mb-3">
                                        <p className="form-control "> Owner Address : Owner Address</p> 
                                        </div>

                                        <div className="form-outline mb-3">
                                           <p className="form-control ">Your Address :  {data.address} </p>
                                        </div>

                                        <div className="form-outline mb-3">
                                        <p className="form-control "> Total Balnce : {data.Balance}</p> 
                                        </div>

                                        <div className="pt-1 mb-4">
                                            <button className="btn btn-outline-success" type="button"  >Change Wallet</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome