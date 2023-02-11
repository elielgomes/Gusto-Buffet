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
import { GiHamburgerMenu } from 'react-icons/gi'
import Image from "next/image";
import { SocialMediaButtons } from "../SocialMediaButtons";
import { DrawerContainer } from "@/components";
import { rubik } from "@/theme/fonts";
import strings from "@/resources/strings";

export interface INavLinks {
	text: string;
	scroll: React.RefObject<HTMLElement>;
}

export interface IRefSections {
	mainRef: React.RefObject<HTMLElement>;
	aboutRef: React.RefObject<HTMLElement>;
	galeryRef: React.RefObject<HTMLElement>;
	teamRef: React.RefObject<HTMLElement>;
	contactRef: React.RefObject<HTMLElement>;
}

export interface IProps {
	navRefs: IRefSections;
}

const navStrings = strings.components.navbar;

export const Navbar: React.FC<IProps> = ({ navRefs }) => {

	const [isOpen, setIsOpen] = useState(false);

	const onGoSection = (section: React.RefObject<HTMLElement>) => {
		section.current?.scrollIntoView();
	};

	const Navlinks: INavLinks[] = [
		{
			text: navStrings.home,
			scroll: navRefs.mainRef,
		},
		{
			text: navStrings.about,
			scroll: navRefs.aboutRef,
		},
		{
			text: navStrings.galery,
			scroll: navRefs.galeryRef,
		},
		{
			text: navStrings.team,
			scroll: navRefs.teamRef,
		},
		{
			text: navStrings.contact,
			scroll: navRefs.contactRef,
		},
	];

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
						{Navlinks.map((item, index) => (
							<Link
								key={`${index}${item.text}`}
								onClick={() => onGoSection(item.scroll)}
								textDecoration="none"
								color="inherit"
								textTransform="uppercase"
								fontSize="xs"
								style={{
									fontFamily: rubik.style.fontFamily,
									textDecoration: "none",
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
										borderBottomColor: "tertiary.50",
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
					display={{ base: "initial", lg: "none" }}
					variant="default"
					onClick={() => setIsOpen(true)}
				>
					<Box
						as={GiHamburgerMenu}
						color="tertiary.50"
						size="40px"
					/>
				</Button>
			</Container>
			<DrawerContainer
				navRefs={navRefs}
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</Box>
	)
};
