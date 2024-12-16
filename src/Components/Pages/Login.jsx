import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const { userLogin, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const [email, setEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const logInInfo = { email, lastSignInTime };

        fetch(`https://visa-hub-master.vercel.app/users`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(logInInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("User info updated:", data);
          })
          .catch((error) =>
            console.error("Failed to update user info:", error)
          );

        console.log("User signed in:", result.user);
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
        e.target.reset();
      })

      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };

  const handleGoogleLogin = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, google: err.message });
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
        <h2 className="text-2xl font-semibold text-center">
          Login to your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {error.login && (
              <label className="label text-red-600">{error.login}</label>
            )}
            <label className="label">
              <Link
                to="/forget"
                state={{ email }}
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <button
          className="btn flex justify-center items-center gap-2 mt-4"
          onClick={handleGoogleLogin}
        >
          <FaGoogle /> Login with Google
        </button>
        {error.google && (
          <p className="text-red-500 text-center mt-2">{error.google}</p>
        )}
        <p className="text-center font-semibold mt-4">
          Don't Have An Account?{" "}
          <Link className="text-red-500" to="/auth/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
