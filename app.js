(() => {
  "use strict";

  const scenarios = [
    {
      id: "rh-product-manager",
      type: "rh",
      title: "Présenter son parcours avec impact",
      person: "Camille Robert",
      initials: "CR",
      role: "Responsable recrutement · NovaTech",
      position: "Product Manager",
      level: "Intermédiaire",
      duration: "8 à 10 minutes",
      format: "Premier entretien RH",
      objective: "Présenter un parcours cohérent et démontrer votre motivation pour le poste.",
      context: "NovaTech développe une plateforme SaaS B2B et recherche un Product Manager capable de collaborer avec les équipes produit, tech et commerciales.",
      skills: ["Motivation", "Clarté", "Adéquation au poste"],
      expectation: "Pourquoi ce poste vous intéresse et ce que votre parcours peut apporter à l'équipe.",
      questions: [
        "Bonjour, merci d'être avec nous aujourd'hui. Pour commencer, pouvez-vous me parler de vous et de votre parcours ?",
        "Qu'est-ce qui vous attire précisément dans ce poste de Product Manager chez NovaTech ?",
        "Parlez-moi d'une difficulté importante que vous avez rencontrée sur un projet et de la manière dont vous l'avez surmontée.",
        "Quel type d'environnement vous permet de donner le meilleur de vous-même ?",
        "Pour terminer, quelles questions aimeriez-vous me poser sur le poste ou l'entreprise ?"
      ],
      coachTips: [
        "Structurez votre réponse en trois temps : présent, expériences clés, projet recherché.",
        "Citez un élément précis de l'entreprise et reliez-le à votre parcours.",
        "Utilisez STAR : situation, tâche, actions, résultat mesurable.",
        "Donnez deux conditions concrètes plutôt qu'une réponse générale.",
        "Posez une question qui montre votre intérêt pour les enjeux réels du poste."
      ]
    },
    {
      id: "rh-sales",
      type: "rh",
      title: "Convaincre lors d'une reconversion",
      person: "Sophie Laurent",
      initials: "SL",
      role: "Talent Acquisition Partner · Elevate",
      position: "Business Developer",
      level: "Débutant",
      duration: "7 à 9 minutes",
      format: "Premier entretien RH",
      objective: "Expliquer votre reconversion et rendre vos compétences transférables évidentes.",
      context: "Elevate recrute des profils commerciaux à potentiel et valorise l'apprentissage, l'énergie et la capacité à créer une relation de confiance.",
      skills: ["Motivation", "Transférabilité", "Projection"],
      expectation: "Ce qui rend votre changement de voie crédible et la façon dont vous avez préparé ce projet.",
      questions: [
        "Bonjour. Pour commencer, qu'est-ce qui vous amène aujourd'hui vers le métier de Business Developer ?",
        "Quelles compétences de votre parcours précédent seront directement utiles dans ce nouveau métier ?",
        "Comment vous êtes-vous préparé concrètement à cette reconversion ?",
        "Parlez-moi d'une situation dans laquelle vous avez dû convaincre quelqu'un.",
        "Qu'attendez-vous de votre première année dans ce poste ?"
      ],
      coachTips: [
        "Présentez votre reconversion comme une progression, pas comme une fuite.",
        "Choisissez deux compétences et illustrez chacune par un exemple.",
        "Citez des actions déjà réalisées : formation, rencontres ou projets.",
        "Décrivez le besoin de l'autre personne avant votre argumentation.",
        "Formulez un objectif d'apprentissage et un objectif de résultat."
      ]
    },
    {
      id: "manager-product",
      type: "manager",
      title: "Démontrer son autonomie",
      person: "Thomas Meyer",
      initials: "TM",
      role: "Head of Product · OneFlow",
      position: "Product Manager Senior",
      level: "Avancé",
      duration: "10 à 12 minutes",
      format: "Entretien avec un manager",
      objective: "Démontrer votre capacité à arbitrer, influencer et obtenir des résultats.",
      context: "OneFlow réorganise son équipe produit et recherche une personne autonome, capable de prendre des décisions avec des informations incomplètes.",
      skills: ["Leadership", "Arbitrage", "Résultats"],
      expectation: "Comment vous prenez des décisions difficiles et mobilisez des parties prenantes aux intérêts différents.",
      questions: [
        "Bonjour. Quel est le produit dont vous êtes le plus fier et quel rôle exact avez-vous joué ?",
        "Racontez-moi une décision produit impopulaire que vous avez dû défendre.",
        "Comment arbitrez-vous entre une demande commerciale urgente et la vision produit ?",
        "Donnez-moi un exemple de désaccord avec une équipe technique.",
        "Que feriez-vous pendant vos trente premiers jours chez OneFlow ?"
      ],
      coachTips: [
        "Distinguez clairement votre contribution de celle de l'équipe.",
        "Expliquez vos critères de décision et le résultat obtenu.",
        "Montrez comment vous rendez les compromis visibles.",
        "Décrivez l'écoute, la décision et la relation après le désaccord.",
        "Proposez une démarche d'observation avant les premières décisions."
      ]
    },
    {
      id: "tech-frontend",
      type: "technique",
      title: "Expliquer son raisonnement technique",
      person: "Nora Diallo",
      initials: "ND",
      role: "Lead Engineer · Circuit",
      position: "Développeur Front-end",
      level: "Intermédiaire",
      duration: "10 à 12 minutes",
      format: "Entretien technique",
      objective: "Rendre votre démarche de résolution compréhensible avant de donner une solution.",
      context: "Circuit modernise une application à fort trafic et cherche une personne attentive à la qualité, à l'accessibilité et à la performance.",
      skills: ["Raisonnement", "Qualité", "Communication"],
      expectation: "Votre manière de décomposer un problème, de poser des hypothèses et de vérifier une solution.",
      questions: [
        "Bonjour. Pouvez-vous me présenter une décision technique récente dont vous êtes satisfait ?",
        "Comment diagnostiqueriez-vous une page devenue lente après une nouvelle mise en production ?",
        "Comment intégrez-vous l'accessibilité dans votre processus de développement ?",
        "Parlez-moi d'une dette technique que vous avez choisi de ne pas corriger immédiatement.",
        "Comment partagez-vous une décision technique avec une personne non spécialiste ?"
      ],
      coachTips: [
        "Présentez le contexte, les options comparées et le compromis retenu.",
        "Commencez par mesurer avant de proposer une optimisation.",
        "Citez les pratiques intégrées au quotidien, pas seulement l'audit final.",
        "Expliquez le risque, le coût et le moment prévu pour y revenir.",
        "Utilisez une conséquence métier et évitez le jargon."
      ]
    },
    {
      id: "behavior-star",
      type: "comportemental",
      title: "Structurer ses exemples avec STAR",
      person: "Élise Martin",
      initials: "EM",
      role: "People Partner · Looma",
      position: "Chef de projet",
      level: "Débutant",
      duration: "8 à 10 minutes",
      format: "Questions comportementales",
      objective: "Répondre avec des exemples précis, structurés et centrés sur vos actions.",
      context: "Looma utilise des questions comportementales pour évaluer la collaboration, l'adaptabilité et la prise d'initiative.",
      skills: ["Méthode STAR", "Concision", "Impact"],
      expectation: "Des situations réelles où votre comportement et vos décisions sont faciles à identifier.",
      questions: [
        "Parlez-moi d'une situation dans laquelle vous avez dû gérer plusieurs priorités urgentes.",
        "Donnez-moi un exemple de feedback difficile que vous avez reçu.",
        "Racontez une situation où vous avez pris une initiative au-delà de votre rôle.",
        "Parlez-moi d'un échec et de ce que vous avez changé ensuite.",
        "Décrivez une collaboration avec une personne dont le style était très différent du vôtre."
      ],
      coachTips: [
        "Consacrez peu de temps au contexte et davantage à vos actions.",
        "Expliquez d'abord votre réaction, puis ce que vous avez changé.",
        "Montrez pourquoi l'initiative était utile, pas seulement originale.",
        "Choisissez un véritable apprentissage et une modification observable.",
        "Décrivez l'adaptation concrète de votre communication."
      ]
    },
    {
      id: "final-director",
      type: "final",
      title: "Convaincre un comité de direction",
      person: "Antoine Bernard",
      initials: "AB",
      role: "Directeur général · Vectra",
      position: "Responsable des opérations",
      level: "Avancé",
      duration: "10 à 12 minutes",
      format: "Entretien final",
      objective: "Démontrer votre vision, votre maturité et votre capacité à créer de la valeur rapidement.",
      context: "Après deux entretiens réussis, vous rencontrez le directeur général qui souhaite évaluer votre vision du rôle et votre niveau d'exigence.",
      skills: ["Vision", "Impact", "Projection"],
      expectation: "Pourquoi vous êtes la bonne personne maintenant et comment vous aborderez les priorités des premiers mois.",
      questions: [
        "Nous avons déjà beaucoup parlé de votre parcours. Pourquoi êtes-vous la bonne personne pour ce rôle maintenant ?",
        "Quelle serait votre priorité pendant les quatre-vingt-dix premiers jours ?",
        "Quel risque principal identifiez-vous dans ce poste ?",
        "Comment mesurez-vous votre impact en tant que responsable des opérations ?",
        "Qu'attendez-vous de moi pour réussir dans cette fonction ?"
      ],
      coachTips: [
        "Reliez trois preuves de votre parcours aux trois enjeux du rôle.",
        "Structurez votre plan en observation, décision et mise en œuvre.",
        "Nommez un risque réaliste et la façon dont vous le réduirez.",
        "Choisissez peu d'indicateurs, reliés aux objectifs de l'entreprise.",
        "Formulez des attentes qui montrent votre autonomie."
      ]
    },
    {
      id: "salary-negotiation",
      type: "negociation",
      title: "Présenter ses attentes salariales",
      person: "Sarah Cohen",
      initials: "SC",
      role: "Responsable RH · Arpège",
      position: "Customer Success Manager",
      level: "Intermédiaire",
      duration: "6 à 8 minutes",
      format: "Négociation salariale",
      objective: "Présenter une attente argumentée sans fragiliser la relation.",
      context: "L'entreprise souhaite vous faire une offre et vous demande de préciser vos attentes de rémunération.",
      skills: ["Assurance", "Argumentation", "Écoute"],
      expectation: "Une fourchette préparée, reliée à votre valeur et ouverte à la discussion globale.",
      questions: [
        "Nous souhaitons avancer avec vous. Quelles sont vos attentes salariales pour ce poste ?",
        "Votre fourchette est supérieure au budget initial. Comment l'avez-vous construite ?",
        "Quels autres éléments de l'offre sont importants pour vous ?",
        "Si nous ne pouvons pas atteindre le haut de votre fourchette, que souhaitez-vous explorer ?",
        "Qu'est-ce qui vous permettrait de prendre une décision sereine ?"
      ],
      coachTips: [
        "Donnez une fourchette claire et expliquez brièvement vos repères.",
        "Appuyez-vous sur le périmètre du rôle et vos preuves de valeur.",
        "Priorisez deux éléments au lieu d'énumérer tous les avantages.",
        "Préparez des alternatives sans négocier contre vous-même.",
        "Demandez les informations qui vous manquent pour décider."
      ]
    }
  ];

  const typeLabels = {
    rh: "Premier entretien RH",
    manager: "Entretien avec un manager",
    technique: "Entretien technique",
    comportemental: "Questions comportementales",
    final: "Entretien final",
    negociation: "Négociation salariale"
  };

  const candidateSamples = [
    "Je suis Product Manager depuis cinq ans. J'ai commencé dans l'analyse client, puis j'ai progressivement pris la responsabilité de produits SaaS. Mon fil conducteur est de transformer des problèmes complexes en expériences simples et mesurables. Aujourd'hui, je cherche un environnement où je peux travailler plus étroitement avec les équipes commerciales et techniques.",
    "Ce qui m'attire chez vous est le passage à une nouvelle phase de croissance et la place donnée à la découverte client. Sur mon poste actuel, j'ai justement structuré un processus de recherche qui a réduit de trente pour cent le délai entre l'identification d'un besoin et sa validation.",
    "À trois semaines d'un lancement, notre projet accusait dix jours de retard. J'ai réuni les responsables produit et technique pour prioriser les fonctionnalités critiques, puis instauré un suivi quotidien de quinze minutes. Nous avons livré la version essentielle à la date prévue et atteint quatre-vingt-douze pour cent d'adoption le premier mois.",
    "Je donne le meilleur de moi-même dans un environnement qui fixe un objectif clair, laisse de l'autonomie sur la méthode et permet des échanges directs lorsque les priorités changent.",
    "J'aimerais comprendre quel serait le premier problème important à résoudre dans ce poste et comment vous mesureriez la réussite après six mois."
  ];

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const firebaseConfig = {
    projectId: "recrutement-simulator-ia",
    appId: "1:791451832682:web:d3f138563e47f7dd22d513",
    apiKey: "AIzaSyDZWPV0fqKyFteSjdaVuoOKu_u-oxrQMMY",
    authDomain: "recrutement-simulator-ia.firebaseapp.com",
    storageBucket: "recrutement-simulator-ia.firebasestorage.app",
    messagingSenderId: "791451832682"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  const state = {
    currentView: "home",
    selectedType: null,
    selectedLevel: "all",
    scenario: scenarios[0],
    trainingMode: "realistic",
    responseMode: "voice",
    voiceMicReady: false,
    transcriptVisible: false, // Force hidden by default as requested
    elapsed: 0,
    timerId: null,
    phaseTimeout: null,
    conversationState: "idle",
    exchangeCount: 0,
    round: 0,
    messages: [],
    wizardStep: 1,
    room: null,
    sessionId: null
  };

  const announcer = $("#app-announcer");
  const toast = $("#toast");
  let toastTimeout = null;
  let announceTimeout = null;

  function announce(message) {
    window.clearTimeout(announceTimeout);
    announcer.textContent = "";
    announceTimeout = window.setTimeout(() => { announcer.textContent = message; }, 30);
  }

  function showToast(message) {
    window.clearTimeout(toastTimeout);
    toast.textContent = message;
    toast.hidden = false;
    toastTimeout = window.setTimeout(() => { toast.hidden = true; }, 3200);
  }

  function updateProgress(activeStep) {
    $$(".journey__step").forEach((item, index) => {
      const step = index + 1;
      item.classList.toggle("is-active", step === activeStep);
      item.classList.toggle("is-complete", step < activeStep);
      if (step === activeStep) item.setAttribute("aria-current", "step");
      else item.removeAttribute("aria-current");
    });
  }

  function navigate(viewName, { focus = true } = {}) {
    const stepMap = { home: 1, prep: 2, interview: 3, report: 4 };
    window.clearTimeout(announceTimeout);
    announcer.textContent = "";
    $$("[data-view]").forEach((view) => { view.hidden = view.dataset.view !== viewName; });
    state.currentView = viewName;
    updateProgress(stepMap[viewName]);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (focus) {
      window.requestAnimationFrame(() => {
        const heading = $(`#${viewName}-view h1`);
        if (heading) heading.focus({ preventScroll: true });
      });
    }
  }

  function renderScenarios() {
    const matches = scenarios.filter((scenario) => scenario.type === state.selectedType && (state.selectedLevel === "all" || scenario.level === state.selectedLevel));
    const grid = $("#scenario-grid");
    if (!matches.length) {
      grid.innerHTML = `<p>Aucun scénario ne correspond à ce niveau. Essayez un autre filtre.</p>`;
      return;
    }
    grid.innerHTML = matches.map((scenario) => `
      <button class="scenario-card" type="button" data-scenario-id="${scenario.id}" aria-label="Voir la préparation : ${scenario.title}, avec ${scenario.person}">
        <span class="scenario-card__top">
          <span class="scenario-card__avatar" aria-hidden="true">${scenario.initials}</span>
          <span class="scenario-card__person"><strong>${scenario.person}</strong><small>${scenario.role}</small></span>
          <span class="scenario-card__level">${scenario.level}</span>
        </span>
        <span><h3>${scenario.title}</h3><p>${scenario.objective}</p></span>
        <span class="scenario-card__skills">${scenario.skills.map((skill) => `<span>${skill}</span>`).join("")}</span>
        <span class="scenario-card__footer"><small>${scenario.duration}</small><span>Voir la préparation →</span></span>
      </button>
    `).join("");
    $$("[data-scenario-id]", grid).forEach((button) => button.addEventListener("click", () => selectScenario(button.dataset.scenarioId)));
  }

  function selectScenario(id) {
    const scenario = scenarios.find((item) => item.id === id);
    if (!scenario) return;
    state.scenario = scenario;
    populatePreparation();
    navigate("prep");
    announce(`Entretien sélectionné : ${scenario.title}. Étape 2 sur 4, préparation.`);
  }

  function populatePreparation() {
    const scenario = state.scenario;
    $("#prep-avatar").textContent = scenario.initials;
    $("#prep-person").textContent = scenario.person;
    $("#prep-role").textContent = scenario.role;
    $("#prep-difficulty").textContent = scenario.level;
    $("#prep-position").textContent = scenario.position;
    $("#prep-duration").textContent = scenario.duration;
    $("#prep-format").textContent = scenario.format;
    $("#prep-objective").textContent = scenario.objective;
    $("#prep-context").textContent = scenario.context;
    $("#prep-skills").innerHTML = scenario.skills.map((skill) => `<span>${skill}</span>`).join("");
    $("#prep-expectation-title").textContent = `Ce que ${scenario.person.split(" ")[0]} cherchera à comprendre`;
    $("#prep-expectation").textContent = scenario.expectation;
    updatePreflight();
  }

  function updatePreflight() {
    const textMode = state.responseMode === "text";
    const ready = textMode || state.voiceMicReady;
    const micBox = $("#microphone-check");
    const testButton = $("#test-microphone");
    micBox.classList.toggle("is-ready", ready);
    if (textMode) {
      $("#mic-status-title").textContent = "Mode texte prêt";
      $("#mic-status-copy").textContent = "Aucun micro n'est nécessaire.";
      testButton.hidden = true;
    } else if (state.voiceMicReady) {
      $("#mic-status-title").textContent = "Micro prêt";
      $("#mic-status-copy").textContent = "Votre niveau sonore est suffisant.";
      testButton.textContent = "Tester à nouveau";
      testButton.disabled = false;
      testButton.hidden = false;
    } else {
      $("#mic-status-title").textContent = "Micro non vérifié";
      $("#mic-status-copy").textContent = "Testez-le avant de démarrer.";
      testButton.textContent = "Tester mon micro";
      testButton.disabled = false;
      testButton.hidden = false;
    }
    $("#start-interview").disabled = !ready;
    $("#start-help").textContent = ready
      ? (textMode ? "Vous répondrez par écrit pendant la simulation." : "Tout est prêt. Vous gardez le contrôle du micro.")
      : "Testez le micro pour continuer.";
  }

  function testMicrophone() {
    const box = $("#microphone-check");
    const button = $("#test-microphone");
    box.classList.remove("is-ready");
    box.classList.add("is-testing");
    $("#mic-status-title").textContent = "Parlez quelques secondes…";
    $("#mic-status-copy").textContent = "Nous vérifions uniquement le niveau sonore.";
    button.disabled = true;
    button.textContent = "Test en cours…";
    announce("Test du micro en cours. Parlez quelques secondes.");
    window.setTimeout(() => {
      state.voiceMicReady = true;
      box.classList.remove("is-testing");
      updatePreflight();
      announce("Micro prêt. Vous pouvez démarrer l'entretien.");
    }, 1700);
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
    const remainder = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainder}`;
  }

  function clearInterviewTimers() {
    window.clearInterval(state.timerId);
    window.clearTimeout(state.phaseTimeout);
    state.timerId = null;
    state.phaseTimeout = null;
  }

  async function startInterview() {
    clearInterviewTimers();
    state.elapsed = 0;
    state.exchangeCount = 0;
    state.round = 0;
    state.messages = [];
    state.transcriptVisible = false; // Toujours masqué pendant l'appel

    $("#interview-timer").textContent = "00:00";
    $("#interview-person-title").textContent = state.scenario.person;
    $("#interview-person").textContent = state.scenario.person;
    $("#interview-role").textContent = state.scenario.role;
    $("#interview-avatar").childNodes[0].nodeValue = state.scenario.initials;
    $("#transcript-list").innerHTML = "";
    
    // Masquer le panneau de transcription en direct
    $("#transcript-panel").hidden = true;
    $("#show-transcript").hidden = true;
    $(".interview-layout").classList.add("transcript-hidden");

    $(".interview-stage").dataset.responseMode = "voice";
    $("#mute-button").hidden = false;
    $("#mute-button").setAttribute("aria-pressed", "false");
    $("#mute-button").setAttribute("aria-label", "Couper le microphone");
    
    setConversationState("connecting");
    navigate("interview");

    const sessionId = "sess_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5);
    state.sessionId = sessionId;

    try {
      // 1. Enregistrement de la session dans Firestore
      if (state.scenario.id.startsWith("custom")) {
        const customPrompt = `Tu es ${state.scenario.person}, ${state.scenario.role}. Tu fais passer un entretien d'embauche personnalisé pour le poste de ${state.scenario.position} (Niveau : ${state.scenario.level}).
L'offre d'emploi ou le contexte de l'entreprise est le suivant :
${state.scenario.context}

Ton rôle est de mener cet entretien RH de manière professionnelle, bienveillante mais rigoureuse. Pose ces questions une par une au fil de l'entretien en réagissant brièvement à ce que dit le candidat :
1. ${state.scenario.questions[0]} (Déjà posée au démarrage)
2. ${state.scenario.questions[1]}
3. ${state.scenario.questions[2]}
4. ${state.scenario.questions[3]}
5. ${state.scenario.questions[4]}
`;
        await db.collection("sessions").doc(sessionId).set({
          activeProspect: {
            name: state.scenario.person,
            role: state.scenario.role,
            voiceName: 'Aoede',
            systemInstruction: customPrompt
          },
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
      } else {
        await db.collection("sessions").doc(sessionId).set({
          recruiterId: state.scenario.id,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
      }

      // 2. Récupération du jeton LiveKit
      const roomName = `room_recruiter-${state.scenario.id}_session-${sessionId}`;
      const response = await fetch(`/api/get-token?roomName=${encodeURIComponent(roomName)}&participantName=candidat`);
      if (!response.ok) {
        throw new Error("Impossible de générer le jeton de connexion");
      }
      const data = await response.json();
      const token = data.token;
      const serverUrl = data.serverUrl || "wss://voice-ai-similateur-de-vente-zwon3kb4.livekit.cloud";

      // 3. Connexion à la salle LiveKit
      const room = new LivekitClient.Room();
      state.room = room;

      room.on(LivekitClient.RoomEvent.Connected, () => {
        setConversationState("interviewer"); // Attendre que le recruteur parle en premier
        state.timerId = window.setInterval(() => {
          state.elapsed += 1;
          $("#interview-timer").textContent = formatTime(state.elapsed);
        }, 1000);
      });

      room.on(LivekitClient.RoomEvent.Disconnected, () => {
        clearInterviewTimers();
        showToast("Session déconnectée");
      });

      room.on(LivekitClient.RoomEvent.TrackSubscribed, (track) => {
        if (track.kind === 'audio') {
          const el = track.attach();
          document.body.appendChild(el);
        }
      });

      room.on(LivekitClient.RoomEvent.TrackUnsubscribed, (track) => {
        if (track.kind === 'audio') {
          const attached = track.detach();
          attached.forEach(el => el.remove());
        }
      });

      room.on(LivekitClient.RoomEvent.DataReceived, (payload) => {
        try {
          const parsed = JSON.parse(new TextDecoder().decode(payload));
          if (parsed.type === 'transcript') {
            const role = parsed.role === 'user' ? 'candidate' : 'recruiter';
            const speaker = role === 'candidate' ? 'Vous' : state.scenario.person;
            addTranscript(role, speaker, parsed.text);
            state.exchangeCount = state.messages.filter(m => m.type === 'candidate').length;
          }
        } catch (e) {
          console.error("Erreur de parsing du message canal de données :", e);
        }
      });

      room.on(LivekitClient.RoomEvent.ActiveSpeakersChanged, (speakers) => {
        const agentSpeaking = speakers.some(s => !s.isLocal);
        if (agentSpeaking) {
          setConversationState("interviewer");
        } else {
          setConversationState("user-ready");
        }
      });

      await room.connect(serverUrl, token);
      await room.localParticipant.setMicrophoneEnabled(true);

    } catch (err) {
      console.error("Échec de connexion LiveKit:", err);
      showToast(err.message || "Échec d'établissement de l'appel");
      navigate("prep");
    }
  }

  function askCurrentQuestion() {
    // Remplacé par l'interaction LiveKit temps-réel
  }

  function setConversationState(conversationState) {
    state.conversationState = conversationState;
    const firstName = state.scenario.person.split(" ")[0];
    const statePill = $("#conversation-state");
    const stage = $(".interview-stage");
    const action = $("#turn-action");
    const label = $("#turn-action-label");
    const textForm = $("#text-reply");
    const coachCue = $("#coach-cue");
    statePill.dataset.state = conversationState;
    stage.dataset.conversationState = conversationState;
    action.classList.remove("is-listening");
    action.hidden = false;
    textForm.hidden = true;
    coachCue.hidden = true;

    if (conversationState === "connecting") {
      $("#conversation-state-title").textContent = "Connexion en cours";
      $("#turn-guidance-title").textContent = "Appel en cours d'établissement";
      $("#turn-guidance-copy").textContent = "Veuillez autoriser l'accès au micro si demandé.";
      action.disabled = true;
      label.textContent = "Connexion…";
    }
    if (conversationState === "interviewer") {
      $("#conversation-state-title").textContent = `${firstName} vous parle`;
      $("#turn-guidance-title").textContent = "Écoutez le recruteur";
      $("#turn-guidance-copy").textContent = `Vous pourrez répondre dès que ${firstName} aura terminé.`;
      action.disabled = true;
      label.textContent = "Patientez…";
    }
    if (conversationState === "user-ready") {
      $("#conversation-state-title").textContent = "À vous de répondre";
      $("#turn-guidance-title").textContent = "Votre recruteur vous écoute";
      $("#turn-guidance-copy").textContent = "Parlez naturellement pour répondre.";
      action.disabled = true;
      label.textContent = "Parlez…";
      if (state.trainingMode === "coach") {
        $("#coach-tip").textContent = state.scenario.coachTips[Math.min(state.round, state.scenario.coachTips.length - 1)];
        coachCue.hidden = false;
      }
    }
    if (conversationState === "listening") {
      $("#conversation-state-title").textContent = "Je vous écoute";
      $("#turn-guidance-title").textContent = "Répondez naturellement";
      $("#turn-guidance-copy").textContent = "Terminez votre réponse avec le bouton central.";
      action.disabled = false;
      action.classList.add("is-listening");
      label.textContent = "J'ai terminé";
    }
    if (conversationState === "analysing") {
      $("#conversation-state-title").textContent = "Réponse bien reçue";
      $("#turn-guidance-title").textContent = "Analyse en cours";
      $("#turn-guidance-copy").textContent = `${firstName} prépare la prochaine question.`;
      action.disabled = true;
      label.textContent = "Analyse…";
    }
  }

  function addTranscript(type, speaker, message) {
    const transcriptMessage = { type, speaker, message, time: formatTime(state.elapsed) };
    state.messages.push(transcriptMessage);
    const entry = document.createElement("article");
    entry.className = `transcript-entry${type === "candidate" ? " transcript-entry--user" : ""}`;
    entry.innerHTML = `<div class="transcript-entry__meta"><strong></strong><time></time></div><p></p>`;
    $("strong", entry).textContent = speaker;
    $("time", entry).textContent = transcriptMessage.time;
    $("p", entry).textContent = message;
    const list = $("#transcript-list");
    list.append(entry);
    list.scrollTop = list.scrollHeight;
  }

  function submitCandidateTurn(message) {
    addTranscript("candidate", "Vous", message);
    state.exchangeCount += 1;
    setConversationState("analysing");
    state.phaseTimeout = window.setTimeout(() => {
      state.round += 1;
      askCurrentQuestion();
    }, 1400);
  }

  function buildReport() {
    const partial = state.exchangeCount < 3;
    if (partial) {
      $("#report-title").textContent = "Analyse partielle : poursuivez l'entretien";
      $("#report-subtitle").textContent = "Trop peu de réponses sont disponibles pour produire une évaluation fiable. Votre transcript reste intégralement accessible.";
      $("#score-value").textContent = "—";
      $("#score-unit").textContent = "";
      $("#score-label").textContent = "Données insuffisantes";
      $("#score-confidence").textContent = `${state.exchangeCount} réponse${state.exchangeCount > 1 ? "s" : ""} · minimum 3`;
      $("#readiness-ring").style.background = "radial-gradient(circle at center, #5540ad 54%, transparent 55%), conic-gradient(rgba(255,255,255,.22) 0 100%)";
      $("#criteria-list").innerHTML = ["Clarté et concision", "Pertinence pour le poste", "Qualité des exemples", "Motivation", "Expression orale"].map((criterion) => `
        <article class="criterion"><div><strong>${criterion}</strong><span>Non évalué</span></div><div class="progress-track"><span style="--value:0%"></span></div><strong>—</strong><p>Donnée insuffisante : répondez à au moins trois questions pour obtenir une observation fiable.</p></article>
      `).join("");
    } else {
      const score = Math.min(88, 72 + state.exchangeCount * 2);
      $("#report-title").textContent = "Votre discours est clair et crédible";
      $("#report-subtitle").textContent = "Vous créez une première impression professionnelle. Vos exemples gagneraient maintenant à être plus précis et mesurables.";
      $("#score-value").textContent = score;
      $("#score-unit").textContent = "/100";
      $("#score-label").textContent = score >= 82 ? "Très bien préparé" : "Prêt à convaincre";
      $("#score-confidence").textContent = `Analyse fiable · ${state.exchangeCount} réponses`;
      $("#readiness-ring").style.background = `radial-gradient(circle at center, #5540ad 54%, transparent 55%), conic-gradient(#94e1c2 0 ${score}%, rgba(255,255,255,.2) ${score}% 100%)`;
      $("#criteria-list").innerHTML = `
        <article class="criterion"><div><strong>Clarté et concision</strong><span>25 % du résultat</span></div><div class="progress-track"><span style="--value:84%"></span></div><strong>84</strong><p>Votre réponse d'introduction suit un fil clair et reste facile à suivre.</p></article>
        <article class="criterion"><div><strong>Pertinence pour le poste</strong><span>25 % du résultat</span></div><div class="progress-track"><span style="--value:81%"></span></div><strong>81</strong><p>Vous reliez votre expérience aux principaux enjeux du poste.</p></article>
        <article class="criterion"><div><strong>Qualité des exemples</strong><span>20 % du résultat</span></div><div class="progress-track"><span style="--value:69%"></span></div><strong>69</strong><p>La situation est compréhensible, mais certains résultats manquent d'indicateurs.</p></article>
        <article class="criterion"><div><strong>Motivation</strong><span>20 % du résultat</span></div><div class="progress-track"><span style="--value:78%"></span></div><strong>78</strong><p>Votre intérêt est crédible ; citez un élément encore plus spécifique à l'entreprise.</p></article>
        <article class="criterion"><div><strong>Expression orale</strong><span>10 % du résultat</span></div><div class="progress-track"><span style="--value:76%"></span></div><strong>76</strong><p>Le rythme est posé et professionnel, avec quelques formulations longues.</p></article>
      `;
    }
    renderReportTranscript();
  }

  function renderReportTranscript() {
    const list = $("#report-transcript-list");
    list.innerHTML = "";
    state.messages.forEach((message) => {
      const entry = document.createElement("article");
      entry.className = `report-transcript-entry${message.type === "candidate" ? " report-transcript-entry--user" : ""}`;
      entry.innerHTML = "<strong></strong><time></time><p></p>";
      $("strong", entry).textContent = message.speaker;
      $("time", entry).textContent = message.time;
      $("p", entry).textContent = message.message;
      list.append(entry);
    });
    $("#transcript-count").textContent = `${state.messages.length} intervention${state.messages.length > 1 ? "s" : ""}`;
  }

  function finishAndShowReport() {
    if (state.room) {
      state.room.disconnect();
      state.room = null;
    }
    clearInterviewTimers();
    buildReport();
    navigate("report");
    announce("Entretien terminé. Étape 4 sur 4, votre bilan et le transcript complet sont disponibles.");
  }

  function setWizardStep(step) {
    state.wizardStep = step;
    $$("[data-wizard-step]").forEach((panel) => { panel.hidden = Number(panel.dataset.wizardStep) !== step; });
    $$("[data-wizard-indicator]").forEach((indicator) => {
      const value = Number(indicator.dataset.wizardIndicator);
      indicator.classList.toggle("is-active", value === step);
      indicator.classList.toggle("is-complete", value < step);
    });
    $("#wizard-back").hidden = step === 1;
    $("#wizard-next").hidden = step === 3;
    $("#wizard-submit").hidden = step !== 3;
    const focusTarget = step === 1 ? $("#custom-position") : step === 2 ? $("#custom-offer") : $("#wizard-submit");
    window.requestAnimationFrame(() => focusTarget.focus());
  }

  function validateWizardStep() {
    if (state.wizardStep === 1) {
      const position = $("#custom-position");
      const seniority = $("#custom-seniority");
      const positionValid = position.value.trim().length > 1;
      const seniorityValid = Boolean(seniority.value);
      $("#custom-position-error").hidden = positionValid;
      $("#custom-seniority-error").hidden = seniorityValid;
      position.setAttribute("aria-invalid", String(!positionValid));
      seniority.setAttribute("aria-invalid", String(!seniorityValid));
      if (!positionValid) position.focus();
      else if (!seniorityValid) seniority.focus();
      return positionValid && seniorityValid;
    }
    if (state.wizardStep === 2) {
      const offer = $("#custom-offer");
      const valid = offer.value.trim().length >= 40;
      $("#custom-offer-error").hidden = valid;
      offer.setAttribute("aria-invalid", String(!valid));
      if (!valid) offer.focus();
      if (valid) {
        $("#review-position").textContent = $("#custom-position").value.trim();
        $("#review-seniority").textContent = $("#custom-seniority").value;
        $("#review-offer").textContent = offer.value.trim();
      }
      return valid;
    }
    return true;
  }

  function createCustomScenario() {
    const position = $("#custom-position").value.trim();
    const seniority = $("#custom-seniority").value;
    const offer = $("#custom-offer").value.trim();
    return {
      id: `custom-${Date.now()}`,
      type: "custom",
      title: `Entretien personnalisé · ${position}`,
      person: "Sophie Laurent",
      initials: "SL",
      role: "Talent Acquisition Partner · Entreprise cible",
      position,
      level: seniority.split(" · ")[0],
      duration: "8 à 10 minutes",
      format: "Entretien personnalisé",
      objective: "Présenter votre parcours et démontrer votre adéquation avec les attentes de l'offre.",
      context: offer,
      skills: ["Motivation", "Expérience", "Adéquation"],
      expectation: "Des preuves concrètes reliant votre parcours aux missions et compétences décrites dans l'offre.",
      questions: [
        `Bonjour. Pour commencer, pouvez-vous me présenter votre parcours et ce qui vous conduit vers ce poste de ${position} ?`,
        "Quelle expérience vous semble la plus proche des missions décrites dans notre offre ?",
        "Parlez-moi d'une difficulté récente et de la manière dont vous l'avez surmontée.",
        "Quelle compétence souhaitez-vous encore développer dans votre prochain poste ?",
        "Quelles questions souhaitez-vous me poser avant de conclure ?"
      ],
      coachTips: [
        "Reliez votre parcours au poste en moins de deux minutes.",
        "Choisissez une expérience précise et décrivez votre contribution.",
        "Utilisez STAR et terminez par un résultat mesurable.",
        "Présentez un axe de progression accompagné d'un plan concret.",
        "Posez une question sur les priorités ou les critères de réussite."
      ]
    };
  }

  $$("[data-interview-type]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedType = button.dataset.interviewType;
      state.selectedLevel = "all";
      $$("[data-interview-type]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      $$("[data-level]").forEach((item) => {
        const active = item.dataset.level === "all";
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      $("#scenario-title").textContent = typeLabels[state.selectedType];
      $("#scenario-picker").hidden = false;
      renderScenarios();
      announce(`${typeLabels[state.selectedType]} sélectionné. Choisissez maintenant un scénario.`);
      window.requestAnimationFrame(() => $("#scenario-title").focus());
    });
  });

  $$("[data-level]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedLevel = button.dataset.level;
      $$("[data-level]").forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      renderScenarios();
      announce(`Filtre ${button.textContent.trim()} appliqué.`);
    });
  });

  $$("[data-back='home']").forEach((button) => button.addEventListener("click", () => navigate("home")));

  $$("input[name='training-mode']").forEach((radio) => radio.addEventListener("change", () => {
    state.trainingMode = radio.value;
    announce(state.trainingMode === "coach" ? "Mode coach sélectionné." : "Simulation réaliste sélectionnée.");
  }));

  $$("input[name='response-mode']").forEach((radio) => radio.addEventListener("change", () => {
    state.responseMode = radio.value;
    updatePreflight();
    announce(state.responseMode === "text" ? "Mode texte sélectionné. Vous pouvez démarrer." : "Mode oral sélectionné.");
  }));

  $("#test-microphone").addEventListener("click", testMicrophone);
  $("#start-interview").addEventListener("click", startInterview);

  $("#turn-action").addEventListener("click", () => {
    if (state.conversationState === "user-ready") setConversationState("listening");
    else if (state.conversationState === "listening") submitCandidateTurn(candidateSamples[Math.min(state.round, candidateSamples.length - 1)]);
  });

  $("#text-reply").addEventListener("submit", (event) => {
    event.preventDefault();
    const field = $("#text-reply-field");
    const response = field.value.trim();
    if (!response) {
      field.setCustomValidity("Écrivez une réponse avant de l'envoyer.");
      field.reportValidity();
      return;
    }
    field.setCustomValidity("");
    field.value = "";
    submitCandidateTurn(response);
  });
  $("#text-reply-field").addEventListener("input", (event) => event.target.setCustomValidity(""));

  $("#mute-button").addEventListener("click", async (event) => {
    const pressed = event.currentTarget.getAttribute("aria-pressed") === "true";
    const nextMuted = !pressed;
    event.currentTarget.setAttribute("aria-pressed", String(nextMuted));
    event.currentTarget.setAttribute("aria-label", nextMuted ? "Réactiver le microphone" : "Couper le microphone");
    if (state.room) {
      await state.room.localParticipant.setMicrophoneEnabled(!nextMuted);
    }
    showToast(nextMuted ? "Micro coupé" : "Micro réactivé");
  });

  const finishDialog = $("#finish-dialog");
  $("#finish-interview-button").addEventListener("click", () => {
    $("#finish-dialog-notice").textContent = state.exchangeCount < 3
      ? "Pour un bilan fiable, répondez à au moins trois questions. Le transcript restera disponible dans une analyse partielle."
      : `${state.exchangeCount} réponses seront analysées avec le transcript complet.`;
    finishDialog.showModal();
  });
  finishDialog.addEventListener("close", () => { if (finishDialog.returnValue === "confirm") finishAndShowReport(); });

  $("#hide-transcript").addEventListener("click", () => {
    $("#transcript-panel").hidden = true;
    $("#show-transcript").hidden = false;
    $("#show-transcript").focus();
  });
  $("#show-transcript").addEventListener("click", () => {
    $("#transcript-panel").hidden = false;
    $("#show-transcript").hidden = true;
    announce("Transcript affiché.");
  });

  $("#score-details-button").addEventListener("click", (event) => {
    const expanded = event.currentTarget.getAttribute("aria-expanded") === "true";
    event.currentTarget.setAttribute("aria-expanded", String(!expanded));
    $("#score-details").hidden = expanded;
  });

  $("#report-transcript-toggle").addEventListener("click", (event) => {
    const expanded = event.currentTarget.getAttribute("aria-expanded") === "true";
    event.currentTarget.setAttribute("aria-expanded", String(!expanded));
    $("#report-transcript-content").hidden = expanded;
  });

  $("#copy-answer").addEventListener("click", async () => {
    const text = $(".answer-comparison__improved blockquote").textContent.trim();
    try { await navigator.clipboard.writeText(text); showToast("Exemple copié dans le presse-papiers"); }
    catch { showToast("Sélectionnez l'exemple pour le copier"); }
  });

  $("#download-report").addEventListener("click", () => {
    const transcript = state.messages.map((message) => `[${message.time}] ${message.speaker} : ${message.message}`).join("\n\n");
    const content = `BILAN D'ENTRETIEN — ${state.scenario.position}\n\n${$("#report-title").textContent}\n${$("#report-subtitle").textContent}\n\nTRANSCRIPT COMPLET\n\n${transcript}`;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([content], { type: "text/plain;charset=utf-8" }));
    link.download = "bilan-entretien-avec-transcript.txt";
    link.click();
    URL.revokeObjectURL(link.href);
    showToast("Bilan et transcript téléchargés");
  });

  $("#retry-weak-answer").addEventListener("click", () => {
    state.trainingMode = "coach";
    const coachRadio = $("input[name='training-mode'][value='coach']");
    coachRadio.checked = true;
    populatePreparation();
    navigate("prep");
    showToast("Mode coach activé pour retravailler cette réponse");
  });
  $("#retry-interview").addEventListener("click", () => { populatePreparation(); navigate("prep"); });
  $("#choose-another").addEventListener("click", () => navigate("home"));

  const customDialog = $("#custom-dialog");
  $("#custom-interview-button").addEventListener("click", () => {
    $("#custom-form").reset();
    $$(".field-error", customDialog).forEach((error) => { error.hidden = true; });
    customDialog.showModal();
    setWizardStep(1);
  });
  $$("[data-close-dialog]").forEach((button) => button.addEventListener("click", () => $(`#${button.dataset.closeDialog}`).close()));
  $("#wizard-next").addEventListener("click", () => { if (validateWizardStep()) setWizardStep(state.wizardStep + 1); });
  $("#wizard-back").addEventListener("click", () => setWizardStep(state.wizardStep - 1));
  $("#custom-form").addEventListener("submit", (event) => {
    event.preventDefault();
    state.scenario = createCustomScenario();
    customDialog.close();
    populatePreparation();
    navigate("prep");
    announce("Entretien personnalisé créé. Vérifiez votre préparation avant de démarrer.");
  });

  $("#help-button").addEventListener("click", () => $("#help-dialog").showModal());
  $("#history-button").addEventListener("click", () => $("#history-dialog").showModal());
  $(".profile-button").addEventListener("click", () => showToast("Les paramètres du profil seront disponibles dans la version connectée."));
  $("#brand-home").addEventListener("click", (event) => {
    event.preventDefault();
    if (state.currentView === "interview") $("#finish-interview-button").click();
    else { clearInterviewTimers(); navigate("home"); }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.currentView === "interview" && !$$('dialog[open]').length) $("#finish-interview-button").click();
  });

  populatePreparation();
})();
