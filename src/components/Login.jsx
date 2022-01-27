import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  TextField,
  Container,
  Button,
  Typography,
  Card,
  CardContent,
  Tooltip,
} from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  let loggedin = false;

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    console.log(email);
    console.log(password);
    console.log("logged in");
    if (!localStorage.getItem("users")) alert("user not found");
    let allusers = localStorage.getItem("users");
    allusers = JSON.parse(allusers);
    const user = allusers?.find((user) => user.email === email);
    if (!user) alert("user not found");
    else {
      if (user.password !== password) alert("invalid credentials");
      else {
        alert("login sucessfully");
        loggedin = true;

        localStorage.setItem("loggedin", true);
        console.log(loggedin);
        navigate("/country");
      }
    }
  };
  useEffect(() => {
    if (localStorage.getItem("loggedin")) {
      // user already logged in
      navigate("/country", { replace: true });
    }
  });

  return (
    <div>
      <h1>login compo here </h1>
      <Container>
        <CardContent>
          <Typography>Login</Typography>
          <TextField
            label="Email"
            id="Email"
            name="Email"
            value={email}
            onChange={handleChangeEmail}
          />
          <TextField
            label="Password"
            id="Password"
            name="Password"
            value={password}
            onChange={handleChangePassword}
          />
          <Button
            variant="contained"
            size="large"
            sx={{ paddingX: 5, paddingY: 1, marginY: 2 }}
            onClick={handleSubmit}
          >
            Login
          </Button>
          <Typography
            paragraph
            gutterBottom
            variant="subtitle2"
            sx={{ fontSize: "1rem" }}
          >
            Don't have an account?{" "}
            <Tooltip title="Log in">
              <Link to="/signup" style={{ textDecoration: "none" }}>
                SignUp Here !
              </Link>
            </Tooltip>
          </Typography>
        </CardContent>
      </Container>
    </div>
  );
};

export default Login;
