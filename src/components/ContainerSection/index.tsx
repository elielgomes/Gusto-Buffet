import React from "react";
import { Container, ContainerProps } from "@chakra-ui/react";

interface IContainer {
	children: React.ReactNode;
	containerProps?: ContainerProps;
}

export const ContainerSection: React.FC<IContainer> = ({ children, containerProps }) => {
	return (
		<Container
			maxWidth="1500px"
			{...containerProps}
		>
			{children}
		</Container>
	)
}