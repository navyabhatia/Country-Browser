import React from "react";
import { useState } from "react";
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

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    console.log(email);
    console.log(password);
    console.log("signed up");

    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify([]));
    }
    // check user in database
    let allUsers = localStorage.getItem("users");

    allUsers = JSON.parse(allUsers);

    console.log(allUsers);
    const userExist = allUsers?.some((user) => user.email === email);

    if (userExist) alert("user exists");
    else {
      //create new user
      allUsers = [...allUsers, { email, password }];
      localStorage.setItem("users", JSON.stringify(allUsers));
      alert("sucessfully registered");
      navigate("/login");
    }
  };

  return (
    <div>
      <h1>SignUp Here </h1>
      <Container>
        <Card
          sx={{
            maxWidth: 500,
            marginX: "auto",
            boxShadow: 4,
            bgcolor: "#FFF9F9",
          }}
        >
          <CardContent>
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
              SignUp
            </Button>
            <Typography
              paragraph
              gutterBottom
              variant="subtitle2"
              sx={{ fontSize: "1rem" }}
            >
              Already have an account?{" "}
              <Tooltip title="Log in">
                <Link to="/login" style={{ textDecoration: "none" }}>
                  Login Here !
                </Link>
              </Tooltip>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Signup;
