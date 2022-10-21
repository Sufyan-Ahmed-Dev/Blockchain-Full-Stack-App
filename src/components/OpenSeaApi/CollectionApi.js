import React, { useEffect, useState } from 'react';
import axios from "axios";

function CollectionApi() {

  const [getData, setGetData] = useState();

  useEffect(() => {
    axios.get("https://testnets-api.opensea.io/api/v1/assets?owner=0x89ABD7cF8C246f3dffD4Ad0C0a32047ceD4721C9&order_direction=desc&offset=0&limit=20&include_orders=false")
      .then((res) => {
        console.log(res.data.assets);
        setGetData(res.data.assets);
      })
  }, [])

  return (
    <>
     <h1>Api calling </h1>;

             {/*
                  1. add card designing does not matter just take three thing ;
                  2. data is on console now just tak to console and set in card;
                 3. five cards show because it is my collection 
                 
             
             
             
             
             */}
    </>

  )
}

export default CollectionApi