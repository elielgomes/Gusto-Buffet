import { spacing } from "./spacing";
import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { fontSizes } from "./fontSizes";
import { components } from "./components";

export const theme = extendTheme(
  {
    colors,
    fontSizes,
    spacing,
    components,
    breakpoints: {
      "sm": "320px",
      "md": "425px",
      "lg": "768px",
      "xl": "1024px",
      "2xl": "1536px",
    },
  },
);
