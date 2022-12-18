import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css"
import { useLocation } from "react-router-dom";
import TopNav from './TopNav'

const Product = () => {
    const { state } = useLocation();
    return(
        <>
        <TopNav></TopNav>
        <div className="row p-2">
            <div className="col-xl-5 col-md-6 col-sm-12">
            <div className="product-img card">
                <img src={state.img} alt="..."></img>
            </div>
            </div>
            <div className="col-xl-6 col-md-6 col-sm-12">
            <div className="about-procduct">
                <div className="product-name fs-3 fw-bold">
                    <span>{state.name}</span>
                </div>
                <div className="product-price fw-bold mb-1">
                    <span>M.R.P : ₹{state.price}</span>
                </div>
                <div className="product-desc d-flex flex-column">
                    <dl>
                        <dt>Color</dt>
                        <dd>{state.color}</dd>
                        <dt>About this item</dt>
                        <dd>{state.description}</dd>
                    </dl>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Product;