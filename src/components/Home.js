import TopNav from './TopNav'
import CardList from './CardList'
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css"
import {fetchPost} from './dbOperation'
import { useState, useEffect } from "react";

function Home() {
  const [shopData, setShopData] = useState([])
  
  useEffect(() => {
    fetchPost(setShopData)
  }, [])

    return(
      <>
      <TopNav></TopNav>
      <div className='container py-2'>
        <div className='row gap-3'>
          {shopData.map((detail) => <CardList data={detail}></CardList>)}
        </div>
      </div>
      </>
    )
  };
  
  export default Home;
  