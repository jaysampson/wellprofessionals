import React, { useState, useEffect } from "react";
import SettingLayout from "../../SettingLayout/SettingLayout";
import "../Profile/Profile.scss";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, reset } from "../../../../redux/auth/authSlice";
import { toast } from "react-toastify";
import { faSpinner, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile = () => {
  return (
    <div>
      <SettingLayout content={<Content />} />
    </div>
  );
};

export const Content = () => {
  const [image, setImage] = useState(null);
  const [base64Image, setBase64Image] = useState(null);

  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success(message);
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);

  const updateDetails = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      mobile,
      image: base64Image,
    };

    dispatch(updateUser(userData));
    console.log(base64Image, "base64Image");
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(URL.createObjectURL(selectedImage));
        setBase64Image(reader.result); // Set the base64 image in state
      };

      reader.readAsDataURL(selectedImage);
    }
  };

  const [email, setEmail] = useState(user ? user.data.email : "");
  const [mobile, setMobile] = useState(user ? user.data.mobile : "");
  const [name, setName] = useState(user ? user.data.name : "");
  const [description, setDescription] = useState(
    user ? user.data.description : ""
  );
  const [language, setLanguage] = useState(user ? user.data.language : "");

  return (
    <div className="profile">
      <h1>Profile</h1>
      <div className="user">
        <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
          {image ? (
            <div className="img-con">
              <img src={image} alt="Selected Image" />
            </div>
          ) : user.data.image ? (
            <div className="img-con">
              <img src={user.data.image} alt="image" />
            </div>
          ) : (
            <FontAwesomeIcon
              icon={faUserCircle}
              color="#af5e41"
              size="3x"
              style={{
                borderRadius: "50%",
                width: "70px",
                height: "70px",
              }}
            />
          )}
        </label>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        <div className="name-role">
          <p>{user && user.data.name}</p>
          <span>Student</span>
        </div>
      </div>
      <div className="account-details">
        <h2>Account</h2>
        <div className="details">
          <div className="left-side">
            <div className="dets">
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                placeholder={name}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="dets">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder={user && user.data.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="dets">
              <label htmlFor="">Phone Number</label>
              <input
                type="number"
                placeholder={user && user.data.mobile}
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
            <div className="dets">
              <label htmlFor="">Bio or About Me</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Describe yourself"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="dets">
              <label htmlFor="">Language</label>
              <select
                name=""
                id=""
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option>Select preffered language</option>
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div>
          </div>
        </div>
        <button type="submit" onClick={updateDetails}>
          <p>
            {isLoading ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              "Update Profile"
            )}
          </p>
        </button>
      </div>
    </div>
  );
};

export default Profile;
