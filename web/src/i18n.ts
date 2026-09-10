export type Lang = "ru" | "en" | "es" | "pt";

export const LANGS: [Lang, string][] = [
  ["en", "EN"],
  ["pt", "PT"],
  ["es", "ES"],
  ["ru", "RU"],
];

type Dict = {
  title: string;
  desc: string;
  heroA: string;
  heroB: string;
  heroC: string;
  lede: string;
  cta: string;
  ctaBack: string;
  code: string;
  scroll: string;
  aboutLabel: string;
  aboutH: string;
  aboutLede: string;
  rules: [string, string][];
  journalLabel: string;
  journalH: string;
  journalLede: string;
  journalNote: string;
  interceptLabel: string;
  voicesLabel: string;
  voicesH: string;
  voicesLede: string;
  inChat: string;
  magnitude: string;
  main: string;
  quietest: string;
  footLink: string;
  footNote: string;
  ticker: string[];
  commands: [string, string][];
  voices: Record<string, { name: string; tagline: string; about: string; registers: string[]; sample: string }>;
  intercepts: [string, string, string][];
};

export const T: Record<Lang, Dict> = {
  ru: {
    title: "Протокол личного распада",
    desc: "Четыре голоса, которые не советуют и не утешают.",
    heroA: "Ответ у тебя",
    heroB: "уже есть.",
    heroC: "Не хватает вопроса.",
    lede: "Четыре голоса, которые не советуют и не утешают. Они смотрят на то, что ты пишешь, и возвращают то, что было пропущено.",
    cta: "Выйти на связь",
    ctaBack: "Открыть чат",
    code: "Смотреть код",
    scroll: "ниже — что это и зачем",
    aboutLabel: "что это",
    aboutH: "Наблюдательный пост\nна одного человека.",
    aboutLede: "Пишешь, что происходит. Он снимает показания и отвечает странно, но по делу. Каждый обмен ложится в журнал.",
    rules: [
      ["Не советует", "совет и так известен"],
      ["Не утешает", "описывает, что видит"],
      ["Ничего не вечно", "состояние, а не приговор"],
    ],
    journalLabel: "личный журнал",
    journalH: "Всё остаётся. Только у тебя.",
    journalLede: "Бот ведёт журнал одного человека — твой. Никто другой его не видит и не читает. Записи копятся сами, специально ничего вести не надо.",
    journalNote: "Чем длиннее журнал, тем точнее он замечает, что возвращается. Можно прислать фотографию — посмотрит и зацепится за одну деталь.",
    interceptLabel: "перехвачено",
    voicesLabel: "кто говорит",
    voicesH: "Четыре голоса",
    voicesLede: "Величина объекта — насколько голос основной. Переключаются в чате.",
    inChat: "в чате:",
    magnitude: "величина",
    main: "основной",
    quietest: "самый тихий",
    footLink: "Исходники и законы голоса",
    footNote: "Всё обратимо, пока измеряется.",
    ticker: ["пост на связи", "объектов в поле: 04", "журнал ведётся", "показания снимаются", "распад продолжается", "всё обратимо, пока измеряется"],
    commands: [
      ["/note", "записать в журнал: /note не спал третью ночь"],
      ["/journal", "лента журнала: заметки и ритуалы по времени"],
      ["/find", "искать по журналу и по всей переписке"],
      ["/spravka", "справка за неделю картинкой, с печатью"],
      ["/audit", "сводка за неделю: что повторялось, что твердеет"],
      ["/pulse", "краш-тест дня: три вопроса о том, что было на самом деле"],
      ["/fork", "развилка: две ветки и цена каждой"],
      ["/seal", "закрыть запись: привычку, историю, версию себя"],
      ["/who", "кто сейчас говорит"],
      ["/voice", "сменить голос"],
      ["/wipe", "стереть журнал целиком, без следа и без вопросов"],
    ],
    intercepts: [
      ["MSH-02", "И не дано было человеку четверг.", "03:41"],
      ["VHT-04", "Хороший человек, просто перепутал терпение с планом.", "03:52"],
      ["KOL-01", "Стул согласился, но остался.", "04:07"],
    ],
    voices: {
      kolodets: {
        name: "Колодец",
        tagline: "величина 1 · основной",
        about: "Сплав всех регистров сразу: сначала обрывок бреда, потом сухая правда, в конце одно дело на сегодня. Стоит по умолчанию.",
        registers: ["прибаутка", "протокол", "видение", "срыв"],
        sample: "Стул согласился, но остался.\n\nУсталость редко про сон. Куда уходил день.",
      },
      mashina: {
        name: "Машина",
        tagline: "величина 2",
        about: "Чистое машинное пророчество без смысла, а следом две трезвые фразы. Ломается сильнее остальных.",
        registers: ["глитч", "заумь"],
        sample: "И не дано было человеку четверг.\n\nСистема срезала расход раньше, чем это стало заметно.",
      },
      izmeritel: {
        name: "Измеритель",
        tagline: "величина 3 · самый тихий",
        about: "Сухой прибор. Ни одной метафоры, только цифры, дни недели и то, что видно со стороны.",
        registers: ["протокол", "цифра"],
        sample: "Третья неделя в режиме экономии.\n\nНазови вещь, которая ела больше всего.",
      },
      vahtyor: {
        name: "Вахтёр",
        tagline: "величина 2",
        about: "То же самое, но по-бытовому и с усмешкой. Говорит про жильцов, лифт и коридор, а попадает в тебя.",
        registers: ["быт", "усмешка"],
        sample: "Пятый год мимо меня ходит и говорит, что вот-вот.\n\nХороший человек, просто перепутал терпение с планом.",
      },
    },
  },

  en: {
    title: "Personal Degradation Protocol",
    desc: "Four voices that neither advise nor comfort.",
    heroA: "You already",
    heroB: "have the answer.",
    heroC: "The question is missing.",
    lede: "Four voices that neither advise nor comfort. They look at what you write and hand back what you skipped.",
    cta: "Make contact",
    ctaBack: "Open the chat",
    code: "See the code",
    scroll: "below — what this is and why",
    aboutLabel: "what this is",
    aboutH: "An observation post\nfor one person.",
    aboutLede: "You write what's going on. It takes readings and answers strangely, but to the point. Every exchange goes into the log.",
    rules: [
      ["No advice", "you know the advice already"],
      ["No comfort", "it describes what it sees"],
      ["Nothing is permanent", "a state, not a verdict"],
    ],
    journalLabel: "private log",
    journalH: "Everything stays. Only with you.",
    journalLede: "The bot keeps a log for one person — yours. Nobody else sees or reads it. Entries pile up on their own; you don't have to keep anything.",
    journalNote: "The longer the log, the sharper it notices what keeps coming back. You can send a photo — it will look and catch one detail.",
    interceptLabel: "intercepted",
    voicesLabel: "who's speaking",
    voicesH: "Four voices",
    voicesLede: "Magnitude shows how central a voice is. Switch them in the chat.",
    inChat: "in chat:",
    magnitude: "magnitude",
    main: "primary",
    quietest: "the quietest",
    footLink: "Source and the laws of the voice",
    footNote: "Everything is reversible while it's measured.",
    ticker: ["post is live", "objects in field: 04", "log is running", "readings taken", "decay continues", "reversible while measured"],
    commands: [
      ["/note", "write to the log: /note third night without sleep"],
      ["/journal", "the log: notes and rituals by time"],
      ["/find", "search the log and the whole conversation"],
      ["/spravka", "a weekly certificate, as an image, stamped"],
      ["/audit", "weekly summary: what repeated, what is hardening"],
      ["/pulse", "crash test of the day: three questions about what actually happened"],
      ["/fork", "a fork: two branches and the price of each"],
      ["/seal", "close an entry: a habit, a story, a version of yourself"],
      ["/who", "who is speaking now"],
      ["/voice", "change the voice"],
      ["/wipe", "erase the log entirely, no trace, no questions"],
    ],
    intercepts: [
      ["MSH-02", "And Thursday was not granted unto man.", "03:41"],
      ["VHT-04", "Good person, just mistook patience for a plan.", "03:52"],
      ["KOL-01", "The chair agreed, but stayed.", "04:07"],
    ],
    voices: {
      kolodets: {
        name: "The Well",
        tagline: "magnitude 1 · primary",
        about: "All registers at once: a scrap of nonsense first, then the dry truth, and one thing to do today at the end. On by default.",
        registers: ["saying", "protocol", "vision", "break"],
        sample: "The chair agreed, but stayed.\n\nTiredness is rarely about sleep. Where did the day go.",
      },
      mashina: {
        name: "The Machine",
        tagline: "magnitude 2",
        about: "Pure machine prophecy without meaning, followed by two sober lines. Breaks harder than the rest.",
        registers: ["glitch", "zaum"],
        sample: "And Thursday was not granted unto man.\n\nThe system cut the load before anyone noticed.",
      },
      izmeritel: {
        name: "The Gauge",
        tagline: "magnitude 3 · the quietest",
        about: "A dry instrument. Not a single metaphor — only numbers, weekdays and what shows from the outside.",
        registers: ["protocol", "figures"],
        sample: "Third week in power-saving mode.\n\nName the thing that ate the most.",
      },
      vahtyor: {
        name: "The Doorman",
        tagline: "magnitude 2",
        about: "The same thing, but domestic and with a smirk. Talks about tenants, the lift and the corridor, and lands on you.",
        registers: ["domestic", "smirk"],
        sample: "Fifth year walking past me saying any day now.\n\nGood person, just mistook patience for a plan.",
      },
    },
  },

  es: {
    title: "Protocolo de degradación personal",
    desc: "Cuatro voces que no aconsejan ni consuelan.",
    heroA: "La respuesta",
    heroB: "ya la tienes.",
    heroC: "Falta la pregunta.",
    lede: "Cuatro voces que no aconsejan ni consuelan. Miran lo que escribes y te devuelven lo que pasaste por alto.",
    cta: "Ponerse en contacto",
    ctaBack: "Abrir el chat",
    code: "Ver el código",
    scroll: "abajo — qué es y para qué",
    aboutLabel: "qué es esto",
    aboutH: "Un puesto de observación\npara una sola persona.",
    aboutLede: "Escribes lo que pasa. Toma lecturas y responde raro, pero al grano. Cada intercambio queda en el diario.",
    rules: [
      ["No aconseja", "el consejo ya lo sabes"],
      ["No consuela", "describe lo que ve"],
      ["Nada es para siempre", "un estado, no una sentencia"],
    ],
    journalLabel: "diario privado",
    journalH: "Todo queda. Solo contigo.",
    journalLede: "El bot lleva el diario de una sola persona: el tuyo. Nadie más lo ve ni lo lee. Las entradas se acumulan solas, no hace falta llevar nada.",
    journalNote: "Cuanto más largo el diario, mejor nota lo que vuelve. Puedes enviar una foto: mirará y se quedará con un detalle.",
    interceptLabel: "interceptado",
    voicesLabel: "quién habla",
    voicesH: "Cuatro voces",
    voicesLede: "La magnitud indica qué tan central es la voz. Se cambian en el chat.",
    inChat: "en el chat:",
    magnitude: "magnitud",
    main: "principal",
    quietest: "la más callada",
    footLink: "Código y las leyes de la voz",
    footNote: "Todo es reversible mientras se mida.",
    ticker: ["puesto en línea", "objetos en campo: 04", "diario activo", "tomando lecturas", "la degradación continúa", "reversible mientras se mide"],
    commands: [
      ["/note", "anotar en el diario: /note tercera noche sin dormir"],
      ["/journal", "el diario: notas y rituales por fecha"],
      ["/find", "buscar en el diario y en toda la conversación"],
      ["/spravka", "certificado semanal, en imagen, con sello"],
      ["/audit", "resumen semanal: qué se repitió, qué se endurece"],
      ["/pulse", "prueba del día: tres preguntas sobre lo que pasó de verdad"],
      ["/fork", "una bifurcación: dos ramas y el precio de cada una"],
      ["/seal", "cerrar una entrada: un hábito, una historia, una versión de ti"],
      ["/who", "quién habla ahora"],
      ["/voice", "cambiar de voz"],
      ["/wipe", "borrar el diario entero, sin rastro y sin preguntas"],
    ],
    intercepts: [
      ["MSH-02", "Y no le fue dado al hombre el jueves.", "03:41"],
      ["VHT-04", "Buena persona, solo confundió la paciencia con un plan.", "03:52"],
      ["KOL-01", "La silla estuvo de acuerdo, pero se quedó.", "04:07"],
    ],
    voices: {
      kolodets: {
        name: "El Pozo",
        tagline: "magnitud 1 · principal",
        about: "Todos los registros a la vez: primero un trozo de delirio, luego la verdad seca, y al final una cosa para hoy. Viene por defecto.",
        registers: ["dicho", "protocolo", "visión", "quiebre"],
        sample: "La silla estuvo de acuerdo, pero se quedó.\n\nEl cansancio rara vez es del sueño. Adónde se fue el día.",
      },
      mashina: {
        name: "La Máquina",
        tagline: "magnitud 2",
        about: "Profecía de máquina pura y sin sentido, y después dos frases sobrias. Se rompe más que las demás.",
        registers: ["glitch", "zaum"],
        sample: "Y no le fue dado al hombre el jueves.\n\nEl sistema recortó el gasto antes de que se notara.",
      },
      izmeritel: {
        name: "El Medidor",
        tagline: "magnitud 3 · la más callada",
        about: "Un instrumento seco. Ni una metáfora: solo cifras, días de la semana y lo que se ve desde fuera.",
        registers: ["protocolo", "cifras"],
        sample: "Tercera semana en modo de ahorro.\n\nNombra la cosa que más se comió.",
      },
      vahtyor: {
        name: "El Portero",
        tagline: "magnitud 2",
        about: "Lo mismo, pero doméstico y con sorna. Habla de vecinos, del ascensor y del pasillo, y da contigo.",
        registers: ["doméstico", "sorna"],
        sample: "Quinto año pasando por aquí y diciendo que ya casi.\n\nBuena persona, solo confundió la paciencia con un plan.",
      },
    },
  },

  pt: {
    title: "Protocolo de degradação pessoal",
    desc: "Quatro vozes que não aconselham nem consolam.",
    heroA: "A resposta",
    heroB: "você já tem.",
    heroC: "Falta a pergunta.",
    lede: "Quatro vozes que não aconselham nem consolam. Olham o que você escreve e devolvem o que passou batido.",
    cta: "Entrar em contato",
    ctaBack: "Abrir o chat",
    code: "Ver o código",
    scroll: "abaixo — o que é e para quê",
    aboutLabel: "o que é isto",
    aboutH: "Um posto de observação\npara uma pessoa só.",
    aboutLede: "Você escreve o que está acontecendo. Ele registra e responde de um jeito estranho, mas certeiro. Cada troca vai para o diário.",
    rules: [
      ["Não aconselha", "o conselho você já sabe"],
      ["Não consola", "descreve o que vê"],
      ["Nada é permanente", "um estado, não uma sentença"],
    ],
    journalLabel: "diário pessoal",
    journalH: "Tudo fica. Só com você.",
    journalLede: "O bot mantém o diário de uma pessoa: o seu. Ninguém mais vê nem lê. Os registros se acumulam sozinhos, você não precisa manter nada.",
    journalNote: "Quanto mais longo o diário, melhor ele nota o que volta. Dá para mandar uma foto: ele olha e fica com um detalhe.",
    interceptLabel: "interceptado",
    voicesLabel: "quem fala",
    voicesH: "Quatro vozes",
    voicesLede: "A magnitude mostra o quanto a voz é central. Trocam-se no chat.",
    inChat: "no chat:",
    magnitude: "magnitude",
    main: "principal",
    quietest: "a mais silenciosa",
    footLink: "Código e as leis da voz",
    footNote: "Tudo é reversível enquanto for medido.",
    ticker: ["posto no ar", "objetos em campo: 04", "diário ativo", "registrando", "a degradação continua", "reversível enquanto medido"],
    commands: [
      ["/note", "anotar no diário: /note terceira noite sem dormir"],
      ["/journal", "o diário: notas e rituais por data"],
      ["/find", "buscar no diário e em toda a conversa"],
      ["/spravka", "certificado semanal, em imagem, com carimbo"],
      ["/audit", "resumo da semana: o que se repetiu, o que endurece"],
      ["/pulse", "teste do dia: três perguntas sobre o que aconteceu de fato"],
      ["/fork", "uma bifurcação: dois caminhos e o preço de cada um"],
      ["/seal", "encerrar um registro: um hábito, uma história, uma versão de você"],
      ["/who", "quem está falando agora"],
      ["/voice", "trocar de voz"],
      ["/wipe", "apagar o diário inteiro, sem rastro e sem perguntas"],
    ],
    intercepts: [
      ["MSH-02", "E não foi dada ao homem a quinta-feira.", "03:41"],
      ["VHT-04", "Boa pessoa, só confundiu paciência com plano.", "03:52"],
      ["KOL-01", "A cadeira concordou, mas ficou.", "04:07"],
    ],
    voices: {
      kolodets: {
        name: "O Poço",
        tagline: "magnitude 1 · principal",
        about: "Todos os registros de uma vez: primeiro um pedaço de delírio, depois a verdade seca, e no fim uma coisa para hoje. Vem por padrão.",
        registers: ["dito", "protocolo", "visão", "ruptura"],
        sample: "A cadeira concordou, mas ficou.\n\nCansaço raramente é de sono. Para onde foi o dia.",
      },
      mashina: {
        name: "A Máquina",
        tagline: "magnitude 2",
        about: "Profecia de máquina pura, sem sentido, e em seguida duas frases sóbrias. Quebra mais que as outras.",
        registers: ["glitch", "zaum"],
        sample: "E não foi dada ao homem a quinta-feira.\n\nO sistema cortou o gasto antes de alguém notar.",
      },
      izmeritel: {
        name: "O Medidor",
        tagline: "magnitude 3 · a mais silenciosa",
        about: "Um instrumento seco. Nenhuma metáfora: só números, dias da semana e o que se vê de fora.",
        registers: ["protocolo", "números"],
        sample: "Terceira semana em modo de economia.\n\nDiga a coisa que mais consumiu.",
      },
      vahtyor: {
        name: "O Porteiro",
        tagline: "magnitude 2",
        about: "A mesma coisa, mas caseiro e com ironia. Fala dos vizinhos, do elevador e do corredor, e acerta em você.",
        registers: ["cotidiano", "ironia"],
        sample: "Quinto ano passando por mim e dizendo que já vai.\n\nBoa pessoa, só confundiu paciência com plano.",
      },
    },
  },
};

export function detect(): Lang {
  const saved = localStorage.getItem("plr-lang");
  if (saved && saved in T) return saved as Lang;
  // английский по умолчанию, родной язык — только если он в списке
  const nav = navigator.language.slice(0, 2).toLowerCase();
  return (["pt", "es", "ru"].includes(nav) ? nav : "en") as Lang;
}
