import "./navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <h1>Real Estate</h1>
        </a>
        <a href="#">Home</a>
        <a href="#">Properties</a>
        <a href="#">Agents</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="right">
        <a href="#">Login</a>
        <a href="#" className="register">
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
