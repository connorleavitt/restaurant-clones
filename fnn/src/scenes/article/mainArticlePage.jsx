import React from "react";
import { IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { Search, Menu, Close } from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";

import ArticleShort from "../widgets/ArticleShort";
import ArticleBig from "../widgets/ArticleBig";
import bigArticleImage from "../../assets/img/roman-kraft-_Zua2hyvTBk-unsplash.jpg";

export default function MainArticlePage() {
  const theme = useTheme();
  // const background = theme.palette.background.default;

  return (
    <Box className="article--section">
      <Box className="article--section-left">
        <ArticleBig
          type="live"
          mainContent="US Election"
          subContent="Subarticle content - man reads newspaper on bench"
          image={bigArticleImage}
        />
        <ArticleShort content="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
        <ArticleShort content="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
        <ArticleShort
          type="Analysis"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <ArticleShort
          type="video"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <ArticleShort
          type="Opinion"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
      </Box>
      <Box className="article--section-middle"></Box>
      <Box className="article--section-right">
        <ArticleShort
          type="video"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <ArticleShort content="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
        <ArticleShort content="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
        <ArticleShort
          type="video"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <ArticleShort content="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />

        <ArticleShort
          type="Review"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
      </Box>
    </Box>
  );
}
