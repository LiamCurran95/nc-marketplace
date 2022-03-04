import { useState } from "react";
import { userContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState({
    username: "Guest",
    avatar_url:
      "https://www.croptecshow.com/wp-content/uploads/2017/04/guest-avatar-250x250px.png",
    kudos: 0,
  });

  return (
    <userContext.Provider value={{ user, setUser }}>
      <header className="Header">
        <div className="blank"></div>
        <h1 className="logo">
          <Link to="/">NC Marketplace</Link>
        </h1>

        <div className="userInfo">
          <ul>
            <li>
              <Link to="/sellitem">Sell Item</Link>
            </li>
            <li>
              <span className="username">{user.username}</span>
            </li>
            <li>
              <img
                src={user.avatar_url}
                className="avatar"
                alt={user.username}
              />
            </li>
          </ul>
        </div>
      </header>
    </userContext.Provider>
  );
};

export default Header;
