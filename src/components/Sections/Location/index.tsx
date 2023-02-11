import { Box } from "@chakra-ui/react";
import React from "react";

export const Location: React.FC = () => (
	<Box w="100vw">
		<Box
			as="iframe"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.766909126407!2d-47.79789818506438!3d-21.20141658590506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf2db6a95fb9%3A0x1f4348c4fad524d!2sNova%20Singular!5e0!3m2!1spt-BR!2sbr!4v1675977850887!5m2!1spt-BR!2sbr"
			width="100%"
			height="450"
		/>
	</Box>
);

