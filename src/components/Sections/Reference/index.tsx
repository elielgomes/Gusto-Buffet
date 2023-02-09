import React from "react";

import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { ContainerSection } from "@/components/ContainerSection";
import strings from "@/resources/strings";
import { Italianno, Rubik } from "@next/font/google";

const sectionStrings = strings.sections.reference;

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


export const Reference: React.FC = () => {
	return (
		<Box
			width="100vw"
			height="300px"
			backgroundImage="url('assets/banner-1.jpg')"
			backgroundSize="cover"
			backgroundRepeat="no-repeat"
			backgroundPosition="center"
		>
			<ContainerSection
				containerProps={{
					height: "100%"
				}}
			>
				<Grid
					templateColumns={{
						base: "repeat(auto-fit, minmax(350px, 1fr))",
						lg: "repeat(auto-fit, minmax(250px, 1fr))",
						xl: "repeat(auto-fit, minmax(200px, 1fr))"
					}}
					justifyContent="center"
					alignItems="center"
					width="100%"
					height="100%"
				>
					{sectionStrings.map((item, index) => (
						<>
							<GridItem
								key={index}
								display="flex"
								alignItems="center"
								flexDirection="column"
							>
								<Heading
									color="tertiary.50"
									as="h4"
									fontSize={{ sm: "30px", lg: "60px" }}
									style={{
										fontFamily: italianno.style.fontFamily
									}}
								>
									{item.title}
								</Heading>
								<Heading
									as="p"
									color="primary.400"
									fontSize={{ sm: "16px", lg: "20px" }}
									textAlign="center"
									style={{
										fontFamily: rubik.style.fontFamily
									}}
								>
									{item.subTitle}
								</Heading>
							</GridItem>
						</>
					))
					}
				</Grid>
			</ContainerSection>
		</Box>
	)
}
