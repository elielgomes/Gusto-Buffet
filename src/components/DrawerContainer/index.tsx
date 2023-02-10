import React from "react";
import {
	Drawer,
	DrawerOverlay,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
} from "@chakra-ui/react";
import { DrawerLinks } from "./DrawerLinks";
import { IRefSections } from "../Navbar";

interface IProps {
	isOpen: boolean;
	onClose: () => void;
	navRefs: IRefSections;
}

export const DrawerContainer: React.FC<IProps> = ({ isOpen, onClose, navRefs }) => {

	return (
		<Drawer
			placement="right"
			isOpen={isOpen}
			onClose={onClose}
		>
			<DrawerOverlay />
			<DrawerContent
				background="primary.500"
				alignItems="center"
			>
				<DrawerCloseButton
					color="tertiary.50"
					_active={{
						outlineColor: "tertiary.50"
					}}
				/>
				<DrawerBody pt={20} textAlign="center">
					<DrawerLinks onClose={onClose} navRefs={navRefs} />
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
};
