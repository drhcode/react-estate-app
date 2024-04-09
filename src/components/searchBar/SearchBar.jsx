import "./searchBar.scss";
import { useState } from "react";

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    min: 0,
    max: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type.id}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>

      <form action="">
        <input type="text" name="location" placeholder="Location" />
        <input
          type="number"
          min={0}
          max={100000000}
          name="minPrice"
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={100000000}
          placeholder="Max Price"
        />

        <button>
          <img src="./search.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
