import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

function Profile() {
  const { user, isLoggedIn } = useAuthStore();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl text-cyan-400 neon-glow mb-6">
        Профиль
      </h1>

      <div className="bg-gray-900 p-6 rounded-xl neon-glow w-96">
        <p className="mb-2">
          <span className="text-gray-400">Username:</span> {user.username}
        </p>

        <p className="mb-2">
          <span className="text-gray-400">Email:</span> {user.email}
        </p>

        <p>
          <span className="text-gray-400">Joined:</span> {user.joined}
        </p>
      </div>
    </div>
  );
}

export default Profile;