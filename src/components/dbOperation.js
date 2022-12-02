import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { storage, db } from "../firebase";

async function uploadData(data){

try {
  const docRef = await addDoc(collection(db, "shop"),data);

  console.log("Document written with ID: ", docRef.id);
  console.log("json data", data)
  window.location.reload();
} catch (e) {
  console.error("Error adding document: ", e);
}
};


async function uploadFile(e, imageUpload, setImageUrl) {
if (imageUpload == null) return;
e.preventDefault();
const imageRef = ref(storage, `images/${imageUpload.name}`);
await uploadBytes(imageRef, imageUpload).then((snapshot) => {
  getDownloadURL(snapshot.ref).then((url) => {
    setImageUrl(url);
  });
});
};

async function fetchPost(setShopData){
await getDocs(collection(db, "shop")).then((querySnapshot) => {
  const newData = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log("data from db", newData);
  setShopData(newData)
});
};

export {uploadData, fetchPost, uploadFile}