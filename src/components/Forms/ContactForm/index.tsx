import React from "react";
import {
	FormControl,
	FormLabel,
	VStack,
	Textarea,
	Button,
	Flex,
} from "@chakra-ui/react";
import { InputSimpleHover } from "@/components/Inputs/InputSimpleHover";
import strings from "@/resources/strings";

const componentString = strings.components.form;

export const ContactForm: React.FC = () => (
	<VStack
		as="form"
		width="100%"
		padding="20px"
		borderRadius="10px"
		flexGrow={1}
		bgColor="primary.500"
		mt={10}
		spacing={4}
		alignItems="flex-start"
	>
		<FormControl>
			<InputSimpleHover
				label={componentString.name}
				inputProps={{
					placeholder: componentString.placeholders.name
				}}
			/>
		</FormControl>

		<FormControl>
			<InputSimpleHover
				label={componentString.email}
				inputProps={{
					placeholder: componentString.placeholders.email
				}}
			/>
		</FormControl>

		<FormControl>
			<FormLabel
				textAlign={{ base: "center", sm: "center", lg: "start" }}
				color="secondary.400"
			>
				{componentString.message}
			</FormLabel>
			<Textarea
				placeholder={componentString.placeholders.message}
				variant="filled"
				rows={4}
				outline="transparent"
				borderColor="transparent"
				_focus={{
					outline: "tertiary.50",
					borderColor: "tertiary.50",
					color: "secondary.50",
				}}
			/>
		</FormControl>
		<Flex
			w="100%"
			justifyContent="center">
			<Button
				variant="outline"
				size="lg"
				colorScheme="teal"
			>
				{strings.actions.send}
			</Button>
		</Flex>
	</VStack>
);

