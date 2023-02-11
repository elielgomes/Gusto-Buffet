import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { SimpleForm } from "../Forms/SimpleForm";
import { ContainerSection } from "@/components";
import strings from "@/resources/strings";
import { rubik, italianno } from "@/theme/fonts";
import 'aos/dist/aos.css';

const componentStrings = strings.components.mainBanner;

export const MainBanner: React.FC = () => (
	<Box
		width="100vw"
		height={{
			base: "100vh",
			sm: "130vh",
			md: "110vh",
			lg: "100vh",
		}}
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
					pt={{ md: "70px" }}
				>
					<Heading
						as="h1"
						fontSize={{
							base: "30px",
							sm: "40px",
							md: "60px",
							lg: "90px",
						}}
						color="secondary.50"
						fontWeight="light"
						mt={{ base: "0px", sm: "90px", lg: "20px" }}
						py={{ base: "10px", sm: "20px", md: "30px" }}
						px={{ base: "5px", lg: "40px" }}
						borderY="1px solid"
						style={{
							fontFamily: italianno.style.fontFamily,
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
						style={{
							fontFamily: rubik.style.fontFamily,
						}}
					>
						{componentStrings.subTitle}
					</Heading>
				</Flex>
				<SimpleForm />
			</Flex>
		</ContainerSection>
	</Box>
);
