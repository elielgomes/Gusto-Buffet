import React from "react";
import { Box, Image } from "@chakra-ui/react";
import {
	CiCircleChevLeft,
	CiCircleChevRight,
} from "react-icons/ci"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { ContainerSection } from "../ContainerSection";

import { IGalleryImage } from "../Sections/Gallery";

interface IProps {
	isOpen: boolean;
	handleCloseModal: () => void;
	prevSlide: () => void;
	nextSlide: () => void;
	slideNumber: number;
	galleryImages: IGalleryImage[];
}

export const ModalGallery: React.FC<IProps> = (props) => {

	const {
		isOpen,
		handleCloseModal,
		nextSlide,
		prevSlide,
		slideNumber,
		galleryImages
	} = props;

	return (
		<>
			{isOpen &&
				<Box
					position="fixed"
					top="0px"
					bottom="0px"
					left="0px"
					right="0px"
					zIndex="999"
					bgColor="#000"
					display="flex"
					alignItems="center"
					justifyContent="center"
					width="100%"
					height="100%"
				>
						<Box
							as={AiOutlineCloseCircle}
							size="30px"
							top="40px"
							right="40px"
							onClick={handleCloseModal}
							position="fixed"
							cursor="pointer"
							opacity="0.6"
							color="tertiary.50"
							zIndex="9999"
							_hover={{
								opacity: "1"
							}}
						/>
						<Box
							as={CiCircleChevLeft}
							size="30px"
							left="40px"
							onClick={prevSlide}
							position="fixed"
							cursor="pointer"
							opacity="0.6"
							color="#fff"
							zIndex="9999"
							_hover={{
								opacity: "1"
							}}
						/>
						<Box
							as={CiCircleChevRight}
							size="30px"
							right="40px"
							onClick={nextSlide}
							position="fixed"
							cursor="pointer"
							opacity="0.6"
							color="#fff"
							zIndex="9999"
							_hover={{
								opacity: "1"
							}}
						/>
						<Box
							width="calc(100% - 40px)"
							height="calc(100% - 40px)"
							display="flex"
							alignItems="center"
							justifyContent="center"
						>
							<Image
								src={galleryImages[slideNumber].src}
								alt=''
								maxWidth="100%"
								maxHeight="100%"
								pointerEvents="none"
								userSelect="none"
							/>
						</Box>
				</Box>
			}
		</>
	)
}