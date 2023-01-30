import React from "react";
import { IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { Search, Menu, Close } from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";

import ArticleShort from "../widgets/ArticleShort";
import ArticleBig from "../widgets/ArticleBig";
import ArticleMedium from "../widgets/ArticleMedium";

// IMAGES
import bigArticleImage from "../../assets/img/roman-kraft-_Zua2hyvTBk-unsplash.jpg";
import mediumArticleImage1 from "../../assets/img/aleksandr-popov-Xbh_OGLRfUM-unsplash.jpg";
import mediumArticleImage2 from "../../assets/img/bharathi-kannan-rfL-thiRzDs-unsplash.jpg";
import mediumArticleImage3 from "../../assets/img/redcharlie-redcharlie1-WQRdXOBJLV0-unsplash.jpg";

export default function MainArticlePage() {
  const theme = useTheme();
  // const background = theme.palette.background.default;

  const mediumArticleSubcontent1 = ["Delays expected to last hours"];

  const mediumArticleSubcontent2 = [
    "VIDEO: Puppys are super cute!",
    "What type of dog breed is right for you?",
    "Seriously, these puppies are super cute!! Go get one now! Why Wait?",
    "Cats vs. Dogs: the ultimate showdown",
  ];
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
      <Box className="article--section-middle">
        <ArticleMedium
          mainContent="Long traffic delays in major US city"
          subContent={mediumArticleSubcontent1}
          image={mediumArticleImage1}
        />
        <ArticleMedium
          mainContent="Puppies! Puppies!"
          subContent={mediumArticleSubcontent2}
          image={mediumArticleImage2}
        />
      </Box>
      <Box className="article--section-right">
        <ArticleMedium
          mainContent="Explore South Africa with a game drive"
          image={mediumArticleImage3}
        />
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
