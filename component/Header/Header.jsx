import { NavLink } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../../AuthContextStore";

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header className="container">
        <div className="logo-brand">
          <NavLink to="/">
            <h1>PrepGram</h1>
          </NavLink>
        </div>

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
