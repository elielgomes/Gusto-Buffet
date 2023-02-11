import React from "react";
import {
	Flex,
	Heading,
	ListItem,
	List,
	Box,
	ListIcon,
	Link,
} from "@chakra-ui/react";
import { MdLocationPin, MdEmail, MdPhone } from "react-icons/md";
import strings from "@/resources/strings";

const stringsComponent = strings.sections.footer;

export const ContactInfo: React.FC = () => (
		<Flex>
			<Box>
				<Heading
					as="h3"
					color="secondary.200"
					fontSize="30px"
					border="2px solid transparent"
					borderBottomColor="tertiary.50"
					pb="10px"
				>
					{strings.sections.contact.title}
				</Heading>
				<List
					pt="10px"
					display="flex"
					gap="10px"
					flexDirection="column"
				>

					<Link
						href="https://goo.gl/maps/73hHwnC8bBYfZ9rP7"
						color="secondary.300"
						target="_blank"
						_hover={{
							color: "secondary.50"
						}}
					>
						<ListItem color="inherit">
							<ListIcon as={MdLocationPin} color="tertiary.50" />
							{stringsComponent.address.value}
						</ListItem>
					</Link>

					<Link
						href="mailto:contato@gusto.com"
						color="secondary.300"
						target="_blank"
						_hover={{
							color: "secondary.50"
						}}
					>
						<ListItem color="inherit">
							<ListIcon as={MdEmail} color="tertiary.50" />
							{stringsComponent.email.value}
						</ListItem>
					</Link>

					<Link
						href="tel:+5516990000000"
						color="secondary.300"
						target="_blank"
						_hover={{
							color: "secondary.50"
						}}
					>
						<ListItem color="inherit">
							<ListIcon as={MdPhone} color="tertiary.50" />
							{stringsComponent.phone.value}
						</ListItem>
					</Link>
				</List>
			</Box>
		</Flex>
);
