import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems={"center"}
      justifyContent={"center"}
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "8px solid #ff2625" : "",
        backgroundColor: "#fff",
        padding: "15px",
        gap: "40px",
        cursor: "pointer",
        width: "270px",
        height: "280px",
        borderRadius: "25px",
        // borderBottomLeftRadius: "25px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({
          top: 1800,
          left: 100,
          behavior: "smooth",
        });
      }}
    >
      <img src={Icon} style={{ width: "40px", height: "50px" }} alt="" />
      <Typography
        fontSize={"24px"}
        fontWeight="900"
        textTransform={"capitalize"}
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
