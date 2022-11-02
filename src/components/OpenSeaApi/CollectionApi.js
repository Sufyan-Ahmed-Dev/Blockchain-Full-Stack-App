import React, { useEffect, useState } from "react";
import axios from "axios";

function CollectionApi() {
  const [account, setAccount] = useState("");
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    var url = `https://testnets-api.opensea.io/api/v1/assets?owner=${account}&order_direction=desc&offset=0&limit=20&include_orders=false`;

    axios
      .get(url)
      .then((item) => {
      
        if (item.data.assets.length === 0) {
          console.log("data is Null");
          setErr("This Account Have No NFT");
        }
        else {
          console.log(item.data.assets);
          console.log("Data Recieved");
          setData(item.data.assets);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [account]);


    const connectMetamask = async () => {
      if (!window.ethereum) {
        setErr("Install Metamask")
      }
      else {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(account[0]);
      }
    };
  

  return (
    <>
      {/* <h1>Api calling </h1>; */}
      <button className="btn btn-success" onClick={connectMetamask}>
        Check NFT
      </button>
      <div className=" container row">
        <p>{err}</p>

        {data.map((item) => {
          return (
            <div className=" col-lg-4 col-md-6 col-sm-12  my-5">
              {/* style={{width: "20rem", border:"1px solid black"}}  */}
              <div className="card" key={item.id}>
                <img
                  src={item.image_url}
                  className="card-img-top  border-bottom border-dark"
                  style={{ height: "300px" }}
                  alt="Image"
                />
                <div className="card-body ">
                  <div className="card-title border border-dark border border-dark">
                    <p>{item.name}</p>
                    <p>{item.id}</p>
                    <span>Created-Date</span><p>{ item.asset_contract.created_date}</p>
                  </div>
                 

                  {/* <p className="card-text">To reach out Mr. {item.login} CLick on Below Button</p>
                                <a href={item.html_url} className="btn btn-primary">GITHUB</a> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/*
                  1. add card designing does not matter just take three thing ;
                  2. data is on console now just tak to console and set in card;
                 3. five cards show because it is my collection 
                 
             
             
             
             
             */}
    </>
  );
}

export default CollectionApi;
