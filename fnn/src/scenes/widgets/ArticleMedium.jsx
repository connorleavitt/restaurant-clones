import { Box, Button, IconButton, Typography } from "@mui/material";

const ArticleShort = ({ content, type }) => {
  return (
    <Box display="flex" p="0" m="0" className="article--short-container">
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
            <span>VIDEO:</span>
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
                <span>{type}:</span>
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
