import { ethers } from 'ethers';
import React from 'react'
import ContractABI from "./Contract/contractABI.json"


function Button() {

      // const [CheckSale , setCheckSale] = useState();
      // const ethPrivkey = "935a0ebd10c4babfd1cb46ffaf8d620d179db57e81a339cd09f9483e99c574ab"

      // const [checkPublicSales , setcheckPublicSales] = useState();
       const data = "0x5CFFa40F9079b9a05Ad0347D215A005B26ABE25e";   
       const providers = new ethers.providers.Web3Provider(window.ethereum);
       const signer =  providers.getSigner();
       const contract = new ethers.Contract(data , ContractABI , signer);

      const CheckSales = async()=>{
        const Sales = await contract.CheckPublicsale();
        console.log("Public Sales Are: ",Sales)
      // console.log(CheckSale)
}

     const CheckOwner = async()=>{
       const Owner = await contract.owner();
       console.log("Owner of the Contract",Owner)
}
async function DeActivePubSales(){
      if(typeof window.ethereum  !== "undefined"){        
            const sendTX = await contract.unActicePublic();
            await sendTX.wait();
            console.log(sendTX);
      }
      else{
            return("failed")
      }
}
async function ActivePubSales(){
      if(typeof window.ethereum  !== "undefined"){        
            const sendTX = await contract.acticePublic();
            await sendTX.wait();
            console.log(sendTX);
      }
      else{
            return("failed")
      }
}
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
      </div>
      <div className="pt-1 col">
            <button className="btn btn-outline-success" type="button"onClick={DeActivePubSales} >DactivePsale</button>
      </div>
      <div className="pt-1 col">
            <button className="btn btn-outline-success" type="button" onClick={CheckSales}>CheckPsales</button>
            {/* <p className='text-dark'> Value :: {CheckSale}</p> */}
      </div>
      <div className="pt-1 col">
            <button className="btn btn-outline-success" type="button" >Pause</button>
      </div>
      <div className="pt-1 col">
            <button className="btn btn-outline-success" type="button" >UnPause</button>
      </div>

      <div className="pt-1 col">
            <button className="btn btn-outline-success" type="button" >CheckPause</button>
      </div>

      <div className="pt-1 col">
            <button className="btn btn-outline-success" type="button" >BaseURI</button>
      </div>

      <div className="pt-1 col">
            <button className="btn btn-outline-success" type="button" >CheckWLsales</button>
      </div>

      <div className="pt-1 col">
            <button className="btn btn-outline-success" type="button" >Tname</button>
      </div>

      <div className="pt-1 col">
            <button className="btn btn-outline-success" type="button" >Tsymble</button>
      </div>

      <div className="pt-1 col">
            <button className="btn btn-outline-success" type="button" onClick={CheckOwner} >Owner</button>
  
      </div>

      <div className="pt-1 col" >
            <button className="btn btn-outline-success" type="button" >MaxLimit</button>
      </div>

      <div className="pt-1 col">
            <button className="btn btn-outline-success" type="button" >AdminLimit</button>
      </div>

      <div className="pt-1 col">
            <button className="btn btn-outline-success" type="button" >WuserLimit</button>
      </div>
      <div className="pt-1 col">
            <button className="btn btn-outline-success" type="button" >PublicLimit</button>
      </div>
      </div>
      </div>
      </>
  )
}

export default Button