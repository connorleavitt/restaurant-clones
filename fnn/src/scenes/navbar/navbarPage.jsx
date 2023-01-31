import React, { useState } from "react";
import {
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";

import { Search, Menu, Close } from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavbarPage() {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width: 1200px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryDark = theme.palette.primary.dark;
  const primaryMain = theme.palette.primary.main;
  const alt = theme.palette.background.alt;

  return (
    <Box
      padding="0"
      m="0"
      backgroundColor="black"
      color={background}
      className="navbar"
    >
      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween className="navbar-container">
          <FlexBetween gap=".5rem" m="0" p="0">
            <Box pr="0.5rem">
              <FontAwesomeIcon icon="fa-solid fa-bars" />{" "}
            </Box>
            <Box pr=".5rem" sx={{ height: "100%" }}>
              <Typography
                fontWeight="bold"
                fontSize="0.75rem"
                color={background}
                // onClick={() => navigate("/home")}
                backgroundColor="red"
                p=".5rem"
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                FNN
              </Typography>
            </Box>
            <IconButton
              sx={{
                p: "0",
                m: "0",
                fontSize: "0.75rem",
                borderRadius: "0",
              }}
            >
              <p className="navbar--menu-item">US</p>
            </IconButton>
            <IconButton
              sx={{ p: "0", m: "0", fontSize: "0.75rem", borderRadius: "0" }}
            >
              <p className="navbar--menu-item">World</p>
            </IconButton>
            <IconButton
              sx={{ p: "0", m: "0", fontSize: "0.75rem", borderRadius: "0" }}
            >
              <p className="navbar--menu-item">Politics</p>
            </IconButton>
            <IconButton
              sx={{ p: "0", m: "0", fontSize: "0.75rem", borderRadius: "0" }}
            >
              <p className="navbar--menu-item">Business</p>
            </IconButton>
            <IconButton
              sx={{ p: "0", m: "0", fontSize: "0.75rem", borderRadius: "0" }}
            >
              <p className="navbar--menu-item">More</p>
            </IconButton>
          </FlexBetween>
          <FlexBetween gap="1rem" m="0">
            <IconButton
              sx={{ p: "0", m: "0", fontSize: "0.75rem", borderRadius: "0" }}
            >
              <p className="navbar--menu-item">Audio</p>
            </IconButton>
            <IconButton
              sx={{ p: "0", m: "0", fontSize: "0.75rem", borderRadius: "0" }}
            >
              <p className="navbar--menu-item">Live TV</p>
            </IconButton>
            <IconButton sx={{ p: "0", m: "0", borderRadius: "0" }}>
              <Search sx={{ fontSize: "1.25rem", color: "white" }} />
            </IconButton>
            <IconButton
              sx={{
                p: "0.25rem",
                m: ".25rem 0",
                fontSize: "0.75rem",
                border: `2px solid ${background}`,
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: "#444444",
                },
              }}
            >
              <p className="navbar--menu-item">Log In</p>
            </IconButton>
          </FlexBetween>
        </FlexBetween>
      ) : (
        <></>
        // <IconButton
        //   onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        // >
        //   <Menu />
        // </IconButton>
      )}
    </Box>
  );
}
