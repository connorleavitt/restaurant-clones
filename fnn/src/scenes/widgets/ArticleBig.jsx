import { Box, Button, Typography } from "@mui/material";

const ArticleBig = ({ mainContent, subContent, type, image }) => {
  return (
    <Box className="article--big-container">
      {type === "live" ? (
        <>
          <Button
            className="article--big-button"
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
              className="article--big-main-content"
              sx={{
                fontSize: "3rem",
                fontWeight: "800",
              }}
            >
              {mainContent}
            </Typography>
          </Button>
          <Box className="article--big-img-container">
            <img
              src={image}
              alt="article big image"
              className="article--big-img-source"
            />
            <p className="article--big-live-updates-tag">Live Updates</p>
          </Box>
          <Button
            className="article--big-button"
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
              className="article--big-sub-content"
              sx={{
                fontSize: "1.25rem",
                fontWeight: "800",
              }}
            >
              {subContent}
            </Typography>
          </Button>
        </>
      ) : (
        <>
          <Button
            className="article--big-button"
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
              className="article--big-main-content"
              sx={{
                fontSize: "3rem",
                fontWeight: "800",
              }}
            >
              {mainContent}
            </Typography>
          </Button>
          <Box className="article--big-img-container">
            <img
              src={image}
              alt="article big image"
              className="article--big-img-source"
            />
          </Box>
          <Button
            className="article--big-button"
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
              className="article--big-sub-content"
              sx={{
                fontSize: "1.25rem",
                fontWeight: "800",
              }}
            >
              {subContent}
            </Typography>
          </Button>
        </>
      )}
    </Box>
  );
};

export default ArticleBig;
