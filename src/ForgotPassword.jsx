import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GoogleIcon from '@mui/icons-material/Google';
import './ForgotPassword.css';
import Nav from "./navbar/Nav";

export default function ForgotPassword() {
  return (
    <>
    <Nav />
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-2 shadow mt-5 ">
          <Typography variant="h5" component="div" sx={{marginTop:'50px'}}>
            Reset your Password
          </Typography>
          <p style={{marginTop:"30px"}}>OR</p>
          <div className="change" >
            <Button variant="contained" style={{backgroundColor:'white',color:"grey",borderRadius:"15px",margin:"30px 0px 50px"}} elevation={8} >
            <GoogleIcon color="secondary"/>sign in with Google
            </Button>
            </div>
          <div className="">
            <TextField
            fullWidth
              focused
              id="fullWidth" 
              label="Enter your Email Id"
              variant="outlined"
            />
          </div>
          <div className="">
            <Button variant="contained"  sx={{margin:"20px 0px 50px"}}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
