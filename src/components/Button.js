
import React, { useState,  } from 'react'
import ContractABI from "./Contract/contractABI.json"
import { ethers } from 'ethers';


function Button() {
      const [ActivePub, setActivePub] = useState("");
      const [deActivePub, setdeActivePub] = useState("");
      const [CheckSale, setCheckSale] = useState("");
      const [checkPaused, setcheckPaused] = useState("");
      const [unPaused, setunPaused] = useState("");
      // const [BaseURI , setBaseURI] = useState("");
      const [tokenName , settokenName] = useState("");
      const [tokensyamble , settokensyamble] = useState("");
      const [chekowner , setchekowner] = useState("");
      const [maxlimit , setmaxlimit] = useState('');
      const [adminlimit , setadminlimit] = useState('');
      const [whiteuserlimit , setwhiteuserlimit] = useState('');
      const [publiclimit , setpubliclimit] = useState('');
      
      


 
      // useEffect(() => {
      //       if (window.ethereum) {

      //             window.ethereum.on("chainChanged", chainChanged);
      //       }
      // }, []);
      // const ethPrivkey = "935a0ebd10c4babfd1cb46ffaf8d620d179db57e81a339cd09f9483e99c574ab"

      // const [checkPublicSales , setcheckPublicSales] = useState();
      const data = "0xE47052f9aBbA29Bd7F061e1D910139827a0595CD";
      const providers = new ethers.providers.Web3Provider(window.ethereum);
      const signer = providers.getSigner();
      const contract = new ethers.Contract(data, ContractABI, signer);

      const CheckSales = async () => {
            const Sales = await contract.CheckPublicsale();
            // console.log("Public Sales Are: ", Sales)
            setCheckSale(Sales);
            // console.log(CheckSale);

      }

      const CheckOwner = async () => {
            const Owner = await contract.owner();
            setchekowner(Owner)
            // console.log("Owner of the Contract", Owner)
      }

      // const BaseUrl = async () => {
      //       const baseUrl = await contract.BaseUrl();
      //       setBaseURI(baseUrl)
      //       // console.log("Owner of the Contract", baseUrl)
      // }
      const TokenNAme = async () => {
            const name = await contract.name();
            settokenName(name)
            // console.log("Owner of the Contract", baseUrl)
      }
      const TokenSyamble = async () => {
            const syamble = await contract.symbol();
            settokensyamble(syamble)
            // console.log("Owner of the Contract", baseUrl)
      }
      const MaxLimit = async () => {
            const max_limit = await contract.MAX_SUPPLY();
            setmaxlimit( max_limit)
            // console.log("Owner of the Contract", baseUrl)
      }

      const AdminLimit = async () => {
            const admin_limit = await contract.WhiteAdmainMint();
            setadminlimit( admin_limit)
            // console.log("Owner of the Contract", baseUrl)
      }

      
      const WhiteUserLimit = async () => {
            const whiteuser_limit = await contract.whiteUserLimit();
            setwhiteuserlimit(whiteuser_limit )
            // console.log("Owner of the Contract", baseUrl)
      }

      const PublicLimit = async () => {
            const public_limit = await contract.publicLimit();
            setpubliclimit(public_limit )
            // console.log("Owner of the Contract", baseUrl)
      }


     
      async function DeActivePubSales() {
            if (typeof window.ethereum !== "undefined") {
                  try {
                        const sendTX = await contract.unActicePublic();
                        setdeActivePub("wait...");
                        await sendTX.wait();
                        console.log(sendTX);
                        setdeActivePub("DeActivated");
                  } catch {
                        alert("Just Owner can call")
                  }
            }

            else {
                  return ("Account Error")
            }
      }
      async function ActivePubSales() {
            if (typeof window.ethereum !== "undefined") {
                  try {
                        const sendTX = await contract.acticePublic();
                        setActivePub("wait...");
                        await sendTX.wait();
                        console.log(sendTX);
                        setActivePub("Activated");
                  } catch {
                        alert("Just Owner can call")
                  }
            }

            else {
                  return ("failed")
            }
      }

      async function Pause() {
            if (typeof window.ethereum !== "undefined") {
                  try {
                        const sendTX = await contract.pause();
                        setcheckPaused("wait...");
                        await sendTX.wait();
                        console.log(sendTX);
                        setcheckPaused("Pause");
                  } catch {
                        alert("Just Owner can call")
                  }
            }

            else {
                  return ("Error")
            }
      }


      async function UnPause() {
            if (typeof window.ethereum !== "undefined") {
                  try {
                        const sendTX = await contract.unpause();
                        setunPaused("wait...");
                        await sendTX.wait();
                        console.log(sendTX);
                        setunPaused("UnPause");
                  } catch {
                        alert("Just Owner can call")
                  }
            }

            else {
                  return ("Error")
            }
      }

      // const chainChanged = () => {
      //       setCheckSale(undefined);

      // };


      return (
            <>
                  <div className='container'>

                        <div className="section-title">
                              {/* <h2>Courses</h2> */}
                              <p>All Buttons</p>
                        </div>

                        <div className="row justify-content-center  g-4 ">

                              <div className="pt-1 col">
                                    <button className="btn btn-outline-success" type="button" onClick={ActivePubSales} >ActivePsales</button>
                                     <p className='text-warning'>{ActivePub.toString()}</p>
                              </div>
                              <div className="pt-1 col">
                                    <button className="btn btn-outline-success" type="button" onClick={DeActivePubSales} >DactivePsale</button>
                                    <p className='text-warning'>{deActivePub.toString()}</p>
                              </div>
                              <div className="pt-1 col">
                                    <button className="btn btn-outline-success" type="button" onClick={CheckSales}>CheckPsales</button>
                                    <p className='text-warning'>{CheckSale.toString()}</p>
                              </div>
                              <div className="pt-1 col">
                                    <button className="btn btn-outline-success" type="button" onClick={Pause}>Pause</button>
                                    <p className='text-warning'>{checkPaused.toString()}</p>
                                    
                              </div>
                              <div className="pt-1 col">
                                    <button className="btn btn-outline-success" type="button" onClick={UnPause}>UnPause</button>
                                    <p className='text-warning'>{unPaused.toString()}</p>

                              </div>

                              {/* <div className="pt-1 col">
                                    <button className="btn btn-outline-success" type="button" >CheckPause</button>
                              </div> */}

                              {/* <div className="pt-1 col">
                                    <button className="btn btn-outline-success" type="button" onClick={BaseUrl} >BaseURI</button>
                                 
                              </div> */}

                              <div className="pt-1 col">
                                    <button className="btn btn-outline-success" type="button" onClick={TokenNAme} >Tname</button>
                                    <p className='text-warning'>{tokenName.toString()}</p>
                                    
                              </div>

                              <div className="pt-1 col">
                                    <button className="btn btn-outline-success" type="button" onClick={TokenSyamble}>Tsymble</button>
                                    <p className='text-warning'>{tokensyamble.toString()}</p>
                              </div>

                              <div className="pt-1 col">
                                    <button className="btn btn-outline-success" type="button" onClick={CheckOwner} >Owner</button>
                                    <p className='text-warning'>{chekowner.toString()}</p>

                              </div>

                              <div className="pt-1 col" >
                                    <button className="btn btn-outline-success" type="button" onClick={MaxLimit} >MaxLimit</button>
                                    <p className='text-warning'>{maxlimit.toString()}</p>

                              </div>

                              <div className="pt-1 col">
                                    <button className="btn btn-outline-success" type="button" onClick={AdminLimit}>AdminLimit</button>
                                    <p className='text-warning'>{adminlimit.toString()}</p>
                              </div>

                              <div className="pt-1 col">
                                    <button className="btn btn-outline-success" type="button" onClick={WhiteUserLimit} >WuserLimit</button>
                                    <p className='text-warning'>{whiteuserlimit.toString()}</p>
                                    
                              </div>
                              <div className="pt-1 col">
                                    <button className="btn btn-outline-success" type="button" onClick={PublicLimit}>PublicLimit</button>
                                    <p className='text-warning'>{publiclimit.toString()}</p>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Button