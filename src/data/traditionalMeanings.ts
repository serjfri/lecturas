// traditionalMeanings.ts

// Definición del tipo para las cartas tradicionales
export interface TraditionalCardMeaning {
  id: string;
  nombre: string;
  arcano: "Mayor" | "Menor"; // Puede ser Mayor o Menor
  numero?: number; // Opcional, ya que las figuras de la corte no tienen un número literal como los pips
  palo?: string; // Opcional para Arcanos Mayores
  elemento?: string;
  planeta?: string;
  signoAstrologico?: string;
  numerologia?: string;
  palabrasClaveDerechas: string[];
  palabrasClaveInvertidas: string[];
  significadoDerecho: string;
  significadoInvertido: string;
  detalleDerecho: string;
  detalleInvertido: string;
  meditacionReflexion?: { preguntas: string[] }; // Opcional
  arquetipo?: string; // Opcional
}

export const traditionalMeanings: TraditionalCardMeaning[] = [
  // --- Arcanos Mayores ---
  {
    id: "el-loco",
    nombre: "El Loco",
    arcano: "Mayor",
    numero: 0,
    palo: "N/A",
    elemento: "Aire",
    planeta: "Urano",
    signoAstrologico: "N/A (asociado con la libertad y la imprevisibilidad)",
    numerologia: "0 (Potencial ilimitado, nuevos comienzos, salto de fe)",    palabrasClaveDerechas: ["Nuevos comienzos", "oportunidad", "salto de fe", "espontaneidad", "libertad", "inocencia", "aventura", "potencial ilimitado"],
    palabrasClaveInvertidas: ["Imprudencia", "irresponsabilidad", "caos", "ingenuidad", "miedo a lo desconocido", "falta de dirección"],
    significadoDerecho: `El Loco representa el inicio de un viaje, una aventura hacia lo desconocido, llena de potencial ilimitado. Esta carta te invita a dar un salto de fe, a liberarte de las convenciones y a abrazar la espontaneidad. Simboliza la inocencia, la curiosidad y la apertura a nuevas experiencias.
    
    Cuando aparece El Loco, es un llamado a confiar en el universo y en tu intuición, incluso si el camino no está claro. Es el momento de ser audaz, de dejar atrás lo viejo y de explorar nuevas posibilidades sin miedo.`,
    significadoInvertido: `En posición invertida, El Loco advierte sobre la imprudencia, la irresponsabilidad o el miedo a dar el paso necesario. Puede indicar que estás actuando sin pensar en las consecuencias, o que estás siendo demasiado ingenuo ante una situación.
    
    También puede señalar una falta de dirección, un estancamiento por miedo a lo desconocido, o la resistencia a un cambio que es inevitable. Te invita a reevaluar tu camino y a encontrar un equilibrio entre la libertad y la responsabilidad.`,
    detalleDerecho: `El Loco en posición normal es una energía refrescante que te impulsa a salir de tu zona de confort. Te anima a ser fiel a ti mismo y a seguir tu propio camino, incluso si eso significa ir contra la corriente. Disfruta de la libertad y la emoción de lo nuevo.`,
    detalleInvertido: `Cuando El Loco aparece invertido, te pide que examines dónde estás siendo demasiado impulsivo o dónde te estás resistiendo a un cambio necesario. Es un recordatorio de que la verdadera libertad viene con la responsabilidad.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué salto de fe me está pidiendo la vida?",
        "¿Estoy abrazando nuevas experiencias con una mente abierta?",
        "¿Estoy siendo imprudente o valiente?",
        "¿Qué miedos me impiden avanzar hacia lo desconocido?",
        "¿Cómo puedo encontrar el equilibrio entre la libertad y la responsabilidad?"
      ]
    }
  },
  {
    id: "el-mago",
    nombre: "El Mago",
    arcano: "Mayor",
    numero: 1,
    palo: "N/A",
    elemento: "Aire",
    planeta: "Mercurio",
    signoAstrologico: "Géminis",
    numerologia: "1 (Comienzo, iniciativa, potencial, manifestación)",    palabrasClaveDerechas: ["Habilidad", "maestría", "manifestación", "iniciativa", "poder personal", "recursos", "comunicación", "creatividad"],
    palabrasClaveInvertidas: ["Manipulación", "engaño", "falta de propósito", "poder mal utilizado", "ineficacia", "dispersión de energía"],
    significadoDerecho: `El Mago representa el poder de manifestación y la capacidad de transformar ideas en realidad. Esta carta indica que tienes todas las herramientas, talentos y recursos necesarios para lograr tus objetivos. Es un momento de gran potencial donde tu voluntad y habilidad creativa están en su punto máximo.
    
    Cuando aparece El Mago, te anima a tomar la iniciativa, a confiar en tus capacidades y a usar tu inteligencia y comunicación para construir lo que deseas. Es el momento de poner tus planes en acción y demostrar tu maestría.`,
    significadoInvertido: `En posición invertida, El Mago advierte sobre la manipulación, el engaño o el uso ineficaz de tus habilidades. Puede indicar una falta de propósito, la dispersión de energía en demasiadas direcciones, o el abuso de poder personal.
    
    También puede señalar que estás sintiendo una falta de confianza en tus capacidades o que estás permitiendo que otros te manipulen. Te invita a reevaluar tus intenciones y a usar tu poder de manera ética y constructiva.`,
    detalleDerecho: `El Mago en posición normal te recuerda que eres el creador de tu realidad. Tienes el poder de dar forma a tu vida con tus pensamientos y acciones. Confía en tus habilidades y da el primer paso audaz.`,
    detalleInvertido: `Cuando El Mago aparece invertido, te pide que revises cómo estás utilizando tu influencia y tus recursos. Asegúrate de que tus intenciones sean puras y que no estés perdiendo el foco.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué recursos y habilidades poseo para manifestar mis deseos?",
        "¿Estoy tomando la iniciativa en mi vida o esperando que las cosas sucedan?",
        "¿Estoy usando mi poder de manera ética y constructiva?",
        "¿Qué ideas estoy listo para transformar en realidad?",
        "¿Cómo puedo mejorar mi comunicación para lograr mis objetivos?"
      ]
    }
  },
  {
    id: "la-sacerdotisa",
    nombre: "La Sacerdotisa",
    arcano: "Mayor",
    numero: 2,
    palo: "N/A",
    elemento: "Agua",
    planeta: "Luna",
    signoAstrologico: "Cáncer",
    numerologia: "2 (Dualidad, intuición, misterio, equilibrio)",    palabrasClaveDerechas: ["Intuición", "misterio", "conocimiento oculto", "subconsciente", "receptividad", "paciencia", "sabiduría interior", "secretos"],
    palabrasClaveInvertidas: ["Secretos revelados", "información oculta", "intuición bloqueada", "superficialidad", "juicios equivocados", "falta de fe"],
    significadoDerecho: `La Sacerdotisa representa el reino de la intuición, el conocimiento oculto y el subconsciente. Esta carta te invita a escuchar tu voz interior, a confiar en tus instintos y a buscar respuestas en la quietud de tu ser. Simboliza la paciencia, la receptividad y la sabiduría que reside más allá de la lógica.
    
    Cuando aparece La Sacerdotisa, es un llamado a la introspección, a la meditación y a la exploración de los misterios de la vida. Te anima a prestar atención a tus sueños, a tus sentimientos y a los mensajes sutiles que el universo te envía.`,
    significadoInvertido: `En posición invertida, La Sacerdotisa puede indicar que estás ignorando tu intuición, o que hay secretos que están siendo revelados o que necesitan ser expuestos. Puede señalar una falta de receptividad, una superficialidad en tu enfoque, o la incapacidad de confiar en tu sabiduría interior.
    
    También puede advertir sobre información oculta que te está perjudicando, o la necesidad de ser más discreto con tus propios secretos. Te invita a reconectar con tu mundo interior y a ser más honesto contigo mismo.`,
    detalleDerecho: `La Sacerdotisa en posición normal te guía hacia tu fuente más profunda de sabiduría. Es un recordatorio de que no todas las respuestas se encuentran en el mundo exterior. Confía en tu intuición y permite que el misterio se despliegue.`,
    detalleInvertido: `Cuando La Sacerdotisa aparece invertida, te pide que observes dónde estás resistiendo tu verdad interior o dónde la información te está siendo ocultada. Busca la claridad y confía en tu percepción, incluso si es incómoda.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué mensajes me está enviando mi intuición?",
        "¿Estoy prestando atención a mi sabiduría interior?",
        "¿Qué secretos (míos o de otros) están afectando mi vida?",
        "¿Cómo puedo profundizar mi conexión con mi subconsciente?",
        "¿Estoy siendo demasiado superficial en mi búsqueda de conocimiento?"
      ]
    }
  },
  {
    id: "la-emperatriz",
    nombre: "La Emperatriz",
    arcano: "Mayor",
    numero: 3,
    palo: "N/A",
    elemento: "Tierra",
    planeta: "Venus",
    signoAstrologico: "Tauro / Libra",
    numerologia: "3 (Creación, fertilidad, abundancia, expresión)",    palabrasClaveDerechas: ["Fertilidad", "abundancia", "creatividad", "naturaleza", "maternidad", "belleza", "sensualidad", "cuidado"],
    palabrasClaveInvertidas: ["Esterilidad", "bloqueo creativo", "dependencia", "negligencia", "inseguridad", "excesos", "falta de armonía"],
    significadoDerecho: `La Emperatriz representa la fertilidad, la abundancia y la creatividad en su máxima expresión. Esta carta simboliza la conexión con la naturaleza, la maternidad (en un sentido amplio de nutrir y crear) y la capacidad de manifestar belleza y prosperidad en tu vida.
    
    Cuando aparece La Emperatriz, te invita a conectar con tu lado creativo, a disfrutar de los placeres sensoriales y a permitir que la abundancia fluya. Es un momento propicio para el crecimiento, la concepción de nuevas ideas (o de un hijo) y para cuidar de ti mismo y de tu entorno.`,
    significadoInvertido: `En posición invertida, La Emperatriz puede indicar esterilidad (creativa o física), bloqueo creativo o una falta de conexión con la naturaleza y la abundancia. Puede señalar dependencia excesiva de otros, negligencia en el autocuidado o inseguridad sobre tu valor.
    
    También puede advertir sobre excesos, superficialidad o una falta de armonía en tus relaciones o en tu entorno. Te invita a reevaluar tu relación con la creatividad y a cultivar la abundancia desde un lugar más auténtico.`,
    detalleDerecho: `La Emperatriz en posición normal te llama a abrazar tu poder creativo y a nutrir todo lo que te rodea. Es un recordatorio de que la vida es un proceso de crecimiento y que tú eres parte fundamental de su belleza y abundancia.`,
    detalleInvertido: `Cuando La Emperatriz aparece invertida, te pide que examines dónde te estás negando la nutrición o dónde tu energía creativa está estancada. Busca la armonía y el equilibrio en tu vida, y reconecta con tu esencia más fértil.`,
    meditacionReflexion: {
      preguntas: [
        "¿Cómo puedo nutrir mi creatividad y permitir que fluya la abundancia?",
        "¿Estoy cuidando de mí mismo y de mi entorno de manera amorosa?",
        "¿Qué nuevas ideas o proyectos estoy listo para concebir y nutrir?",
        "¿Estoy disfrutando de los placeres sensoriales de la vida?",
        "¿Qué me impide conectar con la fertilidad y la abundancia?"
      ]
    }
  },
  {
    id: "el-emperador",
    nombre: "El Emperador",
    arcano: "Mayor",
    numero: 4,
    palo: "N/A",
    elemento: "Fuego",
    planeta: "Marte",
    signoAstrologico: "Aries",
    numerologia: "4 (Estabilidad, estructura, autoridad, control)",    palabrasClaveDerechas: ["Autoridad", "estructura", "control", "liderazgo", "estabilidad", "disciplina", "orden", "paternidad"],
    palabrasClaveInvertidas: ["Tiranía", "rigidez", "abuso de poder", "autoritarismo", "falta de control", "inmadurez", "estructuras débiles"],
    significadoDerecho: `El Emperador representa la autoridad, la estructura y el control. Esta carta simboliza el liderazgo fuerte y la capacidad de establecer orden en tu vida o en una situación. Es la energía de la paternidad, de la disciplina y de la construcción de bases sólidas.
    
    Cuando aparece El Emperador, te invita a tomar las riendas, a ser responsable y a establecer límites claros. Es un momento para organizar tus asuntos, para aplicar la lógica y la razón, y para ejercer tu poder de manera justa y efectiva.`,
    significadoInvertido: `En posición invertida, El Emperador advierte sobre la tiranía, la rigidez o el abuso de poder. Puede indicar una falta de control sobre ti mismo o sobre una situación, inmadurez, o estructuras débiles que necesitan ser reforzadas.
    
    También puede señalar una figura autoritaria que te está oprimiendo, o la necesidad de liberarte de reglas y normas que te están limitando. Te invita a encontrar un equilibrio entre el control y la flexibilidad, y a ejercer tu autoridad de manera más sabia y compasiva.`,
    detalleDerecho: `El Emperador en posición normal te impulsa a asumir tu rol de líder y a crear una base sólida para el éxito. Tu disciplina y tu capacidad para tomar decisiones difíciles son tus mayores fortalezas en este momento.`,
    detalleInvertido: `Cuando El Emperador aparece invertido, te pide que evalúes si estás siendo demasiado controlador o si te sientes abrumado por la falta de estructura. Busca el equilibrio y la flexibilidad en tu liderazgo.`,
    meditacionReflexion: {
      preguntas: [
        "¿Cómo puedo establecer más orden y estructura en mi vida?",
        "¿Estoy ejerciendo mi autoridad de manera justa y efectiva?",
        "¿Dónde necesito tomar las riendas y ser más disciplinado?",
        "¿Qué estructuras necesito construir para mi seguridad y estabilidad?",
        "¿Estoy siendo demasiado rígido o estoy abusando de mi poder?"
      ]
    }
  },
  {
    id: "el-sumo-sacerdote",
    nombre: "El Sumo Sacerdote",
    arcano: "Mayor",
    numero: 5,
    palo: "N/A",
    elemento: "Tierra",
    planeta: "Júpiter",
    signoAstrologico: "Tauro",
    numerologia: "5 (Conocimiento, tradición, mentoría, fe, guía)",    palabrasClaveDerechas: ["Tradición", "sabiduría", "mentoría", "institución", "fe", "espiritualidad", "enseñanza", "conformidad"],
    palabrasClaveInvertidas: ["Rebelión", "heterodoxia", "creencias limitantes", "dogmatismo", "falsa moral", "desinformación"],
    significadoDerecho: `El Sumo Sacerdote representa la tradición, la sabiduría y la búsqueda de conocimiento espiritual o institucional. Esta carta simboliza la necesidad de guía, de seguir reglas establecidas o de buscar un mentor que te ayude a encontrar tu camino. Es el maestro, el consejero espiritual o la figura de autoridad que te conecta con un sistema de creencias.
    
    Cuando aparece El Sumo Sacerdote, te invita a estudiar, a aprender de la experiencia de otros y a conformarte con las normas o tradiciones que te brindan estructura. Es un momento para buscar respuestas en la fe, en la moralidad y en las instituciones que te ofrecen un marco de referencia.`,
    significadoInvertido: `En posición invertida, El Sumo Sacerdote advierte sobre la rebelión contra las tradiciones, el dogmatismo o la falsa moral. Puede indicar que te sientes limitado por las reglas, que estás cuestionando tus creencias, o que estás siendo engañado por una figura de autoridad.
    
    También puede señalar la necesidad de encontrar tu propio camino espiritual, de liberarte de sistemas de creencias que ya no te sirven, o de desconfiar de consejos que no resuenan contigo. Te invita a buscar tu propia verdad, incluso si eso significa ir contra la corriente.`,
    detalleDerecho: `El Sumo Sacerdote en posición normal te ofrece un camino de sabiduría y estructura. Hay mucho que aprender de aquellos que han recorrido el camino antes que tú. Permite que la guía llegue a ti.`,
    detalleInvertido: `Cuando El Sumo Sacerdote aparece invertido, te desafía a cuestionar lo establecido y a forjar tu propio entendimiento. No tengas miedo de buscar tu propia verdad, incluso si contradice la norma.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué enseñanzas o tradiciones me están guiando en este momento?",
        "¿Necesito buscar un mentor o una guía espiritual?",
        "¿Estoy siguiendo las reglas por convicción o por miedo?",
        "¿Qué creencias limitantes me impiden crecer?",
        "¿Cómo puedo encontrar mi propia verdad en un mundo de dogmas?"
      ]
    }
  },
  {
    id: "los-amantes",
    nombre: "Los Amantes",
    arcano: "Mayor",
    numero: 6,
    palo: "N/A",
    elemento: "Aire",
    planeta: "Mercurio",
    signoAstrologico: "Géminis",
    numerologia: "6 (Elección, unión, armonía, relaciones)",    palabrasClaveDerechas: ["Elección", "amor", "relaciones", "unión", "armonía", "valores", "conexión", "decisión importante"],
    palabrasClaveInvertidas: ["Desarmonía", "conflicto", "ruptura", "infidelidad", "malas decisiones", "desequilibrio", "tentación"],
    significadoDerecho: `Los Amantes representan una elección crucial, a menudo relacionada con el amor, las relaciones o tus valores fundamentales. Esta carta simboliza la unión, la armonía y la necesidad de tomar una decisión consciente que esté alineada con tu verdadero ser.
    
    Cuando aparece Los Amantes, te invita a reflexionar sobre tus relaciones más importantes y a evaluar qué es lo que realmente valoras. Puede indicar el inicio de una relación significativa, la consolidación de una existente, o la necesidad de tomar una decisión ética o moral que definirá tu camino.`,
    significadoInvertido: `En posición invertida, Los Amantes advierte sobre la desarmonía, el conflicto o las malas decisiones en el ámbito de las relaciones. Puede indicar una ruptura, infidelidad, o la incapacidad de elegir entre opciones que te están causando conflicto interno.
    
    También puede señalar un desequilibrio en tus valores, la tentación de tomar el camino fácil o la dificultad para comprometerte. Te invita a examinar tus motivaciones y a buscar la verdadera armonía y alineación en tus elecciones.`,
    detalleDerecho: `Los Amantes en posición normal te confronta con una elección importante que te llevará a una mayor integración personal. Escucha tu corazón y tus valores más profundos para tomar la decisión correcta.`,
    detalleInvertido: `Cuando Los Amantes aparece invertida, es una señal de que hay desarmonía o conflicto interno en tus relaciones o decisiones. Es el momento de ser honesto contigo mismo sobre lo que realmente deseas y lo que es mejor para tu bienestar.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué elección importante necesito tomar en mi vida?",
        "¿Mis decisiones están alineadas con mis valores más profundos?",
        "¿Cómo puedo fomentar la armonía y la conexión en mis relaciones?",
        "¿Qué conflicto interno necesito resolver?",
        "¿Estoy evitando una decisión importante por miedo o indecisión?"
      ]
    }
  },
  {
    id: "el-carro",
    nombre: "El Carro",
    arcano: "Mayor",
    numero: 7,
    palo: "N/A",
    elemento: "Agua",
    planeta: "Cáncer (regente del Carro)",
    signoAstrologico: "Cáncer",
    numerologia: "7 (Victoria, control, avance, determinación)",    palabrasClaveDerechas: ["Victoria", "voluntad", "control", "determinación", "avance", "autodisciplina", "confianza", "éxito"],
    palabrasClaveInvertidas: ["Falta de control", "derrota", "arrogancia", "dispersión", "falta de dirección", "obstáculos internos", "impulsividad"],
    significadoDerecho: `El Carro representa la victoria, el control y el avance decidido hacia tus metas. Esta carta simboliza la fuerza de voluntad, la autodisciplina y la capacidad de superar obstáculos a través de la determinación. Es el momento de tomar las riendas de tu vida y dirigir tu energía hacia el éxito.
    
    Cuando aparece El Carro, te invita a ser audaz, a confiar en tu capacidad para controlar las situaciones y a mantener el enfoque en tus objetivos. Es un período propicio para viajes, nuevas empresas y para demostrar tu liderazgo y confianza en ti mismo.`,
    significadoInvertido: `En posición invertida, El Carro advierte sobre la falta de control, la dispersión de energía o la derrota. Puede indicar una lucha interna, obstáculos que te impiden avanzar, o la tendencia a ser demasiado arrogante o impulsivo en tus acciones.
    
    También puede señalar una falta de dirección, la incapacidad de controlar tus emociones, o la necesidad de reevaluar tus estrategias antes de seguir adelante. Te invita a encontrar el equilibrio y la disciplina necesarios para dirigir tu carro de manera efectiva.`,
    detalleDerecho: `El Carro en posición normal te impulsa a tomar el control y a avanzar con determinación. Tu fuerza de voluntad es tu mayor activo en este momento. Canaliza tu energía y dirígela hacia la victoria.`,
    detalleInvertido: `Cuando El Carro aparece invertido, te pide que examines dónde has perdido el control o dónde tu impulsividad te está llevando por mal camino. Revisa tu estrategia y recupera el equilibrio.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué áreas de mi vida necesito tomar el control y dirigir con determinación?",
        "¿Estoy canalizando mi energía de manera efectiva hacia mis metas?",
        "¿Qué obstáculos internos o externos necesito superar?",
        "¿Estoy confiando en mi capacidad para lograr el éxito?",
        "¿Dónde necesito aplicar más autodisciplina para avanzar?"
      ]
    }
  },
  {
    id: "la-fuerza",
    nombre: "La Fuerza",
    arcano: "Mayor",
    numero: 8,
    palo: "N/A",
    elemento: "Fuego",
    planeta: "Sol",
    signoAstrologico: "Leo",
    numerologia: "8 (Poder, dominio, equilibrio, autocontrol)",    palabrasClaveDerechas: ["Fuerza interior", "coraje", "paciencia", "autocontrol", "compasión", "determinación", "superación de miedos"],
    palabrasClaveInvertidas: ["Debilidad", "miedo", "falta de autocontrol", "agresión", "tiranía", "inseguridad", "bestialidad"],
    significadoDerecho: `La Fuerza representa el coraje, la paciencia y el autocontrol que provienen de la fortaleza interior. Esta carta simboliza la capacidad de dominar tus instintos más primarios, no a través de la represión, sino de la comprensión y la compasión. Es el triunfo del espíritu sobre la materia, de la mente sobre la bestia.
    
    Cuando aparece La Fuerza, te invita a enfrentar tus miedos con valentía, a canalizar tus pasiones de manera constructiva y a confiar en tu poder interior. Es un momento para demostrar tu resistencia, tu determinación y tu capacidad de superar cualquier desafío con gracia y serenidad.`,
    significadoInvertido: `En posición invertida, La Fuerza advierte sobre la debilidad, el miedo, la falta de autocontrol o la agresión desmedida. Puede indicar que estás siendo dominado por tus instintos, que te sientes impotente ante una situación, o que estás reprimiendo tus emociones de manera destructiva.
    
    También puede señalar una tendencia a la tiranía, la impaciencia o la inseguridad que te impide usar tu poder de manera efectiva. Te invita a reconectar con tu fuerza interior y a encontrar un equilibrio entre tu lado salvaje y tu lado civilizado.`,
    detalleDerecho: `La Fuerza en posición normal te anima a conectar con tu poder interior y a confiar en tu capacidad para dominar cualquier situación con calma y determinación. No es la fuerza bruta, sino la fuerza del espíritu.`,
    detalleInvertido: `Cuando La Fuerza aparece invertida, te pide que examines dónde estás cediendo al miedo o dónde tu energía se está volviendo incontrolable. Busca la raíz de tu inseguridad y trabaja en recuperar tu autocontrol.`,
    meditacionReflexion: {
      preguntas: [
        "¿Cómo puedo canalizar mis pasiones de manera constructiva?",
        "¿Qué miedos necesito enfrentar con valentía y compasión?",
        "¿Estoy ejerciendo autocontrol sobre mis impulsos?",
        "¿Cómo puedo conectar con mi fuerza interior para superar desafíos?",
        "¿Estoy reprimiendo mis emociones o las estoy integrando?"
      ]
    }
  },
  {
    id: "el-ermitano",
    nombre: "El Ermitaño",
    arcano: "Mayor",
    numero: 9,
    palo: "N/A",
    elemento: "Tierra",
    planeta: "Mercurio",
    signoAstrologico: "Virgo",
    numerologia: "9 (Sabiduría, introspección, guía interior, finalización)",    palabrasClaveDerechas: ["Introspección", "soledad", "sabiduría", "guía interior", "búsqueda espiritual", "reflexión", "discernimiento", "retiro"],
    palabrasClaveInvertidas: ["Aislamiento", "soledad forzada", "rigidez", "miedo a la soledad", "terquedad", "rechazo a la guía", "desconexión"],
    significadoDerecho: `El Ermitaño representa la introspección, la soledad y la búsqueda de sabiduría interior. Esta carta te invita a retirarte del bullicio del mundo para reflexionar, meditar y encontrar tus propias respuestas. Simboliza la necesidad de un periodo de auto-descubrimiento y de conexión con tu guía interna.
    
    Cuando aparece El Ermitaño, te anima a buscar la verdad dentro de ti mismo, a ser tu propia luz en la oscuridad y a aprender de tus experiencias. Es un momento propicio para el estudio, la meditación y para encontrar claridad sobre tu propósito.`,
    significadoInvertido: `En posición invertida, El Ermitaño advierte sobre el aislamiento forzado, el miedo a la soledad o la rigidez mental. Puede indicar que te estás cerrando al mundo de manera destructiva, que estás rechazando la guía o los consejos, o que te sientes desconectado de los demás.
    
    También puede señalar una tendencia a la terquedad, la incapacidad de ver otras perspectivas o la negación de la ayuda que necesitas. Te invita a encontrar un equilibrio entre la soledad necesaria y la conexión con el mundo exterior.`,
    detalleDerecho: `El Ermitaño en posición normal te guía hacia la quietud y la reflexión. Las respuestas que buscas no están afuera, sino dentro de ti. Abraza este tiempo de retiro para encontrar tu verdad.`,
    detalleInvertido: `Cuando El Ermitaño aparece invertido, te pide que examines si tu soledad se ha vuelto un aislamiento dañino. Busca la conexión con otros cuando sea necesario y no temas pedir ayuda.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué verdades necesito descubrir en la soledad?",
        "¿Estoy buscando las respuestas dentro de mí o fuera?",
        "¿Qué me impide conectar con mi guía interior?",
        "¿Estoy equilibrando la soledad con la conexión social?",
        "¿Qué sabiduría he ganado a través de la introspección?"
      ]
    }
  },
  {
    id: "la-rueda-de-la-fortuna",
    nombre: "La Rueda de la Fortuna",
    arcano: "Mayor",
    numero: 10,
    palo: "N/A",
    elemento: "Fuego",
    planeta: "Júpiter",
    signoAstrologico: "Sagitario",
    numerologia: "10 (Ciclos, destino, cambio, oportunidad)",    palabrasClaveDerechas: ["Cambio", "oportunidad", "destino", "suerte", "ciclos", "momentum", "nuevas posibilidades", "giro del destino"],
    palabrasClaveInvertidas: ["Mala suerte", "retrasos", "mala fortuna", "resistencia al cambio", "patrones negativos", "oportunidades perdidas"],
    significadoDerecho: `La Rueda de la Fortuna representa el cambio, el destino y la llegada de nuevas oportunidades. Esta carta simboliza los ciclos de la vida, la suerte y la idea de que todo está en constante movimiento. Es un recordatorio de que la fortuna puede cambiar en cualquier momento, trayendo consigo nuevas posibilidades y giros inesperados.
    
    Cuando aparece La Rueda de la Fortuna, te invita a adaptarte al cambio, a aprovechar las oportunidades que se presentan y a confiar en el flujo de la vida. Es un momento propicio para el crecimiento, la expansión y para reconocer que eres parte de un plan más grande.`,
    significadoInvertido: `En posición invertida, La Rueda de la Fortuna advierte sobre la mala suerte, los retrasos o la resistencia al cambio. Puede indicar que te sientes atrapado en patrones negativos, que estás perdiendo oportunidades o que estás luchando contra el flujo natural de la vida.
    
    También puede señalar una falta de control sobre tu destino, la incapacidad de adaptarte a nuevas circunstancias o la necesidad de examinar tus acciones para cambiar tu fortuna. Te invita a ser más proactivo y a tomar responsabilidad por tu propio camino.`,
    detalleDerecho: `La Rueda de la Fortuna en posición normal te anima a abrazar el cambio y a confiar en que el universo está alineando las cosas a tu favor. Las oportunidades están a tu alcance; sé flexible y atrévete a girar con la rueda.`,
    detalleInvertido: `Cuando La Rueda de la Fortuna aparece invertida, te pide que examines dónde te estás resistiendo al cambio o dónde necesitas tomar más las riendas de tu destino. No dejes que la inercia te detenga.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué cambios están ocurriendo en mi vida y cómo puedo adaptarme a ellos?",
        "¿Estoy aprovechando las oportunidades que se me presentan?",
        "¿Cómo puedo influir en mi propio destino de manera positiva?",
        "¿Qué patrones necesito romper para cambiar mi fortuna?",
        "¿Confío en el flujo de la vida, incluso cuando es incierto?"
      ]
    }
  },
  {
    id: "la-justicia",
    nombre: "La Justicia",
    arcano: "Mayor",
    numero: 11,
    palo: "N/A",
    elemento: "Aire",
    planeta: "Venus",
    signoAstrologico: "Libra",
    numerologia: "11 (Equilibrio, karma, verdad, responsabilidad)",    palabrasClaveDerechas: ["Justicia", "equilibrio", "verdad", "imparcialidad", "responsabilidad", "causa y efecto", "ley", "honestidad"],
    palabrasClaveInvertidas: ["Injusticia", "desequilibrio", "prejuicio", "deshonestidad", "irresponsabilidad", "fraude", "culpa"],
    significadoDerecho: `La Justicia representa la verdad, el equilibrio y la imparcialidad. Esta carta simboliza la necesidad de actuar con integridad y de asumir la responsabilidad por tus acciones. Es un recordatorio de que la ley del karma está en juego y que recibirás lo que has sembrado.
    
    Cuando aparece La Justicia, te invita a buscar la verdad en todas las situaciones, a tomar decisiones justas y a mantener el equilibrio en tus relaciones. Es un momento propicio para resolver disputas, para firmar contratos o para enfrentar las consecuencias de tus decisiones con honestidad.`,
    significadoInvertido: `En posición invertida, La Justicia advierte sobre la injusticia, el desequilibrio o la deshonestidad. Puede indicar que estás evitando la responsabilidad, que hay prejuicios en juego o que te sientes víctima de una situación injusta.
    
    También puede señalar un proceso legal injusto, la dificultad para tomar decisiones imparciales o la necesidad de examinar tus propias acciones para encontrar la equidad. Te invita a ser honesto contigo mismo y con los demás, y a buscar la verdadera justicia en todas tus interacciones.`,
    detalleDerecho: `La Justicia en posición normal te llama a la honestidad y la integridad. El universo te pide que seas justo en tus tratos y que confíes en que el equilibrio será restaurado.`,
    detalleInvertido: `Cuando La Justicia aparece invertida, te desafía a reconocer dónde hay desequilibrio o injusticia. Es el momento de tomar responsabilidad y buscar la verdad, incluso si es incómoda.`,
    meditacionReflexion: {
      preguntas: [
        "¿Estoy actuando con integridad y responsabilidad?",
        "¿Qué decisiones justas necesito tomar en este momento?",
        "¿Estoy asumiendo las consecuencias de mis acciones?",
        "¿Dónde hay desequilibrio en mi vida que necesita ser corregido?",
        "¿Cómo puedo buscar la verdad con imparcialidad?"
      ]
    }
  },
  {
    id: "el-colgado",
    nombre: "El Colgado",
    arcano: "Mayor",
    numero: 12,
    palo: "N/A",
    elemento: "Agua",
    planeta: "Neptuno",
    signoAstrologico: "Piscis",
    numerologia: "12 (Sacrificio, perspectiva, suspensión, iluminación)",    palabrasClaveDerechas: ["Sacrificio", "perspectiva", "suspensión", "rendición", "iluminación", "pausa", "cambio de visión", "desapego"],
    palabrasClaveInvertidas: ["Resistencia", "martirio", "estancamiento", "egoísmo", "oportunidades perdidas", "sacrificio inútil", "incapacidad de soltar"],
    significadoDerecho: `El Colgado representa un periodo de suspensión, sacrificio y cambio de perspectiva. Esta carta te invita a soltar el control, a rendirte a la situación y a ver las cosas desde un punto de vista completamente nuevo. Simboliza la iluminación que viene a través de la paciencia, la espera y la disposición a hacer sacrificios personales por un bien mayor.
    
    Cuando aparece El Colgado, te anima a hacer una pausa, a meditar y a liberarte de viejas formas de pensar. Es un momento propicio para el desapego, para ver la vida con otros ojos y para encontrar la paz en la aceptación de lo que es.`,
    significadoInvertido: `En posición invertida, El Colgado advierte sobre la resistencia al cambio, el martirio o el estancamiento. Puede indicar que te sientes atrapado, que estás sacrificando demasiado sin un propósito claro, o que te niegas a soltar viejos patrones.
    
    También puede señalar egoísmo, la incapacidad de ver otras perspectivas o la pérdida de oportunidades por negarte a hacer los sacrificios necesarios. Te invita a examinar tus motivaciones y a liberarte de lo que te está reteniendo.`,
    detalleDerecho: `El Colgado en posición normal te invita a una profunda introspección y a una transformación de la perspectiva. A veces, soltar el control es la única forma de avanzar. Confía en el proceso.`,
    detalleInvertido: `Cuando El Colgado aparece invertido, te pide que examines dónde te estás resistiendo a la verdad o dónde te sientes estancado. Libérate de las cadenas autoimpuestas y busca una nueva forma de ver las cosas.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué necesito soltar o sacrificar para obtener una nueva perspectiva?",
        "¿Estoy resistiéndome a un cambio necesario en mi vida?",
        "¿Cómo puedo ver esta situación desde un ángulo diferente?",
        "¿Estoy usando la paciencia y la espera a mi favor?",
        "¿Qué me impide rendirme al flujo de la vida?"
      ]
    }
  },
  {
    id: "la-muerte",
    nombre: "La Muerte",
    arcano: "Mayor",
    numero: 13,
    palo: "N/A",
    elemento: "Agua",
    planeta: "Plutón",
    signoAstrologico: "Escorpio",
    numerologia: "13 (Transformación, fin de ciclo, renovación, cambio radical)",    palabrasClaveDerechas: ["Transformación", "fin de ciclo", "renovación", "cambio radical", "liberación", "aceptación", "desapego", "muerte y renacimiento"],
    palabrasClaveInvertidas: ["Resistencia al cambio", "estancamiento", "miedo al fin", "negación", "ruptura incompleta", "desesperación", "pérdida"],
    significadoDerecho: `La Muerte representa la transformación radical, el fin de un ciclo y la necesidad de dejar ir lo viejo para que nazca lo nuevo. Esta carta no simboliza la muerte física (necesariamente), sino un cambio profundo y fundamental que es inevitable. Es un proceso de desapego, de limpieza y de renacimiento.
    
    Cuando aparece La Muerte, te invita a aceptar el final de una etapa, a liberarte de lo que ya no te sirve y a prepararte para una profunda transformación. Es un momento propicio para soltar el control, para permitir que las cosas se disuelvan y para abrazar la oportunidad de un nuevo comienzo.`,
    significadoInvertido: `En posición invertida, La Muerte advierte sobre la resistencia al cambio, el estancamiento o el miedo a la finalización. Puede indicar que te niegas a dejar ir una situación, que estás aferrándote al pasado o que estás sufriendo una ruptura incompleta.
    
    También puede señalar desesperación, la incapacidad de ver la oportunidad en el final o la necesidad de acelerar un proceso de transformación. Te invita a enfrentar tus miedos, a soltar el control y a permitir que la vida te guíe hacia tu siguiente etapa.`,
    detalleDerecho: `La Muerte en posición normal te asegura que, aunque este final sea doloroso, es absolutamente necesario para tu evolución. Permítete el luto, pero luego abraza la promesa de un renacimiento.`,
    detalleInvertido: `Cuando La Muerte aparece invertida, te advierte sobre la resistencia a un cambio inevitable. Aferrarte al pasado solo prolongará tu sufrimiento. Es momento de soltar y permitir que la vida te transforme.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué necesito dejar ir en mi vida para permitir un nuevo comienzo?",
        "¿Estoy resistiéndome a un cambio que es inevitable?",
        "¿Cómo puedo abrazar la transformación con aceptación y fe?",
        "¿Qué lecciones he aprendido de los finales en mi vida?",
        "¿Estoy listo para un renacimiento profundo?"
      ]
    }
  },
  {
    id: "la-templanza",
    nombre: "La Templanza",
    arcano: "Mayor",
    numero: 14,
    palo: "N/A",
    elemento: "Fuego",
    planeta: "Sagitario",
    signoAstrologico: "Sagitario",
    numerologia: "14 (Equilibrio, armonía, moderación, integración)",    palabrasClaveDerechas: ["Equilibrio", "armonía", "moderación", "paciencia", "integración", "propósito", "sanación", "flujo"],
    palabrasClaveInvertidas: ["Desequilibrio", "desarmonía", "exceso", "impaciencia", "conflicto", "falta de moderación", "dispersión"],
    significadoDerecho: `La Templanza representa el equilibrio, la armonía y la moderación. Esta carta te invita a encontrar el punto medio, a integrar diferentes aspectos de tu vida y a actuar con paciencia y propósito. Simboliza la sanación, la combinación de elementos opuestos y la búsqueda de la armonía interior.
    
    Cuando aparece La Templanza, te anima a ser paciente, a mantener la calma en situaciones difíciles y a encontrar el flujo natural de las cosas. Es un momento propicio para la mediación, la colaboración y para encontrar un sentido de propósito en tu vida.`,
    significadoInvertido: `En posición invertida, La Templanza advierte sobre el desequilibrio, la desarmonía o los excesos. Puede indicar que te sientes disperso, que estás actuando con impaciencia o que estás luchando por encontrar un propósito claro.
    
    También puede señalar un conflicto interno o externo, la falta de moderación en tus hábitos o la necesidad de reevaluar tus prioridades para restaurar el equilibrio. Te invita a buscar la moderación y a integrar las diferentes partes de ti mismo para encontrar la paz.`,
    detalleDerecho: `La Templanza en posición normal te guía hacia la paz interior a través del equilibrio. Es un recordatorio de que la moderación y la paciencia son claves para la armonía en todos los aspectos de tu vida.`,
    detalleInvertido: `Cuando La Templanza aparece invertida, te pide que examines dónde te has desequilibrado o dónde tus excesos te están perjudicando. Es el momento de buscar la moderación y de reconectar con tu centro.`,
    meditacionReflexion: {
      preguntas: [
        "¿Cómo puedo encontrar más equilibrio y armonía en mi vida?",
        "¿Estoy actuando con paciencia y moderación en mis decisiones?",
        "¿Qué aspectos de mí mismo necesito integrar para sentirme completo?",
        "¿Estoy dispersando mi energía en demasiadas direcciones?",
        "¿Qué propósito me guía en este momento de mi vida?"
      ]
    }
  },
  {
    id: "el-diablo",
    nombre: "El Diablo",
    arcano: "Mayor",
    numero: 15,
    palo: "N/A",
    elemento: "Tierra",
    planeta: "Saturno",
    signoAstrologico: "Capricornio",
    numerologia: "15 (Sombra, adicción, liberación, engaño, tentación)",    palabrasClaveDerechas: ["Sombra", "adicción", "tentación", "servidumbre", "materialismo", "obsesión", "trampa", "liberación (al reconocer la trampa)"],
    palabrasClaveInvertidas: ["Liberación", "ruptura de cadenas", "superación de adicciones", "despertar", "independencia", "reconocimiento de la verdad", "recuperación"],
    significadoDerecho: `El Diablo representa las cadenas autoimpuestas, las adicciones, las tentaciones y la sombra de tu propia psique. Esta carta simboliza la esclavitud a deseos materiales, obsesiones o comportamientos destructivos. Sin embargo, también te muestra que las cadenas son ilusorias y que tienes el poder de liberarte en cualquier momento.
    
    Cuando aparece El Diablo, te invita a confrontar tus miedos, tus vicios y aquello que te mantiene atrapado. Es un momento para reconocer tus adicciones (no solo a sustancias, sino a patrones de pensamiento o relaciones), para romper con la servidumbre y para reclamar tu libertad.`,
    significadoInvertido: `En posición invertida, El Diablo indica la liberación de cadenas, la superación de adicciones y el despertar a la verdad. Representa el momento en que reconoces la trampa y decides romper con lo que te estaba limitando.
    
    También puede señalar el inicio de un proceso de recuperación, la búsqueda de independencia o la capacidad de ver a través del engaño y la manipulación. Te invita a celebrar tu fuerza para liberarte y a abrazar tu poder personal.`,
    detalleDerecho: `El Diablo en posición normal te confronta con tus sombras y tus adicciones. Te recuerda que eres el único que puede romper las cadenas autoimpuestas. El primer paso es reconocerlas.`,
    detalleInvertido: `Cuando El Diablo aparece invertido, celebra tu valentía para liberarte de lo que te ataba. Has dado un paso crucial hacia tu independencia y crecimiento personal.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué me está encadenando o limitando en este momento?",
        "¿Soy consciente de mis adicciones (materiales, emocionales, mentales)?",
        "¿Cómo puedo liberarme de los patrones destructivos?",
        "¿Estoy confrontando mis miedos o los estoy reprimiendo?",
        "¿Qué tentaciones me están desviando de mi camino?"
      ]
    }
  },
  {
    id: "la-torre",
    nombre: "La Torre",
    arcano: "Mayor",
    numero: 16,
    palo: "N/A",
    elemento: "Fuego",
    planeta: "Marte",
    signoAstrologico: "Leo",
    numerologia: "16 (Destrucción, revelación, cambio repentino, despertar)",    palabrasClaveDerechas: ["Destrucción", "cambio repentino", "revelación", "crisis", "derrumbe", "despertar", "liberación", "caos"],
    palabrasClaveInvertidas: ["Resistencia al cambio", "evitar la crisis", "desastre inminente (aún no manifestado)", "miedo al caos", "cambio pospuesto", "turbulencia prolongada"],
    significadoDerecho: `La Torre representa la destrucción repentina de estructuras, creencias o situaciones que ya no te sirven. Esta carta simboliza una crisis, una revelación abrupta o un despertar que derrumba todo lo que creías sólido. Es un cambio inevitable y a menudo caótico que, aunque doloroso, es necesario para tu crecimiento.
    
    Cuando aparece La Torre, te invita a aceptar el colapso, a soltar lo que ya no tiene fundamentos y a liberarte de ilusiones. Es un momento propicio para la purificación, para reconstruir sobre bases más auténticas y para reconocer que esta destrucción abre el camino a algo nuevo.`,
    significadoInvertido: `En posición invertida, La Torre advierte sobre la resistencia al cambio, el miedo al caos o la evitación de una crisis inevitable. Puede indicar que estás prolongando el sufrimiento al aferrarte a lo que debe caer, o que estás intentando evitar una verdad dolorosa.
    
    También puede señalar un desastre inminente que aún no se ha manifestado completamente, o la necesidad de acelerar un proceso de demolición para poder reconstruir. Te invita a ser honesto contigo mismo y a permitir que las estructuras falsas se derrumben para tu bien.`,
    detalleDerecho: `La Torre en posición normal es una fuerza de purificación. Aunque puede ser dolorosa, esta carta te asegura que lo que se derrumba no era lo suficientemente sólido. Abraza el caos como una oportunidad para reconstruir sobre cimientos más verdaderos.`,
    detalleInvertido: `Cuando La Torre aparece invertida, te pide que examines si estás evitando lo inevitable. La resistencia solo prolonga el proceso. Permite que el cambio suceda y busca la verdad que se revela en el caos.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué estructuras o creencias en mi vida necesitan derrumbarse?",
        "¿Estoy resistiéndome a un cambio necesario?",
        "¿Cómo puedo encontrar la liberación en medio de la crisis?",
        "¿Qué verdades se están revelando a través de este caos?",
        "¿Estoy listo para reconstruir sobre bases más auténticas?"
      ]
    }
  },
  {
    id: "la-estrella",
    nombre: "La Estrella",
    arcano: "Mayor",
    numero: 17,
    palo: "N/A",
    elemento: "Aire",
    planeta: "Urano",
    signoAstrologico: "Acuario",
    numerologia: "17 (Esperanza, inspiración, curación, renovación)",    palabrasClaveDerechas: ["Esperanza", "inspiración", "sanación", "renovación", "guía divina", "calma", "optimismo", "conexión espiritual"],
    palabrasClaveInvertidas: ["Desesperanza", "desconexión", "falta de fe", "pesimismo", "duda", "bloqueo creativo", "desilusión"],
    significadoDerecho: `La Estrella representa la esperanza, la inspiración y la sanación después de un período de oscuridad o crisis. Esta carta simboliza la guía divina, la renovación espiritual y la capacidad de ver la luz al final del túnel. Es un momento de optimismo, de fe y de conexión con el universo.
    
    Cuando aparece La Estrella, te invita a confiar en el futuro, a seguir tu intuición y a permitir que la inspiración fluya a través de ti. Es un momento propicio para la curación emocional, para la meditación y para encontrar tu propósito en la vida.`,
    significadoInvertido: `En posición invertida, La Estrella advierte sobre la desesperanza, la desconexión o la falta de fe. Puede indicar que te sientes pesimista, que has perdido la inspiración o que estás dudando de tu camino.
    
    También puede señalar un bloqueo creativo, la incapacidad de ver la luz en la oscuridad o la necesidad de reconectar con tu espiritualidad. Te invita a buscar la esperanza dentro de ti, a confiar en el proceso y a permitir que la inspiración regrese a tu vida.`,
    detalleDerecho: `La Estrella en posición normal es un faro de luz después de la tormenta. Te recuerda que la esperanza nunca se pierde y que la guía divina está siempre contigo. Abre tu corazón a la sanación y la inspiración.`,
    detalleInvertido: `Cuando La Estrella aparece invertida, te pide que examines dónde has perdido la esperanza o dónde tu fe está siendo probada. Busca la conexión con algo más grande que tú y permite que la luz te guíe.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué me trae esperanza y optimismo en este momento?",
        "¿Estoy permitiendo que la inspiración fluya a través de mí?",
        "¿Cómo puedo conectar con mi guía divina para encontrar mi propósito?",
        "¿Qué necesito sanar para avanzar con fe?",
        "¿Estoy dudando de mi camino o de mis capacidades?"
      ]
    }
  },
  {
    id: "la-luna",
    nombre: "La Luna",
    arcano: "Mayor",
    numero: 18,
    palo: "N/A",
    elemento: "Agua",
    planeta: "Luna",
    signoAstrologico: "Piscis",
    numerologia: "18 (Ilusión, misterio, subconsciente, sueños)",    palabrasClaveDerechas: ["Ilusión", "misterio", "subconsciente", "sueños", "intuición", "miedos", "engañocimientos", "ciclos emocionales"],
    palabrasClaveInvertidas: ["Claridad", "revelación", "liberación de miedos", "honestidad", "superación de engaños", "despertar a la verdad"],
    significadoDerecho: `La Luna representa el reino de las ilusiones, los misterios, el subconsciente y los miedos ocultos. Esta carta simboliza la confusión, la incertidumbre y la necesidad de navegar por las profundidades de tus emociones. Es un momento donde la realidad puede no ser lo que parece y donde tus instintos están a flor de piel.
    
    Cuando aparece La Luna, te invita a explorar tus sueños, tus intuiciones y tus miedos más profundos. Es un momento propicio para la introspección, para enfrentar tus sombras y para confiar en tu guía interior, incluso si el camino es oscuro.`,
    significadoInvertido: `En posición invertida, La Luna indica la llegada de la claridad, la revelación de secretos o la liberación de miedos e ilusiones. Representa el momento en que la verdad sale a la luz y te liberas de la confusión.
    
    También puede señalar la superación de engaños, la honestidad contigo mismo o con los demás, o la capacidad de ver a través de las apariencias. Te invita a abrazar la verdad, incluso si es incómoda, y a confiar en tu capacidad para navegar por las aguas turbulentas.`,
    detalleDerecho: `La Luna en posición normal te sumerge en el reino del subconsciente. Permítete explorar tus sueños y tus miedos, porque la verdad se encuentra en las profundidades. Confía en tu intuición, incluso si la situación es incierta.`,
    detalleInvertido: `Cuando La Luna aparece invertida, te ofrece una visión de claridad después de la confusión. Las ilusiones se disipan y la verdad se revela. Es el momento de ser honesto contigo mismo y de abrazar la luz.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué miedos ocultos están afectando mi vida?",
        "¿Estoy lidiando con ilusiones o engaños?",
        "¿Cómo puedo conectar con mi intuición y mis sueños para encontrar respuestas?",
        "¿Estoy listo para enfrentar mis sombras y liberar mis miedos?",
        "¿Qué verdades se están revelando a través de mis experiencias?"
      ]
    }
  },
  {
    id: "el-sol",
    nombre: "El Sol",
    arcano: "Mayor",
    numero: 19,
    palo: "N/A",
    elemento: "Fuego",
    planeta: "Sol",
    signoAstrologico: "Leo",
    numerologia: "19 (Claridad, éxito, alegría, vitalidad, iluminación)",    palabrasClaveDerechas: ["Alegría", "éxito", "vitalidad", "claridad", "iluminación", "felicidad", "optimismo", "verdad", "inocencia"],
    palabrasClaveInvertidas: ["Pesimismo", "tristeza", "falta de vitalidad", "desilusión", "egoísmo", "bloqueo", "oscuridad", "éxito oculto"],
    significadoDerecho: `El Sol representa la alegría, el éxito, la vitalidad y la claridad absoluta. Esta carta simboliza la iluminación, la verdad que sale a la luz y la felicidad que viene de vivir en autenticidad. Es un momento de optimismo, de celebración y de manifestación plena.
    
    Cuando aparece El Sol, te invita a abrazar la vida con entusiasmo, a compartir tu luz con los demás y a celebrar tus logros. Es un momento propicio para el reconocimiento, para las relaciones felices y para disfrutar de la plenitud de la vida.`,
    significadoInvertido: `En posición invertida, El Sol advierte sobre el pesimismo, la tristeza o la falta de vitalidad. Puede indicar que te sientes bloqueado, que estás experimentando una desilusión o que estás ocultando tu verdadera luz.
    
    También puede señalar egoísmo, la incapacidad de ver la alegría en la vida o la necesidad de reconectar con tu fuente de vitalidad. Te invita a buscar la luz dentro de ti, a liberarte de lo que te está opacando y a permitir que tu verdadero ser brille.`,
    detalleDerecho: `El Sol en posición normal es un regalo de alegría y claridad. Disfruta de este momento de éxito y reconocimiento, y permite que tu luz interior irradie. Es un recordatorio de que eres un ser de luz y de que mereces toda la felicidad.`,
    detalleInvertido: `Cuando El Sol aparece invertido, te pide que examines dónde te estás negando la alegría o dónde tu luz se está ocultando. Busca la fuente de tu pesimismo y trabaja en liberar lo que te impide brillar.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué me trae alegría y vitalidad en este momento?",
        "¿Estoy compartiendo mi luz con los demás?",
        "¿Cómo puedo celebrar mis logros y reconocer mi valor?",
        "¿Qué me impide brillar con todo mi esplendor?",
        "¿Estoy viviendo en autenticidad y verdad?"
      ]
    }
  },
  {
    id: "el-juicio",
    nombre: "El Juicio",
    arcano: "Mayor",
    numero: 20,
    palo: "N/A",
    elemento: "Fuego",
    planeta: "Plutón",
    signoAstrologico: "Escorpio",
    numerologia: "20 (Resurrección, juicio final, llamado, liberación)",    palabrasClaveDerechas: ["Juicio", "renacimiento", "evaluación", "llamado", "absolución", "liberación", "perdón", "despertar espiritual"],
    palabrasClaveInvertidas: ["Autocondena", "culpa", "miedo al juicio", "rechazo", "retrasos", "malentendidos", "incapacidad de perdonar"],
    significadoDerecho: `El Juicio representa el renacimiento, la evaluación y la absolución. Esta carta simboliza un llamado a despertar, a perdonarte a ti mismo y a otros, y a liberarte del pasado. Es un momento de profunda introspección donde te enfrentas a tus acciones y recibes la oportunidad de un nuevo comienzo.
    
    Cuando aparece El Juicio, te invita a reflexionar sobre tu vida hasta ahora, a aprender de tus errores y a aceptar la responsabilidad por tu camino. Es un momento propicio para el perdón, para las revelaciones importantes y para liberarte de la culpa que te ha estado pesando.`,
    significadoInvertido: `En posición invertida, El Juicio advierte sobre la autocondena, la culpa persistente o el miedo al juicio de otros. Puede indicar que estás evitando enfrentar tus errores, que te niegas a perdonarte a ti mismo o a otros, o que estás siendo demasiado duro contigo mismo.
    
    También puede señalar un rechazo, malentendidos o la incapacidad de liberarte del pasado. Te invita a soltar la culpa, a perdonar y a abrazar la oportunidad de un nuevo comienzo sin el peso de juicios pasados.`,
    detalleDerecho: `El Juicio en posición normal es una invitación a la redención y al renacimiento. Es el momento de hacer las paces con tu pasado y de perdonarte a ti mismo. Un nuevo capítulo te espera, libre de culpas.`,
    detalleInvertido: `Cuando El Juicio aparece invertido, te pide que examines dónde te estás autocondenando o dónde te niegas a perdonar. La verdadera liberación viene de soltar el peso del pasado.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué necesito perdonar en mi vida, a mí mismo o a otros?",
        "¿Estoy asumiendo la responsabilidad por mis acciones y mi camino?",
        "¿Qué me impide liberarme de la culpa o el remordimiento?",
        "¿Estoy listo para un nuevo comienzo, libre del peso del pasado?",
        "¿Cómo puedo escuchar el llamado a despertar en mi vida?"
      ]
    }
  },
  {
    id: "el-mundo",
    nombre: "El Mundo",
    arcano: "Mayor",
    numero: 21,
    palo: "N/A",
    elemento: "Tierra",
    planeta: "Saturno",
    signoAstrologico: "Capricornio",
    numerologia: "21 (Culminación, realización, totalidad, integración)",    palabrasClaveDerechas: ["Culminación", "realización", "totalidad", "éxito", "integración", "logro", "completud", "viaje exitoso"],
    palabrasClaveInvertidas: ["Incompletitud", "retrasos", "falta de cierre", "estancamiento", "final pospuesto", "viaje sin fin", "insatisfacción"],
    significadoDerecho: `El Mundo representa la culminación, la realización y la totalidad. Esta carta simboliza el éxito en tus esfuerzos, la integración de todas las partes de ti mismo y la sensación de plenitud y completud. Es el final de un ciclo significativo y el logro de tus objetivos.
    
    Cuando aparece El Mundo, te invita a celebrar tus logros, a reconocer tu camino y a disfrutar de la sensación de realización. Es un momento propicio para viajes exitosos, para el reconocimiento y para sentirte conectado con el universo y con tu propósito.`,
    significadoInvertido: `En posición invertida, El Mundo advierte sobre la incompletitud, los retrasos o la falta de cierre. Puede indicar que te sientes insatisfecho, que no has alcanzado tus objetivos o que estás luchando por encontrar un sentido de totalidad.
    
    También puede señalar un final pospuesto, un viaje sin fin o la necesidad de reevaluar tus objetivos para encontrar la verdadera realización. Te invita a buscar el cierre, a celebrar tus pequeños logros y a encontrar la plenitud en el proceso, no solo en el resultado.`,
    detalleDerecho: `El Mundo en posición normal es la carta de la realización y el éxito total. Has llegado a la culminación de un ciclo y has integrado todas las lecciones. Celebra tu viaje y tu increíble logro.`,
    detalleInvertido: `Cuando El Mundo aparece invertido, te pide que examines dónde te sientes incompleto o dónde hay un final que se resiste a llegar. Busca el cierre y la integración, y confía en que la plenitud te espera.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué logros estoy celebrando en este momento?",
        "¿Estoy experimentando una sensación de totalidad y plenitud?",
        "¿Qué necesito completar para sentirme realizado?",
        "¿Estoy integrado con todos los aspectos de mi ser?",
        "¿Cómo puedo celebrar mi viaje y mis logros hasta ahora?"
      ]
    }
  },
  // Fin de Arcanos Mayores
  // Palo de Oros/Pentáculos
  {
    id: "as-de-oros",
    nombre: "As de Oros",
    arcano: "Menor",
    numero: 1,
    palo: "Oros/Pentáculos",
    elemento: "Tierra",
    planeta: "Tierra",
    signoAstrologico: "Tauro/Virgo/Capricornio",
    numerologia: "1 (Comienzo, oportunidad, manifestación, potencial)",    palabrasClaveDerechas: ["Nueva oportunidad", "prosperidad", "manifestación", "seguridad", "potencial", "estabilidad financiera", "oferta concreta", "crecimiento"],
    palabrasClaveInvertidas: ["Oportunidad perdida", "mala inversión", "inseguridad financiera", "materialismo excesivo", "falta de ambición", "retrasos"],
    significadoDerecho: `El As de Oros representa el inicio de una nueva oportunidad tangible, a menudo relacionada con el dinero, la carrera, la propiedad o la seguridad. Esta carta simboliza el potencial para la prosperidad, la manifestación de tus deseos materiales y la base para un crecimiento sólido.
    
    Cuando aparece el As de Oros, te invita a aprovechar una oferta concreta, a iniciar un nuevo proyecto que traerá estabilidad o a invertir en algo que te brindará seguridad a largo plazo. Es un momento propicio para el éxito material y para construir cimientos firmes en tu vida.`,
    significadoInvertido: `En posición invertida, el As de Oros advierte sobre una oportunidad perdida, una mala inversión o la inseguridad financiera. Puede indicar que estás siendo demasiado materialista, que estás perdiendo el foco en lo que realmente importa o que estás experimentando retrasos en tus proyectos.
    
    También puede señalar una falta de ambición, la incapacidad de manifestar tus deseos o la necesidad de reevaluar tus prioridades financieras. Te invita a ser más consciente de tus recursos y a buscar un equilibrio entre lo material y lo espiritual.`,
    detalleDerecho: `El As de Oros en posición normal es un regalo del universo. Una nueva oportunidad tangible, ya sea en el ámbito financiero, laboral o de bienes raíces, está a tu alcance. Es el momento de tomarla y construir sobre ella.`,
    detalleInvertido: `Cuando el As de Oros aparece invertido, te pide que examines si estás dejando pasar una oportunidad valiosa o si tus inversiones no están rindiendo frutos. Revisa tus prioridades y sé más proactivo.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué nueva oportunidad material o financiera se presenta en mi vida?",
        "¿Estoy listo para manifestar mis deseos en el plano físico?",
        "¿Estoy construyendo bases sólidas para mi futuro?",
        "¿Qué me impide aprovechar plenamente esta oportunidad?",
        "¿Estoy equilibrando mis necesidades materiales con mis valores espirituales?"
      ]
    }
  },
  {
    id: "dos-de-oros",
    nombre: "Dos de Oros",
    arcano: "Menor",
    numero: 2,
    palo: "Oros/Pentáculos",
    elemento: "Tierra",
    planeta: "Júpiter",
    signoAstrologico: "Capricornio",
    numerologia: "2 (Equilibrio, adaptación, decisiones, gestión)",    palabrasClaveDerechas: ["Equilibrio", "malabarismo", "adaptación", "decisiones", "flexibilidad", "gestión", "prioridades", "cambio y flujo"],
    palabrasClaveInvertidas: ["Desequilibrio", "estrés", "falta de organización", "indecisión", "abrumación", "pérdida de control", "exceso"],
    significadoDerecho: `El Dos de Oros representa la necesidad de equilibrio y adaptación ante los cambios y las diferentes demandas de la vida. Esta carta simboliza el malabarismo entre dos o más áreas, la gestión de recursos o la toma de decisiones sobre dónde enfocar tu energía.
    
    Cuando aparece el Dos de Oros, te invita a ser flexible, a adaptarte a las circunstancias cambiantes y a encontrar el punto medio entre tus responsabilidades. Es un momento propicio para aprender a priorizar, para manejar tus finanzas con inteligencia o para encontrar la armonía en situaciones dinámicas.`,
    significadoInvertido: `En posición invertida, el Dos de Oros advierte sobre el desequilibrio, el estrés o la falta de organización. Puede indicar que te sientes abrumado por demasiadas responsabilidades, que estás indeciso o que has perdido el control de tus prioridades.
    
    También puede señalar excesos, la incapacidad de adaptarte a los cambios o la necesidad de simplificar tu vida para recuperar el equilibrio. Te invita a delegar, a establecer límites y a encontrar una forma más sostenible de manejar tus múltiples demandas.`,
    detalleDerecho: `El Dos de Oros en posición normal te desafía a ser un maestro del equilibrio. La vida te pide que gestiones múltiples tareas y que te adaptes a los cambios con gracia. Confía en tu capacidad para mantener las cosas en movimiento.`,
    detalleInvertido: `Cuando el Dos de Oros aparece invertido, te advierte que estás perdiendo el equilibrio. Es el momento de simplificar, de delegar y de tomar decisiones claras para reducir el estrés.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué dos áreas de mi vida necesito equilibrar en este momento?",
        "¿Estoy siendo flexible y adaptándome a los cambios?",
        "¿Cómo puedo gestionar mis recursos y responsabilidades de manera más efectiva?",
        "¿Estoy sintiéndome abrumado o tengo el control de mis prioridades?",
        "¿Qué decisiones necesito tomar para restaurar el equilibrio?"
      ]
    }
  },
  {
    id: "tres-de-oros",
    nombre: "Tres de Oros",
    arcano: "Menor",
    numero: 3,
    palo: "Oros/Pentáculos",
    elemento: "Tierra",
    planeta: "Marte",
    signoAstrologico: "Tauro",
    numerologia: "3 (Colaboración, maestría, reconocimiento, construcción)",    palabrasClaveDerechas: ["Colaboración", "trabajo en equipo", "aprendizaje", "reconocimiento", "maestría", "construcción", "habilidades", "planificación"],
    palabrasClaveInvertidas: ["Falta de trabajo en equipo", "mediocridad", "falta de habilidades", "desacuerdo", "crítica", "retrasos", "proyectos sin terminar"],
    significadoDerecho: `El Tres de Oros representa la colaboración, el trabajo en equipo y el reconocimiento por tus habilidades. Esta carta simboliza la etapa en la que tus talentos son valorados y contribuyes a un proyecto más grande. Es un momento propicio para aprender de otros, para construir sobre tus fortalezas y para ver los resultados de tu esfuerzo.
    
    Cuando aparece el Tres de Oros, te invita a trabajar en equipo, a buscar la mejora continua en tu oficio y a celebrar los pequeños éxitos en tu camino. Es un momento para la planificación, la construcción y para recibir el reconocimiento que mereces por tu dedicación.`,
    significadoInvertido: `En posición invertida, el Tres de Oros advierte sobre la falta de trabajo en equipo, la mediocridad o la falta de habilidades. Puede indicar desacuerdos en un proyecto, críticas constructivas (o no), o retrasos debido a la falta de cooperación.
    
    También puede señalar que no estás siendo reconocido por tus esfuerzos, o la necesidad de mejorar tus habilidades para avanzar. Te invita a ser más humilde, a buscar retroalimentación y a mejorar tus relaciones laborales para lograr tus metas.`,
    detalleDerecho: `El Tres de Oros en posición normal te anima a buscar la colaboración y a poner tus habilidades al servicio de un objetivo común. Serás reconocido por tu contribución y tu trabajo en equipo será la clave del éxito.`,
    detalleInvertido: `Cuando el Tres de Oros aparece invertido, te pide que examines dónde falta armonía en tus proyectos. Es el momento de mejorar tus habilidades, de comunicarte mejor y de buscar la cooperación para evitar retrasos.`,
    meditacionReflexion: {
      preguntas: [
        "¿Cómo puedo mejorar mi colaboración y trabajo en equipo?",
        "¿Estoy siendo reconocido por mis habilidades y esfuerzos?",
        "¿Qué necesito aprender para alcanzar la maestría en mi campo?",
        "¿Estoy contribuyendo al éxito de un proyecto mayor?",
        "¿Cómo puedo planificar mis objetivos para lograr un mejor resultado?"
      ]
    }
  },
  {
    id: "cuatro-de-oros",
    nombre: "Cuatro de Oros",
    arcano: "Menor",
    numero: 4,
    palo: "Oros/Pentáculos",
    elemento: "Tierra",
    planeta: "Sol",
    signoAstrologico: "Tauro",
    numerologia: "4 (Estabilidad, seguridad, control, posesión)",    palabrasClaveDerechas: ["Seguridad", "estabilidad", "posesión", "control", "conservación", "ahorro", "límites", "apego"],
    palabrasClaveInvertidas: ["Desprendimiento", "generosidad", "descontrol", "inseguridad", "codicia", "pérdida", "rigidez", "bloqueo"],
    significadoDerecho: `El Cuatro de Oros representa la seguridad, la estabilidad y la necesidad de conservar lo que tienes. Esta carta simboliza el deseo de control, la posesión y el establecimiento de límites para proteger tus recursos, ya sean materiales, emocionales o energéticos.
    
    Cuando aparece el Cuatro de Oros, te invita a aferrarte a lo que has ganado, a ser prudente con tus finanzas y a establecer fronteras claras en tu vida. Es un momento propicio para el ahorro, para asegurar tu futuro y para sentirte seguro en tus posesiones.`,
    significadoInvertido: `En posición invertida, el Cuatro de Oros advierte sobre el desprendimiento (voluntario o forzado), la generosidad excesiva o la pérdida de control. Puede indicar que estás siendo demasiado codicioso, que te niegas a compartir tus recursos o que estás experimentando inseguridad a pesar de tenerlo.
    
    También puede señalar una rigidez excesiva, la dificultad para soltar viejos patrones o la necesidad de encontrar un equilibrio entre el control y la libertad. Te invita a ser más generoso, a desapegarte de lo material y a confiar en la abundancia del universo.`,
    detalleDerecho: `El Cuatro de Oros en posición normal te anima a asegurar tu base y a proteger lo que has construido. La estabilidad es importante, pero ten cuidado de no volverte demasiado rígido o apegado.`,
    detalleInvertido: `Cuando el Cuatro de Oros aparece invertido, te pide que examines dónde te estás aferrando demasiado o dónde tu apego te está impidiendo crecer. Es el momento de soltar y de confiar en la abundancia.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué necesito proteger y asegurar en mi vida?",
        "¿Estoy siendo demasiado controlador o apegado a lo material?",
        "¿Cómo puedo encontrar un equilibrio entre la seguridad y la generosidad?",
        "¿Estoy estableciendo límites saludables en mis relaciones?",
        "¿Qué me impide soltar y confiar en el flujo de la vida?"
      ]
    }
  },
  {
    id: "cinco-de-oros",
    nombre: "Cinco de Oros",
    arcano: "Menor",
    numero: 5,
    palo: "Oros/Pentáculos",
    elemento: "Tierra",
    planeta: "Marte",
    signoAstrologico: "Tauro",
    numerologia: "5 (Pérdida, dificultad, crisis, desafío)",    palabrasClaveDerechas: ["Pérdida", "dificultad", "crisis financiera", "enfermedad", "exclusión", "pobreza", "inseguridad", "desesperación"],
    palabrasClaveInvertidas: ["Recuperación", "ayuda encontrada", "superación de la adversidad", "esperanza", "apoyo", "mejora de la situación"],
    significadoDerecho: `El Cinco de Oros representa la pérdida, la dificultad y la sensación de carencia o exclusión. Esta carta simboliza momentos de crisis financiera, enfermedad, desempleo o la sensación de estar solo y abandonado. Es un periodo de adversidad donde puedes sentirte vulnerable y sin apoyo.
    
    Cuando aparece el Cinco de Oros, te invita a reconocer tu situación, a pedir ayuda cuando la necesites y a buscar soluciones activamente. Aunque la situación sea difícil, la carta a menudo muestra que la ayuda y las oportunidades están cerca, pero quizás no las estés viendo.`,
    significadoInvertido: `En posición invertida, el Cinco de Oros indica el inicio de la recuperación, la búsqueda de ayuda o la superación de la adversidad. Representa el momento en que empiezas a ver la luz al final del túnel y encuentras el apoyo que necesitas.
    
    También puede señalar una mejora en tu situación financiera o de salud, la reconexión con la esperanza o la capacidad de aprender de tus dificultades para salir fortalecido. Te invita a abrirte a la ayuda y a confiar en tu capacidad para superar este desafío.`,
    detalleDerecho: `El Cinco de Oros en posición normal es una señal de que estás pasando por un momento difícil y que te sientes carente. Pero la ayuda y la esperanza están más cerca de lo que crees. Abre tus ojos a las oportunidades que te rodean.`,
    detalleInvertido: `Cuando el Cinco de Oros aparece invertido, es un faro de esperanza. Indica que la situación está mejorando, que estás encontrando el apoyo necesario y que estás saliendo de la oscuridad. Sigue adelante.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué pérdidas o dificultades estoy experimentando en este momento?",
        "¿Estoy buscando ayuda o me siento excluido?",
        "¿Qué oportunidades o recursos no estoy viendo que podrían ayudarme?",
        "¿Cómo puedo mantener la esperanza en tiempos de adversidad?",
        "¿Qué lecciones puedo aprender de esta dificultad?"
      ]
    }
  },
  {
    id: "seis-de-oros",
    nombre: "Seis de Oros",
    arcano: "Menor",
    numero: 6,
    palo: "Oros/Pentáculos",
    elemento: "Tierra",
    planeta: "Júpiter",
    signoAstrologico: "Tauro",
    numerologia: "6 (Generosidad, dar y recibir, caridad, equilibrio)",    palabrasClaveDerechas: ["Generosidad", "caridad", "dar y recibir", "equilibrio", "justicia", "apoyo", "intercambio", "prosperidad compartida"],
    palabrasClaveInvertidas: ["Egoísmo", "codicia", "desequilibrio", "deuda", "caridad forzada", "favoritismo", "explotación"],
    significadoDerecho: `El Seis de Oros representa la generosidad, el acto de dar y recibir, y el equilibrio en los intercambios. Esta carta simboliza la caridad, el apoyo mutuo y la importancia de la justicia en la distribución de recursos. Es un recordatorio de que la prosperidad se comparte y que hay una circulación de energía.
    
    Cuando aparece el Seis de Oros, te invita a ser generoso con lo que tienes, a ofrecer ayuda a quienes lo necesitan y a recibir con gratitud cuando te sea ofrecido. Es un momento propicio para la filantropía, para el equilibrio en tus relaciones financieras o para encontrar una forma de retribuir a la comunidad.`,
    significadoInvertido: `En posición invertida, el Seis de Oros advierte sobre el egoísmo, la codicia o el desequilibrio en el dar y recibir. Puede indicar que estás siendo explotado, que estás dando demasiado sin recibir nada a cambio, o que te sientes obligado a ser generoso.
    
    También puede señalar deuda, favoritismo, o la incapacidad de compartir tus recursos. Te invita a examinar tus motivaciones para dar y recibir, y a buscar una relación más equitativa en tus intercambios.`,
    detalleDerecho: `El Seis de Oros en posición normal te recuerda la importancia de la generosidad y del flujo de dar y recibir. Tu prosperidad se magnifica cuando la compartes. Mantén el equilibrio en tus intercambios.`,
    detalleInvertido: `Cuando el Seis de Oros aparece invertido, te pide que examines dónde el equilibrio en el dar y recibir está roto. Asegúrate de que no estás siendo explotado o de que no estás siendo egoísta.`,
    meditacionReflexion: {
      preguntas: [
        "¿Cómo puedo ser más generoso con mis recursos y talentos?",
        "¿Estoy recibiendo lo que doy en mis relaciones?",
        "¿Hay un equilibrio justo en mis intercambios?",
        "¿Cómo puedo apoyar a otros o buscar apoyo cuando lo necesito?",
        "¿Qué me impide dar o recibir con gratitud?"
      ]
    }
  },
  {
    id: "siete-de-oros",
    nombre: "Siete de Oros",
    arcano: "Menor",
    numero: 7,
    palo: "Oros/Pentáculos",
    elemento: "Tierra",
    planeta: "Saturno",
    signoAstrologico: "Tauro",
    numerologia: "7 (Paciencia, evaluación, inversión, recompensa a largo plazo)",    palabrasClaveDerechas: ["Paciencia", "evaluación", "inversión", "cosecha a largo plazo", "espera", "recompensa", "reflexión", "crecimiento lento"],
    palabrasClaveInvertidas: ["Impaciencia", "malos resultados", "frustración", "trabajo inútil", "retrasos", "desánimo", "cosecha fallida"],
    significadoDerecho: `El Siete de Oros representa la paciencia, la evaluación y la inversión a largo plazo. Esta carta simboliza el momento en que observas los frutos de tu trabajo, pero reconoces que aún no es el momento de la cosecha completa. Es un periodo de espera, de reflexión y de confianza en que tus esfuerzos darán resultado.
    
    Cuando aparece el Siete de Oros, te invita a ser paciente, a evaluar tu progreso y a considerar si tus inversiones están rindiendo frutos. Es un momento propicio para reevaluar tus planes, para consolidar tus recursos y para confiar en el crecimiento lento pero constante.`,
    significadoInvertido: `En posición invertida, el Siete de Oros advierte sobre la impaciencia, los malos resultados o la frustración por el trabajo inútil. Puede indicar que estás desanimado por la falta de progreso, que estás cosechando menos de lo esperado o que estás siendo demasiado apresurado.
    
    También puede señalar retrasos, la necesidad de cambiar tu estrategia o la incapacidad de ver el valor a largo plazo de tus esfuerzos. Te invita a reevaluar tu enfoque, a ser más realista con tus expectativas y a encontrar la perseverancia para continuar.`,
    detalleDerecho: `El Siete de Oros en posición normal te pide paciencia. Has sembrado y ahora es el momento de esperar a que la cosecha madure. Evalúa tu progreso, pero confía en que tus esfuerzos darán frutos a su debido tiempo.`,
    detalleInvertido: `Cuando el Siete de Oros aparece invertido, te advierte que la impaciencia o la frustración te están impidiendo ver el valor de tu trabajo. Revisa tu estrategia y persevera, o considera si es momento de redirigir tus esfuerzos.`,
    meditacionReflexion: {
      preguntas: [
        "¿Estoy siendo paciente con el proceso de crecimiento?",
        "¿Qué necesito evaluar en mis proyectos o inversiones?",
        "¿Estoy confiando en que mis esfuerzos a largo plazo darán frutos?",
        "¿Qué me está desanimando o impidiendo ver el progreso?",
        "¿Estoy listo para la cosecha o necesito seguir invirtiendo tiempo y energía?"
      ]
    }
  },
  {
    id: "ocho-de-oros",
    nombre: "Ocho de Oros",
    arcano: "Menor",
    numero: 8,
    palo: "Oros/Pentáculos",
    elemento: "Tierra",
    planeta: "Sol",
    signoAstrologico: "Virgo",
    numerologia: "8 (Habilidad, dedicación, maestría, trabajo duro)",    palabrasClaveDerechas: ["Habilidad", "dedicación", "maestría", "trabajo duro", "perfección", "aprendizaje", "práctica", "artesanía"],
    palabrasClaveInvertidas: ["Pereza", "mediocridad", "falta de habilidad", "perfeccionismo excesivo", "falta de concentración", "estancamiento", "trabajo repetitivo"],
    significadoDerecho: `El Ocho de Oros representa la dedicación, la habilidad y la maestría en un oficio o área de estudio. Esta carta simboliza el trabajo duro, la concentración en los detalles y el compromiso con la mejora continua. Es el momento de pulir tus talentos y de perfeccionar tus habilidades.
    
    Cuando aparece el Ocho de Oros, te invita a sumergirte en tu trabajo, a practicar con diligencia y a aprender de tus errores. Es un momento propicio para el desarrollo profesional, para la artesanía y para sentir orgullo por la calidad de tu esfuerzo.`,
    significadoInvertido: `En posición invertida, el Ocho de Oros advierte sobre la pereza, la mediocridad o la falta de habilidad. Puede indicar que estás aburrido de tu trabajo, que estás siendo demasiado perfeccionista, o que te falta la concentración necesaria para dominar una tarea.
    
    También puede señalar estancamiento, la incapacidad de aprender o la necesidad de encontrar una nueva dirección para tu energía. Te invita a reevaluar tu compromiso, a buscar la motivación y a recordar el valor del trabajo bien hecho.`,
    detalleDerecho: `El Ocho de Oros en posición normal te anima a dedicarte por completo a tu arte o a tu oficio. Con cada repetición y cada detalle, te acercas a la maestría. Tu diligencia será recompensada.`,
    detalleInvertido: `Cuando el Ocho de Oros aparece invertido, te pide que examines tu nivel de compromiso. ¿Estás siendo perezoso o demasiado perfeccionista? Encuentra el equilibrio para seguir creciendo.`,
    meditacionReflexion: {
      preguntas: [
        "¿En qué área de mi vida necesito aplicar más dedicación y trabajo duro?",
        "¿Estoy comprometido con la mejora continua de mis habilidades?",
        "¿Qué puedo aprender para alcanzar la maestría en mi campo?",
        "¿Estoy siendo demasiado perfeccionista o perezoso?",
        "¿Cómo puedo encontrar más alegría y concentración en mi trabajo?"
      ]
    }
  },
  {
    id: "nueve-de-oros",
    nombre: "Nueve de Oros",
    arcano: "Menor",
    numero: 9,
    palo: "Oros/Pentáculos",
    elemento: "Tierra",
    planeta: "Venus",
    signoAstrologico: "Virgo",
    numerologia: "9 (Logro, abundancia, autosuficiencia, lujo)",    palabrasClaveDerechas: ["Abundancia", "lujo", "independencia", "autosuficiencia", "logro", "seguridad financiera", "placer", "recompensa"],
    palabrasClaveInvertidas: ["Pérdida financiera", "dependencia", "fraude", "excesos", "inseguridad", "soledad", "ostentación"],
    significadoDerecho: `El Nueve de Oros representa la abundancia, el lujo y la autosuficiencia que provienen del trabajo duro y la disciplina. Esta carta simboliza el logro material, la seguridad financiera y la capacidad de disfrutar de los placeres de la vida sin depender de otros.
    
    Cuando aparece el Nueve de Oros, te invita a celebrar tus logros, a disfrutar de tu independencia y a rodearte de belleza y confort. Es un momento propicio para el reconocimiento de tu esfuerzo, para la tranquilidad financiera y para sentirte orgulloso de lo que has construido.`,
    significadoInvertido: `En posición invertida, el Nueve de Oros advierte sobre la pérdida financiera, la dependencia o el fraude. Puede indicar que estás siendo demasiado ostentoso, que estás experimentando inseguridad a pesar de la abundancia, o que estás perdiendo lo que has ganado.
    
    También puede señalar una soledad no deseada, la incapacidad de disfrutar de tus logros o la necesidad de reevaluar tus prioridades materiales. Te invita a ser más consciente de tus gastos, a buscar la verdadera seguridad interior y a compartir tu riqueza de manera más significativa.`,
    detalleDerecho: `El Nueve de Oros en posición normal es una carta de triunfo y autosuficiencia. Has trabajado duro y ahora es el momento de disfrutar de los frutos de tu labor. Permítete el lujo y la comodidad que has ganado.`,
    detalleInvertido: `Cuando el Nueve de Oros aparece invertido, te pide que examines si tu búsqueda de abundancia te está aislando o si estás experimentando pérdidas. Revisa tus valores y busca una verdadera seguridad.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué logros materiales estoy celebrando en este momento?",
        "¿Estoy disfrutando de mi independencia y autosuficiencia?",
        "¿Cómo puedo equilibrar el lujo con la gratitud?",
        "¿Estoy siendo demasiado ostentoso o estoy compartiendo mi abundancia?",
        "¿Qué me impide sentirme verdaderamente seguro y pleno?"
      ]
    }
  },
  {
    id: "diez-de-oros",
    nombre: "Diez de Oros",
    arcano: "Menor",
    numero: 10,
    palo: "Oros/Pentáculos",
    elemento: "Tierra",
    planeta: "Mercurio",
    signoAstrologico: "Virgo",
    numerologia: "10 (Riqueza, herencia, familia, seguridad duradera)",    palabrasClaveDerechas: ["Riqueza", "herencia", "familia", "seguridad duradera", "legado", "tradición", "comunidad", "prosperidad generacional"],
    palabrasClaveInvertidas: ["Disputas familiares", "pérdida de herencia", "inestabilidad financiera", "ruptura de tradiciones", "conflictos", "soledad en la abundancia"],
    significadoDerecho: `El Diez de Oros representa la riqueza, la herencia y la seguridad duradera en el ámbito familiar y material. Esta carta simboliza el legado, las tradiciones y la prosperidad que se extiende a través de generaciones. Es un momento de estabilidad, de pertenencia y de disfrutar de los frutos de un esfuerzo colectivo.
    
    Cuando aparece el Diez de Oros, te invita a celebrar la abundancia en tu vida, a conectar con tu linaje y a valorar la seguridad que has construido. Es un momento propicio para las reuniones familiares, para la compra de propiedades o para invertir en proyectos que beneficiarán a tus seres queridos a largo plazo.`,
    significadoInvertido: `En posición invertida, el Diez de Oros advierte sobre disputas familiares, pérdida de herencia o inestabilidad financiera. Puede indicar conflictos por dinero, la ruptura de tradiciones o la dificultad para encontrar seguridad y pertenencia.
    
    También puede señalar una obsesión con la riqueza material que lleva a la soledad, o la necesidad de reevaluar el verdadero significado de la herencia y la prosperidad. Te invita a resolver los conflictos familiares, a honrar tus raíces y a buscar la verdadera riqueza en las conexiones y el propósito.`,
    detalleDerecho: `El Diez de Oros en posición normal es la culminación de la prosperidad y la seguridad familiar. Has construido un legado duradero. Disfruta de la abundancia y la conexión con tu comunidad.`,
    detalleInvertido: `Cuando el Diez de Oros aparece invertido, te pide que examines las tensiones familiares relacionadas con el dinero o la herencia. Es el momento de sanar esas heridas y de redefinir lo que significa la verdadera riqueza.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué legado quiero construir para mi familia y comunidad?",
        "¿Estoy honrando mis raíces y tradiciones?",
        "¿Cómo puedo fortalecer mis lazos familiares a través de la abundancia?",
        "¿Qué significa la verdadera riqueza para mí?",
        "¿Estoy experimentando seguridad y pertenencia en mi vida?"
      ]
    }
  },
  {
    id: "sota-de-oros",
    nombre: "Sota de Oros",
    arcano: "Menor",
    numero: 11,
    palo: "Oros/Pentáculos",
    elemento: "Tierra",
    planeta: "Tierra",
    signoAstrologico: "Tauro/Virgo/Capricornio",
    numerologia: "11 (Potencial, mensajes, oportunidades tangibles)",    palabrasClaveDerechas: ["Nuevas oportunidades", "noticias concretas", "estudiante", "diligencia", "potencial", "estabilidad emergente", "trabajo duro", "foco en lo práctico"],
    palabrasClaveInvertidas: ["Falta de ambición", "irresponsabilidad", "oportunidades perdidas", "mensajes negativos", "estudios abandonados", "negligencia"],
    significadoDerecho: `La Sota de Oros representa la llegada de nuevas oportunidades concretas, a menudo relacionadas con el aprendizaje, la carrera o las finanzas. Esta carta simboliza el potencial, la diligencia y la seriedad en el enfoque de los asuntos prácticos. Es un mensajero de noticias tangibles y de nuevos proyectos que requieren tu atención.
    
    Cuando aparece la Sota de Oros, te invita a ser un estudiante diligente, a prestar atención a los detalles y a aprovechar las ofertas que te brindan estabilidad. Es un momento propicio para iniciar nuevos estudios, para encontrar un empleo o para invertir en algo que te brinde un crecimiento práctico.`,
    significadoInvertido: `En posición invertida, la Sota de Oros advierte sobre la falta de ambición, la irresponsabilidad o la negligencia en los asuntos prácticos. Puede indicar oportunidades perdidas, mensajes negativos o la tendencia a abandonar proyectos antes de tiempo.
    
    También puede señalar falta de foco, inmadurez o la incapacidad de ver el valor en el trabajo duro. Te invita a ser más responsable, a comprometerte con tus objetivos y a no subestimar la importancia de la constancia.`,
    detalleDerecho: `La Sota de Oros en posición normal es un mensajero de nuevas oportunidades tangibles. Esté atento a las ofertas de estudio, trabajo o inversión. Tu diligencia será recompensada.`,
    detalleInvertido: `Cuando la Sota de Oros aparece invertida, te pide que examines tu enfoque hacia las oportunidades. ¿Estás siendo perezoso o irresponsable? Es el momento de tomar en serio tus metas.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué nuevas oportunidades concretas están emergiendo en mi vida?",
        "¿Estoy siendo diligente en mi aprendizaje y trabajo?",
        "¿Qué mensajes importantes estoy recibiendo sobre mis finanzas o carrera?",
        "¿Estoy aprovechando el potencial de esta oportunidad?",
        "¿Necesito ser más responsable con mis asuntos prácticos?"
      ]
    }
  },
  {
    id: "caballero-de-oros",
    nombre: "Caballero de Oros",
    arcano: "Menor",
    numero: 12,
    palo: "Oros/Pentáculos",
    elemento: "Tierra",
    planeta: "Saturno",
    signoAstrologico: "Tauro/Virgo/Capricornio",
    numerologia: "12 (Trabajo duro, responsabilidad, paciencia, progreso lento)",    palabrasClaveDerechas: ["Trabajo duro", "responsabilidad", "diligencia", "paciencia", "confiabilidad", "progreso lento pero seguro", "realismo", "meticuloso"],
    palabrasClaveInvertidas: ["Pereza", "estancamiento", "irresponsabilidad", "perfeccionismo excesivo", "aburrimiento", "rigidez", "falta de ambición"],
    significadoDerecho: `El Caballero de Oros representa el trabajo duro, la responsabilidad y la diligencia en la consecución de metas. Esta carta simboliza la paciencia, la confiabilidad y el progreso lento pero seguro en los asuntos prácticos. Es el arquetipo del que se toma su tiempo, pero siempre cumple sus compromisos.
    
    Cuando aparece el Caballero de Oros, te invita a ser metódico, a concentrarte en los detalles y a mantener una ética de trabajo sólida. Es un momento propicio para los proyectos que requieren constancia, para la construcción de cimientos estables y para cosechar los frutos de tu perseverancia.`,
    significadoInvertido: `En posición invertida, el Caballero de Oros advierte sobre la pereza, el estancamiento o la irresponsabilidad. Puede indicar una falta de motivación, un perfeccionismo excesivo que impide el progreso, o la tendencia a aburrirse y abandonar proyectos.
    
    También puede señalar rigidez, falta de ambición o la incapacidad de adaptarse a nuevas ideas. Te invita a encontrar una nueva fuente de inspiración, a ser más flexible y a recordar el valor de la acción, incluso si es lenta.`,
    detalleDerecho: `El Caballero de Oros en posición normal te insta a adoptar una ética de trabajo impecable. La constancia y la atención al detalle te llevarán al éxito. Sé paciente, porque los grandes resultados se construyen ladrillo a ladrillo.`,
    detalleInvertido: `Cuando el Caballero de Oros aparece invertido, te pide que examines si tu lentitud se ha convertido en estancamiento. Es el momento de reevaluar tus motivaciones y de inyectar nueva energía a tus proyectos.`,
    meditacionReflexion: {
      preguntas: [
        "¿Estoy siendo responsable y diligente en mis tareas?",
        "¿Cómo puedo aplicar una ética de trabajo más sólida a mis proyectos?",
        "¿Soy paciente con el proceso de progreso lento pero seguro?",
        "¿Qué me impide avanzar o me hace sentir estancado?",
        "¿Cómo puedo encontrar más motivación para mis metas prácticas?"
      ]
    }
  },
  {
    id: "reina-de-oros",
    nombre: "Reina de Oros",
    arcano: "Menor",
    numero: 13,
    palo: "Oros/Pentáculos",
    elemento: "Tierra",
    planeta: "Venus",
    signoAstrologico: "Tauro/Virgo/Capricornio",
    numerologia: "13 (Nutrición, abundancia, seguridad, conexión con la naturaleza)",    palabrasClaveDerechas: ["Nutrición", "abundancia", "cuidado", "seguridad", "practicidad", "generosidad", "maternidad", "conexión con la naturaleza"],
    palabrasClaveInvertidas: ["Codicia", "materialismo", "negligencia", "inseguridad", "falta de cuidado", "dependencia", "frialdad"],
    significadoDerecho: `La Reina de Oros representa la nutrición, la abundancia y la seguridad en el ámbito práctico y material. Esta carta simboliza el cuidado, la generosidad y la conexión con la naturaleza y la comodidad del hogar. Es el arquetipo de la madre tierra, que provee y nutre a quienes la rodean.
    
    Cuando aparece la Reina de Oros, te invita a cultivar un entorno seguro y confortable, a cuidar de ti mismo y de tus seres queridos, y a disfrutar de los placeres simples de la vida. Es un momento propicio para el crecimiento financiero, para la maternidad (en un sentido amplio de nutrir), y para sentirte arraigado y seguro.`,
    significadoInvertido: `En posición invertida, la Reina de Oros advierte sobre la codicia, el materialismo o la negligencia. Puede indicar una falta de cuidado por ti mismo o por otros, inseguridad a pesar de la riqueza, o la tendencia a ser demasiado posesivo.
    
    También puede señalar dependencia, frialdad emocional o la incapacidad de disfrutar de la abundancia. Te invita a reevaluar tu relación con lo material, a ser más generoso y a buscar la verdadera seguridad en tu interior.`,
    detalleDerecho: `La Reina de Oros en posición normal te anima a ser una fuente de nutrición y abundancia para ti mismo y para los demás. Tu conexión con la tierra y tu capacidad de crear seguridad son tus mayores fortalezas.`,
    detalleInvertido: `Cuando la Reina de Oros aparece invertida, te pide que examines si te has vuelto demasiado materialista o si estás descuidando tus responsabilidades. Es el momento de reconectar con tu lado nutritivo y generoso.`,
    meditacionReflexion: {
      preguntas: [
        "¿Cómo puedo nutrir mi vida y la de quienes me rodean?",
        "¿Estoy creando un entorno de seguridad y abundancia para mí?",
        "¿Estoy conectando con la naturaleza y disfrutando de sus placeres?",
        "¿Qué me impide ser más generoso o sentirme seguro?",
        "¿Estoy siendo demasiado posesivo o materialista?"
      ]
    }
  },
  {
    id: "rey-de-oros",
    nombre: "Rey de Oros",
    arcano: "Menor",
    numero: 14,
    palo: "Oros/Pentáculos",
    elemento: "Tierra",
    planeta: "Saturno",
    signoAstrologico: "Tauro/Virgo/Capricornio",
    numerologia: "14 (Riqueza, éxito, liderazgo práctico, seguridad establecida)",    palabrasClaveDerechas: ["Riqueza", "éxito", "liderazgo práctico", "seguridad financiera", "estabilidad", "negocios", "prosperidad", "confiabilidad"],
    palabrasClaveInvertidas: ["Codicia", "corrupción", "tiranía financiera", "despilfarro", "inseguridad", "abuso de poder", "rigidez"],
    significadoDerecho: `El Rey de Oros representa la riqueza, el éxito y el liderazgo práctico en el ámbito material y financiero. Esta carta simboliza la seguridad establecida, la maestría en los negocios y la capacidad de crear y mantener una prosperidad duradera. Es el arquetipo del empresario exitoso, el banquero o el inversor.
    
    Cuando aparece el Rey de Oros, te invita a asumir tu rol de líder en asuntos financieros, a ser astuto en tus inversiones y a construir un legado de prosperidad. Es un momento propicio para el éxito en los negocios, para la estabilidad material y para disfrutar de los frutos de tu esfuerzo y disciplina.`,
    significadoInvertido: `En posición invertida, el Rey de Oros advierte sobre la codicia, la corrupción o el abuso de poder financiero. Puede indicar despilfarro, inseguridad a pesar de la riqueza, o la tendencia a ser demasiado rígido o controlador.
    
    También puede señalar una figura autoritaria que te está oprimiendo financieramente, o la necesidad de reevaluar tus valores y buscar una prosperidad más ética. Te invita a ser más generoso, a delegar responsabilidades y a recordar que la verdadera riqueza va más allá del dinero.`,
    detalleDerecho: `El Rey de Oros en posición normal te impulsa a asumir tu rol de líder en el mundo material. Con sabiduría y disciplina, puedes construir un imperio de prosperidad. Tu influencia y tu experiencia son valiosas.`,
    detalleInvertido: `Cuando el Rey de Oros aparece invertido, te pide que examines cómo estás usando tu poder financiero. ¿Estás siendo codicioso o estás despilfarrando tus recursos? Busca el equilibrio y la ética en tus decisiones.`,
    meditacionReflexion: {
      preguntas: [
        "¿Cómo puedo usar mi influencia para crear prosperidad duradera?",
        "¿Estoy siendo un líder práctico y confiable en mis finanzas?",
        "¿Qué legados financieros o materiales quiero construir?",
        "¿Estoy balanceando mis ambiciones con mis responsabilidades?",
        "¿Qué significa la verdadera riqueza para mí, más allá del dinero?"
      ]
    }
  },
  // Palo de Bastos/Varas
  {
    id: "as-de-bastos",
    nombre: "As de Bastos",
    arcano: "Menor",
    numero: 1,
    palo: "Bastos/Varas",
    elemento: "Fuego",
    planeta: "Marte",
    signoAstrologico: "Aries/Leo/Sagitario",
    numerologia: "1 (Comienzo, inspiración, creatividad, potencial)",    palabrasClaveDerechas: ["Inspiración", "nuevos comienzos", "creatividad", "potencial", "entusiasmo", "aventura", "oportunidad", "iniciativa"],
    palabrasClaveInvertidas: ["Bloqueo creativo", "falta de dirección", "apatía", "retrasos", "oportunidades perdidas", "comienzos falsos", "destrucción"],
    significadoDerecho: `El As de Bastos representa el inicio de una nueva inspiración, una idea brillante o un proyecto lleno de potencial. Esta carta simboliza el entusiasmo, la chispa creativa y la energía para emprender nuevas aventuras. Es un llamado a la acción, a tomar la iniciativa y a perseguir tus pasiones.
    
    Cuando aparece el As de Bastos, te invita a abrazar una nueva oportunidad con entusiasmo, a explorar tu creatividad y a dar el primer paso hacia la realización de tus sueños. Es un momento propicio para la innovación, para iniciar un negocio o para embarcarte en un viaje emocionante.`,
    significadoInvertido: `En posición invertida, el As de Bastos advierte sobre el bloqueo creativo, la falta de dirección o la apatía. Puede indicar que te sientes sin inspiración, que estás perdiendo oportunidades o que estás experimentando retrasos en tus proyectos.
    
    También puede señalar comienzos falsos, la incapacidad de ver el potencial o la necesidad de reavivar tu fuego interior. Te invita a buscar nuevas fuentes de inspiración, a superar la procrastinación y a encontrar la motivación para encender tu chispa creativa.`,
    detalleDerecho: `El As de Bastos en posición normal es una inyección de energía y entusiasmo. Una nueva idea o proyecto está a punto de nacer, lleno de potencial creativo. Aprovecha esta chispa para iniciar algo audaz.`,
    detalleInvertido: `Cuando el As de Bastos aparece invertido, te pide que examines dónde tu inspiración se ha estancado o dónde estás perdiendo oportunidades. Reaviva tu fuego interior y encuentra una nueva dirección.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué nueva idea o proyecto me inspira en este momento?",
        "¿Estoy listo para dar el primer paso y tomar la iniciativa?",
        "¿Cómo puedo avivar mi entusiasmo y mi chispa creativa?",
        "¿Qué me impide explorar mi potencial al máximo?",
        "¿Estoy perdiendo alguna oportunidad por falta de dirección?"
      ]
    }
  },
  {
    id: "dos-de-bastos",
    nombre: "Dos de Bastos",
    arcano: "Menor",
    numero: 2,
    palo: "Bastos/Varas",
    elemento: "Fuego",
    planeta: "Marte",
    signoAstrologico: "Aries",
    numerologia: "2 (Planificación, futuro, asociación, elección)",    palabrasClaveDerechas: ["Planificación", "futuro", "elección", "asociación", "exploración", "nuevos horizontes", "decisiones importantes", "visión a largo plazo"],
    palabrasClaveInvertidas: ["Falta de planes", "miedo a lo desconocido", "falta de ambición", "decisiones precipitadas", "conflicto de intereses", "oportunidades perdidas"],
    significadoDerecho: `El Dos de Bastos representa la planificación para el futuro, la exploración de nuevas posibilidades y la toma de decisiones importantes. Esta carta simboliza la elección de un camino, la visión a largo plazo y la consideración de asociaciones. Es el momento de evaluar tus opciones y de decidir tu siguiente paso.
    
    Cuando aparece el Dos de Bastos, te invita a expandir tus horizontes, a soñar en grande y a planificar tu futuro con cuidado. Es un momento propicio para las colaboraciones, para la inversión en nuevos proyectos y para la preparación de un viaje o una aventura.`,
    significadoInvertido: `En posición invertida, el Dos de Bastos advierte sobre la falta de planes, el miedo a lo desconocido o la indecisión. Puede indicar que estás evitando tomar decisiones importantes, que te falta ambición o que estás estancado por no saber qué camino tomar.
    
    También puede señalar conflictos de intereses, oportunidades perdidas por falta de visión o la necesidad de reevaluar tus objetivos a largo plazo. Te invita a ser más proactivo en tu planificación y a abrazar el futuro con confianza.`,
    detalleDerecho: `El Dos de Bastos en posición normal te insta a mirar más allá del presente y a planificar tu futuro con visión. Las posibilidades son infinitas; elige tu camino con sabiduría y confianza.`,
    detalleInvertido: `Cuando el Dos de Bastos aparece invertido, te pide que examines tu indecisión o tu falta de planes. Es el momento de enfrentar tus miedos y de tomar las riendas de tu futuro.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué opciones estoy considerando para mi futuro?",
        "¿Estoy planificando mis metas a largo plazo con claridad?",
        "¿Qué me impide tomar decisiones importantes en este momento?",
        "¿Estoy abierto a nuevas asociaciones o colaboraciones?",
        "¿Cómo puedo expandir mis horizontes y mi visión del futuro?"
      ]
    }
  },
  {
    id: "tres-de-bastos",
    nombre: "Tres de Bastos",
    arcano: "Menor",
    numero: 3,
    palo: "Bastos/Varas",
    elemento: "Fuego",
    planeta: "Sol",
    signoAstrologico: "Aries",
    numerologia: "3 (Expansión, visión, progreso, éxito inicial)",    palabrasClaveDerechas: ["Expansión", "crecimiento", "visión de futuro", "éxito inicial", "exploración", "comercio", "oportunidades lejanas", "cooperación"],
    palabrasClaveInvertidas: ["Refrases", "falta de visión", "oportunidades perdidas", "obstáculos", "fracaso en la expansión", "dependencia"],
    significadoDerecho: `El Tres de Bastos representa la expansión, el crecimiento y el éxito inicial de tus proyectos. Esta carta simboliza la visión de futuro, la exploración de nuevas oportunidades y la confianza en que tus esfuerzos están dando frutos. Es el momento de mirar más allá de lo inmediato y de prepararte para mayores logros.
    
    Cuando aparece el Tres de Bastos, te invita a consolidar tus ganancias, a buscar nuevas alianzas y a enviar tus ideas al mundo. Es un momento propicio para el comercio, para la expansión internacional o para cualquier proyecto que requiera una visión a largo plazo y la cooperación de otros.`,
    significadoInvertido: `En posición invertida, el Tres de Bastos advierte sobre retrasos, la falta de visión o las oportunidades perdidas. Puede indicar obstáculos inesperados, un fracaso en la expansión o la necesidad de reevaluar tus planes.
    
    También puede señalar una dependencia excesiva de otros, la incapacidad de ver el potencial o la frustración por no poder avanzar. Te invita a ser más adaptable, a buscar nuevas estrategias y a no desanimarte por los contratiempos.`,
    detalleDerecho: `El Tres de Bastos en posición normal te anima a expandir tus horizontes y a confiar en que tus esfuerzos están dando frutos. Tus barcos están zarpando y las oportunidades de crecimiento están llegando.`,
    detalleInvertido: `Cuando el Tres de Bastos aparece invertido, te pide que examines qué te impide ver el panorama general o qué obstáculos están frenando tu expansión. Reajusta tu visión y busca nuevas estrategias.`,
    meditacionReflexion: {
      preguntas: [
        "¿Cómo puedo expandir mis proyectos o ideas?",
        "¿Estoy teniendo una visión a largo plazo para mi futuro?",
        "¿Qué oportunidades de crecimiento estoy explorando?",
        "¿Estoy consolidando mis éxitos iniciales?",
        "¿Qué me impide ver las posibilidades más allá de lo inmediato?"
      ]
    }
  },
  {
    id: "cuatro-de-bastos",
    nombre: "Cuatro de Bastos",
    arcano: "Menor",
    numero: 4,
    palo: "Bastos/Varas",
    elemento: "Fuego",
    planeta: "Júpiter",
    signoAstrologico: "Aries",
    numerologia: "4 (Celebración, hogar, estabilidad, comunidad)",    palabrasClaveDerechas: ["Celebración", "hogar", "estabilidad", "comunidad", "matrimonio", "reunión familiar", "seguridad", "felicidad"],
    palabrasClaveInvertidas: ["Inestabilidad", "conflictos familiares", "celebración pospuesta", "ruptura", "mudanza", "falta de armonía", "inseguridad"],
    significadoDerecho: `El Cuatro de Bastos representa la celebración, la estabilidad del hogar y la alegría de la comunidad. Esta carta simboliza los logros, los hitos importantes y la sensación de seguridad y pertenencia. Es un momento para disfrutar de las recompensas de tu trabajo y para compartir tu felicidad con tus seres queridos.
    
    Cuando aparece el Cuatro de Bastos, te invita a celebrar un éxito, a establecer tu hogar o a disfrutar de una reunión familiar o comunitaria. Es un momento propicio para bodas, fiestas o cualquier evento que fortalezca los lazos y te brinde un sentido de seguridad.`,
    significadoInvertido: `En posición invertida, el Cuatro de Bastos advierte sobre la inestabilidad, los conflictos familiares o la celebración pospuesta. Puede indicar una mudanza difícil, la falta de armonía en el hogar o la incapacidad de disfrutar de los logros.
    
    También puede señalar una ruptura, la necesidad de encontrar tu propio sentido de seguridad o la frustración por no poder celebrar tus éxitos. Te invita a resolver los conflictos, a buscar la armonía en tu entorno y a encontrar tu propio camino hacia la estabilidad.`,
    detalleDerecho: `El Cuatro de Bastos en posición normal es una invitación a la celebración. Has alcanzado un hito significativo; es el momento de disfrutar de la estabilidad y la alegría en tu hogar y comunidad.`,
    detalleInvertido: `Cuando el Cuatro de Bastos aparece invertido, te pide que examines las tensiones en tu hogar o comunidad. Busca la armonía y la estabilidad, o considera si es momento de encontrar un nuevo sentido de pertenencia.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué logros o hitos tengo para celebrar en este momento?",
        "¿Cómo puedo crear un ambiente de mayor estabilidad y alegría en mi hogar?",
        "¿Estoy conectando con mi comunidad y mis seres queridos?",
        "¿Qué me impide celebrar mis éxitos plenamente?",
        "¿Necesito encontrar un nuevo sentido de pertenencia o seguridad?"
      ]
    }
  },
  {
    id: "cinco-de-bastos",
    nombre: "Cinco de Bastos",
    arcano: "Menor",
    numero: 5,
    palo: "Bastos/Varas",
    elemento: "Fuego",
    planeta: "Saturno",
    signoAstrologico: "Leo",
    numerologia: "5 (Conflicto, competencia, desafío, desacuerdo)",    palabrasClaveDerechas: ["Conflicto", "competencia", "desacuerdo", "desafío", "lucha", "rivalidad", "caos", "energía dispersa"],
    palabrasClaveInvertidas: ["Resolución de conflictos", "cooperación", "fin de la lucha", "armonía", "evitar el conflicto", "rendición", "claridad"],
    significadoDerecho: `El Cinco de Bastos representa el conflicto, la competencia y el desacuerdo. Esta carta simboliza una lucha, ya sea interna o externa, donde diferentes fuerzas o ideas chocan. Es un momento de desafío, de rivalidad y de energía dispersa.
    
    Cuando aparece el Cinco de Bastos, te invita a enfrentar tus desafíos, a participar en una competencia sana o a resolver desacuerdos. Es un momento propicio para el debate, para la negociación y para encontrar una solución que beneficie a todas las partes involucradas.`,
    significadoInvertido: `En posición invertida, el Cinco de Bastos indica la resolución de conflictos, la cooperación o el fin de la lucha. Puede señalar que estás evitando el conflicto, que estás buscando la armonía a toda costa o que estás lidiando con problemas persistentes.
    
    También puede advertir sobre la derrota, la incapacidad de defenderte o la necesidad de poner fin a una competencia. Te invita a encontrar la paz, a colaborar con otros y a canalizar tu energía de manera más constructiva.`,
    detalleDerecho: `El Cinco de Bastos en posición normal te desafía a enfrentar tus conflictos y a participar en la competencia. Es una oportunidad para probar tu valía y para encontrar soluciones creativas en medio del caos.`,
    detalleInvertido: `Cuando el Cinco de Bastos aparece invertido, te pide que examines cómo estás manejando el conflicto. ¿Estás evitándolo o te estás rindiendo demasiado fácilmente? Es el momento de buscar la resolución y la cooperación.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué conflictos o desacuerdos estoy enfrentando en este momento?",
        "¿Estoy canalizando mi energía de manera constructiva o dispersa?",
        "¿Cómo puedo resolver las diferencias con otros de manera efectiva?",
        "¿Estoy participando en una competencia sana o destructiva?",
        "¿Qué desafíos necesito enfrentar para crecer?"
      ]
    }
  },
  {
    id: "seis-de-bastos",
    nombre: "Seis de Bastos",
    arcano: "Menor",
    numero: 6,
    palo: "Bastos/Varas",
    elemento: "Fuego",
    planeta: "Júpiter",
    signoAstrologico: "Leo",
    numerologia: "6 (Victoria, reconocimiento, triunfo, éxito público)",    palabrasClaveDerechas: ["Victoria", "reconocimiento", "triunfo", "éxito público", "buenas noticias", "progreso", "confianza", "autoestima"],
    palabrasClaveInvertidas: ["Fracaso", "humillación", "malas noticias", "falta de reconocimiento", "arrogancia", "dudas", "retrasos"],
    significadoDerecho: `El Seis de Bastos representa la victoria, el reconocimiento y el triunfo después de un esfuerzo. Esta carta simboliza el éxito público, las buenas noticias y la sensación de confianza que viene de haber logrado tus metas. Es un momento de celebración y de sentirte orgulloso de tus logros.
    
    Cuando aparece el Seis de Bastos, te invita a disfrutar de tu éxito, a aceptar el reconocimiento y a compartir tu alegría con los demás. Es un momento propicio para el ascenso, para el cumplimiento de objetivos y para sentir que tus esfuerzos han valido la pena.`,
    significadoInvertido: `En posición invertida, el Seis de Bastos advierte sobre el fracaso, la humillación o la falta de reconocimiento. Puede indicar que estás luchando con la autoestima, que tus logros no están siendo valorados o que estás experimentando retrasos.
    
    También puede señalar arrogancia, dudas sobre ti mismo o la necesidad de reevaluar tus expectativas. Te invita a ser más humilde, a confiar en tu propio valor y a no dejar que la opinión de otros defina tu éxito.`,
    detalleDerecho: `El Seis de Bastos en posición normal es una carta de triunfo y reconocimiento. Has trabajado duro y ahora es el momento de disfrutar de tu victoria. Permítete celebrar y ser reconocido por tus logros.`,
    detalleInvertido: `Cuando el Seis de Bastos aparece invertido, te pide que examines dónde te sientes sin reconocimiento o dónde tu arrogancia te está perjudicando. Busca la verdadera autoestima y celebra tus logros internos.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué victorias o logros tengo para celebrar en este momento?",
        "¿Estoy permitiendo que se me reconozca por mis esfuerzos?",
        "¿Cómo puedo mantener la confianza sin caer en la arrogancia?",
        "¿Qué me impide disfrutar plenamente de mi éxito?",
        "¿Estoy compartiendo mi alegría con quienes me apoyaron?"
      ]
    }
  },
  {
    id: "siete-de-bastos",
    nombre: "Siete de Bastos",
    arcano: "Menor",
    numero: 7,
    palo: "Bastos/Varas",
    elemento: "Fuego",
    planeta: "Marte",
    signoAstrologico: "Leo",
    numerologia: "7 (Desafío, defensa, resistencia, valentía)",    palabrasClaveDerechas: ["Desafío", "defensa", "resistencia", "valentía", "competencia", "postura firme", "determinación", "superación de obstáculos"],
    palabrasClaveInvertidas: ["Rendición", "derrota", "cobardía", "abrumación", "indecisión", "dudas", "evasión de conflicto"],
    significadoDerecho: `El Siete de Bastos representa el desafío, la defensa de tus convicciones y la resistencia ante la adversidad. Esta carta simboliza la necesidad de mantenerte firme, de defender tu posición y de enfrentar la competencia con valentía. Es un momento para proteger lo que crees y para no ceder ante la presión.
    
    Cuando aparece el Siete de Bastos, te invita a tomar una postura, a defender tus límites y a superar los obstáculos con determinación. Es un momento propicio para los debates, para la lucha por una causa y para demostrar tu fuerza interior.`,
    significadoInvertido: `En posición invertida, el Siete de Bastos advierte sobre la rendición, la derrota o la cobardía. Puede indicar que te sientes abrumado por los desafíos, que estás cediendo a la presión o que te niegas a defender tu posición.
    
    También puede señalar indecisión, dudas sobre ti mismo o la necesidad de reevaluar si vale la pena la lucha. Te invita a encontrar tu valentía, a establecer límites claros y a elegir tus batallas con sabiduría.`,
    detalleDerecho: `El Siete de Bastos en posición normal te impulsa a defender tus convicciones. Es el momento de mantenerte firme ante los desafíos y de mostrar tu valentía. No cedas ante la presión.`,
    detalleInvertido: `Cuando el Siete de Bastos aparece invertido, te pide que examines si estás rindiéndote demasiado fácilmente o si te sientes abrumado. Busca tu fuerza interior y decide qué batallas realmente valen la pena.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué desafíos estoy enfrentando y cómo puedo superarlos?",
        "¿Estoy defendiendo mis convicciones con valentía?",
        "¿Qué me impide mantener una postura firme ante la adversidad?",
        "¿Estoy cediendo a la presión de otros?",
        "¿Qué recursos internos o externos puedo usar para defender mi posición?"
      ]
    }
  },
  {
    id: "ocho-de-bastos",
    nombre: "Ocho de Bastos",
    arcano: "Menor",
    numero: 8,
    palo: "Bastos/Varas",
    elemento: "Fuego",
    planeta: "Mercurio",
    signoAstrologico: "Sagitario",
    numerologia: "8 (Movimiento, rapidez, noticias, comunicación)",    palabrasClaveDerechas: ["Movimiento", "rapidez", "noticias", "comunicación", "acción", "viajes", "progreso rápido", "eventos"],
    palabrasClaveInvertidas: ["Retrasos", "comunicación deficiente", "estancamiento", "viajes cancelados", "malas noticias", "prisa excesiva", "dispersión"],
    significadoDerecho: `El Ocho de Bastos representa el movimiento rápido, las noticias y la comunicación. Esta carta simboliza el progreso acelerado, la llegada de información importante y la acción sin demoras. Es un momento en el que las cosas se desarrollan rápidamente y las barreras se disuelven.
    
    Cuando aparece el Ocho de Bastos, te invita a actuar con rapidez, a aprovechar las oportunidades que se presentan y a estar abierto a la comunicación. Es un momento propicio para los viajes, para recibir noticias inesperadas y para ver cómo tus planes avanzan a toda velocidad.`,
    significadoInvertido: `En posición invertida, el Ocho de Bastos advierte sobre los retrasos, la comunicación deficiente o el estancamiento. Puede indicar viajes cancelados, malas noticias o la sensación de que las cosas no avanzan.
    
    También puede señalar prisa excesiva que lleva a errores, dispersión de energía o la necesidad de reevaluar tus prioridades antes de actuar. Te invita a ser paciente, a verificar la información y a no precipitarte en tus decisiones.`,
    detalleDerecho: `El Ocho de Bastos en posición normal te trae velocidad y movimiento. Las cosas están avanzando rápidamente y las noticias están en camino. Prepárate para la acción y los cambios.`,
    detalleInvertido: `Cuando el Ocho de Bastos aparece invertido, te pide que examines los retrasos o la mala comunicación. No te precipites; tómate tu tiempo para asegurar que todo esté claro.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué áreas de mi vida están experimentando un progreso rápido?",
        "¿Estoy abierto a recibir noticias y comunicaciones importantes?",
        "¿Estoy actuando con la rapidez adecuada o me estoy precipitando?",
        "¿Qué me impide avanzar o está causando retrasos?",
        "¿Cómo puedo mejorar mi comunicación para facilitar el progreso?"
      ]
    }
  },
  {
    id: "nueve-de-bastos",
    nombre: "Nueve de Bastos",
    arcano: "Menor",
    numero: 9,
    palo: "Bastos/Varas",
    elemento: "Fuego",
    planeta: "Marte",
    signoAstrologico: "Sagitario",
    numerologia: "9 (Resistencia, resiliencia, valentía, última batalla)",    palabrasClaveDerechas: ["Resistencia", "resiliencia", "valentía", "última batalla", "fortaleza", "perseverancia", "cansancio", "preparación"],
    palabrasClaveInvertidas: ["Paranoia", "obstinación", "cobardía", "agotamiento", "derrota", "falta de confianza", "rendición innecesaria"],
    significadoDerecho: `El Nueve de Bastos representa la resistencia, la resiliencia y la preparación para la última batalla. Esta carta simboliza la fortaleza que has ganado a través de las experiencias difíciles, la perseverancia y la capacidad de proteger tus logros. Es un momento de cautela, de defensa y de reunir tus últimas energías.
    
    Cuando aparece el Nueve de Bastos, te invita a mantenerte firme, a confiar en tu experiencia y a no rendirte justo antes de la meta. Es un momento propicio para la autodefensa, para la perseverancia en proyectos difíciles y para demostrar tu inquebrantable espíritu.`,
    significadoInvertido: `En posición invertida, el Nueve de Bastos advierte sobre la paranoia, la obstinación o la cobardía. Puede indicar agotamiento, la sensación de estar solo en la lucha o la tendencia a rendirte cuando estás cerca de la victoria.
    
    También puede señalar dudas sobre ti mismo, la incapacidad de ver que la batalla está casi ganada o la necesidad de liberarte de viejos conflictos. Te invita a descansar, a confiar en tus aliados y a soltar la guardia cuando sea seguro hacerlo.`,
    detalleDerecho: `El Nueve de Bastos en posición normal es un testimonio de tu resiliencia. Has luchado duro y estás listo para la última batalla. Mantente firme, confía en tu experiencia y no te rindas.`,
    detalleInvertido: `Cuando el Nueve de Bastos aparece invertido, te pide que examines si tu resistencia se ha vuelto agotamiento o paranoia. Es el momento de confiar, de descansar y de reconocer que la victoria está cerca.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué desafíos me han fortalecido y me han hecho más resistente?",
        "¿Estoy listo para la 'última batalla' o necesito descansar?",
        "¿Estoy siendo demasiado defensivo o paranoico?",
        "¿Cómo puedo mantener mi perseverancia ante el cansancio?",
        "¿Estoy confiando en mi capacidad para proteger lo que he ganado?"
      ]
    }
  },
  {
    id: "diez-de-bastos",
    nombre: "Diez de Bastos",
    arcano: "Menor",
    numero: 10,
    palo: "Bastos/Varas",
    elemento: "Fuego",
    planeta: "Saturno",
    signoAstrologico: "Sagitario",
    numerologia: "10 (Carga, responsabilidad, agotamiento, logro)",    palabrasClaveDerechas: ["Carga", "responsabilidad", "agotamiento", "estrés", "logro", "obligaciones", "peso", "trabajo excesivo"],
    palabrasClaveInvertidas: ["Alivio", "descarga", "liberación", "delegación", "superación de la carga", "responsabilidad compartida", "fin del estrés"],
    significadoDerecho: `El Diez de Bastos representa una carga pesada, la responsabilidad y el agotamiento que viene de asumir demasiado. Esta carta simboliza el final de un ciclo de esfuerzo intenso, donde te sientes abrumado por tus obligaciones. Es un momento de llevar el peso del mundo sobre tus hombros.
    
    Cuando aparece el Diez de Bastos, te invita a reconocer tus límites, a delegar responsabilidades y a buscar formas de aliviar tu carga. Es un momento propicio para la finalización de proyectos que han sido agotadores, para el descanso necesario y para aprender a decir "no" a nuevas exigencias.`,
    significadoInvertido: `En posición invertida, el Diez de Bastos indica el alivio, la descarga de responsabilidades o la liberación de una carga. Representa el momento en que encuentras una forma de delegar, de compartir el peso o de poner fin a un ciclo de estrés.
    
    También puede señalar la superación del agotamiento, la capacidad de priorizar tus tareas o la necesidad de reevaluar tus compromisos. Te invita a soltar lo que ya no te sirve, a buscar apoyo y a encontrar un equilibrio más saludable en tu vida.`,
    detalleDerecho: `El Diez de Bastos en posición normal te muestra el peso de tus responsabilidades. Has llevado una carga pesada; es momento de reconocer tu agotamiento y de buscar formas de delegar o aliviar ese peso.`,
    detalleInvertido: `Cuando el Diez de Bastos aparece invertido, te trae alivio. Has encontrado una manera de soltar parte de tu carga o de compartirla. Es el momento de descansar y de liberarte del estrés.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué cargas o responsabilidades me están agotando en este momento?",
        "¿Estoy delegando tareas o asumiendo demasiado?",
        "¿Cómo puedo encontrar alivio y reducir mi estrés?",
        "¿Qué necesito soltar para sentirme más ligero?",
        "¿Estoy llegando al final de un ciclo de esfuerzo intenso?"
      ]
    }
  },
  {
    id: "sota-de-bastos",
    nombre: "Sota de Bastos",
    arcano: "Menor",
    numero: 11,
    palo: "Bastos/Varas",
    elemento: "Fuego",
    planeta: "Marte",
    signoAstrologico: "Aries/Leo/Sagitario",
    numerologia: "11 (Noticias, inspiración, entusiasmo, potencial creativo)",    palabrasClaveDerechas: ["Noticias", "inspiración", "entusiasmo", "potencial creativo", "aventura", "exploración", "nuevas ideas", "mensajero"],
    palabrasClaveInvertidas: ["Malas noticias", "retrasos", "falta de inspiración", "inmadurez", "egoísmo", "falsas promesas", "desorientación"],
    significadoDerecho: `La Sota de Bastos representa la llegada de nuevas noticias, inspiración y el inicio de una aventura. Esta carta simboliza el entusiasmo, la chispa creativa y el potencial para explorar nuevos territorios. Es un mensajero de ideas emocionantes y de oportunidades para crecer.
    
    Cuando aparece la Sota de Bastos, te invita a abrazar la novedad, a seguir tu curiosidad y a compartir tu entusiasmo con los demás. Es un momento propicio para iniciar un nuevo proyecto creativo, para un viaje inesperado o para recibir una propuesta emocionante.`,
    significadoInvertido: `En posición invertida, la Sota de Bastos advierte sobre malas noticias, retrasos o la falta de inspiración. Puede indicar que te sientes desorientado, que estás lidiando con falsas promesas o que tu entusiasmo se ha desvanecido.
    
    También puede señalar inmadurez, egoísmo o la necesidad de reavivar tu fuego interior. Te invita a ser más honesto contigo mismo, a buscar la verdadera fuente de tu pasión y a evitar la procrastinación.`,
    detalleDerecho: `La Sota de Bastos en posición normal es un mensajero de nuevas ideas y aventuras. Abraza el entusiasmo y la curiosidad que esta carta te ofrece. Es el momento de explorar y de empezar algo emocionante.`,
    detalleInvertido: `Cuando la Sota de Bastos aparece invertida, te pide que examines dónde tu entusiasmo se ha perdido o dónde estás recibiendo malas noticias. Reaviva tu inspiración y busca la claridad antes de actuar.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué nuevas ideas o noticias me están inspirando en este momento?",
        "¿Estoy abierto a nuevas aventuras y exploraciones?",
        "¿Cómo puedo avivar mi entusiasmo y compartirlo con otros?",
        "¿Qué me impide seguir mi curiosidad?",
        "¿Estoy lidiando con falsas promesas o falta de claridad?"
      ]
    }
  },
  {
    id: "caballero-de-bastos",
    nombre: "Caballero de Bastos",
    arcano: "Menor",
    numero: 12,
    palo: "Bastos/Varas",
    elemento: "Fuego",
    planeta: "Marte",
    signoAstrologico: "Sagitario",
    numerologia: "12 (Acción, aventura, cambio, impulsividad)",    palabrasClaveDerechas: ["Acción", "aventura", "viajes", "impulso", "energía", "confianza", "pasión", "cambio rápido", "exploración"],
    palabrasClaveInvertidas: ["Prisa excesiva", "imprudencia", "retrasos", "agitación", "arrogancia", "falta de dirección", "conflictos", "interrupciones"],
    significadoDerecho: `El Caballero de Bastos representa la acción, la aventura y la energía para perseguir tus metas. Esta carta simboliza el impulso, la confianza y la disposición a tomar riesgos para lograr tus objetivos. Es un momento de movimiento rápido y de cambios significativos.
    
    Cuando aparece el Caballero de Bastos, te invita a actuar con valentía, a abrazar el cambio y a lanzarte a nuevas aventuras. Es un momento propicio para los viajes, para la consecución de proyectos ambiciosos y para demostrar tu pasión y determinación.`,
    significadoInvertido: `En posición invertida, el Caballero de Bastos advierte sobre la prisa excesiva, la imprudencia o los retrasos. Puede indicar agitación, arrogancia o la tendencia a tomar decisiones precipitadas.
    
    También puede señalar falta de dirección, conflictos con otros o la incapacidad de ver las consecuencias de tus acciones. Te invita a ser más reflexivo, a canalizar tu energía de manera constructiva y a encontrar un equilibrio entre la acción y la planificación.`,
    detalleDerecho: `El Caballero de Bastos en posición normal te impulsa a la acción y a la aventura. Es el momento de seguir tu pasión, de tomar riesgos y de lanzarte a nuevas experiencias. Tu energía es imparable.`,
    detalleInvertido: `Cuando el Caballero de Bastos aparece invertido, te pide que examines tu impulsividad o tu falta de dirección. No te precipites; canaliza tu energía de manera más consciente para evitar errores.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué acción necesito tomar para avanzar hacia mis metas?",
        "¿Estoy abrazando la aventura y el cambio en mi vida?",
        "¿Estoy siendo demasiado impulsivo o mi energía está bien dirigida?",
        "¿Qué viajes o nuevas experiencias me esperan?",
        "¿Cómo puedo canalizar mi pasión de manera constructiva?"
      ]
    }
  },
  {
    id: "reina-de-bastos",
    nombre: "Reina de Bastos",
    arcano: "Menor",
    numero: 13,
    palo: "Bastos/Varas",
    elemento: "Fuego",
    planeta: "Sol",
    signoAstrologico: "Leo",
    numerologia: "13 (Confianza, independencia, carisma, calidez)",    palabrasClaveDerechas: ["Confianza", "independencia", "carisma", "calidez", "entusiasmo", "optimismo", "energía", "determinación"],
    palabrasClaveInvertidas: ["Egoísmo", "arrogancia", "celos", "inseguridad", "controladora", "falta de enfoque", "agresión"],
    significadoDerecho: `La Reina de Bastos representa la confianza, la independencia y el carisma. Esta carta simboliza el entusiasmo, el optimismo y la capacidad de inspirar a otros con tu energía. Es el arquetipo de la mujer fuerte, vivaz y emprendedora que irradia calidez.
    
    Cuando aparece la Reina de Bastos, te invita a confiar en ti mismo, a perseguir tus pasiones con determinación y a compartir tu luz con el mundo. Es un momento propicio para el liderazgo, para los proyectos creativos y para sentirte empoderado y en control de tu vida.`,
    significadoInvertido: `En posición invertida, la Reina de Bastos advierte sobre el egoísmo, la arrogancia o los celos. Puede indicar inseguridad, la tendencia a ser controladora o la falta de enfoque en tus metas.
    
    También puede señalar agresión, impaciencia o la necesidad de reconectar con tu verdadera pasión. Te invita a ser más humilde, a canalizar tu energía de manera constructiva y a encontrar un equilibrio entre tu confianza y tu empatía.`,
    detalleDerecho: `La Reina de Bastos en posición normal te anima a abrazar tu confianza, tu carisma y tu independencia. Irradias energía y optimismo. Comparte tu luz y lidera con el ejemplo.`,
    detalleInvertido: `Cuando la Reina de Bastos aparece invertida, te pide que examines dónde tu confianza se ha vuelto arrogancia o dónde tu energía se está dispersando. Reconecta con tu esencia más auténtica.`,
    meditacionReflexion: {
      preguntas: [
        "¿Cómo puedo cultivar más confianza e independencia en mi vida?",
        "¿Estoy inspirando a otros con mi entusiasmo y carisma?",
        "¿Qué proyectos creativos me apasionan en este momento?",
        "¿Qué me impide compartir mi luz con el mundo?",
        "¿Estoy balanceando mi determinación con la empatía?"
      ]
    }
  },
  {
    id: "rey-de-bastos",
    nombre: "Rey de Bastos",
    arcano: "Menor",
    numero: 14,
    palo: "Bastos/Varas",
    elemento: "Fuego",
    planeta: "Sol",
    signoAstrologico: "Leo/Sagitario",
    numerologia: "14 (Liderazgo, visión, inspiración, creatividad madura)",    palabrasClaveDerechas: ["Liderazgo", "visión", "inspiración", "creatividad madura", "emprendedor", "determinación", "carisma", "autenticidad"],
    palabrasClaveInvertidas: ["Tiranía", "autoritarismo", "engaño", "impulsividad", "falta de visión", "egoísmo", "controlador"],
    significadoDerecho: `El Rey de Bastos representa el liderazgo, la visión y la creatividad madura. Esta carta simboliza la capacidad de inspirar a otros, de emprender grandes proyectos y de gobernar con autenticidad y determinación. Es el arquetipo del líder carismático, el visionario o el emprendedor exitoso.
    
    Cuando aparece el Rey de Bastos, te invita a asumir tu rol de líder, a perseguir tus ambiciones con valentía y a inspirar a quienes te rodean. Es un momento propicio para el lanzamiento de nuevas empresas, para la expansión de tus proyectos y para demostrar tu visión a largo plazo.`,
    significadoInvertido: `En posición invertida, el Rey de Bastos advierte sobre la tiranía, el autoritarismo o el engaño. Puede indicar impulsividad, falta de visión o la tendencia a ser demasiado controlador o egoísta.
    
    También puede señalar el abuso de poder, la incapacidad de inspirar a otros o la necesidad de reevaluar tus motivaciones de liderazgo. Te invita a ser más humilde, a delegar responsabilidades y a recordar que el verdadero liderazgo proviene del servicio y la autenticidad.`,
    detalleDerecho: `El Rey de Bastos en posición normal te impulsa a liderar con visión y autenticidad. Tu carisma y tu determinación son tus mayores activos. Inspira a otros y persigue tus ambiciones con valentía.`,
    detalleInvertido: `Cuando el Rey de Bastos aparece invertido, te pide que examines cómo estás ejerciendo tu liderazgo. ¿Estás siendo autoritario o te falta visión? Revisa tus motivaciones y busca la autenticidad.`,
    meditacionReflexion: {
      preguntas: [
        "¿Cómo puedo liderar con mayor visión e inspiración?",
        "¿Estoy persiguiendo mis ambiciones con autenticidad y determinación?",
        "¿Qué me impide inspirar a otros con mi ejemplo?",
        "¿Estoy siendo demasiado controlador o egoísta en mi liderazgo?",
        "¿Qué nuevas empresas o proyectos estoy listo para lanzar con visión?"
      ]
    }
  },
  // Palo de Espadas
  {
    id: "as-de-espadas",
    nombre: "As de Espadas",
    arcano: "Menor",
    numero: 1,
    palo: "Espadas",
    elemento: "Aire",
    planeta: "Urano",
    signoAstrologico: "Géminis/Libra/Acuario",
    numerologia: "1 (Comienzo, verdad, claridad, avance)",    palabrasClaveDerechas: ["Verdad", "claridad", "avance", "decisión", "nueva idea", "ruptura", "justicia", "fuerza mental"],
    palabrasClaveInvertidas: ["Confusión", "engaño", "tiranía", "destrucción", "uso indebido de poder", "bloqueo mental", "falta de claridad"],
    significadoDerecho: `El As de Espadas representa el inicio de una nueva verdad, una claridad mental o una decisión importante. Esta carta simboliza el poder de la mente, la capacidad de cortar con la confusión y de encontrar soluciones lógicas. Es un momento de avance intelectual y de romper con lo que ya no sirve.
    
    Cuando aparece el As de Espadas, te invita a buscar la verdad, a tomar decisiones con convicción y a comunicar tus ideas con claridad. Es un momento propicio para la resolución de problemas, para iniciar nuevos proyectos que requieran pensamiento analítico y para liberar tu mente de ataduras.`,
    significadoInvertido: `En posición invertida, el As de Espadas advierte sobre la confusión, el engaño o el uso indebido de poder. Puede indicar que estás luchando con un bloqueo mental, que te falta claridad para tomar decisiones o que estás siendo tiránico con tus ideas.
    
    También puede señalar verdades dolorosas, la incapacidad de ver la realidad o la necesidad de liberar tu mente de patrones negativos. Te invita a buscar la honestidad, a cuestionar tus suposiciones y a usar tu intelecto para el bien.`,
    detalleDerecho: `El As de Espadas en posición normal es una descarga de claridad mental. Una nueva idea o una verdad reveladora te empoderará. Usa esta fuerza para tomar decisiones firmes y cortar con la confusión.`,
    detalleInvertido: `Cuando el As de Espadas aparece invertido, te pide que examines si la confusión te está abrumando o si estás usando tu intelecto de manera destructiva. Busca la verdad y la claridad interna.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué nueva verdad necesito reconocer en mi vida?",
        "¿Estoy buscando la claridad y la honestidad en mis pensamientos?",
        "¿Qué decisiones importantes necesito tomar con convicción?",
        "¿Cómo puedo usar mi mente para cortar con la confusión?",
        "¿Estoy comunicando mis ideas con la suficiente claridad?"
      ]
    }
  },
  {
    id: "dos-de-espadas",
    nombre: "Dos de Espadas",
    arcano: "Menor",
    numero: 2,
    palo: "Espadas",
    elemento: "Aire",
    planeta: "Luna",
    signoAstrologico: "Libra",
    numerologia: "2 (Indecisión, estancamiento, bloqueo emocional)",    palabrasClaveDerechas: ["Indecisión", "estancamiento", "bloqueo emocional", "evitación", "tregua", "equilibrio precario", "negación", "callejón sin salida"],
    palabrasClaveInvertidas: ["Resolución", "claridad", "abrir los ojos", "tomar decisiones", "liberación emocional", "confrontación", "aceptación"],
    significadoDerecho: `El Dos de Espadas representa la indecisión, el estancamiento y un bloqueo emocional. Esta carta simboliza una situación en la que te niegas a ver la verdad o a tomar una decisión difícil, manteniéndote en un equilibrio precario. Es un momento de conflicto interno, donde la mente y el corazón no están alineados.
    
    Cuando aparece el Dos de Espadas, te invita a enfrentar tus miedos, a quitarte la venda de los ojos y a tomar la decisión que has estado evitando. Es un momento propicio para la meditación, para la reflexión profunda y para buscar la honestidad contigo mismo.`,
    significadoInvertido: `En posición invertida, el Dos de Espadas indica la resolución, la claridad y el fin del bloqueo emocional. Representa el momento en que abres los ojos a la verdad, tomas una decisión difícil o liberas una carga emocional.
    
    También puede señalar la confrontación de una verdad dolorosa, la necesidad de perdonar o la capacidad de avanzar después de un período de estancamiento. Te invita a ser valiente, a confiar en tu intuición y a buscar la paz interior.`,
    detalleDerecho: `El Dos de Espadas en posición normal te muestra tu indecisión y tu resistencia a enfrentar la verdad. Es momento de quitarte la venda y tomar una decisión, aunque sea difícil.`,
    detalleInvertido: `Cuando el Dos de Espadas aparece invertido, te trae la tan esperada claridad. Estás listo para tomar una decisión y liberarte del estancamiento. Confía en tu intuición.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué decisión estoy evitando tomar en este momento?",
        "¿Estoy negándome a ver alguna verdad importante?",
        "¿Qué me impide liberarme de este bloqueo emocional?",
        "¿Cómo puedo encontrar la claridad para avanzar?",
        "¿Estoy en un equilibrio precario o hay una oportunidad de resolución?"
      ]
    }
  },
  {
    id: "tres-de-espadas",
    nombre: "Tres de Espadas",
    arcano: "Menor",
    numero: 3,
    palo: "Espadas",
    elemento: "Aire",
    planeta: "Saturno",
    signoAstrologico: "Libra",
    numerologia: "3 (Dolor, desilusión, separación, tristeza)",    palabrasClaveDerechas: ["Dolor", "desilusión", "separación", "tristeza", "pérdida", "conflicto", "traición", "corazón roto"],
    palabrasClaveInvertidas: ["Sanación", "perdón", "superación del dolor", "reconciliación", "liberación emocional", "aprendizaje de la lección"],
    significadoDerecho: `El Tres de Espadas representa el dolor, la desilusión y la separación. Esta carta simboliza un momento de tristeza profunda, pérdida o conflicto que puede romper el corazón. Es la representación de verdades difíciles, traiciones o el fin de una relación.
    
    Cuando aparece el Tres de Espadas, te invita a enfrentar tu dolor, a permitirte sentir la tristeza y a procesar tus emociones. Es un momento propicio para el luto, para la aceptación de una realidad difícil y para la purificación que viene después de la tormenta.`,
    significadoInvertido: `En posición invertida, el Tres de Espadas indica el inicio de la sanación, el perdón o la superación del dolor. Representa el momento en que empiezas a liberar las emociones negativas, a reconciliarte con el pasado o a aprender de la lección.
    
    También puede señalar la necesidad de perdonar, la capacidad de encontrar paz después de un conflicto o la liberación de una carga emocional. Te invita a buscar el apoyo, a permitirte sanar y a encontrar la fuerza para seguir adelante.`,
    detalleDerecho: `El Tres de Espadas en posición normal es una carta de dolor y desilusión. Permítete sentir la tristeza y procesar la herida. Es un paso necesario hacia la sanación.`,
    detalleInvertido: `Cuando el Tres de Espadas aparece invertido, es una señal de que la sanación ha comenzado. Estás liberando el dolor y el perdón es posible. El camino hacia la paz está despejado.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué me está causando dolor o desilusión en este momento?",
        "¿Estoy permitiéndome sentir y procesar mi tristeza?",
        "¿Qué necesito perdonar o liberar para sanar?",
        "¿Estoy aprendiendo de esta experiencia dolorosa?",
        "¿Cómo puedo encontrar apoyo para superar este momento?"
      ]
    }
  },
  {
    id: "cuatro-de-espadas",
    nombre: "Cuatro de Espadas",
    arcano: "Menor",
    numero: 4,
    palo: "Espadas",
    elemento: "Aire",
    planeta: "Júpiter",
    signoAstrologico: "Libra",
    numerologia: "4 (Descanso, recuperación, meditación, retiro)",    palabrasClaveDerechas: ["Descanso", "recuperación", "meditación", "retiro", "reflexión", "paz mental", "curación", "necesidad de pausa"],
    palabrasClaveInvertidas: ["Agitación", "agotamiento", "insomnio", "reincorporación", "falta de descanso", "estrés", "impaciencia"],
    significadoDerecho: `El Cuatro de Espadas representa la necesidad de descanso, recuperación y meditación. Esta carta simboliza un período de retiro, de reflexión y de curación después de un conflicto o un período de estrés. Es un llamado a tomar una pausa para recuperar la paz mental y la energía.
    
    Cuando aparece el Cuatro de Espadas, te invita a desconectar, a descansar profundamente y a buscar la tranquilidad para tu mente. Es un momento propicio para la meditación, para la curación física o emocional y para la planificación estratégica antes de volver a la acción.`,
    significadoInvertido: `En posición invertida, el Cuatro de Espadas advierte sobre la agitación, el agotamiento o el insomnio. Puede indicar que te niegas a descansar, que estás reincorporándote demasiado rápido o que estás luchando con un estrés persistente.
    
    También puede señalar la impaciencia, la incapacidad de encontrar paz o la necesidad de un período de descanso más profundo. Te invita a escuchar a tu cuerpo y mente, a priorizar tu bienestar y a permitirte el tiempo necesario para recuperarte completamente.`,
    detalleDerecho: `El Cuatro de Espadas en posición normal es una clara señal de que necesitas un descanso. Retírate, medita y permite que tu mente y cuerpo se recuperen. La paz mental es esencial antes de volver a la acción.`,
    detalleInvertido: `Cuando el Cuatro de Espadas aparece invertido, te pide que examines tu nivel de agotamiento. No te niegues el descanso necesario. Es el momento de priorizar tu bienestar para evitar el colapso.`,
    meditacionReflexion: {
      preguntas: [
        "¿Estoy permitiéndome el descanso y la recuperación que necesito?",
        "¿Qué estrategias puedo usar para encontrar paz mental?",
        "¿Necesito un retiro o un período de meditación?",
        "¿Qué me impide desconectar y descansar plenamente?",
        "¿Estoy reincorporándome demasiado rápido a mis responsabilidades?"
      ]
    }
  },
  {
    id: "cinco-de-espadas",
    nombre: "Cinco de Espadas",
    arcano: "Menor",
    numero: 5,
    palo: "Espadas",
    elemento: "Aire",
    planeta: "Venus",
    signoAstrologico: "Acuario",
    numerologia: "5 (Derrota, humillación, conflicto, consecuencias negativas)",    palabrasClaveDerechas: ["Derrota", "humillación", "conflicto", "consecuencias negativas", "victoria pírrica", "vergüenza", "pérdida", "deshonestidad"],
    palabrasClaveInvertidas: ["Reconciliación", "perdón", "aceptación de la derrota", "resolución de conflictos", "superación de la vergüenza", "aprendizaje"],
    significadoDerecho: `El Cinco de Espadas representa la derrota, la humillación y las consecuencias negativas de un conflicto. Esta carta simboliza una victoria pírrica, donde el costo de ganar es tan alto que te deja sintiendo vacío o arrepentido. Es un momento de conflicto deshonesto, de pérdida o de vergüenza.
    
    Cuando aparece el Cinco de Espadas, te invita a reconocer la verdad de la situación, a aceptar las consecuencias de tus acciones o a aprender de una derrota. Es un momento propicio para reflexionar sobre tus motivaciones en los conflictos y para considerar si el costo de ganar vale la pena.`,
    significadoInvertido: `En posición invertida, el Cinco de Espadas indica la reconciliación, el perdón o la aceptación de la derrota. Representa el momento en que liberas la vergüenza, buscas la paz o aprendes de una experiencia dolorosa.
    
    También puede señalar la necesidad de perdonar a otros, la capacidad de encontrar una solución a un conflicto o la superación de las secuelas de una batalla. Te invita a ser más compasivo, a buscar la armonía y a evitar el conflicto por el conflicto mismo.`,
    detalleDerecho: `El Cinco de Espadas en posición normal es una advertencia sobre la victoria pírrica. Has ganado la batalla, pero a qué costo. Examina las consecuencias de tus acciones y la humillación que puede generar.`,
    detalleInvertido: `Cuando el Cinco de Espadas aparece invertido, te ofrece una oportunidad de reconciliación y sanación. Es el momento de soltar la vergüenza y de buscar el perdón, tanto para ti mismo como para otros.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué conflictos estoy enfrentando y cuáles son sus consecuencias?",
        "¿Estoy obteniendo una 'victoria pírrica' que me dejará vacío?",
        "¿Qué necesito aprender de esta derrota o humillación?",
        "¿Cómo puedo buscar la reconciliación o el perdón?",
        "¿Estoy siendo honesto en mis interacciones y conflictos?"
      ]
    }
  },
  {
    id: "seis-de-espadas",
    nombre: "Seis de Espadas",
    arcano: "Menor",
    numero: 6,
    palo: "Espadas",
    elemento: "Aire",
    planeta: "Mercurio",
    signoAstrologico: "Acuario",
    numerologia: "6 (Transición, viaje, escape, paso a un nuevo lugar)",    palabrasClaveDerechas: ["Transición", "viaje", "escape", "alejarse del conflicto", "paz mental", "paso a un nuevo lugar", "curación", "soltar el pasado"],
    palabrasClaveInvertidas: ["Estancamiento", "resistencia al cambio", "regreso al conflicto", "dificultad para soltar", "rutina", "carga emocional"],
    significadoDerecho: `El Seis de Espadas representa una transición, un viaje o el acto de alejarse de una situación difícil hacia aguas más tranquilas. Esta carta simboliza la necesidad de dejar atrás el pasado, de buscar la paz mental y de avanzar hacia un nuevo lugar, física o emocionalmente. Es un momento de escape o de curación.
    
    Cuando aparece el Seis de Espadas, te invita a soltar lo que ya no te sirve, a emprender un viaje que te traerá paz y a buscar un nuevo comienzo. Es un momento propicio para mudanzas, para viajes para sanar o para cualquier proceso que te lleve a una mayor tranquilidad.`,
    significadoInvertido: `En posición invertida, el Seis de Espadas advierte sobre el estancamiento, la resistencia al cambio o el regreso al conflicto. Puede indicar que te cuesta soltar el pasado, que te sientes atrapado o que estás reviviendo viejas heridas.
    
    También puede señalar la dificultad para encontrar la paz, la necesidad de confrontar lo que has evitado o la incapacidad de avanzar. Te invita a ser valiente, a enfrentar tus miedos y a reconocer que el verdadero escape está en tu mente.`,
    detalleDerecho: `El Seis de Espadas en posición normal te indica un viaje hacia aguas más tranquilas. Es el momento de dejar atrás el conflicto y las preocupaciones. Confía en el proceso de transición hacia la paz.`,
    detalleInvertido: `Cuando el Seis de Espadas aparece invertido, te pide que examines tu resistencia al cambio o la dificultad para soltar el pasado. No te quedes estancado; busca la forma de avanzar.`,
    meditacionReflexion: {
      preguntas: [
        "¿De qué situación necesito alejarme para encontrar paz?",
        "¿Estoy listo para soltar el pasado y avanzar?",
        "¿Qué viaje o transición me espera en mi vida?",
        "¿Qué me impide encontrar la paz mental?",
        "¿Estoy resistiéndome al cambio necesario?"
      ]
    }
  },
  {
    id: "siete-de-espadas",
    nombre: "Siete de Espadas",
    arcano: "Menor",
    numero: 7,
    palo: "Espadas",
    elemento: "Aire",
    planeta: "Urano",
    signoAstrologico: "Acuario",
    numerologia: "7 (Engaño, estrategia, sigilo, astucia)",    palabrasClaveDerechas: ["Engaño", "estrategia", "sigilo", "astucia", "robo", "mentira", "plan secreto", "evasión"],
    palabrasClaveInvertidas: ["Revelación", "honestidad", "arrepentimiento", "confesión", "mala estrategia", "problemas con la ley", "fracaso del engaño"],
    significadoDerecho: `El Siete de Espadas representa el engaño, la estrategia y la astucia. Esta carta simboliza una situación donde alguien (tú o alguien más) está actuando con poca honestidad, robando ideas o intentando salirse con la suya de forma sigilosa. Es un momento de tácticas dudosas y de evitar la confrontación directa.
    
    Cuando aparece el Siete de Espadas, te invita a ser consciente de las intenciones ocultas, a proteger tus intereses y a cuestionar la honestidad de las situaciones. Es un momento propicio para el espionaje, para la planificación estratégica encubierta o para reconocer dónde estás siendo deshonesto contigo mismo.`,
    significadoInvertido: `En posición invertida, el Siete de Espadas indica la revelación, la honestidad o el arrepentimiento. Puede señalar que un engaño ha sido descubierto, que estás confesando una verdad o que estás lidiando con las consecuencias de una mala estrategia.
    
    También puede advertir sobre problemas legales, el fracaso de un plan secreto o la necesidad de ser más transparente. Te invita a buscar la honestidad, a asumir la responsabilidad de tus acciones y a construir relaciones basadas en la confianza.`,
    detalleDerecho: `El Siete de Espadas en posición normal te advierte sobre el engaño, ya sea que tú lo estés cometiendo o que seas víctima de él. Sé astuto y estratega, pero ten cuidado con las acciones deshonestas.`,
    detalleInvertido: `Cuando el Siete de Espadas aparece invertido, es una señal de que la verdad saldrá a la luz. Es el momento de la honestidad y del arrepentimiento, si es necesario. No puedes esconderte más.`,
    meditacionReflexion: {
      preguntas: [
        "¿Estoy siendo honesto conmigo mismo y con los demás?",
        "¿Hay engaño o estrategias ocultas en mi situación actual?",
        "¿Qué necesito proteger o de qué debo ser consciente?",
        "¿Estoy usando mi astucia de manera ética?",
        "¿Qué consecuencias podría tener una acción deshonesta?"
      ]
    }
  },
  {
    id: "ocho-de-espadas",
    nombre: "Ocho de Espadas",
    arcano: "Menor",
    numero: 8,
    palo: "Espadas",
    elemento: "Aire",
    planeta: "Mercurio",
    signoAstrologico: "Géminis",
    numerologia: "8 (Restricción, limitación, miedo, prisión mental)",    palabrasClaveDerechas: ["Restricción", "limitación", "miedo", "prisión mental", "impotencia", "víctima", "parálisis", "pensamientos negativos"],
    palabrasClaveInvertidas: ["Liberación", "superación del miedo", "claridad", "encontrar soluciones", "romper límites", "empoderamiento", "escapar"],
    significadoDerecho: `El Ocho de Espadas representa la restricción, la limitación y el miedo que te mantiene prisionero. Esta carta simboliza una situación en la que te sientes impotente, atado por pensamientos negativos o por una percepción errónea de la realidad. Es una prisión mental, a menudo autoimpuesta.
    
    Cuando aparece el Ocho de Espadas, te invita a reconocer que las limitaciones son a menudo autoimpuestas, a cuestionar tus miedos y a buscar la forma de liberarte. Es un momento propicio para el autoanálisis, para desafiar tus creencias limitantes y para dar el primer paso hacia la libertad.`,
    significadoInvertido: `En posición invertida, el Ocho de Espadas indica la liberación, la superación del miedo y la claridad. Representa el momento en que rompes tus cadenas, encuentras soluciones y te empoderas para escapar de tus limitaciones.
    
    También puede señalar la confrontación de una verdad incómoda, la capacidad de ver la realidad con mayor claridad o la necesidad de salir de tu zona de confort. Te invita a ser valiente, a confiar en tu fuerza interior y a recordar que tienes el poder de liberarte.`,
    detalleDerecho: `El Ocho de Espadas en posición normal te muestra una prisión mental. Te sientes atado por tus miedos y pensamientos limitantes. Pero recuerda, la llave está en tu mano.`,
    detalleInvertido: `Cuando el Ocho de Espadas aparece invertido, es una señal de liberación. Estás rompiendo tus cadenas y superando tus miedos. Abraza tu poder y sal de la situación.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué miedos o pensamientos me están limitando en este momento?",
        "¿Estoy en una prisión mental autoimpuesta?",
        "¿Cómo puedo desafiar mis creencias limitantes?",
        "¿Qué necesito hacer para liberarme de esta restricción?",
        "¿Estoy buscando soluciones o sintiéndome impotente?"
      ]
    }
  },
  {
    id: "nueve-de-espadas",
    nombre: "Nueve de Espadas",
    arcano: "Menor",
    numero: 9,
    palo: "Espadas",
    elemento: "Aire",
    planeta: "Marte",
    signoAstrologico: "Géminis",
    numerologia: "9 (Angustia, pesadillas, preocupación, culpa)",    palabrasClaveDerechas: ["Angustia", "pesadillas", "preocupación", "culpa", "ansiedad", "miedo", "arrepentimiento", "insomnio"],
    palabrasClaveInvertidas: ["Alivio", "esperanza", "liberación de la culpa", "aceptación", "superación de la ansiedad", "soluciones", "despertar"],
    significadoDerecho: `El Nueve de Espadas representa la angustia, las pesadillas y la preocupación intensa. Esta carta simboliza un momento de ansiedad, culpa, arrepentimiento o miedo que te quita el sueño. Es la manifestación de tus pensamientos más oscuros y tus inseguridades.
    
    Cuando aparece el Nueve de Espadas, te invita a enfrentar tus miedos, a buscar la causa de tu angustia y a encontrar formas de liberar tu mente de la preocupación. Es un momento propicio para el autoexamen, para buscar apoyo profesional y para reconocer que tus preocupaciones son a menudo exageradas por tu mente.`,
    significadoInvertido: `En posición invertida, el Nueve de Espadas indica el alivio, la esperanza o la liberación de la culpa. Representa el momento en que empiezas a ver la luz al final del túnel, a encontrar soluciones a tus problemas o a aceptar tus errores.
    
    También puede señalar la superación de la ansiedad, la capacidad de dormir en paz o la necesidad de perdonarte a ti mismo. Te invita a buscar la perspectiva, a confiar en que las cosas mejorarán y a liberarte de la carga de la culpa.`,
    detalleDerecho: `El Nueve de Espadas en posición normal te sumerge en la angustia y la preocupación. Es el momento de enfrentar tus miedos y de buscar la raíz de tu ansiedad para encontrar la paz.`,
    detalleInvertido: `Cuando el Nueve de Espadas aparece invertido, te trae alivio y esperanza. Estás liberando la culpa y la ansiedad. Permítete descansar y ver las soluciones que se presentan.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué preocupaciones me están quitando el sueño en este momento?",
        "¿Estoy lidiando con culpa o arrepentimiento?",
        "¿Qué puedo hacer para liberar mi mente de esta angustia?",
        "¿Estoy exagerando mis miedos o hay una amenaza real?",
        "¿Cómo puedo encontrar esperanza y soluciones a mis problemas?"
      ]
    }
  },
  {
    id: "diez-de-espadas",
    nombre: "Diez de Espadas",
    arcano: "Menor",
    numero: 10,
    palo: "Espadas",
    elemento: "Aire",
    planeta: "Sol",
    signoAstrologico: "Géminis",
    numerologia: "10 (Fin, finalización, ruina, nuevo comienzo)",    palabrasClaveDerechas: ["Fin", "finalización", "ruina", "derrota", "traición", "punto sin retorno", "crisis", "nuevo comienzo"],
    palabrasClaveInvertidas: ["Recuperación", "regeneración", "resistencia al cambio", "evitar el fin", "nuevos comienzos", "mejora"],
    significadoDerecho: `El Diez de Espadas representa un final definitivo, una finalización dolorosa o una derrota aparente. Esta carta simboliza la ruina, la traición o el punto más bajo de una situación. Es un momento de crisis, donde te sientes completamente vencido y sin esperanza.
    
    Cuando aparece el Diez de Espadas, te invita a aceptar el fin, a soltar lo que ya no sirve y a reconocer que este final es necesario para un nuevo comienzo. Es un momento propicio para el luto, para la liberación de viejas cargas y para confiar en que después de la oscuridad siempre viene la luz.`,
    significadoInvertido: `En posición invertida, el Diez de Espadas indica la recuperación, la regeneración o la resistencia al cambio. Puede señalar que estás evitando el final necesario, que estás luchando contra lo inevitable o que estás experimentando una mejora después de una crisis.
    
    También puede advertir sobre la persistencia en viejos patrones, la incapacidad de dejar ir o la necesidad de aceptar un final para avanzar. Te invita a abrazar el cambio, a confiar en tu capacidad de recuperarte y a ver las oportunidades que surgen de las cenizas.`,
    detalleDerecho: `El Diez de Espadas en posición normal es el final de un ciclo. Aunque parezca doloroso, es un nuevo amanecer disfrazado. Acepta el final para que el nuevo comienzo pueda florecer.`,
    detalleInvertido: `Cuando el Diez de Espadas aparece invertido, te advierte que estás resistiéndote a un final necesario. Permítete soltar para que la recuperación y el nuevo comienzo puedan manifestarse.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué ciclo está llegando a su fin en mi vida?",
        "¿Estoy resistiéndome a un final necesario?",
        "¿Cómo puedo aceptar esta 'derrota' para un nuevo comienzo?",
        "¿Qué lecciones puedo aprender de esta crisis?",
        "¿Estoy preparado para la regeneración y la recuperación?"
      ]
    }
  },
  {
    id: "sota-de-espadas",
    nombre: "Sota de Espadas",
    arcano: "Menor",
    numero: 11,
    palo: "Espadas",
    elemento: "Aire",
    planeta: "Urano",
    signoAstrologico: "Géminis/Libra/Acuario",
    numerologia: "11 (Curiosidad, vigilancia, noticias, mente activa)",    palabrasClaveDerechas: ["Curiosidad", "vigilancia", "noticias", "mente activa", "intelecto", "alerta", "verdad", "comunicación"],
    palabrasClaveInvertidas: ["Chismorreo", "engaño", "malas noticias", "falta de enfoque", "imprudencia", "agresión verbal", "superficialidad"],
    significadoDerecho: `La Sota de Espadas representa la curiosidad, la vigilancia y la llegada de noticias. Esta carta simboliza una mente activa, la búsqueda de la verdad y la necesidad de estar alerta. Es un mensajero de información importante, a menudo desafiante, que requiere tu atención y análisis.
    
    Cuando aparece la Sota de Espadas, te invita a ser observador, a cuestionar la información y a comunicar tus ideas con claridad. Es un momento propicio para el estudio, para la investigación y para estar preparado para defender tus ideas con argumentos sólidos.`,
    significadoInvertido: `En posición invertida, la Sota de Espadas advierte sobre el chismorreo, el engaño o las malas noticias. Puede indicar una falta de enfoque, imprudencia verbal o la tendencia a ser demasiado crítico o agresivo con tus palabras.
    
    También puede señalar la propagación de rumores, la incapacidad de ver la verdad o la necesidad de ser más responsable con tu comunicación. Te invita a ser más discreto, a verificar la información y a usar tu intelecto de manera constructiva.`,
    detalleDerecho: `La Sota de Espadas en posición normal es un mensajero de nuevas ideas y una señal de que necesitas estar alerta. Usa tu mente aguda para discernir la verdad y comunicar con claridad.`,
    detalleInvertido: `Cuando la Sota de Espadas aparece invertida, te pide que examines tu comunicación. ¿Estás chismeando o siendo imprudente con tus palabras? Busca la honestidad y la responsabilidad.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué noticias o información importante estoy recibiendo?",
        "¿Estoy siendo suficientemente vigilante y observador?",
        "¿Cómo puedo usar mi mente activa para mi beneficio?",
        "¿Qué me impide comunicar mis ideas con claridad?",
        "¿Estoy contribuyendo al chismorreo o a la desinformación?"
      ]
    }
  },
  {
    id: "caballero-de-espadas",
    nombre: "Caballero de Espadas",
    arcano: "Menor",
    numero: 12,
    palo: "Espadas",
    elemento: "Aire",
    planeta: "Marte",
    signoAstrologico: "Acuario",
    numerologia: "12 (Ambición, franqueza, rapidez, agresión)",    palabrasClaveDerechas: ["Ambición", "franqueza", "rapidez", "agresión", "valentía", "determinación", "confrontación", "acción decisiva"],
    palabrasClaveInvertidas: ["Imprudencia", "ira", "tiranía", "destrucción", "falta de tacto", "precipitación", "crueldad"],
    significadoDerecho: `El Caballero de Espadas representa la ambición, la franqueza y la rapidez en la acción. Esta carta simboliza la valentía, la determinación y la disposición a enfrentar los desafíos de frente. Es un arquetipo de acción decisiva y de comunicación directa, a veces agresiva.
    
    Cuando aparece el Caballero de Espadas, te invita a actuar con audacia, a defender tus ideas con convicción y a perseguir tus metas sin miedo. Es un momento propicio para el debate, para la confrontación de verdades y para la ejecución de planes ambiciosos.`,
    significadoInvertido: `En posición invertida, el Caballero de Espadas advierte sobre la imprudencia, la ira o la tiranía. Puede indicar agresividad verbal, falta de tacto o la tendencia a precipitarse en situaciones sin pensar en las consecuencias.
    
    También puede señalar la destrucción, la incapacidad de controlar tus impulsos o la necesidad de ser más diplomático. Te invita a canalizar tu energía de manera constructiva, a pensar antes de hablar y a evitar el conflicto innecesario.`,
    detalleDerecho: `El Caballero de Espadas en posición normal te impulsa a la acción audaz y a la confrontación de la verdad. Tu mente es tu arma; úsala con valentía y determinación para alcanzar tus metas.`,
    detalleInvertido: `Cuando el Caballero de Espadas aparece invertido, te advierte sobre la imprudencia o la agresión. Es el momento de controlar tus impulsos y de pensar antes de actuar.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué acciones decisivas necesito tomar en este momento?",
        "¿Estoy siendo demasiado agresivo o mi franqueza es apropiada?",
        "¿Cómo puedo canalizar mi ambición de manera constructiva?",
        "¿Estoy persiguiendo mis metas con valentía y determinación?",
        "¿Qué me impide ser más diplomático en mis interacciones?"
      ]
    }
  },
  {
    id: "reina-de-espadas",
    nombre: "Reina de Espadas",
    arcano: "Menor",
    numero: 13,
    palo: "Espadas",
    elemento: "Aire",
    planeta: "Saturno",
    signoAstrologico: "Libra/Acuario",
    numerologia: "13 (Independencia, intelecto, honestidad, frialdad)",    palabrasClaveDerechas: ["Independencia", "intelecto", "honestidad", "frialdad", "objetividad", "justicia", "crítica", "sabiduría"],
    palabrasClaveInvertidas: ["Crueldad", "amargura", "intolerancia", "manipulación", "frialdad excesiva", "juicio"],
    significadoDerecho: `La Reina de Espadas representa la independencia, el intelecto agudo y la honestidad. Esta carta simboliza la objetividad, la capacidad de ver la verdad sin emociones y de comunicar con claridad, incluso si es doloroso. Es el arquetipo de la mujer sabia, perspicaz y a veces distante.
    
    Cuando aparece la Reina de Espadas, te invita a ser objetivo en tus juicios, a buscar la verdad y a comunicar tus ideas con franqueza. Es un momento propicio para el análisis, para la toma de decisiones difíciles y para proteger tus límites con claridad.`,
    significadoInvertido: `En posición invertida, la Reina de Espadas advierte sobre la crueldad, la amargura o la intolerancia. Puede indicar manipulación, frialdad excesiva o la tendencia a juzgar a otros sin compasión.
    
    También puede señalar la incapacidad de conectar emocionalmente, el uso de tus palabras para herir o la necesidad de equilibrar tu intelecto con la empatía. Te invita a ser más compasivo, a usar tu sabiduría para el bien y a ablandar tu corazón sin perder tu agudeza.`,
    detalleDerecho: `La Reina de Espadas en posición normal te insta a abrazar tu intelecto y tu honestidad. Sé objetiva en tus juicios y comunica con claridad. Tu sabiduría y tu independencia son tus mayores fortalezas.`,
    detalleInvertido: `Cuando la Reina de Espadas aparece invertida, te pide que examines si tu objetividad se ha vuelto crueldad o si estás manipulando con tus palabras. Busca el equilibrio entre la mente y el corazón.`,
    meditacionReflexion: {
      preguntas: [
        "¿Estoy siendo objetivo y honesto en mis pensamientos y palabras?",
        "¿Cómo puedo usar mi intelecto para mi beneficio y el de otros?",
        "¿Estoy protegiendo mis límites con claridad y sin culpa?",
        "¿Qué me impide ser más compasivo sin perder mi agudeza?",
        "¿Estoy juzgando a los demás con demasiada frialdad?"
      ]
    }
  },
  {
    id: "rey-de-espadas",
    nombre: "Rey de Espadas",
    arcano: "Menor",
    numero: 14,
    palo: "Espadas",
    elemento: "Aire",
    planeta: "Saturno",
    signoAstrologico: "Géminis/Libra/Acuario",
    numerologia: "14 (Autoridad, intelecto, justicia, liderazgo mental)",    palabrasClaveDerechas: ["Autoridad", "intelecto", "justicia", "liderazgo mental", "razón", "objetividad", "disciplina", "claridad"],
    palabrasClaveInvertidas: ["Tiranía", "crueldad", "abuso de poder", "intelecto frío", "prejuicio", "rigidez mental", "falta de compasión"],
    significadoDerecho: `El Rey de Espadas representa la autoridad, el intelecto y la justicia. Esta carta simboliza el liderazgo basado en la razón, la objetividad y la capacidad de tomar decisiones difíciles con claridad y lógica. Es el arquetipo del juez, el abogado, el científico o el líder que se rige por principios.
    
    Cuando aparece el Rey de Espadas, te invita a usar tu intelecto para gobernar con justicia, a tomar decisiones imparciales y a comunicar tus ideas con autoridad. Es un momento propicio para el liderazgo, para la resolución de conflictos complejos y para establecer reglas claras y justas.`,
    significadoInvertido: `En posición invertida, el Rey de Espadas advierte sobre la tiranía, la crueldad o el abuso de poder. Puede indicar que estás siendo demasiado frío e impersonal, que estás emitiendo juicios injustos o que estás aplicando reglas sin compasión.
    
    También puede señalar la rigidez mental, la incapacidad de ver otros puntos de vista o la necesidad de equilibrar tu intelecto con la sabiduría del corazón. Te invita a ser más flexible, a escuchar a los demás y a usar tu autoridad para el bien común.`,
    detalleDerecho: `El Rey de Espadas en posición normal te anima a liderar con razón y justicia. Tu intelecto y tu objetividad son tus mayores fortalezas. Toma decisiones claras y establece límites justos.`,
    detalleInvertido: `Cuando el Rey de Espadas aparece invertido, te pide que examines si tu autoridad se ha vuelto tiránica o si estás usando tu intelecto para manipular. Busca la compasión y la flexibilidad.`,
    meditacionReflexion: {
      preguntas: [
        "¿Cómo puedo ejercer mi autoridad con justicia y razón?",
        "¿Estoy usando mi intelecto para el bien común o para mis propios intereses?",
        "¿Qué decisiones difíciles necesito tomar con objetividad?",
        "¿Estoy siendo demasiado frío o impersonal en mi liderazgo?",
        "¿Cómo puedo equilibrar la razón con la compasión?"
      ]
    }
  },
  // Palo de Copas
  {
    id: "as-de-copas",
    nombre: "As de Copas",
    arcano: "Menor",
    numero: 1,
    palo: "Copas",
    elemento: "Agua",
    planeta: "Neptuno",
    signoAstrologico: "Cáncer/Escorpio/Piscis",
    numerologia: "1 (Comienzo, amor, emoción, potencial)",    palabrasClaveDerechas: ["Nuevo amor", "emociones", "conexión espiritual", "alegría", "compasión", "oportunidad emocional", "intuición", "creatividad"],
    palabrasClaveInvertidas: ["Emociones reprimidas", "amor no correspondido", "corazón roto", "falta de creatividad", "bloqueo emocional", "dolor", "desconexión"],
    significadoDerecho: `El As de Copas representa el inicio de un nuevo amor, una conexión emocional profunda o una oportunidad para la alegría y la compasión. Esta carta simboliza el desbordamiento de sentimientos, la creatividad y la apertura del corazón. Es un llamado a abrazar tus emociones y a sumergirte en experiencias significativas.
    
    Cuando aparece el As de Copas, te invita a abrir tu corazón a nuevas relaciones, a expresar tus sentimientos y a explorar tu lado más intuitivo. Es un momento propicio para el romance, para el perdón, para el despertar espiritual o para iniciar proyectos que nacen de la pasión y la inspiración.`,
    significadoInvertido: `En posición invertida, el As de Copas advierte sobre emociones reprimidas, amor no correspondido o un corazón roto. Puede indicar que te sientes desconectado, que estás evitando tus sentimientos o que estás experimentando dolor emocional.
    
    También puede señalar un bloqueo creativo, la falta de compasión o la necesidad de sanar heridas emocionales. Te invita a procesar tus sentimientos, a buscar el apoyo necesario y a liberar las emociones que te impiden fluir.`,
    detalleDerecho: `El As de Copas en posición normal es un regalo de nuevas emociones y conexiones. Abre tu corazón al amor y a la alegría. Es el momento de sentir profundamente y de dejar que tus emociones fluyan.`,
    detalleInvertido: `Cuando el As de Copas aparece invertido, te pide que examines tus emociones reprimidas. Es el momento de sanar el corazón y de permitir que las lágrimas fluyan para liberar el dolor.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué nuevas emociones o conexiones estoy experimentando?",
        "¿Estoy abriendo mi corazón al amor y la compasión?",
        "¿Estoy permitiendo que mis sentimientos fluyan libremente?",
        "¿Qué me impide expresar mis emociones auténticamente?",
        "¿Necesito sanar alguna herida emocional para avanzar?"
      ]
    }
  },
  {
    id: "dos-de-copas",
    nombre: "Dos de Copas",
    arcano: "Menor",
    numero: 2,
    palo: "Copas",
    elemento: "Agua",
    planeta: "Venus",
    signoAstrologico: "Cáncer",
    numerologia: "2 (Unión, amor, asociación, conexión)",    palabrasClaveDerechas: ["Unión", "amor", "asociación", "conexión", "relación", "armonía", "matrimonio", "amistad"],
    palabrasClaveInvertidas: ["Desequilibrio", "conflicto", "ruptura", "desconexión", "amor no correspondido", "desconfianza", "separación"],
    significadoDerecho: `El Dos de Copas representa la unión, el amor y la asociación armoniosa. Esta carta simboliza una conexión profunda y recíproca, ya sea en una relación romántica, una amistad sólida o una colaboración exitosa. Es el arquetipo del alma gemela o del encuentro significativo.
    
    Cuando aparece el Dos de Copas, te invita a celebrar la conexión con otros, a nutrir tus relaciones y a buscar la armonía en tus interacciones. Es un momento propicio para el inicio de una relación, para compromisos o para la consolidación de lazos importantes.`,
    significadoInvertido: `En posición invertida, el Dos de Copas advierte sobre el desequilibrio, el conflicto o la ruptura en las relaciones. Puede indicar amor no correspondido, desconfianza o la necesidad de reevaluar una asociación.
    
    También puede señalar una desconexión emocional, la incapacidad de comprometerse o la necesidad de sanar viejas heridas en tus relaciones. Te invita a comunicar tus necesidades, a buscar la honestidad y a decidir si la relación vale la pena el esfuerzo.`,
    detalleDerecho: `El Dos de Copas en posición normal es la carta de la unión y la conexión. Celebra el amor, la amistad y las asociaciones significativas. Es el momento de nutrir tus relaciones más importantes.`,
    detalleInvertido: `Cuando el Dos de Copas aparece invertido, te pide que examines los conflictos o desequilibrios en tus relaciones. Es el momento de la comunicación honesta o de considerar una separación.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué relaciones en mi vida están basadas en el amor y la armonía?",
        "¿Estoy cultivando conexiones profundas y recíprocas?",
        "¿Qué puedo hacer para mejorar la comunicación en mis relaciones?",
        "¿Estoy experimentando desequilibrios o conflictos en mis uniones?",
        "¿Estoy abierto a nuevas asociaciones o a profundizar las existentes?"
      ]
    }
  },
  {
    id: "tres-de-copas",
    nombre: "Tres de Copas",
    arcano: "Menor",
    numero: 3,
    palo: "Copas",
    elemento: "Agua",
    planeta: "Mercurio",
    signoAstrologico: "Cáncer",
    numerologia: "3 (Celebración, amistad, comunidad, alegría)",    palabrasClaveDerechas: ["Celebración", "amistad", "comunidad", "alegría", "reunión", "fiesta", "éxito compartido", "apoyo social"],
    palabrasClaveInvertidas: ["Excesos", "chismorreo", "aislamiento", "conflictos sociales", "desconexión", "celebración forzada", "desconfianza"],
    significadoDerecho: `El Tres de Copas representa la celebración, la amistad y la alegría en comunidad. Esta carta simboliza los momentos de felicidad compartida, las reuniones festivas y el apoyo de tus seres queridos. Es un recordatorio de la importancia de la conexión social y de disfrutar los éxitos con aquellos que te rodean.
    
    Cuando aparece el Tres de Copas, te invita a celebrar tus logros, a reunirte con amigos y familiares y a disfrutar de la vida. Es un momento propicio para bodas, cumpleaños, fiestas o cualquier evento que fortalezca los lazos y te brinde un sentido de pertenencia.`,
    significadoInvertido: `En posición invertida, el Tres de Copas advierte sobre los excesos, el chismorreo o el aislamiento. Puede indicar conflictos sociales, la desconexión con tu comunidad o la sensación de que las celebraciones son forzadas.
    
    También puede señalar desconfianza, la incapacidad de disfrutar de la compañía de otros o la necesidad de reevaluar tus círculos sociales. Te invita a ser más consciente de tus interacciones, a buscar amistades auténticas y a evitar los ambientes tóxicos.`,
    detalleDerecho: `El Tres de Copas en posición normal es una invitación a la alegría y la celebración. Rodéate de tus amigos y seres queridos, comparte tus éxitos y disfruta de la vida en comunidad.`,
    detalleInvertido: `Cuando el Tres de Copas aparece invertido, te pide que examines los excesos o los conflictos en tus círculos sociales. Busca la autenticidad y la conexión verdadera, y evita el chismorreo.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué éxitos tengo para celebrar con mis amigos y comunidad?",
        "¿Estoy conectando con mis seres queridos y buscando su apoyo?",
        "¿Estoy participando en celebraciones que me traen alegría genuina?",
        "¿Qué me impide disfrutar plenamente de la compañía de otros?",
        "¿Necesito reevaluar mis amistades o mis círculos sociales?"
      ]
    }
  },
  {
    id: "cuatro-de-copas",
    nombre: "Cuatro de Copas",
    arcano: "Menor",
    numero: 4,
    palo: "Copas",
    elemento: "Agua",
    planeta: "Luna",
    signoAstrologico: "Cáncer",
    numerologia: "4 (Apatía, aburrimiento, reevaluación, oportunidades perdidas)",    palabrasClaveDerechas: ["Apatía", "aburrimiento", "desinterés", "reevaluación", "oportunidades perdidas", "complacencia", "melancolía", "descontento"],
    palabrasClaveInvertidas: ["Nuevo interés", "motivación", "aceptación de la oferta", "entusiasmo", "despertar emocional", "aprovechar oportunidades"],
    significadoDerecho: `El Cuatro de Copas representa la apatía, el aburrimiento y el desinterés ante las oportunidades que se presentan. Esta carta simboliza un período de reevaluación, donde te sientes insatisfecho con lo que tienes y no ves el valor en las nuevas ofertas. Es un momento de melancolía y complacencia.
    
    Cuando aparece el Cuatro de Copas, te invita a examinar la causa de tu descontento, a abrirte a nuevas posibilidades y a no ignorar las bendiciones que te rodean. Es un momento propicio para la introspección, para la gratitud y para romper con la rutina que te mantiene estancado.`,
    significadoInvertido: `En posición invertida, el Cuatro de Copas indica un nuevo interés, la motivación o la aceptación de una oferta. Representa el momento en que sales de tu apatía, te abres a nuevas experiencias y aprovechas las oportunidades emocionales.
    
    También puede señalar el despertar emocional, la superación del aburrimiento o la capacidad de ver el valor en lo que antes ignorabas. Te invita a ser más proactivo, a salir de tu zona de confort y a abrazar la vida con renovado entusiasmo.`,
    detalleDerecho: `El Cuatro de Copas en posición normal te muestra una apatía o aburrimiento que te impide ver las oportunidades. Examina tu descontento y abre los ojos a lo que el universo te ofrece.`,
    detalleInvertido: `Cuando el Cuatro de Copas aparece invertido, es una señal de que estás despertando. El desinterés se disipa y nuevas oportunidades se presentan. Abraza este nuevo entusiasmo.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué me está causando apatía o aburrimiento en este momento?",
        "¿Estoy ignorando oportunidades emocionales o nuevas ofertas?",
        "¿Cómo puedo reevaluar mi situación para encontrar mayor satisfacción?",
        "¿Qué necesito hacer para salir de mi zona de confort y abrirme a la vida?",
        "¿Estoy expresando gratitud por lo que ya tengo?"
      ]
    }
  },
  {
    id: "cinco-de-copas",
    nombre: "Cinco de Copas",
    arcano: "Menor",
    numero: 5,
    palo: "Copas",
    elemento: "Agua",
    planeta: "Marte",
    signoAstrologico: "Escorpio",
    numerologia: "5 (Pérdida, arrepentimiento, duelo, oportunidades no vistas)",    palabrasClaveDerechas: ["Pérdida", "arrepentimiento", "duelo", "tristeza", "desilusión", "fracaso", "concentración en lo negativo", "oportunidades no vistas"],
    palabrasClaveInvertidas: ["Aceptación", "recuperación", "sanación", "liberación del arrepentimiento", "nueva perspectiva", "oportunidades ocultas"],
    significadoDerecho: `El Cinco de Copas representa la pérdida, el arrepentimiento y el duelo. Esta carta simboliza un momento de tristeza profunda, desilusión o el lamento por lo que se ha perdido. Te enfocas en las copas derramadas, sin ver las que aún permanecen en pie.
    
    Cuando aparece el Cinco de Copas, te invita a permitirte sentir el dolor de la pérdida, a procesar tu duelo y a reconocer tus sentimientos. Es un momento propicio para el luto, para la introspección y para liberarte del arrepentimiento. Sin embargo, también te recuerda que, incluso en la pérdida, siempre hay algo que queda y nuevas oportunidades para el futuro.`,
    significadoInvertido: `En posición invertida, el Cinco de Copas indica la aceptación, la recuperación o la sanación después de una pérdida. Representa el momento en que empiezas a ver las oportunidades restantes, a liberar el arrepentimiento o a encontrar una nueva perspectiva.
    
    También puede señalar la liberación del dolor, la capacidad de perdonar o la fuerza para seguir adelante después de un fracaso. Te invita a levantar la mirada, a apreciar lo que aún tienes y a abrirte a nuevas posibilidades emocionales.`,
    detalleDerecho: `El Cinco de Copas en posición normal te sumerge en el arrepentimiento y la pérdida. Permítete sentir el duelo, pero no te quedes ciego a las copas que aún permanecen en pie. Hay esperanza.`,
    detalleInvertido: `Cuando el Cinco de Copas aparece invertido, es una señal de que estás sanando y aceptando. Estás levantando la mirada y viendo las oportunidades que antes pasabas por alto.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué pérdida o situación me está causando arrepentimiento?",
        "¿Estoy permitiéndome sentir y procesar mi duelo?",
        "¿Estoy enfocado en lo negativo y no veo las oportunidades restantes?",
        "¿Qué puedo hacer para sanar y liberar el arrepentimiento?",
        "¿Estoy listo para encontrar una nueva perspectiva y seguir adelante?"
      ]
    }
  },
  {
    id: "seis-de-copas",
    nombre: "Seis de Copas",
    arcano: "Menor",
    numero: 6,
    palo: "Copas",
    elemento: "Agua",
    planeta: "Sol",
    signoAstrologico: "Piscis",
    numerologia: "6 (Nostalgia, pasado, inocencia, regalos)",    palabrasClaveDerechas: ["Nostalgia", "pasado", "inocencia", "recuerdos", "regalos", "infancia", "perdón", "generosidad"],
    palabrasClaveInvertidas: ["Vivir en el pasado", "melancolía excesiva", "desconexión del pasado", "abuso del pasado", "falta de perdón", "crecimiento lento"],
    significadoDerecho: `El Seis de Copas representa la nostalgia, los recuerdos del pasado y la inocencia. Esta carta simboliza la conexión con la infancia, la aparición de viejos amigos o amantes, y la alegría de recibir regalos o actos de generosidad. Es un momento de mirar hacia atrás con cariño.
    
    Cuando aparece el Seis de Copas, te invita a reconectar con tus raíces, a perdonar viejas heridas y a revivir recuerdos felices. Es un momento propicio para el reencuentro, para la gratitud por las bendiciones pasadas y para la comprensión de cómo el pasado ha moldeado tu presente.`,
    significadoInvertido: `En posición invertida, el Seis de Copas advierte sobre vivir demasiado en el pasado, la melancolía excesiva o la incapacidad de dejar ir. Puede indicar que te aferras a viejos rencores, que te sientes atrapado en la nostalgia o que el pasado te impide avanzar.
    
    También puede señalar la desconexión del pasado, el abuso de recuerdos o la necesidad de sanar viejas heridas. Te invita a encontrar un equilibrio entre el pasado y el presente, a perdonar y a liberarte de cualquier carga que te impida vivir plenamente.`,
    detalleDerecho: `El Seis de Copas en posición normal es un viaje a la nostalgia y los recuerdos felices. Conéctate con tu infancia y con el perdón. Es un regalo del pasado que ilumina tu presente.`,
    detalleInvertido: `Cuando el Seis de Copas aparece invertido, te pide que examines si estás demasiado anclado en el pasado o si los recuerdos te impiden avanzar. Es el momento de perdonar y de vivir en el presente.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué recuerdos del pasado me están visitando en este momento?",
        "¿Estoy abrazando la nostalgia de manera saludable?",
        "¿Necesito perdonar a alguien de mi pasado (o a mí mismo)?",
        "¿Estoy demasiado aferrado al pasado o puedo vivir en el presente?",
        "¿Qué regalos o bendiciones recibí de mi pasado?"
      ]
    }
  },
  {
    id: "siete-de-copas",
    nombre: "Siete de Copas",
    arcano: "Menor",
    numero: 7,
    palo: "Copas",
    elemento: "Agua",
    planeta: "Venus",
    signoAstrologico: "Piscis",
    numerologia: "7 (Elecciones, ilusiones, fantasía, engaño)",    palabrasClaveDerechas: ["Elecciones", "ilusiones", "fantasía", "engaño", "deseos", "sueños", "confusión", "distracciones"],
    palabrasClaveInvertidas: ["Claridad", "realidad", "toma de decisiones", "oportunidad real", "superación de la confusión", "despertar", "objetividad"],
    significadoDerecho: `El Siete de Copas representa las muchas opciones, a menudo ilusorias o engañosas, que se presentan en tu vida. Esta carta simboliza la fantasía, los sueños y la posibilidad de perderse en un mundo de deseos sin concretar. Es un momento de confusión, donde es difícil discernir entre la realidad y la ilusión.
    
    Cuando aparece el Siete de Copas, te invita a ser cauteloso con tus elecciones, a distinguir entre lo real y lo idealizado y a no dejarte llevar por las distracciones. Es un momento propicio para la meditación, para la clarificación de tus verdaderos deseos y para elegir un camino con discernimiento.`,
    significadoInvertido: `En posición invertida, el Siete de Copas indica la claridad, la realidad o la toma de decisiones. Representa el momento en que sales de la confusión, ves las cosas con mayor objetividad y eliges una opción real y concreta.
    
    También puede señalar el despertar, la superación de las ilusiones o la capacidad de enfocarte en lo que realmente importa. Te invita a ser más práctico, a aterrizar tus sueños y a tomar acciones concretas en lugar de solo fantasear.`,
    detalleDerecho: `El Siete de Copas en posición normal te presenta un sinfín de opciones, algunas reales, otras ilusiones. Discierne con sabiduría y no te dejes llevar por la fantasía.`,
    detalleInvertido: `Cuando el Siete de Copas aparece invertido, te trae la claridad que necesitabas. Estás saliendo de la confusión y listo para tomar decisiones basadas en la realidad.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué opciones o deseos me están confundiendo en este momento?",
        "¿Estoy viviendo en la fantasía o en la realidad?",
        "¿Cómo puedo discernir entre lo que es real y lo que es una ilusión?",
        "¿Qué distracciones me impiden tomar una decisión clara?",
        "¿Qué paso concreto puedo dar para manifestar mis verdaderos deseos?"
      ]
    }
  },
  {
    id: "ocho-de-copas",
    nombre: "Ocho de Copas",
    arcano: "Menor",
    numero: 8,
    palo: "Copas",
    elemento: "Agua",
    planeta: "Saturno",
    signoAstrologico: "Piscis",
    numerologia: "8 (Abandono, búsqueda, viaje, desilusión)",    palabrasClaveDerechas: ["Abandono", "búsqueda", "viaje", "desilusión", "insatisfacción", "dejar atrás", "nuevo camino", "retiro"],
    palabrasClaveInvertidas: ["Regreso", "evasión", "apego", "estancamiento", "miedo al cambio", "reafirmación", "soluciones"],
    significadoDerecho: `El Ocho de Copas representa el abandono, la búsqueda y el viaje lejos de una situación que ya no te satisface. Esta carta simboliza la desilusión, la necesidad de dejar atrás lo que fue y de emprender un nuevo camino en busca de algo más significativo. Es un momento de retiro, de introspección y de búsqueda espiritual.
    
    Cuando aparece el Ocho de Copas, te invita a escuchar tu intuición, a reconocer lo que ya no te llena y a tener el coraje de alejarte. Es un momento propicio para los viajes, para el cambio de carrera o para cualquier decisión que implique dejar una situación estable pero insatisfactoria.`,
    significadoInvertido: `En posición invertida, el Ocho de Copas advierte sobre el regreso a una situación pasada, la evasión o el apego. Puede indicar miedo al cambio, estancamiento o la incapacidad de soltar lo que ya no te sirve.
    
    También puede señalar la reafirmación de una decisión, la búsqueda de soluciones dentro de una situación existente o la necesidad de enfrentar lo que has estado evitando. Te invita a ser honesto contigo mismo, a no posponer las decisiones difíciles y a tener el valor de buscar tu verdadera felicidad.`,
    detalleDerecho: `El Ocho de Copas en posición normal es un llamado a la búsqueda de algo más significativo. Estás dejando atrás una situación que ya no te llena. Confía en tu intuición y emprende este nuevo camino.`,
    detalleInvertido: `Cuando el Ocho de Copas aparece invertido, te pide que examines tu resistencia al cambio o tu miedo a abandonar lo familiar. No vuelvas a lo que te insatisface; sigue adelante.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué en mi vida ya no me satisface y necesito dejar atrás?",
        "¿Estoy escuchando mi intuición para buscar un nuevo camino?",
        "¿Qué me impide abandonar una situación estable pero insatisfactoria?",
        "¿Estoy posponiendo decisiones difíciles por miedo al cambio?",
        "¿Qué estoy buscando en este viaje de introspección?"
      ]
    }
  },
  {
    id: "nueve-de-copas",
    nombre: "Nueve de Copas",
    arcano: "Menor",
    numero: 9,
    palo: "Copas",
    elemento: "Agua",
    planeta: "Júpiter",
    signoAstrologico: "Piscis",
    numerologia: "9 (Satisfacción, deseos cumplidos, disfrute, felicidad)",    palabrasClaveDerechas: ["Satisfacción", "deseos cumplidos", "felicidad", "disfrute", "abundancia emocional", "éxito", "autocomplacencia", "placer"],
    palabrasClaveInvertidas: ["Insatisfacción", "deseos no cumplidos", "excesos", "vacío", "materialismo", "egoísmo", "problemas de salud"],
    significadoDerecho: `El Nueve de Copas representa la satisfacción, los deseos cumplidos y la felicidad en el ámbito emocional. Esta carta simboliza la abundancia, el disfrute de la vida y la realización de tus anhelos. Es un momento de complacencia, donde te sientes feliz y afortunado por lo que tienes.
    
    Cuando aparece el Nueve de Copas, te invita a celebrar tus logros, a disfrutar de los placeres de la vida y a sentirte agradecido por tus bendiciones. Es un momento propicio para el cumplimiento de un deseo, para el éxito personal y para disfrutar de la comodidad y el bienestar.`,
    significadoInvertido: `En posición invertida, el Nueve de Copas advierte sobre la insatisfacción, los deseos no cumplidos o los excesos. Puede indicar un vacío a pesar de la abundancia, la tendencia al materialismo o el egoísmo.
    
    También puede señalar problemas de salud relacionados con el hedonismo, la incapacidad de encontrar la verdadera felicidad o la necesidad de reevaluar tus prioridades. Te invita a buscar la satisfacción más allá de lo material, a ser más generoso y a encontrar un equilibrio en tus placeres.`,
    detalleDerecho: `El Nueve de Copas en posición normal es la carta de los deseos cumplidos. Has alcanzado la satisfacción y la felicidad. Disfruta de tus logros y de la abundancia emocional.`,
    detalleInvertido: `Cuando el Nueve de Copas aparece invertido, te pide que examines tu insatisfacción o tus excesos. La verdadera felicidad va más allá de lo material. Busca un propósito más profundo.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué deseos se han cumplido en mi vida recientemente?",
        "¿Estoy disfrutando plenamente de mi felicidad y satisfacción?",
        "¿Estoy buscando la satisfacción en los lugares correctos?",
        "¿Qué me impide sentirme verdaderamente pleno y abundante?",
        "¿Estoy cayendo en excesos o en la autocomplacencia?"
      ]
    }
  },
  {
    id: "diez-de-copas",
    nombre: "Diez de Copas",
    arcano: "Menor",
    numero: 10,
    palo: "Copas",
    elemento: "Agua",
    planeta: "Júpiter",
    signoAstrologico: "Piscis",
    numerologia: "10 (Felicidad, hogar, familia, alegría duradera)",    palabrasClaveDerechas: ["Felicidad", "hogar", "familia", "alegría duradera", "armonía", "matrimonio", "comunidad", "paz emocional"],
    palabrasClaveInvertidas: ["Conflictos familiares", "infelicidad", "ruptura de hogar", "desconexión", "falta de armonía", "divorcio", "tristeza"],
    significadoDerecho: `El Diez de Copas representa la felicidad, la armonía en el hogar y la alegría duradera en el ámbito familiar. Esta carta simboliza la culminación emocional, la realización de los sueños familiares y la sensación de paz y plenitud. Es un momento de bendición y de disfrutar de las relaciones más importantes en tu vida.
    
    Cuando aparece el Diez de Copas, te invita a celebrar la unión familiar, a cultivar la armonía en tu hogar y a apreciar la felicidad que te rodea. Es un momento propicio para el matrimonio, el nacimiento de un hijo, la reunión familiar o cualquier evento que fortalezca los lazos emocionales y te brinde un sentido de pertenencia y alegría.`,
    significadoInvertido: `En posición invertida, el Diez de Copas advierte sobre los conflictos familiares, la infelicidad o la ruptura del hogar. Puede indicar desarmonía, desconexión emocional o la necesidad de sanar relaciones en tu familia.
    
    También puede señalar el divorcio, la tristeza en el hogar o la incapacidad de encontrar la paz interior. Te invita a abordar los problemas con honestidad, a buscar la reconciliación y a recordar que la verdadera felicidad comienza desde dentro.`,
    detalleDerecho: `El Diez de Copas en posición normal es el pináculo de la felicidad familiar y la armonía en el hogar. Has encontrado la plenitud emocional. Disfruta de este momento de paz y alegría duradera.`,
    detalleInvertido: `Cuando el Diez de Copas aparece invertido, te pide que examines las tensiones o la infelicidad en tu hogar. Es el momento de buscar la sanación y la reconciliación para restaurar la armonía.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué me trae la mayor felicidad y armonía en mi hogar y familia?",
        "¿Estoy cultivando relaciones que me brindan paz emocional?",
        "¿Qué sueños o anhelos familiares se han cumplido?",
        "¿Qué me impide sentir la plenitud en mi vida emocional?",
        "¿Necesito abordar algún conflicto familiar para restaurar la armonía?"
      ]
    }
  },
  {
    id: "sota-de-copas",
    nombre: "Sota de Copas",
    arcano: "Menor",
    numero: 11,
    palo: "Copas",
    elemento: "Agua",
    planeta: "Neptuno",
    signoAstrologico: "Cáncer/Escorpio/Piscis",
    numerologia: "11 (Mensajes, creatividad, intuición, sensibilidad)",    palabrasClaveDerechas: ["Mensajes emocionales", "creatividad", "intuición", "sensibilidad", "romance", "sueños", "propuestas", "asombro"],
    palabrasClaveInvertidas: ["Emociones bloqueadas", "inmadurez emocional", "manipulación", "falsas promesas", "decepción", "falta de inspiración"],
    significadoDerecho: `La Sota de Copas representa la llegada de mensajes emocionales, la creatividad y la intuición. Esta carta simboliza la sensibilidad, el asombro y la apertura a nuevas experiencias emocionales. Es un mensajero de propuestas románticas, oportunidades creativas o el despertar de tu lado intuitivo.
    
    Cuando aparece la Sota de Copas, te invita a escuchar tu corazón, a seguir tus sueños y a expresar tu creatividad. Es un momento propicio para el romance, para el inicio de un proyecto artístico o para explorar tu mundo interior a través de la intuición y los sueños.`,
    significadoInvertido: `En posición invertida, la Sota de Copas advierte sobre emociones bloqueadas, inmadurez emocional o manipulación. Puede indicar falsas promesas, decepción en el amor o la falta de inspiración.
    
    También puede señalar la incapacidad de confiar en tu intuición, la evitación de tus sentimientos o la necesidad de crecer emocionalmente. Te invita a ser más honesto contigo mismo, a liberar tus emociones y a buscar la autenticidad en tus relaciones.`,
    detalleDerecho: `La Sota de Copas en posición normal es un mensajero de nuevas emociones y oportunidades creativas. Escucha tu intuición y abre tu corazón al romance y la inspiración.`,
    detalleInvertido: `Cuando la Sota de Copas aparece invertida, te pide que examines tus bloqueos emocionales o la inmadurez en tus relaciones. Sé honesto con tus sentimientos y busca la autenticidad.`,
    meditacionReflexion: {
      preguntas: [
        "¿Qué mensajes emocionales estoy recibiendo en este momento?",
        "¿Estoy abierto a nuevas experiencias románticas o creativas?",
        "¿Estoy escuchando mi intuición y mis sueños?",
        "¿Qué me impide expresar mi sensibilidad y creatividad?",
        "¿Necesito liberar alguna emoción bloqueada para avanzar?"
      ]
    }
  },
  {
    id: "caballero-de-copas",
    nombre: "Caballero de Copas",
    arcano: "Menor",
    numero: 12,
    palo: "Copas",
    elemento: "Agua",
    planeta: "Piscis",
    signoAstrologico: "Cáncer/Escorpio/Piscis",
    numerologia: "12 (Romance, idealismo, propuestas, encanto)",    palabrasClaveDerechas: ["Romance", "idealismo", "propuestas", "encanto", "invitación", "caballerosidad", "sensibilidad", "seducción"],
    palabrasClaveInvertidas: ["Desilusión", "engaño", "manipulación", "irrealismo", "propuestas falsas", "desequilibrio emocional", "celos"],
    significadoDerecho: `El Caballero de Copas representa el romance, el idealismo y la llegada de propuestas emocionales o invitaciones. Esta carta simboliza el encanto, la sensibilidad y la disposición a expresar tus sentimientos de manera caballerosa. Es un arquetipo de la propuesta, del enamorado o del artista soñador.
    
    Cuando aparece el Caballero de Copas, te invita a abrirte al amor, a perseguir tus ideales y a expresar tus emociones con gracia. Es un momento propicio para el romance, para recibir una propuesta importante o para embarcarte en un viaje de autodescubrimiento emocional.`,
    significadoInvertido: `En posición invertida, el Caballero de Copas advierte sobre la desilusión, el engaño o la manipulación. Puede indicar propuestas falsas, irrealismo en el amor o la tendencia a ser demasiado emocional o celoso.
    
    También puede señalar el desequilibrio emocional, la incapacidad de comprometerse o la necesidad de ser más realista en tus expectativas. Te invita a discernir las verdaderas intenciones, a no dejarte llevar por las ilusiones y a buscar una conexión más auténtica.`,
    detalleDerecho: `El Caballero de Copas en posición normal te trae romance e idealismo. Es un mensajero de propuestas emocionales, invitaciones a la conexión y la oportunidad de vivir un amor soñado.`,
    detalleInvertido: `Cuando el Caballero de Copas aparece invertido, te pide que examines las desilusiones o las falsas promesas. No te dejes engañar por el idealismo; busca la autenticidad y la realidad en tus relaciones.`,
    meditacionReflexion: {
      preguntas: [
        "¿Estoy abierto a nuevas experiencias románticas o emocionales?",
        "¿Qué propuestas o invitaciones estoy recibiendo?",
        "¿Estoy siendo demasiado idealista o realista en mis relaciones?",
        "¿Cómo puedo expresar mis emociones con gracia y autenticidad?",
        "¿Qué me impide comprometerme o buscar una conexión más profunda?"
      ]
    }
  },
  {
    id: "reina-de-copas",
    nombre: "Reina de Copas",
    arcano: "Menor",
    numero: 13,
    palo: "Copas",
    elemento: "Agua",
    planeta: "Neptuno",
    signoAstrologico: "Cáncer",
    numerologia: "13 (Compasión, intuición, sensibilidad, sanación)",    palabrasClaveDerechas: ["Compasión", "intuición", "sensibilidad", "sanación", "cuidado", "empatía", "apoyo emocional", "psíquica"],
    palabrasClaveInvertidas: ["Dependencia emocional", "manipulación", "inseguridad", "emociones abrumadoras", "falta de empatía", "crueldad emocional"],
    significadoDerecho: `La Reina de Copas representa la compasión, la intuición y la sanación emocional. Esta carta simboliza la empatía, el cuidado y la capacidad de conectar profundamente con las emociones de otros. Es el arquetipo de la consejera, la sanadora o la figura materna que ofrece apoyo incondicional.
    
    Cuando aparece la Reina de Copas, te invita a escuchar tu intuición, a ofrecer apoyo emocional a quienes lo necesitan y a cultivar la compasión por ti mismo y por los demás. Es un momento propicio para la terapia, para la meditación, para el trabajo emocional profundo y para nutrir tus relaciones con amor.`,
    significadoInvertido: `En posición invertida, la Reina de Copas advierte sobre la dependencia emocional, la manipulación o la inseguridad. Puede indicar emociones abrumadoras, falta de empatía o la tendencia a ser demasiado influenciable.
    
    También puede señalar crueldad emocional, la incapacidad de establecer límites o la necesidad de sanar tus propias heridas antes de poder ayudar a otros. Te invita a fortalecer tu independencia emocional, a establecer límites saludables y a canalizar tu empatía de manera constructiva.`,
    detalleDerecho: `La Reina de Copas en posición normal te anima a abrazar tu compasión e intuición. Eres una fuente de sanación y apoyo emocional. Conecta con tus sentimientos y con los de los demás.`,
    detalleInvertido: `Cuando la Reina de Copas aparece invertida, te pide que examines tu dependencia emocional o si te sientes abrumado por las emociones. Es el momento de establecer límites saludables y de nutrirte a ti mismo.`,
    meditacionReflexion: {
      preguntas: [
        "¿Estoy escuchando mi intuición y confiando en mis sentimientos?",
        "¿Cómo puedo ofrecer compasión y apoyo emocional a otros?",
        "¿Estoy cuidando de mis propias necesidades emocionales?",
        "¿Qué me impide establecer límites saludables en mis relaciones?",
        "¿Necesito sanar alguna herida emocional para ser más empático?"
      ]
    }
  },
  {
    id: "rey-de-copas",
    nombre: "Rey de Copas",
    arcano: "Menor",
    numero: 14,
    palo: "Copas",
    elemento: "Agua",
    planeta: "Neptuno",
    signoAstrologico: "Cáncer/Escorpio/Piscis",
    numerologia: "14 (Liderazgo emocional, sabiduría, compasión, equilibrio)",    palabrasClaveDerechas: ["Liderazgo emocional", "sabiduría", "compasión", "equilibrio", "control emocional", "asesoramiento", "tolerancia", "calma"],
    palabrasClaveInvertidas: ["Manipulación", "inestabilidad emocional", "adicción", "engaño", "crueldad", "falta de control", "egoísmo"],
    significadoDerecho: `El Rey de Copas representa el liderazgo emocional, la sabiduría y la compasión. Esta carta simboliza el equilibrio, el control emocional y la capacidad de ofrecer asesoramiento con empatía. Es el arquetipo del terapeuta, el consejero o el líder que guía con el corazón.
    
    Cuando aparece el Rey de Copas, te invita a asumir tu rol de líder emocional, a gestionar tus sentimientos con madurez y a ofrecer apoyo incondicional a los demás. Es un momento propicio para la resolución de conflictos, para la mediación y para cualquier situación que requiera sabiduría emocional y comprensión.`,
    significadoInvertido: `En posición invertida, el Rey de Copas advierte sobre la manipulación, la inestabilidad emocional o la adicción. Puede indicar falta de control, engaño o la tendencia a ser cruel con tus emociones.
    
    También puede señalar la incapacidad de manejar la adversidad, el egoísmo o la necesidad de buscar ayuda para gestionar tus sentimientos. Te invita a ser más honesto contigo mismo, a buscar la sanación y a encontrar un equilibrio más saludable en tu vida emocional.`,
    detalleDerecho: `El Rey de Copas en posición normal te impulsa a liderar con sabiduría y compasión. Tienes la capacidad de navegar las emociones con equilibrio y de ofrecer un apoyo incondicional a los demás.`,
    detalleInvertido: `Cuando el Rey de Copas aparece invertido, te pide que examines tu inestabilidad emocional o si estás cayendo en la manipulación. Busca la sanación y el autocontrol para encontrar la paz.`,
    meditacionReflexion: {
      preguntas: [
        "¿Cómo puedo ejercer mi liderazgo emocional con sabiduría y compasión?",
        "¿Estoy gestionando mis propias emociones con madurez?",
        "¿Qué puedo hacer para ofrecer apoyo y asesoramiento con empatía?",
        "¿Estoy cayendo en la manipulación o la inestabilidad emocional?",
        "¿Qué significa para mí el verdadero equilibrio emocional?"
      ]
    }
  }
]