import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import EmployeeDashboard from "./EmployeeDashboard";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

export default function AdminDashboard() {
  const [page, setPage] = useState({});

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.post("http://localhost:3001/Admin-view").then((response) => {
      setPage(response.data.data);
      console.log("data", page);
    });
  }, {});
  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <EmployeeDashboard />

      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Card fullwidth elevation={5}>
            <CardContent>
              <Typography variant="h4" component="div">
                Candidate
              </Typography>
              <Typography sx={{ m: 3 }} color="text.secondary"></Typography>
              <Typography variant="h4" component="div" color="#0a61b7">
                {page && page.candidateList}
              </Typography>
              <Typography variant="body2">
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Learn More</Button> */}
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card fullwidth elevation={5}>
            <CardContent>
              <Typography></Typography>
              <Typography variant="h4" component="div">
                Company
              </Typography>
              <Typography sx={{ m: 3 }} color="text.secondary"></Typography>
              <Typography variant="h4" component="div" color="#0a61b7">
                {page && page.companyList}
              </Typography>
              <Typography variant="body2">
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Learn More</Button> */}
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card fullwidth elevation={5}>
            <CardContent>
              <Typography></Typography>
              <Typography variant="h4" component="div">
                Invoice
              </Typography>
              <Typography sx={{ m: 3 }} color="text.secondary"></Typography>
              <Typography variant="h4" component="div" color="#0a61b7">
                {page.invoiceList}
              </Typography>
              <Typography variant="body2">
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Learn More</Button> */}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
