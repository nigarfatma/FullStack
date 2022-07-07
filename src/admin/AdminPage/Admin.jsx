import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import GoogleIcon from "@mui/icons-material/Google";
import Nav from "../../navbar/Nav";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Admin.css";
const basURL = "http://localhost:3001/";

export default function Admin() {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      navigate("/");
    }
  });
  const [inputField, setInputField] = useState({
    email: "",
    password: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
    const { name, value } = e.target;
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // setPassword(e.target.value);
    // setSubmitted(false);
    setEmail(e.target.value);
    setSubmitted(false);
  };
  const handlePasswordChange = (e) => {
    let item = e.target.value;

    if (item.length < 8) {
      setPassword(true);
    } else {
      setPassword(false);
    }
    setSubmitted(true);
    const { name, value } = e.target;
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // setPassword(e.target.value);
    // setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast("Provide all fields");
    } else {
      setSubmitted(true);
    }
    const loginData = {
      email: inputField.email,
      password: inputField.password,
    };
    axios
      .post(`${basURL}login`, { loginData: loginData })
      .then((res) => {
        console.log("data->", JSON.stringify(res.data));
        if (res.data.success) {
          localStorage.setItem("token", JSON.stringify(res.data.token));
          console.log("data--->", res.data);
          // alert("Login Successfully");
          navigate("/AdminDashboard");
        } else {
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Nav />
      <Box
        sx={{ width: 600, m: "auto" }}
        role="presentation"

        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
      >
        <div>
          <form className="rounded bg-white shadow mt-4 p-5 ">
            <div className="header  ">
              <div className="text-center">
                <h4 className="text-dark font-weight-bold mb-4 ">
                  Admin Login
                </h4>
              </div>
            </div>
            <div class="form-group">
              <TextField
                fullWidth
                id="fullWidth"
                label="Enter your Email"
                name="email"
                value={inputField.email}
                onChange={handleEmailChange}
              />
            </div>
            <div class="form-group">
              <TextField
                fullWidth
                id="fullWidth"
                label="Enter your password"
                name="password"
                value={inputField.password}
                onChange={handlePasswordChange}
              />
              {password ? (
                <p style={{ color: "red", float: "left" }}>
                  password must be 8 character{" "}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="d-flex">
              <Link to={"/forgotPassword"} className="nav-link">
                Forgot Password?
              </Link>
            </div>
            <Link to={""} className="nav-link">
              <button
                onClick={handleSubmit}
                type="button"
                className="btn btn-primary form-control mt-2 mb-5"
              >
                Login{" "}
              </button>
            </Link>
            <ToastContainer
              toastStyle={{
                backgroundColor: "green",
                color: "#34A853",
                borderRadius: "25px",
                background: "#FFFFFF",
              }}
            />
            <div>OR</div>
            <div className="d-flex justify-content-center">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "white",
                  color: "grey",
                  borderRadius: "15px",
                  margin: "30px 0px 50px",
                }}
                elevation={8}
              >
                {" "}
                <GoogleIcon color="secondary" /> sign in with Google
              </Button>
            </div>
          </form>
        </div>
      </Box>
    </>
  );
}
