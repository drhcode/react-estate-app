import "./listings.scss";
import { listData } from "../../library/dummyData";
import Card from "../card/Card";

const Listings = () => {
  return (
    <div className="listings">
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Listings;
