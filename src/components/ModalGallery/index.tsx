import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { AiOutlineCloseCircle } from "react-icons/ai";
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
					bgColor="primary.900"
					display="flex"
					alignItems="center"
					justifyContent="center"
					width="100vw"
					height="100vh"
				>

					<Box
						width="calc(100vw - 30%)"
						height="calc(100vh - 30%)"
						display="flex"
						alignItems="center"
						justifyContent="center"
						position="relative"
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
							zIndex={999}
							_hover={{
								opacity: "1",
							}}
						/>
						<Box
							as={CiCircleChevLeft}
							size="30px"
							left="-50px"
							onClick={prevSlide}
							position="absolute"
							cursor="pointer"
							opacity="0.6"
							color="tertiary.50"
							zIndex={999}
							_hover={{
								opacity: "1",
							}}
						/>
						<Box
							as={CiCircleChevRight}
							size="30px"
							right="-50px"
							onClick={nextSlide}
							position="absolute"
							cursor="pointer"
							opacity="0.6"
							color="tertiary.50"
							zIndex={999}
							_hover={{
								opacity: "1",
							}}
						/>
						<Image
							src={galleryImages[slideNumber].src}
							alt={galleryImages[slideNumber].alt}
							width="800px"
							height="auto"
							pointerEvents="none"
							userSelect="none"
						/>
					</Box>
				</Box>
			}
		</>
	)
};
