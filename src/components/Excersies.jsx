import React, { useEffect, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import Pagination from "@mui/material/Pagination";
import ExerciseCard from "./ExerciseCard";
// import BodyPart from "./BodyPart";
const Excersies = ({ setExercises, exercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exerciseperPage = 9;
  const indexOfLastExercise = currentPage * exerciseperPage;
  const indexOfFirstExercise = indexOfLastExercise - exerciseperPage;

  const currenetExercise = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchdata = async () => {
      let data = [];
      if (bodyPart === "all") {
        data = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        data = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(data);
    };
    fetchdata();
  }, [bodyPart]);

  return (
    <Box id="exercises" p="20px" mt="50px" sx={{ mt: { lg: "110px" } }}>
      <Typography variant="h3" mb="46px">
        Results
      </Typography>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent="center"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
      >
        {currenetExercise.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack alignItems={"center"} mt="100px">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            defaultPage={1}
            count={Math.ceil(exercises.length / exerciseperPage)}
            shape="rounded"
            size="large"
            page={currentPage}
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Excersies;
