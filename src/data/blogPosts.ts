export interface Comment {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
  likes: number;
  replies?: Comment[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  authorRole: string;
  authorBio: string;
  authorPhoto: string;
  imageUrl: string;
  readTime: string;
  views: number;
  tags: string[];
  featured?: boolean;
  comments: Comment[];
}

const mockComments: Comment[] = [
  {
    id: "c1",
    author: "Julien R.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    date: "Il y a 2 jours",
    content: "Article très intéressant ! L'intégration de ces nouveaux matériaux va définitivement changer notre façon de concevoir les bâtiments.",
    likes: 12,
    replies: [
      {
        id: "c1-r1",
        author: "Sophie Martin",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
        date: "Il y a 1 jour",
        content: "Merci Julien ! En effet, le défi sera de former les équipes à ces nouvelles techniques.",
        likes: 5
      }
    ]
  },
  {
    id: "c2",
    author: "Marie L.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    date: "Il y a 3 jours",
    content: "Qu'en est-il des coûts à court terme ? Est-ce vraiment accessible pour les petites entreprises du BTP ?",
    likes: 8
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "tendances-construction-durable-2026",
    title: "Les tendances incontournables de la construction durable en 2026",
    excerpt: "Découvrez comment l'innovation écologique redéfinit les normes du BTP, de l'utilisation de matériaux biosourcés à l'intégration de l'intelligence artificielle pour l'efficacité énergétique.",
    content: `
      <h2>L'essor des matériaux biosourcés et géosourcés</h2>
      <p>L'industrie du bâtiment opère un virage sans précédent vers la durabilité. En 2026, les matériaux comme le bois lamellé-croisé (CLT), le béton de chanvre et la terre crue ne sont plus des alternatives de niche, mais bien des standards pour les projets ambitieux. Ces matériaux offrent une excellente isolation thermique tout en réduisant drastiquement l'empreinte carbone des constructions.</p>
      
      <h2>L'intégration de l'Intelligence Artificielle (IA) dans la conception</h2>
      <p>L'IA révolutionne la phase de conception. Grâce aux algorithmes d'optimisation topologique, les architectes et ingénieurs peuvent concevoir des structures plus légères, utilisant moins de matériaux, sans compromettre la solidité. De plus, la gestion prédictive des chantiers permet d'anticiper les retards et de minimiser le gaspillage des ressources.</p>

      <h2>Le réemploi au cœur de l'économie circulaire</h2>
      <p>La déconstruction sélective remplace peu à peu la démolition classique. Les plateformes numériques de réemploi des matériaux du BTP connaissent une croissance exponentielle, permettant aux entreprises de s'approvisionner en matériaux de seconde main certifiés. C'est un pas de géant vers le zéro déchet sur les chantiers.</p>

      <blockquote>"La durabilité n'est plus une option, c'est le fondement même de toute nouvelle construction." - Jean Dupont, Expert en Éco-construction.</blockquote>

      <h2>Conclusion</h2>
      <p>La transition écologique du secteur de la construction est bel et bien en marche. Les entreprises qui adoptent ces nouvelles pratiques ne se contentent pas de respecter les réglementations futures ; elles construisent un avantage concurrentiel durable.</p>
    `,
    category: "Actualités",
    date: "15 Mai 2026",
    author: "Sophie Martin",
    authorRole: "Ingénieure Bâtiment Durable",
    authorBio: "Experte en éco-construction avec 15 ans d'expérience. Passionnée par les matériaux innovants et l'impact carbone du secteur.",
    authorPhoto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1541888081622-14de6eb7b028?q=80&w=2070&auto=format&fit=crop",
    readTime: "5 min",
    views: 1245,
    tags: ["Construction", "Durable", "Innovation", "Matériaux"],
    featured: true,
    comments: mockComments
  },
  {
    id: "renovation-energetique-defis",
    title: "Rénovation énergétique globale : Relever les défis techniques",
    excerpt: "L'isolation thermique par l'extérieur (ITE) et la modernisation des systèmes de chauffage : guide complet pour réussir vos projets de rénovation complexe.",
    content: `
      <h2>Les enjeux de la rénovation globale</h2>
      <p>Avec le durcissement des réglementations thermiques et la volonté de réduire la précarité énergétique, la rénovation globale des bâtiments anciens est au cœur des préoccupations. Contrairement aux gestes isolés (changer une fenêtre, isoler les combles), la rénovation globale vise une approche systémique pour maximiser l'efficacité énergétique.</p>

      <h2>L'Isolation Thermique par l'Extérieur (ITE)</h2>
      <p>L'ITE reste la solution la plus performante pour traiter les ponts thermiques. En enveloppant le bâtiment d'un manteau isolant, on préserve l'inertie thermique des murs intérieurs. Les nouvelles générations d'enduits et de bardages permettent en outre de moderniser complètement l'esthétique des façades.</p>

      <h2>Modernisation des systèmes d'énergie</h2>
      <p>Coupler une excellente isolation à un système de chauffage performant (comme les pompes à chaleur géothermiques ou hybrides) est essentiel. De plus, l'intégration de panneaux photovoltaïques en toiture permet aux bâtiments rénovés de s'approcher du standard de bâtiment à énergie positive (BEPOS).</p>
    `,
    category: "Tutoriels",
    date: "28 Avril 2026",
    author: "Thomas Dubois",
    authorRole: "Chef de Chantier Rénovation",
    authorBio: "Spécialiste de la rénovation thermique des bâtiments anciens. Il partage ses astuces pratiques de terrain.",
    authorPhoto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop",
    readTime: "7 min",
    views: 890,
    tags: ["Rénovation", "Énergie", "Tutoriel"],
    comments: [mockComments[0]]
  },
  {
    id: "securite-chantiers-technologies",
    title: "Comment les nouvelles technologies améliorent la sécurité sur les chantiers",
    excerpt: "Exosquelettes, capteurs IoT et réalité augmentée : panorama des innovations technologiques qui réduisent considérablement les accidents du travail dans le BTP.",
    content: `
      <h2>Les exosquelettes au service de la pénibilité</h2>
      <p>Pour prévenir les troubles musculosquelettiques (TMS), les exosquelettes passifs et actifs font leur apparition sur les chantiers. Ces dispositifs allègent considérablement le poids des outils lourds et assistent les ouvriers lors de tâches répétitives ou en hauteur, préservant ainsi leur santé physique sur le long terme.</p>

      <h2>L'Internet des Objets (IoT) pour la prévention des risques</h2>
      <p>Les chantiers connectés sont désormais une réalité. Les ouvriers peuvent être équipés de casques et de gilets intelligents qui détectent les situations dangereuses (proximité avec un engin en mouvement, exposition prolongée au bruit ou aux vibrations, détection de chute) et alertent immédiatement le chef de chantier.</p>

      <h2>La formation par la Réalité Virtuelle (VR)</h2>
      <p>Avant même de poser le pied sur le chantier, les compagnons peuvent désormais s'entraîner aux procédures de sécurité via des simulations en réalité virtuelle. Cette approche immersive s'avère beaucoup plus efficace que les formations théoriques classiques, car elle permet de confronter les travailleurs aux risques de manière sécurisée.</p>
    `,
    category: "Technologies",
    date: "12 Avril 2026",
    author: "Marc Leroy",
    authorRole: "Directeur de l'Innovation",
    authorBio: "Toujours à l'affût des dernières technologies, Marc aide les entreprises à digitaliser leurs processus de construction.",
    authorPhoto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=2074&auto=format&fit=crop",
    readTime: "6 min",
    views: 2100,
    tags: ["Sécurité", "IoT", "Innovation", "Tech"],
    comments: []
  },
  {
    id: "avenir-beton-bas-carbone",
    title: "Le béton bas carbone : Révolution ou simple transition ?",
    excerpt: "Analyse des différentes formules de béton écologique et de leur impact réel sur l'empreinte carbone des grands projets d'infrastructure.",
    content: `
      <h2>La quête du ciment vert</h2>
      <p>Le ciment traditionnel, responsable d'une part significative des émissions mondiales de CO2, est en pleine réinvention. Les ciments décarbonés, qui utilisent des laitiers de hauts fourneaux, des cendres volantes ou des argiles calcinées, permettent de réduire l'empreinte carbone du béton jusqu'à 70% par rapport à un ciment Portland classique.</p>

      <h2>Performances techniques et mise en œuvre</h2>
      <p>La grande question autour du béton bas carbone a longtemps été celle de ses performances mécaniques. Aujourd'hui, les retours d'expérience sur les grands chantiers démontrent que ces nouveaux bétons offrent une résistance et une durabilité tout à fait comparables, voire supérieures, aux bétons traditionnels, bien que leur temps de prise puisse parfois nécessiter une adaptation des plannings de coulage.</p>

      <h2>Perspectives économiques</h2>
      <p>Bien que le coût initial puisse être légèrement supérieur, la démocratisation de ces matériaux et l'augmentation des taxes carbone rendent le béton écologique de plus en plus compétitif financièrement, devenant le choix par défaut pour les projets publics et privés soucieux de leur bilan environnemental.</p>
    `,
    category: "Conseils",
    date: "05 Avril 2026",
    author: "Claire Rénier",
    authorRole: "Architecte Urbaniste",
    authorBio: "Conceptrice d'espaces urbains résilients. Elle milite pour une architecture qui respecte le vivant.",
    authorPhoto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2067&auto=format&fit=crop",
    readTime: "8 min",
    views: 1560,
    tags: ["Matériaux", "Béton", "Écologie"],
    comments: mockComments
  },
  {
    id: "salon-batimat-2026",
    title: "Retour sur le salon BATIMAT 2026 : Les innovations marquantes",
    excerpt: "Notre équipe était présente au salon mondial de la construction. Voici notre sélection des startups et des technologies qui vont façonner l'avenir.",
    content: `
      <h2>L'impression 3D béton passe à l'échelle</h2>
      <p>Cette année à BATIMAT, l'impression 3D n'était plus une curiosité de laboratoire. Plusieurs entreprises ont présenté des machines capables d'imprimer des murs entiers directement sur site, promettant des gains de temps considérables et des formes architecturales inédites.</p>

      <h2>Les logiciels BIM toujours plus puissants</h2>
      <p>Le Building Information Modeling (BIM) s'enrichit de nouvelles fonctionnalités liées à l'analyse du cycle de vie. Les maquettes numériques intègrent désormais nativement les calculs d'empreinte carbone, permettant de faire les meilleurs choix de matériaux dès l'esquisse.</p>
    `,
    category: "Événements",
    date: "22 Mars 2026",
    author: "Julien Morel",
    authorRole: "Rédacteur Technique",
    authorBio: "Journaliste spécialisé dans l'industrie et la construction.",
    authorPhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    readTime: "4 min",
    views: 3200,
    tags: ["Événement", "BATIMAT", "Innovation"],
    comments: []
  },
  {
    id: "temoignage-construction-bois",
    title: "Témoignage : Construire un immeuble de 8 étages en bois",
    excerpt: "Entretien exclusif avec l'équipe projet d'une des tours en bois les plus ambitieuses de la région. Défis, réussites et leçons apprises.",
    content: `
      <h2>Le choix de l'ossature bois</h2>
      <p>Pourquoi le bois ? Selon le chef de projet : "C'est un matériau qui offre une flexibilité incroyable, un chantier sec beaucoup plus rapide et une empreinte carbone imbattable."</p>

      <h2>La gestion de l'acoustique et du feu</h2>
      <p>Ce sont souvent les deux craintes majeures. Le projet a démontré que grâce à des planchers mixtes bois-béton et un traitement spécifique des façades, ces normes sont largement respectées, offrant même un confort acoustique supérieur aux normes classiques.</p>
    `,
    category: "Témoignages",
    date: "10 Mars 2026",
    author: "Elodie Blanc",
    authorRole: "Consultante BTP",
    authorBio: "Accompagne les maîtres d'ouvrage dans la réalisation de projets complexes.",
    authorPhoto: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=200&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1533604071378-5e921d4c243a?q=80&w=2074&auto=format&fit=crop",
    readTime: "5 min",
    views: 950,
    tags: ["Bois", "Témoignage", "Chantier"],
    comments: mockComments
  }
];

// Helper pour récupérer toutes les catégories uniques
export const getCategories = () => {
  const cats = blogPosts.map(post => post.category);
  return [...new Set(cats)];
};

// Helper pour récupérer tous les tags uniques
export const getTags = () => {
  const tagsArray = blogPosts.flatMap(post => post.tags);
  return [...new Set(tagsArray)];
};
