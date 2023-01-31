import { Box, Typography } from "@mui/material";

const HighlightbarTagWidget = ({ tagContent, type, isFirst = false }) => {
  // console.log(tagContent, type);
  return (
    <Box display="flex" p="0" m="0">
      {isFirst ? (
        <Typography
          className="highlight-bar--tag-type"
          pr="0.5rem"
          textTransform="uppercase"
          sx={{
            fontSize: "0.8rem",
            fontWeight: "bold",
            color: "red",
            "&:hover": {
              cursor: "pointer",
              fontSize: "0.8rem",
              fontWeight: "bold",
              color: "red",
            },
          }}
        >
          {type}:
        </Typography>
      ) : (
        <></>
      )}
      <Typography
        className="highlight-bar--tag-content"
        sx={{
          color: "black",
          fontSize: "0.8rem",
          fontWeight: "bold",

          "&:hover": {
            cursor: "pointer",
            color: "red",
          },
        }}
      >
        {tagContent}
      </Typography>
    </Box>
  );
};

export default HighlightbarTagWidget;
