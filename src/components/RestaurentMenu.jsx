import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constant";

function RestaurentMenu() {
  const { resId } = useParams();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const jsonData = await data.json();
    console.log(jsonData);
    setMenu(jsonData);
  };

  if (menu.length === 0) {
    return <div> loading----</div>;
  }

  const { name, costForTwoMessage } = menu.data.cards[2].card.card.info;

  const { cards } = menu.data.cards[4].groupedCard.cardGroupMap.REGULAR;

  return (
    <div>
      <h1>Restaurent Menu : {name}</h1> <h1>{costForTwoMessage}</h1>
      {cards.map((card) => {
        return <div></div>;
      })}
    </div>
  );
}

export default RestaurentMenu;
