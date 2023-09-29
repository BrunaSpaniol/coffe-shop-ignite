const COLORS_DEFAULT = {
  yellowDark: "#C47F17",
  yellowDefault: "#DBAC2C",
  yellowLight: "#F1E9C9",

  purpleDark: "#4B2995",
  purpleDefault: "#8047F8",
  purpleLight: "#EBE5F9",

  baseTitle: "#272221",
  baseSubtitle: "#403937",
  baseText: "#574F4D",
  baseLabel: "#8D8686",
  baseHover: "#D7D5D5",
  baseButton: "#E6E5E5",
  baseInput: "#EDEDED",
  baseCard: "#F3F2F2",

  background: "#FAFAFA",

  white: "#FFFFFF",
};

const fontFamily = {
  title: "Baloo 2",
  text: "Roboto",
};

const fontSize = {
  titleExtraLarge: "3rem",
  titleLarge: "2rem",
  titleMedium: "1.5rem",
  titleSmall: "1.25rem",
  titleExtraSmall: "1.125rem",
  textExtraLarge: "1.25",
  textLarge: "1rem",
  textRegular: "0.875rem",
  textSmall: "0.75rem",
  textExtraSmall: "0.625rem",
  tag: "0.6rem",
  buttonG: "0.75rem",
  buttonM: "0.625rem",
};

const fontWeight = {
  extraBold: "800",
  bold: "700",
  regular: "400",
};

export const defaultTheme = {
  colors: COLORS_DEFAULT,
  fonts: {
    fontFamily,
    fontSize,
    fontWeight,
  },
};
