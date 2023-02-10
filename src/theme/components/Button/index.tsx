import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
	defaultProps: {
		variant: "solid",
	},
	variants: {
		solid: {
			textColor: "secondary.50",
			border: "1px solid",
			borderColor: "transparent",
			bgColor: "tertiary.50",
			textTransform: "uppercase",
			fontFamily: "sans-serif",
			fontWeight: "light",
			fontSize: "sm",
			letterSpacing: "3px",
			transition: "all 0.2s",
			_hover: {
				bgColor: "transparent",
				textColor: "tertiary.50",
				borderColor: "tertiary.50"
			},
			_active: {
				bgColor: "tertiary.50",
				textColor: "secondary.50"
			}
		},
		outline: {
			textColor: "tertiary.50",
			borderColor: "tertiary.50",
			bgColor: "transparent",
			textTransform: "uppercase",
			fontFamily: "sans-serif",
			fontWeight: "light",
			fontSize: "sm",
			letterSpacing: "3px",
			transition: "all 0.2s",
			_hover: {
				bgColor: "tertiary.50",
				textColor: "secondary.50"
			}
		},
		default: {
			bgColor: "transparent",
			outline: "none",
			border: "none",
		}
	}
};
