import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import LoginPage from "./Pages/LoginPage";
import FeedPage from "./Pages/FeedPage";
import UserPage from "./Pages/UserPage";
import SearchPage from "./Pages/SearchPage";
import PostsPage from "./Pages/PostsPage";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/profile" element={<UserPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
