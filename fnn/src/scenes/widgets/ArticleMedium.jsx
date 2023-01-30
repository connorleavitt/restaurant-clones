import { Box, Button, Typography } from "@mui/material";

const ArticleMedium = ({ mainContent, subContent, imageType, image }) => {
  return (
    <Box className="article--medium-container">
      <Box className="article--medium-img-container">
        <img
          src={image}
          alt="article medium image"
          className="article--medium-img-source"
        />
      </Box>
      <Button
        className="article--medium-button"
        sx={{
          textTransform: "none",
          borderRadius: "0",
          p: "0",
          color: "black",
          "&:hover": {
            cursor: "pointer",
            color: "red",
          },
        }}
      >
        <Typography
          className="article--medium-main-content"
          sx={{
            fontSize: "2rem",
            fontWeight: "800",
          }}
        >
          {mainContent}
        </Typography>
      </Button>

      <ul className="article--medium-list">
        {subContent.map((content, index) => {
          return (
            <Button
              key={index}
              className="article--medium-button"
              sx={{
                textTransform: "none",
                borderRadius: "0",
                p: "0",
                color: "black",
                "&:hover": {
                  cursor: "pointer",
                  color: "red",
                },
              }}
            >
              <li className="article--medium-sub-content">{content}</li>
            </Button>
          );
        })}
      </ul>
    </Box>
  );
};

export default ArticleMedium;
