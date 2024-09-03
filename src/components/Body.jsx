import React, { useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
import { SWIGGY_API } from "../../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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
      console.error("Error fetching data:", error);
    }
  };

  // TODO: We will add shimmer UI Here
  if (resList.length === 0) {
    return <h1>Loading------</h1>;
  }

  return (
    <div>
      <div className="search-container">
        <input
          value={searchInput}
          name="search"
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button
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
      <div className="filter-btn">
        <button
          onClick={() => {
            const filterList = resList.filter((res) => res.info.avgRating > 4);
            console.log(filterList);
            setFilterRes(filterList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {filterRes.map((restaurent) => (
          <Link
            to={`/restaurent/${restaurent?.info?.id}`}
            key={restaurent?.info?.id}
          >
            <RestaurentCard resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
