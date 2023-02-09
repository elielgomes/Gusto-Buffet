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
			}
		}
	}
})

export default strings;
