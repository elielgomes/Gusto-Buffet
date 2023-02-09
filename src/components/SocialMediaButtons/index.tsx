import React from "react";
import { Flex, Link, Box } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa"

export const SocialMediaButtons: React.FC = () => {

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