import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Detail from "./detail";
import { writeData, uploadFile } from "./dbOperation";

function UploadData() {
  const [imageUpload, setImageUpload] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState(null);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);
  const shop_data = {
    name: name,
    price: price,
    color: color,
    size: size,
    description: description,
    img: imageUrl,
  };

  useEffect(() => {
    if (imageUrl) {
      writeData(shop_data);
    }
  }, [imageUrl]);

  return (
    <div className="App">
      <div className="container-fluid py-5">
        <div className="row justify-content-around align-items-center">
          <div className="col-md-5 col-lg-5 col-xl-5 card">
            <form className="card-body">
              <Detail label="Name" type="text" accept="" set={setName}></Detail>
              <Detail
                label="Price"
                type="number"
                accept=""
                set={setPrice}
              ></Detail>
              <Detail
                label="Description"
                type="text"
                accept=""
                set={setDescription}
              ></Detail>
              <Detail
                label="Size"
                type="number"
                accept=""
                set={setSize}
              ></Detail>
              <Detail
                label="Color"
                type="text"
                accept=""
                set={setColor}
              ></Detail>
              <Detail
                label="Image"
                type="file"
                accept="image/jpg, image/jpeg"
                set={setImageUpload}
              ></Detail>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                onClick={async (e) => {
                  await uploadFile(e, imageUpload, setImageUrl);
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadData;
