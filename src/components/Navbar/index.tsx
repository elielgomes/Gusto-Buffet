import React from "react";
import {
	Box,
	Flex,
	UnorderedList,
	Container,
	ListItem,
	Link as ChakraLink,
} from "@chakra-ui/react";

import Image from "next/image";

import { Navlinks } from "./Navlinks";
import Link from "next/link";

import { Rubik } from "@next/font/google";
import { SocialMediaButtons } from "../SocialMediaButtons";

const rubik = Rubik({
	weight: '400',
	subsets: ['latin'],
	style: "normal",
})

export const Navbar: React.FC = () => {
	return (
		<Box
			as="header"
			background="primary.500"
			height="69px"
			width="100%"
			// position="fixed"
		>
			<Container
				as="nav"
				maxWidth="1500px"
				height="100%"
				display="flex"
				justifyContent="space-around"
			>
				<Flex height="100%" alignItems="center">
					<Image
						src="assets/gusto-brand.svg"
						width={100}
						height={60}
						alt="gusto-brand"
					/>
				</Flex>
				<Flex>
					<UnorderedList
						styleType="none"
						display="flex"
						height="100%"
						gap="30px"
						paddingRight="30px"
					>
						{Navlinks.map((item) => (
							<ChakraLink
								key={item.text}
								as={Link}
								href={item.path}
								textDecoration="none"
								color="inherit"
								textTransform="uppercase"
								fontSize="xs"
								style={{
									fontFamily: rubik.style.fontFamily,
									textDecoration: "none"
								}}
							>
								<ListItem
									display="flex"
									alignItems="center"
									height="100%"
									color="primary.400"
									borderBottom="3px solid transparent"
									transition="all 0.2s"
									_hover={{
										color: "primary.300",
										borderBottomColor: "tertiary.50"
									}}
								>
									{item.text}
								</ListItem>
							</ChakraLink>
						))
						}
					</UnorderedList>
					<SocialMediaButtons />
				</Flex>
			</Container>
		</Box>
	)
}