import { useContext, useState } from "react";
import { LOGO_URL } from "../../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import useLoginContext from "../../utils/useLoginContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnname, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedIn, setLoggedIn } = useContext(useLoginContext);
  const cartItem = useSelector((store) => store.cart.item);

  return (
    <div className="flex justify-center bg-gray-200">
      <div className="">
        <img className="w-42 h-32 bg-red-700" src={LOGO_URL} />
      </div>
      <div className="">
        <ul className="flex justify-between py-12">
          <li className="px-4 py-2">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-2 py-2 font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 py-2 font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 py-2 font-bold">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2 py-2 font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>

          <Link to="/cart">
            <li className="px-2 py-1 font-bold text-xl">
              Cart - [{cartItem.length}]
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
