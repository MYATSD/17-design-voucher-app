
  
import { useNavigate } from "react-router-dom";
import { removeCookie } from "react-use-cookie";
import useUserStore from "../stores/useUserStore";

const LogoutButton = () => {
  const navigate = useNavigate();
  const {setUser} = useUserStore()
  const handleLogout = () => {
    removeCookie("my_token");
    removeCookie("user");
    setUser(" ")
    
    navigate("/");
  };
  return (
    <button
      onClick={handleLogout}
      className="text-teal-700 hover:text-white border border-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-teal-500 dark:text-teal-500 dark:hover:text-white dark:hover:bg-teal-500 dark:focus:ring-teal-800"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
