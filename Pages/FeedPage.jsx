import { useState } from "react";
import PhotoList from "../Components/PhotoList";
import AddPhotoForm from "../Components/AddPhotoForm";
import { useAuth } from "../Context/AuthContext";

const FeedPage = () => {
  const { user } = useAuth();
  const [filterUserId, setFilterUserId] = useState("");

  return (
    <div>
      <h1>Feed ze zdjęciami</h1>
      {user && <AddPhotoForm />}
      
      <input
        type="number"
        placeholder="Filtruj po użytkowniku (albumId)"
        value={filterUserId}
        onChange={(e) => setFilterUserId(e.target.value)}
      />
      
      <PhotoList userId={filterUserId ? parseInt(filterUserId, 10) : null} />
    </div>
  );
};

export default FeedPage;
