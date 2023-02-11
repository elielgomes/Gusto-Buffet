import LocalizedStrings from "localized-strings";

const strings = new LocalizedStrings({
	ptBR: {
		components: {
			navbar: {
				home: "Home",
				about: "Sobre",
				galery: "Galeria",
				team: "Equipe",
				contact: "Contato"
			},
			form: {
				name: "Nome",
				phone: "Telefone",
				email: "E-mail",
				message: "Mensagem",
				placeholders: {
					name: "Seu nome...",
					phone: "(00) 00000-0000",
					email: "seuemail@email.com",
					message: "Digite sua dúvida ou sugestão..."
				}
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
					title: "273",
					subTitle: "Variedades de Pratos"
				},
				{
					title: "6300",
					subTitle: "Clientes Felizes"
				},
				{
					title: "16",
					subTitle: "Chefes Qualificados",
				}
			],
			galery: {
				title: "Nossa Galeria",
				subTitle: "Sinta um pouquinho do Gusto Buffet"
			},
			team: {
				title: "Nosso time",
				subTitle: "Os melhores do ramo"
			},
			contact: {
				title: "Contato",
				frequentlyDoubts: "Dúvidas?",
				doubts: [
					{
						title: "Quem somos?",
						description: "Gusto é um Buffet de comidas italianas de alta classe e sofisticação fundado na Italia em 1995",
					},
					{
						title: "Como contratar?",
						description: "Para contratar o Buffet Gusto basta preencher o formulário com seus dados que entraremos em contato para fazer uma avaliação e orçamento",
					},
					{
						title: "Fazem festas?",
						description: "Sim, o Gusto realiza festas comemorativas e empresarias, atendendo seus clientes de forma única e exclusiva",
					},
					{
						title: "É seguro?",
						description: "Temos mais de 6000 clientes satisfeitos com nossos serviços, o Gusto preza pela qualidade de seus produtos e atendimento",
					}
				]
			},
			footer: {
				address: {
					title: "Endereço",
					value: "Rua Maurílio Biagi, 800 - Ribeirão Preto - SP"
				},
				phone: {
					title: "Telefone",
					value: "(16) 997070-7070"
				},
				email: {
					title: "E-mail",
					value: "contato@gusto.com"
				},
				copyright: "©2023 - Todos os direitos reservados - Desenvolvido por Eliel Gomes"
			}
		},
		actions: {
			send: "Enviar",
			info: "Saiba Mais"
		}
	}
})

export default strings;
