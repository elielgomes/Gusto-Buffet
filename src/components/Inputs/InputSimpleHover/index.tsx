import { FormLabel, Input, Box, InputProps } from "@chakra-ui/react";
import React from "react";

interface IInput {
	label?: string;
	inputProps?: InputProps;
}

export const InputSimpleHover: React.FC<IInput> = ({ label, inputProps }) => (
		<Box>
			{label && (
				<FormLabel 
				color="secondary.400"
				textAlign={{ base: "center", sm: "center", lg: "start" }}
				>
					{label}
					</FormLabel>
			)
			}
			<Input
				variant="filled"
				outline="transparent"
				borderColor="transparent"
				_focus={{
					outline: "tertiary.50",
					borderColor: "tertiary.50",
					color: "secondary.50"
				}}
				{...inputProps}
			/>
		</Box>
	);
