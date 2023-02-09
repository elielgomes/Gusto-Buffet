import React from "react";
import { ContainerSection } from "@/components/ContainerSection";
import { Box, Flex, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import strings from "@/resources/strings";
import { Italianno, Rubik } from "@next/font/google";

const sectionStrings = strings.sections.galery;

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

const imagesGalery = [
	{
		alt: "galery-1",
		src: "assets/galery-1.jpg"
	},
	{
		alt: "galery-2",
		src: "assets/galery-2.jpg"
	},
	{
		alt: "galery-3",
		src: "assets/galery-3.jpg"
	},
	{
		alt: "galery-4",
		src: "assets/galery-4.jpg"
	},
	{
		alt: "galery-5",
		src: "assets/galery-5.jpg"
	},
	{
		alt: "galery-6",
		src: "assets/galery-6.jpg"
	},
	{
		alt: "galery-7",
		src: "assets/galery-7.jpg"
	},
	{
		alt: "galery-8",
		src: "assets/galery-8.jpg"
	}
]

export const Galery: React.FC = () => {
	return (
		<Box width="100vw" bgColor="secondary.50">
			<ContainerSection>
				<Flex
					width="100%"
					height="300px"
					bgColor="secondary.50"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
				>
					<Heading
						as="h2"
						fontSize="70px"
						fontWeight="light"
						borderBottom="3px solid"
						borderColor="tertiary.50"
						style={{
							fontFamily: italianno.style.fontFamily
						}}
					>
						{sectionStrings.title}
					</Heading>
					<Heading
						as="h3"
						pt="20px"
						fontSize="20px"
						fontWeight="light"
						color="primary.300"
						style={{
							fontFamily: rubik.style.fontFamily
						}}
					>
						{sectionStrings.subTitle}
					</Heading>
				</Flex>
			</ContainerSection>
			<Flex
				width="100vw"
				flexWrap="wrap"
			>
				{imagesGalery.map((item) => (
					<>
						<Box w={{ base: "50%", lg: "25%" }}>
							<Image
								alt={item.alt}
								src={item.src}
								width="100%"
								height="auto"
							/>
						</Box>
					</>
				))}
			</Flex>
		</Box>
	)
}
