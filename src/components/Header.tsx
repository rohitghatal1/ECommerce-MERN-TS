import Navbar from "./Navbar";
import "../CSS/header.css";
import logo from "../assets/logos/freshcart.png";

const Header: React.FC = () => {
  return (
    <div>
      <section className="headerSection">
        <div className="basicInformationSection">
          <div className="basicInformation">
            <div className="singleUserNavigation">
              <span className="text-font">About Us</span>
              <span className="text-font">My account</span>
              <span className="text-font">Wishlist</span>
              <span className="text-font">Order Tracking</span>
            </div>

            <div className="securityInfo">
              <p className="text-font">
                <i className="fa-solid fa-shield-halved"></i> 100% Secure
                delivery
              </p>
            </div>

            <div className="contactInfo">
              <p className="text-font">
                Need help? Contact us: <span>98065542</span>
              </p>
            </div>
          </div>
        </div>

        <div className="logoUserCartSection">
          <div className="logoAndCountry">
            <div className="logoContainer">
              <figure className="logo">
                <img src={logo} alt="" />
              </figure>
            </div>

            <div className="filterByCountry">
              <select name="country" className="text-font">
                <option value="Nepal">Nepal</option>
                <option value="Russia">Russia</option>
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
                <option value="London">London</option>
                <option value="USA">USA</option>
              </select>
            </div>
          </div>

          <div className="searchContainer text-font">
            <input type="search" name="search" />
          </div>

          <div className="userAndCart">
            <div className="userSection">
              <span className="user">
                <i className="fa-regular fa-user"></i>
              </span>
            </div>

            <div className="cartSection">
              <span className="cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="categoryAndNavbarSection">
          <div className="categorySection">
            <button className="showCategoriesBtn">
              <i className="fa-solid fa-bars"></i> All Categories
            </button>
          </div>
          <div className="navbarSection">
            <Navbar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
