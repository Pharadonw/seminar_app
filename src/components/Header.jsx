import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) {
    return null; // ไม่แสดง header ถ้าไม่ได้ login
  }

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold text-gray-900">
              My App
            </h1>
            
            <nav className="flex space-x-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                หน้าแรก
              </Link>
              <Link
                to="/persons"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                รายชื่อบุคคล
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-700">
              สวัสดี, {user.name}
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
            >
              ออกจากระบบ
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;