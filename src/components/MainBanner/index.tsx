import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { SimpleForm } from "../Forms/SimpleForm";
import { ContainerSection } from "@/components";
import strings from "@/resources/strings";

import { Italianno, Rubik } from "@next/font/google";

import 'aos/dist/aos.css';

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

const componentStrings = strings.components.mainBanner;

export const MainBanner: React.FC = () => {

	return (
		<Box
			width="100vw"
			height="100vh"
			backgroundImage="url('assets/main-banner.jpg')"
			backgroundSize="cover"
			backgroundRepeat="no-repeat"
			backgroundPosition="center"
		>
			<ContainerSection
				containerProps={{
					height: "100%",
				}}
			>
				<Flex
					height="100%"
					width="100%"
					justifyContent="space-around"
					alignItems="center"
					flexDirection={{ base: "column", lg: "column", xl: "row" }}
				>
					<Flex
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						pt={{ md: "70px", lg: "90px" }}
					>
						<Heading
							as="h1"
							fontSize={{ base: "30px", sm: "40px", md: "60px", lg: "90px", xl: "70px", "2xl": "90px" }}
							color="secondary.50"
							fontWeight="light"
							py={{ base: "10px", sm: "20px", md: "30px", lg: "30px" }}
							px={{ base: "5px", lg: "40px" }}
							borderY="1px solid"
							style={{
								fontFamily: italianno.style.fontFamily
							}}
						>
							{componentStrings.title}
						</Heading>
						<Heading
							as="h2"
							fontSize={{ base: "16px", md: "18px", lg: "20px" }}
							pt="40px"
							color="secondary.100"
							fontWeight="light"
							letterSpacing="1px"
							fontFamily="Roboto"
							style={{
								fontFamily: rubik.style.fontFamily
							}}
						>
							{componentStrings.subTitle}
						</Heading>
					</Flex>
					<SimpleForm />
				</Flex>
			</ContainerSection>
		</Box>
	)
}