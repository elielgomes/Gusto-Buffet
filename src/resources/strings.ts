import LocalizedStrings from "localized-strings";

const strings = new LocalizedStrings({
	ptBR: {
		components: {
			navbar: {
				home: "Home",
				about: "Sobre",
				galery: "Galeria",
				news: "Noticias",
				contact: "Contato"
			},
			form: {
				name: "Nome",
				phone: "Telefone",
				email: "E-mail",
				message: "Mensagem",
			},
			mainBanner: {
				title: "Elegância e Sofisticação",
				subTitle: "Culinária italiana de alta classe",
				formTitle: "Peça já seu orçamento!"
			}
		},
		sections: {
			about: {
				title: "Nossa História",
				description: "Fundado em 1995 em Florença na Itália pela familia Rizzo o Buffet Gusto é especialista em comidas típicas italianas, trazendo para seus clientes o melhor da culinária de alta classe, prezando qualidade nos produtos e atendimento. "
			},
			partner: {
				title: "Seja um parceiro",
				description: "Modelo de negócio prático e enxuto, invista na melhor franquia de culinária italiana do Brasil.",
			},
			reference: [
				{
					title: "28",
					subTitle: "Anos de Experiência",
				},
				{
					title: "4800",
					subTitle: "Horas de Cozinha"
				},
				{
					title: "6300",
					subTitle: "Clientes Felizes"
				},
				{
					title: "16",
					subTitle: "Chefes Qualificados",
				}
			]
		},
		actions: {
			send: "Enviar",
			info: "Saiba Mais"
		}
	}
})

export default strings;
