import { useEffect, createContext, useState } from "react";

export const PhotoContext = createContext();

// eslint-disable-next-line react/prop-types
export const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const liked = photos.filter((photo) => photo.liked);
  
  useEffect(() => {
    fetch("./photos.json")
      .then((res) => res.json())
      .then(({ photos }) => {
        setPhotos(photos);
      });
  }, []);

  const toggleLike = (id) => { 
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, liked: !photo.liked };
      }
      return photo;
    });
    setPhotos(newPhotos);
  }

  return (
    <PhotoContext.Provider
      value={{
        photos,
        liked,
        toggleLike,
      }}>
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotoProvider;
