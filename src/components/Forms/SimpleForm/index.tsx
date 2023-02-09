import React from "react";
import { Flex, Button, FormControl, Heading } from "@chakra-ui/react";
import { InputSimpleHover } from "@/components/Inputs/InputSimpleHover";
import strings from "@/resources/strings";
import { Rubik } from "@next/font/google";

const formStrings = strings.components.form;

const rubik = Rubik({
	subsets: ["latin"],
	weight: "400",
	style: "normal"
})


export const SimpleForm: React.FC = () => {

	return (
		<FormControl
			display="flex"
			flexDirection="column"
			gap="10px"
			bgColor="primary.500"
			width={{base: "280px",lg: "280px", xl:"300px"}}
			height="430px"
			padding="20px"
			borderRadius="8px"
		>
			<Heading
				as="h3"
				color="tertiary.50"
				fontWeight="light"
				fontSize={{base:"16px",lg: "16px", xl:"20px"}}
				textAlign="center"
				pb="10px"
				style={{
					fontFamily: rubik.style.fontFamily
				}}
			>
				{strings.components.mainBanner.formTitle}
			</Heading>
			<InputSimpleHover label={formStrings.name} />
			<InputSimpleHover label={formStrings.phone} />
			<InputSimpleHover label={formStrings.email} />
			<Flex
				width="100%"
				justifyContent="center"
				pt="15px"
			>
				<Button
					variant="solid"
					width="100%"
				>
					{strings.actions.send}
				</Button>
			</Flex>
		</FormControl>
	)
}

