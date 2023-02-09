import React from "react";
import { Flex, Input, FormLabel, FormControl } from "@chakra-ui/react";
import { IMaskInput } from "react-imask";

import strings from "@/resources/strings";

const formStrings = strings.components.form;

export const SimpleForm: React.FC = () => {
	return (
		<FormControl
			display="flex"
			flexDirection="column"
			gap="10px"
			bgColor="primary.500"
			width="300px"
			height="400px"
			padding="20px"
		>
			<FormLabel color="secondary.400">{formStrings.name}</FormLabel>
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
			<FormLabel color="secondary.400">{formStrings.phone}</FormLabel>
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
			<FormLabel color="secondary.400">{formStrings.email}</FormLabel>
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
		</FormControl>
	)
}

