import { useState, useEffect } from "react";
import { MENU_API } from "./constant";

const useGetMenu = (resID) => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(MENU_API + resID);
    data = await data.json();
    setMenu(data);
  };

  return menu;
};

export default useGetMenu;
