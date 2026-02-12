//doação
import institutoImg from '../assets/images/images_doacao/instituto-grande-familia.png';
import livrosImg from '../assets/images/images_doacao/projeto-futuro-escola..png';
import tecnologiaImg from '../assets/images/images_doacao/instituto-conecta-jovem..png';

// Eventos
import palestraJovensImg from '../assets/images/images_eventos_palestras/empoderando-jovens-futuro.png';
import workshopTechImg from '../assets/images/images_eventos_palestras/tecnologia-que-transforma.png';
import palestraEmpregoImg from '../assets/images/images_eventos_palestras/carreira-primeiro-emprego.png';

// Mentoria
import carreiraImg from '../assets/images/images_mentoria/mentoria-carreira-emprego.png';
import experienciaImg from '../assets/images/images_mentoria/compartilhe-experiencia.png';
import acompanhamentoImg from '../assets/images/images_mentoria/acompanhamento.png';

// Voluntariado
import reciclagemImg from '../assets/images/images_voluntariado/mutirao-reciclagem.png';
import aulasTechImg from '../assets/images/images_voluntariado/aulas-tecnologia.png';
import esporteImg from '../assets/images/images_voluntariado/esporte-inclusao.png';

export const cardsData = {
  doacoes: [
    { 
      id: 1,
      titulo: "Instituto grande familia", 
      descricao: "Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.",
      imagem: institutoImg,
      textoBotao: "Quero Doar"
    },
    { 
      id: 2,
      titulo: "Projeto Futuro na Escola", 
      descricao: "Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.",
      imagem: livrosImg,
      textoBotao: "Quero Doar"
    },
    { 
      id: 3,
      titulo: "Instituto Conecta Jovem", 
      descricao: "Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades.",
      imagem: tecnologiaImg,
      textoBotao: "Quero Doar"
    }
  ],

  eventos: [
    { 
      id: 1,
      titulo: "Empoderando Jovens para o Futuro", 
      descricao: "Atividade: Palestra motivacional sobre liderança jovem e transformação social. Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades.",
      imagem: palestraJovensImg,
      textoBotao: "Quero Participar"
    },
    { 
      id: 2,
      titulo: "Tecnologia que Transforma", 
      descricao: "Atividade: Workshop de introdução à programação e inovação digital. Impacto: Preparar jovens para o mercado de trabalho através da tecnologia.",
      imagem: workshopTechImg,
      textoBotao: "Quero Participar"
    },
    { 
      id: 3,
      titulo: "Carreira e Primeiro Emprego", 
      descricao: "Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado. Impacto: Ajudar jovens a conquistar oportunidades de trabalho.",
      imagem: palestraEmpregoImg,
      textoBotao: "Quero Participar"
    }
  ],

  mentoria: [
    { 
      id: 1,
      titulo: "Mentoria de Carreira e Emprego", 
      descricao: "Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho.",
      imagem: carreiraImg,
      textoBotao: "Quero participar"
    },
    { 
      id: 2,
      titulo: "Compartilhe Experiência", 
      descricao: "Oriente jovens e profissionais iniciantes em sua área.",
      imagem: experienciaImg,
      textoBotao: "Quero participar"
    },
    { 
      id: 3,
      titulo: "Acompanhamento", 
      descricao: "Participe como guia em jornadas de aprendizado e desenvolvimento.",
      imagem: acompanhamentoImg,
      textoBotao: "Quero participar"
    }
  ],

  voluntariado: [
    { 
      id: 1,
      titulo: "Mutirão de reciclagem", 
      descricao: "Coletar materiais recicláveis e orientar sobre descarte consciente.",
      imagem: reciclagemImg,
      textoBotao: "Quero participar"
    },
    { 
      id: 2,
      titulo: "Aulas de Tecnologia", 
      descricao: "Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.",
      imagem: aulasTechImg,
      textoBotao: "Quero participar"
    },
    { 
      id: 3,
      titulo: "Esporte e Inclusão", 
      descricao: "Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.",
      imagem: esporteImg,
      textoBotao: "Quero participar"
    }
  ]
}