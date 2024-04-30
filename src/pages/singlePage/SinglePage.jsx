import Slider from "../../components/slider/Slider";
import Map from "./../../components/map/Map";

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
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pet are allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>30 m2</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 Bed</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 Bath</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bus.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>

          <div className="buttons">
            <button>
              <img src="/chat.png" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
