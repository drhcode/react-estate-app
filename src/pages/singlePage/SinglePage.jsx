import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../library/dummyData";

import "./singlePage.scss";

const SinglePage = () => {
  const postData = singlePostData;

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={postData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{postData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{postData.address}</span>
                </div>
                <div className="price">{postData.price}</div>
              </div>
              <div className="userInfo">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{postData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper"></div>
      </div>
    </div>
  );
};

export default SinglePage;
