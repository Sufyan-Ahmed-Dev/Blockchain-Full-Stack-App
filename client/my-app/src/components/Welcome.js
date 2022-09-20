import React from 'react'

function Welcome() {
    function ConnectWallet() {
        alert("Connect Wallet Function Work Pending")
    }

    // function TransferMoney() {
    //     alert("NFT minting Func will be pending")
    // }

    return (
        <>
            <div className="container ">
                <div className="row justify-content-center" >
                    <div className="col">
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
                </div>
            </div>
        </>
    )
}

export default Welcome