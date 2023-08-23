import React from "react";
import AdminLayout from "../../AdminLayout/AdminLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { BreadCrumb } from "../../../BreadCrumb/BreadCrumb";
import "./AdminInstructors.scss";
import Typing from "react-typing-effect";

const AdminInstructors = () => {
  return (
    <>
      <AdminLayout content={<Content />} />
    </>
  );
};

const Content = () => {
  return (
    <div className="instructors-page">
      <BreadCrumb />
      <div className="instructors">
        <h1>Course Instructors</h1>
        <div className="instructors-con">
          <div className="instructor-det">
            <img src="" alt="" />
            <div className="verified">
              <p>Olivia Rhyne</p>
              <FontAwesomeIcon icon={faCheckCircle} color="#4ECB71" />
            </div>
            <main>Founder & CEO</main>
            <span>
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </span>
            <div className="socials">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="instructor-det">
            <img src="" alt="" />
            <div className="verified">
              <p>Olivia Rhyne</p>
              <FontAwesomeIcon icon={faCheckCircle} color="#4ECB71" />
            </div>
            <main>Founder & CEO</main>
            <span>
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </span>
            <div className="socials">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="instructor-det">
            <img src="" alt="" />
            <div className="verified">
              <p>Olivia Rhyne</p>
              <FontAwesomeIcon icon={faCheckCircle} color="#4ECB71" />
            </div>
            <main>Founder & CEO</main>
            <span>
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </span>
            <div className="socials">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="instructor-det">
            <img src="" alt="" />
            <div className="verified">
              <p>Olivia Rhyne</p>
              <FontAwesomeIcon icon={faCheckCircle} color="#4ECB71" />
            </div>
            <main>Founder & CEO</main>
            <span>
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </span>
            <div className="socials">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="instructor-det">
            <img src="" alt="" />
            <div className="verified">
              <p>Olivia Rhyne</p>
              <FontAwesomeIcon icon={faCheckCircle} color="#4ECB71" />
            </div>
            <main>Founder & CEO</main>
            <span>
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </span>
            <div className="socials">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="instructor-det">
            <img src="" alt="" />
            <div className="verified">
              <p>Olivia Rhyne</p>
              <FontAwesomeIcon icon={faCheckCircle} color="#4ECB71" />
            </div>
            <main>Founder & CEO</main>
            <span>
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </span>
            <div className="socials">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="instructor-det">
            <img src="" alt="" />
            <div className="verified">
              <p>Olivia Rhyne</p>
              <FontAwesomeIcon icon={faCheckCircle} color="#4ECB71" />
            </div>
            <main>Founder & CEO</main>
            <span>
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </span>
            <div className="socials">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="instructor-det">
            <img src="" alt="" />
            <div className="verified">
              <p>Olivia Rhyne</p>
              <FontAwesomeIcon icon={faCheckCircle} color="#4ECB71" />
            </div>
            <main>Founder & CEO</main>
            <span>
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </span>
            <div className="socials">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="instructor-det">
            <img src="" alt="" />
            <div className="verified">
              <p>Olivia Rhyne</p>
              <FontAwesomeIcon icon={faCheckCircle} color="#4ECB71" />
            </div>
            <main>Founder & CEO</main>
            <span>
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </span>
            <div className="socials">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="instructors">
        <h1>
          Instructors Under{" "}
          <Typing
            speed={50}
            eraseDelay={100}
            loop={true}
            className="typed-text"
            text={["Review..."]}
          />
        </h1>
        <div className="instructors-con">
          <div className="instructor-det">
            <img src="" alt="" />
            <div className="verified">
              <p>Olivia Rhyne</p>
              <FontAwesomeIcon icon={faCheckCircle} color="#4ECB71" />
            </div>
            <main>Founder & CEO</main>
            <span>
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </span>
            <div className="socials">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="instructor-det">
            <img src="" alt="" />
            <div className="verified">
              <p>Olivia Rhyne</p>
              <FontAwesomeIcon icon={faCheckCircle} color="#4ECB71" />
            </div>
            <main>Founder & CEO</main>
            <span>
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </span>
            <div className="socials">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="instructor-det">
            <img src="" alt="" />
            <div className="verified">
              <p>Olivia Rhyne</p>
              <FontAwesomeIcon icon={faCheckCircle} color="#4ECB71" />
            </div>
            <main>Founder & CEO</main>
            <span>
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </span>
            <div className="socials">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="instructor-det">
            <img src="" alt="" />
            <div className="verified">
              <p>Olivia Rhyne</p>
              <FontAwesomeIcon icon={faCheckCircle} color="#4ECB71" />
            </div>
            <main>Founder & CEO</main>
            <span>
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </span>
            <div className="socials">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="instructor-det">
            <img src="" alt="" />
            <div className="verified">
              <p>Olivia Rhyne</p>
              <FontAwesomeIcon icon={faCheckCircle} color="#4ECB71" />
            </div>
            <main>Founder & CEO</main>
            <span>
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </span>
            <div className="socials">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="instructor-det">
            <img src="" alt="" />
            <div className="verified">
              <p>Olivia Rhyne</p>
              <FontAwesomeIcon icon={faCheckCircle} color="#4ECB71" />
            </div>
            <main>Founder & CEO</main>
            <span>
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </span>
            <div className="socials">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="instructor-det">
            <img src="" alt="" />
            <div className="verified">
              <p>Olivia Rhyne</p>
              <FontAwesomeIcon icon={faCheckCircle} color="#4ECB71" />
            </div>
            <main>Founder & CEO</main>
            <span>
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </span>
            <div className="socials">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="instructor-det">
            <img src="" alt="" />
            <div className="verified">
              <p>Olivia Rhyne</p>
              <FontAwesomeIcon icon={faCheckCircle} color="#4ECB71" />
            </div>
            <main>Founder & CEO</main>
            <span>
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </span>
            <div className="socials">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="instructor-det">
            <img src="" alt="" />
            <div className="verified">
              <p>Olivia Rhyne</p>
              <FontAwesomeIcon icon={faCheckCircle} color="#4ECB71" />
            </div>
            <main>Founder & CEO</main>
            <span>
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </span>
            <div className="socials">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminInstructors;
