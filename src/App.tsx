import { Routes, Route, Navigate } from "react-router-dom";
import UserProvider from "./hooks/UserContext"; // Make sure this provider wraps your entire application
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ConfirmationScreen from "./pages/ConfirmationScreen";
import SinglePlayer from "./pages/SinglePlayer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firebase"; 

const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected routes */}
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/" />}
        />
        <Route
          path="/user"
          element={user ? <ConfirmationScreen /> : <Navigate to="/" />}
        />
        <Route
          path="/singleplayer"
          element={user ? <SinglePlayer /> : <Navigate to="/" />}
        />
      </Routes>
    </UserProvider>
  );
};

export default App;
