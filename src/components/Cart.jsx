import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  const [total, setTotal] = useState(0);
  const priceArray = [];

  if (cartItems.length === 0) {
    return <h1 className="text-center mt-10">Add item to cart !!!</h1>;
  }

  useEffect(() => {
    calculatePrice();
  }, [cartItems]);

  const priceArr = cartItems.map((item) => {
    return item.card.info.price
      ? priceArray.push(item.card.info.price)
      : priceArray.push(item.card.info.defaultPrice);
  });

  const calculatePrice = () => {
    const ans = priceArray.reduce((acc, item) => {
      return acc + item;
    });
    setTotal(ans);
  };

  return (
    <div className="w-full">
      <h1 className="text-center font-bold m-6">User cart</h1>
      <div className="flex flex-col  bg-gray-200 rounded-md w-4/6 justify-center mx-auto">
        {cartItems.map((item) => {
          return (
            <div key={item.card.info.name} className="bg-yellow-100 m-2">
              <div className="flex justify-between mx-2">
                <h1>{item.card.info.name}</h1>
                <h1 className="font-bold">
                  Rs.
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-gray-200 flex justify-between rounded-md w-4/6 mt-2  mx-auto">
        <h1 className="m-2">Your Total:</h1>
        <h1 className="m-2 font-bold">Rs.{total / 100}</h1>
      </div>
    </div>
  );
};
export default Cart;
