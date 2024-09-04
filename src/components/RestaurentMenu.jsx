import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constant";
import useGetMenu from "../../utils/useGetMenu";

function RestaurentMenu() {
  const { resId } = useParams();
  const menu = useGetMenu(resId);

  if (menu.length === 0) {
    return <div> loading----</div>;
  }

  const { name, costForTwoMessage } = menu.data.cards[2].card.card.info;

  const { cards } = menu.data.cards[4].groupedCard.cardGroupMap.REGULAR;

  console.log(cards);

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
