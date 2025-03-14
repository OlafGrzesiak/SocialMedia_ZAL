import { useState } from "react";
import { useAuth } from "../Context/AuthContext";

const PhotoForm = ({ setPhotos }) => {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !url.trim()) return;

    const newPhoto = {
      id: Date.now(),
      title,
      url,
      thumbnailUrl: url,
      albumId: user.id, // Zakładamy, że user.id to albumId
    };

    setPhotos((prev) => [newPhoto, ...prev]);
    setTitle("");
    setUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Dodaj nowe zdjęcie</h3>
      <input
        type="text"
        placeholder="Tytuł"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="URL zdjęcia"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit">Dodaj zdjęcie</button>
    </form>
  );
};

export default PhotoForm;
