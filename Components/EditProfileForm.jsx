import { useState } from "react";
import { useAuth } from "../Context/AuthContext";

const EditProfileForm = () => {
  const { user, login } = useAuth();
  const [newName, setNewName] = useState(user?.username || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName.trim()) return;
    
    login(newName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edytuj profil</h3>
      <input
        type="text"
        placeholder="Nowa nazwa użytkownika"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        required
      />
      <button type="submit">Zapisz</button>
    </form>
  );
};

export default EditProfileForm;
