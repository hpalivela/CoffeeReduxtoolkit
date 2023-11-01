import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Login = ({ show, setShow, onLogin }) => {
  const handleClose = () => setShow(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Authentication failed");
        }
      })
      .then((data) => {
        const token = data.token;
        localStorage.setItem("token", token);
        setError(false);
        onLogin();
        handleClose();
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-orange-500">
            Enter Details to Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Enter UserName"
            name="username"
            className="w-full border-solid border-2 border-orange-300 rounded-lg"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Modal.Body>
        <Modal.Body>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            className="w-full border-solid border-2 border-orange-300 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={submitHandler}
            className="bg-orange-500 text-gray-100 p-1 m-1 rounded-xl font-serif w-[100]"
          >
            Login
          </button>

          <button
            onClick={handleClose}
            className="bg-orange-500 p-1 m-1 text-gray-100 rounded-xl font-serif w-[100]"
          >
            Close
          </button>
          <button
            onClick={handleClose}
            className="bg-orange-500 text-gray-100 p-1 m-1 rounded-xl font-serif w-[100]"
          >
            Register
          </button>
          {error && (
        <center>
          <h1 className="text-red-500 font-serif">INVALID CREDENTIALS</h1>
        </center>
      )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
