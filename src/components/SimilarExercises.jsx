import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Loader from "./Loader";
import HorizontalScrollBar from "../components/HorizontalScrollBar";
const SimilarExercises = ({ exerciseequipment, exercisetarget }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        exercises
      </Typography>

      <Stack mb="50px" direction={"row"} sx={{ p: "2", position: "relative" }}>
        {exercisetarget.length ? (
          <HorizontalScrollBar data={exercisetarget} />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Equipment
        </span>{" "}
        exercises
      </Typography>
      <Stack mb="50px" direction={"row"} sx={{ p: "2", position: "relative" }}>
        {exercisetarget.length ? (
          <HorizontalScrollBar data={exerciseequipment} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
