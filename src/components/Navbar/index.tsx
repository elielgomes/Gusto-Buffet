import React from "react";
import {
	Box,
	UnorderedList,
	Container,
	ListItem,
	Link as ChakraLink
} from "@chakra-ui/react";

import { Navlinks } from "./Navlinks";
import Link from "next/link";

import { Rubik } from "@next/font/google";

export const Navbar: React.FC = () => {
	return (
		<Box
			as="header"
			background="primary.500"
			height="69px"
			width="100%"
		>
			<Container as="nav">
				<UnorderedList styleType="none" display="flex">
					{Navlinks.map((item) => (
						<ListItem key={item.text} color="secondary.50">
							<ChakraLink
								as={Link}
								href={item.path}
								textDecoration="none"
								color="inherit"
							>
								{item.text}
							</ChakraLink>
						</ListItem>
					))
					}
				</UnorderedList>
			</Container>
		</Box>
	)
}