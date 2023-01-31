import { Highlight } from "@mui/icons-material";
import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import HighlightbarPage from "../highlightbar/highlightbarPage";
import NavbarPage from "../navbar/navbarPage";
import MainArticlePage from "../article/mainArticlePage";
import SubArticlePage from "../article/subArticlePage";

export default function HomePage() {
  const isNonMobileScreens = useMediaQuery("(min-width: 800px");

  return (
    <Box className="main">
      <NavbarPage />
      <div className="main-content">
        <HighlightbarPage />
        <MainArticlePage />
        {/* <SubArticlePage /> */}
      </div>
    </Box>
  );
}
