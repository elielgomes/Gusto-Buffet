import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Heading,
} from '@chakra-ui/react'

import strings from "@/resources/strings";

const componentStrings = strings.sections.contact;

export const DoubtsAccordion: React.FC = () => {
	return (
		<Box
			bgColor="primary.500"
			width={{ base: "100%", lg: "400px" }}
			borderRadius="10px"
			mt={10}
		>
			<Accordion allowToggle>
				{componentStrings.doubts.map((item) => (
					<>
						<AccordionItem key={item.title}>
							<Heading as="h2" color="secondary.300">
								<AccordionButton padding="20px">
									<Box as="span" flex='1' textAlign='left'>
										{item.title}
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</Heading>
							<AccordionPanel
								pb={4}
								color="secondary.50"
							>
								{item.description}
							</AccordionPanel>
						</AccordionItem>
					</>
				))}
			</Accordion>
		</Box>
	)
}