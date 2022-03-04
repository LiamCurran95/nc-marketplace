import { useState } from "react";
import { userContext } from "../context/UserContext";

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
        <div></div>
        <h1 className="logo">NC Marketplace</h1>
        <div className="userInfo">
          <img src={user.avatar_url} className="avatar" alt={user.username} />
          <span className="username">{user.username}</span>
        </div>
      </header>
    </userContext.Provider>
  );
};

export default Header;
