
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'iPhone 15 Pro Max',
    tagline: 'Titanio. Tan robusto. Tan ligero.',
    description: 'El iPhone definitivo con chip A17 Pro y diseño en titanio aeroespacial.',
    longDescription: 'El iPhone 15 Pro Max es el primer iPhone con diseño de titanio de calidad aeroespacial, usando la misma aleación que las naves espaciales enviadas a Marte. Cuenta con el chip A17 Pro, un cambio radical en el rendimiento gráfico. La cámara principal de 48 MP es más avanzada que nunca, capturando fotos en superalta resolución con un nuevo nivel de detalle y color.',
    price: 1199,
    category: 'Nuevos',
    imageUrl: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', // Demo video
    gallery: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1697145586321-5cb038702a92?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1696446702183-51c6c5301c42?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Titanio Aeroespacial', 'Chip A17 Pro', 'Cámara 48MP', 'Botón de Acción'],
    specs: {
        screen: "6.7\" Super Retina XDR OLED",
        processor: "A17 Pro",
        camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto (5x)",
        battery: "Hasta 29h de video",
        os: "iOS 17",
        storage: "256GB / 512GB / 1TB"
    },
    colors: [
      { name: 'Titanio Natural', hex: '#B9B8B2', inStock: true },
      { name: 'Titanio Azul', hex: '#33363D', inStock: true },
      { name: 'Titanio Blanco', hex: '#F2F1EB', inStock: false },
      { name: 'Titanio Negro', hex: '#1B1B1C', inStock: true }
    ],
    rating: 4.9,
    reviews: 128
  },
  {
    id: 'p2',
    name: 'Samsung Galaxy S24 Ultra',
    tagline: 'Galaxy AI ha llegado.',
    description: 'Potenciado por inteligencia artificial. El estándar de oro en Android.',
    longDescription: 'Bienvenido a la era de la IA móvil. Con el Galaxy S24 Ultra en tus manos, puedes liberar nuevos niveles de creatividad, productividad y posibilidades. Echa un vistazo a su diseño exterior renovado con titanio y una pantalla plana de 6.8 pulgadas. Incluye el S Pen integrado para escribir, tocar y navegar con precisión.',
    price: 1299,
    category: 'Nuevos',
    imageUrl: 'https://images.unsplash.com/photo-1706029546359-2054434af04d?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1610945265078-38584e73d40f?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1706029546858-062c3689727e?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1659256390961-748f05538c14?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Galaxy AI', 'Cámara 200MP', 'Snapdragon 8 Gen 3', 'S Pen Integrado'],
    specs: {
        screen: "6.8\" Dynamic AMOLED 2X",
        processor: "Snapdragon 8 Gen 3 for Galaxy",
        camera: "200MP Main + 50MP/10MP Telephoto + 12MP Ultra Wide",
        battery: "5000 mAh",
        os: "Android 14 con One UI 6.1",
        storage: "256GB / 512GB / 1TB"
    },
    colors: [
      { name: 'Gris Titanio', hex: '#65666B', inStock: true },
      { name: 'Violeta Titanio', hex: '#6C6475', inStock: true },
      { name: 'Amarillo Titanio', hex: '#F4EBC3', inStock: false },
      { name: 'Negro Titanio', hex: '#1C1C1C', inStock: true }
    ],
    rating: 4.8,
    reviews: 95
  },
  {
    id: 'p3',
    name: 'iPhone 13 (Seminuevo)',
    tagline: 'Tu nuevo superpoder.',
    description: 'Calidad certificada InfinityStore. Batería al 90%+. Impecable.',
    longDescription: 'Nuestro iPhone 13 seminuevo ha pasado por una rigurosa inspección de 30 puntos. Disfruta del chip A15 Bionic ultrarrápido, modo Cine que añade poca profundidad de campo automáticamente y cambia el enfoque en tus videos, y un sistema avanzado de dos cámaras. Una opción inteligente y ecológica.',
    price: 499,
    originalPrice: 599,
    isOffer: true,
    category: 'Seminuevos',
    imageUrl: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1512054502232-10a0a035d672?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1603539947673-c9b41e421b98?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1530319067432-f2f08bc118f9?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Certificado Infinity', 'Chip A15 Bionic', 'Modo Cine', 'Garantía 6 Meses'],
    specs: {
        screen: "6.1\" Super Retina XDR OLED",
        processor: "A15 Bionic",
        camera: "12MP Main + 12MP Ultra Wide",
        battery: "Hasta 19h de video",
        os: "iOS 15 (Actualizable)",
        storage: "128GB / 256GB"
    },
    colors: [
      { name: 'Medianoche', hex: '#1C1E21', inStock: true },
      { name: 'Blanco Estelar', hex: '#F9F6EF', inStock: true },
      { name: 'Azul', hex: '#273E5D', inStock: true },
      { name: 'Rojo', hex: '#BF0013', inStock: true },
      { name: 'Verde', hex: '#394C38', inStock: false }
    ],
    rating: 4.7,
    reviews: 210
  },
  {
    id: 'p4',
    name: 'Xiaomi 13T Pro',
    tagline: 'Obra maestra a la vista.',
    description: 'Sistema de cámaras profesional Leica y carga HyperCharge de 120W.',
    longDescription: 'La esencia de tu obra maestra. El Xiaomi 13T Pro cuenta con lentes ópticas profesionales co-diseñadas con Leica. Pantalla CrystalRes AMOLED de 144Hz para una fluidez increíble y resistencia al agua y polvo IP68. La batería se carga al 100% en solo 19 minutos gracias a HyperCharge.',
    price: 699,
    category: 'Nuevos',
    imageUrl: 'https://images.unsplash.com/photo-1701689913325-7479c420ac88?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1550029330-8dbccaade535?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1604671368394-51829b5f6302?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Lentes Leica', 'Carga 120W', '144Hz AMOLED', 'MediaTek Dimensity 9200+'],
    specs: {
        screen: "6.67\" CrystalRes AMOLED 144Hz",
        processor: "Dimensity 9200+",
        camera: "50MP Main Leica + 50MP Telephoto + 12MP UW",
        battery: "5000 mAh (120W Carga)",
        os: "MIUI 14 basado en Android 13",
        storage: "512GB / 1TB"
    },
    colors: [
      { name: 'Negro', hex: '#000000', inStock: true },
      { name: 'Verde Pradera', hex: '#6B8E23', inStock: true },
      { name: 'Azul Alpino', hex: '#6C88C4', inStock: true }
    ],
    rating: 4.6,
    reviews: 42
  },
  {
    id: 'p5',
    name: 'Samsung S21 FE (Seminuevo)',
    tagline: 'Hecho para los fans.',
    description: 'Potencia y estilo a un precio increíble. Estado excelente.',
    longDescription: 'El Galaxy S21 FE 5G ofrece todo lo que te gusta en 6.4 pulgadas: una pantalla fluida con desplazamiento suave, una cámara de nivel profesional y una batería inteligente que dura todo el día. Este equipo seminuevo es la puerta de entrada perfecta al ecosistema Samsung sin gastar una fortuna.',
    price: 320,
    originalPrice: 399,
    isOffer: true,
    category: 'Seminuevos',
    imageUrl: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1626218174358-77b7f9a42029?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1612442443566-ae73729c243a?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1611420349526-6ca911d29834?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1575695342324-b77715782b6e?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Pantalla 120Hz', 'Triple Cámara', 'Snapdragon 888', 'Garantía Infinity'],
    specs: {
        screen: "6.4\" Dynamic AMOLED 2X 120Hz",
        processor: "Snapdragon 888 5G",
        camera: "12MP Main + 8MP Telephoto + 12MP UW",
        battery: "4500 mAh",
        os: "Android 12 (Actualizable)",
        storage: "128GB / 256GB"
    },
    colors: [
      { name: 'Lavanda', hex: '#C4B2E1', inStock: true },
      { name: 'Grafito', hex: '#3A3A3A', inStock: true },
      { name: 'Oliva', hex: '#6B705C', inStock: false },
      { name: 'Blanco', hex: '#F5F5F5', inStock: true }
    ],
    rating: 4.5,
    reviews: 180
  },
  {
    id: 'p6',
    name: 'AirPods Pro (2.ª gen)',
    tagline: 'Magia remasterizada.',
    description: 'Cancelación activa de ruido hasta 2 veces mayor.',
    longDescription: 'Los AirPods Pro se han rediseñado para ofrecer una experiencia de audio aún más rica. La cancelación activa de ruido de siguiente nivel y la transparencia adaptativa reducen el ruido externo. El audio espacial te sumerge en un sonido notablemente personal.',
    price: 249,
    category: 'Accesorios',
    imageUrl: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1603351154351-5cf233081e35?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1629367494173-c78a56567877?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Chip H2', 'Cancelación de Ruido', 'Audio Espacial', 'Estuche MagSafe'],
    specs: {
        screen: "N/A",
        processor: "Chip H2 de Apple",
        camera: "N/A",
        battery: "Hasta 6h de audio",
        os: "Compatible con iOS/Android",
        storage: "N/A"
    },
    colors: [
      { name: 'Blanco', hex: '#FFFFFF', inStock: true }
    ],
    rating: 4.9,
    reviews: 350
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "¿Por qué comprar Seminuevo?",
        date: "Mayo 12, 2025",
        excerpt: "Ahorra dinero y ayuda al planeta sin sacrificar calidad.",
        image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-heading first-letter:mr-3 first-letter:float-left text-slate-600" },
                "Comprar un celular seminuevo es una de las decisiones más inteligentes que puedes tomar hoy en día. No solo obtienes un dispositivo de gama alta por una fracción del precio, sino que también contribuyes activamente a reducir la basura electrónica."
            ),
            React.createElement("p", { className: "mb-8 text-slate-600" },
                "En InfinityStore, cada dispositivo pasa por un riguroso control de calidad. Verificamos batería, pantalla, cámaras y conectividad. Garantizamos que tu experiencia sea indistinguible de estrenar, excepto por el precio."
            ),
            React.createElement("blockquote", { className: "border-l-4 border-blue-600 pl-6 italic text-xl text-slate-900 my-10 font-heading" },
                "\"La tecnología no tiene que ser desechable. Dale una segunda vida a la innovación.\""
            )
        )
    },
    {
        id: 2,
        title: "iPhone 15 vs Galaxy S24",
        date: "Abril 28, 2025",
        excerpt: "La batalla de los titanes: ¿Titanio o Inteligencia Artificial?",
        image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-slate-600" },
                "Este año la competencia está más reñida que nunca. Apple apuesta por el diseño y la potencia bruta con su chasis de titanio y el chip A17 Pro. Samsung, por su parte, integra la IA en cada rincón del sistema operativo."
            ),
            React.createElement("p", { className: "mb-8 text-slate-600" },
                "Si eres creador de contenido, el video del iPhone sigue siendo rey. Si buscas productividad y multitarea, el S Pen y la pantalla del S24 Ultra no tienen rival."
            )
        )
    },
    {
        id: 3,
        title: "5G: ¿Realmente lo necesitas?",
        date: "Abril 15, 2025",
        excerpt: "Entendiendo la velocidad del futuro y cómo cambia tu día a día.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-slate-600" },
                "El 5G ya no es el futuro, es el presente. Pero, ¿vale la pena actualizar tu teléfono solo por esto? La respuesta corta es sí, si consumes mucho contenido multimedia o juegas en línea."
            ),
            React.createElement("p", { className: "mb-8 text-slate-600" },
                "La latencia ultra baja permite juegos competitivos sin wifi, y las descargas de películas en segundos cambian la forma en que viajas. Todos nuestros equipos en InfinityStore son compatibles con redes 5G globales."
            )
        )
    }
];

export const BRAND_NAME = 'InfinityStore';
