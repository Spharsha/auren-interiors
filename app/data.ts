export const photo = (id: string, width: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=70`;

export const rooms = [
  "All",
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Dining",
  "Full Home",
];

export const projects = [
  {
    id: "residence",
    title: "Modern Luxury Residence",
    room: "Full Home",
    size: "4 BHK · 2,400 sq ft",
    place: "Adyar, Chennai",
    image: "photo-1600585154340-be6161a56a0c", // <--- ఫుల్ హోమ్ కోసం అప్‌డేట్ చేయబడిన లగ్జరీ ఇంటీరియర్ ఐడీ
    blurb: "A calm, warm home with teak accents and soft natural light.",
  },
  {
    id: "living",
    title: "Contemporary Living Space",
    room: "Living Room",
    size: "Living room · 420 sq ft",
    place: "Besant Nagar, Chennai",
    image: "photo-1600607687939-ce8a6c25118c",
    blurb: "An open living area built for family evenings and festivals.",
  },
  {
    id: "dining",
    title: "Elegant Dining Interior",
    room: "Dining",
    size: "Dining · 260 sq ft",
    place: "Alwarpet, Chennai",
    image: "photo-1600607687920-4e2a09cf159d",
    blurb:
      "A dining space that seats the whole family without feeling crowded.",
  },
  {
    id: "bedroom",
    title: "Minimal Bedroom Design",
    room: "Bedroom",
    size: "Master bedroom · 300 sq ft",
    place: "Anna Nagar, Chennai",
    image: "photo-1616486338812-3dadae4b4ace",
    blurb: "Quiet colours, smart storage and a restful layout.",
  },
  {
    id: "kitchen",
    title: "Modern Kitchen Design",
    room: "Kitchen",
    size: "Modular kitchen · 180 sq ft",
    place: "T. Nagar, Chennai",
    image: "photo-1556911220-e15b29be8c8f",
    blurb: "A practical modular kitchen designed around Indian cooking.",
  },
  {
    id: "concept",
    title: "Luxury Interior Concept",
    room: "Living Room",
    size: "Lounge · 380 sq ft",
    place: "ECR, Chennai",
    image: "photo-1618221195710-dd6b41faaea6",
    blurb: "A relaxed lounge with brass details and layered lighting.",
  },
];

export const services = [
  {
    number: "01",
    title: "Full Home Interiors",
    text: "One team from design to handover, so you deal with a single point of contact.",
    items: [
      "Concept and 3D views",
      "Material and finish selection",
      "Site supervision",
      "Final styling and handover",
    ],
  },
  {
    number: "02",
    title: "Modular Kitchen & Wardrobes",
    text: "Smart storage planned around the way your family cooks, dresses and lives.",
    items: [
      "Kitchen layout for Indian cooking",
      "Loft and wardrobe planning",
      "Quality hardware and finishes",
      "Clean, on-time installation",
    ],
  },
  {
    number: "03",
    title: "Living & Bedroom Design",
    text: "Comfortable, personal rooms with the right lighting, furniture and colours.",
    items: [
      "Furniture layouts",
      "Lighting plans",
      "Curtains and soft furnishings",
      "Pooja and display units",
    ],
  },
  {
    number: "04",
    title: "Vastu-friendly Space Planning",
    text: "Practical layouts that respect Vastu preferences without compromising on design.",
    items: [
      "Room placement guidance",
      "Pooja room positioning",
      "Kitchen and entrance planning",
      "Light and ventilation checks",
    ],
  },
  {
    number: "05",
    title: "Commercial Spaces",
    text: "Offices, clinics and shops designed to look professional and work efficiently.",
    items: [
      "Office and reception design",
      "Retail and showroom layouts",
      "Branding touches",
      "Phased execution",
    ],
  },
];

export const steps = [
  {
    number: "01",
    title: "Consult",
    text: "We visit, listen and understand your needs, family and budget.",
  },
  {
    number: "02",
    title: "Concept",
    text: "You see layouts, colours and 3D views before anything is built.",
  },
  {
    number: "03",
    title: "Create",
    text: "Our team builds, supervises and keeps you updated at each stage.",
  },
  {
    number: "04",
    title: "Handover",
    text: "We style the space, check every detail and hand over the keys.",
  },
];
