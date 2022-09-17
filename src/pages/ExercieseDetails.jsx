import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { exerciseOptions, fetchData, youtubeoptions } from "../utils/fetchData";
import Details from "../components/Details";
import SimilarExercises from "../components/SimilarExercises";
import ExerciseVideos from "../components/ExerciseVideos";
const ExercieseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [exercisetarget, setExerciseTarget] = useState([]);
  const [exerciseequipment, setExerciseEquipment] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const fetchdata = async () => {
      const detailBdUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeRelated =
        "https://youtube-search-and-download.p.rapidapi.com";

      ///video/related

      const data = await fetchData(
        `${detailBdUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(data);
      const dataYouTube = await fetchData(
        `${youtubeRelated}/search?query=${data.name}exercise`,
        youtubeoptions
      );
      setExerciseVideos(dataYouTube.contents);
      const targetMuscleExercisesData = await fetchData(
        `${detailBdUrl}/exercises/target/${data.target}`,
        exerciseOptions
      );
      setExerciseTarget(targetMuscleExercisesData);
      const equipmentExercisesData = await fetchData(
        `${detailBdUrl}/exercises/equipment/${data.equipment}`,
        exerciseOptions
      );
      setExerciseEquipment(equipmentExercisesData);

      console.log(dataYouTube);
      console.log(exerciseVideos);
    };
    fetchdata();
  }, [id]);
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      {/* <Typography>sadas</Typography> */}
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        exercisetarget={exercisetarget}
        exerciseequipment={exerciseequipment}
      />
    </Box>
  );
};

export default ExercieseDetails;
