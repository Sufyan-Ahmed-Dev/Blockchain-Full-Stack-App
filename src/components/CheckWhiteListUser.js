import React ,{useState} from 'react';
import ContractABI from './Contract/contractABI.json'
import { ethers } from 'ethers';

function CheckWhiteListUser() {
    const [checkUser, setcheckUser] = useState('');
    const [status, setStatus] = useState('');




    var CheckUser = (event) => {
        setcheckUser(event.target.value)
    }


    var submit = (event) => {
        event.preventDefault()

        if (checkUser === '') {
            setStatus("Gives Proper Data")
        }
        else {
            var CheckUser = checkUser
        }


        async function ownerOf() {
            if (typeof window.ethereum !== 'undefined') {
                setStatus("wait")
                try {
                    const data = "0xE3605683A1fcbb9dbe9D9823B3935C1802313534";
                    const providers = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = providers.getSigner();
                    setStatus("Gives Correct data")
                    const contract = new ethers.Contract(data, ContractABI, signer);
                    const sendTX = await contract.whiteListUser(CheckUser)
                    // await sendTX.wait()
                    const check = sendTX.toString()
                    console.log(check)
                    setStatus(check)

                }
                catch (err) {
                    if(checkUser === ''){
                        setStatus("Gives Proper Data")
                    }else{
                        console.log(err)
                        setStatus(err.error.message);
                    }

                }
            }
            else {
                setStatus("Not Working")

            }
        }
        ownerOf()


    }
    return (

        <>
            <div className="container py-5 ">
                <div className="row d-flex justify-content-center align-items-center ">
                    {/* <div className="col "> */}
                    <div className="card shadow-lg p-3 mb-5 bg-body rounded border border-5" >
                        <div className=" g-0">

                            <div className=" align-items-center">
                                <div className="card-body p-lg-3 p-4 text-black">

                                    <form  onSubmit={submit}>

                                        <div className="d-flex align-items-center mb-3 pb-1">

                                            <span className="h4 fw-bold mb-0">Check White User</span>
                                        </div>

                                        {/* <h5 className="fw-normal mb-3 pb-3">Sign into your account</h5> */}

                                        <div className="form-outline mb-3">
                                            <input name='checkUser' value={checkUser} onChange={CheckUser}  type="text" id="form2Example17" className="form-control" placeholder='Enter WhiteList User Address' />
                                            {/* <label className="form-label" Htmlfor="form2Example17">Account Address</label> */}
                                        </div>



                                        <div className="pt-1 mb-4">
                                            <button className="btn btn-outline-success" type="submit" >Check </button>
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

export default CheckWhiteListUser