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
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryDark = theme.palette.primary.dark;
  const primaryMain = theme.palette.primary.main;
  const alt = theme.palette.background.alt;

  return (
    <FlexBetween
      padding="0"
      m="0 auto"
      backgroundColor="black"
      color={background}
      className="navbar"
    >
      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <>
          <FlexBetween gap=".65rem" m="0 5rem">
            <Box pr="1rem">
              <Menu
                sx={{
                  fontSize: "2rem",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              />
            </Box>
            <Box sx={{ minWidth: "50px" }} pr=".75rem">
              <Typography
                fontWeight="bold"
                fontSize="1rem"
                color={background}
                // onClick={() => navigate("/home")}
                backgroundColor="red"
                p="1rem .5rem"
                sx={{
                  "&:hover": {
                    color: primaryMain,
                    cursor: "pointer",
                  },
                }}
              >
                FNN
              </Typography>
            </Box>
            <IconButton sx={{ fontSize: "1rem", borderRadius: "0" }}>
              <p className="navbar--menu-item">US</p>
            </IconButton>
            <IconButton sx={{ fontSize: "1rem", borderRadius: "0" }}>
              <p className="navbar--menu-item">World</p>
            </IconButton>
            <IconButton sx={{ fontSize: "1rem", borderRadius: "0" }}>
              <p className="navbar--menu-item">Politics</p>
            </IconButton>
            <IconButton sx={{ fontSize: "1rem", borderRadius: "0" }}>
              <p className="navbar--menu-item">Business</p>
            </IconButton>
            <IconButton sx={{ fontSize: "1rem", borderRadius: "0" }}>
              <p className="navbar--menu-item">More</p>
            </IconButton>
          </FlexBetween>
          <FlexBetween gap="1rem" m="0 5rem">
            <IconButton sx={{ fontSize: "1rem", borderRadius: "0" }}>
              <p className="navbar--menu-item">Audio</p>
            </IconButton>
            <IconButton sx={{ fontSize: "1rem", borderRadius: "0" }}>
              <p className="navbar--menu-item">Live TV</p>
            </IconButton>
            <IconButton sx={{ borderRadius: "0" }}>
              <Search sx={{ fontSize: "2rem", color: "white" }} />
            </IconButton>
            <IconButton
              sx={{
                fontSize: "1rem",
                border: `2px solid ${background}`,
                borderRadius: "5px",
              }}
            >
              <p className="navbar--menu-item">Log In</p>
            </IconButton>
          </FlexBetween>
        </>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}
      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="300px"
          minWidth="200px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem 1.4rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>
          {/* MENU ITEMS */}
          <div className="nav-mobile-container">
            <Box sx={{ minWidth: "50px" }}>
              <Typography
                fontWeight="bold"
                fontSize="clamp(1rem, 1rem, 2rem)"
                color={primaryDark}
                // onClick={() => navigate("/home")}
                sx={{
                  "&:hover": {
                    color: primaryMain,
                    cursor: "pointer",
                  },
                }}
              >
                FNN
              </Typography>
            </Box>
            <IconButton
              sx={{ fontSize: "25px", borderRadius: "0px" }}
              onClick={() => navigate(`/plant-profiles`)}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-leaf"
                className="navbar-icon"
              />
              <p className="nav-mobile-icon-text">Plant Profiles</p>
            </IconButton>
          </div>
        </Box>
      )}
    </FlexBetween>
  );
}
