import React from "react";
import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import { ContainerSection } from "@/components/ContainerSection";
import strings from "@/resources/strings";
import { Italianno, Rubik } from "@next/font/google";

const sectionStrings = strings.sections.partner;

const italianno = Italianno({
	subsets: ["latin"],
	weight: "400",
	style: "normal"
})

const rubik = Rubik({
	subsets: ["latin"],
	weight: "400",
	style: "normal"
})

export const Partner: React.FC = () => {
	return (
		<Box
			width="100vw"
			height={{ sm: "250px", lg: "180px" }}
			bgColor="primary.500"
		>
			<ContainerSection
				containerProps={{
					height: "100%",
					paddingX: "20px"
				}}
			>
				<Flex
					w="100%"
					height="100%"
					justifyContent="space-around"
					alignItems="center"
					flexDirection={{ base: "row", sm: "column", lg: "row" }}
				>
					<Flex
						flexDirection="column"
						justifyContent={{ sm: "center", lg: "flex-start" }}
						alignItems={{ sm: "center", lg: "flex-start" }}
					>
						<Heading
							as="h2"
							fontSize={{ base: "45px", lg: "60px" }}
							pb="10px"
							fontWeight="light"
							color="tertiary.50"
							textAlign={{ sm: "center", lg: "start" }}
							style={{
								fontFamily: italianno.style.fontFamily
							}}
						>
							{sectionStrings.title}
						</Heading>
						<Heading
							as="p"
							w={{ sm: "80%", lg: "100%" }}
							fontSize="16px"
							fontWeight="light"
							color="secondary.300"
							textAlign={{ sm: "justify", lg: "start" }}
							style={{
								fontFamily: rubik.style.fontFamily
							}}
						>
							{sectionStrings.description}
						</Heading>
					</Flex>
					<Box>
						<Button variant="outline">
							{strings.actions.info}
						</Button>
					</Box>
				</Flex>
			</ContainerSection>
		</Box>
	)
}
