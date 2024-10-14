import React from "react";

const PhotoGallery = ({ photos }) => {
  return (
    <div style={galleryStyle}>
      {photos.length > 0 ? (
        photos.map((photo) => (
          <div key={photo.id} style={photoItemStyle}>
            <img src={photo.url} alt={photo.title} style={photoStyle} />
            <p>{photo.title}</p>
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
