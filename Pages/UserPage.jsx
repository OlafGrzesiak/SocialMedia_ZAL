import UserProfile from "../Components/UserProfile";
import UserPosts from "../Components/UserPosts";
import UserPhotos from "../Components/UserPhotos";
import EditProfileForm from "../Components/EditProfileForm";

const UserPage = () => {
  return (
    <div>
      <h1>Profil użytkownika</h1>
      <UserProfile />
      <EditProfileForm />
      <UserPosts />
      <UserPhotos />
    </div>
  );
};

export default UserPage;
