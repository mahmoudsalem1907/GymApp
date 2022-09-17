import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos) return "loading";
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h4" mb="35px">
        Watch{" "}
        <span style={{ color: "red", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        Exercises Video{" "}
      </Typography>
      <Stack
        justifyContent={"flex-start"}
        alignItems={"center"}
        flexWrap="wrap"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" },
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            key={index}
            className="exercise-video"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt="" srcset="" />
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
