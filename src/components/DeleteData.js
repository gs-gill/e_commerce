import DeleteList from './DeleteList'
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css"
import {fetchPost} from './dbOperation'
import { useState, useEffect } from "react";

function DeleteData() {
  const [shopData, setShopData] = useState([])
  
  useEffect(() => {
    fetchPost(setShopData)
  }, [])

    return(
      <>
      <div className='container py-2'>
        <div className='row gap-3'>
          {shopData.map((detail) => <DeleteList data={detail} key={detail.id} id={detail.id}></DeleteList>)}
        </div>
      </div>
      </>
    )
  };
  
  export default DeleteData;
  