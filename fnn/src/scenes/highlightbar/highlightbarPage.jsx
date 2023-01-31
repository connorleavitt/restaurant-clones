import React from "react";
import { IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { Search, Menu, Close } from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import HighlightbarTagWidget from "../widgets/HighlightbarTagWidget";

export default function HighlightbarPage() {
  const theme = useTheme();
  const background = theme.palette.background.default;

  return (
    <Box className="highlight-bar" p="1rem">
      {/* LIVE */}
      <IconButton
        sx={{
          // fontSize: ".5rem",
          borderRadius: "0",
          p: "0",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "transparent",
          },
        }}
      >
        <HighlightbarTagWidget
          className="highlight-bar--tag-item"
          tagContent="U.S. Election"
          type="live"
          isFirst="true"
        />
      </IconButton>
      {/* TRENDING */}

      <IconButton
        sx={{
          fontSize: "1rem",
          borderRadius: "0",
          p: "0",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "transparent",
          },
        }}
      >
        <HighlightbarTagWidget
          className="highlight-bar--tag-item"
          tagContent="Stock market"
          type="trending"
          isFirst="true"
        />
      </IconButton>
      <IconButton
        sx={{
          fontSize: "1rem",
          borderRadius: "0",
          p: "0",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "transparent",
          },
        }}
      >
        <HighlightbarTagWidget
          className="highlight-bar--tag-item"
          tagContent="Winter storm"
          type="trending"
        />
      </IconButton>
      <IconButton
        sx={{
          fontSize: "1rem",
          borderRadius: "0",
          p: "0",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "transparent",
          },
        }}
      >
        <HighlightbarTagWidget
          className="highlight-bar--tag-item"
          tagContent="'The Last of Us'"
          type="trending"
        />
      </IconButton>
      <IconButton
        sx={{
          fontSize: "1rem",
          borderRadius: "0",
          p: "0",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "transparent",
          },
        }}
      >
        <HighlightbarTagWidget
          className="highlight-bar--tag-item"
          tagContent="US skier wins"
          type="trending"
        />
      </IconButton>
      <IconButton
        sx={{
          fontSize: "1rem",
          borderRadius: "0",
          p: "0",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "transparent",
          },
        }}
      >
        <HighlightbarTagWidget
          className="highlight-bar--tag-item"
          tagContent="Puppy Bowl"
          type="trending"
        />
      </IconButton>
      <IconButton
        sx={{
          fontSize: "1rem",
          borderRadius: "0",
          p: "0",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "transparent",
          },
        }}
      >
        <HighlightbarTagWidget
          className="highlight-bar--tag-item"
          tagContent="Valentine's Day gifts"
          type="trending"
        />
      </IconButton>

      {/* PODCAST */}
      <IconButton
        sx={{
          fontSize: "1rem",
          borderRadius: "0",
          p: "0",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "transparent",
          },
        }}
      >
        <HighlightbarTagWidget
          className="highlight-bar--tag-item"
          tagContent="One Thing"
          type="podcast"
          isFirst="true"
        />
      </IconButton>
    </Box>
  );
}
