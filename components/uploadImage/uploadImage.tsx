import { ChangeEvent, useState } from "react";
import { uploadImage } from "../../utils/firebase/uploadImage/uploadImage";

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedImageURL, setSelectedImageURL] = useState("");

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleUpload = async () => {
    if (selectedImage) {
      try {
        const downloadURL = await uploadImage("user/", selectedImage);
        console.log("Image uploaded successfully. Download URL:", downloadURL);
        setSelectedImage(null);
        setSelectedImageURL(downloadURL);
        // Do something with the downloadURL, like saving it to Firestore or displaying the image
      } catch (error) {
        // Handle error
      }
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={handleUpload}>Upload Image</button>
      {selectedImageURL && <p>url of Uploaded Image {selectedImageURL}</p>}
    </div>
  );
};

export default UploadImage;
