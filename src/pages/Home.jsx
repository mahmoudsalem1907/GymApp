import React, { useState } from "react";
import Excersies from "../components/Excersies";
import HeroBanner from "../components/HeroBanner";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <>
      <HeroBanner />
      <SearchBar
        setExercises={setExercises}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
      <Excersies
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </>
  );
};

export default Home;
