import { useState } from "react";
import { LOGO_URL } from "../../utils/constant";
import { useState } from "react";

const Header = () => {
  const [btnname, setBtnName] = useState("login");
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>contact</li>
          <li>Cart</li>
          <button
            className="btn-auth"
            onClick={() => {
              btnname == "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnname}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
