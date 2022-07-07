import React,{useState} from "react";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function EmployerLogin() {
  const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [submitted, setSubmitted] = useState(false);
const handleEmailChange = (e) => { 
  setEmail(e.target.value) 
  setSubmitted(false);
} 
const handlePasswordChange = (e) => { 
  setPassword(e.target.value) 
  setSubmitted(false);
}


  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert("provide all fields");
    } else {
    setSubmitted(true);
    alert("Welcome to login page");
    }
    };

  return (
    <div>
      <div className="container-fluid">
        <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3 ">
          <form className="rounded bg-white shadow mt-4 p-5">
              
            <div className="header d-flex justify-content-between" >
              <div>
                <h5 className="text-dark font-weight-bold mb-4">Login/Register</h5>
              </div>
             
            </div>
            <div class="form-group">
            <TextField
             fullWidth 
               id="fullWidth"
               label="Registered Email Id"
                value={email}
                onChange={handleEmailChange} 
              />
            </div>
            <div class="form-group">
            <TextField
             fullWidth 
               id="fullWidth"
               label=" password"
               
                value={password}
                onChange={handlePasswordChange} 
              />
            </div>
           
            <Link to={"/Candidate"} className="nav-link">
              <button
               onClick={handleSubmit}
                type="button"
                className="btn btn-primary form-control mt-2"
              >
                Login{" "}
              </button>
            </Link>
            <div className="">
              <Link to={"/forgotPassword"} className="nav-link">
                Forgot Password?
              </Link>
            </div>
            <hr />
            <p>Are you a new client ?</p>
            <Link to={"/EmployerRegisteration"}  >
                <button
              
                type="button"
                className="btn btn-primary form-control mt-2"
              >
               Register Now
              </button>
              </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
