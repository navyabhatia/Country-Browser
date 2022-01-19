import React, { useState } from "react";
import { MenuItem, Select } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";

const Country = () => {
  const [country, setCountry] = useState("");
  const [duration, setDuration] = useState("");

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };
  const handleChangeDuration = (event) => {
    setDuration(event.target.value);
  };

  return (
    <div>
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
          <Select
            value={country}
            label="Country"
            onChange={handleChangeCountry}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
          <Select
            value={duration}
            label="Duration"
            onChange={handleChangeDuration}
          >
            <MenuItem value={1}>one</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Thee</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <br></br>
      <p>
        you selected this country {country} with duration {duration}
      </p>
    </div>
  );
};

export default Country;
/*
      <Select label="Country">
        <MenuItem>America</MenuItem>
        <MenuItem>moscow</MenuItem>
        <MenuItem>hdhdh</MenuItem>
      </Select>

*/
