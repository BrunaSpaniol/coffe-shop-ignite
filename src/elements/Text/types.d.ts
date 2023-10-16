import { COLORS_DEFAULT } from "../../styles/themes/default";

export type TextVariant =
  | "textL"
  | "textM"
  | "textS"
  | "textXS"
  | "tag"
  | "buttonG"
  | "buttonM";

export type TextLineHeight = "text" | "button";

export type TextWeight = "regular" | "bold";

export type TextColor = keyof typeof COLORS_DEFAULT;
