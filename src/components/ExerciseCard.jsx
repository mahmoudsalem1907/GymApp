import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Stack } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercises/${exercise.id}`}>
      <img src={exercise.gifUrl} alt="" srcset="" />
      <Stack direction={"row"} justifyContent="center" alignItems={"center"}>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc577",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Stack justifyContent="center" alignItems={"center"}>
        <Typography
          ml="20px"
          pb="10px"
          textTransform={"capitalize"}
          mt="12px"
          color={"#000"}
          fontSize="26px"
          fontWeight={"800"}
        >
          {exercise.name}
        </Typography>
      </Stack>
    </Link>
  );
};

export default ExerciseCard;
