import React, { useEffect, useState } from "react";
import PhotoGallery from "./components/PhotoGallery";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import './styles.css';


const App = () => {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch random photos from Unsplash when the component mounts
  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    const accessKey = "h06XXRfLU7D-Ps3GmLGVPbS12xi7QDlVgylhnwmYBuw"; 
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?count=5&client_id=${accessKey}`
      );
      setPhotos(response.data);
    } catch (error) {
      console.error("Error fetching photos from Unsplash", error);
    }
  };

  // Filter photos based on search term
  const filteredPhotos = photos.filter((photo) =>
    photo.alt_description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Photo Gallery</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <PhotoGallery photos={filteredPhotos} />
    </div>
  );
};

export default App;
