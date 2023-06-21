import React from "react";
import HomeNav from "./Navbars/HomeNav";
import "../../assets/scss/other-pages/Home.scss";
import Footer from "../others/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faArrowUpRightFromSquare,
  faCheck,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import homeicon from "../../images/icons/home-icon.svg";
import star from "../../images/icons/Star.svg";
import halfstar from "../../images/icons/Half-star.svg";
import emptystar from "../../images/icons/emptystar.svg";
import ladies from "../../images/ladies.svg";
import pro from "../../images/Pro.svg";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const course = [
  {
    id: 1,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 2,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 3,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 4,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 5,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 6,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 7,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 8,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 9,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 10,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 11,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 12,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 13,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 14,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 15,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 16,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 17,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 18,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 19,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 20,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 21,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 22,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 23,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 24,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
];

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0); // State for the current page

  const itemsPerPage = 6; // Number of items per page
  const pageCount = Math.ceil(course.length / itemsPerPage); // Total number of pages

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCourses = course.slice(startIndex, endIndex);
  return (
    <div>
      <HomeNav />
      <div className="home">
        <div className="home-hero">
          <div className="hero-text">
            <div className="top-text">
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                enim velit mollit. Exercitation veniam consequat.
              </p>
            </div>
            <div className="input-search">
              <div className="search">
                <FontAwesomeIcon icon={faSearch} color="#667085" />
                <input type="text" placeholder="Search for online courses" />
              </div>
              <button>Search</button>
            </div>
          </div>
          <div className="hero-bottom-colors">
            <div className="brown"></div>
            <div className="blue"></div>
          </div>
        </div>
        <body>
          <div className="body-con">
            <div className="directory">
              <img src={homeicon} alt={homeicon} />
              <p>Home</p>
            </div>
            <div className="body-main">
              <div className="blog-section">
                <h2>Recent blog posts</h2>
                <div className="blog-main">
                  <div className="blog-side">
                    <div className="blog-side-con">
                      <img src={ladies} alt="Loading" />
                      <div className="content">
                        <div className="top-content">
                          <p>consectetur adipiscing • 20 Jan 2022</p>
                          <div className="read-more">
                            <h3>Lorem ipsum dolor sit</h3>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="black" />
                          </div>
                          <div className="desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua
                            </p>
                          </div>
                        </div>
                        <div className="tags">
                          <div className="red">Lorem</div>
                          <div className="blue">Ipsom</div>
                          <div className="indigo">Harbinger</div>
                        </div>
                      </div>
                    </div>
                    <div className="blog-side-con">
                      <img src={ladies} alt="Loading" />
                      <div className="content">
                        <div className="top-content">
                          <p>consectetur adipiscing • 20 Jan 2022</p>
                          <div className="read-more">
                            <h3>Lorem ipsum dolor sit</h3>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="black" />
                          </div>
                          <div className="desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua
                            </p>
                          </div>
                        </div>
                        <div className="tags">
                          <div className="red">Lorem</div>
                          <div className="blue">Ipsom</div>
                          <div className="indigo">Harbinger</div>
                        </div>
                      </div>
                    </div>
                    <div className="blog-side-con">
                      <img src={ladies} alt="Loading" />
                      <div className="content">
                        <div className="top-content">
                          <p>consectetur adipiscing • 20 Jan 2022</p>
                          <div className="read-more">
                            <h3>Lorem ipsum dolor sit</h3>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="black" />
                          </div>
                          <div className="desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua
                            </p>
                          </div>
                        </div>
                        <div className="tags">
                          <div className="red">Lorem</div>
                          <div className="blue">Ipsom</div>
                          <div className="indigo">Harbinger</div>
                        </div>
                      </div>
                    </div>
                    <div className="blog-side-con">
                      <img src={ladies} alt="Loading" />
                      <div className="content">
                        <div className="top-content">
                          <p>consectetur adipiscing • 20 Jan 2022</p>
                          <div className="read-more">
                            <h3>Lorem ipsum dolor sit</h3>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="black" />
                          </div>
                          <div className="desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua
                            </p>
                          </div>
                        </div>
                        <div className="tags">
                          <div className="red">Lorem</div>
                          <div className="blue">Ipsom</div>
                          <div className="indigo">Harbinger</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="top-rated">
                <div className="top-rated-con">
                  <h3>Top rated courses</h3>
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
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
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
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
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
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
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
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
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
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
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
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
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
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
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
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
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
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
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
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
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
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
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
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
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
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
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
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
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
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
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
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button>Show more courses</button>
              </div>
              <div className="all-courses">
                <h2>All Courses</h2>
                <div className="course-list">
                  {displayedCourses.map((course) => (
                    <div className="course-con" key={course.id}>
                      <img src={ladies} alt={ladies} />
                      <div className="content">
                        <div className="admin-title">
                          <p>{course.name}</p>
                          <FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className="desc">
                          <p>{course.desc}</p>
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
                        <div className="price">
                          <p>{course.price}</p>
                          <div className="slice">{course.slashedprice}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <div className="pagination">
                  <div className="prev">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <p>Previous</p>
                  </div>
                  <div className="pages">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <div className="ellipses">...</div>
                    <button>8</button>
                    <button>9</button>
                    <button>10</button>
                  </div>
                  <div className="next">
                    <FontAwesomeIcon icon={faArrowRight} />
                    <p>Next</p>
                  </div>
                </div> */}
                <div className="pagination">
                  <ReactPaginate
                    previousLabel={
                      <div className="prev">
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <p>Previous</p>
                      </div>
                    }
                    nextLabel={
                      <div className="next">
                        <p>Next</p>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </div>
                    }
                    breakLabel={<div className="ellipses">...</div>}
                    pageCount={pageCount}
                    onPageChange={handlePageChange}
                    containerClassName="pages"
                    activeClassName="active"
                    pageLinkClassName="page-link"
                  />
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
