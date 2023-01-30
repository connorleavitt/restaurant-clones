import { Box, Typography } from "@mui/material";

const HighlightbarTagWidget = ({ tagContent, type, isFirst = false }) => {
  console.log(tagContent, type);
  return (
    <Box display="flex" p="0" m="0">
      {isFirst ? (
        <Typography
          className="highlight-bar--tag-type"
          fontWeight="500"
          color="red"
          pr="0.5rem"
          textTransform="uppercase"
          sx={{
            "&:hover": {
              cursor: "pointer",
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
        fontWeight="500"
        sx={{
          color: "black",
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
