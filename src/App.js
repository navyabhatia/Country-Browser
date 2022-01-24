import { Container } from "@mui/material";
import "./App.css";
import Country from "./components/Country";

import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";

function App() {
  return (
    <div className="App">
      <Container fluid="true">
        <header className="App-header">
          <h1>WELCOME</h1>
          <br />
          <br />
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
