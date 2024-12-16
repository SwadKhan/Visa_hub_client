import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const Forget = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleResetPassword = (e) => {
    e.preventDefault();
    const auth = getAuth();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage("A reset link has been sent to your email.");
        setError("");
        setTimeout(() => {
          window.location.href = "https://mail.google.com/";
        }, 2000);
      })
      .catch((err) => {
        setError(err.message);
        setMessage("");
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
        <h2 className="text-2xl font-semibold text-center">Reset Password</h2>
        <form onSubmit={handleResetPassword} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          {message && <p className="text-green-500 mt-3">{message}</p>}
          {error && <p className="text-red-500 mt-3">{error}</p>}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Send Reset Link</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Remembered your password?{" "}
          <Link className="text-red-500" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Forget;
