import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const authorizationToken = `Bearer ${token}`;

  // const API = "http://localhost:3000"
  const API = import.meta.env.VITE_SERVER_URL;
  
  

  const api = axios.create({
    baseURL: API,
    headers: { "Content-Type": "application/json" },
  });

  let isLoggedIn = !!token;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  const userAuthentication = async () => {
    try {
      setIsLoading(true);

      const { data } = await api.get("/api/auth/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(data.data);
    } catch (error) {
      console.error("Error fetching user data", error);
      setUser(null);
      setToken("");
      localStorage.removeItem("token");
    } finally {
      setIsLoading(false);
    }
  };

  // Logout functionality
  const LogoutUser = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
  };

  
  const getPosts = async () => {
    try {
      const { data } = await api.get("/api/post");
      setPosts(data.posts);
    } catch (error) {
      console.error(`Books frontend error: ${error}`);
    }
  };

  // Authentication effect
  useEffect(() => {
    if (token) {
      userAuthentication();
    }
    getPosts();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        api,
        storeTokenInLS,
        isLoggedIn,
        LogoutUser,
        user,
        isLoading,
        API,
        authorizationToken,
        token,
        posts,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
