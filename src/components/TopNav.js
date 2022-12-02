import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css"
import "bootstrap-icons/font/bootstrap-icons.css"
const TopNav = () => {
    return (
  
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">R.K Fashion</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav_right">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" collapse navbar-collapse flex-row-reverse fs-4 justify-content-between align-item-center" id="nav_right">
            <ul className="navbar-nav gap-3">
                <li className="nav-item">
                    <div className="input-group">
                        <input type="text" placeholder="Search..."/>
                        <button className="btn btn-outline-secondary"><i className="bi bi-search"></i></button>
                    </div>
                </li>
                <li className="nav-item"><i className="bi bi-telephone-forward"></i></li>
                <li className="nav-item">+91-9882211012</li>
            </ul>
        </div>
    </div>
    </nav>
    )
  };
  
  export default TopNav;