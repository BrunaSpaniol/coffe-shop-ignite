export enum COLORS_DEFAULT {
  yellowDark = "#C47F17",
  yellowDefault = "#DBAC2C",
  yellowLight = "#F1E9C9",

  purpleDark = "#4B2995",
  purpleDefault = "#8047F8",
  purpleLight = "#EBE5F9",

  baseTitle = "#272221",
  baseSubtitle = "#403937",
  baseText = "#574F4D",
  baseLabel = "#8D8686",
  baseHover = "#D7D5D5",
  baseButton = "#E6E5E5",
  baseInput = "#EDEDED",
  baseCard = "#F3F2F2",

  background = "#FAFAFA",

  white = "#FFFFFF",
}

enum fontFamily {
  title = "Baloo 2",
  text = "Roboto",
}

const titleVariants = {
  titleXL: "3rem",
  titleL: "2rem",
  titleM: "1.5rem",
  titleS: "1.25rem",
  titleXS: "1.125rem",
};

const textVariants = {
  textL: "1.25rem",
  textM: "1rem",
  textS: "0.875rem",
  textXS: "0.75rem",
  tag: "0.625rem",
  buttonG: "0.75rem",
  buttonM: "0.875rem",
};

enum fontSize {
  titleExtraLarge = "3rem",
  titleLarge = "2rem",
  titleMedium = "1.5rem",
  titleSmall = "1.25rem",
  titleExtraSmall = "1.125rem",
  textExtraLarge = "1.25rem",
  textLarge = "1rem",
  textRegular = "0.875rem",
  textSmall = "0.75rem",
  textExtraSmall = "0.625rem",
  tag = "0.625rem",
  buttonG = "0.75rem",
  buttonM = "0.625rem",
}

enum fontWeight {
  extraBold = "800",
  bold = "700",
  regular = "400",
}

enum lineHeights {
  text = "130%",
  button = "160%",
}

export const defaultTheme = {
  colors: COLORS_DEFAULT,
  fontFamily: fontFamily,
  fontSize: fontSize,
  fontWeight: fontWeight,
  textVariants: textVariants,
  titleVariants: titleVariants,
  lineHeights: lineHeights,
};