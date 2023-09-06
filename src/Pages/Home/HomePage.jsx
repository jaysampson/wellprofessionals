import React from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import "../Home/Home.scss";
import Footer from "../Layouts/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faArrowUpRightFromSquare,
  faCheck,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import homeicon from "../../assets/Icons/home-icon.svg";
import star from "../../assets/Icons/Star.svg";
import halfstar from "../../assets/Icons/Half-star.svg";
import emptystar from "../../assets/Icons/emptystar.svg";
import ladies from "../../assets/Images/doings.svg";
import pro from "../../assets/Images/Pro.svg";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const course = [
  {
    id: 1,
    name: "Declan rice",
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
    name: "Samspon Imonyi",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 10,
    name: "Sunkanmi",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 11,
    name: "Favour or Jackboy",
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
    name: "David Udoh",
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
  {
    id: 25,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 26,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 27,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 28,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 29,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 30,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 31,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 32,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 33,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 34,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 35,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 36,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 37,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 38,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 39,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 40,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 41,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 42,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 43,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 44,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 45,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 46,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 47,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 48,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 49,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 50,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 51,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 52,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 53,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 54,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 55,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 56,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 57,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 58,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 59,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 60,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 61,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 62,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 63,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 64,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 65,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 66,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 67,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 68,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 69,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 70,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 71,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 72,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 73,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 74,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 75,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 76,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 77,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 78,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 79,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 80,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 81,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 82,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 83,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 84,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 85,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 86,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 87,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 88,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 89,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 90,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 91,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 92,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 93,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 94,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 95,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 96,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 97,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 98,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 99,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 100,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
  {
    id: 101,
    name: "Michael Jordan",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₦2,549.99",
    slashedprice: "₦4,449.99",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/auth-login");
  //   }
  // }, [user, navigate]);

  const [currentPage, setCurrentPage] = useState(0); // State for the current page
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth >= 900 ? 6 : window.innerWidth >= 500 ? 4 : 2
  );
  // const itemsPerPage = 6; // Number of items per page
  const pageCount = Math.ceil(course.length / itemsPerPage); // Total number of pages

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCourses = course.slice(startIndex, endIndex);

  // State for mobile view
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 500);

  // Update isMobileView state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 500);
      setItemsPerPage(
        window.innerWidth >= 900 ? 6 : window.innerWidth >= 500 ? 4 : 2
      );
    };

    window.addEventListener("resize", handleResize);

    // Call handleResize on component mount to set the initial value correctly
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="home-hero">
          <div className="hero-text">
            <div className="top-text">
              <h1>
                Welcome to Well Professionals, the premier online platform
                offering affordable oil and gas courses. Learn from the comfort
                of your home on our mobile app or personal computers
              </h1>
              <p>Become Professionals and ready to join the world</p>
            </div>
            <div className="input-search">
              <div className="search">
                <FontAwesomeIcon icon={faSearch} color="#667085" />
                <input type="text" placeholder="Search for online courses" />
              </div>
              <Link to="/search">
                <button>Search</button>
              </Link>
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
              {/* <div className="blog-section">
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
              </div> */}
              <div className="top-rated">
                <div className="top-rated-con">
                  <h3>Top rated courses</h3>
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
                        <Link to="/overview" className="course-name">
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
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
                          <div className="check">
                            <FontAwesomeIcon icon={faCheck} size="2xs" />
                          </div>
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
                <div className="pagination">
                  {isMobileView ? (
                    <div className="mobile-pagination">
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        cursor="pointer"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className={currentPage === 0 ? "disabled" : "enabled"}
                      />
                      <p>
                        Page {currentPage + 1}/{pageCount}
                      </p>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        cursor="pointer"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className={
                          currentPage === pageCount - 1 ? "disabled" : "enabled"
                        }
                      />
                    </div>
                  ) : (
                    <ReactPaginate
                      previousLabel={
                        <div className="prev">
                          <FontAwesomeIcon
                            icon={faArrowLeft}
                            cursor="pointer"
                          />
                          <p>Previous</p>
                        </div>
                      }
                      nextLabel={
                        <div className="next">
                          <p>Next</p>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            cursor="pointer"
                          />
                        </div>
                      }
                      breakLabel={<div className="ellipses">...</div>}
                      pageCount={pageCount}
                      onPageChange={handlePageChange}
                      containerClassName="pages"
                      activeClassName="active"
                      pageLinkClassName="page-link"
                    />
                  )}
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
