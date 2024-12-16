import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const auth = getAuth();

    if (auth.currentUser) {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      })
        .then(() => {
          setMessage("Profile updated successfully!");
          setError("");
          setTimeout(() => {
            navigate("/myProfile"); // Redirect to MyProfile page
          }, 2000);
        })
        .catch((err) => {
          setError(err.message);
          setMessage("");
        });
    } else {
      setError("No user is logged in.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
        <h2 className="text-2xl font-semibold text-center">Update Profile</h2>
        <form onSubmit={handleUpdateProfile} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              name="photoURL"
              type="url"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter your image URL"
              className="input input-bordered"
              required
            />
          </div>
          {message && <p className="text-green-500 mt-3">{message}</p>}
          {error && <p className="text-red-500 mt-3">{error}</p>}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update Profile</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Want to go back?{" "}
          <Link className="text-red-500" to="/myProfile">
            My Profile
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UpdateProfile;
