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
            fontSize: "1.7rem",
            fontWeight: "800",
            lineHeight: "1.2",
          }}
        >
          {mainContent}
        </Typography>
      </Button>
      {subContent === undefined ? (
        <></>
      ) : (
        <ul className="article--medium-list">
          {subContent.map((content, index) => {
            return (
              <Button
                key={index}
                className="article--medium-button"
                sx={{
                  textTransform: "none",
                  borderRadius: "0",
                  p: "0.25rem 0",
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
      )}
    </Box>
  );
};

export default ArticleMedium;
