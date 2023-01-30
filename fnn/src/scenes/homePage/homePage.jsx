import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import NavbarPage from "../navbar/navbarPage";

export default function HomePage() {
  const isNonMobileScreens = useMediaQuery("(min-width: 800px");

  return (
    <Box className="main">
      <NavbarPage />
    </Box>
  );
}
