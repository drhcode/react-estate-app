import "./profile.scss";
import Listings from "./../../components/listings/Listings";
import Chat from "../../components/chat/Chat";

const Profile = () => {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:{" "}
              <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </span>
            <span>
              Username: <b>John Do</b>
            </span>

            <span>
              Email: <b>john@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Add New Listing</button>
          </div>
          <Listings />
          <div className="title">
            <h1>Saved Listings</h1>
          </div>
          <Listings />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Profile;
