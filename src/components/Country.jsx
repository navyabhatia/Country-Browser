import React, { useEffect, useState } from "react";
import axios from "axios";
import { MenuItem, Select } from "@mui/material";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";

const Country = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://countriesnow.space/api/v0.1/countries/info?returns=currency,flag,unicodeFlag,dialCode"
      );

      setCountries(response.data.data);
    };

    fetchData();
  }, [countries]);

  return (
    <Container fluid>
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
          <Select label="Country">
            {countries.map((country) => (
              <MenuItem value={country.name}> {country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {
        //now for duration}
      }
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
    </Container>
  );
};

export default Country;
