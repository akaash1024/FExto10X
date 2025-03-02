import { NavLink } from "react-router-dom";

import { useAuth } from "../../AuthContextStore";

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      
        <header className="nav-container">
          
          <NavLink to="/">
            <h1>.logN</h1>
          </NavLink>

          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </header>
      
    </>
  );
};
