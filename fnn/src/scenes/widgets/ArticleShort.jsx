import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Typography } from "@mui/material";

const ArticleShort = ({ content, type }) => {
  return (
    <Box className="article--short-container">
      {type === "video" ? (
        <Button
          className="article--short-button"
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
          <Typography className="article--short-content">
            <span className="article--short-video-icon">
              <FontAwesomeIcon icon="fa-regular fa-circle-play" />{" "}
            </span>
            {content}
          </Typography>
        </Button>
      ) : (
        <>
          {type !== undefined ? (
            <Button
              className="article--short-button"
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
              <Typography className="article--short-content">
                <span>{type}: </span>
                {content}
              </Typography>
            </Button>
          ) : (
            <Button
              className="article--short-button"
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
              <Typography className="article--short-content">
                {content}
              </Typography>
            </Button>
          )}
        </>
      )}
    </Box>
  );
};

export default ArticleShort;
