import React, { useEffect } from 'react'
import { useState } from 'react';
import Web3 from 'web3';

function Welcome() {


  // usetstate for storing and retrieving wallet details
  const [Address, setAddress] = useState('');
  const [Balance, setBalance] = useState('');
  const [Network, setNetwork] =useState('');

  useEffect(()=>{
  // Function for getting handling all events
    const web3 = new Web3(Web3.givenProvider);
async function ConnectWallet (){
    const Account = await web3.eth.requestAccounts();
    setAddress(Account[0]);
  }

  async function CheckBalance(){

     const network = await web3.eth.net.getNetworkType();
     const balance = await web3.eth.getBalance(Address);
   

     setNetwork(network)
     console.log(network)
     setBalance(balance);
     console.log(balance)
  }



  ConnectWallet();
  CheckBalance();

},[Address]
  )
  

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
                                <a href="courses.html" className="btn btn-outline-success mt-3"  >Connect Wallet</a>
                            </div>
                        </section>
                        {/* <!-- End Hero --> */}

                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
                    <div className="card shadow-lg p-3 mb-5 bg-body rounded border border-5" >
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
                                           <p className="form-control ">Your Address :  {Address} </p>
                                        </div>

                                        <div className="form-outline mb-3">
                                        <p className="form-control "> Total Balnce ({Network}): {Balance}</p> 
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