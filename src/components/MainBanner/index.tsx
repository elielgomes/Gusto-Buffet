import React from "react";
import { Box } from "@chakra-ui/react";
import { SimpleForm } from "../Forms/SimpleForm";

export const MainBanner: React.FC = () => {
	return (
		<Box
			width="100vw"
			height="100vh"
			backgroundImage="url('assets/main-banner.jpg')"
			backgroundSize="cover"
			backgroundRepeat="no-repeat"
			backgroundPosition="center"
		>
			<SimpleForm />
		</Box>
	)
}