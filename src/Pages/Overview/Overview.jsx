import React from "react";
import "../Overview/Overview.scss";
import Footer from "../Layouts/Footer/Footer";
import Navbar from "../Layouts/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCheck,
  faStar,
  faArrowUpRightFromSquare,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import ladies from "../../assets/Images/doings.svg";
import pro from "../../assets/Images/Pro.svg";
import star from "../../assets/Icons/Star.svg";
import halfstar from "../../assets/Icons/Half-star.svg";
import emptystar from "../../assets/Icons/emptystar.svg";
import { BreadCrumb } from "../BreadCrumb/BreadCrumb";

const Overview = () => {
  return (
    <div>
      <Navbar />
      <div className="overview">
        <div className="overview-con">
          <div className="overview-top">
            <BreadCrumb />
          </div>
          <div className="overview-body">
            <div className="left-con">
              <header>
                <p>Lorem ipsum dolor sit</p>
                <h1>Lorem ipsum dolor: sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h1>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                </span>
              </header>
              <div className="taught-by">
                <h2>TAUGHT BY</h2>
                <div className="teacher">
                  <img src="" alt="" />
                  <div className="name-desc">
                    <p>David Udoh</p>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="expectation">
                <div className="expect-top">
                  <h2>What you’ll learn</h2>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
                <div className="learnt">
                  <p>
                    <FontAwesomeIcon icon={faCheck} />
                    <span>Lorem ipsum dolor sit amet, consectetur</span>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCheck} />
                    <span>Lorem ipsum dolor sit amet, consectetur</span>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCheck} />
                    <span>Lorem ipsum dolor sit amet, consectetur</span>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCheck} />
                    <span>Lorem ipsum dolor sit amet, consectetur</span>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCheck} />
                    <span>Lorem ipsum dolor sit amet, consectetur</span>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCheck} />
                    <span>Lorem ipsum dolor sit amet, consectetur</span>
                  </p>
                </div>
              </div>
              <hr />
              <div className="overview-lesson">
                <div className="class-overview">
                  <title>
                    <p>CLASS OVERVIEW</p>
                    <h3>Learn all of Lorem ipsum dolor sit amet, consectetur</h3>
                  </title>
                  <div className="classov-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className="lesson-videos">
                  <p>LESSONS</p>
                  <div className="videos">
                    <div className="vid">
                      <img src="" alt="" />
                      <p>1. Lorem Ipsum</p>
                    </div>
                    <div className="vid">
                      <img src="" alt="" />
                      <p>2. Lorem Ipsum</p>
                    </div>
                    <div className="vid">
                      <img src="" alt="" />
                      <p>3. Lorem Ipsum</p>
                    </div>
                    <div className="vid">
                      <img src="" alt="" />
                      <p>4. Lorem Ipsum</p>
                    </div>
                    <div className="vid">
                      <img src="" alt="" />
                      <p>5. Lorem Ipsum</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="for-who">
                <h3>Who’s this class for?</h3>
                <div className="write-up">
                  <div className="persons">
                    <p>1</p>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </span>
                  </div>
                  <div className="persons">
                    <p>2</p>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </span>
                  </div>
                  <div className="persons">
                    <p>3</p>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="course-reviews">
                <title>
                  <FontAwesomeIcon icon={faStar} color="#AF5E41" />
                  <p>4.91 (642 reviews)</p>
                </title>
                <div className="review-con">
                  <div className="review">
                    <div className="reviewer">
                      <img src="" alt="" />
                      <p>Andrea Udoh</p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua
                    </p>
                  </div>
                  <div className="review">
                    <div className="reviewer">
                      <img src="" alt="" />
                      <p>Andrea Udoh</p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua
                    </p>
                  </div>
                  <div className="review">
                    <div className="reviewer">
                      <img src="" alt="" />
                      <p>Andrea Udoh</p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua
                    </p>
                  </div>
                  <div className="review">
                    <div className="reviewer">
                      <img src="" alt="" />
                      <p>Andrea Udoh</p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua
                    </p>
                  </div>
                  <div className="review">
                    <div className="reviewer">
                      <img src="" alt="" />
                      <p>Andrea Udoh</p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua
                    </p>
                  </div>
                  <div className="review">
                    <div className="reviewer">
                      <img src="" alt="" />
                      <p>Andrea Udoh</p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua
                    </p>
                  </div>
                </div>
                <button>View more reviews</button>
              </div>
            </div>
            <div className="right-con">
              <div className="box">
                <div className="box-top">
                  <img src="" alt="" />
                  <h4>Lorem ipsum dolor: sit amet, consectetur adipiscing elit, sed do</h4>
                  <div className="price">
                    <p>₦2,549.99</p>
                    <div className="slice">₦4,449.99</div>
                  </div>
                  <div className="purchase">
                    <button className="add"> Buy now</button>
                    <button className="buy">
                      <span>Add to cart</span>
                      <FontAwesomeIcon icon={faCartShopping} className="cart" size="2x" />
                    </button>
                  </div>
                  <div className="offer">
                    <p>Offer ends in </p>
                    <span>9d 8h 0m 54s</span>
                  </div>
                </div>
                <hr />
                <div className="box-bottom">
                  <p>WHAT'S INCLUDED:</p>
                  <div className="included">
                    <div className="items">
                      <img src="" alt="" />
                      <p>In-depth video lessons (8h 54m)</p>
                    </div>
                    <div className="items">
                      <img src="" alt="" />
                      <p>Step-by-step curriculum</p>
                    </div>
                    <div className="items">
                      <img src="" alt="" />
                      <p>Online and at your own pace</p>
                    </div>
                    <div className="items">
                      <img src="" alt="" />
                      <p>Watch on all devices</p>
                    </div>
                    <div className="items">
                      <img src="" alt="" />
                      <p>Unlimited lifetime access</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="recommend">
            <h3>Topics based on your picks</h3>
            <div className="courses">
              <div className="course-con">
                <img src={ladies} alt={ladies} />
                <div className="content">
                  <div className="admin">
                    <div className="admin-title">
                      <img src={pro} alt={pro} />
                      <p>Michael Jordan</p>
                    </div>
                    <p className="check">
                      <FontAwesomeIcon icon={faCheck} color="#000" size="2xs" />
                    </p>
                  </div>
                  <div className="course-name">
                    <h2>Creative Engineering: Lorem ipsum dolor sit amet, consectetur</h2>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#000" />
                  </div>
                  <div className="desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="rating">
                    <div className="star">
                      <img src={star} alt={star} />
                      <img src={star} alt={star} />
                      <img src={star} alt={star} />
                      <img src={halfstar} alt={halfstar} />
                      <img src={emptystar} alt={emptystar} />
                    </div>
                    <div className="rated">
                      <p>43k Ratings</p>
                    </div>
                  </div>
                  <div className="price-add">
                    <div className="price">
                      <p>₦2,549.99</p>
                      <div className="slice">₦4,449.99</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-con">
                <img src={ladies} alt={ladies} />
                <div className="content">
                  <div className="admin">
                    <div className="admin-title">
                      <img src={pro} alt={pro} />
                      <p>Michael Jordan</p>
                    </div>
                    <p className="check">
                      <FontAwesomeIcon icon={faCheck} color="#000" size="2xs" />
                    </p>
                  </div>
                  <div className="course-name">
                    <h2>Creative Engineering: Lorem ipsum dolor sit amet, consectetur</h2>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#000" />
                  </div>
                  <div className="desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="rating">
                    <div className="star">
                      <img src={star} alt={star} />
                      <img src={star} alt={star} />
                      <img src={star} alt={star} />
                      <img src={halfstar} alt={halfstar} />
                      <img src={emptystar} alt={emptystar} />
                    </div>
                    <div className="rated">
                      <p>43k Ratings</p>
                    </div>
                  </div>
                  <div className="price-add">
                    <div className="price">
                      <p>₦2,549.99</p>
                      <div className="slice">₦4,449.99</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-con">
                <img src={ladies} alt={ladies} />
                <div className="content">
                  <div className="admin">
                    <div className="admin-title">
                      <img src={pro} alt={pro} />
                      <p>Michael Jordan</p>
                    </div>
                    <p className="check">
                      <FontAwesomeIcon icon={faCheck} color="#000" size="2xs" />
                    </p>
                  </div>
                  <div className="course-name">
                    <h2>Creative Engineering: Lorem ipsum dolor sit amet, consectetur</h2>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#000" />
                  </div>
                  <div className="desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="rating">
                    <div className="star">
                      <img src={star} alt={star} />
                      <img src={star} alt={star} />
                      <img src={star} alt={star} />
                      <img src={halfstar} alt={halfstar} />
                      <img src={emptystar} alt={emptystar} />
                    </div>
                    <div className="rated">
                      <p>43k Ratings</p>
                    </div>
                  </div>
                  <div className="price-add">
                    <div className="price">
                      <p>₦2,549.99</p>
                      <div className="slice">₦4,449.99</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-con">
                <img src={ladies} alt={ladies} />
                <div className="content">
                  <div className="admin">
                    <div className="admin-title">
                      <img src={pro} alt={pro} />
                      <p>Michael Jordan</p>
                    </div>
                    <p className="check">
                      <FontAwesomeIcon icon={faCheck} color="#000" size="2xs" />
                    </p>
                  </div>
                  <div className="course-name">
                    <h2>Creative Engineering: Lorem ipsum dolor sit amet, consectetur</h2>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#000" />
                  </div>
                  <div className="desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="rating">
                    <div className="star">
                      <img src={star} alt={star} />
                      <img src={star} alt={star} />
                      <img src={star} alt={star} />
                      <img src={halfstar} alt={halfstar} />
                      <img src={emptystar} alt={emptystar} />
                    </div>
                    <div className="rated">
                      <p>43k Ratings</p>
                    </div>
                  </div>
                  <div className="price-add">
                    <div className="price">
                      <p>₦2,549.99</p>
                      <div className="slice">₦4,449.99</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-con">
                <img src={ladies} alt={ladies} />
                <div className="content">
                  <div className="admin">
                    <div className="admin-title">
                      <img src={pro} alt={pro} />
                      <p>Michael Jordan</p>
                    </div>
                    <p className="check">
                      <FontAwesomeIcon icon={faCheck} color="#000" size="2xs" />
                    </p>
                  </div>
                  <div className="course-name">
                    <h2>Creative Engineering: Lorem ipsum dolor sit amet, consectetur</h2>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#000" />
                  </div>
                  <div className="desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="rating">
                    <div className="star">
                      <img src={star} alt={star} />
                      <img src={star} alt={star} />
                      <img src={star} alt={star} />
                      <img src={halfstar} alt={halfstar} />
                      <img src={emptystar} alt={emptystar} />
                    </div>
                    <div className="rated">
                      <p>43k Ratings</p>
                    </div>
                  </div>
                  <div className="price-add">
                    <div className="price">
                      <p>₦2,549.99</p>
                      <div className="slice">₦4,449.99</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-con">
                <img src={ladies} alt={ladies} />
                <div className="content">
                  <div className="admin">
                    <div className="admin-title">
                      <img src={pro} alt={pro} />
                      <p>Michael Jordan</p>
                    </div>
                    <p className="check">
                      <FontAwesomeIcon icon={faCheck} color="#000" size="2xs" />
                    </p>
                  </div>
                  <div className="course-name">
                    <h2>Creative Engineering: Lorem ipsum dolor sit amet, consectetur</h2>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#000" />
                  </div>
                  <div className="desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="rating">
                    <div className="star">
                      <img src={star} alt={star} />
                      <img src={star} alt={star} />
                      <img src={star} alt={star} />
                      <img src={halfstar} alt={halfstar} />
                      <img src={emptystar} alt={emptystar} />
                    </div>
                    <div className="rated">
                      <p>43k Ratings</p>
                    </div>
                  </div>
                  <div className="price-add">
                    <div className="price">
                      <p>₦2,549.99</p>
                      <div className="slice">₦4,449.99</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Overview;
