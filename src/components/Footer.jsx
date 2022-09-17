import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack
        gap="40px"
        sx={{ alignItems: "center" }}
        flexWrap="wrap"
        px="40px"
        pt="24px"
      >
        <img src={Logo} alt="logo" style={{ height: "41px" }} />
      </Stack>
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "28px", xs: "20px" } }}
        mt="41px"
        textAlign="center"
        pb="40px"
      >
        Made with by Mahmoud Mohamed
      </Typography>
    </Box>
  );
};

export default Footer;
