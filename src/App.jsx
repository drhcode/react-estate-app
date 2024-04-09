import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./layout.scss";
import Homepage from "./pages/homepage/HomePage";

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Homepage />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
