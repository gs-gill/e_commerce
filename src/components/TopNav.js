import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
const TopNav = () => {
    return (
  
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">R.K Fashion</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav_right">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" collapse navbar-collapse flex-row-reverse fs-4 justify-content-between align-item-center" id="nav_right">
            <div className="navbar-nav gap-3 pt-3 d-flex flex-row">
                    <div className="nav-item"><i className="bi bi-telephone-forward"></i></div> <div> +91-9378335365 </div>
            </div>
        </div>
    </div>
    </nav>
    )
  };
  
  export default TopNav;