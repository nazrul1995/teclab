import { Link } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import MyContainer from "../MyContainer";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../Firebase/firebase.init";
import { useState } from "react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState([]);
  const validatePassword = (password) => {
    const errors = [];

    if (password.length < 6) {
      errors.push("Password must be at least 6 characters.");
    }

    // if (!/[A-Z]/.test(password)) {
    //   errors.push("Include at least one uppercase letter.");
    // }

    // if (!/\d/.test(password)) {
    //   errors.push("Include at least one number.");
    // }

    return errors;
  };

  const handleSignUp = (e) => {
    e.preventDefault()
    const email = e.target.email.value;

    const validationMessage = validatePassword(password)
    if (validationMessage.length > 0) {
      toast.error("Please fix the password requirements");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // Signed up 
        console.log(res.code);
    

      })
      .catch((e) => {
        //console.log(e.code)
        if(e.code === 'auth/email-already-in-use'){
                   toast.error("All ready this email are used");
        }
      });
  };

  const handleGoogleSignUp = () => {

  };

  const handleSignout = () => {

  };
  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 relative overflow-hidden">
      {/* Animated glow orbs */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          {/* Left section */}
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Welcome Back
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Sign in to continue your journey. Manage your account, explore new
              features, and more.
            </p>
          </div>

          {/* Login card */}
          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <form onSubmit={handleSignUp} className="space-y-5">
              <h2 className="text-2xl font-semibold mb-2 text-center text-white">
               Sign Up
              </h2>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="relative">
                <label className="block text-sm mb-1">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => {
                    const newPassWord = e.target.value;
                    setPassword(newPassWord);
                    const validationMessages = validatePassword(newPassWord)
                    setPasswordErrors(validationMessages)
                  }}
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <span onClick={()=> setShowPassword(!showPassword)} className="absolute right-[8px] top-[36px] cursor-pointer z-50">
                 {
                  showPassword ?  <FaEye /> : <IoEyeOff/>
                 }
                </span>
              </div>

              <button type="submit" className="text-pink-300 hover:text-white font-medium underline">Login</button>
              {
                passwordErrors.length > 0 && (
                  <ul className="text-green-500 text-xl">
                    {
                      passwordErrors.map((error, indx) => <li key={indx}>{error}</li>)
                    }
                  </ul>
                )
              }
              {/* Divider */}
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-white/30"></div>
                <span className="text-sm text-white/70">or</span>
                <div className="h-px w-16 bg-white/30"></div>
              </div>

              {/* Google SignUp */}
              <button
                type="button"
                onClick={handleGoogleSignUp}
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              <p className="text-center text-sm text-white/80 mt-3">
              Already do you have an account?{" "} Please log in
                <Link
                  to="/signin"
                  className="text-pink-300 hover:text-white underline"
                >
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default SignUp;