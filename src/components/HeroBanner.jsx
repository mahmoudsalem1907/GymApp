import React from "react";
import HeroBannerImage from "../assets/images/banner.png";
import { Box, Stack, Button, Typography } from "@mui/material";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight={800} my="25px" fontSize="50px">
        Sweat , Smile <br /> And Repeat
      </Typography>
      <Typography fontSize="20px" mb={4} lineHeight={"35px"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit dicta!
      </Typography>
      <Button
        href="#exercises"
        variant="contained"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={700}
        color="#ff2625"
        fontSize="200px"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
          //   pl: "20px",
        }}
      >
        Exercises
      </Typography>
      <img src={HeroBannerImage} className="hero-banner-img" alt="banner" />
    </Box>
  );
};

export default HeroBanner;
