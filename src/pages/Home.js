import { Button, Typography } from "@mui/material";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div style={{ textAlign: "center", paddingTop: "30vh" }}>
      <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
        Register down below:
      </Typography>
      <div style={{ marginTop: "20px" }}>
        <Link to="/registration">
          <Button variant="outlined" color="success">
            Registration
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
