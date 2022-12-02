import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css"
const CardList = ({data}) =>{
    return(
        <div className="col-xl-4 col-md-3 col-sm-12 px-0 card" style={{width:'18rem'}}>
        <img src={data.img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <div className="d-flex align-item-start justify-content-between">
          <div>
          <h5 className="card-title">{data.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{}</h6>
        </div>
          <span>${data.price}</span>
        </div>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between px-2 fs-4">
            <span><i className="bi bi-heart"></i></span>
            <span><i className="bi bi-cart3"></i></span>
          </div>
        </div>
        </div>
    )
};

export default CardList;