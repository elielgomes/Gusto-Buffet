import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { CardChef } from "@/components";
import "swiper/css";
import "swiper/css/pagination";

interface IChef {
	name: string;
	image: string;
	description: string;
}

const chefs: IChef[] = [
	{
		name: "Paulo Marques",
		image: "assets/chef-1.jpg",
		description: "Especialista em Massas",
	},
	{
		name: "Mirella Fatinni",
		image: "assets/chef-2.jpg",
		description: "Especialista em Doces",
	},
	{
		name: "Henrique Capozzi",
		image: "assets/chef-3.jpg",
		description: "Especialista em Folheados",
	},
	{
		name: "Enzo Ferrari",
		image: "assets/chef-4.jpg",
		description: "Especialista em Molhos",
	},
];

export const Slider: React.FC = () => (
	<Swiper
		loop
		breakpoints={{
			640: {
				slidesPerView: 2,
				spaceBetween: 0,
				slidesPerGroup: 2,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 0,
				slidesPerGroup: 3,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 0,
				slidesPerGroup: 4,
			},
			1240: {
				slidesPerView: 4,
				spaceBetween: 0,
				slidesPerGroup: 4,
			},
		}}
		className="mySwiper"
		modules={[Pagination]}
	>
		{chefs.map((item) => (
			<SwiperSlide key={item.image} >
				<CardChef
					src={item.image}
					name={item.name}
					description={item.description}
				/>
			</SwiperSlide>))}
	</Swiper>
);

