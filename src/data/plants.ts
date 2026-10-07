// ════════════════════════════════════════════════════════════════
// Suva Botanica — Plant Data Store
// This will eventually connect to a database/API for e-commerce.
// For now, it serves as the single source of truth for all plant info,
// including the QR-code scanned plant detail pages.
// ════════════════════════════════════════════════════════════════

export interface PlantCareInfo {
  light: string;
  water: string;
  humidity: string;
  temperature: string;
  difficulty: 'Easy' | 'Moderate' | 'Expert';
  petSafe: boolean;
}

export interface EncyclopediaData {
  botanicalInformation?: Record<string, string>;
  keyFeatures?: { title: string; description: string }[];
  whyThisPlant?: { title: string; description: string }[];
  careGuide?: {
    indoor?: { title: string; description: string }[];
    outdoor?: { title: string; description: string }[];
  };
}

export interface Plant {
  id: string;
  slug: string;
  name: string;
  botanicalName: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  image: string;
  gallery: string[];
  categories: string[];
  care: PlantCareInfo;
  features: string[];
  whatsappMessage: string;
  inStock: boolean;
  badge?: string;
  encyclopedia?: EncyclopediaData;
}

export const plants: Plant[] = [
  {
    id: 'poinsettia',
    slug: 'poinsettia',
    name: 'Poinsettia',
    botanicalName: 'Euphorbia pulcherrima',
    tagline: 'The Winter Star',
    description: 'A striking luxury botanical famous for its vibrant red bracts and dark green foliage, perfect for gifting.',
    longDescription: 'The Poinsettia is the ultimate symbol of winter elegance and luxury. Native to Central America, it is renowned for its magnificent red star-shaped "flowers"—which are actually modified leaves called bracts. Cultivated with extreme care in our tissue-culture labs, our Poinsettias boast intensely rich colors and lush, dense foliage. Housed in a premium matte ceramic planter, this striking plant brings instant warmth and editorial-quality beauty to any space. It’s an iconic gift and a breathtaking centerpiece.',
    price: 1899,
    originalPrice: 2299,
    image: '/images/plant_poinsettia_1789539259993.jpg',
    gallery: ['/images/plant_poinsettia_1789539259993.jpg'],
    categories: ['Flowering', 'Statement', 'Gift Favorite'],
    care: {
      light: 'Bright indirect light (at least 6 hours a day)',
      water: 'Water thoroughly when the top inch of soil is dry; do not let it sit in water',
      humidity: 'Average to high (avoid drafts and heaters)',
      temperature: '15-22°C',
      difficulty: 'Moderate',
      petSafe: false,
    },
    features: [
      'Tissue-culture grown for pristine health and vibrant color',
      'Ships in premium matte ceramic planter',
      'Iconic star-shaped vibrant red bracts',
      'Perfect centerpiece for luxury gifting',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the stunning Poinsettia. Could you share more details?",
    inStock: true,
    badge: 'Seasonal Exclusive',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Euphorbia pulcherrima',
        'Common Names': 'Poinsettia, Christmas Star, Lobster Plant',
        'Family': 'Euphorbiaceae (Spurge family)',
        'Native Habitat': 'Pacific coast of Mexico',
        'Toxicity': 'Mildly toxic to cats, dogs, and humans if ingested. Sap can cause skin irritation.'
      },
      keyFeatures: [
        { title: 'Vibrant Bracts', description: 'The famous red "petals" are actually modified leaves called bracts, which surround the tiny, true yellow flowers in the center.' },
        { title: 'Photoperiodism', description: 'They require specific periods of complete darkness (14+ hours a day) to trigger the color change in their bracts.' },
        { title: 'Milky Sap', description: 'When a stem or leaf is broken, the plant exudes a white, sticky sap characteristic of the Euphorbia family.' },
        { title: 'Bushy Growth', description: 'When pruned correctly, it grows into a dense, lush shrub that creates a stunning visual impact.' }
      ],
      whyThisPlant: [
        { title: 'The Ultimate Holiday Symbol', description: 'Poinsettias are globally recognized as the quintessential Christmas plant, bringing instant festive cheer to any space.' },
        { title: 'Exceptional Gift', description: 'Their bright, bold colors make them perfect centerpieces and highly appreciated gifts during the winter season.' },
        { title: 'Long-Lasting Color', description: 'Unlike cut flowers, the colorful bracts of a Poinsettia can remain vibrant for several months with proper care.' },
        { title: 'Botanical Heritage', description: 'Originally cultivated by the Aztecs for dyes and fever reduction, it has a rich cultural history.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Provide bright, indirect sunlight. A sunny window facing east or west is ideal. Avoid direct, harsh afternoon sun.' },
          { title: 'Watering', description: 'Water thoroughly when the top inch of soil feels dry. Never let the plant sit in standing water, as root rot will occur quickly.' },
          { title: 'Temperature', description: 'Keep between 15-22°C. They are highly sensitive to sudden temperature drops, cold drafts, and heating vents.' },
          { title: 'Styling', description: 'Perfect as a table centerpiece or elevated on a plant stand where its vibrant red canopy can be fully appreciated.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Needs morning sun and afternoon shade. Too much direct sun will bleach and burn the delicate bracts.' },
          { title: 'Watering', description: 'Outdoor soil dries faster; check moisture daily. Ensure excellent drainage.' },
          { title: 'Climate', description: 'Can only be grown outdoors year-round in frost-free, tropical or subtropical climates. Bring indoors before any frost hits.' },
          { title: 'Pruning', description: 'Prune heavily in early spring (leaving stems about 4-6 inches tall) to encourage bushy growth for the next winter season.' }
        ]
      }
    }
  },
  {
    id: 'aglaonema-red',
    slug: 'aglaonema',
    name: 'Aglaonema',
    botanicalName: 'Aglaonema commutatum',
    tagline: 'The Painted Beauty',
    description: 'A striking statement plant with variegated pink, red, and green leaves, renowned for its low maintenance and air-purifying qualities.',
    longDescription: 'The Aglaonema, also known as the Chinese Evergreen, is a masterpiece of natural design. With its broad, striking leaves splashed in shades of deep green, soft pink, and vibrant red, it acts as a living work of art. Cultivated for supreme resilience, it thrives beautifully in lower-light environments where other plants struggle. Potted in our signature matte ceramic planter, this Aglaonema delivers an instant pop of color and editorial-level sophistication to any luxury interior.',
    price: 1599,
    originalPrice: 1899,
    image: '/images/aglaonema.jpg',
    gallery: ['/images/aglaonema.jpg'],
    categories: ['Foliage', 'Low Light', 'Air Purifying'],
    care: {
      light: 'Low to bright indirect light (highly adaptable)',
      water: 'Allow the top 2 inches of soil to dry out between waterings',
      humidity: 'Average to high (appreciates occasional misting)',
      temperature: '18-26°C',
      difficulty: 'Easy',
      petSafe: false,
    },
    features: [
      'Stunning variegated foliage with pink and red hues',
      'Incredibly low-maintenance and forgiving',
      'Excellent natural air purifier',
      'Ships in premium matte ceramic planter',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the beautiful Aglaonema. Could you share more details?",
    inStock: true,
    badge: 'Low Light Hero',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Aglaonema commutatum',
        'Common Names': 'Chinese Evergreen',
        'Family': 'Araceae (Aroid family)',
        'Native Habitat': 'Tropical and subtropical regions of Asia and New Guinea',
        'Toxicity': 'Toxic to cats, dogs, and humans if ingested. Can cause oral irritation and swelling.'
      },
      keyFeatures: [
        { title: 'Stunning Variegation', description: 'Foliage boasts intricate patterns ranging from silver and green to vibrant splashes of pink and deep red.' },
        { title: 'Cane-Like Stems', description: 'As the plant matures, lower leaves drop to reveal thick, cane-like stems reminiscent of bamboo.' },
        { title: 'Compact Habit', description: 'Grows in a dense, bushy rosette form, making it an excellent floor or tabletop plant.' },
        { title: 'Low-Light Tolerance', description: 'One of the few brightly colored plants that can maintain its beauty in relatively dim environments.' }
      ],
      whyThisPlant: [
        { title: 'The Forgiving Beauty', description: 'Aglaonemas are notoriously easy to care for, tolerating neglect and erratic watering better than most houseplants.' },
        { title: 'Air Purifying', description: 'Recognized for its ability to filter indoor air pollutants, contributing to a healthier home environment.' },
        { title: 'Vibrant Decor', description: 'The striking pink and red varieties provide a permanent pop of color without the need for delicate flowers.' },
        { title: 'Adaptable', description: 'Thrives in both humid bathrooms and dry, air-conditioned offices.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Highly adaptable. Green/silver varieties tolerate very low light; pink/red varieties need medium to bright indirect light to maintain color.' },
          { title: 'Watering', description: 'Allow the top 2 inches of soil to dry out completely before watering. Very forgiving if you forget to water occasionally.' },
          { title: 'Soil', description: 'A standard, well-draining indoor potting mix is perfect. It is not overly fussy about soil composition.' },
          { title: 'Styling', description: 'Looks spectacular in a minimalist ceramic pot where its wildly colored leaves can serve as a focal point.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Must be placed in full to partial shade. Direct sunlight will quickly scorch the leaves and fade the variegation.' },
          { title: 'Watering', description: 'Requires consistent moisture when grown outdoors in warm climates. Do not let it dry out completely.' },
          { title: 'Temperature', description: 'Highly sensitive to cold. Must be kept above 15°C. In non-tropical regions, it must be a summer patio plant only.' },
          { title: 'Placement', description: 'Excellent as a lush underplanting beneath larger shade trees in a tropical garden setting.' }
        ]
      }
    }
  },
  {
    id: 'alocasia-amazonica',
    slug: 'alocasia',
    name: 'Alocasia',
    botanicalName: 'Alocasia amazonica',
    tagline: 'The Elephant Ear',
    description: 'A dramatic architectural plant featuring large, arrowhead-shaped dark green leaves with striking, high-contrast white veins.',
    longDescription: 'The Alocasia, commonly known as the Elephant Ear or African Mask plant, is a true showstopper. Renowned for its dramatic, architectural foliage, it features large, arrowhead-shaped leaves with a deep, almost black-green hue, bisected by thick, luminous white veins. Native to tropical rainforests, it brings an exotic, structural presence to any room. Potted in our premium ceramic vessel, this plant acts as a living sculpture, demanding attention and elevating your interior design to new heights.',
    price: 1999,
    originalPrice: 2499,
    image: '/images/alocasia.jpg',
    gallery: ['/images/alocasia.jpg'],
    categories: ['Statement', 'Foliage', 'Collector'],
    care: {
      light: 'Bright indirect light (avoid direct harsh sun)',
      water: 'Keep soil evenly moist but never soggy; reduce watering in winter',
      humidity: 'High (requires regular misting or a humidifier)',
      temperature: '18-28°C (keep away from cold drafts)',
      difficulty: 'Moderate',
      petSafe: false,
    },
    features: [
      'Striking arrowhead-shaped dark green leaves',
      'High-contrast, luminous white venation',
      'Acts as a dramatic, living architectural sculpture',
      'Ships in premium matte ceramic planter',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the striking Alocasia. Could you share more details?",
    inStock: true,
    badge: 'Collector’s Pick',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Alocasia amazonica (Polly)',
        'Common Names': 'Elephant Ear, African Mask Plant',
        'Family': 'Araceae (Aroid family)',
        'Native Habitat': 'Hybrid (parents native to Southeast Asian rainforests)',
        'Toxicity': 'Toxic to cats, dogs, and humans if ingested. Contains calcium oxalate crystals.'
      },
      keyFeatures: [
        { title: 'Architectural Leaves', description: 'Features dramatic, dark green, arrow-shaped leaves with distinct, wavy edges.' },
        { title: 'Striking Venation', description: 'The leaves are bisected by thick, luminous white or pale green veins that create a stark contrast.' },
        { title: 'Rhizomatous Growth', description: 'Grows from a central rhizome/corm, meaning it can go dormant and completely regrow.' },
        { title: 'Compact Size', description: 'Unlike giant outdoor Elephant Ears, the "Polly" variety stays relatively compact, perfect for indoor styling.' }
      ],
      whyThisPlant: [
        { title: 'Living Sculpture', description: 'Its rigid, highly defined leaves make it look like a piece of modern art in any room.' },
        { title: 'Collector’s Favorite', description: 'Highly sought after by plant enthusiasts for its exotic and unusual appearance.' },
        { title: 'Interior Impact', description: 'Instantly adds a tropical, high-design feel to minimalist or contemporary spaces.' },
        { title: 'Rewarding Growth', description: 'Watching a new leaf unfurl from its stem is a rapid and incredibly satisfying process.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Needs bright, indirect light. Too little light causes leggy stems; direct sun will scorch the leaves.' },
          { title: 'Watering', description: 'Keep the soil evenly moist but never soggy. Water when the top inch feels just barely dry.' },
          { title: 'Humidity', description: 'Requires very high humidity (60%+). Use a pebble tray or humidifier nearby to prevent crispy leaf edges.' },
          { title: 'Dormancy', description: 'May drop leaves in winter or if stressed. Do not throw it away! Reduce watering and wait for it to resprout in spring.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Requires full shade or dappled sunlight under a canopy. Protect from all direct afternoon sun.' },
          { title: 'Watering', description: 'Outdoors, it will consume water quickly. Check daily during hot summer months.' },
          { title: 'Climate', description: 'Strictly tropical. Must be moved indoors when temperatures drop below 15°C.' },
          { title: 'Wind', description: 'Keep protected from strong winds which can easily snap their rigid, fleshy stems.' }
        ]
      }
    }
  },
  {
    id: 'areca-palm',
    slug: 'areca-palm',
    name: 'Areca Palm',
    botanicalName: 'Dypsis lutescens',
    tagline: 'The Tropical Oasis',
    description: 'A towering, majestic palm with feathery green fronds that brings a lush, tropical ambiance and powerful air-purifying qualities to any space.',
    longDescription: 'The Areca Palm, often called the Butterfly Palm, instantly transforms any room into a tropical oasis. Known for its cluster of smooth, golden-hued stems and voluminous, arching fronds, it adds unparalleled vertical scale and organic texture to luxury interiors. Beyond its stunning architectural presence, the Areca Palm is celebrated as one of the most efficient natural air purifiers, making it as functional as it is beautiful. Cultivated to peak health and potted in our premium matte ceramic vessel, this towering botanical is the ultimate statement piece.',
    price: 3499,
    originalPrice: 4299,
    image: '/images/arecapalm.jpg',
    gallery: ['/images/arecapalm.jpg'],
    categories: ['Statement', 'Air Purifying', 'Pet Safe'],
    care: {
      light: 'Bright indirect light (can tolerate some morning sun)',
      water: 'Keep soil evenly moist, allowing the top inch to dry between waterings',
      humidity: 'High (thrives with regular misting)',
      temperature: '18-29°C (sensitive to cold drafts)',
      difficulty: 'Moderate',
      petSafe: true,
    },
    features: [
      'Towering architectural presence with feathery fronds',
      'Top-rated natural air purifier (NASA Clean Air Study)',
      '100% safe for cats and dogs',
      'Ships in a large, premium matte ceramic planter',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the majestic Areca Palm. Could you share more details?",
    inStock: true,
    badge: 'Pet Safe',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Dypsis lutescens',
        'Common Names': 'Areca Palm, Butterfly Palm, Golden Cane Palm',
        'Family': 'Arecaceae (Palm family)',
        'Native Habitat': 'Madagascar',
        'Toxicity': 'Non-toxic. 100% safe for cats, dogs, and humans.'
      },
      keyFeatures: [
        { title: 'Feathery Fronds', description: 'Produces numerous arching, pinnate leaves that flutter beautifully in a gentle breeze.' },
        { title: 'Golden Canes', description: 'The stems often have a golden-yellow hue, resembling bamboo canes as they mature.' },
        { title: 'Clustering Habit', description: 'Grows multiple stems from the base, creating a dense, bushy, and full appearance.' },
        { title: 'Rapid Growth', description: 'One of the faster-growing indoor palms when provided with adequate light and humidity.' }
      ],
      whyThisPlant: [
        { title: 'Maximum Air Purification', description: 'Consistently ranked by NASA as one of the best plants for removing indoor air toxins like formaldehyde.' },
        { title: 'Pet-Friendly Grandeur', description: 'It is rare to find such a massive, statement-making plant that is completely safe for pets.' },
        { title: 'Tropical Canopy', description: 'Adds instant height and lush volume, softening empty corners and creating a jungle-like canopy.' },
        { title: 'Natural Humidifier', description: 'Transpires at a high rate, naturally increasing the humidity in dry, air-conditioned rooms.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Requires bright, indirect sunlight. A south or west-facing room with filtered light is ideal.' },
          { title: 'Watering', description: 'Keep the soil slightly moist. Water when the top inch of soil is dry, but never let it sit in water.' },
          { title: 'Humidity', description: 'Loves high humidity. Brown leaf tips are a common sign of air that is too dry.' },
          { title: 'Water Quality', description: 'Sensitive to fluoridated or chlorinated tap water. Use filtered water or let tap water sit out for 24 hours.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Can acclimate to full sun, but thrives best in partial shade to maintain its lush green color.' },
          { title: 'Watering', description: 'Requires frequent, deep watering when planted in the ground or kept outdoors in pots.' },
          { title: 'Soil', description: 'Needs well-draining, sandy loam soil. Amend heavy clay soils to prevent root rot.' },
          { title: 'Climate', description: 'Only hardy in tropical zones. Protect from frost and freezing temperatures at all costs.' }
        ]
      }
    }
  },
  {
    id: 'anthurium-red',
    slug: 'anthurium',
    name: 'Anthurium',
    botanicalName: 'Anthurium andraeanum',
    tagline: 'The Flamingo Flower',
    description: 'A striking tropical plant famous for its glossy, heart-shaped red spathes and deep green foliage, bringing year-round color to any space.',
    longDescription: 'The Anthurium, famously known as the Flamingo Flower, is a masterpiece of tropical elegance. It is celebrated for its incredibly glossy, heart-shaped red spathes (often mistaken for flowers) that stand in striking contrast to its lush, deep green leaves. Known for being one of the longest-blooming houseplants, the Anthurium provides brilliant, year-round color. Potted in our signature matte ceramic vessel, this plant serves as a luxurious, vibrant centerpiece that instantly elevates the mood and aesthetic of any interior.',
    price: 1499,
    originalPrice: 1799,
    image: '/images/anthurium.jpg',
    gallery: ['/images/anthurium.jpg'],
    categories: ['Flowering', 'Low Light', 'Gift Favorite'],
    care: {
      light: 'Bright indirect light (more light equals more blooms)',
      water: 'Keep soil slightly moist, allowing the top inch to dry out between waterings',
      humidity: 'High (thrives in humid environments like bathrooms or with misting)',
      temperature: '18-29°C (avoid cold drafts below 15°C)',
      difficulty: 'Moderate',
      petSafe: false,
    },
    features: [
      'Iconic glossy, heart-shaped vibrant red spathes',
      'One of the longest-blooming houseplants available',
      'Excellent for adding year-round tropical color',
      'Ships in a premium matte ceramic planter',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the vibrant Anthurium. Could you share more details?",
    inStock: true,
    badge: 'Long-Lasting Blooms',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Anthurium andraeanum',
        'Common Names': 'Flamingo Flower, Painter’s Palette, Laceleaf',
        'Family': 'Araceae (Aroid family)',
        'Native Habitat': 'Rainforests of Colombia and Ecuador',
        'Toxicity': 'Toxic to cats, dogs, and humans. Ingestion causes severe mouth pain and swelling.'
      },
      keyFeatures: [
        { title: 'Glossy Spathes', description: 'The bright red "flowers" are actually modified waxy leaves called spathes, designed to attract pollinators.' },
        { title: 'Spadix Center', description: 'The true flowers are tiny and densely packed on the yellow, tail-like spike (spadix) protruding from the spathe.' },
        { title: 'Heart-Shaped Foliage', description: 'Even when not blooming, the plant features stunning, leathery, dark green heart-shaped leaves.' },
        { title: 'Epiphytic Roots', description: 'In the wild, they grow on other trees, meaning they have thick aerial roots adapted for air circulation.' }
      ],
      whyThisPlant: [
        { title: 'Continuous Blooms', description: 'Under optimal conditions, an Anthurium can produce its striking "blooms" almost year-round.' },
        { title: 'Exceptional Durability', description: 'The waxy spathes are incredibly tough and can last on the plant for months before fading.' },
        { title: 'Vibrant Focal Point', description: 'Provides a massive pop of vibrant color that breaks up the monotony of all-green plant collections.' },
        { title: 'Cut Flower Substitute', description: 'Offers the beauty of an exotic bouquet but with the longevity of a potted plant.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Requires bright, indirect light to bloom. Too little light results in lush green leaves but no red flowers.' },
          { title: 'Watering', description: 'Water thoroughly when the top 1-2 inches of soil are dry. Ensure excess water drains away completely.' },
          { title: 'Soil', description: 'Needs a highly aerated, chunky potting mix (like an orchid or aroid mix) to simulate its epiphytic nature.' },
          { title: 'Humidity', description: 'Thrives in higher humidity environments. Brown edges indicate the air is too dry.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Must be kept in deep shade or dappled light. Direct sun will severely burn the foliage and spathes.' },
          { title: 'Watering', description: 'Requires daily watering in hot weather due to their highly porous, chunky soil mix.' },
          { title: 'Climate', description: 'Strictly tropical. Highly sensitive to cold; must be brought indoors if temperatures dip below 15°C.' },
          { title: 'Placement', description: 'Excellent for shaded patios, lanais, or as an understory accent in a dense tropical garden.' }
        ]
      }
    }
  },
  {
    id: 'ming-aralia',
    slug: 'aralia',
    name: 'Aralia',
    botanicalName: 'Polyscias fruticosa',
    tagline: 'The Bonsai Beauty',
    description: 'An elegant, upright plant featuring deeply cut, feathery leaves on twisting woody stems, offering a sophisticated, bonsai-like aesthetic.',
    longDescription: 'The Ming Aralia is a masterclass in structural elegance. Unlike broad-leafed tropicals, it features incredibly fine, lacy foliage that cascades from twisting, gnarled woody stems. This unique growth habit gives it the sophisticated, meditative appearance of a large, ancient bonsai tree. Cultivated for maximum textural impact, it requires minimal pruning to maintain its gorgeous columnar shape. Set in our premium matte ceramic planter, the Aralia is the perfect choice for those seeking refined, sculptural greenery.',
    price: 1899,
    originalPrice: 2199,
    image: '/images/aralia.jpg',
    gallery: ['/images/aralia.jpg'],
    categories: ['Statement', 'Foliage', 'Pet Safe'],
    care: {
      light: 'Bright indirect light (too little light causes leaf drop)',
      water: 'Water thoroughly, then allow the top 2 inches of soil to dry out completely',
      humidity: 'High (benefits greatly from regular misting or a pebble tray)',
      temperature: '18-29°C (very sensitive to cold drafts)',
      difficulty: 'Expert',
      petSafe: true,
    },
    features: [
      'Stunning bonsai-like twisted woody stems',
      'Delicate, feathery, highly textured foliage',
      'Perfect for narrow spaces due to upright growth',
      'Ships in a premium matte ceramic planter',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the elegant Aralia. Could you share more details?",
    inStock: true,
    badge: 'Structural Elegance',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Polyscias fruticosa',
        'Common Names': 'Ming Aralia, Chinese Aralia',
        'Family': 'Araliaceae (Aralia family)',
        'Native Habitat': 'India to Polynesia',
        'Toxicity': 'Mildly toxic to cats and dogs if ingested. Can cause gastrointestinal upset.'
      },
      keyFeatures: [
        { title: 'Bonsai-Like Form', description: 'Naturally grows with twisted, woody trunks and a multi-branching structure.' },
        { title: 'Lacy Foliage', description: 'Leaves are finely divided, creating a feathery, fern-like texture that is highly ornamental.' },
        { title: 'Columnar Growth', description: 'Grows vertically rather than horizontally, making it perfect for narrow indoor spaces.' },
        { title: 'Aromatic Roots', description: 'In some cultures, its roots are valued for their distinct, parsley-like aroma and traditional medicinal uses.' }
      ],
      whyThisPlant: [
        { title: 'Sculptural Masterpiece', description: 'Adds an immediate sense of refined, Zen-like structural elegance without the intense maintenance of a true bonsai.' },
        { title: 'Textural Contrast', description: 'Its fine, lacy leaves provide a stunning contrast against the broad leaves of typical tropical houseplants.' },
        { title: 'Slow & Steady', description: 'Its slow growth rate means it will maintain its carefully curated shape for a long time.' },
        { title: 'Space Efficient', description: 'Perfect for tight corners where a wide, bushy plant simply would not fit.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Thrives in bright, indirect light. Will tolerate medium light, but may drop leaves if it is too dark.' },
          { title: 'Watering', description: 'Highly susceptible to root rot. Allow the top 2 inches of soil to dry out completely before watering deeply.' },
          { title: 'Humidity', description: 'Appreciates higher humidity to keep its delicate leaves from crisping. Use a pebble tray in winter.' },
          { title: 'Drafts', description: 'Extremely sensitive to cold drafts and sudden temperature changes. Keep away from AC vents.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Needs partial to full shade. Direct sun will quickly scorch the delicate, lacy foliage.' },
          { title: 'Watering', description: 'Ensure the pot has excellent drainage. Outdoor rain can quickly overwater it.' },
          { title: 'Climate', description: 'Only hardy outdoors in tropical zones (USDA 11+). Protect from any temperatures below 15°C.' },
          { title: 'Pruning', description: 'Can be pruned in early spring to encourage branching and maintain its dense, columnar form.' }
        ]
      }
    }
  },
  {
    id: 'calathea-peacock',
    slug: 'calathea',
    name: 'Calathea',
    botanicalName: 'Calathea makoyana',
    tagline: 'The Peacock Plant',
    description: 'A masterpiece of nature featuring large, oval leaves with intricate, hand-painted-looking patterns in alternating shades of green and deep purple undersides.',
    longDescription: 'The Calathea, often referred to as the Peacock Plant, is renowned for its extraordinarily ornate foliage. Each leaf looks as though it was meticulously painted by hand, displaying a complex rhythm of light and dark green stripes on top, contrasting beautifully with rich, deep purple undersides. Known as a "prayer plant," its leaves engage in nyctinasty—folding up at night and laying flat during the day. Potted in our premium matte ceramic vessel, the Calathea is an absolute showstopper for plant collectors and design enthusiasts alike.',
    price: 1699,
    originalPrice: 2099,
    image: '/images/calathea.jpg',
    gallery: ['/images/calathea.jpg'],
    categories: ['Foliage', 'Collector', 'Pet Safe'],
    care: {
      light: 'Medium to bright indirect light (direct sun will fade the patterns)',
      water: 'Keep soil consistently moist but not soggy; prefers filtered or distilled water',
      humidity: 'Very High (requires a humidifier or frequent misting to prevent crisp edges)',
      temperature: '18-26°C (avoid cold drafts and sudden temperature drops)',
      difficulty: 'Expert',
      petSafe: true,
    },
    features: [
      'Intricate, highly patterned foliage with deep purple undersides',
      'Fascinating daily movement (nyctinasty)',
      '100% safe for cats and dogs',
      'Ships in a premium matte ceramic planter',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the stunning Calathea. Could you share more details?",
    inStock: true,
    badge: 'Collector’s Pick',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Calathea makoyana (Goeppertia makoyana)',
        'Common Names': 'Peacock Plant, Cathedral Windows',
        'Family': 'Marantaceae (Prayer Plant family)',
        'Native Habitat': 'Eastern Brazil',
        'Toxicity': 'Non-toxic. 100% safe for cats, dogs, and humans.'
      },
      keyFeatures: [
        { title: 'Painted Foliage', description: 'Leaves feature dark green lines stretching from the midrib, resembling the intricate tail feathers of a peacock.' },
        { title: 'Purple Undersides', description: 'The striking patterns on top are mirrored on the bottom in a rich, translucent purplish-red.' },
        { title: 'Nyctinasty', description: 'Leaves fold upward at night (like hands in prayer) and lower during the day to catch the light.' },
        { title: 'Paper-Thin Leaves', description: 'The leaves are exceptionally thin and delicate, making them highly responsive to environmental changes.' }
      ],
      whyThisPlant: [
        { title: 'High-Design Aesthetic', description: 'One of the most beautifully patterned plants in the world; looks like a living painting.' },
        { title: 'Dynamic Movement', description: 'Watching the leaves actively move throughout the day is a fascinating experience.' },
        { title: 'Pet Safe Beauty', description: 'Provides exotic, collector-level aesthetics without any risk to your furry friends.' },
        { title: 'Low-Light Tolerant', description: 'Perfect for brightening up dimmer corners where sun-loving plants would fail.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Prefers medium to bright indirect light. Direct sun will bleach the vivid patterns and burn the thin leaves.' },
          { title: 'Watering', description: 'Soil must remain evenly moist. Never let it dry out completely, but ensure it is not sitting in soggy soil.' },
          { title: 'Water Quality', description: 'Highly sensitive to hard water, chlorine, and fluoride. Use distilled or rainwater to prevent brown leaf edges.' },
          { title: 'Humidity', description: 'Requires very high humidity (60%+). A humidifier is strongly recommended for this species.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Requires deep shade. Even dappled sunlight can be too harsh for its delicate leaves.' },
          { title: 'Watering', description: 'Outdoor heat will dry it out rapidly. Check moisture levels daily.' },
          { title: 'Environment', description: 'Must be sheltered from wind, which will shred the thin leaves instantly.' },
          { title: 'Climate', description: 'Strictly tropical. Do not leave outside if temperatures drop below 16°C.' }
        ]
      }
    }
  },
  {
    id: 'carnation-potted',
    slug: 'carnation',
    name: 'Carnation',
    botanicalName: 'Dianthus caryophyllus',
    tagline: 'The Divine Flower',
    description: 'A beautifully potted blooming plant featuring deeply ruffled, fringed petals in soft pastel hues, known for their delicate, spicy-sweet fragrance.',
    longDescription: 'The Carnation, historically known as the "Flower of the Gods," brings a timeless, romantic aesthetic to any space. Unlike cut flowers that fade quickly, our potted Dianthus provides weeks of continuous, lush blooms with beautifully ruffled, fringed edges in soft pastel pinks and creams. Beyond their visual appeal, these blossoms emit a subtle, spicy-sweet clove-like fragrance that gently perfumes the room. Presented in our premium matte ceramic planter, it makes an unforgettable, long-lasting gift or a charming addition to your own botanical collection.',
    price: 999,
    originalPrice: 1299,
    image: '/images/carnation.jpg',
    gallery: ['/images/carnation.jpg'],
    categories: ['Flowering', 'Gift Favorite', 'Pet Safe'],
    care: {
      light: 'Bright indirect to full sun (requires plenty of light for continuous blooming)',
      water: 'Water when the top inch of soil feels dry; avoid getting water on the foliage',
      humidity: 'Average (does not require high humidity; needs good air circulation)',
      temperature: '10-24°C (prefers cooler temperatures to prolong the blooms)',
      difficulty: 'Easy',
      petSafe: true,
    },
    features: [
      'Prolific, long-lasting ruffled blooms',
      'Produces a delightful, spicy-sweet fragrance',
      '100% safe for cats and dogs',
      'Ships in a premium matte ceramic planter',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the beautiful potted Carnation. Could you share more details?",
    inStock: true,
    badge: 'Fragrant Blooms',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Dianthus caryophyllus',
        'Common Names': 'Carnation, Clove Pink',
        'Family': 'Caryophyllaceae (Pink family)',
        'Native Habitat': 'Mediterranean region',
        'Toxicity': 'Mildly toxic to cats and dogs. Can cause mild gastrointestinal issues and dermatitis.'
      },
      keyFeatures: [
        { title: 'Ruffled Petals', description: 'Blooms feature highly textured, fringed edges that give them a dense, pom-pom appearance.' },
        { title: 'Spicy Fragrance', description: 'Many varieties emit a distinct, warm, clove-like scent that naturally perfumes the air.' },
        { title: 'Blue-Green Foliage', description: 'The stems and slender leaves have a unique glaucous (bluish-grey-green) hue.' },
        { title: 'Node Swelling', description: 'The stems have noticeable, swollen joints (nodes) where the leaves attach.' }
      ],
      whyThisPlant: [
        { title: 'Symbol of Love', description: 'Historically associated with love, fascination, and distinction, making it a highly meaningful gift.' },
        { title: 'Long-Lasting', description: 'Potted carnations outlast cut bouquets by weeks or even months, providing extended joy.' },
        { title: 'Sensory Delight', description: 'Appeals to both sight and smell, offering a multi-sensory experience rare in typical houseplants.' },
        { title: 'Compact Color', description: 'Perfectly sized for windowsills, desks, or as a vibrant centerpiece.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Requires bright, direct sunlight for several hours a day to continue producing new buds.' },
          { title: 'Watering', description: 'Water when the top inch of soil feels dry. Water the soil directly; avoid getting water on the leaves or flowers.' },
          { title: 'Temperature', description: 'Prefers cooler indoor temperatures (10-20°C). Heat can cause the flowers to fade quickly.' },
          { title: 'Deadheading', description: 'Pinch off old, faded flowers at the base of their stem to encourage the plant to produce more blooms.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Loves full sun but benefits from light afternoon shade in very hot climates.' },
          { title: 'Soil', description: 'Requires excellent drainage. Slightly alkaline soil is preferred; do not plant in heavy, wet clay.' },
          { title: 'Air Circulation', description: 'Needs good spacing to allow air flow around the foliage to prevent fungal diseases.' },
          { title: 'Winter Care', description: 'Many varieties are frost-hardy, but potted ones should be protected or moved to a sheltered spot during hard freezes.' }
        ]
      }
    }
  },
  {
    id: 'chrysanthemum-autumn',
    slug: 'chrysanthemum',
    name: 'Chrysanthemum',
    botanicalName: 'Chrysanthemum morifolium',
    tagline: 'The Autumn Crown',
    description: 'A densely packed, brilliantly blooming potted plant featuring rich golden-yellow and deep burgundy petals, perfect for adding vibrant, seasonal color indoors.',
    longDescription: 'The Chrysanthemum is a symbol of joy, optimism, and the beauty of autumn. Our premium potted varieties are carefully cultivated to produce an explosion of densely packed blooms in rich, sophisticated tones of golden-yellow and deep burgundy. Unlike standard garden mums, these are selected for their elegant, jewel-toned colors and long-lasting indoor performance. Housed in our signature matte ceramic planter, this Chrysanthemum instantly elevates any room, providing a lush, textural burst of color that feels both festive and exceptionally refined.',
    price: 1199,
    originalPrice: 1499,
    image: '/images/chrysanthemum.jpg',
    gallery: ['/images/chrysanthemum.jpg'],
    categories: ['Flowering', 'Gift Favorite'],
    care: {
      light: 'Bright indirect light to full sun (maximizes bloom longevity)',
      water: 'Keep the soil evenly moist; water when the top half-inch feels dry',
      humidity: 'Average (standard indoor humidity is fine)',
      temperature: '13-21°C (prefers cooler environments to keep flowers fresh)',
      difficulty: 'Easy',
      petSafe: false,
    },
    features: [
      'Produces a massive, dense canopy of jewel-toned blooms',
      'Provides weeks of vibrant, sophisticated indoor color',
      'Symbolizes joy and longevity',
      'Ships in a premium matte ceramic planter',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the beautifully blooming Chrysanthemum. Could you share more details?",
    inStock: true,
    badge: 'Seasonal Favorite',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Chrysanthemum morifolium',
        'Common Names': 'Mum, Chrysanthemum',
        'Family': 'Asteraceae (Daisy family)',
        'Native Habitat': 'East Asia (specifically China)',
        'Toxicity': 'Toxic to cats, dogs, and horses if ingested. Causes vomiting, diarrhea, and hyper-salivation.'
      },
      keyFeatures: [
        { title: 'Composite Flower Heads', description: 'What looks like a single flower is actually a cluster of hundreds of tiny individual flowers.' },
        { title: 'Incredible Density', description: 'Potted varieties are bred to produce a massive, rounded canopy of nearly solid color.' },
        { title: 'Photoperiodic Bloomers', description: 'They naturally bloom in late summer and autumn as the days get shorter and nights get longer.' },
        { title: 'Lobed Foliage', description: 'The leaves are deeply lobed, aromatic, and dark green, providing a lush backdrop for the flowers.' }
      ],
      whyThisPlant: [
        { title: 'Autumn Essential', description: 'The undisputed king of autumn flowers, bringing seasonal warmth and vibrant color indoors.' },
        { title: 'Symbol of Joy', description: 'In many Asian cultures, it symbolizes long life, joy, and optimism, making it a thoughtful gift.' },
        { title: 'Air Purifying', description: 'NASA studies have shown Chrysanthemums are excellent at removing indoor air toxins like benzene.' },
        { title: 'Long-Lasting Display', description: 'The dense flower heads can remain vibrant for 4 to 8 weeks with proper indoor care.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Requires bright, indirect light. Placing it near a sunny window helps buds open, but avoid scorching heat.' },
          { title: 'Watering', description: 'They are thirsty plants! Check the soil daily and water when the top half-inch feels dry.' },
          { title: 'Temperature', description: 'Keep the room cool (13-21°C). Warm temperatures will cause the flowers to wilt and fade much faster.' },
          { title: 'Deadheading', description: 'Remove spent, shriveled blooms promptly to redirect energy to unopened buds and maintain a tidy look.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Loves full sun. Needs at least 6 hours of direct sunlight a day to thrive outside.' },
          { title: 'Watering', description: 'Requires frequent watering, especially if kept in a pot. Do not let it wilt completely.' },
          { title: 'Planting', description: 'If planting in the garden, do so in spring to allow roots to establish before winter.' },
          { title: 'Pruning', description: 'Pinch back the stems early in the summer to encourage a bushier plant with more blooms in the fall.' }
        ]
      }
    }
  },
  {
    id: 'dahlia-pinnata',
    slug: 'dahlia',
    name: 'Dahlia',
    botanicalName: 'Dahlia pinnata',
    tagline: 'The Geometric Bloom',
    description: 'A spectacular potted Dahlia featuring massive, intricate, perfectly symmetrical geometric petals in a mesmerizing blend of deep magenta, peach, and coral.',
    longDescription: 'The Dahlia is nature’s testament to mathematical beauty. Known for their intricate, perfectly symmetrical geometric petal structures, these massive blooms are a mesmerizing focal point. Our potted Dahlias are cultivated for large, dinnerplate-style blooms that gradient beautifully from deep magenta at the edges to soft peach and coral at the center. Potted in a premium matte dark grey ceramic planter, this striking plant brings a level of dramatic, high-end floral artistry indoors, offering a breathtaking display that commands attention.',
    price: 1899,
    originalPrice: 2299,
    image: '/images/dahlia.jpg',
    gallery: ['/images/dahlia.jpg'],
    categories: ['Statement', 'Flowering'],
    care: {
      light: 'Bright indirect to full sun (requires ample light to support massive blooms)',
      water: 'Keep the soil evenly moist but never soggy; water deeply when the top inch is dry',
      humidity: 'Average to High (benefits from increased humidity during blooming)',
      temperature: '18-24°C (protect from intense afternoon heat)',
      difficulty: 'Moderate',
      petSafe: false,
    },
    features: [
      'Produces massive, geometrically perfect blooms',
      'Mesmerizing gradient of magenta, peach, and coral',
      'Provides a dramatic, high-end floral statement',
      'Ships in a premium matte dark grey ceramic planter',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the spectacular potted Dahlia. Could you share more details?",
    inStock: true,
    badge: 'Statement Bloom',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Dahlia pinnata',
        'Common Names': 'Dahlia',
        'Family': 'Asteraceae (Daisy family)',
        'Native Habitat': 'Highlands of Mexico and Central America',
        'Toxicity': 'Mildly toxic to cats and dogs if ingested. Can cause mild gastrointestinal upset and dermatitis.'
      },
      keyFeatures: [
        { title: 'Mathematical Symmetry', description: 'Famous for perfectly arranged, geometric petals that follow the Fibonacci sequence.' },
        { title: 'Massive Blooms', description: 'Some varieties (like "dinnerplate" dahlias) can produce flowers up to 10-12 inches across.' },
        { title: 'Tuberous Roots', description: 'They grow from underground starchy tubers, similar to potatoes, which store energy for rapid growth.' },
        { title: 'Hollow Stems', description: 'The thick, sturdy stems are actually hollow, making them susceptible to snapping in high winds.' }
      ],
      whyThisPlant: [
        { title: 'Unmatched Drama', description: 'Few plants offer the sheer visual impact, scale, and intense color saturation of a Dahlia in full bloom.' },
        { title: 'Floral Artistry', description: 'The intricate petal structures look almost artificial, adding a high-end, sculptural element to any room.' },
        { title: 'Continuous Show', description: 'With proper deadheading, they will continually produce new, massive blooms throughout the season.' },
        { title: 'Breathtaking Gift', description: 'A potted Dahlia is a show-stopping alternative to traditional flower bouquets for special occasions.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Requires maximum bright light. Keep immediately adjacent to your sunniest window.' },
          { title: 'Watering', description: 'Water deeply when the top inch of soil is dry. They are heavy drinkers while blooming.' },
          { title: 'Airflow', description: 'Requires good air circulation to prevent powdery mildew on the leaves.' },
          { title: 'Support', description: 'Large blooms may become top-heavy. Use small bamboo stakes if the stems begin to lean.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Requires full sun (6-8 hours daily), but appreciates afternoon shade in extremely hot climates.' },
          { title: 'Watering', description: 'Water deeply at the base of the plant 2-3 times a week. Do not wet the foliage.' },
          { title: 'Feeding', description: 'Heavy feeders. Apply a low-nitrogen, high-phosphorus fertilizer every 3-4 weeks to boost blooms.' },
          { title: 'Winterizing', description: 'Tubers must be dug up and stored indoors before the first frost in cold climates (USDA zones below 8).' }
        ]
      }
    }
  },
  {
    id: 'bird-nest-fern',
    slug: 'bird-nest-fern',
    name: 'Bird\'s Nest Fern',
    botanicalName: 'Asplenium nidus',
    tagline: 'The Tropical Rosette',
    description: 'A lush, structural fern with large, bright apple-green, wavy fronds that unfurl beautifully from a central rosette, offering a vibrant burst of life.',
    longDescription: 'Unlike the delicate, feathery appearance of typical ferns, the Bird’s Nest Fern (Asplenium nidus) is beloved for its bold, structural look. Its large, undivided, crinkled fronds boast a brilliant apple-green hue, slowly unfurling from a dense central rosette resembling a bird\'s nest. This epiphytic beauty brings an immediate sense of the dense, humid rainforest indoors. Potted in our signature matte ceramic planter, it serves as a highly textured, vibrant accent piece that breathes fresh life into any shaded corner.',
    price: 1399,
    originalPrice: 1699,
    image: '/images/bird_nest_fern.jpg',
    gallery: ['/images/bird_nest_fern.jpg'],
    categories: ['Foliage', 'Low Light', 'Pet Safe'],
    care: {
      light: 'Low to medium indirect light (direct sun will scorch the fronds)',
      water: 'Keep the soil consistently moist, but water around the edges, avoiding the center "nest" to prevent rot',
      humidity: 'High (thrives in bathrooms or with a pebble tray)',
      temperature: '18-27°C (avoid cold drafts and sudden drops)',
      difficulty: 'Moderate',
      petSafe: true,
    },
    features: [
      'Bold, wavy, bright apple-green fronds',
      'Unique central rosette growth habit',
      '100% safe for cats and dogs',
      'Ships in a premium matte ceramic planter',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the beautiful Bird's Nest Fern. Could you share more details?",
    inStock: true,
    badge: 'Lush Texture',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Asplenium nidus',
        'Common Names': 'Bird’s Nest Fern',
        'Family': 'Aspleniaceae (Spleenwort family)',
        'Native Habitat': 'Tropical East Africa, Southeast Asia, Australia, Hawaii',
        'Toxicity': 'Non-toxic. 100% safe for cats, dogs, and humans.'
      },
      keyFeatures: [
        { title: 'Undivided Fronds', description: 'Unlike most ferns, it has solid, wide, lance-shaped leaves instead of feathery divided leaflets.' },
        { title: 'Central Rosette', description: 'New fronds unfurl from a fuzzy, dark brown central core that resembles a bird’s nest.' },
        { title: 'Epiphytic Nature', description: 'In the wild, it grows high up in the crooks of rainforest trees, collecting rainwater in its rosette.' },
        { title: 'Bright Apple Green', description: 'The foliage maintains a brilliant, almost neon green color that lights up dark corners.' }
      ],
      whyThisPlant: [
        { title: 'Structural Fern', description: 'Provides the lushness of a fern but with a modern, structural, and tidy appearance.' },
        { title: 'Pet-Friendly', description: 'Completely safe for curious pets who might want to nibble on the leaves.' },
        { title: 'Bathroom Perfect', description: 'Thrives in the high-humidity, low-light environment typical of residential bathrooms.' },
        { title: 'No Shedding', description: 'Because it lacks tiny leaflets, it does not drop a mess of dry leaves like a Boston Fern might.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Requires low to medium indirect light. Direct sun will quickly scorch the leaves and turn them pale.' },
          { title: 'Watering', description: 'Water the soil around the edge of the pot. Never pour water directly into the central "nest" as it will rot.' },
          { title: 'Humidity', description: 'Requires very high humidity. Crispy brown edges indicate the air is too dry.' },
          { title: 'Soil', description: 'Needs a highly porous, airy mix (like orchid bark and peat) to mimic its natural epiphytic habitat.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Must be kept in deep, continuous shade. Excellent for covered patios.' },
          { title: 'Mounting', description: 'Can actually be mounted directly onto the trunk of a shady tree in tropical climates.' },
          { title: 'Watering', description: 'Outdoor heat and wind dry them out quickly; requires frequent, gentle watering.' },
          { title: 'Climate', description: 'Strictly tropical. Will not survive frost. Bring indoors before temperatures drop below 15°C.' }
        ]
      }
    }
  },
  {
    id: 'ficus-bonsai-retusa',
    slug: 'ficus-bonsai',
    name: 'Ficus Bonsai',
    botanicalName: 'Ficus retusa',
    tagline: 'The Sculptural Masterpiece',
    description: 'A mature, beautifully trained bonsai tree featuring an intricate, twisting trunk, exposed aerial roots, and a dense canopy of glossy green leaves.',
    longDescription: 'The Ficus Bonsai (Ficus retusa) is a living work of art that brings a sense of ancient wisdom and serene contemplation into the home. Carefully trained over many years, this mature specimen boasts a thick, sculptural trunk with dramatic, twisting aerial roots that grip the soil. Its canopy is dense with small, highly glossy, dark green leaves that create a beautiful, miniature tree silhouette. Presented in a premium, wide, shallow matte black ceramic bonsai planter, it is a sophisticated centerpiece that requires patience and rewards with unparalleled structural beauty.',
    price: 3499,
    originalPrice: 4299,
    image: '/images/ficus_bonsai.jpg',
    gallery: ['/images/ficus_bonsai.jpg'],
    categories: ['Statement', 'Foliage', 'Collector'],
    care: {
      light: 'Bright indirect to direct sunlight (thrives with plenty of light)',
      water: 'Water thoroughly when the top inch of soil is dry; do not let it sit in water',
      humidity: 'High (loves regular misting or placement on a humidity tray)',
      temperature: '15-29°C (keep away from cold drafts and heating vents)',
      difficulty: 'Expert',
      petSafe: false,
    },
    features: [
      'Mature specimen with a highly sculptural, twisting trunk',
      'Exposed, dramatic aerial root system',
      'Requires mindful, meditative care and pruning',
      'Ships in a premium wide, shallow matte black ceramic bonsai planter',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the stunning Ficus Bonsai. Could you share more details?",
    inStock: true,
    badge: 'Living Art',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Ficus retusa / Ficus microcarpa',
        'Common Names': 'Ginseng Ficus, Banyan Fig, Ficus Bonsai',
        'Family': 'Moraceae (Fig family)',
        'Native Habitat': 'Southeast Asia to Northern Australia',
        'Toxicity': 'Mildly toxic to cats and dogs if ingested. The milky sap can cause skin irritation.'
      },
      keyFeatures: [
        { title: 'Ginseng Roots', description: 'Famous for its thick, bulbous, exposed aerial roots that resemble ginseng roots.' },
        { title: 'Bonsai Training', description: 'Carefully pruned and wired over years to create a miniature tree silhouette.' },
        { title: 'Microcarpa Leaves', description: 'Produces small, highly glossy, dark green oval leaves that densely pack the canopy.' },
        { title: 'Banyan Habit', description: 'In extreme humidity, it can drop new aerial roots from its branches down to the soil.' }
      ],
      whyThisPlant: [
        { title: 'Instant Zen', description: 'Brings an immediate sense of calm, history, and meditative focus to a space.' },
        { title: 'Beginner Bonsai', description: 'Ficus species are among the easiest and most forgiving plants to learn the art of bonsai.' },
        { title: 'Living Sculpture', description: 'Every specimen is entirely unique, serving as a bespoke piece of living art.' },
        { title: 'Longevity', description: 'With proper care, a Ficus Bonsai can live for decades, often being passed down through generations.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Requires bright, indirect sunlight. A south or west-facing window is ideal. Will drop leaves in low light.' },
          { title: 'Watering', description: 'Water thoroughly when the top inch of soil is dry. Ensure the shallow bonsai pot drains completely.' },
          { title: 'Pruning', description: 'Regularly trim back long, leggy new growth to maintain the tight, compact tree shape.' },
          { title: 'Stability', description: 'Dislikes being moved. It may drop leaves when adjusting to a new spot, but will regrow them.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Can be placed outdoors in partial shade during the summer. Avoid harsh midday sun.' },
          { title: 'Watering', description: 'Shallow bonsai pots dry out rapidly outdoors. Check moisture daily.' },
          { title: 'Pests', description: 'Keep an eye out for scale or spider mites when transitioning the plant between indoors and outdoors.' },
          { title: 'Climate', description: 'Must be brought inside before nighttime temperatures drop below 12°C.' }
        ]
      }
    }
  },
  {
    id: 'fishtail-palm',
    slug: 'fishtail-palm',
    name: 'Fishtail Palm',
    botanicalName: 'Caryota mitis',
    tagline: 'The Graceful Giant',
    description: 'A tall, elegant palm recognized for its highly distinctive, jagged green leaflets that resemble the tail of a fish, growing on slender, clumping stems.',
    longDescription: 'The Fishtail Palm (Caryota mitis) stands out from other tropicals with its entirely unique, jagged-edged foliage. The bipinnate leaves are split into unusual, wedge-shaped segments that look remarkably like the tails of exotic fish swimming through the air. As a clumping palm, it sends up multiple slender, graceful stems, creating a dense but airy screen of greenery. Housed in a large, premium matte ceramic planter, it serves as a spectacular, large-scale architectural specimen that brings a sophisticated, untamed jungle aesthetic to grand interior spaces.',
    price: 4999,
    originalPrice: 5999,
    image: '/images/fishtail_palm.jpg',
    gallery: ['/images/fishtail_palm.jpg'],
    categories: ['Statement', 'Foliage'],
    care: {
      light: 'Bright indirect light (can tolerate some direct morning sun)',
      water: 'Keep the soil evenly moist during the growing season; reduce watering slightly in winter',
      humidity: 'High (requires ample humidity to keep the tips from browning)',
      temperature: '18-29°C (sensitive to cold and drafts)',
      difficulty: 'Expert',
      petSafe: false,
    },
    features: [
      'Entirely unique, jagged, fishtail-shaped leaflets',
      'Elegant, clumping multi-stem growth habit',
      'Perfect for filling large vertical spaces with lush greenery',
      'Ships in a premium large matte ceramic planter',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the spectacular Fishtail Palm. Could you share more details?",
    inStock: true,
    badge: 'Architectural Specimen',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Caryota mitis',
        'Common Names': 'Fishtail Palm, Clustered Fishtail Palm',
        'Family': 'Arecaceae (Palm family)',
        'Native Habitat': 'Southeast Asia',
        'Toxicity': 'Mildly toxic if ingested. The berries (rare indoors) contain oxalates that burn the mouth.'
      },
      keyFeatures: [
        { title: 'Bipinnate Leaves', description: 'One of the few palms with leaves that branch twice, creating a highly complex, layered canopy.' },
        { title: 'Jagged Leaflets', description: 'The individual leaflets are wedge-shaped with jagged, torn-looking edges resembling a fish\'s tail.' },
        { title: 'Clustering Habit', description: 'Naturally sends up multiple slender stems (canes) from the base, creating a dense screen.' },
        { title: 'Large Scale', description: 'Even indoors, they can easily reach 6 to 10 feet in height, requiring ample vertical space.' }
      ],
      whyThisPlant: [
        { title: 'Unique Aesthetics', description: 'Offers a distinctly different, more architectural look than standard feathery palms (like Areca or Majesty).' },
        { title: 'Vertical Impact', description: 'Perfect for homes with high ceilings, large entryways, or spacious living rooms.' },
        { title: 'Tropical Screening', description: 'Its dense, clumping habit makes it an excellent natural room divider.' },
        { title: 'Air Purifying', description: 'Like most large palms, it is excellent at filtering indoor air and increasing ambient humidity.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Requires bright, indirect sunlight. Too little light will halt growth and cause thinning.' },
          { title: 'Watering', description: 'Keep the soil consistently, lightly moist during spring/summer. Reduce slightly in winter.' },
          { title: 'Humidity', description: 'Requires high humidity. Brown, crispy leaflet edges are almost always a sign of dry air.' },
          { title: 'Pests', description: 'Check regularly for spider mites on the undersides of the leaves, especially in dry winter months.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Prefers dappled shade or morning sun. Intense, full afternoon sun can scorch the leaves.' },
          { title: 'Watering', description: 'Requires frequent, deep watering when planted in the landscape or large outdoor planters.' },
          { title: 'Soil', description: 'Needs rich, organic, well-draining soil. Apply a palm-specific fertilizer during the growing season.' },
          { title: 'Climate', description: 'Frost tender. Suitable for outdoor planting only in USDA Zones 10b-11.' }
        ]
      }
    }
  },
  {
    id: 'guzmania-bromeliad',
    slug: 'guzmania',
    name: 'Guzmania',
    botanicalName: 'Guzmania lingulata',
    tagline: 'The Scarlet Star',
    description: 'A striking tropical bromeliad featuring a vibrant, glowing red and orange star-shaped floral bract emerging from a lush rosette of glossy green leaves.',
    longDescription: 'The Guzmania bromeliad is a true showstopper, instantly transforming any space into a tropical oasis. It is celebrated for its spectacular, star-shaped inflorescence—a vibrant bract in brilliant shades of red, orange, and yellow that shoots up from the center of a glossy green rosette. These brilliant colors can last for many months, providing a long-lasting, exotic focal point. Epiphytic by nature, it draws moisture through its central "cup." Potted in our premium matte ceramic planter, the Guzmania offers a sleek, modern burst of color that is surprisingly easy to care for.',
    price: 1299,
    originalPrice: 1599,
    image: '/images/guzmania.jpg',
    gallery: ['/images/guzmania.jpg'],
    categories: ['Flowering', 'Low Light', 'Pet Safe'],
    care: {
      light: 'Low to bright indirect light (direct sun will burn the leaves and fade the flower)',
      water: 'Keep the central "cup" filled with filtered water; keep the soil only lightly moist',
      humidity: 'Moderate to High (benefits from occasional misting)',
      temperature: '18-27°C (keep away from cold drafts)',
      difficulty: 'Easy',
      petSafe: true,
    },
    features: [
      'Spectacular, long-lasting star-shaped vibrant bract',
      'Unique central "cup" watering system',
      '100% safe for cats and dogs',
      'Ships in a premium matte ceramic planter',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the stunning Guzmania. Could you share more details?",
    inStock: true,
    badge: 'Tropical Color',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Guzmania lingulata',
        'Common Names': 'Scarlet Star, Guzmania Bromeliad',
        'Family': 'Bromeliaceae (Bromeliad family)',
        'Native Habitat': 'Rainforests of Central and South America',
        'Toxicity': 'Non-toxic. 100% safe for cats, dogs, and humans.'
      },
      keyFeatures: [
        { title: 'Vibrant Bract', description: 'The stunning red/orange "flower" is actually a modified leaf structure (bract) that surrounds tiny, true white flowers.' },
        { title: 'Central Urn', description: 'The leaves form a tight central rosette (or "cup") designed to catch and hold rainwater in the wild.' },
        { title: 'Epiphytic', description: 'In its natural habitat, it grows on tree branches rather than in soil, using its roots mostly for anchoring.' },
        { title: 'Monocarpic Life Cycle', description: 'The main plant will slowly die after blooming, but it will produce several "pups" (offsets) to take its place.' }
      ],
      whyThisPlant: [
        { title: 'Long-Lasting Color', description: 'The brilliant floral bract can remain vibrant for up to 6 months.' },
        { title: 'Modern Aesthetic', description: 'Its clean, architectural lines and bold colors make it a favorite for modern and minimalist interiors.' },
        { title: 'Pet Safe', description: 'Provides a spectacular burst of exotic color without any risk to your pets.' },
        { title: 'Low-Light Capable', description: 'Unlike many flowering plants, it can maintain its bloom in relatively low-light environments.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Prefers medium to bright indirect light. Direct sun will quickly scorch the leaves and fade the bract.' },
          { title: 'Watering', description: 'Fill the central "cup" with filtered water, replacing it every few weeks. Keep the soil only barely moist.' },
          { title: 'Water Quality', description: 'Highly sensitive to hard tap water. Distilled or rainwater is best to prevent mineral buildup in the cup.' },
          { title: 'Soil', description: 'Requires an extremely well-draining, chunky mix (like orchid bark) to prevent root rot.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Must be placed in deep or dappled shade. Never expose to direct afternoon sun.' },
          { title: 'Watering', description: 'Let nature do the work if it rains frequently, otherwise manually keep the central cup filled.' },
          { title: 'Mosquitoes', description: 'If kept outdoors, flush the central cup with a hose weekly to prevent mosquitoes from breeding in stagnant water.' },
          { title: 'Climate', description: 'Strictly tropical. Must be brought indoors before temperatures drop below 13°C.' }
        ]
      }
    }
  },
  {
    id: 'hydrangea',
    slug: 'hydrangea',
    name: 'Hydrangea',
    botanicalName: 'Hydrangea macrophylla',
    tagline: 'Clouds of Color',
    description: 'A spectacular potted plant featuring massive, globe-like clusters of delicate petals in mesmerizing shades of soft periwinkle blue and lavender.',
    longDescription: 'The Hydrangea macrophylla is a beloved classic that brings an undeniable sense of romance and grandeur to any space. Known for its enormous, pom-pom-like flower heads, this plant offers a long-lasting display of lush, dreamy colors—ranging from soft lavenders to vibrant blues depending on soil acidity. When potted indoors in our premium matte ceramic planter, it functions as a breathtaking, living floral arrangement. Its large, serrated green leaves provide a perfect backdrop to the voluminous blooms. Though it requires attentive watering to keep those delicate petals fresh, the payoff is a spectacularly elegant addition to your interior styling.',
    price: 1499,
    originalPrice: 1899,
    image: '/images/hydrangea.jpg',
    gallery: ['/images/hydrangea.jpg'],
    categories: ['Flowering', 'High Light'],
    care: {
      light: 'Bright, indirect light (avoid intense midday sun which can wilt flowers)',
      water: 'Keep soil consistently moist but never soggy; do not let it dry out completely',
      humidity: 'High humidity is preferred; keep away from dry heat sources',
      temperature: '15-22°C (prefers cooler environments to prolong blooming)',
      difficulty: 'Moderate',
      petSafe: false,
    },
    features: [
      'Massive, globe-like flower clusters',
      'Long-lasting living floral arrangement',
      'Premium ceramic planter included',
      'Dramatic statement piece',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the spectacular Hydrangea. Could you share more details?",
    inStock: true,
    badge: 'Seasonal Favorite',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Hydrangea macrophylla',
        'Common Names': 'Bigleaf Hydrangea, French Hydrangea',
        'Family': 'Hydrangeaceae (Hydrangea family)',
        'Native Habitat': 'Japan',
        'Toxicity': 'Toxic to cats, dogs, and horses if ingested. Contains cyanogenic glycosides which can cause vomiting and lethargy.'
      },
      keyFeatures: [
        { title: 'Massive Flower Heads', description: 'Produces enormous, globe-shaped clusters (corymbs) composed of dozens of individual florets.' },
        { title: 'Color Shifting', description: 'Flower color (blue vs. pink) is often determined by the soil\'s pH and aluminum availability.' },
        { title: 'Serrated Foliage', description: 'Features large, deeply veined, bright green leaves with distinct toothed edges.' },
        { title: 'Deciduous Nature', description: 'Normally drops its leaves in the winter when grown outdoors, going dormant until spring.' }
      ],
      whyThisPlant: [
        { title: 'Breathtaking Volume', description: 'Few plants offer such a massive, dense display of color, acting as a living floral arrangement.' },
        { title: 'Romantic Aesthetic', description: 'Synonymous with cottage gardens and classic, timeless beauty.' },
        { title: 'Excellent Gift', description: 'A highly impressive alternative to cut flower bouquets, offering weeks of continuous blooms.' },
        { title: 'Garden Transition', description: 'After enjoying it indoors, it can be planted outside in the garden to bloom for years to come.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Requires bright, indirect light. Protect from intense, direct afternoon sun which will wilt the flowers.' },
          { title: 'Watering', description: 'They are extremely thirsty! The soil must remain consistently moist. Check daily.' },
          { title: 'Temperature', description: 'Keep in a cool room (15-20°C). Heat will cause the delicate petals to fade and crisp rapidly.' },
          { title: 'Humidity', description: 'Appreciates higher humidity to keep the large leaves and petals hydrated.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Prefers morning sun and afternoon shade. Too much sun will cause them to wilt dramatically.' },
          { title: 'Watering', description: 'Requires deep, frequent watering during the summer months.' },
          { title: 'Soil Chemistry', description: 'To get blue flowers, ensure the soil is acidic (pH < 6.0). For pink flowers, keep it alkaline (pH > 7.0).' },
          { title: 'Pruning', description: 'Prune immediately after flowering in late summer, as they bloom on old wood (last year\'s growth).' }
        ]
      }
    }
  },
  {
    id: 'aglaonema',
    slug: 'aglaonema',
    name: 'Aglaonema',
    botanicalName: 'Aglaonema commutatum',
    tagline: 'The Chinese Evergreen',
    description: 'A highly decorative and extremely resilient indoor plant, admired for its lush, patterned foliage with striking silver, pink, or red variegation.',
    longDescription: 'The Aglaonema, often called the Chinese Evergreen, is a master of adaptation, thriving beautifully even in lower light conditions where other plants might struggle. It is widely prized for its spectacular foliage, which can feature bold splashes of silver, deep green, blushing pink, or fiery red. Potting it in our signature matte ceramic planter elevates its wild, patterned leaves into a refined work of living art. Not only does the Aglaonema bring a lush, tropical vibrance to your interiors, but it is also recognized as an excellent air-purifying plant, removing toxins and improving the environment in your home or office with minimal effort.',
    price: 1199,
    originalPrice: 1499,
    image: '/images/aglaonema.jpg',
    gallery: ['/images/aglaonema.jpg'],
    categories: ['Foliage', 'Low Light', 'Air Purifying', 'Low Maintenance'],
    care: {
      light: 'Low to bright indirect light (variegated varieties prefer slightly more light to keep their color)',
      water: 'Water when the top 50% of the soil is dry; very forgiving if occasionally forgotten',
      humidity: 'Adaptable to average household humidity, but appreciates a humid environment',
      temperature: '18-27°C (avoid cold drafts below 15°C)',
      difficulty: 'Easy',
      petSafe: false,
    },
    features: [
      'Striking variegated foliage',
      'Extremely low maintenance',
      'Highly adaptable to low light',
      'Natural air purifier',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the gorgeous Aglaonema. Could you share more details?",
    inStock: true,
    badge: 'Easy Care',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Aglaonema commutatum',
        'Common Names': 'Chinese Evergreen, Aglaonema',
        'Family': 'Araceae (Aroid family)',
        'Native Habitat': 'Tropical and subtropical regions of Asia and New Guinea',
        'Toxicity': 'Toxic to cats, dogs, and humans if ingested. Contains calcium oxalate crystals causing oral irritation.'
      },
      keyFeatures: [
        { title: 'Spectacular Variegation', description: 'Available in numerous cultivars featuring striking patterns of silver, green, pink, and bright red.' },
        { title: 'Bushy Habit', description: 'Grows densely from the base, creating a full, bushy appearance rather than a tall, leggy vine.' },
        { title: 'Slow Grower', description: 'Maintains its size and shape for a long time, rarely needing repotting or aggressive pruning.' },
        { title: 'Air Purifying', description: 'Featured in NASA\'s clean air study for its ability to filter formaldehyde and benzene.' }
      ],
      whyThisPlant: [
        { title: 'Ultimate Survivor', description: 'One of the most durable houseplants available; excellent for absolute beginners.' },
        { title: 'Low Light Tolerant', description: 'Thrives in windowless offices and dark corners where other plants would quickly perish.' },
        { title: 'Year-Round Color', description: 'Provides a bright pop of pink or red color without the need for high-maintenance flowers.' },
        { title: 'Drought Forgiving', description: 'Will easily bounce back if you forget to water it occasionally.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Highly adaptable. Darker green varieties tolerate very low light; pink/red varieties need medium light to keep their color.' },
          { title: 'Watering', description: 'Water thoroughly, but allow the top half of the soil to dry out completely before watering again.' },
          { title: 'Drafts', description: 'Highly sensitive to cold drafts. Keep away from AC vents and drafty winter windows.' },
          { title: 'Cleaning', description: 'Wipe the broad leaves occasionally with a damp cloth to remove dust and maximize photosynthesis.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Strictly full shade outdoors. Direct sun will instantly scorch the foliage.' },
          { title: 'Watering', description: 'Ensure the pot has drainage; they will rot quickly if left sitting in rainwater.' },
          { title: 'Temperature', description: 'Do not place outdoors until nighttime temperatures are consistently above 15°C.' },
          { title: 'Pests', description: 'Relatively pest-free, but keep an eye out for mealybugs in the crevices of the stems.' }
        ]
      }
    }
  },
  {
    id: 'kalanchoe',
    slug: 'kalanchoe',
    name: 'Kalanchoe',
    botanicalName: 'Kalanchoe blossfeldiana',
    tagline: 'The Desert Jewel',
    description: 'A vibrant, blooming succulent featuring thick, scalloped green leaves and dense clusters of tiny, star-shaped, brightly colored flowers.',
    longDescription: 'The Kalanchoe is the perfect intersection of a hardy succulent and a beautiful blooming houseplant. Famous for its incredible staying power, this resilient desert native produces masses of tiny, star-shaped flowers that can stay in bloom for weeks, or even months, at a time. The flowers rise above thick, scalloped, dark green leaves that store water, making it incredibly drought-tolerant and forgiving for forgetful waterers. Planted in our premium matte ceramic pot, the Kalanchoe provides a sophisticated burst of color that instantly brightens up a desk, windowsill, or tabletop with minimal effort.',
    price: 899,
    originalPrice: 1199,
    image: '/images/kalanchoe.jpg',
    gallery: ['/images/kalanchoe.jpg'],
    categories: ['Flowering', 'High Light', 'Succulent', 'Low Maintenance'],
    care: {
      light: 'Bright, natural light; can handle some direct morning sun',
      water: 'Allow the soil to dry out completely between waterings; avoid getting the leaves wet',
      humidity: 'Prefers low humidity and dry air',
      temperature: '15-29°C (keep away from freezing drafts)',
      difficulty: 'Easy',
      petSafe: false,
    },
    features: [
      'Long-lasting, vibrant blooms',
      'Drought-tolerant succulent leaves',
      'Perfect for bright windowsills',
      'Extremely low maintenance',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the beautiful Kalanchoe. Could you share more details?",
    inStock: true,
    badge: 'Longest Blooming',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Kalanchoe blossfeldiana',
        'Common Names': 'Flaming Katy, Florist Kalanchoe',
        'Family': 'Crassulaceae (Stonecrop family)',
        'Native Habitat': 'Madagascar',
        'Toxicity': 'Toxic to cats and dogs if ingested. Can cause vomiting and, in rare severe cases, abnormal heart rhythms.'
      },
      keyFeatures: [
        { title: 'Prolific Blooms', description: 'Produces dense clusters of tiny, four-petaled flowers in vibrant red, pink, yellow, or orange.' },
        { title: 'Succulent Foliage', description: 'Features thick, fleshy, dark green leaves with scalloped edges designed to store water.' },
        { title: 'Photoperiodic', description: 'Like Poinsettias, they require long periods of uninterrupted darkness to trigger new flower buds.' },
        { title: 'Compact Growth', description: 'Naturally maintains a small, bushy shape, rarely exceeding 12-18 inches in height.' }
      ],
      whyThisPlant: [
        { title: 'Endless Flowers', description: 'A single bloom cycle can last for an astonishing 8 to 12 weeks.' },
        { title: 'Drought Tolerant', description: 'Because it is a succulent, it requires significantly less water than typical flowering houseplants.' },
        { title: 'Vibrant Gift', description: 'An inexpensive, cheerful, and long-lasting alternative to traditional cut flowers.' },
        { title: 'Desk Companion', description: 'Its compact size makes it a perfect addition to a brightly lit office desk or windowsill.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Requires bright, natural light. A sunny east or south-facing window is ideal for keeping it compact.' },
          { title: 'Watering', description: 'Treat it like a cactus. Soak it thoroughly, then let the soil dry out *completely* before watering again.' },
          { title: 'Deadheading', description: 'Snip off spent flower stalks at their base to keep the plant looking tidy and encourage new growth.' },
          { title: 'Re-blooming', description: 'To force blooms, give it 14 hours of complete darkness every night for 6 weeks.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Prefers bright, indirect light or morning sun. Intense afternoon sun can burn the succulent leaves.' },
          { title: 'Watering', description: 'Highly susceptible to root rot; ensure it is protected from heavy, continuous rainfall.' },
          { title: 'Pests', description: 'Watch out for aphids and mealybugs, which are attracted to the tender new flower buds.' },
          { title: 'Climate', description: 'Not frost-tolerant. Must be grown as an annual outdoors or brought inside before freezing.' }
        ]
      }
    }
  },
  {
    id: 'lucky-bamboo',
    slug: 'lucky-bamboo',
    name: 'Lucky Bamboo',
    botanicalName: 'Dracaena sanderiana',
    tagline: 'Symbol of Fortune',
    description: 'A graceful and intricately braided architectural plant, steeped in feng shui tradition and celebrated for bringing positive energy and good fortune.',
    longDescription: 'Despite its name, Lucky Bamboo is actually a resilient member of the Dracaena family, renowned for its incredible flexibility and sculptural beauty. Our premium specimens feature intricately braided and spiraled green stalks that end in vibrant, lively leafy shoots. Housed in a shallow, matte black ceramic planter filled with smooth river stones and water, it creates an immediate sense of zen and tranquility. Deeply rooted in feng shui philosophy, it is believed to attract wealth, happiness, and prosperity to its surroundings. Thriving in water and requiring minimal light, it is the ultimate low-maintenance desktop companion or sophisticated focal point.',
    price: 1099,
    originalPrice: 1399,
    image: '/images/lucky_bamboo.jpg',
    gallery: ['/images/lucky_bamboo.jpg'],
    categories: ['Foliage', 'Low Light', 'Low Maintenance'],
    care: {
      light: 'Low to moderate indirect light (keep out of direct sun to prevent yellowing)',
      water: 'Keep the roots submerged in filtered water; change the water every 1-2 weeks',
      humidity: 'Adaptable, but appreciates average household humidity',
      temperature: '18-32°C (very adaptable to warm environments)',
      difficulty: 'Easy',
      petSafe: false,
    },
    features: [
      'Intricately braided sculptural stalks',
      'Grows entirely in water',
      'Brings positive feng shui energy',
      'Thrives in low light environments',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the graceful Lucky Bamboo. Could you share more details?",
    inStock: true,
    badge: 'Feng Shui Favorite',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Dracaena sanderiana',
        'Common Names': 'Lucky Bamboo, Ribbon Dracaena',
        'Family': 'Asparagaceae (Asparagus family)',
        'Native Habitat': 'Central Africa (Cameroon)',
        'Toxicity': 'Toxic to cats and dogs if ingested. Can cause vomiting, depression, and lack of appetite.'
      },
      keyFeatures: [
        { title: 'Not Real Bamboo', description: 'Despite its appearance, it is entirely unrelated to true bamboo and is actually a type of Dracaena.' },
        { title: 'Pliable Stems', description: 'The canes are incredibly flexible when young, allowing growers to train them into spirals, braids, and lattices.' },
        { title: 'Hydroponic Hero', description: 'Perfectly adapted to growing endlessly in nothing but water and a few stabilizing pebbles.' },
        { title: 'Top Growth', description: 'Once a cane is cut, it will not grow any taller; all new growth comes from the leafy side shoots.' }
      ],
      whyThisPlant: [
        { title: 'Positive Energy', description: 'Deeply ingrained in Feng Shui culture; the number of stalks represents different types of good fortune.' },
        { title: 'Indestructible', description: 'Virtually impossible to kill as long as you don\'t let the water completely dry out.' },
        { title: 'Minimalist Aesthetic', description: 'Provides a clean, architectural, and zen-like vibe suitable for modern decor.' },
        { title: 'Low Light Champion', description: 'Can survive in the darkest of corners and even windowless rooms with fluorescent lighting.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Prefers low to medium indirect light. Direct sun will yellow the leaves and encourage algae in the water.' },
          { title: 'Watering', description: 'Keep the roots fully submerged. Change the water completely every 1-2 weeks to keep it fresh.' },
          { title: 'Water Quality', description: 'Extremely sensitive to chlorine and fluoride. Use bottled, distilled, or filtered water only.' },
          { title: 'Fertilizing', description: 'Requires very little food. A single drop of liquid fertilizer every 2 months is sufficient.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Must be kept in deep shade if moved outdoors.' },
          { title: 'Algae Control', description: 'Outdoor light will quickly turn the water green with algae; use a dark, opaque container.' },
          { title: 'Soil', description: 'If transitioning to outdoor planting, it must be planted in rich, consistently moist soil.' },
          { title: 'Climate', description: 'Strictly tropical; will die immediately if exposed to frost.' }
        ]
      }
    }
  },
  {
    id: 'mandevilla',
    slug: 'mandevilla',
    name: 'Mandevilla',
    botanicalName: 'Mandevilla sanderi',
    tagline: 'The Tropical Climber',
    description: 'A spectacular tropical vine boasting a profusion of large, vibrant trumpet-shaped flowers in striking shades of pink and red.',
    longDescription: 'The Mandevilla is the quintessential tropical showstopper. Characterized by its vigorous climbing habit and deep, glossy green foliage, this vining plant produces an endless summer display of massive, trumpet-shaped blooms. Whether trained up a delicate trellis in our premium matte ceramic planter or allowed to cascade gracefully from a shelf, it brings an unmistakable resort-like elegance to bright, sunny indoor spaces. While it requires high light and consistent watering to maintain its spectacular floral show, the Mandevilla rewards attentive care with a truly breathtaking, dramatic display of vibrant color.',
    price: 1699,
    originalPrice: 1999,
    image: '/images/mandevilla.jpg',
    gallery: ['/images/mandevilla.jpg'],
    categories: ['Flowering', 'High Light', 'Requires Attention'],
    care: {
      light: 'Bright, direct sunlight (requires 6-8 hours of sun to bloom profusely)',
      water: 'Water thoroughly when the top inch of soil is dry; do not let it sit in water',
      humidity: 'High humidity is crucial; mist regularly or use a humidifier',
      temperature: '18-30°C (very sensitive to cold; keep above 15°C)',
      difficulty: 'Moderate',
      petSafe: false,
    },
    features: [
      'Vigorous climbing vine',
      'Massive trumpet-shaped blooms',
      'Includes a subtle supportive trellis',
      'Creates a resort-like tropical aesthetic',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the spectacular Mandevilla vine. Could you share more details?",
    inStock: true,
    badge: 'Statement Vine',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Mandevilla sanderi (formerly Dipladenia)',
        'Common Names': 'Brazilian Jasmine, Mandevilla',
        'Family': 'Apocynaceae (Dogbane family)',
        'Native Habitat': 'Southwestern Brazil',
        'Toxicity': 'Mildly toxic if ingested. Produces a milky sap that can irritate the skin and stomach.'
      },
      keyFeatures: [
        { title: 'Vining Habit', description: 'A rapid climber that sends out long, twining tendrils seeking support structures.' },
        { title: 'Trumpet Flowers', description: 'Produces a profusion of large, showy, trumpet-shaped flowers in shades of pink, red, and white.' },
        { title: 'Glossy Foliage', description: 'Features deep green, highly glossy, leathery leaves that look lush even when not blooming.' },
        { title: 'Continuous Bloom', description: 'Capable of blooming non-stop from early spring all the way through to the first frost.' }
      ],
      whyThisPlant: [
        { title: 'Tropical Resort Vibe', description: 'Instantly evokes the feeling of a luxury tropical resort on a patio or sunny windowsill.' },
        { title: 'Vertical Color', description: 'Excellent for adding height and dramatic vertical color to a space when trained on a trellis.' },
        { title: 'Attracts Pollinators', description: 'If grown outdoors, the deep trumpet flowers are highly attractive to hummingbirds and butterflies.' },
        { title: 'Rapid Growth', description: 'Can easily grow several feet in a single season when provided with adequate light and water.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Requires maximum bright, direct sunlight. Without at least 6 hours of direct sun, it will not bloom.' },
          { title: 'Watering', description: 'Keep the soil evenly moist but never soggy. Ensure the pot has excellent drainage.' },
          { title: 'Support', description: 'Provide a trellis, hoop, or stakes. The vines need something to twine around to grow upward.' },
          { title: 'Pruning', description: 'Pinch back the tips of the vines to encourage bushier growth rather than one long, leggy stem.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Full sun to partial shade. In extreme heat climates, afternoon shade prevents the flowers from scorching.' },
          { title: 'Watering', description: 'Thirsty outdoors in summer. May require daily watering during heat waves.' },
          { title: 'Fertilizing', description: 'Heavy feeders. Apply a bloom-boosting fertilizer every two weeks during the active growing season.' },
          { title: 'Winterizing', description: 'Extremely frost-sensitive. Must be pruned back and brought indoors well before the first freeze.' }
        ]
      }
    }
  },
  {
    id: 'monstera-deliciosa',
    slug: 'monstera',
    name: 'Monstera',
    botanicalName: 'Monstera deliciosa',
    tagline: 'The Swiss Cheese Plant',
    description: 'An iconic tropical houseplant beloved for its massive, glossy green leaves adorned with natural, striking fenestrations (holes).',
    longDescription: 'The Monstera deliciosa is the reigning king of tropical houseplants, instantly recognizable by its large, heart-shaped leaves that develop spectacular natural splits and holes—known as fenestrations—as they mature. Native to the rainforests of Central America, this vining plant brings an undeniably lush, jungle aesthetic into any modern interior. Potted in our signature matte ceramic planter, it functions as a sprawling, living sculpture. Fast-growing and relatively easy to care for, the Monstera rewards its owners with a dramatic, architectural presence that constantly transforms and expands over time.',
    price: 1799,
    originalPrice: 2299,
    image: '/images/monstera.jpg',
    gallery: ['/images/monstera.jpg'],
    categories: ['Foliage', 'Large Scale', 'Air Purifying'],
    care: {
      light: 'Bright, indirect light (fenestrations develop better with more light)',
      water: 'Water when the top 2-3 inches of soil are dry; ensure excellent drainage',
      humidity: 'Prefers high humidity but adapts well to average household conditions',
      temperature: '18-30°C (sensitive to cold drafts below 15°C)',
      difficulty: 'Moderate',
      petSafe: false,
    },
    features: [
      'Iconic split-leaf fenestrations',
      'Fast-growing vining habit',
      'Massive architectural scale',
      'Improves indoor air quality',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the iconic Monstera. Could you share more details?",
    inStock: true,
    badge: 'Iconic Statement',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Monstera deliciosa',
        'Common Names': 'Swiss Cheese Plant, Split-Leaf Philodendron (misnomer)',
        'Family': 'Araceae (Aroid family)',
        'Native Habitat': 'Tropical forests of southern Mexico, south to Panama',
        'Toxicity': 'Toxic to cats, dogs, and humans if ingested. Contains insoluble calcium oxalate crystals.'
      },
      keyFeatures: [
        { title: 'Fenestrations', description: 'Develops iconic natural splits and holes in the leaves as it matures, an adaptation to allow high winds to pass through.' },
        { title: 'Aerial Roots', description: 'Produces thick, cord-like aerial roots from the stems used to anchor onto large rainforest trees.' },
        { title: 'Massive Scale', description: 'Individual leaves can grow up to 3 feet long in the wild, though typically 1-2 feet indoors.' },
        { title: 'Vining Scrambler', description: 'It is a semi-epiphytic climber, not an upright tree, requiring support to grow vertically.' }
      ],
      whyThisPlant: [
        { title: 'Design Icon', description: 'The most recognizable and sought-after silhouette in modern interior design and botanical art.' },
        { title: 'Dramatic Impact', description: 'Fills large empty corners and provides massive architectural scale.' },
        { title: 'Rewarding Growth', description: 'Watching a tightly furled new leaf slowly open to reveal its unique pattern of fenestrations is incredibly satisfying.' },
        { title: 'Easy Care', description: 'Despite its exotic, high-maintenance appearance, it is surprisingly forgiving and easy to grow.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Requires bright, indirect sunlight. Low light results in solid, unsplit leaves and leggy stems.' },
          { title: 'Watering', description: 'Water thoroughly when the top 3-4 inches of soil dry out. Ensure complete drainage.' },
          { title: 'Support', description: 'To encourage massive, fenestrated leaves, it MUST be given a moss pole or sturdy trellis to climb.' },
          { title: 'Cleaning', description: 'Wipe the massive leaves regularly with a damp, soft cloth to remove dust and prevent pest infestations.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Dappled or full shade. Direct outdoor sun will cause severe, irreversible sunburn on the leaves.' },
          { title: 'Space', description: 'Will quickly scramble over the ground and up nearby structures if not contained.' },
          { title: 'Humidity', description: 'Thrives in extreme heat and humidity during the summer months.' },
          { title: 'Climate', description: 'Will not survive frost. Can be grown outdoors year-round only in Zones 10-12.' }
        ]
      }
    }
  },
  {
    id: 'money-plant',
    slug: 'money-plant',
    name: 'Money Plant',
    botanicalName: 'Epipremnum aureum',
    tagline: 'The Ultimate Survivor',
    description: 'A beautiful, fast-growing vine known for its vibrant green and golden variegated heart-shaped leaves.',
    longDescription: 'The Money Plant thrives beautifully both indoors and outdoors, but its behavior, size, and care requirements change drastically depending on where you place it. With its vibrant green base heavily marbled with yellow or golden streaks, this cornerstone species is revered as a symbol of prosperity and positive energy.',
    price: 499,
    originalPrice: 699,
    image: '/images/plant_money.jpg',
    gallery: ['/images/plant_money.jpg'],
    categories: ['Vining', 'Low Maintenance', 'Air Purifying', 'Gift Favorite'],
    care: {
      light: 'Bright, indirect sunlight',
      water: 'Allow top 2 inches of soil to dry out',
      humidity: 'Adaptable to household humidity',
      temperature: '15°C to 30°C',
      difficulty: 'Easy',
      petSafe: false,
    },
    features: [
      'Extremely hard to kill',
      'Excellent at purifying indoor air',
      'Rapid propagation',
      'Considered lucky in Vastu and Feng Shui'
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the Money Plant. Could you share more details?",
    inStock: true,
    badge: 'Popular',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Epipremnum aureum',
        'Common Names': "Money Plant, Golden Pothos, Devil's Ivy, Ceylon Creeper",
        'Family': 'Araceae (Aroid family)',
        'Native Habitat': "Mo'orea (French Polynesia), naturalized in tropical forests globally",
        'Toxicity': 'Mildly toxic to cats, dogs, and humans if ingested (contains insoluble calcium oxalate crystals which cause oral irritation).'
      },
      keyFeatures: [
        { title: 'Morphological Shift', description: 'Indoors, the leaves remain small (3–4 inches) and heart-shaped. Outdoors, if allowed to climb vertically up a tree or wall, the leaves can grow up to 30 inches long and develop deep splits (fenestrations) similar to a Monstera.' },
        { title: 'Variegation', description: 'The foliage features a vibrant green base heavily marbled with yellow or golden streaks. The intensity of this golden pattern is directly tied to light exposure.' },
        { title: 'Aerial Roots', description: 'The vine develops small brown root nodes along its stem. These allow it to grip surfaces like moss poles, brick walls, and tree bark to pull itself upward.' },
        { title: 'Vining Habit', description: 'It will trail downward up to 10 feet if placed in a hanging basket, or climb upwards indefinitely if given a support structure.' }
      ],
      whyThisPlant: [
        { title: 'The Ultimate Survivor', description: 'It earned the nickname "Devil\'s Ivy" because it is nearly impossible to kill. It forgives erratic watering schedules, tolerates low light, and bounces back quickly from neglect.' },
        { title: 'Cultural & Gifting Value', description: 'In both Vastu Shastra and Feng Shui, it is heavily associated with prosperity, wealth, and positive energy, making it an ideal gift for housewarmings or new ventures.' },
        { title: 'Active Air Purification', description: 'It was highlighted in the famous NASA Clean Air Study for its exceptional ability to filter harmful indoor volatile organic compounds (VOCs) like benzene, formaldehyde, xylene, and toluene.' },
        { title: 'Rapid Propagation', description: 'You can multiply this plant endlessly. Snapping off a vine just below a root node and dropping it in a glass of water will yield a completely new root system within two weeks.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Provide bright, indirect light (near an east or north-facing window). If placed in a dark corner, the plant will survive, but the leaves will lose their golden variegation and revert to solid green.' },
          { title: 'Watering', description: 'Allow the top 2 inches of the soil to dry out completely before watering again. Indoors, overwatering is the only real way to kill it.' },
          { title: 'Soil', description: 'Use a lightweight, airy mix. A blend of 50% coco peat, 25% compost, and 25% perlite or pumice ensures moisture retention without waterlogging.' },
          { title: 'Styling', description: 'Ideal for high shelves where the vines can cascade downward, or trained up a small moss pole to encourage slightly larger leaf growth.' }
        ],
        outdoor: [
          { title: 'Light', description: 'It requires dappled sunlight or partial shade. Direct, harsh afternoon sun will scorch and burn the leaves, turning them brown and crispy. Under a tree canopy or on a shaded balcony is perfect.' },
          { title: 'Watering', description: 'Outdoor soil dries out significantly faster due to wind and heat. It requires more frequent watering than its indoor counterparts.' },
          { title: 'Drainage & Monsoons', description: 'If you live in an area with heavy seasonal rains, ensure your outdoor pots have oversized drainage holes. Standing water during a monsoon will drown the roots rapidly.' },
          { title: 'Support & Pruning', description: 'Outdoors, it wants to climb. Provide a trellis, wall, or rough bark. You must actively prune it to control its shape, as it will easily overtake neighboring plants or fixtures if left unchecked.' }
        ]
      }
    }
  },
  {
    id: 'philodendron-moonshine',
    slug: 'philodendron-moonshine',
    name: 'Philodendron Moonshine',
    botanicalName: 'Philodendron "Moonlight"',
    tagline: 'The Neon Glow',
    description: 'A vibrant, bushy tropical plant renowned for its stunning, almost fluorescent lime-green and chartreuse paddle-shaped leaves.',
    longDescription: 'The Philodendron Moonshine (often known as Moonlight) is a spectacular way to bring a burst of high-visibility color into any interior. Unlike its vining cousins, this variety grows in a dense, bushy rosette, slowly unfurling large, paddle-shaped leaves that emerge in brilliant shades of neon yellow and mature into a glowing chartreuse green. This striking foliage acts as a natural spotlight, instantly brightening up dark corners and adding a modern, pop-art contrast to traditional green houseplants. Potted in our signature matte ceramic planter, it is an easy-to-grow, highly architectural statement piece.',
    price: 1499,
    originalPrice: 1799,
    image: '/images/philodendron_moonshine.jpg',
    gallery: ['/images/philodendron_moonshine.jpg'],
    categories: ['Foliage', 'Medium Light', 'Low Maintenance'],
    care: {
      light: 'Bright, indirect light (neon color stays most vibrant with good lighting)',
      water: 'Allow the top 2 inches of soil to dry out between waterings',
      humidity: 'Prefers higher humidity but tolerates average indoor air well',
      temperature: '18-29°C (sensitive to cold, keep away from AC drafts)',
      difficulty: 'Easy',
      petSafe: false,
    },
    features: [
      'Vibrant neon chartreuse foliage',
      'Dense, bushy non-vining growth habit',
      'Instantly brightens up a room',
      'Extremely resilient and easy to care for',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the striking Philodendron Moonshine. Could you share more details?",
    inStock: true,
    badge: 'Bright Color',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Philodendron hederaceum var. (Moonlight cultivar)',
        'Common Names': 'Philodendron Moonshine, Philodendron Moonlight',
        'Family': 'Araceae (Aroid family)',
        'Native Habitat': 'Cultivar (genus native to South American rainforests)',
        'Toxicity': 'Toxic to cats, dogs, and humans if ingested. Contains calcium oxalate crystals.'
      },
      keyFeatures: [
        { title: 'Neon Foliage', description: 'New leaves emerge as a brilliant, almost fluorescent yellow-green before maturing to a softer chartreuse.' },
        { title: 'Self-Heading Habit', description: 'Unlike vining philodendrons, it grows in an upright, bushy rosette form, staying relatively compact.' },
        { title: 'Spade-Shaped Leaves', description: 'Features large, broad, spade-shaped leaves that can reach up to a foot in length on mature plants.' },
        { title: 'Rapid Growth', description: 'During the spring and summer, it is a fast grower, frequently pushing out brightly colored new leaves.' }
      ],
      whyThisPlant: [
        { title: 'Living Highlighter', description: 'Provides an incredible pop of high-visibility color that instantly brightens dim spaces.' },
        { title: 'Contrast Plant', description: 'Looks spectacular when placed next to dark green or burgundy plants (like a Rubber Plant or Raven ZZ).' },
        { title: 'Low Maintenance', description: 'Possesses the classic Philodendron hardiness, tolerating missed waterings and average humidity.' },
        { title: 'Compact Footprint', description: 'Because it doesn\'t vine, it is perfect for desktops, counters, and mid-sized plant stands.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Requires bright, indirect light. If kept in low light, new leaves will lose their neon glow and emerge dull green.' },
          { title: 'Watering', description: 'Water thoroughly when the top 2-3 inches of soil are dry. It is highly susceptible to root rot if overwatered.' },
          { title: 'Cleaning', description: 'Dust the broad leaves regularly with a damp cloth to keep the neon color shining brightly.' },
          { title: 'Fertilizing', description: 'Apply a balanced liquid fertilizer once a month during the active growing season (Spring/Summer).' }
        ],
        outdoor: [
          { title: 'Light', description: 'Must be kept in full shade. Direct outdoor sun will instantly scorch the light-colored leaves.' },
          { title: 'Placement', description: 'Excellent for a shaded, covered patio during the warm summer months.' },
          { title: 'Pests', description: 'Check the undersides of the leaves for aphids or spider mites when bringing it back indoors.' },
          { title: 'Climate', description: 'Strictly tropical. Bring indoors long before temperatures approach freezing (keep above 13°C).' }
        ]
      }
    }
  },
  {
    id: 'morpankhi',
    slug: 'morpankhi',
    name: 'Morpankhi',
    botanicalName: 'Thuja orientalis',
    tagline: 'The Peacock Feather',
    description: 'A beloved ornamental evergreen shrub with dense, flattened sprays of bright green foliage that resemble a peacock\'s open tail.',
    longDescription: 'Morpankhi (Oriental Thuja) is a classic ornamental plant widely cherished for its neat, symmetrical growth and unique foliage. In Hindi, "Mor" means peacock and "Pankhi" means feather, perfectly describing its flat, fan-like branches that grow in distinct vertical planes. Beyond its sculptural beauty, Morpankhi is highly regarded in Vastu Shastra and Feng Shui, often planted in pairs near entrances to invite positive energy, wealth, and prosperity into the home. Its evergreen nature ensures year-round color, and its crisp, pine-like scent freshens the surrounding air. When potted in a premium ceramic planter, it brings a structured, zen-like elegance to patios, balconies, or well-lit indoor spaces.',
    price: 899,
    originalPrice: 1299,
    image: '/images/morpankhi.jpg',
    gallery: ['/images/morpankhi.jpg'],
    categories: ['Foliage', 'Outdoor', 'Low Maintenance', 'Pet Safe'],
    care: {
      light: 'Prefers bright, direct sunlight to partial shade',
      water: 'Keep soil consistently moist but not waterlogged',
      humidity: 'Tolerates a wide range of humidity levels',
      temperature: 'Extremely hardy; 5-35°C',
      difficulty: 'Easy',
      petSafe: true,
    },
    features: [
      'Unique, fan-like evergreen foliage',
      'Auspicious plant in Vastu and Feng Shui',
      'Excellent structural/architectural element',
      'Fresh, natural pine-like fragrance',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the auspicious Morpankhi. Could you share more details?",
    inStock: true,
    badge: 'Auspicious',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Platycladus orientalis (formerly Thuja orientalis)',
        'Common Names': 'Morpankhi, Oriental Arborvitae, Oriental Thuja',
        'Family': 'Cupressaceae (Cypress family)',
        'Native Habitat': 'Northeastern Asia (China, Korea, Russia)',
        'Toxicity': 'Mildly toxic to pets and livestock. The essential oils in the leaves can cause stomach upset if consumed in large quantities.'
      },
      keyFeatures: [
        { title: 'Fan-Like Sprays', description: 'The bright green foliage grows in highly distinct, flattened vertical planes resembling a peacock\'s open tail.' },
        { title: 'Evergreen Nature', description: 'Retains its vibrant green color and dense structure completely year-round.' },
        { title: 'Pine Fragrance', description: 'When crushed or brushed against, the leaves emit a fresh, clean, pine-like resinous scent.' },
        { title: 'Cones', description: 'Mature plants produce small, unique, horn-like seed cones that turn from green to brown.' }
      ],
      whyThisPlant: [
        { title: 'Auspicious Energy', description: 'Highly revered in Indian culture and Vastu Shastra; believed to bring luck, wealth, and positive energy.' },
        { title: 'Symmetrical Beauty', description: 'Naturally grows in a very neat, conical, or rounded shape with almost no pruning required.' },
        { title: 'Architectural Framing', description: 'Perfect for framing doorways, gates, or entryways when planted in matching pairs.' },
        { title: 'Hardiness', description: 'An incredibly tough shrub that handles heat, cold, and pruning exceptionally well.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Requires maximum light indoors. Must be placed directly in front of a south or west-facing window.' },
          { title: 'Watering', description: 'Keep the soil evenly moist. It does not tolerate completely drying out, which will cause the inner foliage to brown.' },
          { title: 'Airflow', description: 'Requires good air circulation to prevent fungal issues in the dense foliage.' },
          { title: 'Viability', description: 'It is inherently an outdoor plant. It can survive indoors with high light, but thrives best outside.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Thrives in full, direct sunlight (at least 6 hours a day). Can tolerate partial shade but may lose density.' },
          { title: 'Watering', description: 'Water deeply and regularly during the first year. Once established, it is relatively drought-tolerant.' },
          { title: 'Pruning', description: 'Do not prune past the green foliage into the dead wood, as it will not regenerate from old, leafless branches.' },
          { title: 'Winter Care', description: 'Extremely cold hardy. If planted in pots, ensure the pot drains well so the roots don\'t freeze in standing water.' }
        ]
      }
    }
  },
  {
    id: 'petra-croton',
    slug: 'petra-croton',
    name: 'Petra Croton',
    botanicalName: 'Codiaeum variegatum "Petra"',
    tagline: 'The Autumn Flame',
    description: 'A show-stopping tropical shrub famous for its large, leathery leaves ablaze with vivid veins of red, orange, yellow, and green.',
    longDescription: 'The Petra Croton is the undisputed king of colorful foliage. Native to tropical forests, it brings an explosion of vibrant, autumn-like hues into your home year-round. Each large, glossy leaf acts as a canvas, featuring bold, prominent veins that range from fiery crimson to golden yellow, contrasted against deep, rich greens and bronzes. Because of its dramatic coloration, it serves as a stunning standalone focal point in any room. To maintain its spectacular neon colors, it requires plenty of bright light. When housed in our premium dark ceramic planter, the vivid foliage pops beautifully, creating a luxurious and exotic aesthetic.',
    price: 1199,
    originalPrice: 1599,
    image: '/images/petra_croton.jpg',
    gallery: ['/images/petra_croton.jpg'],
    categories: ['Foliage', 'Bright Light', 'Moderate Maintenance'],
    care: {
      light: 'Requires bright, indirect to direct sunlight to maintain colors',
      water: 'Keep soil evenly moist, but not soggy',
      humidity: 'Thrives in high humidity (mist regularly)',
      temperature: '15-29°C (avoid cold drafts)',
      difficulty: 'Moderate',
      petSafe: false,
    },
    features: [
      'Spectacular multi-colored foliage',
      'Large, glossy, leathery leaves',
      'Acts as a dramatic focal point',
      'Brings a tropical, exotic vibe indoors',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the colorful Petra Croton. Could you share more details?",
    inStock: true,
    badge: 'Bold Colors',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Codiaeum variegatum "Petra"',
        'Common Names': 'Petra Croton, Rushfoil, Joseph\'s Coat',
        'Family': 'Euphorbiaceae (Spurge family)',
        'Native Habitat': 'Indonesia, Malaysia, Australia, and the western Pacific Ocean islands',
        'Toxicity': 'Toxic to cats, dogs, and humans. The sap can cause severe skin irritation, and ingestion causes severe gastrointestinal distress.'
      },
      keyFeatures: [
        { title: 'Autumn Color Palette', description: 'Features a spectacular, chaotic mix of crimson, orange, yellow, and deep green on a single plant.' },
        { title: 'Bold Veining', description: 'The bright colors primarily follow and bleed outward from the thick, prominent leaf veins.' },
        { title: 'Woody Stems', description: 'Grows as an upright, woody shrub that can eventually reach several feet tall indoors.' },
        { title: 'Color Shifting', description: 'New leaves often emerge green and yellow, developing their deep reds and oranges as they mature in bright light.' }
      ],
      whyThisPlant: [
        { title: 'Unmatched Vibrancy', description: 'Few plants offer such intense, non-floral color, acting as a fiery focal point in any room.' },
        { title: 'Tropical Vibe', description: 'Instantly creates the feeling of a lush, exotic resort or tropical garden.' },
        { title: 'Upright Structure', description: 'Its vertical growth habit makes it great for filling empty corners without taking up too much floor space.' },
        { title: 'Responsive', description: 'It communicates its needs clearly; it will droop dramatically when thirsty, but perks up immediately after watering.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Requires maximum bright light, including direct morning sun. In low light, it will lose its vibrant red/orange colors and revert to plain green.' },
          { title: 'Watering', description: 'Keep the soil consistently moist but never soggy. If the soil dries out completely, the plant will drop its lower leaves.' },
          { title: 'Drafts', description: 'Extremely sensitive to temperature changes. Keep away from AC vents, heaters, and drafty doors to prevent sudden leaf drop.' },
          { title: 'Humidity', description: 'Requires high humidity to keep the leaf edges from crisping. Mist daily or use a humidifier.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Full sun to partial shade. In extreme heat, afternoon shade prevents the leaves from bleaching out.' },
          { title: 'Watering', description: 'Requires frequent, deep watering in the summer. Mulch around the base to retain moisture.' },
          { title: 'Pests', description: 'Highly susceptible to spider mites in hot, dry outdoor conditions. Hose off the foliage regularly.' },
          { title: 'Climate', description: 'Strictly tropical. Must be brought indoors before temperatures drop below 13°C.' }
        ]
      }
    }
  },
  {
    id: 'radermachera',
    slug: 'radermachera',
    name: 'Radermachera',
    botanicalName: 'Radermachera sinica',
    tagline: 'The China Doll',
    description: 'A delicate and elegant indoor plant with fine, glossy, bipinnate leaves that form a lush, airy canopy.',
    longDescription: 'The Radermachera sinica, commonly known as the China Doll plant, is cherished for its incredibly delicate and glossy green foliage. Native to the subtropical mountain regions of southern China and Taiwan, it brings a highly textured, airy woodland feel to indoor spaces. Despite its fragile appearance, the China Doll is a relatively fast grower when provided with the right conditions. Its canopy of finely divided leaves looks stunning when placed on a bright desk or pedestal. Housed in our premium matte ceramic planter, it offers a sophisticated and intricate aesthetic that contrasts beautifully with broad-leafed tropicals.',
    price: 799,
    originalPrice: 1199,
    image: '/images/radermachera.jpg',
    gallery: ['/images/radermachera.jpg'],
    categories: ['Foliage', 'Bright Light', 'Moderate Maintenance'],
    care: {
      light: 'Bright, indirect light; avoid direct afternoon sun',
      water: 'Keep soil consistently moist, never letting it dry out completely',
      humidity: 'Appreciates high humidity',
      temperature: '18-24°C (sensitive to drafts and sudden changes)',
      difficulty: 'Expert',
      petSafe: true,
    },
    features: [
      'Delicate, lacy foliage',
      'Fast-growing under right conditions',
      'Lush, airy canopy',
      'Non-toxic to pets',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the elegant Radermachera. Could you share more details?",
    inStock: true,
    badge: 'Pet Friendly',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Radermachera sinica',
        'Common Names': 'China Doll Plant, Emerald Tree',
        'Family': 'Bignoniaceae (Bignonia family)',
        'Native Habitat': 'Subtropical mountain regions of southern China and Taiwan',
        'Toxicity': 'Non-toxic and completely safe for cats, dogs, and humans.'
      },
      keyFeatures: [
        { title: 'Bipinnate Leaves', description: 'Features highly divided, lacy, glossy green leaflets that create an incredibly delicate texture.' },
        { title: 'Tree-like Form', description: 'Grows upright with a woody stem, creating a miniature canopy resembling a tiny forest tree.' },
        { title: 'Fast Growth', description: 'When its specific light and water requirements are met, it grows quite rapidly indoors.' },
        { title: 'Glossy Finish', description: 'The deep green leaves have a naturally shiny, almost waxy coating that reflects light beautifully.' }
      ],
      whyThisPlant: [
        { title: 'Elegant Texture', description: 'Offers a fine, feathery texture that contrasts perfectly with large-leafed tropical plants.' },
        { title: 'Pet Safe', description: 'A great choice for households with curious pets, as it is completely non-toxic.' },
        { title: 'Miniature Tree', description: 'Brings the structural beauty of a tree to tabletops and smaller indoor spaces.' },
        { title: 'Lush Canopy', description: 'The dense clusters of small leaves create a very full, rich, and vibrant green presence.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Requires plenty of bright, indirect light. Inadequate light will cause it to rapidly drop its lower leaves.' },
          { title: 'Watering', description: 'Highly sensitive to watering. The soil must be kept consistently moist but never soggy. If it dries out even once, it may drop all its leaves.' },
          { title: 'Drafts', description: 'Keep away from AC vents, open windows, and heaters. It detests sudden temperature changes.' },
          { title: 'Pruning', description: 'Pinch back new growth regularly to encourage branching and prevent it from becoming "leggy."' }
        ],
        outdoor: [
          { title: 'Light', description: 'Requires partial shade or dappled sunlight. Direct midday sun will scorch the delicate leaves.' },
          { title: 'Watering', description: 'Must be watered daily during the hot summer months to maintain constant soil moisture.' },
          { title: 'Pests', description: 'Susceptible to aphids outdoors. Check the new, tender growth regularly.' },
          { title: 'Climate', description: 'A subtropical plant. Must be kept above 15°C and brought indoors long before the first frost.' }
        ]
      }
    }
  },
  {
    id: 'rubber-plant',
    slug: 'rubber-plant',
    name: 'Rubber Plant',
    botanicalName: 'Ficus elastica',
    tagline: 'The Bold Classic',
    description: 'A striking architectural plant featuring large, thick, glossy burgundy-green leaves that command attention in any room.',
    longDescription: 'The Rubber Plant (Ficus elastica) is an iconic houseplant prized for its tough, leathery, oversized leaves and strong, upright growth habit. Its deep, moody burgundy and forest green foliage adds a sophisticated, dramatic touch to modern interiors. Originally native to South and Southeast Asia, this resilient plant is excellent for beginners, forgiving occasional neglect and adapting well to indoor environments. Besides its bold aesthetic appeal, it is highly effective at purifying indoor air. Potted in our signature heavy matte ceramic planter, it functions as a strong vertical focal point in living rooms or offices.',
    price: 1099,
    originalPrice: 1499,
    image: '/images/rubber_plant.jpg',
    gallery: ['/images/rubber_plant.jpg'],
    categories: ['Foliage', 'Air Purifying', 'Low Maintenance'],
    care: {
      light: 'Bright, indirect light (can tolerate some morning sun)',
      water: 'Allow the top half of soil to dry completely before watering',
      humidity: 'Average household humidity is fine',
      temperature: '15-26°C (avoid cold drafts)',
      difficulty: 'Easy',
      petSafe: false,
    },
    features: [
      'Large, glossy, leathery leaves',
      'Deep, dramatic burgundy-green coloring',
      'Strong, upright architectural growth',
      'Effective air purifier',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the bold Rubber Plant. Could you share more details?",
    inStock: true,
    badge: 'Architectural',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Ficus elastica',
        'Common Names': 'Rubber Plant, Rubber Tree, Rubber Fig',
        'Family': 'Moraceae (Mulberry and Fig family)',
        'Native Habitat': 'South and Southeast Asia (India, Nepal, Myanmar, Malaysia, Indonesia)',
        'Toxicity': 'Toxic to cats, dogs, and humans. The milky sap contains latex which can cause skin irritation and severe gastrointestinal distress if ingested.'
      },
      keyFeatures: [
        { title: 'Oversized Leaves', description: 'Features massive, thick, leathery, and highly glossy oval-shaped leaves.' },
        { title: 'Burgundy Sheen', description: 'While available in many varieties, the classic dark variety features deep green leaves with strong burgundy/black undertones.' },
        { title: 'Red Sheaths', description: 'New leaves emerge tightly rolled inside a bright red protective sheath (stipule) which drops off as the leaf unfurls.' },
        { title: 'Aerial Roots', description: 'In highly humid environments, it can develop dramatic aerial roots hanging from its branches (more common outdoors).' }
      ],
      whyThisPlant: [
        { title: 'Architectural Presence', description: 'Its strong, upright, unbending trunk and large horizontal leaves create a bold, modern silhouette.' },
        { title: 'Air Purifying', description: 'A highly efficient air purifier, known for removing formaldehyde and other toxins from indoor air.' },
        { title: 'Forgiving Nature', description: 'Much easier to care for than its cousin, the Fiddle Leaf Fig. It tolerates occasional missed waterings.' },
        { title: 'High Impact', description: 'A small plant quickly grows into a large, commanding floor specimen with minimal effort.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Prefers bright, indirect light. Can tolerate a few hours of direct morning sun, which helps maintain dark leaf colors.' },
          { title: 'Watering', description: 'Allow the top 50% of the soil to dry out completely between waterings. Overwatering causes the lower leaves to turn yellow and drop.' },
          { title: 'Cleaning', description: 'Because the leaves are so large, they collect dust. Wipe them down weekly with a damp cloth to allow the plant to photosynthesize.' },
          { title: 'Pruning', description: 'If it grows too tall and single-stemmed, you can cut the top off to force it to branch out laterally.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Acclimate slowly to full sun. It can thrive in direct sunlight, becoming much denser and darker.' },
          { title: 'Watering', description: 'Requires deep, thorough watering in the summer, especially if planted in a container.' },
          { title: 'Growth', description: 'Can quickly grow into a massive tree outdoors; do not plant near foundations or pipes, as the roots are aggressive.' },
          { title: 'Climate', description: 'Not frost tolerant. Keep above 10°C. In cold climates, it must be grown in a pot and overwintered indoors.' }
        ]
      }
    }
  },
  {
    id: 'sansevieria',
    slug: 'sansevieria',
    name: 'Sansevieria',
    botanicalName: 'Dracaena trifasciata',
    tagline: 'The Indestructible Air Purifier',
    description: 'A sleek, modern succulent with tall, upright sword-like leaves. Renowned for being nearly impossible to kill and exceptional at purifying air.',
    longDescription: 'The Sansevieria, famously known as the Snake Plant, is the ultimate houseplant for beginners and busy professionals. Its strong, architectural, sword-like leaves rise vertically, featuring beautiful horizontal banding in shades of dark and light green. Not only does it provide a clean, contemporary aesthetic that fits perfectly in minimal or modern interiors, but it is also one of the few plants proven by NASA to continuously remove toxins from the air, even releasing oxygen at night. Potted in our matte ceramic planter, it thrives on neglect, requiring minimal water and tolerating almost any light condition, from dark corners to bright windowsills.',
    price: 699,
    originalPrice: 999,
    image: '/images/sansevieria.jpg',
    gallery: ['/images/sansevieria.jpg'],
    categories: ['Foliage', 'Low Light', 'Air Purifying', 'Low Maintenance'],
    care: {
      light: 'Extremely adaptable; thrives in everything from low light to direct sun',
      water: 'Water very sparingly; allow soil to dry completely (often every 2-4 weeks)',
      humidity: 'Prefers dry air; average household humidity is perfect',
      temperature: '15-30°C (keep away from freezing drafts)',
      difficulty: 'Easy',
      petSafe: false,
    },
    features: [
      'Tall, architectural sword-like leaves',
      'Nearly indestructible and thrives on neglect',
      'Releases oxygen at night (perfect for bedrooms)',
      'Top-rated air purifier',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the indestructible Sansevieria. Could you share more details?",
    inStock: true,
    badge: 'Indestructible',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Dracaena trifasciata (formerly Sansevieria trifasciata)',
        'Common Names': 'Snake Plant, Mother-in-Law\'s Tongue, Saint George\'s Sword',
        'Family': 'Asparagaceae (Asparagus family)',
        'Native Habitat': 'Tropical West Africa (Nigeria to the Congo)',
        'Toxicity': 'Mildly toxic to cats and dogs if ingested. Can cause nausea, vomiting, and diarrhea.'
      },
      keyFeatures: [
        { title: 'Sword-Like Leaves', description: 'Features stiff, thick, sharply pointed leaves that grow straight upward from a basal rosette.' },
        { title: 'Distinct Banding', description: 'The deep green leaves are heavily mottled with horizontal zig-zag bands of lighter green or grey.' },
        { title: 'Yellow Margins', description: 'Many popular varieties (like the Laurentii) feature striking, bright yellow edges along the leaf margins.' },
        { title: 'Succulent Nature', description: 'Stores vast amounts of water in its fleshy leaves, allowing it to survive long periods of drought.' }
      ],
      whyThisPlant: [
        { title: 'CAM Photosynthesis', description: 'Unlike most plants, it opens its stomata at night, releasing oxygen and absorbing carbon dioxide while you sleep.' },
        { title: 'Nearly Unkillable', description: 'It thrives on neglect. It can survive in very dark corners and needs watering only once a month.' },
        { title: 'Modern Aesthetic', description: 'Its clean, vertical lines make it a favorite for minimalist, modern interior design.' },
        { title: 'Air Filtration', description: 'Famous for its ability to filter out indoor toxins like formaldehyde, xylene, and toluene.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Highly adaptable. It prefers bright, indirect light but will happily survive in very low light or even direct sun.' },
          { title: 'Watering', description: 'Water sparingly. Allow the soil to dry out 100% between waterings. When in doubt, do not water.' },
          { title: 'Potting', description: 'Keep it slightly rootbound. Only repot when the strong rhizomes begin to crack or distort the plastic nursery pot.' },
          { title: 'Cleaning', description: 'Dust the tall leaves occasionally with a dry or slightly damp cloth to keep the pores clear.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Can be planted outdoors in full sun or partial shade. Acclimate slowly if moving from a dark indoor spot.' },
          { title: 'Watering', description: 'Requires very little supplemental water outdoors once established.' },
          { title: 'Soil', description: 'Must have excellent drainage. If planted in heavy clay soil, the rhizomes will rot.' },
          { title: 'Climate', description: 'Not cold hardy. Will turn to mush if exposed to frost. Bring indoors before temperatures drop below 10°C.' }
        ]
      }
    }
  },
  {
    id: 'schefflera-variegated',
    slug: 'schefflera-variegated',
    name: 'Schefflera Variegated',
    botanicalName: 'Schefflera arboricola',
    tagline: 'The Umbrella Tree',
    description: 'A lush, bushy indoor tree known for its unique umbrella-like clusters of leaves, beautifully variegated with creamy yellow and white.',
    longDescription: 'The Variegated Schefflera, affectionately called the Umbrella Tree or Dwarf Umbrella Tree, is a cheerful and vibrant addition to any indoor space. Its most distinctive feature is its palmate leaves, which grow in circular, umbrella-like clusters at the ends of its stems. This variegated variety takes that unique structure to the next level with striking, painterly splashes of creamy yellow, white, and pale green across every leaf. Originating from Taiwan and Hainan, it’s a robust grower that eventually forms a handsome, bushy indoor tree. Potted in our signature matte ceramic planter, its complex foliage and upright structure bring a bright, tropical canopy feel right into your living room.',
    price: 999,
    originalPrice: 1299,
    image: '/images/schefflera.jpg',
    gallery: ['/images/schefflera.jpg'],
    categories: ['Foliage', 'Medium Light', 'Moderate Maintenance'],
    care: {
      light: 'Bright, indirect light is essential to maintain the variegation',
      water: 'Allow the top third of the soil to dry out between waterings',
      humidity: 'Tolerates normal home humidity but appreciates occasional misting',
      temperature: '15-30°C (sensitive to cold drafts)',
      difficulty: 'Moderate',
      petSafe: false,
    },
    features: [
      'Unique umbrella-like leaf clusters',
      'Striking cream and yellow variegation',
      'Grows into a beautiful bushy indoor tree',
      'Excellent air-purifying qualities',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the beautiful Schefflera Variegated. Could you share more details?",
    inStock: true,
    badge: 'Variegated',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Schefflera arboricola',
        'Common Names': 'Dwarf Umbrella Tree, Variegated Schefflera, Parasol Plant',
        'Family': 'Araliaceae (Ginseng family)',
        'Native Habitat': 'Taiwan and Hainan (China)',
        'Toxicity': 'Toxic to cats, dogs, and humans if ingested. Contains calcium oxalate crystals causing oral irritation and swelling.'
      },
      keyFeatures: [
        { title: 'Palmate Leaflets', description: 'The leaves grow in circular clusters (usually 7-9 leaflets) that look exactly like the spokes of an open umbrella.' },
        { title: 'Striking Variegation', description: 'Each glossy leaflet is heavily splashed with chaotic, painterly patterns of cream, yellow, and pale green.' },
        { title: 'Bushy Growth', description: 'Grows multiple woody stems that form a dense, bushy, tree-like canopy indoors.' },
        { title: 'Aerial Roots', description: 'In highly humid environments, mature plants may occasionally develop aerial roots from the trunk.' }
      ],
      whyThisPlant: [
        { title: 'Tropical Canopy', description: 'Brings the distinct feeling of a lush, tropical forest canopy into the living room.' },
        { title: 'Brightens Spaces', description: 'The heavy yellow and cream variegation acts as a natural reflector, brightening up dull corners.' },
        { title: 'Easy Maintenance', description: 'Highly forgiving of occasional missed waterings and adapts well to typical indoor conditions.' },
        { title: 'Air Purifying', description: 'Actively removes toxins from the air, contributing to a healthier indoor environment.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Requires bright, indirect light. If placed in low light, the plant will lose its yellow variegation and revert to solid green.' },
          { title: 'Watering', description: 'Allow the top 2-3 inches of soil to dry completely before watering. Do not let it sit in a saucer of water.' },
          { title: 'Pruning', description: 'Highly responsive to pruning. If it gets too tall or leggy, snip the top off to force bushy, lateral growth.' },
          { title: 'Rotation', description: 'Rotate the pot a quarter-turn every week to ensure the canopy grows evenly toward the light source.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Thrives in partial shade or bright dappled light. Direct afternoon sun will scorch the variegated leaves.' },
          { title: 'Watering', description: 'Requires more frequent watering outdoors, especially during hot, dry summer spells.' },
          { title: 'Pests', description: 'Check the undersides of the leaflets occasionally for scale insects or spider mites.' },
          { title: 'Climate', description: 'Strictly tropical. Must be brought indoors before temperatures drop below 15°C.' }
        ]
      }
    }
  },
  {
    id: 'spathiphyllum',
    slug: 'spathiphyllum',
    name: 'Spathiphyllum',
    botanicalName: 'Spathiphyllum wallisii',
    tagline: 'The Peace Lily',
    description: 'A beloved, graceful houseplant featuring dark green foliage and elegant white, flag-like spathe flowers. An elite air purifier.',
    longDescription: 'The Spathiphyllum, universally known as the Peace Lily, is a classic and cherished houseplant known for its brilliant white flowers (spathes) that contrast stunningly against deep, glossy green leaves. The blooms resemble white flags of peace, giving the plant its common name. Beyond its timeless elegance, it is one of the most effective plants for filtering indoor air pollutants like benzene, formaldehyde, and carbon monoxide. It is also famously communicative—its leaves will droop dramatically when it is thirsty, then perk right back up once watered, making it practically foolproof to care for. Potted in our matte ceramic planter, it brings a sense of calm and purity to any room.',
    price: 899,
    originalPrice: 1299,
    image: '/images/spathiphyllum.jpg',
    gallery: ['/images/spathiphyllum.jpg'],
    categories: ['Flowering', 'Low Light', 'Air Purifying', 'Low Maintenance'],
    care: {
      light: 'Tolerates low light, but produces more flowers in bright, indirect light',
      water: 'Keep soil lightly moist; leaves droop visibly when it needs water',
      humidity: 'Appreciates high humidity but adapts well to normal indoor conditions',
      temperature: '18-30°C (sensitive to cold drafts)',
      difficulty: 'Easy',
      petSafe: false,
    },
    features: [
      'Elegant, long-lasting white blooms',
      'Highly communicative (droops when thirsty)',
      'Top-tier air-purifying capabilities',
      'Thrives in lower light conditions',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the elegant Spathiphyllum (Peace Lily). Could you share more details?",
    inStock: true,
    badge: 'Top Purifier',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Spathiphyllum wallisii',
        'Common Names': 'Peace Lily, White Sails, Spathe Flower',
        'Family': 'Araceae (Aroid family)',
        'Native Habitat': 'Tropical regions of the Americas and Southeastern Asia',
        'Toxicity': 'Toxic to cats, dogs, and humans. Contains calcium oxalate crystals that cause severe irritation to the mouth, tongue, and throat if chewed.'
      },
      keyFeatures: [
        { title: 'White Spathes', description: 'Produces elegant, pure white, flag-like modified leaves (spathes) that cup a central yellow flower spike (spadix).' },
        { title: 'Glossy Foliage', description: 'Features large, deeply veined, elliptical leaves in a rich, dark, glossy green.' },
        { title: 'Clumping Habit', description: 'Grows outward from a central rhizome, continually producing new leaves to form a dense, lush clump.' },
        { title: 'Communicative Droop', description: 'The entire plant will collapse dramatically when thirsty, but fully recovers hours after being watered.' }
      ],
      whyThisPlant: [
        { title: 'Elite Air Purifier', description: 'Consistently ranks at the very top of NASA\'s clean air study for removing benzene, formaldehyde, and carbon monoxide.' },
        { title: 'Low-Light Blooms', description: 'One of the very few houseplants that will reliably produce beautiful flowers even in lower light conditions.' },
        { title: 'Foolproof Watering', description: 'Because it "faints" when dry, it takes the guesswork completely out of your watering schedule.' },
        { title: 'Timeless Elegance', description: 'The contrast of the pure white blooms against the dark foliage offers a classic, sophisticated aesthetic.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Tolerates low light well, but needs bright, indirect light to consistently produce flowers. Avoid direct sun, which burns the leaves.' },
          { title: 'Watering', description: 'Keep the soil lightly moist. Water thoroughly when the top inch is dry, or immediately when the leaves begin to droop.' },
          { title: 'Water Quality', description: 'Highly sensitive to chlorine and fluoride in tap water, which causes brown leaf tips. Use filtered water or let tap water sit out overnight.' },
          { title: 'Fertilizing', description: 'Feed every 6 weeks during spring and summer to encourage continuous blooming.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Must be kept in full, deep shade. Any direct sunlight will quickly scorch the delicate foliage.' },
          { title: 'Watering', description: 'Requires very frequent watering in the summer to maintain the necessary soil moisture.' },
          { title: 'Placement', description: 'Ideal for covered patios or deep shade under large trees in tropical climates.' },
          { title: 'Climate', description: 'Extremely frost sensitive. Keep well above 15°C and protect from cold winds.' }
        ]
      }
    }
  },
  {
    id: 'syngonium',
    slug: 'syngonium',
    name: 'Syngonium',
    botanicalName: 'Syngonium podophyllum',
    tagline: 'The Arrowhead Vine',
    description: 'A charming and versatile trailing plant famous for its unique arrow-shaped leaves featuring soft pastel pink and pale green hues.',
    longDescription: 'The Syngonium, commonly known as the Arrowhead Plant or Arrowhead Vine, is an incredibly popular and adaptable houseplant. Young plants form a dense, bushy mound of upright foliage, but as they mature, they begin to develop a beautiful vining habit, perfect for hanging baskets or training up a moss pole. This particular variety is prized for its stunning coloration, boasting delicate shades of blush pink, creamy white, and pale green that add a soft, romantic touch to any interior. Potted in our signature matte ceramic planter, it brings a pop of pastel color and dynamic growth to shelves and desktops while remaining exceptionally easy to care for.',
    price: 599,
    originalPrice: 899,
    image: '/images/syngonium.jpg',
    gallery: ['/images/syngonium.jpg'],
    categories: ['Foliage', 'Trailing', 'Medium Light', 'Low Maintenance'],
    care: {
      light: 'Bright, indirect light (better light maintains the pink colors)',
      water: 'Allow the top inch of soil to dry out before watering',
      humidity: 'Appreciates high humidity; misting is beneficial',
      temperature: '15-26°C (avoid cold drafts)',
      difficulty: 'Easy',
      petSafe: false,
    },
    features: [
      'Distinctive arrow-shaped leaves',
      'Beautiful pastel pink and green coloration',
      'Can be grown bushy or allowed to trail/climb',
      'Fast-growing and highly adaptable',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the beautiful Syngonium. Could you share more details?",
    inStock: true,
    badge: 'Pastel Colors',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Syngonium podophyllum',
        'Common Names': 'Arrowhead Plant, Arrowhead Vine, Goosefoot',
        'Family': 'Araceae (Aroid family)',
        'Native Habitat': 'Tropical rainforests of Latin America (Mexico to Bolivia)',
        'Toxicity': 'Toxic to cats, dogs, and humans if ingested. Contains calcium oxalate crystals causing intense oral irritation.'
      },
      keyFeatures: [
        { title: 'Arrow-Shaped Leaves', description: 'Young leaves are distinctively spade or arrow-shaped (sagittate).' },
        { title: 'Shape Shifter', description: 'As the plant matures and begins to climb, the leaf shape drastically changes, becoming deeply lobed.' },
        { title: 'Pastel Palette', description: 'Features a beautiful, soft coloration ranging from blush pink and cream to pale green.' },
        { title: 'Vining Habit', description: 'Starts as a compact, bushy mound but eventually develops long vining stems seeking a structure to climb.' }
      ],
      whyThisPlant: [
        { title: 'Soft Aesthetics', description: 'The pastel pink hues offer a gentle, romantic aesthetic rarely found in easy-care houseplants.' },
        { title: 'Versatile Growth', description: 'Can be kept pruned as a bushy tabletop plant, left to trail from a shelf, or trained up a moss pole.' },
        { title: 'Fast Grower', description: 'Responds very quickly to good care, rapidly producing new leaves throughout the spring and summer.' },
        { title: 'Air Purifying', description: 'Effective at removing volatile organic compounds (VOCs) from indoor air.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Requires bright, indirect light. In low light, the pink coloration will fade and revert to green.' },
          { title: 'Watering', description: 'Keep the soil evenly moist but not soggy. Allow the top inch to dry out before watering again.' },
          { title: 'Humidity', description: 'Loves high humidity. Brown, crispy leaf tips are a sign the air is too dry.' },
          { title: 'Pruning', description: 'If you prefer a bushy plant rather than a vine, aggressively pinch back the climbing stems.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Must be kept in full or partial shade. Direct sun will quickly bleach and burn the delicate pink leaves.' },
          { title: 'Placement', description: 'Excellent as a trailing "spiller" plant in shaded summer containers.' },
          { title: 'Pests', description: 'Check frequently for spider mites, which love the thin leaves in dry conditions.' },
          { title: 'Climate', description: 'Strictly tropical. Bring indoors well before nighttime temperatures drop below 15°C.' }
        ]
      }
    }
  },
  {
    id: 'mix-hanging-pot',
    slug: 'mix-hanging-pot',
    name: 'Mix Hanging Pot',
    botanicalName: 'Mixed Trailing Assortment',
    tagline: 'The Hanging Garden',
    description: 'A delightful trio of trailing plants featuring Tradescantia zebrina and lush green creepers, perfect for creating an instant hanging garden.',
    longDescription: 'Why settle for one when you can have three? Our Mix Hanging Pot arrangement is a curated trio of lush, trailing botanicals designed to instantly transform any empty vertical space into a cascading indoor garden. The centerpiece is a stunning Tradescantia zebrina (Inch Plant), boasting striking silver and purple striped leaves that shimmer in the light. It is perfectly flanked by complementary bright green trailing varieties like Baby Tears or Peperomia, adding layers of intricate texture and color. Suspended in clean, minimalist white pots, this trio is fast-growing, incredibly resilient, and perfect for bringing life to high windows, curtain rods, or ceiling hooks.',
    price: 1499,
    originalPrice: 1999,
    image: '/images/mix_hanging_pot.png',
    gallery: ['/images/mix_hanging_pot.png'],
    categories: ['Foliage', 'Trailing', 'Medium Light', 'Low Maintenance'],
    care: {
      light: 'Bright, indirect light to maintain the vibrant purple coloration',
      water: 'Keep soil lightly moist; water when the top inch feels dry',
      humidity: 'Tolerates normal home humidity, but loves a good misting',
      temperature: '18-26°C (protect from cold drafts)',
      difficulty: 'Easy',
      petSafe: false,
    },
    features: [
      'Curated trio of trailing plants',
      'Features striking purple and silver Tradescantia',
      'Instantly creates a lush vertical garden',
      'Includes minimalist hanging pots',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the Mix Hanging Pot trio. Could you share more details?",
    inStock: true,
    badge: 'Set of 3',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Tradescantia zebrina & Assorted Trailing Species',
        'Common Names': 'Mix Trailing Basket, Inch Plant, Wandering Dude',
        'Family': 'Commelinaceae (Spiderwort family) & others',
        'Native Habitat': 'Various tropical and subtropical regions',
        'Toxicity': 'Tradescantia is mildly toxic to pets (can cause skin irritation/dermatitis). Keep hanging baskets out of reach.'
      },
      keyFeatures: [
        { title: 'Curated Contrast', description: 'Combines the striking silver-and-purple stripes of Tradescantia with the solid greens of complementary trailing plants.' },
        { title: 'Cascading Growth', description: 'All included species are vigorous trailers that will quickly spill over the edges of the pot.' },
        { title: 'Shimmering Foliage', description: 'The Tradescantia leaves have a natural, crystalline structure that sparkles under direct light.' },
        { title: 'Rooting Nodes', description: 'The stems feature prominent nodes that readily grow roots if they touch soil, making propagation incredibly easy.' }
      ],
      whyThisPlant: [
        { title: 'Instant Vertical Garden', description: 'Immediately fills empty vertical space, drawing the eye upward and making rooms feel taller.' },
        { title: 'Dynamic Movement', description: 'The trailing vines catch slight indoor breezes, adding gentle movement to your interior design.' },
        { title: 'Easy to Propagate', description: 'If a vine breaks off, simply stick it back into the soil and it will root within days.' },
        { title: 'Pre-Arranged Design', description: 'Takes the guesswork out of plant pairing by providing a pre-designed, aesthetically balanced trio.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Needs very bright, indirect light. Without enough light, the purple Tradescantia will stretch (become leggy) and lose its vibrant color.' },
          { title: 'Watering', description: 'Water thoroughly when the top inch of soil is dry. Avoid watering directly on the crown of the Tradescantia to prevent rot.' },
          { title: 'Pruning', description: 'Regularly pinch off the growing tips of the vines to encourage the plants to grow fuller and bushier at the top.' },
          { title: 'Maintenance', description: 'Remove any older, dried leaves at the base of the plant to keep the arrangement looking tidy.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Excellent for shaded or partially shaded porches. Avoid harsh, direct afternoon sun.' },
          { title: 'Watering', description: 'Hanging baskets dry out much faster than ground pots. You may need to water daily in mid-summer.' },
          { title: 'Wind', description: 'Protect from strong winds, which can easily snap the brittle stems of the Tradescantia.' },
          { title: 'Climate', description: 'Bring the basket indoors before the first frost.' }
        ]
      }
    }
  },
  {
    id: 'zamia',
    slug: 'zamia',
    name: 'Zamia (ZZ Plant)',
    botanicalName: 'Zamioculcas zamiifolia',
    tagline: 'The Indestructible Gem',
    description: 'Renowned for its glossy, dark green leaves and unyielding nature, the Zamia (ZZ Plant) is the ultimate low-maintenance houseplant.',
    longDescription: 'Often referred to as the ZZ Plant, Zamia is celebrated as one of the toughest houseplants available, making it perfect for both beginners and busy plant lovers. It features thick, fleshy stalks that naturally arch, lined with symmetrical, waxy, dark green leaflets that reflect light beautifully. This structural, sculptural plant not only adds a modern touch to any interior space but is also highly drought-tolerant and capable of thriving in incredibly low light conditions. Potted in a sleek ceramic planter, the Zamia is a long-lasting, resilient addition that purifies the air with virtually no effort on your part.',
    price: 799,
    originalPrice: 1199,
    image: '/images/zamia.jpg',
    gallery: ['/images/zamia.jpg'],
    categories: ['Foliage', 'Low Light', 'Low Maintenance', 'Air Purifying'],
    care: {
      light: 'Thrives in low to bright indirect light; highly adaptable',
      water: 'Water only when the soil is completely dry (every 2-3 weeks)',
      humidity: 'Does well in average household humidity',
      temperature: '15-28°C (keep away from cold drafts)',
      difficulty: 'Easy',
      petSafe: false,
    },
    features: [
      'Extremely drought-tolerant',
      'Thrives in low light conditions',
      'Glossy, waxy leaves that resist dust',
      'Excellent air-purifying qualities',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the hardy Zamia (ZZ Plant). Could you share more details?",
    inStock: true,
    badge: 'Unkillable',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Zamioculcas zamiifolia',
        'Common Names': 'ZZ Plant, Zanzibar Gem, Eternity Plant',
        'Family': 'Araceae (Aroid family)',
        'Native Habitat': 'Eastern Africa (Kenya to South Africa)',
        'Toxicity': 'Toxic to cats, dogs, and humans if ingested. Contains calcium oxalate crystals.'
      },
      keyFeatures: [
        { title: 'Waxy Leaflets', description: 'Features incredibly glossy, dark green leaflets that naturally look polished.' },
        { title: 'Arching Fronds', description: 'The thick, fleshy stems gracefully arch outward from the center of the pot.' },
        { title: 'Potato-Like Rhizomes', description: 'Grows from large, bulbous rhizomes hidden under the soil that store massive amounts of water.' },
        { title: 'Slow, Steady Growth', description: 'Pushes out entire new stems (fronds) all at once, usually during the warmer months.' }
      ],
      whyThisPlant: [
        { title: 'Nearly Indestructible', description: 'One of the toughest houseplants in existence. It can survive months without water and minimal light.' },
        { title: 'Modern Silhouette', description: 'Its clean, architectural lines fit perfectly in modern, minimalist, or corporate environments.' },
        { title: 'Pest Resistant', description: 'Its thick, waxy cuticle makes it highly resistant to common houseplant pests.' },
        { title: 'Air Purifying', description: 'Actively removes toxins from the air while requiring almost zero maintenance.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Extremely adaptable. Thrives in bright indirect light but survives perfectly fine in windowless offices with only fluorescent light.' },
          { title: 'Watering', description: 'Water ONLY when the soil is 100% bone dry (often every 3-4 weeks). Overwatering is the only way to kill it.' },
          { title: 'Potting', description: 'Prefers to be root-bound. Do not repot until the rhizomes are physically warping or breaking the nursery pot.' },
          { title: 'Cleaning', description: 'Wipe the leaves with a damp cloth occasionally to restore their natural, high-gloss shine.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Must be kept in deep shade. Direct outdoor sun will cause severe, irreversible sunburn on the leaves.' },
          { title: 'Watering', description: 'Ensure the pot has excellent drainage. If left outside during heavy rain, the rhizomes will rot.' },
          { title: 'Soil', description: 'Requires highly porous, well-draining cactus/succulent soil.' },
          { title: 'Climate', description: 'Not cold tolerant. Must be brought indoors well before temperatures drop below 10°C.' }
        ]
      }
    }
  },
  {
    id: 'gerbera',
    slug: 'gerbera',
    name: 'Gerbera Daisy',
    botanicalName: 'Gerbera jamesonii',
    tagline: 'Bright and Cheerful Blooms',
    description: 'Famous for its brilliantly colored, large daisy-like flowers, the Gerbera brings an instant pop of joy and vibrancy to any sunny windowsill.',
    longDescription: 'The Gerbera Daisy is universally loved for its classic, large flowers that come in a stunning array of vivid colors, from deep reds and hot pinks to sunny yellows and bright oranges. Native to South Africa, these cheerful blooms are not just a feast for the eyes; they also have excellent air-purifying qualities. They feature a central disk surrounded by beautifully uniform petals that stand tall on strong, leafless stems rising from a rosette of lush green leaves. Potted in an elegant ceramic planter, a Gerbera is the perfect way to add a splash of natural, vibrant color to your home or office, guaranteed to brighten your day.',
    price: 499,
    originalPrice: 699,
    image: '/images/gerbera.jpg',
    gallery: ['/images/gerbera.jpg'],
    categories: ['Flowering', 'Bright Light', 'Pet Safe', 'Colorful'],
    care: {
      light: 'Bright, direct sunlight is needed for best blooming',
      water: 'Keep soil evenly moist but never soggy; avoid wetting the leaves',
      humidity: 'Average room humidity is fine',
      temperature: '18-24°C',
      difficulty: 'Moderate',
      petSafe: true,
    },
    features: [
      'Produces large, brightly colored blooms',
      'Excellent air purifier',
      'Non-toxic to pets',
      'Blooms can last for weeks',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the colorful Gerbera Daisy. Could you share more details?",
    inStock: true,
    badge: 'Vibrant Colors',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Gerbera jamesonii',
        'Common Names': 'Gerbera Daisy, Barberton Daisy, Transvaal Daisy',
        'Family': 'Asteraceae (Daisy family)',
        'Native Habitat': 'South Africa',
        'Toxicity': 'Non-toxic to cats, dogs, and humans.'
      },
      keyFeatures: [
        { title: 'Vibrant Blooms', description: 'Produces massive, perfectly formed daisy-like flowers in incredibly vivid, saturated colors.' },
        { title: 'Leafless Stems', description: 'The flowers rise high above the foliage on thick, hollow, completely leafless stems.' },
        { title: 'Basal Rosette', description: 'The fuzzy, lobed green leaves grow in a low clump right at the soil line.' },
        { title: 'Phototropic', description: 'The flower heads will physically turn throughout the day to track the movement of the sun.' }
      ],
      whyThisPlant: [
        { title: 'Mood Booster', description: 'Universally recognized as a symbol of cheerfulness and joy; instantly brightens up any room.' },
        { title: 'Pet Safe', description: 'Completely non-toxic, making it a perfect, worry-free gift for pet owners.' },
        { title: 'Long-Lasting Flowers', description: 'Individual blooms can last for several weeks on the plant, and make excellent cut flowers.' },
        { title: 'Air Purifying', description: 'Noted for its ability to remove trichloroethylene and benzene from indoor air.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Requires maximum light indoors. Must be placed directly in a sunny south or west-facing window to re-bloom.' },
          { title: 'Watering', description: 'Keep the soil evenly moist but never soggy. Water the soil directly, avoiding the fuzzy leaves to prevent rot.' },
          { title: 'Deadheading', description: 'Snip off fading flowers at the base of the stem to encourage the plant to produce new blooms.' },
          { title: 'Fertilizing', description: 'Feed every two weeks with a bloom-boosting fertilizer during the spring and summer.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Full sun to partial shade. In very hot climates, provide afternoon shade to prevent the flowers from wilting.' },
          { title: 'Watering', description: 'Requires consistent, deep watering. Do not let the plant wilt repeatedly, or it will stop blooming.' },
          { title: 'Pests', description: 'Highly susceptible to aphids, whiteflies, and powdery mildew outdoors. Treat promptly with neem oil.' },
          { title: 'Climate', description: 'Grown as an annual in cold climates, or as a perennial in frost-free zones (above 10°C).' }
        ]
      }
    }
  },
  {
    id: 'mini-kamini',
    slug: 'mini-kamini',
    name: 'Mini Kamini',
    botanicalName: 'Murraya paniculata "Minima"',
    tagline: 'The Fragrant Bonsai',
    description: 'A delicate, miniature evergreen shrub prized for its tiny, dense, glossy green leaves and intoxicatingly fragrant small white blooms.',
    longDescription: 'The Mini Kamini, also known as Dwarf Orange Jasmine, is a masterclass in delicate botanical architecture. Naturally growing with a dense, bushy habit, it is frequently styled into an elegant indoor bonsai. It features incredibly small, glossy dark green leaves that provide year-round visual interest. However, its true magic reveals itself when it blooms, producing clusters of tiny white flowers that fill the room with a sweet, citrus-like fragrance. Potted in our premium ceramic planter, the Mini Kamini brings a touch of refined, miniature landscape artistry and natural aromatherapy to any well-lit desktop or side table.',
    price: 999,
    originalPrice: 1299,
    image: '/images/mini_kamini.jpg',
    gallery: ['/images/mini_kamini.jpg'],
    categories: ['Foliage', 'Flowering', 'High Light'],
    care: {
      light: 'Bright, indirect light to full sun (requires plenty of light to bloom)',
      water: 'Water when the top inch of soil is dry; do not let the root ball dry out completely',
      humidity: 'Appreciates moderate to high humidity; mist occasionally',
      temperature: '15-30°C (protect from cold drafts)',
      difficulty: 'Moderate',
      petSafe: false,
    },
    features: [
      'Highly fragrant white flowers',
      'Dense miniature bonsai-like growth',
      'Tiny, glossy green leaves',
      'Excellent for desktop display',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the fragrant Mini Kamini. Could you share more details?",
    inStock: true,
    badge: 'Intoxicating Fragrance',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Murraya paniculata "Minima"',
        'Common Names': 'Mini Kamini, Dwarf Orange Jasmine, Mock Orange',
        'Family': 'Rutaceae (Citrus family)',
        'Native Habitat': 'South and Southeast Asia, China, and Australasia',
        'Toxicity': 'Mildly toxic if ingested. Can cause stomach upset in pets.'
      },
      keyFeatures: [
        { title: 'Miniature Foliage', description: 'Features tiny, glossy, dark green pinnate leaves packed very densely on the stems.' },
        { title: 'White Blooms', description: 'Produces small, delicate, bell-shaped white flowers in clusters.' },
        { title: 'Citrus Fragrance', description: 'The flowers emit a powerful, sweet scent that strongly resembles orange blossoms.' },
        { title: 'Woody Trunk', description: 'Quickly develops a thick, corky bark, giving even young plants the appearance of an ancient tree.' }
      ],
      whyThisPlant: [
        { title: 'Natural Aromatherapy', description: 'Fills the room with a beautiful, calming fragrance without the need for artificial candles or sprays.' },
        { title: 'Bonsai Aesthetic', description: 'Its naturally tiny leaves and woody trunk make it look like a highly trained bonsai with zero effort.' },
        { title: 'Evergreen Beauty', description: 'Maintains its dense, lush green canopy year-round, looking beautiful even when not in bloom.' },
        { title: 'Compact Size', description: 'A slow grower that fits perfectly on desks, shelves, or shallow decorative pots.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Requires very bright, indirect light with a few hours of direct morning sun to trigger blooming.' },
          { title: 'Watering', description: 'Keep the soil consistently moist but never waterlogged. Do not let it dry out completely.' },
          { title: 'Humidity', description: 'Appreciates high humidity. Mist the foliage daily or place on a pebble tray.' },
          { title: 'Pruning', description: 'Pinch back new growth regularly to maintain a tight, compact, rounded shape.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Thrives in partial shade to full sun. Acclimate slowly to prevent sunburn.' },
          { title: 'Watering', description: 'Water daily during the hot summer months, especially if kept in a small, shallow bonsai pot.' },
          { title: 'Fertilizing', description: 'Feed with an organic, slow-release bonsai fertilizer during the growing season.' },
          { title: 'Climate', description: 'A tropical/subtropical plant. Must be protected from frost and brought indoors when temperatures drop below 10°C.' }
        ]
      }
    }
  },
  {
    id: 'lyrata-ficus',
    slug: 'lyrata-ficus',
    name: 'Ficus Lyrata',
    botanicalName: 'Ficus lyrata',
    tagline: 'The Fiddle Leaf Fig',
    description: 'A spectacular statement piece featuring massive, heavily veined, violin-shaped leaves that bring architectural drama to any room.',
    longDescription: 'The Ficus Lyrata, famously known as the Fiddle Leaf Fig, is the undisputed darling of modern interior design. Native to western Africa, this magnificent plant is characterized by its huge, broad, glossy green leaves that perfectly mimic the shape of a fiddle or violin. As it grows, it develops into a stunning indoor tree, acting as a striking, sculptural focal point that anchors a room. Potted in a premium minimalist ceramic planter, the Fiddle Leaf Fig demands attention and transforms ordinary spaces into high-end, editorial-worthy interiors. While it requires a bit of consistent care regarding light and watering routines, the dramatic visual reward is absolutely unparalleled.',
    price: 1899,
    originalPrice: 2499,
    image: '/images/lyrata_ficus.jpg',
    gallery: ['/images/lyrata_ficus.jpg'],
    categories: ['Foliage', 'Bright Light', 'Large/Floor Plant', 'Statement'],
    care: {
      light: 'Requires bright, filtered light (some morning sun is beneficial)',
      water: 'Water thoroughly when the top two inches of soil are dry',
      humidity: 'Appreciates high humidity; clean leaves regularly',
      temperature: '18-29°C (avoid drafts and sudden temperature changes)',
      difficulty: 'Moderate',
      petSafe: false,
    },
    features: [
      'Massive, glossy, violin-shaped leaves',
      'Grows into a dramatic indoor tree',
      'The ultimate interior design statement plant',
      'Excellent at anchoring large spaces',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the stunning Ficus Lyrata. Could you share more details?",
    inStock: true,
    badge: 'Designer Favorite',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Ficus lyrata',
        'Common Names': 'Fiddle Leaf Fig, Banjo Fig',
        'Family': 'Moraceae (Mulberry and Fig family)',
        'Native Habitat': 'Lowland tropical rainforests of western Africa',
        'Toxicity': 'Toxic to cats, dogs, and humans. The sap contains calcium oxalate crystals and latex, causing skin irritation and severe stomach upset.'
      },
      keyFeatures: [
        { title: 'Fiddle-Shaped Leaves', description: 'Features massive, heavily textured leaves shaped like a violin, complete with a broad top and narrow middle.' },
        { title: 'Prominent Veining', description: 'The leaves are deeply veined, creating a rugged, leathery, and highly architectural texture.' },
        { title: 'Tree-Like Habit', description: 'Grows as a strong, upright, woody tree, often with a single dominant trunk indoors.' },
        { title: 'Fast Growth', description: 'During the summer, it can push out multiple massive new leaves in rapid succession.' }
      ],
      whyThisPlant: [
        { title: 'Design Icon', description: 'The most sought-after statement plant for modern, mid-century, and contemporary interior design.' },
        { title: 'Fills Large Spaces', description: 'Perfect for anchoring large, empty corners or framing large windows.' },
        { title: 'Living Sculpture', description: 'Its bold, structural silhouette acts as a living piece of art in the home.' },
        { title: 'Long Lifespan', description: 'With proper care, it can live for decades indoors, continually growing taller and more impressive.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Requires massive amounts of bright, filtered light. Direct morning sun is excellent. Poor light is the #1 cause of leaf drop.' },
          { title: 'Watering', description: 'Water thoroughly, then let the top 3 inches of soil dry completely. Brown spots in the middle of the leaf indicate overwatering.' },
          { title: 'Cleaning', description: 'The huge leaves act as dust traps. You must wipe them down with a damp cloth every 1-2 weeks so the plant can breathe.' },
          { title: 'Stability', description: 'Hates being moved. Find a bright spot away from AC drafts and leave it there.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Must be acclimated very slowly to outdoor sun. Can handle full sun once acclimated, but prefers dappled shade.' },
          { title: 'Watering', description: 'Requires heavy, deep watering outdoors in the summer. Ensure the large pot has excellent drainage.' },
          { title: 'Pests', description: 'Check the undersides of the leaves for spider mites and scale.' },
          { title: 'Climate', description: 'Not frost tolerant. Must be brought indoors before nighttime temperatures drop below 10°C.' }
        ]
      }
    }
  },
  {
    id: 'mango-keshar',
    slug: 'mango-keshar',
    name: 'Mango Keshar',
    botanicalName: 'Mangifera indica (Kesar)',
    tagline: 'The Queen of Mangoes',
    description: 'Grow your own incredibly sweet, intensely aromatic Kesar mangoes with this premium grafted fruit tree sapling.',
    longDescription: 'The Kesar Mango, often affectionately called the "Queen of Mangoes," is prized worldwide for its exceptionally sweet, aromatic, and saffron-colored pulp. This premium grafted sapling allows you to bring the magic of a tropical orchard directly into your own garden or large sunny patio. Grafted to ensure faster fruiting and a more manageable size, this tree features beautiful, lush, elongated dark green leaves that provide excellent shade and ornamental value even when not in fruit. Potted in a premium rustic terracotta planter, it adds a touch of Mediterranean or tropical luxury to your outdoor living spaces. With the right care and plenty of sunlight, you will soon be harvesting your own incredibly delicious, home-grown Kesar mangoes.',
    price: 1299,
    originalPrice: 1999,
    image: '/images/mango_keshar.jpg',
    gallery: ['/images/mango_keshar.jpg'],
    categories: ['Fruit Plant', 'Outdoor', 'Full Sun', 'Exotic'],
    care: {
      light: 'Requires full, direct sunlight (at least 6-8 hours daily)',
      water: 'Water deeply but infrequently; allow soil to dry out slightly between waterings',
      humidity: 'Prefers moderate to high humidity but is adaptable',
      temperature: 'Thrives in warm, tropical climates (protect from frost)',
      difficulty: 'Moderate',
      petSafe: true,
    },
    features: [
      'Premium grafted sapling for faster fruiting',
      'Produces intensely sweet, saffron-colored mangoes',
      'Lush, dark green tropical foliage',
      'Can be grown in a large patio container or planted in the ground',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the Mango Keshar tree. Could you share more details?",
    inStock: true,
    badge: 'Fruit Bearing',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Mangifera indica "Kesar"',
        'Common Names': 'Kesar Mango, Gir Kesar, Queen of Mangoes',
        'Family': 'Anacardiaceae (Cashew family)',
        'Native Habitat': 'Foothills of Girnar, Gujarat, India',
        'Toxicity': 'The fruit is edible and delicious. However, the sap, leaves, and bark contain urushiol (similar to poison ivy), which can cause skin irritation.'
      },
      keyFeatures: [
        { title: 'Saffron Pulp', description: 'Renowned for its incredibly sweet, intense, saffron-colored (Kesar) flesh.' },
        { title: 'Grafted Sapling', description: 'Our saplings are grafted, meaning they will fruit much faster and remain smaller than seed-grown trees.' },
        { title: 'Evergreen Foliage', description: 'Features beautiful, long, lance-shaped leaves that emerge a reddish-bronze before hardening to deep green.' },
        { title: 'Fragrant Blooms', description: 'Produces large panicles of tiny, highly fragrant yellowish-pink flowers before fruiting.' }
      ],
      whyThisPlant: [
        { title: 'Homegrown Harvest', description: 'Nothing compares to the taste of a sun-ripened Kesar mango picked fresh from your own garden.' },
        { title: 'Ornamental Value', description: 'Even when not fruiting, the lush, tropical foliage makes it a beautiful shade or patio tree.' },
        { title: 'Cultural Heritage', description: 'The Kesar mango is a beloved cultural icon in India, often associated with summer joy and festivals.' },
        { title: 'Investment', description: 'A grafted mango tree is a long-term investment that will provide decades of delicious fruit.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Viability', description: 'Mango trees are strictly outdoor plants. They cannot survive or fruit indoors due to lack of light and pollinators.' },
          { title: 'Winter Protection', description: 'If grown in a pot in colder climates, it must be overwintered in a heated greenhouse or a very bright, warm sunroom.' },
          { title: 'Watering', description: 'During winter indoors, reduce watering significantly, allowing the soil to dry out between waterings.' },
          { title: 'Pests', description: 'Watch closely for spider mites if brought indoors during the winter.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Requires absolute full sun. Needs at least 8-10 hours of direct sunlight daily to produce and ripen fruit.' },
          { title: 'Watering', description: 'Water deeply and regularly during the first two years. Once established, it is relatively drought-tolerant, but needs water during fruit set.' },
          { title: 'Fertilizing', description: 'Feed with a high-potassium, citrus/mango-specific fertilizer in early spring and summer.' },
          { title: 'Planting', description: 'Plant in well-draining soil. Do not plant near foundations, as it will eventually grow into a large tree if planted in the ground.' }
        ]
      }
    }
  },
  {
    id: 'jade-plant',
    slug: 'jade-plant',
    name: 'Jade Plant',
    botanicalName: 'Crassula ovata',
    tagline: 'The Plant of Prosperity',
    description: 'A beautiful succulent known for its thick, glossy green leaves. A classic symbol of good luck and prosperity.',
    longDescription: 'The Jade Plant is a popular and elegant succulent, revered in many cultures as a symbol of good luck and financial prosperity. With its sturdy, woody stems and fleshy, oval-shaped green leaves, it has the charm of a miniature tree. Cultivated with precision in our labs, this Jade Plant is exceptionally healthy, resilient, and easy to care for. It thrives indoors, making it the perfect piece of living decor for a desk or sunny window sill. Potted in a premium matte ceramic planter, it represents enduring beauty and fortune.',
    price: 899,
    originalPrice: 1099,
    image: '/images/plant_jade.jpg',
    gallery: ['/images/plant_jade.jpg'],
    categories: ['Succulent', 'Low Maintenance', 'Gift Favorite'],
    care: {
      light: 'Bright, indirect sunlight to full sun',
      water: 'Water thoroughly when soil is completely dry',
      humidity: 'Low to average household humidity',
      temperature: '18°C to 24°C',
      difficulty: 'Easy',
      petSafe: false,
    },
    features: [
      'Symbol of prosperity and good luck',
      'Extremely drought-tolerant',
      'Develops woody stems, ideal for bonsai style',
      'Air-purifying properties',
    ],
    whatsappMessage: "Hi Suva Botanica! I'm interested in the Jade Plant. Could you share more details?",
    inStock: true,
    badge: 'Best Seller',
    encyclopedia: {
      botanicalInformation: {
        'Scientific Name': 'Crassula ovata',
        'Common Names': 'Jade Plant, Money Plant, Lucky Plant, Friendship Tree',
        'Family': 'Crassulaceae (Stonecrop family)',
        'Native Habitat': 'KwaZulu-Natal and Eastern Cape provinces of South Africa',
        'Toxicity': 'Toxic to dogs and cats. Ingestion can cause vomiting, lethargy, and incoordination.'
      },
      keyFeatures: [
        { title: 'Fleshy Leaves', description: 'Features thick, smooth, glossy, oval-shaped leaves that store large amounts of water.' },
        { title: 'Woody Stems', description: 'As the plant matures, the green succulent stems harden into a thick, brown, woody trunk, giving it a bonsai-like appearance.' },
        { title: 'Red Edges', description: 'When exposed to direct sunlight, the edges of the green leaves develop a beautiful reddish tinge.' },
        { title: 'Star-Shaped Flowers', description: 'Under the right conditions (cool winters and dry soil), mature plants produce clusters of tiny white or pink star-shaped flowers.' }
      ],
      whyThisPlant: [
        { title: 'Symbol of Prosperity', description: 'Widely considered a symbol of good luck and financial success; often given as a housewarming or business gift.' },
        { title: 'Bonsai Potential', description: 'Naturally develops a tree-like structure, making it incredibly easy to prune and shape into a beautiful indoor bonsai.' },
        { title: 'Drought Tolerant', description: 'Thrives on neglect. You can go weeks without watering it, making it perfect for frequent travelers.' },
        { title: 'Longevity', description: 'An incredibly long-lived plant that is often passed down through generations in families.' }
      ],
      careGuide: {
        indoor: [
          { title: 'Light', description: 'Requires very bright light. A south or west-facing window with a few hours of direct sun is ideal.' },
          { title: 'Watering', description: 'Water thoroughly, then let the soil dry out 100% before watering again. The leaves will begin to wrinkle slightly when thirsty.' },
          { title: 'Soil', description: 'Requires a fast-draining succulent or cactus mix. It will quickly rot in heavy, moisture-retaining potting soil.' },
          { title: 'Pruning', description: 'Pinch back new growth to encourage a thick, bushy canopy rather than long, leggy stems.' }
        ],
        outdoor: [
          { title: 'Light', description: 'Full sun to partial shade. Acclimate it slowly to full summer sun to prevent the leaves from burning.' },
          { title: 'Watering', description: 'Needs very little supplemental water outdoors, except during extreme heatwaves.' },
          { title: 'Pests', description: 'Highly susceptible to mealybugs, which hide in the tight joints between the leaves and stems.' },
          { title: 'Climate', description: 'Not frost tolerant. The water-filled leaves will burst and turn to mush if exposed to freezing temperatures. Bring indoors below 10°C.' }
        ]
      }
    }
  },
];

// Helper functions
export function getPlantBySlug(slug: string): Plant | undefined {
  return plants.find((p) => p.slug === slug);
}



export function getAllCategories(): string[] {
  const categories = new Set<string>();
  plants.forEach((p) => p.categories.forEach((c) => categories.add(c)));
  return Array.from(categories);
}
