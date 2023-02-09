import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { CardChef } from "@/components";

interface IChef {
	name: string;
	image: string;
	description: string;
}

export const Slider: React.FC = () => {

	const chefs: IChef[] = [
		{
			name: "Paulo Marques",
			image: "assets/chef-1.jpg",
			description: "Especialista em Massas"
		},
		{
			name: "Mirella Fatinni",
			image: "assets/chef-2.jpg",
			description: "Especialista em Doces"
		},
		{
			name: "Henrique Capozzi",
			image: "assets/chef-3.jpg",
			description: "Especialista em Folheados"
		},
		{
			name: "Enzo Ferrari",
			image: "assets/chef-4.jpg",
			description: "Especialista em Molhos"
		},
	]

	return (
		<>
			<Swiper
				loopFillGroupWithBlank
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
			>
				{chefs.map((item, index) => (
					<>
						<SwiperSlide key={index}>
							<CardChef
								key={item.name}
								src={item.image}
								name={item.name}
								description={item.description}
							/>
						</SwiperSlide>
					</>
				))}
			</Swiper>
		</>
	);
};
