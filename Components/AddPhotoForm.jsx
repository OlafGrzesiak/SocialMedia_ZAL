import { useState } from "react";
import { useAuth } from "../Context/AuthContext";

const AddPhotoForm = ({ setPhotos }) => {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return;

    const newPhoto = {
      id: Date.now(),
      albumId: parseInt(user.username.replace("user", ""), 10),
      title,
      thumbnailUrl: url,
    };

    setPhotos((prev) => [newPhoto, ...prev]);
    setTitle("");
    setUrl("");
  };

  return user ? (
    <form onSubmit={handleSubmit} className="add-photo-form">
      <input
        type="text"
        placeholder="Tytuł zdjęcia"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="URL miniaturki"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit">Dodaj zdjęcie</button>
    </form>
  ) : null;
};

export default AddPhotoForm;
