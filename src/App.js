import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Country from "./components/Country";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Container fluid="true">
        <header className="App-header">
          <h1>
            <strong>WELCOME</strong>
          </h1>
          <br />
          <br />
        </header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/country" element={<Country />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
/*
now;
*/
