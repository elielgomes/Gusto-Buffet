import React, { useState } from "react";
import {
	Box,
	Flex,
	UnorderedList,
	Container,
	ListItem,
	Link,
	Button
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi"
import Image from "next/image";

import { Navlinks } from "./Navlinks";

import { SocialMediaButtons } from "../SocialMediaButtons";
import { DrawerContainer } from "@/components";
import { Rubik } from "@next/font/google";

const rubik = Rubik({
	weight: '400',
	subsets: ['latin'],
	style: "normal",
})

export const Navbar: React.FC = () => {

	const [isOpen, setIsOpen] = useState(false);

	return (
		<Box
			as="header"
			background="primary.500"
			height="69px"
			width="100%"
			position="fixed"
			zIndex={98}
		>
			<Container
				as="nav"
				maxWidth="1500px"
				height="100%"
				display="flex"
				justifyContent={{ base: "space-between", lg: "space-around" }}
				alignItems={{ base: "center", lg: "normal" }}
			>
				<Flex height="100%" alignItems="center">
					<Image
						src="assets/gusto-brand.svg"
						width={100}
						height={60}
						alt="gusto-brand"
					/>
				</Flex>
				<Box display={{ base: "flex", sm: "none", lg: "flex" }}>
					<UnorderedList
						styleType="none"
						display="flex"
						height="100%"
						gap="30px"
						paddingRight="30px"
					>
						{Navlinks.map((item) => (
							<Link
								key={item.text}
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
							</Link>
						))}
					</UnorderedList>
					<SocialMediaButtons />
				</Box>
				<Button
					variant="default"
					onClick={() => setIsOpen(true)}
				>
					<Box
						as={GiHamburgerMenu}
						display={{ base: "initial", lg: "none" }}
						color="tertiary.50"
						size="40px"
					/>
				</Button>
			</Container>
			<DrawerContainer
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</Box>
	)
}