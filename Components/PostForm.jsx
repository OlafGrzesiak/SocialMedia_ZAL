import { useState } from "react";
import { useAuth } from "../Context/AuthContext";

const PostForm = ({ setPosts }) => {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;

    const newPost = {
      id: Date.now(),
      title,
      body,
      userId: user.id,
    };

    setPosts((prev) => [newPost, ...prev]);
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Dodaj nowy post</h3>
      <input
        type="text"
        placeholder="Tytuł"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Treść posta..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button type="submit">Dodaj post</button>
    </form>
  );
};

export default PostForm;
