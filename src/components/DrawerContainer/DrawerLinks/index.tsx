import React from "react";
import { Text, Box, Link } from "@chakra-ui/react";
import { Navlinks } from "@/components/Navbar/Navlinks";

import { Rubik } from "@next/font/google";

import { SocialMediaButtons } from "@/components";


interface IProps {
	onClose: () => void;
}

const rubik = Rubik({
	weight: '400',
	subsets: ['latin'],
	style: "normal",
})

export const DrawerLinks: React.FC<IProps> = ({ onClose }) => {

	const fontSizeBreakPoint = { base: "sm", lg: "md" };

	return (
		<>
			<Box
				display="flex"
				mt={2}
				flexDirection="column"
				alignItems="center"
			>
				{Navlinks.map((item) => (
					<Link
						key={item.text}
						href={item.path}
						onClick={onClose}
						display="flex"
						border="1px solid transparent"
						_hover={{
							textDecoration: "none",
							borderBottomColor: "tertiary.50"
						}}
						justifyContent="center"
						alignItems="center"
						mb={4}
					>
						<Text
							fontSize={fontSizeBreakPoint}
							color="primary.300"
							textTransform="uppercase"
							fontWeight="light"
							style={{
								fontFamily: rubik.style.fontFamily
							}}
						>
							{item.text}
						</Text>
					</Link>
				))}
				<SocialMediaButtons flexProps={{ pt: "40px" }} />
			</Box>
		</>
	);
};
