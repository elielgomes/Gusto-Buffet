import React from "react";

import { Image, Flex, Heading } from "@chakra-ui/react";
import { ContainerSection } from "@/components/ContainerSection";
import { Italianno, Rubik } from "@next/font/google";

import strings from "@/resources/strings";

const sectionStrings = strings.sections.about;

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


export const About: React.FC = () => {
	return (
		<ContainerSection
			containerProps={{
				paddingY: "100px",
			}}
		>
			<Flex
				w="100%"
				justifyContent={{ base: "center", sm: "center", lg: "space-around" }}
				flexDirection={{ base: "row", sm: "column", lg: "row" }}
				alignItems={{ base: "center", sm: "center", lg: "flex-start" }}
				rowGap={{ sm: "40px", lg: "0px" }}
			>
				<Flex
					width={{ sm: "70%", lg: "40%" }}
					alignItems="center"
					columnGap="5px"
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
				</Flex>
				<Flex
					w={{ sm: "70%", lg: "50%" }}
					flexDirection="column"
				>
					<Heading
						as="h3"
						fontSize="70px"
						fontWeight="light"
						textAlign={{ base: "center", sm: "center", lg: "start" }}
						style={{
							fontFamily: italianno.style.fontFamily
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
							fontFamily: rubik.style.fontFamily
						}}
					>
						{strings.sections.about.description}
					</Heading>
				</Flex>
			</Flex>
		</ContainerSection >
	)
}