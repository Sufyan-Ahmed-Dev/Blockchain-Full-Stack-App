import React from 'react'

function Welcome() {
    function ConnectWallet(){
        alert("Connect Wallet Function Work Pending")
    }

    function TransferMoney(){
        alert("NFT minting Func will be pending")
    }
    
    return (
        <>
            <div className="container ">
                <div className="row justify-content-center" >
                    <div className="col-lg-7 col-md-6 col-sm-12">
                        {/* <!-- ======= Hero Section ======= --> */}
                        <div className="mt-lg-5"></div>
                        <div className="mt-lg-3"></div>
                        <section className="d-flex justify-content-center align-items-center ">
                        
                            <div className="container position-relative">
                                <h1>Connect Wallet<br /> Transfer Securily</h1>
                                <h2>Decenterilize app connect wallet and transfer ether your friend or Client.</h2>
                                <a href="courses.html" className="btn btn-outline-success" onClick={ConnectWallet} >Connect Wallet</a>
                            </div>
                        </section>
                        {/* <!-- End Hero --> */}

                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="container py-5 ">
                            <div className="row d-flex justify-content-center align-items-center ">
                                <div className="col ">
                                    <div className="card" >
                                        <div className=" g-0">

                                            <div className="d-flex align-items-center">
                                                <div className="card-body p-4 p-lg-5 text-black">

                                                    <form>

                                                        <div className="d-flex align-items-center mb-3 pb-1">
                                                            <i className="fas fa-cubes fa-2x me-3" ></i>
                                                            <span className="h2 fw-bold mb-0">Minting</span>
                                                        </div>

                                                        {/* <h5 className="fw-normal mb-3 pb-3">Sign into your account</h5> */}

                                                        <div className="form-outline mb-3">
                                                            <input type="text" id="form2Example17" className="form-control" placeholder='Enter NFT token ID' />
                                                            {/* <label className="form-label" Htmlfor="form2Example17">Account Address</label> */}
                                                        </div>

                                                        <div className="form-outline mb-3">
                                                            <input type="number" id="form2Example27" className="form-control " placeholder='Enter Metadata Hash'/>
                                                            {/* <label className="form-label" Htmlfor="form2Example27"> Balance</label> */}
                                                        </div>

                                                        <div className="form-outline mb-3">
                                                            <input type="text" id="form2Example27" className="form-control " placeholder='Enter NFT name' />
                                                            {/* <label className="form-label" Htmlfor="form2Example27">Text Message</label> */}
                                                        </div>

                                                        <div className="pt-1 mb-4">
                                                            <button className="btn btn-outline-success" type="button" onClick={TransferMoney}>Mint NFT</button>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome