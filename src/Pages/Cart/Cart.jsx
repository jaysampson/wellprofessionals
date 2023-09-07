import React from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import Footer from "../Layouts/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BreadCrumb } from "../BreadCrumb/BreadCrumb";
import {
  faCircleCheck,
  faStar,
  faStarHalf,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./Cart.scss";

const Cart = () => {
  return (
    <div className="cart-page">
      <Navbar />
      <div className="cart-con">
        <div className="cart-main">
          <BreadCrumb />
          <h2>Shopping Cart</h2>
          <div className="items-cart">
            <h3>0 items in cart</h3>
            <hr />
            <div className="cart-body">
              <hr />
              <div className="cart-course">
                <img src="" alt="" />
                <div className="course-des">
                  <h4>Lorem Ipsum dolor</h4>
                  <p>
                    <span>Lorem Ipsum</span>
                    <FontAwesomeIcon icon={faCircleCheck} color="#F8C51B" />
                  </p>
                  <div className="rating-star">
                    <div className="star">
                      <FontAwesomeIcon icon={faStar} color="#F8C51B" />
                      <FontAwesomeIcon icon={faStar} color="#F8C51B" />
                      <FontAwesomeIcon icon={faStar} color="#F8C51B" />
                      <FontAwesomeIcon icon={faStar} color="#F8C51B" />
                      <FontAwesomeIcon icon={faStarHalf} color="#F8C51B" />
                    </div>
                    <span>43k Rating</span>
                  </div>
                </div>
                <h4>2,304</h4>
                <FontAwesomeIcon icon={faTrash} />
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div className="totals">
          <div className="totals-con">
            <h1>Subtotal</h1>
            <hr />
            <h3>9,947</h3>
            <hr />
            <button className="buy-btn">Proceed to buy course</button>
            <button className="ctn-browsing">Continue Browsing Courses</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
