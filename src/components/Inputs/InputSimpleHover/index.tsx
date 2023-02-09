import { FormLabel, Input, Box } from "@chakra-ui/react";
import React from "react";

interface IInput {
	label?: string;
}

export const InputSimpleHover: React.FC<IInput> = ({ label }) => {

	return (
		<Box>
			{label && (
				<FormLabel color="secondary.400">{label}</FormLabel>
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
			/>
		</Box>
	)
}