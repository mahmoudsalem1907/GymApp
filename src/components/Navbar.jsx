import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      px="15px"
      sx={{
        justifyContent: "none",
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "22px", xs: "20px" },
      }}
      direction="row"
      justifyContent="space-around"
      spacing={2}
    >
      <Link to="/">
        <img
          src={Logo}
          alt=""
          width="48px"
          style={{ height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack
        gap="40px"
        direction="row"
        spacing={2}
        fontSize="33px"
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A2121",
            borderBottom: "3px solid #f87878",
          }}
        >
          Home
        </Link>
        <a
          href="#exercies"
          style={{ textDecoration: "none", color: "#3A2121" }}
        >
          ExercieseDetails
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
