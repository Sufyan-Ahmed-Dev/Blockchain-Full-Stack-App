import React from 'react'

function WhiteListAdminMInting() {
    return (
        <>

            <div className="container py-5 ">
                <div className="row d-flex justify-content-center align-items-center ">
                    {/* <div className="col "> */}
                    <div className="card shadow-lg p-3 mb-5 bg-body rounded border border-5" >
                        <div className=" g-0">

                            <div className=" align-items-center">
                                <div className="card-body p-lg-3 p-4 text-black">

                                    <form>

                                        <div className="d-flex align-items-center mb-3 pb-1">

                                            <span className="h4 fw-bold mb-0">WhiteListAdmin</span>
                                        </div>

                                        {/* <h5 className="fw-normal mb-3 pb-3">Sign into your account</h5> */}

                                        <div className="form-outline mb-3">
                                            <input type="text" id="form2Example17" className="form-control" placeholder='Enter NFT token ID' />
                                            {/* <label className="form-label" Htmlfor="form2Example17">Account Address</label> */}
                                        </div>

                                        <div className="form-outline mb-3">
                                            <input type="number" id="form2Example27" className="form-control " placeholder='Enter Metadata Hash' />
                                            {/* <label className="form-label" Htmlfor="form2Example27"> Balance</label> */}
                                        </div>

                                        <div className="form-outline mb-3">
                                            <input type="text" id="form2Example27" className="form-control " placeholder='Enter NFT name' />
                                            {/* <label className="form-label" Htmlfor="form2Example27">Text Message</label> */}
                                        </div>

                                        <div className="pt-1 mb-4">
                                            <button className="btn btn-outline-success" type="button" >Mint NFT</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* </div> */}
            </div>
        </>
    )
}

export default WhiteListAdminMInting