import React, { useEffect } from 'react'
import { useState } from 'react';
import { ethers } from 'ethers';


function Welcome() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);




  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accountsChanged);
      window.ethereum.on("chainChanged", chainChanged);
    }
  }, []);

  const connectHandler = async () => {
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        await accountsChanged(res[0]);
      } catch (err) {
        console.error(err);
        setErrorMessage("There was a problem connecting to MetaMask");
      }
    } else {
      setErrorMessage("Install MetaMask");
    }
  };

  const accountsChanged = async (newAccount) => {
    setAccount(newAccount);
    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [newAccount.toString(), "latest"],
      });
      setBalance(ethers.utils.formatEther(balance));
    } catch (err) {
      console.error(err);
      setErrorMessage("There was a problem connecting to MetaMask");
    }
  };

  const chainChanged = () => {
    setErrorMessage(null);
    setAccount(null);
    setBalance(null);
  };



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
                <button className="btn btn-outline-success mt-3" onClick={connectHandler} >Connect Wallet</button>
              </div>
            </section>
            {/* <!-- End Hero --> */}

          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
            <div className="card " >
              <div className=" g-0">

                <div className=" align-items-center">
                  <div className="card-body p-lg-3 p-4 text-black">

                    <form>

                      <div className="d-flex align-items-center mb-3 pb-1">

                        <span className="h4 fw-bold mb-0">Your Account Detail</span>
                      </div>

                      {/* <h5 className="fw-normal mb-3 pb-3">Sign into your account</h5> */}

                      <div className="form-outline mb-3">
                        <p className="form-control "> Owner Address : Owner Address  0x</p>
                      </div>

                      <div className="form-outline mb-3">
                        <p className="form-control ">Your Address :  {account} </p>
                      </div>

                      <div className="form-outline mb-3">
                        <p className="form-control "> Total Balance : {balance}</p>
                      </div>

                      {/* <div className="pt-1 mb-4">
                                            <button className="btn btn-outline-success" >Change Wallet</button>
                                        </div> */}
                      <p > <span className='text-danger'>{errorMessage}</span></p>
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


