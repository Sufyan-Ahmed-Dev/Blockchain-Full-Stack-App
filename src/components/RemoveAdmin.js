import { ethers } from 'ethers';
import React, { useState } from 'react'
import ContractABI from './Contract/contractABI.json'

function RemoveAdmin() {


    const [addr, setAddress] = useState('');
    const [status, setStatus] = useState('');




    var Addr = (event) => {
        setAddress(event.target.value)
    }


    var submit = (event) => {
        event.preventDefault()

        if (addr === '') {
            setStatus("Gives Proper Data")
        }
        else {
            var ADDR = addr
        }


        async function removeWhiteListadmin() {
            if (typeof window.ethereum !== 'undefined') {
                setStatus("wait")
                if( ADDR.length < 42){
                    setStatus("Address Length less then 42 Character")
                }else if ( ADDR.length > 42){
                    setStatus("Address Length greater then 42 Character")
                }
                else if (ADDR.length === 42){
                    try {
                        const data = "0xD9D9AbDC7270b946c9f4112d9B927fa3Dd8E2A87";
                        const providers = new ethers.providers.Web3Provider(window.ethereum);
                        const signer = providers.getSigner();
                        const contract = new ethers.Contract(data, ContractABI, signer);
                        const sendTX = await contract.removeWhiteListadmin(ADDR)
                        await sendTX.wait()
                        console.log(sendTX)
                        setStatus("Successfully Done")
    
                    }
                    catch (err) {
                        if(addr === ''){
                            setStatus("Gives Proper Data")
                        }else{
                            console.log(err)
                            setStatus(err.error.message)
                        }
    
                    }
                }
                else{
                    setStatus("Something Went Wrong")
                }
            }
            else {
                setStatus("Not Working")

            }
        }
        removeWhiteListadmin()


    }


    return (
        <>

            <div className="container py-5 ">
                <div className="row d-flex justify-content-center align-items-center ">
                    <div className="card shadow-lg p-3 mb-5 bg-body rounded border border-5" >
                        <div className=" g-0">

                            <div className=" align-items-center">
                                <div className="card-body p-lg-3 p-4 text-black">

                                    <form onSubmit={submit}>

                                        <div className="d-flex align-items-center mb-3 pb-1">

                                            <span className="h4 fw-bold mb-0">Remove Admin</span>
                                        </div>

                                        {/* <h5 className="fw-normal mb-3 pb-3">Sign into your account</h5> */}

                                        <div className="form-outline mb-3">
                                            <input name='addr' value={addr} onChange={Addr} type="text" id="form2Example17" className="form-control" placeholder='Enter User Address' />
                                            {/* <label className="form-label" Htmlfor="form2Example17">Account Address</label> */}
                                        </div>



                                        <div className="pt-1 mb-4">
                                            <button className="btn btn-outline-success" type="submit" >Remove Admin</button>
                                            <p className='text-danger mt-1'>{status}</p>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}

                </div>
            </div>
        </>
    )
}

export default RemoveAdmin