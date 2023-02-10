import React from "react"
import strings from "@/resources/strings";

interface INavLinks {
	text: string;
	path: string;
}

const navStrings = strings.components.navbar

export const Navlinks: INavLinks[] = [
	{
		text: navStrings.home,
		path: "#home"
	},
	{
		text: navStrings.about,
		path: "#about"
	},
	{
		text: navStrings.galery,
		path: "#galery"
	},
	{
		text: navStrings.team,
		path: "#team"
	},
	{
		text: navStrings.contact,
		path: "#contact"
	}
]