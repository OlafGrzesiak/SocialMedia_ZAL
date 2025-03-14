import { useState, useEffect } from "react";

const PhotoSearch = () => {
  const [photoId, setPhotoId] = useState("");
  const [albumId, setAlbumId] = useState("");
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await res.json();
        setPhotos(data);
      } catch (error) {
        console.error("Błąd pobierania zdjęć:", error);
      }
    };

    fetchPhotos();
  }, []);

  useEffect(() => {
    let results = photos;

    if (photoId) {
      results = results.filter((photo) => photo.id === parseInt(photoId));
    }
    if (albumId) {
      results = results.filter((photo) => photo.albumId === parseInt(albumId));
    }

    setFilteredPhotos(results);
  }, [photoId, albumId, photos]);

  return (
    <div>
      <h3>Wyszukaj zdjęcie</h3>
      <input
        type="number"
        placeholder="ID zdjęcia"
        value={photoId}
        onChange={(e) => setPhotoId(e.target.value)}
      />
      <input
        type="number"
        placeholder="ID albumu"
        value={albumId}
        onChange={(e) => setAlbumId(e.target.value)}
      />
      <div className="photo-grid">
        {filteredPhotos.map((photo) => (
          <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
        ))}
      </div>
    </div>
  );
};

export default PhotoSearch;
