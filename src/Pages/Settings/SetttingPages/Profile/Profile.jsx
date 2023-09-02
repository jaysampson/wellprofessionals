import React, { useState, useEffect } from "react";
import SettingLayout from "../../SettingLayout/SettingLayout";
import "../Profile/Profile.scss";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, reset } from "../../../../redux/auth/authSlice";
import { toast } from "react-toastify";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile = () => {
  return (
    <div>
      <SettingLayout content={<Content />} />
    </div>
  );
};

export const Content = () => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [user_image, setUser_Image] = useState(null);

  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  //   name = user.data.name;
  //   mobile = user.data.mobile;
  //   email = user.data.email;

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
      user_image,
    };
    dispatch(updateUser(userData));
    console.log("clicked");
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      // You can handle the selected image here, such as displaying it or uploading it to a server.
      setUser_Image(URL.createObjectURL(selectedImage));
    }
  };

  const [value, setValue] = useState("This is an initial value");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the updated value to an API or update state.
    setIsEditing(false);
  };

  return (
    <div className="profile">
      <h1>Profile</h1>
      <div className="user">
        <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
          <img
            src={user_image || (user && user.data.user_image)}
            alt={user && user.data.user_image}
            style={{ width: "100px", height: "100px" }}
          />
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
                placeholder={user && user.data.name}
                value={name}
                defaultValue={user && user.data.name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="dets">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder={user && user.data.email}
                // contentEditable
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
                placeholder="Enter a description"
              ></textarea>
            </div>
            <div className="dets">
              <label htmlFor="">Language</label>
              <select name="" id="">
                <option value="">English</option>
              </select>
            </div>
          </div>
          <div className="right-side">
            <div className="dets">
              <label htmlFor="">Website</label>
              <input type="text" />
            </div>
            <div className="dets">
              <label htmlFor="">Instagram</label>
              <input type="text" />
            </div>
            <div className="dets">
              <label htmlFor="">LinkedIn</label>
              <input type="text" />
            </div>
            <div className="dets">
              <label htmlFor="">Twitter</label>
              <input type="text" />
            </div>
            <div className="dets">
              <label htmlFor="">Facebook</label>
              <input type="text" />
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
