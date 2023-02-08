import { spacing } from "./spacing";
import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { fontSizes } from "./fontSizes";


export const theme = extendTheme(
	{
		colors,
		fontSizes,
		spacing,
	},
);
