import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import ApartmentIcon from '@mui/icons-material/Apartment';
import StarsIcon from '@mui/icons-material/Stars';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import SchoolIcon from '@mui/icons-material/School';
import Nav from "./navbar/Nav";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 10000, min: 1000 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Home() {

  return (
    <>
      <Nav />
      <h2 style={{ margin: "30px" }}>Find your dream job now</h2>
      <p>5 lakh+ jobs for you to explore</p>

      <div className="container">
        <div className="row  ">
          <div
            className=" col-md-12 col-xs-12 d-flex justify-content-between shadow "
            id="header_border"
          >
            <div className="col-md-5">
              <form class="navbar-form navbar-left">
                <input
                  type="text"
                  placeholder="Enter Skill /Designation"
                  id="border_none"
                />
              </form>
            </div>
            <div className="col-md-2">
              <form class="navbar-form navbar-left">
                <input
                  type="text"
                  placeholder="Enter location"
                  id="border_none"
                />
              </form>
            </div>{" "}
            <div className="col-md-5">
              <form class="navbar-form navbar-left">
                <input type="text" placeholder="Search" id="border_none" />
              <Link to={"/jobView"} >
              <button
                  type="button"
                  class="btn btn-primary  border-radius mr-2"
                >
                  Search
                </button>
                </Link>
              </form>
            </div>
          </div>

          <div className="col-md-1"></div>
          <div className=" col-md-10 border mt-4 d-flex">
            <div className="col-md-2 d-flex m-2">
              <div class="circle-container">
                <img
                  class="accenture-logo"
                  src="https://static.naukimg.com/s/0/0/i/homepage-register/accenture-logo.png"
                />
              </div>
              <div class="circle-container shift-left">
                <img
                  class="myntra-logo"
                  src="https://static.naukimg.com/s/0/0/i/homepage-register/myntra-logo.png"
                />
              </div>
            </div>
            <div className="col-md-7  ">
              <h5>Get contacted by top companies hiring on Naukri!</h5>
              <p>Your chance to build that dream career is here</p>
            </div>
            <div className="col-md-2">
              {" "}
              <button
                style={{
                  backgroundColor: "#e36535",
                  border: "none",
                  padding: "5px",
                  borderRadius: "25px",
                  color: "white",
                  width: "150px",
                  height: "40px",
                  marginTop: "10px",
                }}
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
        <h4 className="my-4">Trending on Naukri today</h4>
        <Carousel responsive={responsive}>
          <div>
            <Card  elevation={5}  sx={{  minWidth: 150, mx: '15px'}}>
              <MapsHomeWorkIcon />
              <CardContent>
                <Typography
                  sx={{ fontSize: 20 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Remote
                </Typography>
                <p>6.5k+ jobs</p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card elevation={5} sx={{  minWidth: 150 ,mx: '15px'}}>
              <ApartmentIcon />
              <CardContent>
                <Typography
                  sx={{ fontSize: 20 }}
                  color="text.secondary"
                  gutterBottom
                >
                  MNC
                </Typography>
                <p>44.6k+ jobs</p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card elevation={5}  sx={{  minWidth: 150 ,mx: '15px'}}>
              <StarsIcon />
              <CardContent>
                <Typography
                  sx={{ fontSize: 20 }}
                  color="text.secondary"
                  gutterBottom
                >
                 Unicorn
                </Typography>
                <p>6.5k+ jobs</p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card elevation={5} sx={{ minWidth: 150 ,mx: '15px'}}>
              <RocketLaunchIcon />
              <CardContent>
                <Typography
                  sx={{ fontSize: 20 }}
                  color="text.secondary"
                  gutterBottom
                >
               Startup
                </Typography>
                <p>6.5k+ jobs</p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card elevation={5}  sx={{  minWidth: 150, mx: '15px'}}>
              <LaptopChromebookIcon />
              <CardContent>
                <Typography
                  sx={{ fontSize: 20 }}
                  color="text.secondary"
                  gutterBottom
                >
                 Software & IT
                </Typography>
                <p>6.5k+ jobs</p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card elevation={5}  sx={{  minWidth: 150 ,mx: '15px'}}>
              <SchoolIcon />
              <CardContent>
                <Typography
                  sx={{ fontSize: 20 }}
                  color="text.secondary"
                  gutterBottom
                >
                 Fresher
                </Typography>
                <p>6.5k+ jobs</p>
              </CardContent>
            </Card>
          </div>
        </Carousel>
  
        
      </div>
    </>
  );
}
