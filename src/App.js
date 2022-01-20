import { Container } from "@mui/material";
import "./App.css";
import Country from "./components/Country";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <header className="App-header">
          <h1>WELCOME</h1>
          <Country />
        </header>
      </Container>
    </div>
  );
}

export default App;
/*
now;
*/
