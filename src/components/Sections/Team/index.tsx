import React from "react";
import { Slider, ContainerSection } from "@/components";
import { Box, Flex, Heading } from "@chakra-ui/react";
import strings from "@/resources/strings";
import { Italianno, Rubik } from "@next/font/google";
import 'aos/dist/aos.css';

const sectionStrings = strings.sections.team;

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


export const Team: React.FC = () => {
	return (
		<>
			<Box
				height="300px"
				bgColor="primary.100"
				width="100vw"
			>
				<ContainerSection
					containerProps={{
						height: "100%"
					}}
				>
					<Flex
						height="100%"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
					>
						<Box
							as="div"
							data-aos="fade-down-left"
							data-aos-duration="2000"
						>
							<Heading
								as="h2"
								fontWeight="light"
								fontSize="70px"
								border="3px solid transparent"
								borderBottomColor="tertiary.50"
								style={{
									fontFamily: italianno.style.fontFamily
								}}
							>
								{sectionStrings.title}
							</Heading>
						</Box>
						<Heading
							as="h3"
							pt="10px"
							fontSize="18px"
							color="primary.300"
							textTransform="uppercase"
							style={{
								fontFamily: rubik.style.fontFamily
							}}
						>
							{sectionStrings.subTitle}
						</Heading>
					</Flex>
				</ContainerSection>
			</Box>
			<ContainerSection containerProps={{ py: "100px" }}>
				<Slider />
			</ContainerSection>
		</>
	)
}
