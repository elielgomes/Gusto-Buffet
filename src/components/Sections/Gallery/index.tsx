import React, { useState } from "react";
import { ContainerSection, ModalGallery } from "@/components";
import {
	Box,
	Flex,
	Heading,
	Image,
} from "@chakra-ui/react";
import strings from "@/resources/strings";
import { rubik, italianno } from "@/theme/fonts";
import "aos/dist/aos.css";

export interface IGalleryImage {
	alt: string;
	src: string;
}

const sectionStrings = strings.sections.galery;

const galleryImages: IGalleryImage[] = [
	{
		alt: "galery-1",
		src: "assets/galery-1.jpg",
	},
	{
		alt: "galery-2",
		src: "assets/galery-2.jpg",
	},
	{
		alt: "galery-3",
		src: "assets/galery-3.jpg",
	},
	{
		alt: "galery-4",
		src: "assets/galery-4.jpg",
	},
	{
		alt: "galery-5",
		src: "assets/galery-5.jpg",
	},
	{
		alt: "galery-6",
		src: "assets/galery-6.jpg",
	},
	{
		alt: "galery-7",
		src: "assets/galery-7.jpg",
	},
	{
		alt: "galery-8",
		src: "assets/galery-8.jpg",
	}
];

export const Gallery: React.FC = () => {

	const [slideNumber, setSlideNumber] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenModal = (index: number) => {
		setSlideNumber(index);
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	const prevSlide = () => {
		slideNumber === 0
			? setSlideNumber(galleryImages.length - 1)
			: setSlideNumber(slideNumber - 1)
	};

	const nextSlide = () => {
		slideNumber + 1 === galleryImages.length
			? setSlideNumber(0)
			: setSlideNumber(slideNumber + 1)
	};

	return (
		<Box
			width="100vw"
			bgColor="secondary.50"
			pt="50px"
		>
			<ModalGallery
				isOpen={isOpen}
				galleryImages={galleryImages}
				handleCloseModal={handleCloseModal}
				nextSlide={nextSlide}
				prevSlide={prevSlide}
				slideNumber={slideNumber}
			/>
			<ContainerSection>
				<Flex
					width="100%"
					height="300px"
					bgColor="secondary.50"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
				>
					<Box
						as="div"
						data-aos="fade-down-right"
						data-aos-duration="2000"
					>
						<Heading
							as="h2"
							fontSize="70px"
							fontWeight="light"
							borderBottom="3px solid"
							borderColor="tertiary.50"
							style={{
								fontFamily: italianno.style.fontFamily,
							}}
						>
							{sectionStrings.title}
						</Heading>
					</Box>
					<Heading
						as="h3"
						pt="20px"
						fontSize="20px"
						fontWeight="light"
						color="primary.300"
						style={{
							fontFamily: rubik.style.fontFamily,
						}}
					>
						{sectionStrings.subTitle}
					</Heading>
				</Flex>
			</ContainerSection>
			<Flex
				width="100vw"
				flexWrap="wrap"
			>
				{galleryImages.map((item, index) => (
					<Box
						key={index}
						w={{ base: "50%", lg: "25%" }}
						transition="all 0.2s"
						cursor="pointer"
						_hover={{
							opacity: "0.6"
						}}
						onClick={() => handleOpenModal(index)}
					>
						<Image
							alt={item.alt}
							src={item.src}
							width="100%"
							height="auto"
						/>
					</Box>))}
			</Flex>
		</Box>
	)
};
