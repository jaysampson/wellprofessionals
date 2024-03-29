import React, { useEffect } from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import Footer from "../Layouts/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BreadCrumb } from "../BreadCrumb/BreadCrumb";
import {
  faCircleCheck,
  faSpinner,
  faStar,
  faStarHalf,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import "./Cart.scss";
import noimage from "../../assets/Images/noimage.png";
import { useDispatch } from "react-redux";
import { getTotal, removeFromCart } from "../../redux/addToCart/cartSlice";
import { Link } from "react-router-dom";
import { createOrder } from "../../redux/purchaseCourse/purchaseCourseSlice";
import { toast } from "react-toastify";
import { reset } from "../../redux/auth/authSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.order
  );
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const courseId = cart?.cartItems[0]?._id;
  const userId = user?.data?._id;

  const handleRemoveFromCart = (course) => {
    dispatch(removeFromCart(course));
  };
  useEffect(
    (course) => {
      if (isError) {
        toast.error(message);
      }
      if (isSuccess) {
        toast.success("Course Successfully purchased");
        cart?.cartItems.forEach((course) => {
          dispatch(removeFromCart(course));
        });
        dispatch(reset());
      }
      dispatch(getTotal());
    },
    [cart, isError, isSuccess, message, dispatch]
  );

  const purchaseCourse = (e) => {
    e.preventDefault();

    if (cart?.cartItems.length > 1) {
      toast.info("You can only purchase one course at a time");
      return;
    }

    const orderData = {
      courseId,
      userId,
    };
    dispatch(createOrder(orderData));
  };

  return (
    <div className="cart-page">
      <Navbar />
      <div className="cart-con">
        <div className="cart-main">
          <BreadCrumb />
          <h2>Shopping Cart</h2>
          <div className="items-cart">
            <h3>{cart?.cartItems?.length} items in cart</h3>
            {cart?.cartItems.length === 0 ? (
              <h3 className="empty">Cart is empty</h3>
            ) : (
              <div className="cart-body">
                {cart?.cartItems?.map((course) => (
                  <>
                    <hr />
                    <div className="cart-course" key={course._id}>
                      <div className="cart-course-left">
                        <img
                          src={course?.thumbnail?.url || noimage}
                          alt={course.thumbnail?.url}
                        />
                        <div className="course-des">
                          <h4>{course.name}</h4>
                          <p>
                            <span>David Udoh</span>
                            <FontAwesomeIcon
                              icon={faCircleCheck}
                              color="#F8C51B"
                            />
                          </p>
                          <div className="rating-star">
                            <div className="star">
                              <FontAwesomeIcon icon={faStar} color="#F8C51B" />
                              <FontAwesomeIcon icon={faStar} color="#F8C51B" />
                              <FontAwesomeIcon icon={faStar} color="#F8C51B" />
                              <FontAwesomeIcon icon={faStar} color="#F8C51B" />
                              <FontAwesomeIcon
                                icon={faStarHalf}
                                color="#F8C51B"
                              />
                            </div>
                            <span>43k Rating</span>
                          </div>
                          <h4>{`₦${course.price}`}</h4>
                        </div>
                      </div>
                      <FontAwesomeIcon
                        icon={faTrash}
                        cursor="pointer"
                        onClick={() => handleRemoveFromCart(course)}
                      />
                    </div>
                  </>
                ))}
                <hr />
              </div>
            )}
          </div>
        </div>
        <div className="totals">
          {cart?.cartItems.length === 0 ? (
            <div className="totals-con-2">
              <h2>Subtotal</h2>
              <hr />
              <h3>{`₦${cart?.cartTotalAmount}`}</h3>
              <hr />
              <Link to="/search">
                <button className="ctn-browsing">
                  Continue Browsing Courses
                </button>
              </Link>
            </div>
          ) : (
            <div className="totals-con">
              <h2>Subtotal</h2>
              <hr />
              <h3>{`₦${cart?.cartTotalAmount}`}</h3>
              <hr />
              <button className="buy-btn" onClick={purchaseCourse}>
                {isLoading ? (
                  <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                  "        Proceed to buy course"
                )}
              </button>
              <Link to="/search">
                <button className="ctn-browsing">
                  Continue Browsing Courses
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
