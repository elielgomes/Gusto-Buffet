import React from "react";
import {
	Flex,
	Box,
	Heading, 
	Button,
} from "@chakra-ui/react";
import { ContainerSection } from "@/components/ContainerSection";
import strings from "@/resources/strings";
import { rubik, italianno } from "@/theme/fonts";
import "aos/dist/aos.css";

const sectionStrings = strings.sections.partner;

export const Partner: React.FC = () => (
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
			<Box
				as="div"
				display="flex"
				data-aos="fade-left"
				data-aos-duration="2000"
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
							fontFamily: italianno.style.fontFamily,
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
							fontFamily: rubik.style.fontFamily,
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
			</Box>
		</ContainerSection>
	</Box>
);

