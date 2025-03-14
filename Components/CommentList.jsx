import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import CommentForm from "./CommentForm";

const CommentList = ({ postId }) => {
  const { user } = useAuth();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        const data = await res.json();
        setComments(data);
      } catch (error) {
        console.error("Błąd pobierania komentarzy:", error);
      }
    };

    fetchComments();
  }, [postId]);

  const handleDelete = (id) => {
    if (window.confirm("Czy na pewno chcesz usunąć komentarz?")) {
      setComments(comments.filter((comment) => comment.id !== id));
    }
  };

  return (
    <div>
      <h4>Komentarze</h4>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <p><strong>{comment.name}</strong>: {comment.body}</p>
          {user?.username === comment.email && (
            <button onClick={() => handleDelete(comment.id)}>Usuń</button>
          )}
        </div>
      ))}
      <CommentForm postId={postId} setComments={setComments} />
    </div>
  );
};

export default CommentList;
