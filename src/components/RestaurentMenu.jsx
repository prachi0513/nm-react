import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constant";
import useGetMenu from "../../utils/useGetMenu";
import RestaurentMenuListItem from "./RestaurentMenuListItem";

function RestaurentMenu() {
  const { resId } = useParams();
  const menu = useGetMenu(resId);

  if (menu.length === 0) {
    return <div> loading----</div>;
  }

  const { name, costForTwoMessage } = menu.data.cards[2].card.card.info;
  const { cards } = menu.data.cards[4].groupedCard.cardGroupMap.REGULAR;
  // console.log(cards);

  const menuListItem = cards.filter((card) => {
    // Return true if the card type matches either of the two types
    return (
      card.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ||
      card.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  //console.log("menu list", menuListItem);

  return (
    <div className="w-1/2 m-auto ">
      <h1 className="text-center">
        <span className="text-lg font-bold m-2"> {name}</span>
        <span className="text-lg font-bold m-2 text-teal-950">
          :- {costForTwoMessage}
        </span>
      </h1>

      {menuListItem.map((card, index) => {
        return (
          <div key={index} className="text-center mt-6">
            <div className="flex justify-between my-8 cursor-pointer">
              <h1 className="text-left text-2xl font-bold">
                {card.card.card.title}
              </h1>
            </div>

            <div key={index}>
              {card.card.card.categories
                ? card.card.card.categories.map((item) => {
                    return (
                      <RestaurentMenuListItem item={item} key={item.title} />
                    );
                  })
                : card.card.card.itemCards.map((item) => {
                    return (
                      <RestaurentMenuListItem item={item} key={item.title} />
                    );
                  })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RestaurentMenu;
