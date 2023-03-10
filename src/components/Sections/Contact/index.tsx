import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { ContactForm } from "@/components/Forms/ContactForm";
import { DoubtsAccordion, ContainerSection } from "@/components";
import strings from "@/resources/strings";

const sectionStrings = strings.sections.contact;

export const Contact: React.FC = () => (
	<Box
		width="100vw"
		height="auto"
		pt="125px"
		pb="50px"
		backgroundImage="url('assets/banner-2.jpg')"
		backgroundSize="cover"
		backgroundRepeat="no-repeat"
		backgroundPosition="center"
	>
		<ContainerSection>
			<Flex
				flexDirection={{ base: "column", lg: "row" }}
				justifyContent="space-around"
				alignItems="flex-start"
				rowGap="30px"
			>
				<Flex
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					width={{ base: "100%", lg: "60%" }}
					px={{ sm: "0px", lg: "20px" }}
				>
					<Heading
						as="h3"
						color="secondary.50"
						fontSize="50px"
						pb="15px"
						border="2px solid transparent"
						borderBottomColor="tertiary.50"

					>
						{sectionStrings.title}
					</Heading>
					<ContactForm />
				</Flex>
				<Flex
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					width={{ base: "100%", lg: "auto" }}
					px={{ sm: "0px", lg: "20px" }}
				>
					<Heading
						as="h3"
						color="secondary.50"
						fontSize="50px"
						pb="15px"
						border="2px solid transparent"
						borderBottomColor="tertiary.50"

					>
						{sectionStrings.frequentlyDoubts}
					</Heading>
					<DoubtsAccordion />
				</Flex>
			</Flex>
		</ContainerSection>
	</Box>
);

