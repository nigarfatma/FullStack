import React, { useState } from "react";
import { Link } from "react-router-dom";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import GoogleIcon from '@mui/icons-material/Google';

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Nav.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const basURL = "http://localhost:3001/";

export default function Nav() {
  const navigate = useNavigate();
  const [inputField, setInputField] = useState({
    email: "",
    password: "",
  });
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleEmailChange = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
    const { name, value } = e.target;
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setPassword(e.target.value);
    setSubmitted(false);
    setEmail(e.target.value);
    setSubmitted(false);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
    const { name, value } = e.target;
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("provide all fields");
    } else {
      setSubmitted(true);
      alert("Welcome to login page");
    }
    const loginData = {
      email: inputField.email,
      password: inputField.password,
    };
    axios
      .post(`${basURL}login`, { loginData: loginData })
      .then((res) => {
        console.log("data->",JSON.stringify(res.data));
        if (res.data) {
          alert("Login Successfully");
          navigate("/mainpage");
         
        }
      })
      .catch((err) => console.log(err));
  };

  const form = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 500 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
        <form className="rounded bg-white shadow mt-4 p-5 ">
          <div className="header d-flex justify-content-between">
            <div>
              <h5 className="text-dark font-weight-bold mb-4">Login</h5>
            </div>
            <div>
              <Link
                to={"/Register"}
                className="nav-link"
                onClick={toggleDrawer(anchor, false)}
              >
                <p>Register For Free</p>
              </Link>
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
          </div>
          <div className="d-flex">
            <Link
              to={"/forgotPassword"}
              className="nav-link"
              onClick={toggleDrawer(anchor, false)}
            >
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
          <div className="text-center">OR</div>
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
               <GoogleIcon color="secondary"/> sign in with Google
            </Button>
          </div>
        </form>
      </div>
    </Box>
  );
  return (
    <div>
      <nav class="navbar navbar-expand-md bg-light navbar-light">
        <div className="logo">
          <img src="http://steptosoft.com/UI/S2SLOGO.png" alt="" width={200} />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav m-auto">
            <li class="nav-item">
              <a className="nav-link " href="#">
                Jobs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Companies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resources
              </a>
            </li>
          </ul>

          <div>
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button
                  onClick={toggleDrawer(anchor, true)}
                  variant="contained"
                  sx={{ borderRadius: "25px", marginRight: "5px" }}
                >
                  Login
                </Button>
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {form(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </div>

          <Link to={"/Register"}>
            <button
              type="button"
              class="btn btn-outline-primary  border-radius mr-2"
            >
              Register
            </button>
          </Link>
          <div className="dropdown">
            <div className="dropdown">
              <span className="mr-5">For Employers</span>
              <div className="dropdown-content">
                <Link  className="nav-link" to={"/EmployerLogin"}>
                  <p>Employerlogin</p>
                </Link>
                <Link  className="nav-link" to={"/Admin"}>
                <p>Admin login</p>
                </Link>

               
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
// <Box sx={{ flexGrow: 1 }}>
// <AppBar position="static" color="inherit">
//   <Toolbar>

//      <div className="logo">
//                 <img src="http://steptosoft.com/UI/S2SLOGO.png" alt="" width={200} />
//        </div>

//     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//       News
//     </Typography>
//     <Link to ={"/login"}style={{textDecoration:"none",marginRight:"5px"}}> <Button variant="contained" color="success" >Login</Button></Link>
//     <Link to ={"/Register"}style={{textDecoration:"none"}}> <Button  variant="contained" color="error">Register</Button></Link>

//   </Toolbar>
// </AppBar>
// </Box>
//   );
// }
