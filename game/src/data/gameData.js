// Dados da Narrativa Gamificada: Operação Camisa 10 (Fake News)
// Projeto Social IFCE Campus Itapipoca — CST em ADS

export const GAME_SCRIPT = {
  title: "OPERAÇÃO CAMISA 10",
  subtitle: "O Mistério da Rifa do Interclasses",
  initialStats: {
    revolta: 35,       // Sala começa desconfiada e tensa
    investigacao: 10,   // Poucas pistas conhecidas
  },
  decisions: [
    // ==================== ATO I ====================
    {
      id: 1,
      act: "ATO I: A MANHÃ DE PÂNICO — A EXPLOSÃO DO BOATO",
      title: "O Alerta no WhatsApp: 'Cadê Nosso Uniforme?!'",
      character: "caua",
      emotion: "calm",
      scenery: "sala_de_aula",
      evidence: "instagram_post",
      scenario: "A turma do 7º ano passou o mês vendendo rifa de uma caixa de bombom para pagar a camisa do time para o Interclasses de amanhã. Na primeira aula, o celular apita com o post do perfil anônimo '@itapipoca_exposed_real': 'ESCÂNDALO! A Bia roubou os R$ 160 da rifa do 7º ano pra gastar no centro! Amanhã o time joga descalço e sem camisa!'. O capitão do time levanta aos berros querendo tirar satisfação.",
      optA: {
        label: "Opção [A]",
        text: "Cauã segura o braço do capitão: 'Calma, cara! A Bia tá aqui do nosso lado, não vamos acusar ninguém por causa de fofoca de internet!'.",
        impact: "🚨 Revolta -15% | 🔍 Investigação +15%",
        deltaRevolta: -15,
        deltaInvestigacao: +15,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Apoiar a gritaria: 'É verdade, eu sabia que essa rifa tava estranha! Devolve nosso dinheiro, Bia!'.",
        impact: "🚨 Revolta +25% | 🔍 Investigação -15%",
        deltaRevolta: +25,
        deltaInvestigacao: -15,
        type: "negative"
      },
      tip: "Pergunte à turma: 'Por que quando envolve algo que a gente quer muito (como o Interclasses), a raiva faz a gente acreditar em qualquer boato na hora?'"
    },
    {
      id: 2,
      act: "ATO I: A MANHÃ DE PÂNICO — A EXPLOSÃO DO BOATO",
      title: "A Foto Fora de Contexto: O Zoom Revelador",
      character: "bia",
      emotion: "panicked",
      scenery: "sala_de_aula",
      evidence: "sacola_zoom",
      scenario: "O post mostra uma foto da Bia saindo de uma loja no centro de Itapipoca segurando uma sacola. A legenda diz: 'Ostentando com o suor da sala'. Bia está branca e paralisada na cadeira.",
      optA: {
        label: "Opção [A]",
        text: "Pegar o celular, dar zoom na foto e reparar: a sacola é da Farmácia Popular com caixas de remédio para a avó dela, não loja de roupas caras.",
        impact: "🔍 Investigação +20% | 🚨 Revolta -10%",
        deltaRevolta: -10,
        deltaInvestigacao: +20,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Nem abrir a foto e gritar: 'Olha lá a sacola de compras dela, é culpada mesmo!'.",
        impact: "🚨 Revolta +20% | 🔍 Investigação -15%",
        deltaRevolta: +20,
        deltaInvestigacao: -15,
        type: "negative"
      },
      tip: "Ensine o olhar atento: imagens reais costumam ser usadas com legendas falsas para manipular a interpretação."
    },
    {
      id: 3,
      act: "ATO I: A MANHÃ DE PÂNICO — A EXPLOSÃO DO BOATO",
      title: "O Choro da Bia na Carteira",
      character: "bia",
      emotion: "crying",
      scenery: "sala_de_aula",
      evidence: null,
      scenario: "Metade da sala começa a bater nas carteiras gritando 'LADRA!'. A Bia abaixa a cabeça sobre a mesa e começa a chorar de soluçar, sem conseguir falar de tanta vergonha.",
      optA: {
        label: "Opção [A]",
        text: "Ir até a carteira da Bia com Luísa, pedir silêncio para a sala e dizer: 'Bia, respira fundo. A gente tá aqui e vai te ouvir'.",
        impact: "🤝 Acolhimento +25% | 🚨 Revolta -15%",
        deltaRevolta: -15,
        deltaInvestigacao: +15,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Girar a cadeira para o outro lado e rir com os colegas que estão zombando dela.",
        impact: "🚨 Revolta +20% | 💔 Empatia -25%",
        deltaRevolta: +20,
        deltaInvestigacao: -10,
        type: "negative"
      },
      tip: "Discuta o impacto emocional: a humilhação pública e o linchamento moral paralisam a pessoa acusada injustamente."
    },
    {
      id: 4,
      act: "ATO I: A MANHÃ DE PÂNICO — A EXPLOSÃO DO BOATO",
      title: "O Áudio de 5 Segundos Fora de Contexto",
      character: "leo",
      emotion: "furious",
      scenery: "sala_de_aula",
      evidence: "audio_wave",
      scenario: "Léo recebe um áudio encaminhado onde a voz da Bia diz: '...já gastei tudo no centro, não sobrou nada da rifa...'. A sala volta a ferver em revolta!",
      optA: {
        label: "Opção [A]",
        text: "Ouvir com fone de ouvido e notar: há um corte seco no áudio e respiração engolida. O áudio original foi fatiado para mudar o sentido!",
        impact: "🔍 Investigação +25% | 🚨 Revolta -15%",
        deltaRevolta: -15,
        deltaInvestigacao: +25,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Achar que áudio não mente e compartilhar no grupo geral dos alunos.",
        impact: "🚨 Revolta +25% | 🔍 Investigação -20%",
        deltaRevolta: +25,
        deltaInvestigacao: -20,
        type: "negative"
      },
      tip: "Explique a técnica do 'Corte Fora de Contexto': como recortar uma frase do meio altera 100% o que a pessoa disse."
    },
    {
      id: 5,
      act: "ATO I: A MANHÃ DE PÂNICO — A EXPLOSÃO DO BOATO",
      title: "A Frase Completa da Bia",
      character: "bia",
      emotion: "hopeful",
      scenery: "sala_de_aula",
      evidence: null,
      scenario: "Bia consegue recuperar a voz e explica: 'Gente, eu mandei esse áudio ontem pra minha mãe dizendo: Minha mãe disse que o dinheiro do aluguel gastou tudo no centro e não sobrou nada, MAS O DINHEIRO DA RIFA TÁ GUARDADINHO COMIGO! Cortaram só o final!'.",
      optA: {
        label: "Opção [A]",
        text: "Pedir para a Bia abrir o WhatsApp dela e tocar o áudio original na íntegra para a turma ouvir.",
        impact: "🔍 Investigação +30% | 🚨 Revolta -25%",
        deltaRevolta: -25,
        deltaInvestigacao: +30,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Dizer que ela tá inventando desculpa para enrolar a sala.",
        impact: "🚨 Revolta +20%",
        deltaRevolta: +20,
        deltaInvestigacao: -10,
        type: "negative"
      },
      tip: "Mostre o valor da contraprova: sempre consultar a mensagem original antes de julgar por recortes encaminhados."
    },
    {
      id: 6,
      act: "ATO I: A MANHÃ DE PÂNICO — A EXPLOSÃO DO BOATO",
      title: "O Testemunho da Dona Socorro na Cantina",
      character: "socorro",
      emotion: "firm_witness",
      scenery: "cantina",
      evidence: null,
      scenario: "Bia diz: 'Dona Socorro me viu guardando o envelope com os R$ 160 hoje de manhã! Ela comprou os últimos 5 pontos da rifa!'. Os alunos vão até a cantina checar.",
      optA: {
        label: "Opção [A]",
        text: "Dona Socorro confirma com firmeza: 'Essa menina guardou o envelope pardo lacrado dentro da mochila dela antes da primeira aula! Eu vi com esses olhos!'.",
        impact: "🔍 Investigação +20% | 🚨 Revolta -20%",
        deltaRevolta: -20,
        deltaInvestigacao: +20,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Achar que Dona Socorro tá acobertando a Bia e desrespeitar a merendeira.",
        impact: "🚨 Revolta +20% | 💔 Empatia -20%",
        deltaRevolta: +20,
        deltaInvestigacao: -15,
        type: "negative"
      },
      tip: "A importância de testemunhas idôneas e fontes presenciais confiáveis contra boatos de internet."
    },
    {
      id: 7,
      act: "ATO I: A MANHÃ DE PÂNICO — A EXPLOSÃO DO BOATO",
      title: "O Choque: O Envelope Sumiu da Mochila!",
      character: "bia",
      emotion: "panicked",
      scenery: "sala_de_aula",
      evidence: null,
      scenario: "Bia corre até a sala, abre o zíper da mochila para mostrar o envelope para todo mundo... e o envelope NÃO ESTÁ LÁ! Alguém aproveitou o tumulto do intervalo e furtou!",
      optA: {
        label: "Opção [A]",
        text: "Cauã raciocina rápido: 'Gente, a Bia não ia inventar isso na cara da Dona Socorro. Alguém entrou na nossa sala no recreio e armou pra cima da gente!'.",
        impact: "🔍 Investigação +20% | 🚨 Revolta -10%",
        deltaRevolta: -10,
        deltaInvestigacao: +20,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "A sala perde o controle: 'Pronto, sumiu porque ela gastou! Agora que não tem camisa mesmo!'.",
        impact: "🚨 Revolta +35% | 🔍 Investigação -20%",
        deltaRevolta: +35,
        deltaInvestigacao: -20,
        type: "negative"
      },
      tip: "Ponto de virada dramático: o foco muda de 'acusar um inocente' para 'descobrir quem armou o golpe'."
    },
    {
      id: 8,
      act: "ATO I: A MANHÃ DE PÂNICO — A EXPLOSÃO DO BOATO",
      title: "A Entrada Furiosa da Direção",
      character: "diretor",
      emotion: "serious",
      scenery: "sala_de_aula",
      evidence: null,
      scenario: "O diretor e a coordenadora entram na sala pelo barulho: 'O que está acontecendo aqui? Se essa confusão não for resolvida e o dinheiro não aparecer até o final da tarde, o 7º ano está DESCLASSIFICADO do Interclasses de amanhã!'.",
      optA: {
        label: "Opção [A]",
        text: "Assumir a frente da turma com serenidade: 'Diretor, a gente vai resolver isso com calma e achar o envelope antes do sinal da saída!'.",
        impact: "🔍 Investigação +20% | 🚨 Revolta -15%",
        deltaRevolta: -15,
        deltaInvestigacao: +20,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Começar a bater boca com o diretor e dizer que a escola não manda em nada.",
        impact: "🚨 Revolta +30% -> Risco de Desclassificação Imediata",
        deltaRevolta: +30,
        deltaInvestigacao: -10,
        type: "negative"
      },
      tip: "Gestão de crise: responsabilidade, diálogo com a autoridade escolar e foco na solução do problema."
    },

    // ==================== ATO II ====================
    {
      id: 9,
      act: "ATO II: A TARDE DA INVESTIGAÇÃO — O RASTREIO DA ARMAÇÃO",
      title: "A Linha do Tempo do Recreio",
      character: "caua",
      emotion: "investigating",
      scenery: "corredor",
      evidence: null,
      scenario: "A comissão de alunos do 7º ano se reúne no corredor da sala para montar a linha do tempo: quem ficou na sala ou foi visto perto das carteiras durante o recreio?",
      optA: {
        label: "Opção [A]",
        text: "Pedir para quem ficou no pátio relatar se viu alguém de outra turma entrando no corredor do 7º ano.",
        impact: "🔍 Investigação +20%",
        deltaRevolta: -5,
        deltaInvestigacao: +20,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Começar a revistar a mochila de todos os colegas da própria sala com agressividade.",
        impact: "🚨 Revolta +20% | 💔 Convivência -20%",
        deltaRevolta: +20,
        deltaInvestigacao: -10,
        type: "negative"
      },
      tip: "Método investigativo: levantar hipóteses e colher depoimentos em vez de violar a privacidade dos colegas."
    },
    {
      id: 10,
      act: "ATO II: A TARDE DA INVESTIGAÇÃO — O RASTREIO DA ARMAÇÃO",
      title: "O Print Falso do WhatsApp: 'Fake Chat'",
      character: "caua",
      emotion: "investigating",
      scenery: "sala_de_aula",
      evidence: "fake_chat_zoom",
      scenario: "O perfil anônimo posta um print novo onde a Bia supostamente digita para uma amiga: 'Os trouxas do 7º ano pagaram meu fone novo kkk'.",
      optA: {
        label: "Opção [A]",
        text: "Analisar a fonte do texto no print: o tamanho da letra e os ícones de visto azul estão fora do padrão oficial do WhatsApp (print forjado!).",
        impact: "🔍 Investigação +25% | 🚨 Revolta -15%",
        deltaRevolta: -15,
        deltaInvestigacao: +25,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Acreditar no print e dizer: 'Ela confessou no print, não tem mais o que falar!'.",
        impact: "🚨 Revolta +25% | 🔍 Investigação -20%",
        deltaRevolta: +25,
        deltaInvestigacao: -20,
        type: "negative"
      },
      tip: "Demonstre na prática a existência de geradores de conversas falsas na web e aplicativos de brincadeira."
    },
    {
      id: 11,
      act: "ATO II: A TARDE DA INVESTIGAÇÃO — O RASTREIO DA ARMAÇÃO",
      title: "A Demonstração Técnica na Tela",
      character: "caua",
      emotion: "confident",
      scenery: "sala_de_aula",
      evidence: null,
      scenario: "Um colega que gosta de informática pega o celular e abre um site gratuito de gerar print de WhatsApp para mostrar para a sala.",
      optA: {
        label: "Opção [A]",
        text: "Criar um print falso em 30 segundos com a foto do capitão do time dizendo 'sou doido' para provar como é fácil forjar qualquer pessoa.",
        impact: "🔍 Investigação +30% | 🚨 Revolta -25%",
        deltaRevolta: -25,
        deltaInvestigacao: +30,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Achar que a turma não vai entender a explicação e guardar a informação.",
        impact: "Impacto Neutro",
        deltaRevolta: 0,
        deltaInvestigacao: +5,
        type: "neutral"
      },
      tip: "Pedagogia visual: ver uma falsificação sendo criada ao vivo quebra de vez a ilusão de que 'print é prova definitiva'."
    },
    {
      id: 12,
      act: "ATO II: A TARDE DA INVESTIGAÇÃO — O RASTREIO DA ARMAÇÃO",
      title: "O Testemunho do Seu Raimundo (Inspetor)",
      character: "raimundo",
      emotion: "observant",
      scenery: "corredor",
      evidence: null,
      scenario: "O inspetor de pátio, Seu Raimundo, ouve a conversa e lembra: 'Olha, no meio do recreio eu mandei dois meninos do 8º ano saírem desse corredor porque eles não tinham nada que estar aqui'.",
      optA: {
        label: "Opção [A]",
        text: "Anotar o horário do recreio e perguntar se Seu Raimundo lembra de alguma característica dos garotos.",
        impact: "🔍 Investigação +20%",
        deltaRevolta: -5,
        deltaInvestigacao: +20,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Achar que Seu Raimundo tá gagá e ignorar o relato dele.",
        impact: "🔍 Investigação -15%",
        deltaRevolta: +10,
        deltaInvestigacao: -15,
        type: "negative"
      },
      tip: "Valorização de todos os trabalhadores da escola como fontes fundamentais de segurança e convivência."
    },
    {
      id: 13,
      act: "ATO II: A TARDE DA INVESTIGAÇÃO — O RASTREIO DA ARMAÇÃO",
      title: "A Rixa do Interclasses: Por Que o 8º Ano?",
      character: "leo",
      emotion: "doubtful",
      scenery: "corredor",
      evidence: null,
      scenario: "A turma lembra que no treino da semana passada, o 7º ano quase ganhou do time do 8º B, e o zagueiro deles jurou que eles não jogariam a semifinal de camisa nova.",
      optA: {
        label: "Opção [A]",
        text: "Perceber o motivo da armação: desestabilizar o 7º ano e provocar desclassificação por briga!",
        impact: "🔍 Investigação +25% | 🚨 Revolta -10%",
        deltaRevolta: -10,
        deltaInvestigacao: +25,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Não ligar os pontos e continuar achando que a culpa é da Bia.",
        impact: "🚨 Revolta +15%",
        deltaRevolta: +15,
        deltaInvestigacao: -10,
        type: "negative"
      },
      tip: "Identificar a motivação por trás da desinformação: quem se beneficia com a mentira disseminada?"
    },
    {
      id: 14,
      act: "ATO II: A TARDE DA INVESTIGAÇÃO — O RASTREIO DA ARMAÇÃO",
      title: "O Link Suspeito de 'Recarga Grátis'",
      character: "caua",
      emotion: "investigating",
      scenery: "sala_de_aula",
      evidence: null,
      scenario: "Na bio do perfil anônimo '@itapipoca_exposed_real', surge um link: 'Votação popular: vote para banir o 7º ano e ganhe 10 reais de crédito no celular: interclasses-premios.sorteio-livre.xyz'.",
      optA: {
        label: "Opção [A]",
        text: "Alertar no grupo da sala: 'Não cliquem nesse link! É golpe de phishing para roubar senha de Instagram e dados!'.",
        impact: "🔍 Investigação +20%",
        deltaRevolta: -5,
        deltaInvestigacao: +20,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Clicar no link na esperança de ganhar crédito para recarregar o celular.",
        impact: "🚨 Vírus no Celular | 🔍 Investigação -15%",
        deltaRevolta: +15,
        deltaInvestigacao: -15,
        type: "negative"
      },
      tip: "Relembre o golpe do Phishing: páginas de fofoca usam promessas financeiras para atrair cliques de adolescentes."
    },
    {
      id: 15,
      act: "ATO II: A TARDE DA INVESTIGAÇÃO — O RASTREIO DA ARMAÇÃO",
      title: "O Story do Descuido: A Chuteira Reveladora",
      character: "caua",
      emotion: "confident",
      scenery: "sala_de_aula",
      evidence: "chuteira_clue",
      scenario: "O perfil anônimo posta um story comemorando: 'O 7º ano tá eliminado do Interclasses, chora bebês!'. Mas no cantinho inferior da foto aparece a ponta de uma chuteira vermelha com cadarço verde-limão!",
      optA: {
        label: "Opção [A]",
        text: "Dar print rápido antes que apague e identificar na hora: essa chuteira exclusiva é do Igor, zagueiro do 8º B!",
        impact: "🔍 Investigação +30% | Pista Chave Encontrada!",
        deltaRevolta: -15,
        deltaInvestigacao: +30,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Não prestar atenção no fundo da foto e só ficar com raiva da provocação.",
        impact: "🚨 Revolta +15%",
        deltaRevolta: +15,
        deltaInvestigacao: -5,
        type: "negative"
      },
      tip: "Atenção aos detalhes forenses: todo conteúdo digital postado carrega pistas do ambiente e de quem gravou."
    },
    {
      id: 16,
      act: "ATO II: A TARDE DA INVESTIGAÇÃO — O RASTREIO DA ARMAÇÃO",
      title: "O Desespero no Grupo de WhatsApp das Mães",
      character: "bia",
      emotion: "crying",
      scenery: "sala_de_aula",
      evidence: null,
      scenario: "A mãe da Bia liga chorando. Mães de outros alunos estão mandando mensagens agressivas no grupo do WhatsApp da escola acusando a família de desonestidade.",
      optA: {
        label: "Opção [A]",
        text: "O capitão do time pede o celular da Bia e grava um áudio respeitoso para as mães: 'Dona Maria, aqui é a turma toda. A gente já descobriu quem armou isso, a Bia não roubou nada e estamos recuperando o dinheiro!'.",
        impact: "🤝 Conexão Humana +30% | 🚨 Revolta -20%",
        deltaRevolta: -20,
        deltaInvestigacao: +15,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Deixar a mãe da Bia ser achincalhada no grupo sem intervir.",
        impact: "💔 Empatia -25% | 🚨 Revolta +20%",
        deltaRevolta: +20,
        deltaInvestigacao: -10,
        type: "negative"
      },
      tip: "A empatia se estende às famílias: uma mentira espalhada na escola transborda e atinge pais e avós em casa."
    },
    {
      id: 17,
      act: "ATO II: A TARDE DA INVESTIGAÇÃO — O RASTREIO DA ARMAÇÃO",
      title: "A Tentativa de Linchamento no Portão",
      character: "leo",
      emotion: "furious",
      scenery: "corredor",
      evidence: null,
      scenario: "Alguns garotos do 7º ano pegam cabos de vassoura no corredor: 'Vamos esperar o Igor no portão da saída e quebrar ele na porrada pra pegar o dinheiro de volta!'.",
      optA: {
        label: "Opção [A]",
        text: "Intervir com firmeza: 'Se a gente for pra violência física, a polícia vai ser chamada, a gente perde a razão e o diretor EXPULSA o nosso time na hora! Vamos resolver com as provas e o professor de Educação Física!'.",
        impact: "⚖️ Liderança Ética +30% | 🚨 Revolta -25%",
        deltaRevolta: -25,
        deltaInvestigacao: +20,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Incentivar a briga no portão: 'Isso aí, quem rouba tem que apanhar!'.",
        impact: "🚨 Tragédia / Polícia Chamada / Desclassificação",
        deltaRevolta: +40,
        deltaInvestigacao: -20,
        type: "negative"
      },
      tip: "Dilema moral crucial: a justiça com as próprias mãos sempre agrava o dano e destrói quem tinha a razão."
    },

    // ==================== ATO III ====================
    {
      id: 18,
      act: "ATO III: O DESFECHO — A VERDADE, A CAMISA NOVA & O INTERCLASSES",
      title: "A Busca no Vestiário da Quadra",
      character: "caua",
      emotion: "confident",
      scenery: "vestiario",
      evidence: "envelope_achado",
      scenario: "Se o Igor pegou o envelope durante o recreio, ele precisava esconder rápido antes de ir para a aula dele. Onde ele escondeu?",
      optA: {
        label: "Opção [A]",
        text: "Ir com o professor de Educação Física até os armários do vestiário da quadra. Embaixo de um banco, dentro de uma chuteira velha, encontram o envelope pardo lacrado com os R$ 160 intactos!",
        impact: "🎉 ENVELOPE RECUPERADO! 🔍 Investigação 100%",
        deltaRevolta: -30,
        deltaInvestigacao: +40,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Desistir de procurar achando que o dinheiro já foi gasto.",
        impact: "💀 Fim Trágico / Sem Camisa",
        deltaRevolta: +30,
        deltaInvestigacao: -20,
        type: "negative"
      },
      tip: "Alívio dramático e recompensa do esforço investigativo da turma: o dinheiro do sonho deles voltou!"
    },
    {
      id: 19,
      act: "ATO III: O DESFECHO — A VERDADE, A CAMISA NOVA & O INTERCLASSES",
      title: "O Confronto das Provas na Sala dos Professores",
      character: "igor",
      emotion: "smug",
      scenery: "diretoria",
      evidence: null,
      scenario: "Igor é chamado na sala da coordenação com o professor de Educação Física e a direção. Ele entra empinado dizendo que não sabe de nada.",
      optA: {
        label: "Opção [A]",
        text: "Apresentar a sequência irrefutável na mesa: o print do story com a chuteira dele, o testemunho de Seu Raimundo e o envelope achado no armário dele.",
        impact: "📜 Provas Irrefutáveis +30%",
        deltaRevolta: -15,
        deltaInvestigacao: +25,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Entrar aos gritos querendo bater nele na frente do diretor.",
        impact: "🚨 Perda de Razão",
        deltaRevolta: +25,
        deltaInvestigacao: -10,
        type: "negative"
      },
      tip: "Postura cidadã: apresentar fatos e evidências de forma serena desmonta qualquer mentira."
    },
    {
      id: 20,
      act: "ATO III: O DESFECHO — A VERDADE, A CAMISA NOVA & O INTERCLASSES",
      title: "A Confissão do Igor",
      character: "igor",
      emotion: "crying_caught",
      scenery: "diretoria",
      evidence: null,
      scenario: "Encurralado pelas evidências, Igor desaba a chorar na cadeira: 'Foi mal... a gente sabia que o 7º ano tava jogando muito no treino e que se vocês jogassem com camisa nova iam ter mais moral com a torcida. Eu queria que a turma de vocês brigasse e fosse cancelada'.",
      optA: {
        label: "Opção [A]",
        text: "Ouvir a confissão e pontuar: 'Você quase destruiu a vida da Bia e a paz da escola por causa de um jogo de bola. A internet não é terra sem lei!'.",
        impact: "🎓 Lição Moral Profunda +25%",
        deltaRevolta: -20,
        deltaInvestigacao: +15,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Zombar do choro dele e chamá-lo de covarde.",
        impact: "💔 Convivência -15%",
        deltaRevolta: +15,
        deltaInvestigacao: 0,
        type: "negative"
      },
      tip: "A reflexão sobre a gravidade dos atos: desinformação motivada por vaidade e rivalidade boba."
    },
    {
      id: 21,
      act: "ATO III: O DESFECHO — A VERDADE, A CAMISA NOVA & O INTERCLASSES",
      title: "A Retratação Pública no Instagram",
      character: "diretor",
      emotion: "serious",
      scenery: "diretoria",
      evidence: null,
      scenario: "A diretora dá um ultimato ao Igor: ou ele se retrata publicamente e assume o erro, ou levará suspensão grave com notificação aos pais e conselho tutelar.",
      optA: {
        label: "Opção [A]",
        text: "Exigir que Igor abra a conta anônima agora, publique um story em vídeo mostrando o rosto, desmentindo todo o boato e pedindo perdão à Bia e à escola.",
        impact: "🌐 Retratação Completa! A verdade vence na rede!",
        deltaRevolta: -25,
        deltaInvestigacao: +25,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Deixar ele só apagar o perfil sem dar satisfação a quem leu as mentiras.",
        impact: "Letramento Incompleto",
        deltaRevolta: +10,
        deltaInvestigacao: -5,
        type: "neutral"
      },
      tip: "O dever da retratação: quem espalha mentira tem a obrigação ética de usar o mesmo canal para publicar a verdade."
    },
    {
      id: 22,
      act: "ATO III: O DESFECHO — A VERDADE, A CAMISA NOVA & O INTERCLASSES",
      title: "A Corrida Contra o Relógio até a Estamparia",
      character: "caua",
      emotion: "confident",
      scenery: "corredor",
      evidence: null,
      scenario: "São 16h40 da quinta-feira! A gráfica no centro de Itapipoca fecha às 17h00. Se o dinheiro não for entregue agora, as camisas não ficam prontas para amanhã de manhã!",
      optA: {
        label: "Opção [A]",
        text: "O professor de Educação Física sobe na moto e leva o capitão e a Bia com o envelope até a estamparia para pagar e autorizar a impressão!",
        impact: "🏍️ Corrida Épica Concluída! Camisas em Produção!",
        deltaRevolta: -20,
        deltaInvestigacao: +15,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Achar que tá tarde demais e deixar para pagar na próxima semana.",
        impact: "Jogo Sem Uniforme",
        deltaRevolta: +20,
        deltaInvestigacao: 0,
        type: "negative"
      },
      tip: "Trabalho em equipe e superação: a união da turma mobiliza os próprios professores em prol dos estudantes."
    },
    {
      id: 23,
      act: "ATO III: O DESFECHO — A VERDADE, A CAMISA NOVA & O INTERCLASSES",
      title: "O Pedido de Perdão Coletivo à Bia",
      character: "leo",
      emotion: "ashamed",
      scenery: "sala_de_aula",
      evidence: null,
      scenario: "No retorno à escola, a turma do 7º ano está toda reunida no pátio. Léo e os colegas que desconfiaram e gritaram com a Bia estão cabisbaixos e envergonhados.",
      optA: {
        label: "Opção [A]",
        text: "Léo toma a iniciativa, olha nos olhos da Bia e diz: 'Bia, me perdoa de verdade. Eu fui no embalo da fofoca e fui muito injusto com você. Você é a pessoa mais honesta da nossa sala'. A turma toda aplaude.",
        impact: "💖 Restauração Emocional Total! Empatia 100%",
        deltaRevolta: -30,
        deltaInvestigacao: +15,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Fingir que nada aconteceu e agir com frieza.",
        impact: "💔 Cicatriz Aberta",
        deltaRevolta: +20,
        deltaInvestigacao: 0,
        type: "negative"
      },
      tip: "O valor da humildade: pedir desculpas quando se erra é o maior sinal de maturidade cidadã."
    },
    {
      id: 24,
      act: "ATO III: O DESFECHO — A VERDADE, A CAMISA NOVA & O INTERCLASSES",
      title: "Sexta-Feira: A Entrega das Camisas",
      character: "bia",
      emotion: "relieved",
      scenery: "corredor",
      evidence: null,
      scenario: "Sexta-feira, 07h30 da manhã. O pátio está agitado para o início dos jogos. A van da estamparia para no portão e entrega uma caixa de papelão pesada. Bia abre a caixa na frente de todos: as camisas do 7º ano ficaram LINDAS, brilhando nas cores da sala com o nome de cada aluno estampado nas costas!",
      optA: {
        label: "Opção [A]",
        text: "Vestir o uniforme com orgulho e cantar o hino da turma abraçados no pátio!",
        impact: "👕 Manto Sagrado Vestido! Moral 100%",
        deltaRevolta: -25,
        deltaInvestigacao: +15,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Reclamar de algum detalhe da costura da camisa.",
        impact: "Ingratidão",
        deltaRevolta: +10,
        deltaInvestigacao: 0,
        type: "neutral"
      },
      tip: "A celebração do esforço coletivo: cada camisa representa o suor e a união da sala de aula."
    },
    {
      id: 25,
      act: "ATO III: O DESFECHO — A VERDADE, A CAMISA NOVA & O INTERCLASSES",
      title: "A Entrada na Quadra do Interclasses",
      character: "bia",
      emotion: "champion",
      scenery: "quadra",
      evidence: null,
      scenario: "A quadra da escola está fervendo! A torcida com tambores, apitos e cartazes nas arquibancadas. O locutor anuncia: 'E agora, entrando em quadra para a semifinal... O 7º ANO A!'. O capitão do time pega a faixa de capitão da manga e coloca no braço da Bia.",
      optA: {
        label: "Opção [A]",
        text: "A turma inteira entra de mãos dadas, com a Bia erguendo a bola do jogo no centro da quadra, sendo ovacionada por toda a escola de pé!",
        impact: "🏆 VITÓRIA HISTÓRICA! O 7º ANO É GIGANTE!",
        deltaRevolta: -30,
        deltaInvestigacao: +25,
        type: "positive"
      },
      optB: {
        label: "Opção [B]",
        text: "Entrar de cabeça baixa sem vibrar com a torcida.",
        impact: "Fim sem Emoção",
        deltaRevolta: +10,
        deltaInvestigacao: 0,
        type: "neutral"
      },
      tip: "Consagração do projeto: a verdade venceu a mentira, a amizade venceu o boato e a cidadania digital triunfou!"
    }
  ],
  endings: {
    good: {
      id: "good",
      title: "A GLÓRIA DO 7º ANO: A VITÓRIA DA VERDADE E DA AMIZADE",
      bannerText: "🏆 VITÓRIA HEROICA DA VERDADE!",
      description: "A farsa é completamente desmontada! A Bia tem sua honra resgatada diante de toda a comunidade escolar, o dinheiro da rifa é recuperado a tempo e as camisas do time chegam impecáveis. O 7º ano entra em quadra mais unido do que nunca, dá um show de solidariedade no Interclasses e a escola adota o 'Protocolo Anti-Boato' como regra oficial para os próximos anos!",
      color: "from-emerald-600 to-teal-800"
    },
    bad: {
      id: "bad",
      title: "A DESCLASSIFICAÇÃO E O FIM DO TIME",
      bannerText: "💀 DESCLASSIFICADOS POR DESORDEM",
      description: "A sala de aula se dividiu em brigas e ofensas no corredor. O envelope da rifa nunca foi encontrado, a mãe da Bia a transferiu de escola traumatizada pelas calúnias e o diretor expulsou o 7º ano do campeonato de futsal. O 8º B comemorou a vitória por W.O. e a turma ficou marcada pela covardia de ter acreditado em fofocas da internet.",
      color: "from-red-600 to-rose-950"
    },
    neutral: {
      id: "neutral",
      title: "JOGO SEM BRILHO (Desfecho Meio-Termo)",
      bannerText: "⚖️ TRÉGUA AGRIDOCE",
      description: "O dinheiro foi recuperado, mas a briga deixou mágoas profundas. As camisas não ficaram prontas a tempo e o time jogou de colete velho. O 7º ano aprendeu a lição, mas precisará de muito tempo para reconstruir a confiança entre os colegas.",
      color: "from-amber-600 to-slate-800"
    }
  }
};
