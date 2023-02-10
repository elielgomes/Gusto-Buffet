import React from "react";

import { ContainerSection } from "../ContainerSection";
import { Box, Heading } from "@chakra-ui/react";

import strings from "@/resources/strings";

const componentStrings = strings.sections.footer;

export const Copyright: React.FC = () => {
	return (
		<Box
			bgColor="primary.500"
		>
			<ContainerSection>
				<Heading
					as="p"
					color="primary.400"
					fontSize={{ sm: "12px", md: "14px", lg: "16px" }}
					textAlign="center"
					py="20px"
					border="1px solid transparent"
					borderTopColor="tertiary.50"
				>
					{componentStrings.copyright}
				</Heading>
			</ContainerSection>
		</Box>
	)
}
