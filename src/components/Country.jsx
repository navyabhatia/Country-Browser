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
  const [duration, setDuration] = useState();
  const [allpopulation, setAllPopulation] = useState();
  const [allyear, setAllyear] = useState();

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
  const handleDuration = (event) => {
    console.log(event.target.value);
    console.log({ search });
    console.log({ allpopulation });
    console.log({ allyear });
  };

  //let cd = ["navya", "bhatia", "anjali", "sara"];
  // console.log({ search });
  // console.log({ countries });
  const handleDetails = async (selectcountry) => {
    let allpopulationValue = [];
    let allyears = [];
    let tenPopulationValue = []; // filter it for last 10 years
    let tenYears = [];
    const res = await axios.get(
      `https://countriesnow.space/api/v0.1/countries/population?query=${selectcountry}`
    );

    const weather = res.data.data;
    console.log(weather);
    const result = weather.find(
      ({ country }) => country === selectcountry.name
    );
    console.log(result);
    console.log(result.country);
    console.log(result.code);
    for (const dataObj of result.populationCounts) {
      allpopulationValue.push(dataObj.value);
      allyears.push(dataObj.year);
    } //this for loop for storing year and value data seperately for creating graph
    console.log(allpopulationValue);
    console.log(allyears);
    setAllPopulation(allpopulationValue);
    setAllyear(allyears);
    setDetails(
      <Container>
        <h1>Welcome to {selectcountry.name}</h1>

        <h3>{selectcountry.currency}</h3>

        <h4> {selectcountry.unicodeFlag} </h4>

        <img
          src={selectcountry.flag}
          height="auto"
          width="320px"
          alt="country flag"
        />
        <h4> acessing from population api {result.country}</h4>
        <h4> acessing from population api {result.code}</h4>
      </Container>
    );
  };

  return (
    <Container fluid>
      <div className="row">
        <div className="column">
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
                {countries.map((selectcountry, index) => (
                  <MenuItem
                    key={index}
                    idx={index}
                    value={selectcountry.name}
                    onClick={() => handleDetails(selectcountry)}
                  >
                    {selectcountry.name}
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
              <Select label="Duration" onChange={handleDuration}>
                <MenuItem value={1}>Last 10 years Data</MenuItem>
                <MenuItem value={2}>All years Data</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>

      <div>{details}</div>
    </Container>
  );
};

export default Country;
/*

    weather
      .find((country) => country === "Bulgaria")
      .map((x) => (
        <li>{x.country}</li>
      ))

*/
