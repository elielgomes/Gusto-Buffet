import React from "react";
import { Flex, Image, Heading } from "@chakra-ui/react";

interface ICardChef {
	name: string;
	src: string;
	description: string;
}

export const CardChef: React.FC<ICardChef> = ({ name, src, description }) => (
	<Flex
		margin="0 auto"
		w="280px"
		h="auto"
		transition="all 0.2s"
		flexDirection="column"
		_hover={{
			"img.chef-image": {
				transform: "scale(1.1)",
			}
		}}
	>
		<Flex overflow="hidden">
			<Image
				className="chef-image"
				alt={name}
				src={src}
				w="100%"
				transition="all 0.2s"
			/>
		</Flex>
		<Flex
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			py="10px"
		>
			<Heading
				as="h4"
				fontSize="18px"
				textTransform="uppercase"
				fontFamily="serif"
				fontWeight="light"
				pb="5px"
				color="primary.400"
				transition="all 0.2s"
				borderBottom="2px solid transparent"
				_hover={{
					borderColor: "tertiary.50",
				}}
			>
				{name}
			</Heading>
			<Heading
				as="p"
				fontSize="14px"
				pt="5px"
				color="primary.400"
			>
				{description}
			</Heading>
		</Flex>
	</Flex>
);
