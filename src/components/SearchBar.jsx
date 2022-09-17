import React, { useState, useEffect } from "react";
import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";
const SearchBar = ({ setExercises, setBodyPart, bodyPart }) => {
  const [searchInput, setSearchInput] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  // to get category in the first
  useEffect(() => {
    const fetchExercieseData = async () => {
      const bodyPartData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartData]);
    };
    fetchExercieseData();
  }, []);
  // to set input value in search input
  function handleSearchInput(e) {
    setSearchInput(e.target.value.toLocaleLowerCase());
  }
  // in click search and git fetch and get data
  async function handleClickSearch() {
    if (searchInput) {
      //fetch data
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const SearchedExercises = exercisesData.filter(
        (e) =>
          e.name.toLocaleLowerCase().includes(searchInput) ||
          e.equipment.toLocaleLowerCase().includes(searchInput) ||
          e.bodyPart.toLocaleLowerCase().includes(searchInput) ||
          e.target.toLocaleLowerCase().includes(searchInput)
      );
      setSearchInput("");
      setExercises(SearchedExercises);
    }
  }

  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography
        textAlign={"center"}
        fontWeight={"600"}
        mb={"50px"}
        fontSize={"40px"}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position={"relative"} mb="72px">
        <TextField
          type="text"
          placeholder="Search Exercises"
          //   value={searchInput}
          onChange={(e) => {
            handleSearchInput(e);
            // handleClickSearch();
          }}
          //   height="76px"
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRaduis: "4px",
            },
            backgroundColor: "#fff",
            borderRadius: "80px",
            width: { lg: "900px", xs: "350px" },
          }}
        />
        <Button
          onClick={handleClickSearch}
          className="search-btn"
          sx={{
            ml: "10px",
            bgcolor: "#ff2625",
            height: "56px",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", sx: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            position: "absolute",
            right: "0",
          }}
          //   heigth="76px"
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyPart
        />
      </Box>
    </Stack>
  );
};

export default SearchBar;
