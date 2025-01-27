import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#features" }, // Asegúrate de que cada sección tenga un id único
  { label: "Workflow", href: "#workflow" }, // Enlace a la sección de Workflow
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "Adquirir un terreno virtual en Decentraland ha sido una decisión estratégica para Stellar Solutions. Hemos construido nuestra oficina central virtual, donde organizamos reuniones con clientes de todo el mundo. La inmersión y la personalización que ofrece el metaverso han superado nuestras expectativas."
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "Como empresa enfocada en la sostenibilidad, decidimos crear un santuario virtual en The Sandbox. Hemos construido un ecosistema digital donde nuestros usuarios pueden aprender sobre temas ambientales y participar en actividades eco-friendly. La respuesta ha sido increíble."
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Invertir en un terreno en Somnium Space ha sido una de las mejores decisiones que hemos tomado. La comunidad de artistas digitales es increíblemente talentosa y hemos podido colaborar en proyectos innovadores que están redefiniendo los límites del arte virtual."
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Nuestro equipo ha construido una base de operaciones virtual en Cryptovoxels. La flexibilidad y las herramientas de desarrollo nos han permitido crear un espacio de trabajo único y productivo, donde nuestros empleados pueden colaborar de forma más eficiente."
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "Como arquitectos, hemos encontrado en el metaverso una nueva forma de expresar nuestra creatividad. Hemos diseñado y construido edificios virtuales impresionantes que desafían las leyes de la física y la imaginación."
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "Nuestra empresa ha organizado varios eventos virtuales en nuestro terreno de Decentraland. La capacidad de conectar con personas de todo el mundo en un espacio virtual ha sido una experiencia increíblemente enriquecedora."
  }
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Conocimiento profundo del metaverso",
    description:
      "Tenemos un conocimiento exhaustivo de las diferentes plataformas y metaversos existentes, lo que me permite asesorarte sobre las mejores opciones según tus necesidades y presupuesto.",
  },
  {
    icon: <Fingerprint />,
    text: "Análisis personalizado de cada cliente",
    description:
      "Comprendemos que cada cliente tiene objetivos y visiones distintas para su terreno virtual. Por eso, realizo un análisis personalizado para encontrar la parcela que mejor se adapte a tus proyectos y metas.",
  },
  {
    icon: <ShieldHalf />,
    text: "Acceso a propiedades exclusivas",
    description:
      "Tenemos acceso a una amplia cartera de terrenos, incluyendo opciones exclusivas y primeras filas en los metaversos más populares.",
  },
  {
    icon: <BatteryCharging />,
    text: "Asesoramiento en la inversión",
    description:
      "Te guiaremos a través del proceso de compra, explicándote los aspectos técnicos y legales involucrados, y brindándote consejos para tomar decisiones de inversión inteligentes.",
  },
  {
    icon: <PlugZap />,
    text: "Soporte post-venta",
    description:
      "Incluso después de la compra, estaremos a tu disposición para resolver cualquier duda y brindarte asistencia en la gestión de tu propiedad virtual.",
  },
  {
    icon: <GlobeLock />,
    text: "Oportunidades de negocio",
    description:
      "Los terrenos virtuales ofrecen una amplia gama de oportunidades de negocio, desde la creación de espacios comerciales hasta la organización de eventos virtuales.",
  },
];

export const checklistItems = [
  {
    "title": "Expande tu imperio virtual",
    "description": "Combina tus parcelas adyacentes para crear un espacio más grande y personalizado."
  },
  {
    "title": "Construye tu sueño sin límites",
    "description": "Diseña y crea estructuras únicas sin conocimientos de programación."
  },
  {
    "title": "Ahorra tiempo y esfuerzo",
    "description": "Permite que la IA te ayude a generar ideas y diseños."
  },
  {
    "title": "Colabora con otros creadores",
    "description": "Comparte tus proyectos y trabaja en conjunto con otros usuarios."
  }
];

export const pricingOptions = [
  {
    "title": "Explorador",
    "price": "Gratis",
    "features": [
      "Acceso limitado a la plataforma",
      "Visualización de terrenos disponibles",
      "Búsqueda básica",
      "Guía de inicio rápido"
    ]
  },
  {
    "title": "Propietario",
    "price": "$10/mes",
    "features": [
      "Compra y venta de terrenos",
      "Personalización de avatares",
      "Almacenamiento en la nube para tus creaciones",
      "Soporte al cliente prioritario"
    ]
  },
  {
    "title": "Inversor",
    "price": "$50/mes",
    "features": [
      "Análisis de mercado detallado",
      "Herramientas de inversión",
      "Acceso a eventos exclusivos",
      "Gestor de cuenta personal"
    ]
  }
]

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
