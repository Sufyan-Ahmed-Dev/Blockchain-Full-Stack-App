import React, { useEffect, useState } from 'react';
import axios from "axios";

function CollectionApi() {

  // const [getData, setGetData] = useState();

  // useEffect(() => {
  //   axios.get("https://testnets-api.opensea.io/api/v1/assets?owner=0x89ABD7cF8C246f3dffD4Ad0C0a32047ceD4721C9&order_direction=desc&offset=0&limit=20&include_orders=false")
  //     .then((res) => {
  //       console.log(res.data.assets);
  //       setGetData(res.data.assets);
  //     })
  // }, [])

  const [data, setData] = useState([])

    useEffect(()=>{
        var url ="https://testnets-api.opensea.io/api/v1/assets?owner=0x89ABD7cF8C246f3dffD4Ad0C0a32047ceD4721C9&order_direction=desc&offset=0&limit=20&include_orders=false"
            axios.get(url)
            .then((item)=> {
                console.log(item.data.assets)
                setData(item.data.assets)
            })
            .catch((err)=>{
            console.log(err)
            })
    },[])

  return (
    <>
      <h1>Api calling </h1>;
      <div className="row">
        
        {
            data.map((item)=>{
                return(
                  <div className="col col-lg-4 col-sm-6 ">
                
                        <div className="card" style={{width: "20rem", border:"1px solid black"}} key={item.token_id} >
                            <img src={item.image_url} className="card-img-top" alt="Image"/>
                            <div className="card-body ">
                                <h5 className="card-title">{item.name}</h5>
                                {/* <p className="card-text">To reach out Mr. {item.login} CLick on Below Button</p>
                                <a href={item.html_url} className="btn btn-primary">GITHUB</a> */}
                            </div>
                        </div>
                        </div>
         
                )
            })
            }  
 
    </div>
      

             {/*
                  1. add card designing does not matter just take three thing ;
                  2. data is on console now just tak to console and set in card;
                 3. five cards show because it is my collection 
                 
             
             
             
             
             */}
    </>

  )
}

export default CollectionApi