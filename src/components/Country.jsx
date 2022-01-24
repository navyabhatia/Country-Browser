import React, { useEffect, useState } from "react";
import axios from "axios";
import { MenuItem, Select } from "@mui/material";
import { Container } from "react-bootstrap";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FormControl from "@mui/material/FormControl";
import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import "./Country.css";
import Line from "./charts/Line";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [details, setDetails] = useState([]);
  const [duration, setDuration] = useState();
  const [allpopulation, setAllPopulation] = useState();
  const [allyear, setAllyear] = useState();
  const [lastTenyear, setLastTenyear] = useState();
  const [lastTenPopulation, setLastTenPopulation] = useState();
  const [loader, setloader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://countriesnow.space/api/v0.1/countries/info?returns=currency,flag,unicodeFlag,dialCode"
      );

      /*
      countries.length !== 0
        ? setCountries(countries)
        : setCountries(response.data.data);
      console.log("hi");*/
      //console.log(response.data.data);
      setCountries(response.data.data);
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleDuration = (event) => {
    //  console.log(event.target.value); //selecetd by user dropdown
    let clicked = event.target.value; //has index
    //  console.log({ search }); //search in country
    // console.log({ allpopulation }); //all population count of data stored
    // console.log({ allyear }); //all year data stored
    // console.log({ lastTenPopulation }); //last 10 year population
    // console.log({ lastTenyear }); //last 10 year
    setDuration(
      <div className="container">
        <h1 className="h">Population Graph</h1>
        <div className="section">
          {clicked === 1 ? (
            <Line
              text="Last 10 years Data"
              categories={lastTenyear}
              datavalue={lastTenPopulation}
            />
          ) : (
            <Line
              text="All years Data"
              categories={allyear}
              datavalue={allpopulation}
            />
          )}
        </div>
      </div>
    );
  };

  //let cd = ["navya", "bhatia", "anjali", "sara"];
  // console.log({ search });
  // console.log({ countries });

  const handleDetails = async (selectcountry) => {
    //  console.log(selectcountry); //el country selected data
    let allpopulationValue = [];
    let allyears = [];
    let tenPopulationValue = []; // filter it for last 10 years
    let tenYears = [];
    setloader(true);

    const res = await axios.get(
      `https://countriesnow.space/api/v0.1/countries/population`
    );

    if (res.data.data) setloader(false);

    const weather = res.data.data;
    // console.log(weather);
    const result = weather.find(
      ({ country }) => country === selectcountry.name
    );
    // console.log(result);
    // console.log(result.country);
    // console.log(result.code);
    for (const dataObj of result.populationCounts) {
      allpopulationValue.push(dataObj.value);
      allyears.push(dataObj.year);
    } //this for loop for storing year and value data seperately for creating graph
    // console.log(allpopulationValue);
    // console.log(allyears);
    tenPopulationValue = allpopulationValue.slice(-10); //filtering out last 10 year data from all
    tenYears = allyears.slice(-10);
    setLastTenyear(tenYears);
    setLastTenPopulation(tenPopulationValue);
    setAllPopulation(allpopulationValue);
    setAllyear(allyears);

    setDetails(
      <Container align="center">
        <h1>{selectcountry.name}</h1>
        <div class="row ">
          <div class="col md-3 justify-content-end">
            <br></br>
            <br></br>
            <h3 style={{ alignItem: "center", textAlign: "right" }}>
              {selectcountry.currency}
            </h3>
            <br></br>
            <h3 style={{ alignItem: "center", textAlign: "right" }}>
              {selectcountry.unicodeFlag}
            </h3>
          </div>
          <div class="col align-left">
            <img
              align="left"
              top="-200px"
              src={selectcountry.flag}
              alignItems="left"
              height="250px"
              width="250px"
              alt="country flag"
              float="left"
            />
          </div>
        </div>

        {/* <h4> acessing from population api {result.country}</h4>
        <h4> acessing from population api {result.code}</h4>
        */}
      </Container>
    );
  };

  return (
    <Container fluid>
      <div className="row">
        <div className="column">
          <Box
            sx={{
              marginLeft: 42,
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
              marginLeft: 72, //box margin fro left
              marginTop: -7,
              width: 200, //box width hai yeh
              display: "flex",
              flexDirection: "row-reverse",
              flexWrap: "nowrap",
              alignItems: "center",
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
      {loader && <Spinner animation="border" role="status" />}

      {!loader && <div>{details}</div>}
      <div>{duration}</div>
    </Container>
  );
};

export default Country;
/*


 ?query=${selectcountry} (of no use)
*/
