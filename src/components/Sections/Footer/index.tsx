import React from "react";

import { Box, Flex, Image } from "@chakra-ui/react";
import { ContainerSection } from "@/components/ContainerSection";

import strings from "@/resources/strings";
import { ContactInfo, Copyright, SocialMediaButtons } from "@/components";

const sectionStrings = strings.sections.footer

export const Footer: React.FC = () => {
	return (
		<>
			<Box
				width="100vw"
				py="30px"
				height="auto"
				bgColor="primary.500"
			>
				<ContainerSection containerProps={{
					height: "100%"
				}}>
					<Flex
						height="100%"
						justifyContent="space-around"
						alignItems="center"
						flexWrap="wrap"
						columnGap={{ sm: "40px", lg: "10px", xl: "0px" }}
						flexDirection={{ base: "column", md: "column", lg: "row" }}
					>
						<Box pb={{ base: "20px", lg: "50px" }}>
							<Image
								src="assets/gusto-brand.svg"
								width={{ sm: "120px", lg: "180px" }}
								height="auto"
								alt="gusto-brand"
							/>
						</Box>
						<Box>
							<ContactInfo />
						</Box>
						<Box
							justifyContent="center"
							pt={{ base: "40px", lg: "0px" }}
						>
							<SocialMediaButtons flexProps={{
								flexDirection: { sm: "row", md: "row", lg: "column" }
							}} />
						</Box>
					</Flex>

				</ContainerSection>
			</Box>
			<Copyright />
		</>
	)
}
