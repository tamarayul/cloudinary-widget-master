import { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import Config from './config/config';
import './App.css';
import CldGallery from './components/CldGallery';

function App() {

  const [imagesUploadedList, setImagesUploadedList] = useState([]);

  const onImageUploadHandler = (publicId) => {
    setImagesUploadedList(prevState => [...prevState, publicId])
  };

  const deleteAllImages = async () => {
    try {
      const responseData = await fetch(
        "http://localhost:5000/api/12-2021/photos/delete"
      );

      setImagesUploadedList([]);

    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="App">
      <button className="redButton" onClick={deleteAllImages}>Delete all images</button>
      <ImageUpload {...Config} onImageUpload={(publicId) => onImageUploadHandler(publicId)} />
      <CldGallery imagesUploaded={imagesUploadedList}  {...Config} />
    </div>
  );
}

export default App;
