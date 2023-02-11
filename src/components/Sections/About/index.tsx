import React from "react";
import {
	Image,
	Flex,
	Heading,
	Box
} from "@chakra-ui/react";
import { ContainerSection } from "@/components/ContainerSection";
import { rubik, italianno } from "@/theme/fonts";
import strings from "@/resources/strings";

const sectionStrings = strings.sections.about;

export const About: React.FC = () => (
	<ContainerSection>
		<Flex
			w="100%"
			py={{ sm: "30px", lg: "70px", xl: "100px" }}
			justifyContent={{ base: "center", sm: "center", lg: "space-around" }}
			flexDirection={{ base: "row", sm: "column", lg: "row" }}
			alignItems={{ base: "center", sm: "center", lg: "flex-start" }}
			rowGap={{ sm: "40px", lg: "0px" }}
		>
			<Box
				as="div"
				display="flex"
				width={{ sm: "100%", lg: "40%" }}
				alignItems="center"
				columnGap="5px"
				data-aos="fade-right"
				data-aos-duration="2000"
			>
				<Image
					src="assets/about-image-2.jpg"
					alt="image-about-2"
					width="46%"
					height="auto"
					marginTop="30px"
				/>
				<Image
					src="assets/about-image-1.jpg"
					alt="image-about-1"
					width="53%"
					height="auto"
				/>
			</Box>
			<Flex
				w={{ sm: "70%", lg: "50%" }}
				flexDirection="column"
			>
				<Heading
					as="h3"
					fontSize={{ sm: "45px", md: "50px", lg: "70px" }}
					fontWeight="light"
					textAlign={{ base: "center", sm: "center", lg: "start" }}
					style={{
						fontFamily: italianno.style.fontFamily,
					}}
				>
					{sectionStrings.title}
				</Heading>
				<Heading
					as="p"
					fontSize="18px"
					color="primary.300"
					fontWeight="light"
					textAlign="justify"
					lineHeight="30px"
					style={{
						fontFamily: rubik.style.fontFamily,
					}}
				>
					{strings.sections.about.description}
				</Heading>
			</Flex>
		</Flex>
	</ContainerSection >
);
