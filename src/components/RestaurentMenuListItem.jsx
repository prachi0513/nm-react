import React from "react";
import { useState } from "react";
import { CONST_IMG_URL } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

function RestaurentMenuListItem({ item }) {
  const [showSubMenu, setSubMenu] = useState(false);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // console.log(item);
    dispatch(addItem(item));
  };
  return (
    <div>
      <div>
        {item.title ? (
          <div>
            <div
              className="flex justify-between border-b py-6 cursor-pointer"
              onClick={() => {
                setSubMenu(!showSubMenu);
              }}
            >
              <h1 className="text-lg font-bold">{item.title}</h1>
              <h1>{"⬇️"}</h1>
            </div>

            {showSubMenu &&
              item.itemCards.map((item) => {
                return (
                  <div key={item.card.info.id} className="text-left">
                    <div className="border-b-2 flex w-full justify-between">
                      <div className="w-11/12">
                        <h1 className="text-gray-700 text-lg font-bold">
                          {item.card.info.name}
                        </h1>
                        <h1 className="font-bold">
                          ₹
                          {item.card.info.price
                            ? item.card.info.price / 100
                            : item.card.info.defaultPrice / 100}
                        </h1>
                        <p>{item.card.info.description}</p>
                      </div>
                      <div className="flex">
                        <img
                          src={CONST_IMG_URL + item.card.info.imageId}
                          className="w-20 h-28 rounded-sm m-2"
                        />
                        <button
                          className="absolute bg-black text-white font-bold mt-2 ml-2 rounded-md"
                          onClick={() => handleAddItem(item)}
                        >
                          Add +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <div>
            <div key={item.card.info.id} className="text-left">
              <div className="border-b-2 flex w-full justify-between">
                <div className="w-11/12">
                  <h1 className="text-gray-700 text-lg font-bold">
                    {item.card.info.name}
                  </h1>
                  <h1 className="font-bold">
                    ₹
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </h1>
                  <p>{item.card.info.description}</p>
                </div>
                <div className="">
                  <img
                    src={CONST_IMG_URL + item.card.info.imageId}
                    className="w-28 h-28 m-2 border rounded-md"
                  />
                  <button
                    className="absolute bg-black text-white font-bold mt-2 ml-2 rounded-md"
                    onClick={() => handleAddItem(item)}
                  >
                    Add +
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RestaurentMenuListItem;
