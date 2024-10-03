import { CONST_IMG_URL } from "../../utils/constant";

const RestaurentCard = ({ resData }) => {
  //console.log(resData);

  const { name, costForTwo, avgRating, cloudinaryImageId } = resData.info;
  return (
    <div
      className="w-52 mx-4 border my-2 rounded-lg bg-gray-50 p-2 hover:bg-gray-200"
      data-testid="res-Card"
    >
      <img className="rounded-lg" src={CONST_IMG_URL + cloudinaryImageId} />
      <p>{name}</p>
      <p>{costForTwo}</p>
      <p>{avgRating}</p>
    </div>
  );
};

export const withOpenLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <h1 className="absolute font-bold ml-4 bg-black text-white rounded-lg">
          Open
        </h1>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
