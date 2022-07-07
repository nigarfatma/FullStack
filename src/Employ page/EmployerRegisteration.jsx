import * as React from "react";
import "./Empreg.css";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function EmployerRegisteration() {
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 3 }}>Welcome</Typography>
        <Typography variant="h5" component="div" gutterBottom>
          Get started with Naukri Recruitment Solutions
        </Typography>

        <div className="logo">
          <img
            src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-95420,resizemode-1,msid-46906275/jobs/hiring-grows-9-in-march-to-pick-up-further-naukri-com.jpg"
            width={500}
            height={700}
          />
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "80%" },
            justifyItems: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h5" component="div" gutterBottom sx={{ mb: 50 }}>
            Create Account
          </Typography>

          <div className="">
            {" "}
            or already registered ?
            <Link to={"/EmployerLogin"} className="nav-link ">
              Login Now
            </Link>
          </div>

          <TextField
            id="outlined-basic"
            label="Company Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Official Email Id"
            variant="outlined"
            helperText="Please enter your Email Id"
          />
          <TextField
            required
            id="outlined-basic"
            label="Mobile/Landline Number"
            type="number"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-basic"
            label="Contact person name"
            variant="outlined"
          />

          <Button variant="outlined" size="small">
            company
          </Button>
          <Button variant="outlined" size="small">
            consultant
          </Button>

          <TextField id="outlined-basic" label="Pin Code" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="GSTIN(optional)"
            variant="outlined"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="I agree to receive Promotional Communication from Naukri"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="I agree to Terms & Conditions and Privacy Policy"
          />

          <Button variant="contained" color="success">
            Create Account
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
