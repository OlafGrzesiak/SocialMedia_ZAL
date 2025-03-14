import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";

const UserPosts = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!user) return;

    const fetchPosts = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.username.replace("user", "")}`);
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Błąd pobierania postów:", error);
      }
    };

    fetchPosts();
  }, [user]);

  return (
    <div>
      <h3>Twoje posty</h3>
      {posts.length === 0 ? <p>Brak postów</p> : posts.map((post) => (
        <div key={post.id} className="post">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
