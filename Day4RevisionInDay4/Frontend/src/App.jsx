import axios from "axios";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signIn, setSignIn] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!signIn) {
      console.log(email, password);
      axios
        .post("http://localhost:3000/api/auth/signin", {
          email,
          password,
        })
        .then((res) => {
          console.log(res.data.message);
          console.log(res.data.user);
          console.log(res.data.token);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
      setSignIn(false);
      setName("");
      setEmail("");
      setPassword("");
      return;
    }
    console.log(name, email, password);
    axios
      .post("http://localhost:3000/api/auth/signup", {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data.message);
        console.log(res.data.user);
        console.log(res.data.token);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleLogout = () => {
    axios
      .post("http://localhost:3000/api/auth/logout")
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };
  return (
    <div className="w-full h-screen bg-gray-200 p-1">
      <h1 className="text-black text-4xl text-center mt-5">Form</h1>
      <button
        className="text-3xl px-5 py-2 bg-green-300 rounded"
        onClick={() => setSignIn(!signIn)}
      >
        {signIn ? "Sign Up" : "Sign In"}
      </button>
      <button
        className=" ml-4 text-3xl px-5 py-2 bg-red-300 rounded"
        onClick={() => handleLogout()}
      >
        Logout
      </button>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-1/4 mx-auto p-5"
      >
        {signIn && (
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2"
            type="text"
            placeholder="Enter Name"
          />
        )}
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2"
          type="text"
          placeholder="Enter Email"
        />
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2"
          type="text"
          placeholder="Enter Password"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
