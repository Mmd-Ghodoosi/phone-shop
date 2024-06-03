import { createTheme } from "@mui/material/styles";

export const DarkTheme = createTheme({
  direction: "rtl",
  palette: { mode: "dark" },
  typography: {
    fontFamily: "vazir",
    body1: {
      fontSize: 17,
      fontWeight: "400",
    },
    body2: {
      fontWeight: "500",
    },
  },
});
export const LightTheme = createTheme({
  direction: "rtl",
  palette: { mode: "light" },

  typography: {
    fontFamily: "vazir",

    body1: {
      fontSize: 17,
      fontWeight: "400",
    },
    body2: {
      fontWeight: "500",
    },
  },
});
