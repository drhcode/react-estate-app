import "./homePage.scss";
import SearchBar from "../../components/searchBar/SearchBar";

const Homepage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate $ get your dream place </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            rerum ea amet delectus. Delectus eaque quam totam iste earum
            aspernatur, natus inventore reiciendis incidunt debitis quos atque
            quod, cum nostrum.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Properties</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="homepage" />
      </div>
    </div>
  );
};

export default Homepage;
