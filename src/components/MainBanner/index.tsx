import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { SimpleForm } from "../Forms/SimpleForm";
import { ContainerSection } from "@/components";
import strings from "@/resources/strings";

import { Italianno, Rubik } from "@next/font/google";

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
					display: "flex",
					height: "100%",
					justifyContent: "space-around",
					alignItems: "center",	
				}}
			>
				<Flex
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
				>
					<Heading
						as="h1"
						fontSize="90px"
						color="secondary.50"
						fontWeight="light"
						p="40px"
						borderY="1px solid"
						style={{
							fontFamily: italianno.style.fontFamily
						}}
					>
						{componentStrings.title}
					</Heading>
					<Heading
						as="h2"
						fontSize="20px"
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
			</ContainerSection>
		</Box>
	)
}