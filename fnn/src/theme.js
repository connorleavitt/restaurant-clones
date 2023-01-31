// color design tokens export
export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#e6ffe6",
    100: "#dcffdc",
    200: "#bae4ba",
    300: "#96bf96",
    400: "#7dc67c",
    500: "#679267",
    600: "#488f48",
    700: "#2f802f",
    800: "#226e22",
    900: "#084e08",
  },
  secondary: {
    50: "#ffe9e3",
    100: "#ffd6cb",
    200: "#ffbaa6",
    300: "#fe987b",
    400: "#fe987b",
    500: "#fe987b",
    600: "#fe987b",
    700: "#af2700",
    800: "#6b1800",
    900: "#330b00",
  },
  water: {
    200: "#d4e8fc",
    500: "#879FB7",
    700: "#00509f",
  },
  sunlight: {
    200: "#f9cb9c",
    500: "#fac442",
    700: "#ffb400",
  },
};

// mui theme settings
export const themeSettings = () => {
  return {
    palette: {
      // palette values for light mode
      primary: {
        dark: colorTokens.primary[700],
        main: colorTokens.primary[500],
        light: colorTokens.primary[50],
      },
      secondary: {
        dark: colorTokens.secondary[600],
        main: colorTokens.secondary[500],
        light: colorTokens.secondary[50],
      },
      neutral: {
        dark: colorTokens.grey[700],
        main: colorTokens.grey[500],
        mediumMain: colorTokens.grey[400],
        medium: colorTokens.grey[300],
        light: colorTokens.grey[100],
      },
      background: {
        default: colorTokens.grey[10],
        alt: colorTokens.grey[0],
      },
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  };
};
