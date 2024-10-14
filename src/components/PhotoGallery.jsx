import React from "react";

const PhotoGallery = ({ photos }) => {
  return (
    <div style={galleryStyle}>
      {photos.length > 0 ? (
        photos.map((photo) => (
          <div key={photo.id} style={photoItemStyle}>
            <img src={photo.urls.small} alt={photo.alt_description} style={photoStyle} />
            <p>{photo.alt_description || "Untitled"}</p>
          </div>
        ))
      ) : (
        <p>No photos found!</p>
      )}
    </div>
  );
};

const galleryStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "center",
};

const photoItemStyle = {
  textAlign: "center",
};

const photoStyle = {
  width: "150px",
  height: "150px",
  objectFit: "cover",
  borderRadius: "10px",
};

export default PhotoGallery;
