import React, { useContext, useEffect } from "react";
import RestaurentCard, { withOpenLabel } from "./RestaurentCard";
import { SWIGGY_API } from "../../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import UseLoginContext from "../../utils/useLoginContext";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const { loggedIn } = useContext(UseLoginContext);
  const RestaurentCardWithLabel = withOpenLabel(RestaurentCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_API);
      const json = await response.json();

      setResList(
        json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterRes(
        json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      //console.error("Error fetching data:", error);
    }
  };

  // TODO: We will add shimmer UI Here
  if (resList.length === 0) {
    return <h1 className="text-center font-bold">Loading {"🔃"}</h1>;
  }

  return (
    <div className="">
      <div className="flex">
        <div className="my-4">
          <input
            className="bg-gray-200  border-cyan-950 border rounded-md mx-4"
            value={searchInput}
            name="search"
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <button
            className="bg-green-200 px-2 mx-2 rounded-md border border-green-300"
            onClick={() => {
              const filterRest = resList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchInput.toLowerCase());
              });
              setFilterRes(filterRest);
            }}
          >
            Search
          </button>
        </div>
        <div className="bg-blue-400 my-4 px-4 rounded-md border border-green-300">
          <button
            onClick={() => {
              const filterList = resList.filter(
                (res) => res.info.avgRating > 4.3
              );
              //console.log(filterList);
              setFilterRes(filterList);
            }}
          >
            Top Rated Restaurents
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filterRes.map((restaurent) => (
          <Link
            to={`/restaurent/${restaurent?.info?.id}`}
            key={restaurent?.info?.id}
          >
            {restaurent.info.isOpen ? (
              <RestaurentCardWithLabel resData={restaurent} />
            ) : (
              <RestaurentCard resData={restaurent} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
