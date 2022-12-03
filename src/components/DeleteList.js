import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css"
import {db, storage} from "../firebase"
import { doc, deleteDoc} from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";


const DeleteList = ({data, id}) =>{
    async function deleteFromDb(e){
        const res = window.confirm("Are you sure you want to delete this item from db?")
        if(res){
            const s_url = data.img.split('/')[7].replace('%2F', '/')
            const fileRef = ref(storage,s_url.slice(0,s_url.indexOf('?')));
            await deleteDoc(doc(db, 'shop', id)).then(
                deleteObject(fileRef).then(
                alert('Data succesfully deleted from db'))
            )
        }
    }
    return(
        <div className="col-xl-4 col-md-3 col-sm-12 px-0 card" style={{width:'18rem'}}>
        <img src={data.img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <div className="d-flex align-item-start justify-content-between">
          <div>
          <h5 className="card-title">{data.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{}</h6>
        </div>
        </div>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between px-2 fs-4">
            <button className="btn btn-danger delete-item-btn" onClick={deleteFromDb}><span><i className="bi bi-trash3-fill"></i></span></button>
          </div>
        </div>
        </div>
    )
};

export default DeleteList;