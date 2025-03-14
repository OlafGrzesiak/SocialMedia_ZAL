import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import LoginPage from "./Pages/LoginPage";
import FeedPage from "./Pages/FeedPage";


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/feed" element={<h1>Feed ze zdjęciami (do zrobienia)</h1>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
