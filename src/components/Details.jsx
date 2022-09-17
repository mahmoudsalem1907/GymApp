import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import EquipmentImage from "../assets/icons/equipment.png";
import TargetImage from "../assets/icons/target.png";
const Details = ({ exerciseDetail }) => {
  const { bodyPart, name, target, gifUrl, equipment } = exerciseDetail;
  const extraData = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap={"60px"}
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} className="detail-image" alt="" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h2" textTransform={"capitalize"}>
          {name}
        </Typography>
        <Typography>
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>
        {extraData.map((item) => (
          <Stack
            key={item.name}
            direction="row"
            gap="24px"
            alignItems={"center"}
          >
            <Button
              sx={{
                borderRadius: "50px",
                padding: "15px",
                backgroundColor: "#fff2db",
                width: "80px",
              }}
            >
              <img src={item.icon} alt="" />
            </Button>
            <Typography variant="h6" textTransform={"capitalize"}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;
