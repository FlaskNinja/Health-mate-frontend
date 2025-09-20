// import { useState } from "react";
// import { useNavigate } from "react-router-dom"; // 👈 import navigate
// import "../login.css";
// import Loading from "../components/Loading"; // 👈 import your loading component

// function Login() {
//   const [signState, setSignState] = useState("signup"); // "login" or "signup"
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });

//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false); // 👈 loading state
//   const navigate = useNavigate(); // 👈 for redirecting

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setLoading(true); // 👈 show loading immediately after submit

//   try {
//     let url =
//       signState === "signup"
//         ? "http://localhost:3000/api/signup"
//         : "http://localhost:3000/api/login";

//     const res = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       setMessage(
//         signState === "signup"
//           ? "Signup successful! 🎉"
//           : "Login successful! ✅"
//       );
//       console.log("Response:", data);

//       // ✅ FIXED: use data.patient instead of data.user
//       if (data.patient && data.token) {
//         sessionStorage.setItem("token", data.token);
//         sessionStorage.setItem("user", JSON.stringify(data.patient));
//       }

//       // ⏳ wait 1.5s to show loading screen, then redirect
//       setTimeout(() => {
//         navigate("/dashboard"); // 👈 go to dashboard page
//       }, 1500);
//     } else {
//       setMessage( data.message || "Something went wrong, try refreshing your network");
//       setLoading(false); // stop loading if error
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     setMessage( data.message || "Server error. Please try again later.");
//     setLoading(false); // stop loading if server fails
//   }
// };


//   return (
//     <div className="auth-wrapper">
//       <div className="auth-container">
//         <h2>{signState === "signup" ? "Sign Up" : "Login"}</h2>
//         <form onSubmit={handleSubmit}>
//           {signState === "signup" && (
//             <>
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="First Name"
//                 value={form.firstName}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Last Name"
//                 value={form.lastName}
//                 onChange={handleChange}
//                 required
//               />
//             </>
//           )}

//           {/* Always show email + password */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit">
//             {signState === "signup" ? "Create Account" : "Login"}
//           </button>
//         </form>

//         {message && <p className="message">{message}</p>}

//         <p>
//           {signState === "signup"
//             ? "Already have an account?"
//             : "Don't have an account?"}{" "}
//           <span
//             className="toggle-link"
//             onClick={() =>
//               setSignState(signState === "signup" ? "login" : "signup")
//             }
//           >
//             {signState === "signup" ? "Login here" : "Sign up here"}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login.css";
import Loading from "../components/Loading"; // 👈 import your loading component

function Login() {
  const [signState, setSignState] = useState("signup"); // "login" or "signup"
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // 👈 loading state
  const navigate = useNavigate(); // 👈 for redirecting

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // 👈 show loading immediately after submit

    try {
      let url =
        signState === "signup"
          ? `${import.meta.env.VITE_API_URL}/api/signup`
          : `${import.meta.env.VITE_API_URL}/api/login`;

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(
          signState === "signup"
            ? "Signup successful! 🎉"
            : "Login successful! ✅"
        );
        console.log("Response:", data);

        if (data.patient && data.token) {
          sessionStorage.setItem("token", data.token);
          sessionStorage.setItem("user", JSON.stringify(data.patient));
        }

        // ⏳ wait 1.5s to show loading screen, then redirect
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } else {
        setMessage(
          data.message || "Something went wrong, try refreshing your network"
        );
        setLoading(false); // stop loading if error
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Server error. Please try again later.");
      setLoading(false); // stop loading if server fails
    }
  };

  // 👇 THIS IS THE FIX: Show Loading component if true
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <h2>{signState === "signup" ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          {signState === "signup" && (
            <>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </>
          )}

          {/* Always show email + password */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            {signState === "signup" ? "Create Account" : "Login"}
          </button>
        </form>

        {message && <p className="message">{message}</p>}

        <p>
          {signState === "signup"
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <span
            className="toggle-link"
            onClick={() =>
              setSignState(signState === "signup" ? "login" : "signup")
            }
          >
            {signState === "signup" ? "Login here" : "Sign up here"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;


