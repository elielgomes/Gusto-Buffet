import React from "react";
import { Flex, Link, Box, FlexProps } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa"


interface IProps {
	flexProps?: FlexProps;
}

export const SocialMediaButtons: React.FC<IProps> = ({ flexProps }) => {

	const socialMediaButtons = [
		{
			icon: FaFacebook,
			href: "#"
		},
		{
			icon: FaInstagram,
			href: "#"
		},
		{
			icon: FaLinkedinIn,
			href: "#"
		}
	];

	return (
		<Flex
			gap="20px"
			alignItems="center"
			height="100%"
			{...flexProps}
		>
			{socialMediaButtons.map((item) => (
				<Link key={item.href} href="#">
					<Box
						as={item.icon}
						color="primary.400"
						size="30px"
						transition="all 0.2s"
						_hover={{
							transform: "scale(1.1)",
							color: "primary.300"
						}}
					/>
				</Link>
			))}
		</Flex>
	)
}