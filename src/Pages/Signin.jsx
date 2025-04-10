import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const adminCredentials = {
    "adminaccount@gmail.com": {
      password: "account123",
      role: "accountAdmin",
      redirect: "/admin/account",
    },
    "adminorder@gmail.com": {
      password: "order123",
      role: "orderAdmin",
      redirect: "/admin/order",
    },
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setError("");

    if (state === "Sign Up") {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      console.log("User Registered!", { name, email, password, phone });
      setState("Login");
      return;
    }

    if (adminCredentials[email]) {
      if (password === adminCredentials[email].password) {
        console.log(`Logged in as ${adminCredentials[email].role}`);
        localStorage.setItem("userRole", adminCredentials[email].role);
        navigate(adminCredentials[email].redirect);
      } else {
        setError("Invalid password for admin account");
      }
    } else {
      console.log("Logged in as regular user");
      localStorage.setItem("userRole", "user");
      navigate("/", { state: { message: "Login successful!" } });
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-50"
    >
      <div className="w-full max-w-md bg-white border border-gray-200 p-6 sm:p-8 rounded-lg shadow-lg text-zinc-600">
        <h2 className="text-2xl font-semibold mb-1">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </h2>
        <p className="text-sm mb-4 text-gray-500">
          Please {state === "Sign Up" ? "sign up" : "log in"} to access the site.
        </p>

        {error && (
          <div className="w-full p-2 bg-red-100 text-red-700 rounded mb-4">
            {error}
          </div>
        )}

        {state === "Sign Up" && (
          <>
            <div className="mb-4">
              <label className="block text-sm mb-1">Full Name:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">Phone Number:</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded p-2"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
              />
            </div>
          </>
        )}

        <div className="mb-4">
          <label className="block text-sm mb-1">Email:</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded p-2"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Password:</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded p-2"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        {state === "Sign Up" && (
          <div className="mb-4">
            <label className="block text-sm mb-1">Confirm Password:</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded p-2"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded text-base transition"
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <p className="text-sm mt-4 text-center">
          {state === "Sign Up" ? "Already have an account?" : "Create a new account?"}{" "}
          <span
            onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")}
            className="text-orange-500 underline cursor-pointer hover:text-orange-700 transition"
          >
            {state === "Sign Up" ? "Login Here" : "Click Here"}
          </span>
        </p>
      </div>
    </form>
  );
};

export default Signin;
