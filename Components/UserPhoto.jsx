import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";

const UserPhotos = () => {
  const { user } = useAuth();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (!user) return;

    const fetchPhotos = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${user.username.replace("user", "")}`);
        const data = await res.json();
        setPhotos(data.slice(0, 10)); // Pobieramy tylko 10 zdjęć
      } catch (error) {
        console.error("Błąd pobierania zdjęć:", error);
      }
    };

    fetchPhotos();
  }, [user]);

  return (
    <div>
      <h3>Twoje zdjęcia</h3>
      <div className="photo-grid">
        {photos.map((photo) => (
          <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
        ))}
      </div>
    </div>
  );
};

export default UserPhotos;
