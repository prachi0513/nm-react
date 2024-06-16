import { CONST_IMG_URL } from "../../utils/constant";

const RestaurentCard = ({ resData }) => {
  const { name, costForTwo, avgRating, cloudinaryImageId } = resData.info;
  return (
    <div className="res-card">
      <img className="res-img" src={CONST_IMG_URL + cloudinaryImageId} />
      <p>{name}</p>
      <p>{costForTwo}</p>
      <p>{avgRating}</p>
    </div>
  );
};

export default RestaurentCard;
