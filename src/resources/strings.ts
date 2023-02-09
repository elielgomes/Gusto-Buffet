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
		},
		actions: {
			send: "Enviar"
		}
	}
})

export default strings;
