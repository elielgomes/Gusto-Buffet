import strings from "@/resources/strings";
import {
	FormControl,
	FormLabel,
	VStack,
	Textarea,
	Button,
	Flex,
	Heading
} from "@chakra-ui/react";
import React from "react";
import { InputSimpleHover } from "@/components/Inputs/InputSimpleHover";

export const ContactForm: React.FC = () => {
	return (
		<>
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
					<InputSimpleHover label={strings.components.form.name} />
				</FormControl>

				<FormControl>
					<InputSimpleHover label={strings.components.form.email} />
				</FormControl>

				<FormControl>
					<FormLabel
						textAlign={{ base: "center", sm: "center", lg: "start" }}
						color="secondary.400"
					>
						{strings.components.form.message}
					</FormLabel>
					<Textarea
						variant="filled"
						rows={4}
						outline="transparent"
						borderColor="transparent"
						_focus={{
							outline: "tertiary.50",
							borderColor: "tertiary.50",
							color: "secondary.50"
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
		</>
	)
}
