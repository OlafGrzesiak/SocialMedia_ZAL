import { useAuth } from "../Context/AuthContext";

const PhotoItem = ({ photo, setPhotos }) => {
  const { user } = useAuth();

  const handleDelete = () => {
    if (!user || user.username !== `user${photo.albumId}`) return;

    setPhotos((prev) => prev.filter((p) => p.id !== photo.id));
  };

  return (
    <div className="photo-item">
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <p>{photo.title}</p>
      {user && user.username === `user${photo.albumId}` && (
        <button onClick={handleDelete}>Usuń</button>
      )}
    </div>
  );
};

export default PhotoItem;
