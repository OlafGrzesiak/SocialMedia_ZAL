import { useEffect, useState } from "react";
import PhotoItem from "./PhotoItem";

const PhotoList = ({ userId }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=20");
        const data = await res.json();
        setPhotos(data);
      } catch (error) {
        console.error("Błąd pobierania zdjęć:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  const filteredPhotos = userId ? photos.filter((photo) => photo.albumId === userId) : photos;

  return (
    <div>
      {loading ? <p>Ładowanie zdjęć...</p> : filteredPhotos.map((photo) => (
        <PhotoItem key={photo.id} photo={photo} setPhotos={setPhotos} />
      ))}
    </div>
  );
};

export default PhotoList;
