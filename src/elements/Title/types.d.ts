import { COLORS_DEFAULT } from "../../styles/themes/default";

export type TitleVariant =
  | "titleXL"
  | "titleL"
  | "titleM"
  | "titleS"
  | "titleXS";

export type TitleWeight = "extraBold" | "bold";

export type TextColor = keyof typeof COLORS_DEFAULT;
