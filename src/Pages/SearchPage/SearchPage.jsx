import React from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import Footer from "../Layouts/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCheck,
  faList,
  faSearch,
  faTableCells,
} from "@fortawesome/free-solid-svg-icons";
import ladies from "../../assets/Images/doings.svg";
import pro from "../../assets/Images/Pro.svg";
import { Link } from "react-router-dom";
import "./SearchPage.scss";

const SearchPage = () => {
  return (
    <div>
      <Navbar />
      <div className="search-page">
        <div className="left-layout">
          <div className="price-range">
            <h4>Price, $</h4>
            <div className="price-input">
              <input type="number" placeholder="min" />
              <input type="number" placeholder="max" />
            </div>
            <div className="filters">
              <ul>
                <h4>Features</h4>
                <li>
                  <input type="checkbox" />
                  <p>Downloadable content</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Subtitles</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Test</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Lorem</p>
                </li>
              </ul>
              <ul>
                <h4>Language</h4>
                <li>
                  <input type="checkbox" />
                  <p>French</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>English</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Spanish</p>
                </li>
              </ul>
              <ul>
                <h4>Level</h4>
                <li>
                  <input type="checkbox" />
                  <p>Beginner</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Intermediate</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Professional</p>
                </li>
              </ul>
              <ul>
                <h4>Total hours</h4>
                <li>
                  <input type="checkbox" />
                  <p>1hour</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>20-35mins</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>4hours</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>6hours</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>10-15mins</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right-layout">
          <div className="input-search">
            <div className="search">
              <FontAwesomeIcon icon={faSearch} color="#667085" />
              <input type="text" placeholder="Search for online courses" />
            </div>
            <Link to="/home/search">
              <button>Search</button>
            </Link>
          </div>
          <div className="right-layout-top">
            <h2>
              Found 376 results for <span>Oil Sector</span>
            </h2>
            <div className="sort-arrange">
              <div className="sort">
                <p>Sort by</p>
                <select name="" id="">
                  <option value="">Featured</option>
                  <option value="">Price</option>
                </select>
              </div>
              <div className="filter">
                <FontAwesomeIcon icon={faTableCells} className="awesome" />
                <FontAwesomeIcon icon={faList} className="awesome-2" />
              </div>
            </div>
          </div>
          <div className="search-result">
            <div className="top-rated-con">
              <div className="courses">
                <div className="course-con">
                  <img src={ladies} alt={ladies} className="course-img" />
                  <div className="content">
                    <div className="admin">
                      <div className="admin-title">
                        <img src={pro} alt={pro} />
                        <p>Michael Jordan</p>
                      </div>
                      <p className="check">
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          size="2xs"
                        />
                      </p>
                    </div>
                    <Link to="/home/overview" className="course-name">
                      <h2>
                        Creative Engineering: Lorem ipsum dolor sit amet,
                        consectetur
                      </h2>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        color="#000"
                      />
                    </Link>
                    <div className="desc">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
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
                  <img src={ladies} alt={ladies} className="course-img" />
                  <div className="content">
                    <div className="admin">
                      <div className="admin-title">
                        <img src={pro} alt={pro} />
                        <p>Michael Jordan</p>
                      </div>
                      <p className="check">
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          size="2xs"
                        />
                      </p>
                    </div>
                    <div className="course-name">
                      <h2>
                        Creative Engineering: Lorem ipsum dolor sit amet,
                        consectetur
                      </h2>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        color="#000"
                        height={"24px"}
                        width={"24px"}
                      />
                    </div>
                    <div className="desc">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
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
                  <img src={ladies} alt={ladies} className="course-img" />
                  <div className="content">
                    <div className="admin">
                      <div className="admin-title">
                        <img src={pro} alt={pro} />
                        <p>Michael Jordan</p>
                      </div>
                      <p className="check">
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          size="2xs"
                        />
                      </p>
                    </div>
                    <div className="course-name">
                      <h2>
                        Creative Engineering: Lorem ipsum dolor sit amet,
                        consectetur
                      </h2>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        color="#000"
                      />
                    </div>
                    <div className="desc">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
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
                  <img src={ladies} alt={ladies} className="course-img" />
                  <div className="content">
                    <div className="admin">
                      <div className="admin-title">
                        <img src={pro} alt={pro} />
                        <p>Michael Jordan</p>
                      </div>
                      <p className="check">
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          size="2xs"
                        />
                      </p>
                    </div>
                    <div className="course-name">
                      <h2>
                        Creative Engineering: Lorem ipsum dolor sit amet,
                        consectetur
                      </h2>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        color="#000"
                      />
                    </div>
                    <div className="desc">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
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
                  <img src={ladies} alt={ladies} className="course-img" />
                  <div className="content">
                    <div className="admin">
                      <div className="admin-title">
                        <img src={pro} alt={pro} />
                        <p>Michael Jordan</p>
                      </div>
                      <p className="check">
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          size="2xs"
                        />
                      </p>
                    </div>
                    <div className="course-name">
                      <h2>
                        Creative Engineering: Lorem ipsum dolor sit amet,
                        consectetur
                      </h2>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        color="#000"
                      />
                    </div>
                    <div className="desc">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
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
                  <img src={ladies} alt={ladies} className="course-img" />
                  <div className="content">
                    <div className="admin">
                      <div className="admin-title">
                        <img src={pro} alt={pro} />
                        <p>Michael Jordan</p>
                      </div>
                      <p className="check">
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          size="2xs"
                        />
                      </p>
                    </div>
                    <div className="course-name">
                      <h2>
                        Creative Engineering: Lorem ipsum dolor sit amet,
                        consectetur
                      </h2>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        color="#000"
                      />
                    </div>
                    <div className="desc">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
