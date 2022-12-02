import "bootstrap/dist/css/bootstrap.min.css"
function Detail(props){
return(
    <div className="form-outline mb-4">
    <label className="form-label">{props.label}</label>
    <input className="form-control form-control-lg shadow-sm" type={props.type} accept={props.accept} onChange={(e) =>{
        if(props.type == "text" | props.type == "number"){
            props.set(e.target.value)
        }
        else{
            props.set(e.target.files[0])
        }
    }}/>
</div>
)
}

export default Detail;