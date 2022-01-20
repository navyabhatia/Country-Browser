import React, { useEffect, useState } from "react";
import axios from "axios";
import { MenuItem, Select } from "@mui/material";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Details from "./Details";
import FormControl from "@mui/material/FormControl";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://countriesnow.space/api/v0.1/countries/info?returns=currency,flag,unicodeFlag,dialCode"
      );

      setCountries(response.data.data);
    };

    fetchData();
  }, [countries]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  //let cd = ["navya", "bhatia", "anjali", "sara"];

  return (
    <Container fluid>
      <div className="row">
        <div classNmae="column">
          <Box
            sx={{
              marginLeft: 15,
              width: 200,
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              alignItems: "center",
              float: "left",
            }}
          >
            <FormControl sx={{ flexGrow: 1 }}>
              <InputLabel id="label">Country</InputLabel>
              <Select label="Country" onChange={handleSearch} value={search}>
                {countries.map((country, index) => (
                  <MenuItem value={index} onClick={() => setDetails(country)}>
                    {" "}
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
        {
          //now for duration}
        }
        <div className="column">
          <Box
            sx={{
              marginLeft: 15, //box margin fro left
              width: 200, //box width hai yeh
              display: "flex",
              flexDirection: "row-reverse",
              flexWrap: "nowrap",
              alignItems: "center",
              float: "left",
            }}
          >
            <FormControl sx={{ flexGrow: 1 }}>
              <InputLabel id="label2">Duration</InputLabel>
              <Select label="Duration">
                <MenuItem value={1}>one</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Thee</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>

      <div>
        {details.length === 0 ? (
          <h1>Select Country and Duration</h1>
        ) : (
          <Container>
            <h1>Welcome to {details.name}</h1>

            <h3>{details.currency}</h3>

            <h4> {details.unicodeFlag} </h4>

            <img
              src={details.flag}
              height="auto"
              width="320px"
              alt="country flag"
            />
          </Container>
        )}
      </div>
    </Container>
  );
};

export default Country;
/*
 
            {console.log(search)}
            <p> {search && cd[search]} </p>

*/
