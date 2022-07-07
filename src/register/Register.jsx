import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Nav from "../navbar/Nav";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import axios from "axios";

const basURL = "http://localhost:3001/";

export default function Register() {
  const [userName, setUserName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
  const [inputField, setInputField] = useState({
    userName:"",
    email: "",
    password: "",
    number: ""
    
  });
  // Handling the name change
  const handleInputChange = (e) => {
    setUserName(e.target.value);
    setSubmitted(false);
    const { name, value } = e.target;
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
    const { name, value } = e.target;
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
    const { name, value } = e.target;
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
    setSubmitted(false);
    const { name, value } = e.target;
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the form submission

    // e.preventDefault();
    // if (userName === "" || email === "" || password === "" || number === "") {
    //   alert("provide all fields");
    // } else {
    //   setSubmitted(true);
    //   alert("registered successfuly");
    // }
    const handleSubmit = (e) => {
  const registerData = {
    userName: inputField.userName,
    email: inputField.email,
    password: inputField.password,
    number: inputField.number
  };
  console.log("92-->".registerData  )
  axios
    .post(`${basURL}signup`, { registerData: registerData })
    .then((res) => {
      console.log(res.data);
      if (res.data) {
        alert("Successfully Registered");
        navigate("/login");
      }
    })
    .catch((err) => console.log(err));
  };
  return (
    <>
    <Nav />
    <div className="container mt-4">
      <div className="row d-flex justify-content-evenly">
     
        <div className="col-md-4">
          <Card sx={{ maxWidth: 600}}>
            <CardMedia
              component="img"
              height="300"
              width="200"
              image="//static.naukimg.com/s/7/104/assets/images/green-boy.c8b59289.svg"
              alt="green iguana"
            />
            <CardContent sx={{height:300 }}>
              <Typography gutterBottom variant="h5" component="div">
                On registering, you can
              </Typography>
              <Typography variant="body5" color="text.secondary">
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Build your profile and let recruiters find you" />
                  </ListItem>
                </List>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Get job postings delivered right to your email" />
                  </ListItem>
                </List>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Find a job and grow your career" />
                  </ListItem>
                </List>
              </Typography>
            </CardContent>

          </Card>
        </div>

        <div className="col-md-6  offset-2 col-xs-12 ">
          <h2>Find a job & grow your career</h2>

          <form className="mt-4">
            <div class="form-group">
              <TextField
                fullWidth
                id="fullWidth"
                label="What is your Name"
                name="userName"
                value={inputField.userName}
                onChange={handleInputChange}
              />
            </div>
            <div class="form-group">
              <TextField
                fullWidth
                id="fullWidth"
                label="Enter your Email Id"
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
            <div class="form-group">
              <TextField
                fullWidth
                id="fullWidth"
                label="Enter your Mobile Number"
                name="number"
                value={inputField.number}
                onChange={handleNumberChange}
              />
            </div>
            <p>work status</p>
            <div className="d-flex justify-content-between ">
              <div
                className="card mr-2"
                style={{
                  borderTopLeftRadius: "30px",
                  borderBottomRightRadius: "30px",
                }}
              >
                <h5>
                  {" "}
                  <i className="fa fa-briefcase"></i> I'm Experienced
                </h5>
                <p>I have work experience (excluding internships)</p>
              </div>
              <div
                className="card"
                style={{
                  borderTopLeftRadius: "30px",
                  borderBottomRightRadius: "30px",
                }}
              >
                <h5>
                  {" "}
                  <i class="fa fa-briefcase"></i> I'm a fresher
                </h5>
                <p>I have work experience (excluding internships)</p>
              </div>
            </div>
            <div className="card p-2 mt-3 ">
              <div className="d-flex justify-content-between">
                <div>
                  Recruiters give first preference to candidates <br /> who have
                  a resume
                </div>
                <div>
                  <button
                    style={{
                      backgroundColor: "hotpink",
                      border: "none",
                      padding: "10px 10px",
                      borderRadius: "25px",
                      color: "white",
                    }}
                  >
                    Upload Resume
                  </button>
                </div>
              </div>
            </div>

            <p>
              <small>Format: DOC, DOCx, PDF, RTFMaximum file size: 2MB</small>
            </p>
            <input type="checkbox" id="click" />
            <label for="click">
              Send me important updates on{" "}
              <i
                class="fa fa-whatsapp"
                style={{ color: "green", fontSize: "20px" }}
              ></i>{" "}
              WhatsApp
            </label>
            <p>
              <small>
                By clicking Register, you agree to the{" "}
                <a href="terms">Terms and Conditions </a>&
                <a href="privacy"> Privacy Policy </a>of Step to Soft.com
              </small>
            </p>
            <button
              onClick={handleSubmit}
              style={{
                backgroundColor: "green",
                border: "none",
                padding: "10px 10px",
                borderRadius: "25px",
                color: "white",
              }}
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
