import "./filter.scss";
const Filter = () => {
  return (
    <div className="filter">
      <h1>
        Search Results for <b>London</b>
      </h1>

      {/* Top Content  */}
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
      </div>

      {/* Bottom Content  */}
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select id="type" name="type">
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select id="property" name="property">
            <option value="">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
            <option value="shop">Shop</option>
            <option value="office">Office</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="Any"
          />
        </div>
        <div className="item">
          <label htmlFor="max Price">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="Any"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type="number" id="bedroom" name="bedroom" placeholder="Any" />
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
