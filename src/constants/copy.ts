// Centralized copy constants for consistency - Multi-language support
import { type Locale } from '@/lib/i18n'

export const COPY: Record<Locale, any> = {
  es: {
    // CTA Labels
    CTA: {
      GRADE_RESTAURANT: 'Escanea tu restaurante',
      GET_FREE_DEMO: 'Agendar Demo',
      GET_STARTED: 'Comienza Hoy',
      VIEW_CASE_STUDIES: 'Ver Casos de Éxito',
      LEARN_MORE: 'Ver más'
    },
    
    // Company Info
    COMPANY: {
      NAME: 'RAY',
      TAGLINE: 'Aumenta delivery, reservas y tráfico de tu restaurante',
      DESCRIPTION: 'La plataforma #1 de marketing y ventas que ayuda a restaurants a conseguir mas clientes y aumentar facturación de pedidos de delivery sin comisión y reservas directas',
      SUPPORT_EMAIL: 'support@rayapp.io'
    },
    
    // WebChat
    WEBCHAT: {
      TITLE: 'RAY GPT',
      SUBTITLE: '¿En qué te puedo ayudar?',
      WELCOME_MESSAGE: '¡Hola! Soy RAY GPT 🤖 ¿En qué te puedo ayudar? Pregúntame sobre nuestros productos, precios, demos o cualquier cosa sobre RAY.',
      PLACEHOLDER: 'Pregúntame algo sobre RAY...',
      ERROR_MESSAGE: 'Lo siento, hubo un error de conexión. Por favor intenta de nuevo en un momento.',
      CHAT_WITH_RAY: 'Chatea con RAY',
      OPEN_CHAT: 'Abrir chat',
      CLOSE_CHAT: 'Cerrar chat',
      SEND: 'Enviar'
    },
    
    // Products
    PRODUCTS: {
      BOOKINGS: {
        NAME: 'Reservas sin comisión',
        TAGLINE: 'Maximiza la ocupación de mesas con gestión inteligente de reservas',
        DESCRIPTION: 'Maximiza la ocupación de mesas con gestión inteligente de reservas, listas de espera y herramientas de relación con clientes.',
        METRIC: '+35%',
        METRIC_LABEL: 'utilización de mesas'
      },
      WALK_INS: {
        NAME: 'Más tráfico en sucursal',
        TAGLINE: 'Convierte búsquedas en Google Maps en visitas con marketing impulsado por IA',
        DESCRIPTION: 'Convierte búsquedas en Google Maps en tráfico a tu restaurante con marketing impulsado por IA que domina Google Maps y genera confianza a través de reseñas.',
        METRIC: '+47%',
        METRIC_LABEL: 'aumento promedio'
      },
      ONLINE_ORDERS: {
        NAME: 'Pedidos Online',
        TAGLINE: 'Aumenta ingresos desde canales digitales',
        DESCRIPTION: 'Aumenta ingresos desde canales digitales con sistemas de pedidos integrados y análisis completos.',
        METRIC: '+27%',
        METRIC_LABEL: 'pedidos online'
      },
      WHATSAPP_ORDERS: {
        NAME: 'Delivery por WhatsApp',
        TAGLINE: 'Convierte DMs de restaurante en pedidos',
        DESCRIPTION: 'Deja de perder clientes hambrientos por respuestas lentas. Nuestro sistema de IA toma pedidos, reserva mesas y responde preguntas del menú 24/7.',
        METRIC: '+28%',
        METRIC_LABEL: 'más pedidos'
      },
      VOICE_AGENT: {
        NAME: 'Asistente de Voz IA',
        TAGLINE: 'Convierte llamadas en pedidos y reservas',
        DESCRIPTION: 'Nunca pierdas otra llamada. Nuestro asistente de IA responde llamadas, toma pedidos, hace reservas y responde preguntas del menú 24/7.',
        METRIC: '+35%',
        METRIC_LABEL: 'llamadas convertidas'
      },
      WEBSITE_BUILDER: {
        NAME: 'Website de tu restaurante',
        TAGLINE: 'Sitios web construidos para ventas primero',
        DESCRIPTION: 'Convierte más visitantes en clientes con un sitio web impulsado por IA que optimiza conversiones y domina Google.',
        METRIC: '+50%',
        METRIC_LABEL: 'más conversiones web'
      },
      ZERO_COMMISSION_DELIVERY: {
        NAME: 'Delivery Sin Comisión',
        TAGLINE: 'Delivery rentable y excelente servicio',
        DESCRIPTION: 'Delivery rentable por conductores mejor calificados a precio justo sin comisiones de terceros.',
        METRIC: '0%',
        METRIC_LABEL: 'comisiones'
      },
      BRANDED_APPS: {
        NAME: 'App Móvil Personalizada',
        TAGLINE: 'App móvil de 5 estrellas',
        DESCRIPTION: 'Haz crecer pedidos repetidos con una app móvil de 5 estrellas que mantiene a los clientes regresando.',
        METRIC: '+85%',
        METRIC_LABEL: 'más pedidos repetidos'
      },
      LOYALTY: {
        NAME: 'Programa de Loyalty',
        TAGLINE: 'Recompensas como las grandes cadenas',
        DESCRIPTION: 'Construye lealtad con un programa de recompensas inspirado en las grandes marcas que funciona automáticamente.',
        METRIC: '+60%',
        METRIC_LABEL: 'retención de clientes'
      }
    },
    
    // Common Headlines
    HEADLINES: {
      THREE_PRODUCTS: 'Ocho soluciones. Un solo producto.',
      CHOOSE_PLATFORM: 'Elige una, varias o desbloquea la plataforma completa.',
      PROVEN_RESULTS: 'Resultados Comprobados de Restaurantes Reales',
      READY_TO_GROW: '¿Listo para aumentar los ingresos de tu restaurante?'
    },
    
    // Trust Indicators
    TRUST: {
      RESTAURANTS_COUNT: '1,000+ restaurantes',
      GROWTH_GUARANTEE: 'Garantía de 30%+ direcciones en Google Maps',
      NO_CONTRACTS: 'Sin compromiso',
      RESULTS_TIMEFRAME: 'Resultados en 60-90 días',
      TRUSTED_BY: 'Ya confian en RAY más de 1,000 restaurantes'
    },

    // Homepage sections
    HOMEPAGE: {
      HERO: {
        TITLE: 'Genera más',
        TITLE_HIGHLIGHT: 'delivery sin comisión, reservas directas y más tráfico\u00A0en\u00A0tu\u00A0restaurante',
        SUBTITLE: 'RAY es la plataforma de ventas #1 que ayuda a propietarios de restaurantes a atraer más clientes, aumentar ingresos de pedidos directos, reservas directas y tráfico en sucursal'
      },
      TRUST_METRICS: {
        TITLE: 'Por qué los Propietarios de Restaurantes Eligen RAY',
        SUBTITLE: 'La plataforma comprobada que entrega resultados para propietarios de restaurantes a nivel nacional',
        SALES_PLATFORM: 'WhatsApp, Delivery, Reservas y Loyalty todo en uno',
        SALES_PLATFORM_DESC: 'Plataforma completa de marketing para restaurantes',
        RESTAURANTS_TRUST: 'Un sistema probado que aumenta ventas (no una herramienta sin resultados)',
        RESTAURANTS_TRUST_DESC: 'Metodología garantizada con resultados comprobados',
        SUCCESS_STORIES: 'Integrado al POS y pensado para restaurantes independientes',
        SUCCESS_STORIES_DESC: 'Construido específicamente para propietarios de restaurantes locales'
      },
      PRODUCTS_SECTION: {
        BADGE: 'Plataforma de Crecimiento de Ingresos Comprobada',
        SUBTITLE: 'RAY ofrece ocho soluciones integradas diseñadas para hacer crecer los ingresos de restaurantes tanto offline como online. Elige tu enfoque o combina todo para máximo impacto.',
        BOTTOM_CTA: '¿Listo para ver cómo RAY puede transformar tu restaurante?',
        VIEW_PRICING: 'Ver Precios y Planes'
      }
    },

    // FAQ Section
    FAQ: {
      TITLE: 'Preguntas Frecuentes',
      SUBTITLE: 'Respuestas a preguntas comunes sobre cómo RAY ayuda a los restaurantes a crecer.',
      QUESTIONS: [
        {
          question: '¿Qué necesito para comenzar?',
          answer: 'Configuramos la mayoría de restaurantes en una semana. Tendrás un especialista en incorporación para guiarte a través del proceso.'
        },
        {
          question: '¿Se hacen cargo de mi POS?',
          answer: 'No, pero podemos inyectar automáticamente pedidos en muchos de los principales sistemas POS.'
        },
        {
          question: '¿Qué pasa con mi sitio web actual?',
          answer: 'Hacemos un backup de tu website actual. Luego RAY reemplaza tu sitio web actual. Redirigimos tu dominio a tu nuevo sitio web con RAY.'
        },
        {
          question: '¿Hacen marketing en redes sociales?',
          answer: 'No. Hemos encontrado que las redes sociales no tienen gran ROI para la mayoría de restaurantes locales. La búsqueda de Google está comprobada para impulsar ventas directas.'
        },
        {
          question: '¿Cómo logran que los clientes pidan directamente de mí?',
          answer: 'Te ayudamos a educar a tus clientes y configurar programas de recompensas para que los clientes ganen puntos cuando piden directamente.'
        }
      ]
    },

    // Testimonials Section
    TESTIMONIALS: {
      BADGE: 'Historias de Éxito de Clientes',
      TITLE: 'Resultados Reales de Restaurantes Reales',
      SUBTITLE: 'Ve cómo propietarios de restaurantes en todo el país han transformado su negocio con la plataforma de marketing de RAY.',
      REVENUE_GROWTH: 'Crecimiento de Ingresos',
      VIEW_ALL: 'Ver Todas las Historias de Éxito'
    },

    // CTA Section
    CTA_SECTION: {
      BADGE: '¿Listo para Hacer Crecer Tu Restaurante?',
      TITLE: '¿Listo para aumentar los ingresos de tu restaurante?',
      SUBTITLE: 'Únete a cientos de restaurantes exitosos usando RAY para impulsar más visitas, pedidos y reseñas positivas. Obtén tu escaneo gratuito de restaurante hoy.',
      SCAN_RESTAURANT: 'Escanea tu restaurante',
      GUARANTEE: 'Garantía de 30%+ direcciones en Google Maps',
      NO_COMMITMENT: 'Sin compromiso',
      RESULTS_TIME: 'Resultados en 60-90 días'
    },

    // Walk-Ins Page
    WALK_INS_PAGE: {
      BADGE: 'Marketing Local Impulsado por IA',
      HERO_TITLE: 'Convierte Búsquedas de Google Maps en',
      HERO_TITLE_HIGHLIGHT: 'Visitas a tu restaurante',
      HERO_SUBTITLE: 'Domina Google Maps y búsquedas de Google Maps para atraer más clientes hambrientos a la puerta de tu restaurante.',
      TALK_TO_EXPERT: 'Agenda una demo',
      SCAN_RESTAURANT: 'Escanea tu restaurante',
      AVG_INCREASE: '47% aumento promedio',
      RESULTS_TIME: 'Resultados en 60-90 días',
      MORE_VISIBILITY: 'Más visibilidad',
      FEATURES: {
        GET_FOUND: {
          TITLE: 'Ser Encontrado Primero',
          DESCRIPTION: 'Posiciónate #1 en Google Maps cuando clientes hambrientos busquen cerca',
          DETAILS: [
            'Domina búsquedas de "restaurantes cerca de mí"',
            'Aparece en recomendaciones de IA y búsquedas por voz'
          ]
        },
        REVIEWS: {
          TITLE: 'Reseñas y Reputación',
          DESCRIPTION: 'Construye confianza con recolección automática de reseñas y soporte de respuesta',
          DETAILS: [
            'Tabla de clasificación del personal motiva la recolección de reseñas',
            'Plantillas de respuesta profesional y orientación'
          ]
        },
        LISTINGS: {
          TITLE: 'Listados y Sincronización de Datos',
          DESCRIPTION: 'Mantén horarios, menús e información precisa en todas las plataformas automáticamente',
          DETAILS: [
            'Sincroniza con Google, Yelp, Facebook, Apple Maps + 50 más',
            'Una actualización se propaga instantáneamente a todas partes'
          ]
        },
        LOCAL_PAGES: {
          TITLE: 'Páginas Locales y Schema',
          DESCRIPTION: 'Páginas de ubicación optimizadas para motores de búsqueda y clientes',
          DETAILS: [
            'Páginas optimizadas para SEO para cada ubicación',
            'Datos estructurados ayudan a los motores de búsqueda a entender tu negocio'
          ]
        },
        INSIGHTS: {
          TITLE: 'Perspectivas e Informes',
          DESCRIPTION: 'Rastrea direcciones de Google Maps, llamadas y ROI con paneles claros',
          DETAILS: [
            'Monitorea solicitudes de direcciones del Perfil de Negocio de Google',
            'Ve qué esfuerzos generan más tráfico peatonal'
          ]
        },
        PHOTOS: {
          TITLE: 'Gestión de Fotos y P&R',
          DESCRIPTION: 'Gestiona fotos y responde preguntas de clientes automáticamente',
          DETAILS: [
            'Sube fotos de alta calidad automáticamente',
            'Responde preguntas frecuentes de clientes'
          ]
        }
      }
    },

    // WhatsApp Orders Page
    WHATSAPP_ORDERS_PAGE: {
      BADGE: 'Sistema de IA 24/7',
      HERO_TITLE: 'Convierte DMs de Restaurante en',
      HERO_TITLE_HIGHLIGHT: 'Pedidos',
      HERO_SUBTITLE: 'Deja de perder clientes hambrientos por respuestas lentas. Nuestro sistema de IA toma pedidos, reserva mesas y responde preguntas del menú las 24 horas.',
      CTA_PRIMARY: 'Probar Chat',
      CTA_SECONDARY: 'Probar Llamada',
      PROBLEM_SECTION: {
        TITLE: 'Demasiados DMs. Personal insuficiente. 😤',
        PROBLEMS: [
          {
            TITLE: 'Los clientes te envían mensajes día y noche en todas las plataformas',
            DESCRIPTION: 'Instagram, Facebook, WhatsApp, Google - están por todas partes'
          },
          {
            TITLE: 'Tu personal no puede responder lo suficientemente rápido a todos',
            DESCRIPTION: 'Las respuestas lentas = clientes perdidos y reseñas negativas'
          },
          {
            TITLE: 'Chats perdidos = pedidos perdidos y clientes frustrados',
            DESCRIPTION: 'Cada mensaje sin respuesta es dinero que se va por la ventana'
          }
        ]
      },
      SOLUTION_SECTION: {
        TITLE: 'Nuestro agente de IA nunca duerme. ⚡',
        SUBTITLE: 'Responde en segundos, para que nunca pierdas un huésped.',
        FEATURES: [
          '✅ Toma pedidos mientras duermes',
          '📅 Reserva mesas automáticamente',
          '💬 Responde preguntas del menú',
          '📢 Envía campañas inteligentes'
        ]
      },
      CHANNELS_SECTION: {
        TITLE: 'Un Agente. Tres Canales. 🚀',
        SUBTITLE: 'Maneja WhatsApp, Instagram y Facebook desde un solo lugar.',
        WHATSAPP: {
          TITLE: 'WhatsApp Business',
          DESCRIPTION: 'Respuestas automáticas 24/7'
        },
        INSTAGRAM: {
          TITLE: 'Instagram DMs',
          DESCRIPTION: 'Convierte seguidores en clientes'
        },
        FACEBOOK: {
          TITLE: 'Facebook Messenger',
          DESCRIPTION: 'Captura cada oportunidad'
        }
      },
      CONVERSATION_SECTION: {
        TITLE: 'Ve Cómo Funciona 👀',
        CUSTOMER_MESSAGES: [
          'Hola! Están abiertos?',
          'Perfecto! Tienen mesas para 4 personas a las 8pm?',
          'Genial! Bajo el nombre de María García',
          '¡Muchas gracias! 😊'
        ],
        AI_RESPONSES: [
          '¡Hola María! Sí, estamos abiertos hasta las 11pm. ¿En qué puedo ayudarte? 😊',
          '¡Por supuesto! Tengo disponibilidad para 4 personas a las 8:00pm. ¿Te gustaría reservar?',
          '¡Perfecto! He reservado una mesa para 4 personas a las 8:00pm bajo el nombre de María García. Te enviaré un recordatorio 2 horas antes. ¿Algo más en lo que pueda ayudarte?',
          '¡De nada! Nos vemos esta noche. ¡Que tengas un excelente día! 🍽️'
        ]
      },
      INTEGRATION_SECTION: {
        TITLE: 'Se Integra con Tu Sistema POS 🔗',
        SUBTITLE: 'Funciona con los sistemas que ya usas.',
        POS_SYSTEMS: ['Thinkion', 'Aloha', 'Square', 'Toast']
      },
      FINAL_CTA_TITLE: 'Estar donde están tus clientes — sin mover un dedo',
      FINAL_CTA_SUBTITLE: 'Únete a cientos de restaurantes que ya usan IA para impulsar sus ventas. Comienza tu prueba gratuita hoy y ve la diferencia en 24 horas.',
      FINAL_CTA_BUTTON: 'Reservar una Demo Ahora',
      FINAL_CTA_DISCLAIMER: 'Sin tarjeta de crédito requerida • Prueba gratuita de 14 días • Configuración en menos de 5 minutos'
    },

    // Bookings Page  
    BOOKINGS_PAGE: {
      BADGE: 'Gestión Inteligente de Reservas',
      HERO_TITLE: 'Obtén Más Reservas Directas. Conéctate con',
      HERO_TITLE_HIGHLIGHT: 'Cada Cliente',
      HERO_SUBTITLE: 'Gestiona reservas, walk-ins y listas de espera sin problemas mientras construyes relaciones duraderas con tus clientes que generan visitas repetidas.',
      CTA_PRIMARY: 'Escanea tu restaurante',
      CTA_SECONDARY: 'Agenda una demo',
      STATS: {
        TABLE_UTILIZATION: '+35% utilización de mesas',
        NO_SHOWS: '40% menos no-shows'
      },
      BOOKING_WIDGET: {
        RESERVE_TABLE: 'Reserva tu Mesa',
        AVAILABLE_TONIGHT: 'Disponible esta noche',
        PARTY_SIZE: 'Tamaño del Grupo',
        PEOPLE_2: '2 personas',
        PEOPLE_4: '4 personas',
        PEOPLE_6: '6 personas',
        BOOK_TABLE: 'Reservar Mesa',
        TABLE_UTILIZATION_STAT: '+35%',
        TABLE_UTILIZATION_LABEL: 'Utilización de mesas',
        NO_SHOWS_STAT: '-40%',
        NO_SHOWS_LABEL: 'No-shows'
      },
      FEATURES_SECTION: {
        BADGE: 'Gestión Completa de Reservas',
        TITLE: 'Todo lo que Necesitas para Maximizar Cada Mesa',
        SUBTITLE: 'Desde reservas online hasta gestión de walk-ins, nuestra plataforma maneja cada aspecto de las reservas de clientes mientras construye relaciones que impulsan negocios repetidos.',
        FEATURES: [
          {
            TITLE: 'Reservas Online y Mayor Visibilidad',
            DESCRIPTION: 'Captura reservas 24/7 con un widget de reservas integrado que aumenta tu presencia online.'
          },
          {
            TITLE: 'Gestión de Lista de Espera y Walk-ins',
            DESCRIPTION: 'Nunca rechaces a un huésped otra vez. Gestiona walk-ins y listas de espera eficientemente durante horas pico.'
          },
          {
            TITLE: 'CRM de clientes y preferencias',
            DESCRIPTION: 'Construye relaciones duraderas con perfiles detallados de clientes, preferencias e historial de visitas.'
          },
          {
            TITLE: 'Análisis e Insights',
            DESCRIPTION: 'Toma decisiones basadas en datos con análisis comprensivos sobre reservas, no-shows y flujo de clientes.'
          },
          {
            TITLE: 'Recordatorios y Confirmaciones Automáticas',
            DESCRIPTION: 'Reduce no-shows y mejora la experiencia del huésped con comunicación automatizada.'
          },
          {
            TITLE: 'Soporte de Lealtad y Recompensas',
            DESCRIPTION: 'Fomenta visitas repetidas con programas de lealtad integrados y sistemas de recompensas.'
          }
        ]
      },
      RESULTS_SECTION: {
        TITLE: 'Resultados Comprobados para Operaciones de Restaurantes',
        SUBTITLE: 'Ve el impacto medible que nuestra plataforma de reservas tiene en la eficiencia y ingresos del restaurante.',
        STATS: [
          {
            TITLE: 'Detalles de Contacto',
            SUBTITLE: 'de cada una de tus reservas',
            DESCRIPTION: 'Construye relaciones duraderas'
          },
          {
            TITLE: '+28%',
            SUBTITLE: 'Reservas Repetidas',
            DESCRIPTION: 'Clientes que regresan'
          },
          {
            TITLE: '-40%',
            SUBTITLE: 'Tasa de No-Shows',
            DESCRIPTION: 'Gracias a recordatorios automáticos'
          }
        ]
      },
      TESTIMONIAL: {
        QUOTE: 'La plataforma de reservas de RAY transformó cómo gestionamos nuestro restaurante. Pasamos de rechazar constantemente personas a maximizar cada mesa. Solo la función de lista de espera aumentó nuestros ingresos en 35% durante horas pico, y a nuestros clientes les encanta la experiencia sin problemas.',
        AUTHOR: 'María Rodríguez',
        POSITION: 'Propietaria, Restaurante Bella Vista'
      },
      FINAL_CTA: {
        BADGE: 'Comienza a Optimizar tus Reservas Hoy',
        TITLE: '¿Listo para maximizar la ocupación de tus mesas?',
        SUBTITLE: 'Ve cómo la plataforma de reservas de RAY puede transformar las operaciones de tu restaurante. Solicita una demo gratuita y descubre cómo convertir cada mesa en ingresos.',
        CTA_PRIMARY: 'Escanea tu restaurante',
        CTA_SECONDARY: 'Solicitar Demo Gratuita',
        GUARANTEES: [
          'Garantía de 30%+ direcciones en Google Maps',
          'Sin contratos a largo plazo',
          'Resultados en 60-90 días'
        ]
      }
    },

    // Online Orders Page
    ONLINE_ORDERS_PAGE: {
      BADGE: 'Crecimiento de Ingresos Digitales',
      HERO_TITLE: 'Obtén más',
      HERO_TITLE_HIGHLIGHT: 'pedidos online directos',
      HERO_SUBTITLE: 'Transforma tu presencia digital en una máquina generadora de ingresos. Nuestra plataforma se integra perfectamente con sistemas de reservas, optimiza pedidos directos y proporciona las perspectivas que necesitas para maximizar cada punto de contacto con clientes online.',
      CTA_PRIMARY: 'Escanea tu restaurante',
      STATS: {
        ONLINE_ORDERS: '+27% pedidos online en 90 días',
        HIGHER_MARGINS: '15% márgenes más altos vs. terceros'
      },
      STATS_WIDGETS: {
        ONLINE_ORDERS_STAT: '+27%',
        ONLINE_ORDERS_LABEL: 'Pedidos online',
        ONLINE_ORDERS_SUBLABEL: 'en 90 días',
        HIGHER_MARGINS_STAT: '15%',
        HIGHER_MARGINS_LABEL: 'Márgenes más altos',
        HIGHER_MARGINS_SUBLABEL: 'vs. terceros'
      },
      FEATURES_SECTION: {
        TITLE: 'Maximiza Cada Canal de Ingresos Online',
        SUBTITLE: 'Desde reservas hasta pedidos de delivery, nuestra plataforma optimiza cada punto de contacto digital para generar más ingresos y márgenes de ganancia más altos.',
        FEATURES: [
          {
            TITLE: 'Reservas',
            SUBTITLE: 'Gestión de Reservas Sin Problemas',
            DESCRIPTION: 'Integra con plataformas de reservas populares y convierte más navegadores en comensales.',
            DETAILS: [
              'Integraciones con OpenTable, Resy y reservas personalizadas',
              'Gestión de disponibilidad en tiempo real',
              'Emails automáticos de confirmación y recordatorio',
              'Estrategias de reducción de no-shows',
              'Identificación y tratamiento de clientes VIP'
            ]
          },
          {
            TITLE: 'Pedidos y Delivery',
            SUBTITLE: 'Crecimiento de Ingresos Directos',
            DESCRIPTION: 'Recupera margen de plataformas de delivery y haz crecer pedidos directos a través de tus propios canales.',
            DETAILS: [
              'Configuración de sistema de pedidos online directo',
              'Optimización de plataforma de delivery',
              'Soluciones de pedidos sin comisiones',
              'Automatización de upselling y cross-selling',
              'Integración de programa de lealtad'
            ]
          },
          {
            TITLE: 'Datos e Insights',
            SUBTITLE: 'Inteligencia de Ingresos',
            DESCRIPTION: 'Dashboards comprensivos mostrando reservas, pedidos y aumento de ingresos en todos los canales.',
            DETAILS: [
              'Seguimiento de ingresos en tiempo real',
              'Análisis de valor de vida del cliente',
              'Pronóstico de horas pico y demanda',
              'Comparación de rendimiento de canales',
              'Medición y reportes de ROI'
            ]
          }
        ]
      },
      RESULTS_SECTION: {
        TITLE: 'Resultados Comprobados en Todos los Canales',
        SUBTITLE: 'Nuestros clientes ven mejoras medibles en ingresos online, pedidos directos y márgenes de ganancia dentro de los primeros 90 días.',
        STATS: [
          {
            VALUE: '+27%',
            LABEL: 'Crecimiento de Pedidos Online',
            DESCRIPTION: 'Aumento promedio en 90 días'
          },
          {
            VALUE: '+28%',
            LABEL: 'Pedidos Directos',
            DESCRIPTION: 'Reducción en dependencia de delivery de terceros'
          },
          {
            VALUE: '+42%',
            LABEL: 'Conversión de Reservas',
            DESCRIPTION: 'Más visitantes del sitio web se convierten en comensales'
          },
          {
            VALUE: '15%',
            LABEL: 'Márgenes Más Altos',
            DESCRIPTION: 'Al reducir comisiones de terceros'
          }
        ]
      },
      FINAL_CTA: {
        TITLE: '¿Listo para maximizar tus ingresos online?',
        SUBTITLE: 'Descubre cómo RAY puede optimizar tus reservas, pedidos y deliveries.',
        CTA_BUTTON: 'Comenzar Hoy'
      }
    },

    // Demo Page
    DEMO_PAGE: {
      HERO_TITLE: 'Ve la plataforma de ventas #1 para restaurantes en acción',
      HERO_SUBTITLE: 'Únete a {RESTAURANTS_COUNT} que ya están haciendo crecer sus ingresos con {COMPANY_NAME}.',
      DEMO_INTRO: 'En tu demo de 20 minutos, te mostraremos cómo',
      FORM_TITLE: 'Agenda tu demo gratuita',
      BENEFITS: [
        {
          TITLE: 'Delivery Directo',
          DESCRIPTION: 'Aumenta los pedidos de delivery con nuestro agente de WhatsApp e Instagram y tu website que aparece en Google Search y buscadores AI'
        },
        {
          TITLE: 'Reservas sin comisión',
          DESCRIPTION: 'Consigue reservas sin comisión por nuestro agente de WhatsApp, Instagram y tu propio website'
        },
        {
          TITLE: 'Más tráfico de Google Maps',
          DESCRIPTION: 'Garantizamos 30% más visitas desde Google Maps de las que tienes hoy, optimizando el perfil Google Maps del restaurante.'
        },
        {
          TITLE: 'Casos de restaurantes reals',
          DESCRIPTION: 'Te mostraremos casos reales en que las visitas desde Google Maps aumentan en los primeros 60-90 días de usar RAY'
        }
      ],
      STATS: {
        NAVIGATION_INCREASE: '+47%',
        NAVIGATION_LABEL: 'Aumento Promedio de Navegación',
        DAYS_TO_RESULTS: '60-90',
        DAYS_LABEL: 'Días para Resultados',
        RESTAURANTS_COUNT: '100+',
        RESTAURANTS_LABEL: 'Restaurantes Confían en RAY'
      },
      TESTIMONIAL: {
        QUOTE: 'RAY transformó nuestro negocio. Hemos visto un aumento del 47% en visitas y nuestros pedidos online han crecido constantemente cada mes.',
        AUTHOR: 'Juan Ignacio Chereminiano, CEO de Temple Craft Wynwood'
      },
      FORM: {
        ROLE_LABEL: 'Rol',
        ROLE_PLACEHOLDER: 'Selecciona uno...',
        ROLE_OPTIONS: {
          OWNER: 'Propietario de Restaurante',
          MANAGER: 'Gerente de Restaurante',
          MARKETING: 'Gerente de Marketing',
          OTHER: 'Otro'
        },
        FIRST_NAME_LABEL: 'Nombre',
        FIRST_NAME_PLACEHOLDER: 'Nombre',
        LAST_NAME_LABEL: 'Apellido',
        LAST_NAME_PLACEHOLDER: 'Apellido',
        EMAIL_LABEL: 'Email',
        EMAIL_PLACEHOLDER: 'Email',
        PHONE_LABEL: 'Celular',
        PHONE_PLACEHOLDER: 'Celular',
        RESTAURANT_NAME_LABEL: 'Nombre del restaurante',
        RESTAURANT_NAME_PLACEHOLDER: 'Busca el nombre de tu restaurante...',
        RESTAURANT_NAME_HINT: 'Comienza a escribir, luego selecciona tu restaurante de la lista',
        HOW_HEARD_LABEL: '¿Cómo te enteraste de nosotros?',
        HOW_HEARD_PLACEHOLDER: 'Selecciona uno...',
        HOW_HEARD_OPTIONS: {
          GOOGLE: 'Búsqueda de Google',
          SOCIAL: 'Redes Sociales',
          REFERRAL: 'Referencia',
          ADVERTISING: 'Publicidad Online',
          OTHER: 'Otro'
        },
        CONSENT_TEXT: 'Acepto recibir mensajes de texto automatizados de {COMPANY_NAME} al número de teléfono proporcionado para ayudarme a programar una demo y evaluar la plataforma. El consentimiento no es obligatorio.',
        CONSENT_DISCLAIMER: 'Pueden aplicar tarifas de mensajes y datos. Responde STOP para cancelar en cualquier momento.',
        SUBMIT_BUTTON: 'Obtener una demo gratuita →',
        SUBMITTING: 'Enviando...',
        SUCCESS_MESSAGE: '✓ ¡Formulario enviado exitosamente! Te enviaremos un email en breve.',
        ERROR_MESSAGE: '✗ Algo salió mal. Por favor intenta de nuevo o contacta soporte.',
        LEGAL_TEXT: 'Al proporcionarnos tu información, estás consintiendo la recopilación y uso de tu información de acuerdo con nuestros',
        TERMS_LINK: 'Términos de Servicio',
        PRIVACY_LINK: 'Política de Privacidad',
        VALIDATION: {
          ROLE_REQUIRED: 'Por favor selecciona tu rol',
          FIRST_NAME_REQUIRED: 'El nombre es obligatorio',
          LAST_NAME_REQUIRED: 'El apellido es obligatorio',
          EMAIL_REQUIRED: 'El email es obligatorio',
          EMAIL_INVALID: 'Por favor ingresa una dirección de email válida',
          PHONE_REQUIRED: 'El número de teléfono es obligatorio',
          PHONE_INVALID_US: 'Por favor ingresa un número de teléfono válido de 10 dígitos',
          PHONE_INVALID_INTL: 'Por favor ingresa un número de teléfono internacional válido que comience con "+" y tenga al menos 8 caracteres'
        }
      }
    },

    // Case Studies Pages
    CASE_STUDIES_PAGE: {
      BADGE: 'Historias de Éxito Comprobadas',
      HERO_TITLE: 'Resultados Reales de',
      HERO_TITLE_HIGHLIGHT: 'Restaurantes Reales',
      HERO_SUBTITLE: 'Descubre cómo los restaurantes han logrado un crecimiento notable con la plataforma de RAY.',
      READ_STORY: 'Leer Historia'
    },

    CASE_STUDIES_DATA: {
      METRIC_LABELS: {
        GOOGLE_MAPS_VIEWS: 'Vistas de Google Maps',
        WALK_INS: 'Walk-ins',
        GOOGLE_RATING: 'Calificación Google',
        GOOGLE_MAPS_DIRECTIONS: 'Direcciones Google Maps',
        MONTHLY_REVENUE: 'Ingresos Mensuales',
        BOOKINGS_GROWTH: 'Crecimiento Reservas',
        LOCAL_VISIBILITY: 'Visibilidad Local',
        CONSCIOUS_CUSTOMERS: 'Clientes Conscientes',
        GREEN_VISIBILITY: 'Visibilidad Verde',
        FOOT_TRAFFIC: 'Tráfico Peatonal',
        BRAND_VISIBILITY: 'Visibilidad de Marca',
        SALES_GROWTH: 'Crecimiento Ventas',
        CRAFT_BEER_SALES: 'Ventas Cerveza Artesanal',
        DELIVERY_ORDERS: 'Pedidos Delivery',
        ONLINE_BOOKINGS: 'Reservas Online',
        MORNING_TRAFFIC: 'Tráfico Matutino',
        EVENT_BOOKINGS: 'Reservas de Eventos',
        TABLE_TURNOVER: 'Rotación de Mesas',
        CATERING_BOOKINGS: 'Reservas Catering',
        BREAKFAST_ORDERS: 'Pedidos Desayuno',
        LUNCH_ORDERS: 'Pedidos Almuerzo',
        RESERVATION_INCREASE: 'Aumento Reservas',
        AFTERNOON_TRAFFIC: 'Tráfico Vespertino',
        QUICK_SERVICE_ORDERS: 'Pedidos Servicio Rápido',
        MOBILE_PRE_ORDERS: 'Pre-pedidos Móviles',
        AVERAGE_RATING: 'Calificación Promedio'
      },
      LOCATIONS: {
        WYNWOOD_MIAMI: 'Wynwood, Miami',
        MIAMI_FL: 'Miami, FL',
        MULTIPLE_LOCATIONS: 'Múltiples Ubicaciones',
        ECO_CONSCIOUS_MARKET: 'Mercado Eco-Consciente',
        COFFEE_MARKET: 'Mercado Cafetero',
        CRAFT_BREWERY_MARKET: 'Mercado Cervecero Artesanal',
        SPORTS_BAR_MARKET: 'Mercado Sports Bar',
        DESSERT_MARKET: 'Mercado Postres',
        CRAFT_BEER_BAR: 'Bar Cerveza Artesanal',
        PIZZA_DELIVERY: 'Pizza Delivery',
        RESTAURANT_GROUP: 'Grupo Restaurantero',
        ITALIAN_DINING: 'Gastronomía Italiana',
        CAFE_CULTURE: 'Cultura Café',
        BEER_TAPROOM: 'Taproom Cervecero',
        FAST_CASUAL: 'Fast Casual',
        MEXICAN_CUISINE: 'Cocina Mexicana',
        FRENCH_BAKERY: 'Panadería Francesa',
        BAKERY_CAFE: 'Café Panadería',
        CORPORATE_LUNCH: 'Almuerzo Corporativo',
        ITALIAN_PASTA: 'Pasta Italiana',
        TEA_WELLNESS: 'Té y Bienestar',
        CONVENIENCE_STORE: 'Tienda Conveniencia',
        GRILL_DISTRICT: 'Distrito Parrilla',
        SUSTAINABLE_DINING: 'Gastronomía Sostenible',
        TROPICAL_DINING: 'Gastronomía Tropical',
        CUBAN_COFFEE_CULTURE: 'Cultura Cafetera Cubana'
      },
      INDUSTRIES: {
        CRAFT_BEER_NIGHTLIFE: 'Cerveza Artesanal y Vida Nocturna',
        NIGHTLIFE_DINING: 'Vida Nocturna y Gastronomía',
        RESTAURANT_GROUP: 'Grupo Restaurantero',
        SUSTAINABLE_RESTAURANT: 'Restaurante Sustentable',
        CUBAN_RESTAURANT: 'Restaurante Cubano',
        COFFEE_CHAIN: 'Cadena Cafés',
        CRAFT_BREWERY: 'Cervecería Artesanal',
        SPORTS_BAR: 'Sports Bar',
        DESSERT_SHOP: 'Tienda Postres',
        CRAFT_BEER_BAR: 'Bar Cerveza Artesanal',
        COCKTAIL_BAR: 'Bar de Cócteles',
        PIZZA_RESTAURANT: 'Pizzería',
        HOSPITALITY_GROUP: 'Grupo Hospitalario',
        ITALIAN_RESTAURANT: 'Restaurante Italiano',
        ITALIAN_SEAFOOD: 'Mariscos Italianos',
        MODERN_GRILL: 'Parrilla Moderna',
        SUSTAINABLE_SEAFOOD: 'Mariscos Sostenibles',
        CARIBBEAN_FUSION: 'Fusión Caribeña',
        CUBAN_CAFE: 'Cafetería Cubana',
        CAFE_CHAIN: 'Cadena Cafés',
        BREWERY_TAPROOM: 'Taproom Cervecería',
        FAST_SERVICE: 'Servicio Rápido',
        MEXICAN_RESTAURANT: 'Restaurante Mexicano',
        FRENCH_CAFE: 'Café Francés',
        BAKERY: 'Panadería',
        CORPORATE_CATERING: 'Catering Corporativo',
        PASTA_HOUSE: 'Casa de Pastas',
        TEA_HOUSE: 'Casa de Té',
        CONVENIENCE_CHAIN: 'Cadena Conveniencia'
      },
      HEADLINES: {
        TEMPLE_CRAFT: 'Del #15 al #1 en Google Maps',
        CHIMBA_MIAMI: 'Crecimiento Explosivo en Visibilidad Local',
        HAVANA_1957: 'Excelencia Cubana con Marketing Digital',
        GREEN_EAT: 'Conectando con Clientes Eco-Conscientes',
        HAVANNA: 'Modernización Digital Manteniendo Tradición',
        CRAFT: 'Construyendo Comunidad Cervecera Artesanal',
        WINGSFC: 'Maximizando Ingresos en Días de Juego',
        DOLCEZZA: 'Crecimiento Constante Mes tras Mes',
        LA_BIRRA_BAR: 'Creando Comunidad de Amantes de la Cerveza',
        ALMACEN_PIZZAS: 'Transformación Completa del Delivery',
        EFES_MG: 'Imperio Unificado de Reservas',
        LA_PAROLACCIA: 'El Favorito del Barrio Italiano',
        LIBERTINO_CAFE: 'El Lugar Matutino Favorito del Barrio',
        CERVEZA_PATAGONIA: 'Destino Premier para Eventos',
        KARNE_GARIBALDI: 'Optimización del Modelo de Servicio Rápido',
        LA_GUITARRITA: 'Expansión con WhatsApp y Catering',
        OH_MEXICO: 'Autenticidad Mexicana que Destaca',
        MERCATO_DELLA_PESCHERIA: 'Excelencia Premium en Mariscos Italianos',
        BARSECCO: 'Mixología Italiana de Alta Gama',
        SALTY_FLAME: 'Parrilla Moderna de Alta Gama',
        PAPERFISH: 'Mariscos Sostenibles Premium',
        MARABU: 'Experiencia Caribeña Fusión Sofisticada',
        CORTADITO_CAFE: 'Destino Referente de Café Cubano Auténtico',
        LE_PAIN_QUOTIDIEN: 'Red Unificada con Lealtad Cruzada',
        LA_PANERA_ROSA: 'Negocio Matutino Próspero con App Móvil',
        NININA: 'Conquistando el Mercado de Almuerzo Corporativo',
        PASTA_ROSSA: 'Destino de Pasta Italiana Número Uno',
        TEA_CONNECTION: 'Destino Premier de Té y Bienestar',
        YPF_FULL: 'Red Digital de Tiendas de Conveniencia'
      }
    },

    CHIMBA_CASE_STUDY: {
      HERO_TITLE: 'Estudio de Caso Chimba Miami - 215% Aumento en Direcciones de Google Maps',
      HERO_SUBTITLE: 'Chimba Miami, un establecimiento de vida nocturna y gastronomía en Miami, logró un crecimiento significativo usando la plataforma de marketing para restaurantes de RAY. Durante 5 meses (marzo-agosto 2024), aumentaron las direcciones de Google Maps en 215% y las visitas en 46% mientras mantenían una calificación de 4.7 estrellas en Google.'
    },

    TEMPLE_CASE_STUDY: {
      HERO_TITLE: 'Estudio de Caso Temple Craft Wynwood - 259% Crecimiento en Visibilidad Local',
      HERO_SUBTITLE: 'Temple Craft Wynwood logró un aumento del 259% en visitas de Google Maps y 66% más walk-ins con las estrategias de marketing local de RAY. Historia de éxito de cerveza artesanal.'
    },

    CONTACT_PAGE: {
      TITLE: 'Contáctanos',
      SUBTITLE: 'Completa el formulario a continuación y te conectaremos con el equipo correcto. ¡Esperamos saber de ti!',
      FORM: {
        FULL_NAME: 'Nombre completo',
        FULL_NAME_PLACEHOLDER: 'Tu nombre completo',
        WORK_EMAIL: 'Email de trabajo',
        WORK_EMAIL_PLACEHOLDER: 'tu@restaurante.com',
        COMPANY: 'Empresa',
        COMPANY_PLACEHOLDER: 'Nombre de tu empresa',
        PHONE: 'Teléfono',
        PHONE_PLACEHOLDER: 'Tu número de teléfono',
        LOCATIONS: 'Número de sucursales',
        LOCATIONS_OPTIONS: [
          { value: '1', label: '1 sucursal' },
          { value: '2-5', label: '2-5 sucursales' },
          { value: '6-10', label: '6-10 sucursales' },
          { value: '11+', label: '11+ sucursales' }
        ],
        MESSAGE: 'Mensaje',
        MESSAGE_PLACEHOLDER: 'Cuéntanos cómo podemos ayudarte...',
        SUBMIT_BUTTON: 'Enviar Mensaje',
        SUBMITTING: 'Enviando...',
        SUCCESS_TITLE: '¡Mensaje Enviado Exitosamente!',
        SUCCESS_MESSAGE: '¡Gracias por contactarnos! Te responderemos dentro de las próximas 24 horas.',
        VALIDATION: {
          FULL_NAME_REQUIRED: 'El nombre completo es obligatorio',
          FULL_NAME_MIN: 'Por favor ingresa tu nombre completo',
          EMAIL_REQUIRED: 'El email de trabajo es obligatorio',
          EMAIL_INVALID: 'Por favor ingresa un email válido',
          MESSAGE_REQUIRED: 'El mensaje es obligatorio',
          MESSAGE_MIN: 'Por favor proporciona más detalles (mínimo 10 caracteres)'
        }
      },
      DIRECT_CONTACT: '¿Prefieres contactarnos directamente?'
    },

    ABOUT_PAGE: {
      HERO: {
        TITLE: 'Ayudando a propietarios de restaurantes a',
        TITLE_HIGHLIGHT: 'sobrevivir y prosperar',
        SUBTITLE: 'Aprende cómo llegamos aquí, qué nos motiva, y por qué nuestros clientes aman RAY. Esto es personal para nosotros.',
        IMAGE_CAPTION: 'Conoce a Franco y Sebastián',
        CTA_TEXT: 'Ver nuestra historia'
      },
      FOUNDERS: {
        TITLE: 'Conoce a nuestros fundadores',
        FRANCO: {
          NAME: 'Franco Breciano',
          TITLE: 'Co-Fundador y CEO',
          BIO: 'Franco fundó RAY después de ayudar a salvar el negocio de su madre de la quiebra. Con experiencia en tecnología y una pasión por ayudar a los negocios locales, Franco lidera la visión de RAY de empoderar a restaurantes independientes con herramientas de marketing que realmente funcionan.'
        },
        SEBASTIAN: {
          NAME: 'Sebastian Cadenas',
          TITLE: 'Co-Fundador y CTO',
          BIO: 'Sebastian aporta experiencia técnica profunda y una comprensión única de las necesidades de los restaurantes. Su enfoque en crear soluciones simples pero poderosas ha sido fundamental para hacer que la tecnología de RAY sea accesible para propietarios de restaurantes de todos los tamaños.'
        }
      },
      LOCAL_HEROES: {
        TITLE: 'Los propietarios de negocios locales son héroes para nosotros.',
        PARAGRAPHS: [
          'Lo arriesgan todo - años de sus vidas, sus familias, sus ahorros - para perseguir sus sueños.',
          'Son el corazón de nuestra economía, creando la mayoría de nuevos empleos. Nos recuerdan que es posible ascender de ser un trabajador de nivel básico a convertirse en propietario de negocio un día, como lo hace el 70% de los propietarios de negocios.',
          'Pero los propietarios de negocios locales están en camino a la extinción.',
          'Hace solo 20 años, el 60% de los restaurantes eran propiedad de mamás y papás independientes. Hoy, ese número es del 40%, y sigue bajando. Las grandes cadenas siguen tomando el control. Las mamás y papás siguen cerrando.'
        ]
      },
      TECH_REVOLUTION: {
        TITLE: 'Una revolución tecnológica está ocurriendo.',
        PARAGRAPHS: [
          'Los restaurantes locales están siendo destruidos por grandes corporaciones. Compañías tecnológicas como Grubhub cobran tarifas depredadoras y se llevan todas sus relaciones con clientes. Ni siquiera comparten los nombres de los clientes, mucho menos los detalles de contacto.',
          'Además, corporaciones masivas como Domino\'s Pizza están gastando miles de millones en marketing y tecnología — con el objetivo de reemplazar a sus pequeñas contrapartes locales.',
          'Pero RAY está cambiando las probabilidades.',
          'RAY es un sistema probado para restaurantes independientes para generar ventas de manera rentable — para crecer independientemente, a pesar de los Goliats.'
        ]
      },
      FINAL_CTA: {
        TITLE: 'Los propietarios de negocios locales necesitan tecnología que los ayude, no que los lastime.',
        CTA_TITLE: 'La manera más fácil de hacer crecer tu restaurante en línea.',
        CTA_BUTTON: 'Agenda una Demo'
      }
    },

    PRICING_PAGE: {
      HERO: {
        BADGE: 'Precios Simples y Transparentes',
        TITLE: 'Elige el plan perfecto para tu restaurante',
        TITLE_HIGHLIGHT: '',
        SUBTITLE: 'Planes flexibles que crecen contigo'
      },
      TIERS: [
        {
          id: 'walkins',
          name: 'WalkIns',
          tagline: 'Impulsa visitas a tu restaurante',
          price: '270',
          priceDetail: '/mes por ubicación',
          setupFee: '$1,000',
          orderPercentage: 'Ninguno',
          description: 'Aumenta el tráfico a tu restaurante con optimización de Google Maps, gestión de reseñas y reportes semanales.',
          features: [
            'Sitio web',
            'Optimización de Google Maps',
            'Gestión de reseñas',
            'Reportes semanales y mensuales'
          ],
          excludedFeatures: [],
          ctaText: 'Comenzar',
          ctaDestination: 'demo',
          isPopular: false
        },
        {
          id: 'ordering-premium',
          name: 'Direct Ordering & Bookings',
          tagline: 'Todo lo que necesitas para crecer',
          price: '350',
          priceDetail: '/mes por ubicación',
          setupFee: '$750',
          orderPercentage: '3%',
          description: 'Incluye WalkIns más pedidos online, reservas, WhatsApp, programa de lealtad y app móvil personalizada.',
          features: [
            'WalkIns',
            'Sitio web',
            'Pedidos online',
            'Reservas',
            'Delivery por WhatsApp (IA)',
            'Programa de lealtad',
            'Gift Cards',
            'App móvil personalizada'
          ],
          excludedFeatures: [],
          ctaText: 'Comenzar',
          ctaDestination: 'demo',
          isPopular: true,
          badge: 'Más Popular'
        }
      ],
      FAQ: {
        TITLE: 'Preguntas Frecuentes',
        SUBTITLE: 'Todo lo que necesitas saber sobre los precios de RAY',
        QUESTIONS: [
          {
            question: '¿Qué cubre la garantía del 30%+?',
            answer: 'Garantizamos un aumento del 30%+ en direcciones de Google Business Profile Google Maps dentro de 6 meses. "Direcciones de Google Maps" se refiere a solicitudes de direcciones y toques de navegación en tu Google Business Profile. Si no alcanzamos este objetivo, te reembolsaremos tu inversión.'
          },
          {
            question: '¿Puedo cambiar de plan más tarde?',
            answer: 'Sí! Puedes actualizar o bajar de plan en cualquier momento. Cuando actualizas, obtienes acceso inmediato a las nuevas funciones. Las bajadas de plan toman efecto al inicio de tu próximo ciclo de facturación.'
          },
          {
            question: '¿Hay un contrato o compromiso?',
            answer: 'No se requieren contratos a largo plazo. Todos los planes son mes a mes y puedes cancelar en cualquier momento. Recomendamos quedarse al menos 3 meses para ver resultados significativos.'
          },
          {
            question: '¿Qué métodos de pago aceptan?',
            answer: 'Aceptamos todas las tarjetas de crédito principales (Visa, Mastercard, American Express, Discover) y transferencias bancarias ACH para clientes Empresariales.'
          },
          {
            question: '¿Ofrecen descuentos por facturación anual?',
            answer: 'Sí! Contacta a nuestro equipo de ventas para conocer sobre descuentos de facturación anual y ofertas especiales para restaurantes con múltiples ubicaciones.'
          }
        ]
      },
      BOTTOM_CTA: {
        BADGE: '¿Listo para Hacer Crecer Tu Restaurante?',
        TITLE: '¿Aún tienes preguntas?',
        SUBTITLE: 'Reserva una demo gratuita y ve cómo RAY puede transformar la presencia online de tu restaurante e impulsar más ingresos.',
        PRIMARY_CTA: 'Reservar Demo Gratuita',
        SECONDARY_CTA: 'Comenzar Escaneo Gratis'
      }
    },

    AI_CONCIERGE_PAGE: {
      HERO: {
        TITLE: 'Convierte chats en',
        TITLE_HIGHLIGHT: 'en Pedidos y Reservas.',
        SUBTITLE: 'Nuestro empleado toma pedidos, reserva mesas y responde preguntas del menú en WhatsApp, Instagram, Messenger y tu website 24/7, incluso cuando tu restaurante está cerrado.',
        BADGES: [
          'Tomar pedidos mientras duermes',
          'Auto-reservar mesas',
          'Responder preguntas del menú',
          'Enviar campañas inteligentes'
        ],
        TRY_CHAT: 'Probar chat',
        TRY_PHONE: 'Probar llamada'
      },
      PROBLEM: {
        TITLE: 'Demasiados mensajes de WhatsApp? Te escriben por Instagram, Facebook Messenger a toda hora?',
        ISSUES: [
          'Los clientes te envían mensajes de WhatsApp día y noche',
          'Tu personal no puede responder lo suficientemente rápido',
          'Mensajes perdidos = pedidos perdidos y clientes frustrados'
        ],
        SOLUTION: {
          TITLE: 'Nuestro agente de IA nunca duerme. ⚡',
          SUBTITLE: 'Responde en segundos, así nunca pierdes un huésped otra vez.'
        }
      },
      HOW_IT_WORKS: {
        TITLE: 'Tu Asistente de WhatsApp 24/7. 🚀',
        PLATFORMS: [
          {
            name: 'Pedidos Automáticos',
            description: 'Toma pedidos completos de delivery y recogida directamente en WhatsApp.',
            features: [
              'Confirmación instantánea',
              'Cálculo de totales',
              'Envío al POS automático'
            ]
          },
          {
            name: 'Reservas de Mesas',
            description: 'Gestiona reservaciones sin necesidad de llamadas telefónicas.',
            features: [
              'Disponibilidad en tiempo real',
              'Confirmaciones automáticas',
              'Recordatorios a clientes'
            ]
          },
          {
            name: 'Preguntas del Menú',
            description: 'Responde consultas sobre platos, ingredientes y precios al instante.',
            features: [
              'Información de alérgenos',
              'Recomendaciones personalizadas',
              'Promociones actuales'
            ]
          },
          {
            name: 'Campañas Inteligentes',
            description: 'Envía ofertas personalizadas a tus clientes en el momento perfecto.',
            features: [
              'Segmentación automática',
              'Mensajes personalizados',
              'Métricas de conversión'
            ]
          }
        ]
      },
      POS_INTEGRATION: {
        TITLE: 'Construido para funcionar con tu POS. 🔗',
        SUBTITLE: 'Sin interrupciones en tu flujo de trabajo. Nuestra IA se sincroniza con tu sistema de punto de venta existente para que los pedidos fluyan directamente a tu cocina sin pasos adicionales.',
        FEATURES: [
          {
            title: 'Sincronización de menú (artículos, modificadores, precios, impuestos)',
            description: 'Precios y disponibilidad siempre actualizados'
          },
          {
            title: 'Inyección de pedidos al POS (recogida, entrega, comer en el lugar)',
            description: 'Los pedidos aparecen directamente en tu sistema de cocina'
          },
          {
            title: 'Stock y artículos agotados respetados',
            description: 'Nunca vendas lo que no tienes'
          },
          {
            title: 'Control de pedidos por carga de cocina',
            description: 'Ritmo inteligente para prevenir saturación'
          },
          {
            title: 'Horarios de tienda, tipos de servicio y tarifas respetados',
            description: 'Respeta las reglas de tu negocio automáticamente'
          },
          {
            title: 'Recibos + IDs de pedidos que coinciden con tu POS',
            description: 'Seguimiento y reconciliación perfectos'
          }
        ],
        COMPATIBILITY_NOTE: '¿No ves el tuyo? Confirmaremos compatibilidad.'
      },
      BENEFITS: {
        TITLE: 'Por qué los restaurantes lo aman ❤️',
        DASHBOARD_TITLE: 'Es como tener un anfitrión, mesero y especialista en marketing de tiempo completo... dentro de tu bandeja de entrada. 🎯',
        DASHBOARD_HEADER: 'Panel IA',
        DASHBOARD_LABELS: {
          MESSAGES_TODAY: 'Mensajes hoy',
          ORDERS_TAKEN: 'Pedidos tomados',
          TABLES_BOOKED: 'Mesas reservadas',
          RESPONSE_TIME: 'Tiempo de respuesta'
        },
        FEATURES: [
          {
            title: '⚡ Respuestas instantáneas 24/7',
            description: 'Nunca pierdas un mensaje, incluso cuando estés cerrado o ocupado'
          },
          {
            title: '🍕 Más pedidos automáticamente',
            description: 'Convierte cada mensaje en una venta potencial'
          },
          {
            title: '📅 Reservas automáticas',
            description: 'Permite que los clientes reserven mesas sin llamar'
          },
          {
            title: '⭐ Construir recompensas de lealtad',
            description: 'Mantén a los clientes regresando con puntos y ofertas'
          },
          {
            title: '🛠️ No se necesita personal adicional',
            description: 'Ahorra en costos laborales mientras mejoras el servicio'
          },
          {
            title: '📊 Insights inteligentes',
            description: 'Aprende qué preguntan tus clientes y mejora tu negocio'
          }
        ]
      },
      FAQ: {
        TITLE: 'Preguntas Frecuentes',
        SUBTITLE: 'Todo lo que necesitas saber sobre el Conserje de IA.',
        QUESTIONS: [
          {
            question: '¿Cuánto tarda en implementarse?',
            answer: 'Opt-in en minutos; ajustes de contenido en 1 hora.'
          },
          {
            question: '¿Responde como "robot"?',
            answer: 'No. Usa tu tono y FAQs; puedes revisar y mejorar respuestas.'
          },
          {
            question: '¿Qué pasa con quejas?',
            answer: 'Las canaliza en privado y notifica a tu equipo.'
          },
          {
            question: '¿Multi-sede?',
            answer: 'Sí, contenido y horarios por local, con métricas por tienda.'
          },
          {
            question: '¿Privacidad y consentimiento?',
            answer: 'Opt-in/opt-out y registro de interacción incluidos.'
          }
        ]
      },
      FINAL_CTA: {
        TITLE: 'Vende más con menos personal y sin mover un dedo. 🙌',
        SUBTITLE: 'Únete a cientos de restaurantes que ya usan IA para impulsar sus ventas. Comienza tu prueba gratuita hoy y ve la diferencia en 24 horas.',
        CTA: 'Reservar Demo Ahora',
        DISCLAIMER: 'No se requiere tarjeta de crédito • Prueba gratuita de 14 días • Configuración en menos de 5 minutos'
      }
    },
    VOICE_AGENT_PAGE: {
      HERO: {
        TITLE: 'Convierte llamadas telefónicas',
        TITLE_HIGHLIGHT: 'en Pedidos y Reservas automáticamente.',
        SUBTITLE: '¡Nunca pierdas otra llamada! Nuestro asistente de IA responde llamadas, toma pedidos, hace reservas y responde preguntas del menú — 24/7, incluso cuando tu restaurante está cerrado. 📞',
        BADGES: [
          'Responder llamadas 24/7',
          'Tomar pedidos por teléfono',
          'Información del menú',
          'Reservar mesas automáticamente'
        ]
      },
      PROBLEM: {
        TITLE: 'Demasiadas llamadas. Personal insuficiente. 📞',
        ISSUES: [
          'Los clientes llaman día y noche para pedidos y reservas',
          'Tu personal no puede responder todas las llamadas',
          'Llamadas perdidas = pedidos perdidos y clientes frustrados'
        ],
        SOLUTION: {
          TITLE: 'Nuestro asistente de voz nunca duerme. 🤖',
          SUBTITLE: 'Responde todas las llamadas en segundos, así nunca pierdes un cliente otra vez.'
        }
      },
      POS_INTEGRATION: {
        TITLE: 'Integrado con tu POS existente. 🔗',
        SUBTITLE: 'Sin interrupciones en tu flujo de trabajo. Nuestro asistente de voz se sincroniza con tu sistema de punto de venta existente para que los pedidos fluyan directamente a tu cocina.',
        FEATURES: [
          {
            title: 'Toma pedidos completos por teléfono',
            description: 'Maneja pedidos de delivery, recogida y reservas automáticamente'
          },
          {
            title: 'Responde preguntas del menú al instante',
            description: 'Información sobre ingredientes, precios y disponibilidad'
          },
          {
            title: 'Gestiona reservas automáticamente',
            description: 'Revisa disponibilidad y confirma reservas en tiempo real'
          },
          {
            title: 'Información de ubicaciones',
            description: 'Proporciona direcciones, horarios y información de contacto'
          },
          {
            title: 'Maneja múltiples llamadas simultáneamente',
            description: 'Nunca más líneas ocupadas o clientes en espera'
          }
        ]
      },
      BENEFITS: {
        TITLE: 'Por qué los restaurantes lo aman ❤️',
        DASHBOARD_TITLE: 'Es como tener una recepcionista de tiempo completo... que nunca se enferma. 📞',
        DASHBOARD_HEADER: 'Panel Asistente de Voz',
        DASHBOARD_LABELS: {
          CALLS_TODAY: 'Llamadas hoy',
          ORDERS_TAKEN: 'Pedidos tomados',
          RESERVATIONS_BOOKED: 'Reservas confirmadas',
          AVG_CALL_TIME: 'Tiempo promedio de llamada'
        },
        FEATURES: [
          {
            title: '📞 Responde todas las llamadas 24/7',
            description: 'Nunca pierdas una llamada, incluso cuando estés cerrado o ocupado'
          },
          {
            title: '🍕 Más pedidos automáticamente',
            description: 'Convierte cada llamada en una venta potencial'
          },
          {
            title: '📅 Reservas automáticas',
            description: 'Permite que los clientes reserven mesas sin esperar'
          },
          {
            title: '⭐ Experiencia consistente',
            description: 'Servicio profesional y cortés en cada llamada'
          },
          {
            title: '🛠️ No se necesita personal adicional',
            description: 'Ahorra en costos laborales mientras mejoras el servicio'
          }
        ]
      },
      FAQ: {
        TITLE: 'Preguntas Frecuentes',
        SUBTITLE: 'Todo lo que necesitas saber sobre el Asistente de Voz.',
        QUESTIONS: [
          {
            question: '¿Suena natural o como un robot?',
            answer: 'Nuestro asistente de voz usa IA avanzada para sonar natural y conversacional. Los clientes no notarán la diferencia.'
          },
          {
            question: '¿Puede manejar pedidos complejos?',
            answer: 'Sí, puede tomar pedidos completos con modificaciones, calcular totales y confirmar detalles de delivery.'
          },
          {
            question: '¿Qué pasa si el cliente tiene una queja?',
            answer: 'El asistente puede manejar quejas básicas y transferir llamadas complejas a tu personal cuando sea necesario.'
          },
          {
            question: '¿Funciona con múltiples ubicaciones?',
            answer: 'Sí, cada ubicación puede tener su propio asistente con menús y horarios específicos.'
          },
          {
            question: '¿Qué idiomas soporta?',
            answer: 'Actualmente soporta español e inglés, con más idiomas próximamente.'
          }
        ]
      },
      FINAL_CTA: {
        TITLE: 'Nunca pierdas otra llamada. 📞',
        SUBTITLE: 'Únete a restaurantes que ya usan IA para responder llamadas y aumentar ventas. Prueba gratuita sin compromiso.',
        CTA: 'Reservar Demo Ahora',
        DISCLAIMER: 'No se requiere tarjeta de crédito • Prueba gratuita de 14 días • Configuración en menos de 5 minutos'
      }
    },
    LOYALTY_PAGE: {
      HERO: {
        TITLE: 'Ofrece un programa de recompensas',
        TITLE_HIGHLIGHT: 'como las cadenas nacionales.',
        SUBTITLE: 'Construye lealtad del cliente con un programa de recompensas. Mantén a los clientes regresando por más, como las grandes marcas.',
        CTA_DEMO: 'Agenda una Demo',
        CTA_PRICING: 'Ver Precios'
      },
      FEATURES: {
        TITLE: 'Ejecuta un programa de lealtad que tus clientes habituales amarán',
        LIST: [
          {
            title: 'Usa recompensas para conseguir más fanáticos',
            description: 'Los puntos de lealtad convierten compradores ocasionales en clientes habituales leales.'
          },
          {
            title: 'Registro sin complicaciones para clientes',
            description: 'Los clientes pueden unirse a tu programa de recompensas en segundos.'
          },
          {
            title: 'Fácil para clientes rastrear recompensas',
            description: 'Los clientes pueden rastrear puntos fácilmente, especialmente en tu app.'
          }
        ]
      },
      BOOST_ORDERS: {
        TITLE: 'Impulsa tus pedidos repetidos',
        SUBTITLE: 'Anima a clientes casuales a regresar.',
        SETUP_TITLE: 'Configuración simple. Fácil para clientes ganar. Fácil de rastrear.',
        SETUP_DESCRIPTION: 'Configura tu programa de recompensas en minutos y permite que los clientes comiencen a ganar puntos inmediatamente.'
      },
      SIGNUP: {
        TITLE: 'El registro rápido de recompensas consigue más fanáticos leales.',
        SUCCESS_MESSAGE: '¡Ya estás registrado en el programa de recompensas de Ottavio!'
      },
      FAQ: {
        TITLE: 'Preguntas Frecuentes',
        QUESTIONS: [
          {
            question: '¿Cómo ayudará este programa de lealtad a aumentar mis ventas?',
            answer: 'Los programas de lealtad aumentan la retención de clientes en un 5% lo que puede impulsar las ganancias en un 25-95%. Los clientes habituales gastan 67% más que los nuevos clientes y es más probable que prueben nuevos elementos del menú.'
          },
          {
            question: '¿Cómo se registran los clientes en mi programa de lealtad?',
            answer: 'Los clientes pueden registrarse a través de tu app, sitio web, o en la tienda con solo su número de teléfono o email. El proceso toma menos de 30 segundos y pueden comenzar a ganar puntos inmediatamente.'
          },
          {
            question: '¿Puedo personalizar las recompensas para que se ajusten a la marca de mi restaurante?',
            answer: '¡Sí! Puedes personalizar valores de puntos, niveles de recompensas, ofertas especiales, e incluso la apariencia para que coincida con la marca de tu restaurante y las preferencias de los clientes.'
          }
        ]
      },
      TESTIMONIAL: {
        QUOTE: 'La plataforma ha sido como un superpoder para restaurantes que aumenta las ventas e impulsa nuevos clientes consistentemente.',
        AUTHOR: 'Rahul Bhalla',
        POSITION: 'Propietario de Satyam Indian Kitchen',
        SALES: '+$4,500,000',
        LOCATIONS: '+4',
        SALES_LABEL: 'en ventas',
        LOCATIONS_LABEL: 'ubicaciones',
        CTA: 'Ver la historia de Rahul →'
      },
      GUIDES: {
        TITLE: 'Ve nuestras guías para programas de lealtad y recompensas',
        CTA: 'Leer el blog',
        GUIDE_1: 'Así es Como Construir un Programa de Loyalty Rentable',
        GUIDE_2: 'Cómo un Programa de Loyalty Aumentó Dramáticamente las Ventas Online de Ottavio'
      },
      FINAL_CTA: {
        TITLE: 'Automatiza el marketing a tus clientes',
        SUBTITLE: 'Ejecuta campañas de marketing de crecimiento que hagan crecer tus ventas online.',
        CTA: 'Comenzar hoy'
      }
    },
    AI_EMPLOYEE_PAGE: {
      HERO: {
        TITLE: 'Tu empleado ',
        TITLE_HIGHLIGHT: 'que nunca duerme',
        SUBTITLE: 'Atiende a tus clientes 24/7 en WhatsApp, Instagram, tu sitio web y Facebook Messenger. Responde preguntas sobre tu menú, toma reservas, procesa pedidos y gestiona inscripciones a tu programa de lealtad. Todo integrado con tu POS.',
        CTA_DEMO: 'Agenda una Demo',
        CTA_PRICING: 'Ver Precios'
      },
      FEATURES: {
        TITLE: 'Todo lo que necesitas para automatizar tu atención al cliente',
        LIST: [
          {
            TITLE: 'Respuestas instantáneas 24/7',
            DESCRIPTION: 'Nunca pierdas un cliente por falta de respuesta. Tu agente de IA está disponible las 24 horas del día, todos los días.'
          },
          {
            TITLE: 'Multi-plataforma integrada',
            DESCRIPTION: 'Un solo agente que trabaja en WhatsApp, Instagram, tu sitio web y Facebook Messenger simultáneamente.'
          },
          {
            TITLE: 'Gestión inteligente de reservas',
            DESCRIPTION: 'Toma, modifica y gestiona reservas directamente desde cualquier plataforma, sin necesidad de intervención humana.'
          },
          {
            TITLE: 'Procesamiento automático de pedidos',
            DESCRIPTION: 'Procesa pedidos de delivery automáticamente, verifica disponibilidad y confirma todo sin errores.'
          },
          {
            TITLE: 'Inscripción automática a lealtad',
            DESCRIPTION: 'Inscribe automáticamente a clientes a tu programa de lealtad durante las conversaciones naturales.'
          }
        ]
      },
      FAQ: {
        TITLE: 'Preguntas Frecuentes',
        QUESTIONS: [
          {
            QUESTION: '¿Cómo funciona el agente de IA?',
            ANSWER: 'Nuestro agente de IA utiliza tecnología de lenguaje natural avanzada para entender y responder preguntas, procesar reservas y pedidos, y gestionar inscripciones a programas de lealtad. Aprende de tus menús, horarios, políticas y más para dar respuestas precisas y útiles.'
          },
          {
            QUESTION: '¿En qué plataformas está disponible?',
            ANSWER: 'El agente está disponible en WhatsApp, Instagram (mensajes directos y comentarios), tu sitio web (a través de un widget) y Facebook Messenger. Todas las plataformas están conectadas y el agente mantiene el contexto entre conversaciones.'
          },
          {
            QUESTION: '¿Puede tomar reservas y pedidos reales?',
            ANSWER: 'Sí, el agente puede tomar reservas verificando disponibilidad en tiempo real y procesar pedidos de delivery integrado con tu sistema POS. También envía confirmaciones automáticas y notifica a tu equipo cuando es necesario.'
          },
          {
            QUESTION: '¿Cómo se integra con mi sistema existente?',
            ANSWER: 'Nos integramos con los principales sistemas POS, plataformas de reservas y programas de lealtad. El agente puede acceder a menús, horarios, disponibilidad y más en tiempo real.'
          },
          {
            QUESTION: '¿Qué pasa si el agente no sabe responder algo?',
            ANSWER: 'El agente está configurado para reconocer cuando necesita ayuda humana. En esos casos, puede transferir la conversación a tu equipo o tomar información de contacto para seguimiento. También aprende de cada interacción para mejorar.'
          },
          {
            QUESTION: '¿Cuánto tiempo toma configurar el agente?',
            ANSWER: 'La configuración inicial toma aproximadamente 2-3 semanas, incluyendo la integración con tus sistemas, entrenamiento del agente con tu información específica y pruebas. Proporcionamos soporte completo durante todo el proceso.'
          }
        ]
      }
    },
    MOBILE_APP_PAGE: {
      HERO: {
        BADGE: 'App Móvil Personalizada',
        TITLE: 'Imagina tener tu propia',
        TITLE_HIGHLIGHT: 'app móvil',
        SUBTITLE: 'Con una app móvil, envía a los clientes a ordenar directamente — en lugar de ir a terceros.',
        CTA_DEMO: 'Obtener una demo gratuita',
        CTA_PRICING: 'Ver precios',
        STAT_1: '85% más pedidos repetidos',
        STAT_2: 'Sin comisiones'
      },
      BENEFITS: {
        TITLE: 'Cada restaurante hoy necesita una app móvil',
        FEATURES: [
          {
            title: 'La forma más rápida para que tus clientes habituales ordenen',
            description: 'Los clientes pueden reordenar en unos pocos toques. Sin distracciones de otros restaurantes.'
          },
          {
            title: 'Tu propia app móvil de 5 estrellas',
            description: 'Hemos ayudado a restaurantes a obtener miles de reseñas de 5 estrellas en Apple y Android.'
          },
          {
            title: 'Impulsa pedidos repetidos',
            description: 'Los restaurantes con apps obtienen 85% más clientes que regresan.'
          }
        ]
      },
      REORDER_SECTION: {
        BADGE: 'Pedido rápido',
        TITLE: 'Los clientes habituales pueden reordenar en segundos.',
        SUBTITLE: 'Tu app guarda sus pedidos favoritos y información de pago para una experiencia de reorden súper rápida.'
      },
      SOCIAL_PROOF: {
        BADGE: 'Controla las opciones de entrega',
        TITLE: 'Miles de calificaciones de 5 estrellas en Apple y Android. Es tu turno.',
        APP_STORE_LABEL: 'Reseñas de App Store',
        GOOGLE_PLAY_LABEL: 'Reseñas de Google Play',
        LOYALTY_TITLE: 'Lealtad del cliente',
        LOYALTY_STAT: 'Las apps impulsan 85% más pedidos repetidos.',
        LOYALTY_DESCRIPTION: 'Los clientes con tu app ordenan con más frecuencia y gastan más por pedido.',
        TESTIMONIAL: '"La app hace que ordenar sea muy fácil. Uso mis pedidos guardados todo el tiempo!"'
      },
      FAQ: {
        TITLE: 'Preguntas Frecuentes',
        QUESTIONS: [
          {
            question: '¿Los restaurantes independientes realmente necesitan su propia app?',
            answer: 'Sí, especialmente si quieres competir con las cadenas nacionales. Una app móvil te da control directo sobre la experiencia del cliente y elimina las comisiones de terceros.'
          },
          {
            question: '¿Construyen una app personalizada desde cero?',
            answer: 'Creamos una app completamente personalizada con tu marca, colores, logo y menú. Aunque usamos una plataforma probada, cada app es única para tu restaurante.'
          },
          {
            question: '¿Cuánto cuesta esto?',
            answer: 'Nuestras apps móviles comienzan desde $270/mes con una tarifa de configuración única. Sin comisiones por pedido - todos los ingresos van directamente a ti.'
          }
        ]
      },
      FINAL_CTA: {
        TITLE: 'Obtén tu propia app móvil hoy',
        SUBTITLE: 'Únete a cientos de restaurantes que ya tienen su propia app móvil personalizada.',
        CTA: 'Comenzar hoy'
      }
    },
    WEBSITE_BUILDER_PAGE: {
      HERO: {
        BADGE: 'Sitios Web Impulsados por IA',
        TITLE: 'Sitios web de restaurante construidos para',
        TITLE_HIGHLIGHT: 'ventas primero, estilo después.',
        SUBTITLE: 'RAY construye tu sitio web para impulsar ventas. Nuestro diseño comprobado genera tráfico de Google, optimiza aplicaciones de delivery y aloja tu competencia.',
        CTA_DEMO: 'Agenda una Demo',
        CTA_PRICING: 'Ver Precios',
        STAT_1: 'Listo en días, no meses',
        STAT_2: 'Optimizado para Google'
      },
      FEATURES: {
        TITLE: 'Un diseño comprobado que genera más tráfico',
        SUBTITLE: 'Sitios optimizados por IA impulsan el SEO y el tráfico de Google.',
        LIST: [
          {
            title: 'Sitios Web Optimizados para SEO',
            description: 'Sitios web diseñados para ser encontrados en Google y convertir visitantes en clientes',
            details: [
              'Optimización automática para búsquedas locales',
              'Páginas que cargan rápido para mejor experiencia'
            ]
          },
          {
            title: 'Diseño Móvil Primero',
            description: 'Sitios web que se ven perfectos en cualquier dispositivo, especialmente móviles',
            details: [
              'Diseño responsivo para todos los tamaños de pantalla',
              'Experiencia optimizada para pedidos móviles'
            ]
          },
          {
            title: 'Configuración Rápida',
            description: 'Tu nuevo sitio web estará listo en días, no meses',
            details: [
              'Configuración automática con tu información existente',
              'Diseños probados que convierten visitantes en clientes'
            ]
          }
        ]
      },
      FAQ: {
        TITLE: 'Preguntas Frecuentes',
        SUBTITLE: 'Todo lo que necesitas saber sobre nuestro website de tu restaurante.',
        QUESTIONS: [
          {
            question: '¿Qué pasa con mi sitio web actual?',
            answer: 'RAY reemplaza tu sitio web actual. Redirigimos tu dominio a tu nuevo sitio web con RAY, manteniendo toda tu presencia online intacta.'
          },
          {
            question: '¿Cuánto tiempo toma tener mi nuevo sitio web?',
            answer: 'La mayoría de sitios web están listos en 3-5 días hábiles. Tendrás un especialista dedicado que te guiará durante todo el proceso.'
          },
          {
            question: '¿Puedo personalizar el diseño de mi sitio web?',
            answer: 'Sí, trabajamos contigo para personalizar colores, fotos, menús y contenido para que refleje perfectamente la marca de tu restaurante.'
          }
        ]
      }
    },
    ZERO_COMMISSION_DELIVERY_PAGE: {
      HERO: {
        BADGE: 'Delivery Rentable',
        TITLE: 'Delivery rentable y una',
        TITLE_HIGHLIGHT: 'gran experiencia para clientes.',
        SUBTITLE: 'Haz que tus clientes ordenen desde tu app, con drivers de alta calificación, a un precio justo.',
        CTA_DEMO: 'Agenda una Demo',
        CTA_PRICING: 'Ver Precios'
      },
      FEATURES: {
        TITLE: 'Delivery que es mejor para ti y tus clientes',
        SUBTITLE: 'Controla tu experiencia de delivery con drivers de calidad y precios transparentes.',
        LIST: [
          {
            title: 'Tarifa fija para delivery',
            description: 'Usa drivers de terceros a tarifas fijas favorables para delivery sin markup o drivers propios, tú eliges el mejor precio.',
            details: [
              'Tarifas transparentes sin sorpresas',
              'Control total sobre los costos de delivery'
            ]
          },
          {
            title: 'Obtén los mejores drivers, sin comisión',
            description: 'Solo usamos drivers calificados 4.5 estrellas o más para entregar tu comida.',
            details: [
              'Drivers verificados y de alta calidad',
              'Servicio confiable para tus clientes'
            ]
          },
          {
            title: 'Una línea directa a tus clientes',
            description: 'Puedes llamar a los clientes directamente. Cubrimos reembolsos por cualquier problema de delivery.',
            details: [
              'Comunicación directa con clientes',
              'Soporte completo para problemas de delivery'
            ]
          }
        ]
      },
      FAQ: {
        TITLE: 'FAQs',
        SUBTITLE: 'Respuestas a preguntas comunes sobre nuestro servicio de delivery sin comisión.',
        QUESTIONS: [
          {
            question: '¿Por qué los clientes ordenarían desde mi app en lugar de terceros?',
            answer: 'Tu app ofrece una experiencia más directa y personalizada. Los clientes pueden ganar puntos de lealtad, obtener ofertas exclusivas, y tener comunicación directa contigo. Además, sus pedidos favoritos se guardan para reordenar fácilmente.'
          },
          {
            question: '¿Quién paga por el delivery, el cliente o el restaurante?',
            answer: 'Tú decides. Puedes cobrar a los clientes una tarifa de delivery, absorber el costo como parte de tu estrategia de precios, o usar un modelo híbrido. Te damos total flexibilidad para estructurar tus precios.'
          },
          {
            question: '¿Por qué las apps de terceros aceptarían esto?',
            answer: 'Trabajamos con una red de drivers independientes y servicios de delivery que buscan más trabajo. Al ofrecer tarifas justas y volumen consistente, creamos una situación donde todos ganan: tú obtienes mejor servicio, los drivers ganan más, y los clientes reciben mejor experiencia.'
          }
        ]
      }
    },

    HOW_IT_WORKS_PAGE: {
      HERO: {
        TITLE: 'Tu restaurante podría tener',
        TITLE_HIGHLIGHT: 'muchas más ventas online.',
        SUBTITLE: 'RAY es la forma más simple de posicionarte en Google y ChatGPT, aumentar tus pedidos directos y crear una experiencia excepcional para tus clientes.',
        CTA_DEMO: 'Agenda una demo',
        VIDEO_CTA: 'Ver video'
      },
      FEATURES: {
        FEATURE_1: {
          NUMBER: '01.',
          TITLE: 'Domina los resultados de búsqueda en Google y ChatGPT',
          DESCRIPTION: 'Posiciónate por encima de tu competencia con un sitio web optimizado para Google. Atrae más clientes que buscan restaurantes en tu zona.',
          CTA: 'Ver más'
        },
        FEATURE_2: {
          NUMBER: '02.',
          TITLE: 'Crece tus ventas con pedidos online súper fáciles',
          DESCRIPTION: 'Tus clientes ordenan más cuando tu sistema de pedidos es intuitivo y familiar. Sin fricción, más conversiones.',
          CTA: 'Ver más'
        },
        FEATURE_3: {
          NUMBER: '03.',
          TITLE: 'Fideliza clientes con tu app móvil y programa de puntos',
          DESCRIPTION: 'Tu propia app móvil aumenta los pedidos repetidos. Crea lealtad con un programa de recompensas al estilo Starbucks.',
          CTA: 'Ver más'
        },
        FEATURE_4: {
          NUMBER: '04.',
          TITLE: 'Vende más con marketing automatizado',
          DESCRIPTION: 'Campañas de email y SMS automatizadas que generan ventas. Marketing probado que funciona mientras duermes.',
          CTA: 'Ver más'
        }
      },
      FAQ: {
        TITLE: 'FAQs',
        QUESTIONS: [
          {
            QUESTION: '¿Qué necesito para empezar?',
            ANSWER: 'Solo necesitas tener un restaurante activo y ganas de crecer tus ventas online. Nosotros nos encargamos del resto: sitio web, sistema de pedidos, integraciones con tu POS y capacitación de tu equipo.'
          },
          {
            QUESTION: '¿Se hacen cargo de mi POS?',
            ANSWER: 'Sí, nos integramos con los principales sistemas POS como Square, Toast, Clover, y muchos más. Nuestro equipo técnico maneja toda la configuración para que tus pedidos online se sincronicen automáticamente con tu cocina.'
          },
          {
            QUESTION: '¿Qué pasa con mi sitio web actual?',
            ANSWER: 'Si ya tienes un sitio web, podemos reemplazarlo con uno optimizado por RAY o integrarnos con tu sitio existente. Mantenemos tu dominio y toda tu presencia online intacta durante la transición.'
          },
          {
            QUESTION: '¿Hacen marketing en redes sociales?',
            ANSWER: 'Sí, ofrecemos gestión completa de redes sociales incluyendo creación de contenido, publicación programada y campañas publicitarias en Facebook e Instagram para atraer más clientes.'
          },
          {
            QUESTION: '¿Cómo consiguen que los clientes pidan directamente de mí?',
            ANSWER: 'Combinamos múltiples estrategias: optimizamos tu presencia en Google, creamos tu app móvil personalizada, implementamos códigos QR en tus mesas, y configuramos pedidos por WhatsApp y redes sociales. Todo dirige a tu plataforma propia.'
          }
        ]
      },
      TESTIMONIAL: {
        QUOTE: 'Tengo muchos amigos que tienen restaurantes. Les digo que tienen que cambiarse a Owner.',
        AUTHOR: 'Fermin Iaguirre',
        POSITION: 'Propietario de Sado Addicts',
        IMAGE: '/images/testimonial-fermin.jpg'
      },
      FINAL_CTA: {
        TITLE: 'La manera más simple de hacer crecer tu restaurante online.',
        CTA: 'Agenda una demo'
      }
    },

    // Success Carousel
    SUCCESS_CAROUSEL: {
      TRUSTED_BY: 'Confian en RAY miles de restaurantes',
      VIEW_ALL_STORIES: 'Ver Todos los Casos de Éxito'
    },

    // Partners Page
    PARTNERS_PAGE: {
      META_TITLE: 'Partners - RAY',
      META_DESCRIPTION: 'Únete a nuestro programa de Partners y ayuda a los restaurantes a crecer con RAY.',
      MAIN_TITLE_PART1: 'Trabaja con',
      MAIN_TITLE_PART2: 'RAY',
      SUBTITLE: 'Elige la asociación que mejor se adapte a ti:',
      GET_STARTED: 'Comenzar',
      CLICK_HERE_TO_GET_STARTED: 'Haz clic aquí para comenzar.',
      AFFILIATE_PROGRAM: {
        TITLE: 'Programa de Afiliados',
        SHORT_DESCRIPTION: 'Para editores, influencers, bloggers, sitios de reseñas y socios de medios que llegan a propietarios de restaurantes.',
        DETAILED_DESCRIPTION_PART1: 'Los afiliados promocionan',
        DETAILED_DESCRIPTION_PART2: 'a sus audiencias a través de contenido, publicidad y ubicaciones creativas. Tu rol es generar leads calificados conectando restaurantes con nuestra plataforma. Te proporcionaremos seguimiento, recursos y soporte continuo para que puedas maximizar resultados. La compensación se basa en leads, recompensándote por las nuevas oportunidades que creas. Juntos, ayudaremos a los restaurantes a descubrir'
      },
      REFERRAL_PARTNERSHIPS: {
        TITLE: 'Asociaciones de Referencia',
        SHORT_DESCRIPTION: 'Para agencias, consultores, contadores y distribuidores que trabajan directamente con restaurantes.',
        DETAILED_DESCRIPTION_PART1: 'Los Socios de Referencia van más allá de la promoción: presentas activamente',
        DETAILED_DESCRIPTION_PART2: 'a los restaurantes que ya atiendes. Te equiparemos con capacitación, recursos y soporte continuo para que puedas integrar con confianza'
      }
    },

    // Partner with RAY Page
    PARTNER_PAGE: {
      HERO: {
        TITLE: 'Asóciate con RAY: Haz Crecer tus Clientes. Haz Crecer tu Negocio.',
        DESCRIPTION: 'Únete a nuestro programa de partners para proporcionar soluciones innovadoras de marketing para restaurantes mientras ganas ingresos recurrentes.',
        CTA: 'Agendar una Llamada'
      },
      CORE_BENEFITS: {
        TITLE: 'Complementa tu Valor. Gana Ingresos Mensuales. Conviértete en Partner de RAY.',
        BENEFIT_1: {
          TITLE: 'Comisiones Mensuales Recurrentes',
          DESCRIPTION: 'Gana ingresos continuos por cada cliente que refieras.'
        },
        BENEFIT_2: {
          TITLE: 'Acceso a Nuevas Oportunidades Tecnológicas',
          DESCRIPTION: 'Mantente a la vanguardia con herramientas innovadoras para restaurantes.'
        },
        BENEFIT_3: {
          TITLE: 'Mejor Retención con tus Clientes',
          DESCRIPTION: 'Ayuda a tus clientes a tener éxito y aumentar el valor de por vida.'
        },
        BENEFIT_4: {
          TITLE: 'Herramientas de Ventas y Soporte',
          DESCRIPTION: 'Desde presentaciones comerciales hasta ayuda en la incorporación, estamos contigo.'
        },
        PROOF_POINT: 'Un producto probado que es utilizado por restaurantes de alto rendimiento en Mexico, Colombia, ArgentinaEstados Unidos.'
      },
      FAQ: {
        TITLE: 'Preguntas Frecuentes',
        QUESTIONS: [
          {
            question: '¿Qué es el Programa de Partners de RAY?',
            answer: 'El Programa de Partners de RAY es una oportunidad colaborativa para agencias de marketing, consultores de restaurantes, freelancers y proveedores de tecnología para restaurantes para expandir sus servicios y ganar ingresos mensuales recurrentes ofreciendo las soluciones innovadoras de Local SEO y gestión de reputación de RAY a sus clientes.'
          },
          {
            question: '¿Quién puede unirse al Programa de Partners?',
            answer: 'El programa está abierto a profesionales y empresas que trabajan con restaurantes o grupos de hospitalidad que tienen entre 5 y 100 ubicaciones físicas. Si eres un marketer, consultor o proveedor de tecnología en el espacio de restaurantes, ¡eres bienvenido!'
          },
          {
            question: '¿Cuáles son los principales beneficios para los partners?',
            answer: 'Comisiones Mensuales Recurrentes, gana ingresos continuos de cada cliente que refieras. Acceso a Herramientas de Vanguardia, sé el primero en ofrecer nuestros productos innovadores, sé encontrado, sé elegido y vende más. Retención de Clientes Más Fuerte, ayuda a tus clientes a aumentar el tráfico peatonal y las ventas, aumentando tu valor como partner de confianza.'
          },
          {
            question: '¿Cómo empiezo?',
            answer: 'Haz clic en "Aplicar ahora" para completar una solicitud corta. Nuestro equipo revisará tus datos y se conectará contigo en un plazo de 48 horas para discutir tus objetivos y cómo podemos trabajar juntos.'
          },
          {
            question: '¿Hay algún costo para unirse al Programa de Partners?',
            answer: '¡No, unirse es gratis! Solo necesitarás proporcionar información básica sobre tu negocio o servicios.'
          },
          {
            question: '¿Qué tipo de apoyo recibiré?',
            answer: 'Proporcionamos incorporación dedicada, materiales de marketing y apoyo continuo para ayudarte a presentar exitosamente RAY a tus clientes.'
          },
          {
            question: '¿Puedo integrar las herramientas de RAY con mis servicios existentes?',
            answer: 'Depende. Las soluciones de RAY están diseñadas para complementar tus servicios de marketing o consultoría existentes, agregando más valor a tus relaciones con clientes. Si estás considerando una integración técnica para incrustar la tecnología de RAY en tu propia solución, programemos una llamada para discutir las posibilidades y asegurar que todo se alinee con tu plataforma.'
          },
          {
            question: '¿Cómo rastreo mis referencias y ganancias?',
            answer: 'Tendrás acceso a un panel de partners donde puedes rastrear todas tus referencias, comisiones y métricas de rendimiento.'
          }
        ]
      },
      FINAL_CTA: {
        TITLE: '¿Listo para Crecer Juntos?',
        DESCRIPTION: 'Únete a nuestro programa de partners hoy y comienza a ofrecer a tus clientes una solución probada para el crecimiento de restaurantes.',
        CTA: 'Aplicar para Convertirse en Partner'
      }
    }
  },
  en: {
    // CTA Labels
    CTA: {
      GRADE_RESTAURANT: 'Scan your restaurant',
      GET_FREE_DEMO: 'Get Demo',
      GET_STARTED: 'Get Started Today',
      VIEW_CASE_STUDIES: 'View All Success Stories',
      LEARN_MORE: 'Learn more'
    },
    
    // Company Info
    COMPANY: {
      NAME: 'RAY',
      TAGLINE: 'All in one sales platform for restaurant',
      DESCRIPTION: 'RAY is the #1 sales platform helping restaurant owners attract more customers, grow revenue from no commission orders, direct bookings and more walk-ins',
      SUPPORT_EMAIL: 'support@rayapp.io'
    },
    
    // WebChat
    WEBCHAT: {
      TITLE: 'RAY GPT',
      SUBTITLE: 'How can I help you?',
      WELCOME_MESSAGE: 'Hi! I\'m RAY GPT 🤖 How can I help you today? Ask me about our products, pricing, demos, or anything about RAY.',
      PLACEHOLDER: 'Ask me something about RAY...',
      ERROR_MESSAGE: 'Sorry, there was a connection error. Please try again in a moment.',
      CHAT_WITH_RAY: 'Chat with RAY',
      OPEN_CHAT: 'Open chat',
      CLOSE_CHAT: 'Close chat',
      SEND: 'Send'
    },
    
    // Products
    PRODUCTS: {
      BOOKINGS: {
        NAME: 'Bookings',
        TAGLINE: 'Maximize table occupancy with smart reservation management',
        DESCRIPTION: 'Maximize table occupancy with smart reservation management, waitlists, and guest relationship tools.',
        METRIC: '+35%',
        METRIC_LABEL: 'table utilization'
      },
      WALK_INS: {
        NAME: 'Walk-Ins',
        TAGLINE: 'Turn searches into walk-ins with AI-powered local marketing',
        DESCRIPTION: 'Turn searches into walk-ins with AI-powered local marketing that dominates Google Maps and builds trust through reviews.',
        METRIC: '+47%',
        METRIC_LABEL: 'avg. increase'
      },
      ONLINE_ORDERS: {
        NAME: 'Online Orders',
        TAGLINE: 'Grow revenue from digital channels',
        DESCRIPTION: 'Grow revenue from digital channels with integrated ordering systems and comprehensive analytics.',
        METRIC: '+27%',
        METRIC_LABEL: 'online orders'
      },
      WHATSAPP_ORDERS: {
        NAME: 'WhatsApp Orders',
        TAGLINE: 'Turn Restaurant DMs Into Orders',
        DESCRIPTION: 'Stop losing hungry customers to slow replies! Our AI takes orders, books tables, and answers menu questions 24/7.',
        METRIC: '+28%',
        METRIC_LABEL: 'more orders'
      },
      VOICE_AGENT: {
        NAME: 'AI Voice Assistant',
        TAGLINE: 'Turn Phone Calls Into Orders & Reservations',
        DESCRIPTION: 'Never miss another call. Our AI assistant answers calls, takes orders, makes reservations, and answers menu questions 24/7.',
        METRIC: '+35%',
        METRIC_LABEL: 'calls converted'
      },
      WEBSITE_BUILDER: {
        NAME: 'Website Builder',
        TAGLINE: 'Websites built for sales first',
        DESCRIPTION: 'Convert more visitors into customers with an AI-powered website that optimizes conversions and dominates Google.',
        METRIC: '+50%',
        METRIC_LABEL: 'more web conversions'
      },
      ZERO_COMMISSION_DELIVERY: {
        NAME: 'Zero-Commission Delivery',
        TAGLINE: 'Profitable delivery and great service',
        DESCRIPTION: 'Profitable delivery by top-rated drivers at a fair price without third-party commissions.',
        METRIC: '0%',
        METRIC_LABEL: 'commissions'
      },
      BRANDED_APPS: {
        NAME: 'Custom Mobile App',
        TAGLINE: '5-star mobile app',
        DESCRIPTION: 'Grow repeat orders with a 5-star mobile app that keeps customers coming back.',
        METRIC: '+85%',
        METRIC_LABEL: 'more repeat orders'
      },
      LOYALTY: {
        NAME: 'Loyalty Program',
        TAGLINE: 'Rewards like the big chains',
        DESCRIPTION: 'Build loyalty with a rewards program inspired by the big brands that works automatically.',
        METRIC: '+60%',
        METRIC_LABEL: 'customer retention'
      }
    },
    
    // Common Headlines
    HEADLINES: {
      THREE_PRODUCTS: 'Eight solutions. One product.',
      CHOOSE_PLATFORM: 'Choose one, several, or unlock the full platform.',
      PROVEN_RESULTS: 'Proven Results from Real Restaurants',
      READY_TO_GROW: 'Ready to grow your restaurant revenue?'
    },
    
    // Trust Indicators
    TRUST: {
      RESTAURANTS_COUNT: '1,000+ restaurants',
      GROWTH_GUARANTEE: '30%+ Google Maps directions guarantee',
      NO_CONTRACTS: 'No commitment',
      RESULTS_TIMEFRAME: 'Results in 60-90 days',
      TRUSTED_BY: 'Trusted by 1,000+ restaurants'
    },

    // Homepage sections
    HOMEPAGE: {
      HERO: {
        TITLE: 'Boost revenue by driving more',
        TITLE_HIGHLIGHT: 'zero-commision orders, direct bookings & walk-ins',
        SUBTITLE: 'Free • 60 seconds • No credit card required'
      },
      TRUST_METRICS: {
        TITLE: 'Why Restaurant Owners Choose RAY',
        SUBTITLE: 'The proven platform that delivers results for restaurant owners nationwide',
        SALES_PLATFORM: 'WhatsApp, Delivery, Bookings & Loyalty all in one',
        SALES_PLATFORM_DESC: 'Complete restaurant marketing platform',
        RESTAURANTS_TRUST: 'A proven system that increases sales (not a tool without results)',
        RESTAURANTS_TRUST_DESC: 'Guaranteed methodology with proven results',
        SUCCESS_STORIES: 'POS integrated and designed for independent restaurants',
        SUCCESS_STORIES_DESC: 'Built specifically for local restaurant owners'
      },
      PRODUCTS_SECTION: {
        BADGE: 'Proven Revenue Growth Platform',
        SUBTITLE: 'RAY offers eight integrated solutions designed to grow restaurant revenue both offline and online. Choose your focus or combine all for maximum impact.',
        BOTTOM_CTA: 'Ready to see how RAY can transform your restaurant?',
        VIEW_PRICING: 'View Pricing & Plans'
      }
    },

    // FAQ Section
    FAQ: {
      TITLE: 'Frequently Asked Questions',
      SUBTITLE: 'Answers to common questions about how RAY helps restaurants grow.',
      QUESTIONS: [
        {
          question: 'What do I need to get started?',
          answer: 'We set up most restaurants within a week. You\'ll have an onboarding specialist to guide you through the process.'
        },
        {
          question: 'Do you take over my POS?',
          answer: 'No, but we can automatically inject orders into many of the major POS systems.'
        },
        {
          question: 'What happens to my current website?',
          answer: 'RAY replaces your current website. We redirect your domain to your new website with RAY.'
        },
        {
          question: 'Do you do social media marketing?',
          answer: 'No. We\'ve found that social media isn\'t great ROI for most local restaurants. Google search is proven to drive direct sales.'
        },
        {
          question: 'How do you get customers to order directly from me?',
          answer: 'We help you educate your customers and set up reward programs so customers earn points when they order direct.'
        }
      ]
    },

    // Success Carousel
    SUCCESS_CAROUSEL: {
      TRUSTED_BY: 'Trusted by thousands of restaurants',
      VIEW_ALL_STORIES: 'View All Success Stories'
    },

    // Partners Page
    PARTNERS_PAGE: {
      META_TITLE: 'Partners - RAY',
      META_DESCRIPTION: 'Join our partner program and help restaurants grow with RAY.',
      MAIN_TITLE_PART1: 'Partner with',
      MAIN_TITLE_PART2: 'RAY',
      SUBTITLE: 'Choose the partnership that\'s the best fit for you:',
      GET_STARTED: 'Get Started',
      CLICK_HERE_TO_GET_STARTED: 'Click here to get started.',
      AFFILIATE_PROGRAM: {
        TITLE: 'Affiliate Program',
        SHORT_DESCRIPTION: 'For publishers, influencers, bloggers, review sites, and media partners who reach restaurant owners.',
        DETAILED_DESCRIPTION_PART1: 'Affiliates promote',
        DETAILED_DESCRIPTION_PART2: 'to their audiences through content, advertising, and creative placements. Your role is to generate qualified leads by connecting restaurants with our platform. We\'ll provide tracking, resources, and ongoing support so you can maximize results. Compensation is lead-based, rewarding you for the new opportunities you create. Together, we\'ll help restaurants discover'
      },
      REFERRAL_PARTNERSHIPS: {
        TITLE: 'Referral Partnerships',
        SHORT_DESCRIPTION: 'For agencies, consultants, accountants, and distributors who work directly with restaurants.',
        DETAILED_DESCRIPTION_PART1: 'Referral Partners go beyond promotion—you actively introduce',
        DETAILED_DESCRIPTION_PART2: 'to the restaurants you already serve. We\'ll equip you with training, resources, and ongoing support so you can confidently integrate'
      }
    },

    // Partner with RAY Page
    PARTNER_PAGE: {
      HERO: {
        TITLE: 'Partner with RAY: Grow Your Clients. Grow Your Business.',
        DESCRIPTION: 'Join our partner program to provide innovative restaurant marketing solutions while earning recurring revenue.',
        CTA: 'Schedule a Partnership Call'
      },
      CORE_BENEFITS: {
        TITLE: 'Complement Your Value. Earn Monthly Revenue. Become a RAY Partner.',
        BENEFIT_1: {
          TITLE: 'Recurring Monthly Commissions',
          DESCRIPTION: 'Earn ongoing revenue from every client you refer.'
        },
        BENEFIT_2: {
          TITLE: 'Access to New Tech Opportunities',
          DESCRIPTION: 'Stay ahead with innovative tools for restaurants.'
        },
        BENEFIT_3: {
          TITLE: 'Better Retention with Your Clients',
          DESCRIPTION: 'Help clients succeed and increase lifetime value.'
        },
        BENEFIT_4: {
          TITLE: 'Sales Tools & Support',
          DESCRIPTION: 'From pitch decks to onboarding help—we\'ve got your back.'
        },
        PROOF_POINT: 'A proven product that is used by top-performing restaurants across the U.S.'
      },
      FAQ: {
        TITLE: 'Frequently Asked Questions',
        QUESTIONS: [
          {
            question: 'What is the RAY Partner Program?',
            answer: 'The RAY Partner Program is a collaborative opportunity for marketing agencies, restaurant consultants, freelancers, and restaurant tech providers to expand their services and earn recurring monthly revenue by offering RAY\'s innovative Local SEO and reputation management solutions to their clients.'
          },
          {
            question: 'Who can join the Partner Program?',
            answer: 'The program is open to professionals and businesses who work with restaurants or hospitality groups that have 5 to 100 physical locations. If you\'re a marketer, consultant, or tech provider in the restaurant space, you\'re welcome!'
          },
          {
            question: 'What are the main benefits for partners?',
            answer: 'Recurring Monthly Commissions, earn ongoing revenue from each client you refer. Access to Cutting-Edge Tools, be the first to offer our innovative products, be found, be chosen and sell more. Stronger Client Retention, helps your clients grow foot traffic and sales, boosting your value as a trusted partner.'
          },
          {
            question: 'How do I get started?',
            answer: 'Click "Apply now" to fill out a short application. Our team will review your details and connect with you within 48 hours to discuss your goals and how we can work together.'
          },
          {
            question: 'Is there a cost to join the Partner Program?',
            answer: 'No, joining is free! You\'ll only need to provide basic information about your business or services.'
          },
          {
            question: 'What kind of support will I receive?',
            answer: 'We provide dedicated onboarding, marketing materials, and ongoing support to help you successfully introduce RAY to your clients.'
          },
          {
            question: 'Can I integrate RAY\'s tools with my existing services?',
            answer: 'It depends. RAY\'s solutions are designed to complement your existing marketing or consulting services, adding more value to your client relationships. If you\'re considering a technical integration to embed RAY\'s technology into your own solution, let\'s schedule a call to discuss the possibilities and ensure everything aligns with your platform.'
          },
          {
            question: 'How do I track my referrals and earnings?',
            answer: 'You\'ll have access to a partner dashboard where you can track all your referrals, commissions, and performance metrics.'
          }
        ]
      },
      FINAL_CTA: {
        TITLE: 'Ready to Grow Together?',
        DESCRIPTION: 'Join our partner program today and start offering your clients a proven solution for restaurant growth.',
        CTA: 'Apply to Become a Partner'
      }
    },

    // Testimonials Section
    TESTIMONIALS: {
      BADGE: 'Customer Success Stories',
      TITLE: 'Real Results from Real Restaurants',
      SUBTITLE: 'See how restaurant owners across the country have transformed their business with RAY\'s marketing platform.',
      REVENUE_GROWTH: 'Revenue Growth',
      VIEW_ALL: 'View All Success Stories'
    },

    // CTA Section
    CTA_SECTION: {
      BADGE: 'Ready to Grow Your Restaurant?',
      TITLE: 'Ready to increase your restaurant revenue?',
      SUBTITLE: 'Join hundreds of successful restaurants using RAY to drive more walk-ins, orders, and positive reviews. Get your free restaurant scan today.',
      SCAN_RESTAURANT: 'Scan your restaurant',
      GUARANTEE: '30%+ Google Maps directions guarantee',
      NO_COMMITMENT: 'No commitment',
      RESULTS_TIME: 'Results in 60-90 days'
    },

    // Walk-Ins Page
    WALK_INS_PAGE: {
      BADGE: 'AI-Powered Local Marketing',
      HERO_TITLE: 'Turn Local Searches Into',
      HERO_TITLE_HIGHLIGHT: 'Walk-Ins',
      HERO_SUBTITLE: 'Dominate Google Maps and local search to drive more hungry customers to your restaurant door.',
      TALK_TO_EXPERT: 'Talk to an Expert',
      SCAN_RESTAURANT: 'Scan your restaurant',
      AVG_INCREASE: '47% avg. increase',
      RESULTS_TIME: 'Results in 60-90 days',
      MORE_VISIBILITY: 'More visibility',
      FEATURES: {
        GET_FOUND: {
          TITLE: 'Get Found First',
          DESCRIPTION: 'Rank #1 on Google Maps when hungry customers search nearby',
          DETAILS: [
            'Dominate "restaurants near me" searches',
            'Appear in AI recommendations and voice searches'
          ]
        },
        REVIEWS: {
          TITLE: 'Reviews & Reputation',
          DESCRIPTION: 'Build trust with automated review collection and response support',
          DETAILS: [
            'Staff leaderboard motivates review collection',
            'Professional response templates and guidance'
          ]
        },
        LISTINGS: {
          TITLE: 'Listings & Data Sync',
          DESCRIPTION: 'Keep hours, menus, and info accurate across all platforms automatically',
          DETAILS: [
            'Sync to Google, Yelp, Facebook, Apple Maps + 50 more',
            'One update pushes everywhere instantly'
          ]
        },
        LOCAL_PAGES: {
          TITLE: 'Local Pages & Schema',
          DESCRIPTION: 'Location pages optimized for search engines and customers',
          DETAILS: [
            'SEO-optimized pages for each location',
            'Structured data helps search engines understand your business'
          ]
        },
        INSIGHTS: {
          TITLE: 'Insights & Reporting',
          DESCRIPTION: 'Track Google Maps directions, calls, and ROI with clear dashboards',
          DETAILS: [
            'Monitor Google Business Profile direction requests',
            'See which efforts drive the most foot traffic'
          ]
        },
        PHOTOS: {
          TITLE: 'Photos & Q&A Management',
          DESCRIPTION: 'Manage photos and answer customer questions automatically',
          DETAILS: [
            'Upload high-quality photos automatically',
            'Answer frequent customer questions'
          ]
        }
      }
    },

    // WhatsApp Orders Page
    WHATSAPP_ORDERS_PAGE: {
      BADGE: '24/7 AI System',
      HERO_TITLE: 'Turn Restaurant DMs Into',
      HERO_TITLE_HIGHLIGHT: 'Orders',
      HERO_SUBTITLE: 'Stop losing hungry customers to slow replies! Our AI takes orders, books tables, and answers menu questions 24/7.',
      CTA_PRIMARY: 'Try Chat',
      CTA_SECONDARY: 'Try Call',
      PROBLEM_SECTION: {
        TITLE: 'Too many DMs. Not enough staff. 😤',
        PROBLEMS: [
          {
            TITLE: 'Guests message you day and night across all platforms',
            DESCRIPTION: 'Instagram, Facebook, WhatsApp, Google - they\'re everywhere'
          },
          {
            TITLE: 'Your staff can\'t reply fast enough to everyone',
            DESCRIPTION: 'Slow replies = lost customers and bad reviews'
          },
          {
            TITLE: 'Missed chats = missed orders and frustrated guests',
            DESCRIPTION: 'Every unanswered message is money walking out the door'
          }
        ]
      },
      SOLUTION_SECTION: {
        TITLE: 'Our AI agent never sleeps. ⚡',
        SUBTITLE: 'It replies in seconds, so you never lose a guest again.',
        FEATURES: [
          '✅ Take orders while you sleep',
          '📅 Auto-book reservations',
          '💬 Answer menu questions',
          '📢 Send smart campaigns'
        ]
      },
      CHANNELS_SECTION: {
        TITLE: 'One Agent. Three Channels. 🚀',
        SUBTITLE: 'Handle WhatsApp, Instagram, and Facebook from one place.',
        WHATSAPP: {
          TITLE: 'WhatsApp Business',
          DESCRIPTION: '24/7 automated responses'
        },
        INSTAGRAM: {
          TITLE: 'Instagram DMs',
          DESCRIPTION: 'Turn followers into customers'
        },
        FACEBOOK: {
          TITLE: 'Facebook Messenger',
          DESCRIPTION: 'Capture every opportunity'
        }
      },
      CONVERSATION_SECTION: {
        TITLE: 'See How It Works 👀',
        CUSTOMER_MESSAGES: [
          'Hi! Are you open?',
          'Perfect! Do you have tables for 4 at 8pm?',
          'Great! Under the name Maria Garcia',
          'Thank you so much! 😊'
        ],
        AI_RESPONSES: [
          'Hi Maria! Yes, we\'re open until 11pm. How can I help you? 😊',
          'Absolutely! I have availability for 4 people at 8:00pm. Would you like to book?',
          'Perfect! I\'ve booked a table for 4 at 8:00pm under Maria Garcia. I\'ll send you a reminder 2 hours before. Anything else I can help with?',
          'You\'re welcome! See you tonight. Have a great day! 🍽️'
        ]
      },
      INTEGRATION_SECTION: {
        TITLE: 'Integrates with Your POS System 🔗',
        SUBTITLE: 'Works with the systems you already use.',
        POS_SYSTEMS: ['Thinkion', 'Aloha', 'Square', 'Toast']
      },
      FINAL_CTA_TITLE: 'Be where your guests are — without lifting a finger',
      FINAL_CTA_SUBTITLE: 'Join hundreds of restaurants already using AI to boost their sales. Start your free trial today and see the difference in 24 hours.',
      FINAL_CTA_BUTTON: 'Book a Demo Now',
      FINAL_CTA_DISCLAIMER: 'No credit card required • 14-day free trial • Setup in under 5 minutes'
    },

    // Bookings Page
    BOOKINGS_PAGE: {
      BADGE: 'Smart Reservation Management',
      HERO_TITLE: 'Get More Direct Bookings. Connect with',
      HERO_TITLE_HIGHLIGHT: 'Every Customer',
      HERO_SUBTITLE: 'Manage reservations, walk-ins, and waitlists seamlessly—while building lasting relationships with your guests that drive repeat visits.',
      CTA_PRIMARY: 'Scan your restaurant',
      CTA_SECONDARY: 'Talk to an Expert',
      STATS: {
        TABLE_UTILIZATION: '+35% table utilization',
        NO_SHOWS: '40% fewer no-shows'
      },
      BOOKING_WIDGET: {
        RESERVE_TABLE: 'Reserve Your Table',
        AVAILABLE_TONIGHT: 'Available tonight',
        PARTY_SIZE: 'Party Size',
        PEOPLE_2: '2 people',
        PEOPLE_4: '4 people',
        PEOPLE_6: '6 people',
        BOOK_TABLE: 'Book Table',
        TABLE_UTILIZATION_STAT: '+35%',
        TABLE_UTILIZATION_LABEL: 'Table utilization',
        NO_SHOWS_STAT: '-40%',
        NO_SHOWS_LABEL: 'No-shows'
      },
      FEATURES_SECTION: {
        BADGE: 'Complete Booking Management',
        TITLE: 'Everything You Need to Maximize Every Table',
        SUBTITLE: 'From online reservations to walk-in management, our platform handles every aspect of guest booking while building relationships that drive repeat business.',
        FEATURES: [
          {
            TITLE: 'Online Booking & Increased Visibility',
            DESCRIPTION: 'Capture reservations 24/7 with an integrated booking widget that increases your online presence.'
          },
          {
            TITLE: 'Waitlist & Walk-in Management',
            DESCRIPTION: 'Never turn away a guest again. Manage walk-ins and waitlists efficiently during peak hours.'
          },
          {
            TITLE: 'Guest CRM & Preferences',
            DESCRIPTION: 'Build lasting relationships with detailed guest profiles, preferences, and visit history.'
          },
          {
            TITLE: 'Analytics & Insights',
            DESCRIPTION: 'Make data-driven decisions with comprehensive analytics on bookings, no-shows, and guest flow.'
          },
          {
            TITLE: 'Automated Reminders & Confirmations',
            DESCRIPTION: 'Reduce no-shows and improve guest experience with automated communication.'
          },
          {
            TITLE: 'Loyalty & Reward Support',
            DESCRIPTION: 'Encourage repeat visits with integrated loyalty programs and reward systems.'
          }
        ]
      },
      RESULTS_SECTION: {
        TITLE: 'Proven Results for Restaurant Operations',
        SUBTITLE: 'See the measurable impact our booking platform has on restaurant efficiency and revenue.',
        STATS: [
          {
            TITLE: 'Contact Details',
            SUBTITLE: 'of each of your bookings',
            DESCRIPTION: 'Build lasting relationships'
          },
          {
            TITLE: '+28%',
            SUBTITLE: 'Repeat Bookings',
            DESCRIPTION: 'Customers coming back'
          },
          {
            TITLE: '-40%',
            SUBTITLE: 'No-Show Rate',
            DESCRIPTION: 'Thanks to automated reminders'
          }
        ]
      },
      TESTIMONIAL: {
        QUOTE: 'RAY\'s booking platform transformed how we manage our restaurant. We went from constantly turning people away to maximizing every table. The waitlist feature alone increased our revenue by 35% during peak hours, and our guests love the seamless experience.',
        AUTHOR: 'Maria Rodriguez',
        POSITION: 'Owner, Bella Vista Restaurant'
      },
      FINAL_CTA: {
        BADGE: 'Start Optimizing Your Reservations Today',
        TITLE: 'Ready to maximize your table occupancy?',
        SUBTITLE: 'See how RAY\'s booking platform can transform your restaurant operations. Request a free demo and discover how to turn every table into revenue.',
        CTA_PRIMARY: 'Scan your restaurant',
        CTA_SECONDARY: 'Request Free Demo',
        GUARANTEES: [
          '30%+ Google Maps directions guarantee',
          'No long-term contracts',
          'Results in 60-90 days'
        ]
      }
    },

    // Online Orders Page
    ONLINE_ORDERS_PAGE: {
      BADGE: 'Digital Revenue Growth',
      HERO_TITLE: 'Get more',
      HERO_TITLE_HIGHLIGHT: 'direct online orders',
      HERO_SUBTITLE: 'Transform your digital presence into a revenue-generating machine. Our platform integrates seamlessly with booking systems, optimizes direct ordering, and provides the insights you need to maximize every online customer touchpoint.',
      CTA_PRIMARY: 'Scan your restaurant',
      STATS: {
        ONLINE_ORDERS: '+27% online orders in 90 days',
        HIGHER_MARGINS: '15% higher margins vs. 3rd party'
      },
      STATS_WIDGETS: {
        ONLINE_ORDERS_STAT: '+27%',
        ONLINE_ORDERS_LABEL: 'Online orders',
        ONLINE_ORDERS_SUBLABEL: 'in 90 days',
        HIGHER_MARGINS_STAT: '15%',
        HIGHER_MARGINS_LABEL: 'Higher margins',
        HIGHER_MARGINS_SUBLABEL: 'vs. 3rd party'
      },
      FEATURES_SECTION: {
        TITLE: 'Maximize Every Online Revenue Channel',
        SUBTITLE: 'From reservations to delivery orders, our platform optimizes every digital touchpoint to drive more revenue and higher profit margins.',
        FEATURES: [
          {
            TITLE: 'Bookings',
            SUBTITLE: 'Seamless Reservation Management',
            DESCRIPTION: 'Integrate with popular booking platforms and convert more browsers into diners.',
            DETAILS: [
              'OpenTable, Resy, and custom booking integrations',
              'Real-time availability management',
              'Automated confirmation and reminder emails',
              'No-show reduction strategies',
              'VIP customer identification and treatment'
            ]
          },
          {
            TITLE: 'Orders & Delivery',
            SUBTITLE: 'Direct Revenue Growth',
            DESCRIPTION: 'Win back margin from delivery platforms and grow direct orders through your own channels.',
            DETAILS: [
              'Direct online ordering system setup',
              'Delivery platform optimization',
              'Commission-free ordering solutions',
              'Upselling and cross-selling automation',
              'Loyalty program integration'
            ]
          },
          {
            TITLE: 'Data & Insights',
            SUBTITLE: 'Revenue Intelligence',
            DESCRIPTION: 'Comprehensive dashboards showing bookings, orders, and revenue lift across all channels.',
            DETAILS: [
              'Real-time revenue tracking',
              'Customer lifetime value analysis',
              'Peak time and demand forecasting',
              'Channel performance comparison',
              'ROI measurement and reporting'
            ]
          }
        ]
      },
      RESULTS_SECTION: {
        TITLE: 'Proven Results Across All Channels',
        SUBTITLE: 'Our clients see measurable improvements in online revenue, direct orders, and profit margins within the first 90 days.',
        STATS: [
          {
            VALUE: '+27%',
            LABEL: 'Online Orders Growth',
            DESCRIPTION: 'Average increase in 90 days'
          },
          {
            VALUE: '+28%',
            LABEL: 'Direct Orders',
            DESCRIPTION: 'Reduction in third-party delivery dependence'
          },
          {
            VALUE: '+42%',
            LABEL: 'Booking Conversion',
            DESCRIPTION: 'More website visitors become diners'
          },
          {
            VALUE: '15%',
            LABEL: 'Higher Margins',
            DESCRIPTION: 'By reducing third-party commissions'
          }
        ]
      },
      FINAL_CTA: {
        TITLE: 'Ready to maximize your online revenue?',
        SUBTITLE: 'Discover how RAY can optimize your bookings, orders, and deliveries.',
        CTA_BUTTON: 'Get Started Today'
      }
    },

    // Demo Page
    DEMO_PAGE: {
      HERO_TITLE: 'See the #1 restaurant sales platform in action',
      HERO_SUBTITLE: 'We guarantee a 30%+ increase in Google Business Profile Google Maps directions within 6 months — or we\'ll refund your investment. Join {RESTAURANTS_COUNT} already growing their revenue with {COMPANY_NAME}.',
      DEMO_INTRO: 'On your 20 minute demo, we\'ll show you how to',
      FORM_TITLE: 'Book your free demo',
      BENEFITS: [
        {
          TITLE: 'Online Orders Growth',
          DESCRIPTION: 'Integrated ordering systems with comprehensive analytics to boost digital revenue.'
        },
        {
          TITLE: 'Bookings Optimization',
          DESCRIPTION: 'Smart reservation management and waitlist tools to maximize table occupancy.'
        },
        {
          TITLE: 'Walk-Ins Strategy',
          DESCRIPTION: 'AI-powered local marketing to dominate Google Maps and drive foot traffic.'
        },
        {
          TITLE: 'Revenue Analytics',
          DESCRIPTION: 'Real performance data, case studies, and our 30%+ Google Maps directions guarantee.'
        }
      ],
      STATS: {
        NAVIGATION_INCREASE: '+47%',
        NAVIGATION_LABEL: 'Avg. Navigation Increase',
        DAYS_TO_RESULTS: '60-90',
        DAYS_LABEL: 'Days to Results',
        RESTAURANTS_COUNT: '100+',
        RESTAURANTS_LABEL: 'Restaurants Trust RAY'
      },
      TESTIMONIAL: {
        QUOTE: 'RAY transformed our business. We\'ve seen a 47% increase in walk-ins and our online orders have grown consistently every month.',
        AUTHOR: 'Restaurant Owner, Miami FL'
      },
      FORM: {
        ROLE_LABEL: 'Role',
        ROLE_PLACEHOLDER: 'Select one...',
        ROLE_OPTIONS: {
          OWNER: 'Restaurant Owner',
          MANAGER: 'Restaurant Manager',
          MARKETING: 'Marketing Manager',
          OTHER: 'Other'
        },
        FIRST_NAME_LABEL: 'First name',
        FIRST_NAME_PLACEHOLDER: 'First name',
        LAST_NAME_LABEL: 'Last name',
        LAST_NAME_PLACEHOLDER: 'Last name',
        EMAIL_LABEL: 'Email',
        EMAIL_PLACEHOLDER: 'Email',
        PHONE_LABEL: 'Cellphone',
        PHONE_PLACEHOLDER: 'Cellphone',
        RESTAURANT_NAME_LABEL: 'Restaurant name',
        RESTAURANT_NAME_PLACEHOLDER: 'Search your restaurant name...',
        RESTAURANT_NAME_HINT: 'Start typing, then select your restaurant from the list',
        HOW_HEARD_LABEL: 'How did you hear about us?',
        HOW_HEARD_PLACEHOLDER: 'Select one...',
        HOW_HEARD_OPTIONS: {
          GOOGLE: 'Google Search',
          SOCIAL: 'Social Media',
          REFERRAL: 'Referral',
          ADVERTISING: 'Online Advertising',
          OTHER: 'Other'
        },
        CONSENT_TEXT: 'I agree to receive automated text messages from {COMPANY_NAME} at the phone number provided to help me schedule a demo and evaluate the platform. Consent is not required. By signing up, I\'ll receive approximately 4 messages per month.',
        CONSENT_DISCLAIMER: 'Message & data rates may apply. Reply STOP to cancel anytime.',
        SUBMIT_BUTTON: 'Get a demo →',
        SUBMITTING: 'Submitting...',
        SUCCESS_MESSAGE: '✓ Form submitted successfully! We\'ll send you an email shortly.',
        ERROR_MESSAGE: '✗ Something went wrong. Please try again or contact support.',
        LEGAL_TEXT: 'By providing us with your information you are consenting to the collection and use of your information in accordance with our',
        TERMS_LINK: 'Terms of Service',
        PRIVACY_LINK: 'Privacy Policy',
        VALIDATION: {
          ROLE_REQUIRED: 'Please select your role',
          FIRST_NAME_REQUIRED: 'First name is required',
          LAST_NAME_REQUIRED: 'Last name is required',
          EMAIL_REQUIRED: 'Email is required',
          EMAIL_INVALID: 'Please enter a valid email address',
          PHONE_REQUIRED: 'Phone number is required',
          PHONE_INVALID_US: 'Please enter a valid 10-digit phone number',
          PHONE_INVALID_INTL: 'Please enter a valid international phone number starting with "+" and at least 8 characters'
        }
      }
    },

    // Case Studies Pages
    CASE_STUDIES_PAGE: {
      BADGE: 'Proven Success Stories',
      HERO_TITLE: 'Real Results from',
      HERO_TITLE_HIGHLIGHT: 'Real Restaurants',
      HERO_SUBTITLE: 'Discover how restaurants have achieved remarkable growth with RAY\'s platform.',
      READ_STORY: 'Read Story'
    },

    CASE_STUDIES_DATA: {
      METRIC_LABELS: {
        GOOGLE_MAPS_VIEWS: 'Google Maps Views',
        WALK_INS: 'Walk-ins',
        GOOGLE_RATING: 'Google Rating',
        GOOGLE_MAPS_DIRECTIONS: 'Google Maps Directions',
        MONTHLY_REVENUE: 'Monthly Revenue',
        BOOKINGS_GROWTH: 'Bookings Growth',
        LOCAL_VISIBILITY: 'Local Visibility',
        CONSCIOUS_CUSTOMERS: 'Conscious Customers',
        GREEN_VISIBILITY: 'Green Visibility',
        FOOT_TRAFFIC: 'Foot Traffic',
        BRAND_VISIBILITY: 'Brand Visibility',
        SALES_GROWTH: 'Sales Growth',
        CRAFT_BEER_SALES: 'Craft Beer Sales',
        DELIVERY_ORDERS: 'Delivery Orders',
        ONLINE_BOOKINGS: 'Online Bookings',
        MORNING_TRAFFIC: 'Morning Traffic',
        EVENT_BOOKINGS: 'Event Bookings',
        TABLE_TURNOVER: 'Table Turnover',
        CATERING_BOOKINGS: 'Catering Bookings',
        BREAKFAST_ORDERS: 'Breakfast Orders',
        LUNCH_ORDERS: 'Lunch Orders',
        RESERVATION_INCREASE: 'Reservation Increase',
        AFTERNOON_TRAFFIC: 'Afternoon Traffic',
        QUICK_SERVICE_ORDERS: 'Quick Service Orders',
        MOBILE_PRE_ORDERS: 'Mobile Pre-Orders',
        AVERAGE_RATING: 'Average Rating'
      },
      LOCATIONS: {
        WYNWOOD_MIAMI: 'Wynwood, Miami',
        MIAMI_FL: 'Miami, FL',
        MULTIPLE_LOCATIONS: 'Multiple Locations',
        ECO_CONSCIOUS_MARKET: 'Eco-Conscious Market',
        COFFEE_MARKET: 'Coffee Market',
        CRAFT_BREWERY_MARKET: 'Craft Brewery Market',
        SPORTS_BAR_MARKET: 'Sports Bar Market',
        DESSERT_MARKET: 'Dessert Market',
        CRAFT_BEER_BAR: 'Craft Beer Bar',
        PIZZA_DELIVERY: 'Pizza Delivery',
        RESTAURANT_GROUP: 'Restaurant Group',
        ITALIAN_DINING: 'Italian Dining',
        CAFE_CULTURE: 'Cafe Culture',
        BEER_TAPROOM: 'Beer Taproom',
        FAST_CASUAL: 'Fast Casual',
        MEXICAN_CUISINE: 'Mexican Cuisine Market',
        FRENCH_BAKERY: 'French Bakery',
        BAKERY_CAFE: 'Bakery Cafe',
        CORPORATE_LUNCH: 'Corporate Lunch',
        ITALIAN_PASTA: 'Italian Pasta',
        TEA_WELLNESS: 'Tea & Wellness',
        CONVENIENCE_STORE: 'Convenience Store',
        GRILL_DISTRICT: 'Grill District',
        SUSTAINABLE_DINING: 'Sustainable Dining',
        TROPICAL_DINING: 'Tropical Dining',
        CUBAN_COFFEE_CULTURE: 'Cuban Coffee Culture'
      },
      INDUSTRIES: {
        CRAFT_BEER_NIGHTLIFE: 'Craft Beer & Nightlife',
        NIGHTLIFE_DINING: 'Nightlife & Dining',
        RESTAURANT_GROUP: 'Restaurant Group',
        SUSTAINABLE_RESTAURANT: 'Sustainable Restaurant',
        CUBAN_RESTAURANT: 'Cuban Restaurant',
        COFFEE_CHAIN: 'Coffee Chain',
        CRAFT_BREWERY: 'Craft Brewery',
        SPORTS_BAR: 'Sports Bar',
        DESSERT_SHOP: 'Dessert Shop',
        CRAFT_BEER_BAR: 'Craft Beer Bar',
        COCKTAIL_BAR: 'Cocktail Bar',
        PIZZA_RESTAURANT: 'Pizza Restaurant',
        HOSPITALITY_GROUP: 'Hospitality Group',
        ITALIAN_RESTAURANT: 'Italian Restaurant',
        ITALIAN_SEAFOOD: 'Italian Seafood',
        MODERN_GRILL: 'Modern Grill',
        SUSTAINABLE_SEAFOOD: 'Sustainable Seafood',
        CARIBBEAN_FUSION: 'Caribbean Fusion',
        CUBAN_CAFE: 'Cuban Cafe',
        CAFE_CHAIN: 'Cafe Chain',
        BREWERY_TAPROOM: 'Brewery & Taproom',
        FAST_SERVICE: 'Fast Service',
        MEXICAN_RESTAURANT: 'Mexican Restaurant',
        FRENCH_CAFE: 'French Cafe',
        BAKERY: 'Bakery',
        CORPORATE_CATERING: 'Corporate Catering',
        PASTA_HOUSE: 'Pasta House',
        TEA_HOUSE: 'Tea House',
        CONVENIENCE_CHAIN: 'Convenience Chain'
      },
      HEADLINES: {
        TEMPLE_CRAFT: 'From #15 to #1 on Google Maps',
        CHIMBA_MIAMI: 'Explosive Growth in Local Visibility',
        HAVANA_1957: 'Cuban Excellence with Digital Marketing',
        GREEN_EAT: 'Connecting with Eco-Conscious Customers',
        HAVANNA: 'Digital Modernization While Maintaining Tradition',
        CRAFT: 'Building Artisanal Beer Community',
        WINGSFC: 'Maximizing Game Day Revenue',
        DOLCEZZA: 'Consistent Growth Month After Month',
        LA_BIRRA_BAR: 'Creating Community of Craft Beer Lovers',
        ALMACEN_PIZZAS: 'Complete Delivery Business Transformation',
        EFES_MG: 'Unified Restaurant Empire Bookings',
        LA_PAROLACCIA: 'The Neighborhood\'s Favorite Italian Restaurant',
        LIBERTINO_CAFE: 'The Neighborhood\'s Favorite Morning Spot',
        CERVEZA_PATAGONIA: 'Premier Event Destination Taproom',
        KARNE_GARIBALDI: 'Optimizing Legendary Fast-Service Model',
        LA_GUITARRITA: 'Expansion with WhatsApp Ordering and Catering',
        OH_MEXICO: 'Mexican Authenticity That Stands Out',
        MERCATO_DELLA_PESCHERIA: 'Premium Italian Seafood Excellence',
        BARSECCO: 'High-End Italian Mixology',
        SALTY_FLAME: 'High-End Modern Grill',
        PAPERFISH: 'Premium Sustainable Seafood',
        MARABU: 'Sophisticated Caribbean Fusion Experience',
        CORTADITO_CAFE: 'Reference Destination for Authentic Cuban Coffee',
        LE_PAIN_QUOTIDIEN: 'Unified Cafe Network with Cross-Location Loyalty',
        LA_PANERA_ROSA: 'Thriving Morning Business with Branded Mobile App',
        NININA: 'Tapping into Lucrative Corporate Lunch Market',
        PASTA_ROSSA: 'The Go-To Italian Pasta Destination',
        TEA_CONNECTION: 'Premier Destination for Tea and Wellness',
        YPF_FULL: 'Digital Convenience Store Network'
      }
    },

    CHIMBA_CASE_STUDY: {
      HERO_TITLE: 'Chimba Miami Case Study - 215% Increase in Google Maps Directions',
      HERO_SUBTITLE: 'Chimba Miami, a nightlife and dining establishment in Miami, achieved significant growth using RAY\'s restaurant marketing platform. Over 5 months (March-August 2024), they increased Google Maps directions by 215% and walk-ins by 46% while maintaining a 4.7-star Google rating.'
    },

    TEMPLE_CASE_STUDY: {
      HERO_TITLE: 'Temple Craft Wynwood Case Study - 259% Growth in Local Visibility',
      HERO_SUBTITLE: 'Discover how Temple Craft Wynwood achieved 259% increase in Google Maps visits and 66% more walk-ins with RAY\'s local marketing strategies. Craft beer success story.'
    },

    CONTACT_PAGE: {
      TITLE: 'Get in Touch',
      SUBTITLE: 'Fill out the form below, and we\'ll connect you to the right team. We look forward to hearing from you!',
      FORM: {
        FULL_NAME: 'Full name',
        FULL_NAME_PLACEHOLDER: 'Your full name',
        WORK_EMAIL: 'Work email',
        WORK_EMAIL_PLACEHOLDER: 'you@restaurant.com',
        COMPANY: 'Company',
        COMPANY_PLACEHOLDER: 'Your company name',
        PHONE: 'Phone',
        PHONE_PLACEHOLDER: 'Your phone number',
        LOCATIONS: 'Number of locations',
        LOCATIONS_OPTIONS: [
          { value: '1', label: '1 location' },
          { value: '2-5', label: '2-5 locations' },
          { value: '6-10', label: '6-10 locations' },
          { value: '11+', label: '11+ locations' }
        ],
        MESSAGE: 'Message',
        MESSAGE_PLACEHOLDER: 'Tell us how we can help you...',
        SUBMIT_BUTTON: 'Send Message',
        SUBMITTING: 'Sending...',
        SUCCESS_TITLE: 'Message Sent Successfully!',
        SUCCESS_MESSAGE: 'Thanks for reaching out! We\'ll get back to you within 24 hours.',
        VALIDATION: {
          FULL_NAME_REQUIRED: 'Full name is required',
          FULL_NAME_MIN: 'Please enter your full name',
          EMAIL_REQUIRED: 'Work email is required',
          EMAIL_INVALID: 'Please enter a valid email address',
          MESSAGE_REQUIRED: 'Message is required',
          MESSAGE_MIN: 'Please provide more details (at least 10 characters)'
        }
      },
      DIRECT_CONTACT: 'Prefer to reach out directly?'
    },

    ABOUT_PAGE: {
      HERO: {
        TITLE: 'Helping restaurant owners',
        TITLE_HIGHLIGHT: 'survive & thrive',
        SUBTITLE: 'Learn how we got here, what keeps us going, and why our customers love RAY. This is personal for us.',
        IMAGE_CAPTION: 'Meet Franco and Sebastian',
        CTA_TEXT: 'See our story'
      },
      FOUNDERS: {
        TITLE: 'Meet our founders',
        FRANCO: {
          NAME: 'Franco Breciano',
          TITLE: 'Co-Founder & CEO',
          BIO: [
            'Franco founded RAY when realizing during Covid 19, that restaurants had lost their tools and skills to keep close relationships with their customers, and depended on third party platforms for orders and reservations to keep their business alive.',
            'When ChatGPT 3.5 was launched, he saw an opportunity to help restaurants recover their own relationships with consumers by using acombination of ai agents in all their forms combined with existing POS systems, mobile apps and a state of the art websites that LLMs like ChatGPT, Gemini or Claude could understand. This is how RAY was born, pioneering the way consumers interact with restaurants.'
          ]
        },
        SEBASTIAN: {
          NAME: 'Sebastian Cadenas',
          TITLE: 'Co-Founder & CTO',
          BIO: 'Sebastian brings deep expertise and a unique understanding of restaurant needs. His focus on creating simple yet powerful solutions has been instrumental in making RAYs technology accessible to restaurant owners of all sizes across the United States and Latin America.'
        }
      },
      LOCAL_HEROES: {
        TITLE: 'Local business owners are heroes to us.',
        PARAGRAPHS: [
          'They risk everything - years of their lives, their families, their savings - to pursue their dreams.',
          'They\'re the heart of our economy, creating the majority of new jobs. They remind us that it\'s possible to rise from being an entry-level worker to becoming a business owner one day, as 70% of business owners do.',
          'But local business owners are on a path to extinction.',
          'Just 20 years ago, 60% of restaurants were owned by independent mom and pops. Today, that number is 40%, and dropping. Big chains keep taking over. Mom-and-pops keep shutting down.'
        ]
      },
      TECH_REVOLUTION: {
        TITLE: 'A technological revolution is going on.',
        PARAGRAPHS: [
          'Local restaurants are being destroyed by large corporations. Tech companies like Grubhub charge predatory fees and take away all of their customer relationships. They don\'t even share customers\' names, let alone contact details.',
          'Plus, massive corporations like Domino\'s Pizza are spending billions on marketing and technology — aiming to replace their small local counterparts.',
          'But RAY is changing the odds.',
          'RAY is a proven system for independent restaurants to drive sales profitably — to grow independently, in spite of the Goliaths.'
        ]
      },
      FINAL_CTA: {
        TITLE: 'Local business owners need tech that helps them, not hurts them.',
        CTA_TITLE: 'The easiest way to grow your restaurant online.',
        CTA_BUTTON: 'Get a demo'
      }
    },

    PRICING_PAGE: {
      HERO: {
        BADGE: 'Simple, Transparent Pricing',
        TITLE: 'Choose the perfect plan for your restaurant',
        TITLE_HIGHLIGHT: '',
        SUBTITLE: 'Flexible plans that grow with you'
      },
      TIERS: [
        {
          id: 'walkins',
          name: 'WalkIns',
          tagline: 'Drive more foot traffic to your restaurant',
          price: '270',
          priceDetail: '/month per location',
          setupFee: '$1,000',
          orderPercentage: 'None',
          description: 'Increase restaurant traffic with Google Maps optimization, review management, and weekly reporting.',
          features: [
            'Website',
            'Google Maps optimization',
            'Review management',
            'Weekly & Monthly reporting'
          ],
          excludedFeatures: [],
          ctaText: 'Get Started',
          ctaDestination: 'demo',
          isPopular: false
        },
        {
          id: 'ordering-premium',
          name: 'Direct Ordering & Bookings',
          tagline: 'Everything you need to grow',
          price: '350',
          priceDetail: '/month per location',
          setupFee: '$750',
          orderPercentage: '3%',
          description: 'Includes WalkIns plus online ordering, bookings, WhatsApp, loyalty program, and custom mobile app.',
          features: [
            'WalkIns',
            'Website',
            'Online ordering',
            'Bookings',
            'WhatsApp delivery (AI)',
            'Loyalty',
            'Gift Cards',
            'Mobile App'
          ],
          excludedFeatures: [],
          ctaText: 'Get Started',
          ctaDestination: 'demo',
          isPopular: true,
          badge: 'Most Popular'
        }
      ],
      FAQ: {
        TITLE: 'Frequently Asked Questions',
        SUBTITLE: 'Everything you need to know about RAY pricing',
        QUESTIONS: [
          {
            question: 'What does the 30%+ guarantee cover?',
            answer: 'We guarantee a 30%+ increase in Google Business Profile Google Maps directions within 6 months. "Google Maps Directions" refers to direction requests and navigation taps on your Google Business Profile. If we don\'t hit this target, we\'ll refund your investment.'
          },
          {
            question: 'Can I switch plans later?',
            answer: 'Yes! You can upgrade or downgrade your plan at any time. When you upgrade, you\'ll get immediate access to new features. Downgrades take effect at the start of your next billing cycle.'
          },
          {
            question: 'Is there a contract or commitment?',
            answer: 'No long-term contracts required. All plans are month-to-month and you can cancel at any time. We recommend staying for at least 3 months to see meaningful results.'
          },
          {
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover) and ACH bank transfers for Enterprise customers.'
          },
          {
            question: 'Do you offer discounts for annual billing?',
            answer: 'Yes! Contact our sales team to learn about annual billing discounts and special offers for multi-location restaurants.'
          }
        ]
      },
      BOTTOM_CTA: {
        BADGE: 'Ready to Grow Your Restaurant?',
        TITLE: 'Still have questions?',
        SUBTITLE: 'Book a free demo and see how RAY can transform your restaurant\'s online presence and drive more revenue.',
        PRIMARY_CTA: 'Book a Free Demo',
        SECONDARY_CTA: 'Start Free Scan'
      }
    },

    AI_CONCIERGE_PAGE: {
      HERO: {
        TITLE: 'Turn Restaurant',
        TITLE_HIGHLIGHT: 'DMs Into Orders.',
        SUBTITLE: 'Stop losing hungry customers to slow replies! Our AI takes orders, books tables, and answers menu questions on WhatsApp — 24/7, even when your restaurant is closed. 🚀',
        BADGES: [
          'Take orders while you sleep',
          'Auto-book reservations',
          'Answer menu questions',
          'Send smart campaigns'
        ],
        TRY_CHAT: 'Try chat',
        TRY_PHONE: 'Try phone call'
      },
      PROBLEM: {
        TITLE: 'Too many WhatsApp messages. Not enough staff. 😤',
        ISSUES: [
          'Guests message you on WhatsApp day and night',
          'Your staff can\'t reply fast enough',
          'Missed messages = missed orders and frustrated guests'
        ],
        SOLUTION: {
          TITLE: 'Our AI agent never sleeps. ⚡',
          SUBTITLE: 'It replies in seconds, so you never lose a guest again.'
        }
      },
      HOW_IT_WORKS: {
        TITLE: 'Your 24/7 WhatsApp Assistant. 🚀',
        PLATFORMS: [
          {
            name: 'Automatic Orders',
            description: 'Take complete delivery and pickup orders directly on WhatsApp.',
            features: [
              'Instant confirmation',
              'Total calculation',
              'Auto-send to POS'
            ]
          },
          {
            name: 'Table Reservations',
            description: 'Manage bookings without phone calls.',
            features: [
              'Real-time availability',
              'Automatic confirmations',
              'Guest reminders'
            ]
          },
          {
            name: 'Menu Questions',
            description: 'Answer questions about dishes, ingredients, and prices instantly.',
            features: [
              'Allergen information',
              'Personalized recommendations',
              'Current promotions'
            ]
          },
          {
            name: 'Smart Campaigns',
            description: 'Send personalized offers to your customers at the perfect time.',
            features: [
              'Automatic segmentation',
              'Personalized messages',
              'Conversion metrics'
            ]
          }
        ]
      },
      POS_INTEGRATION: {
        TITLE: 'Built to work with your POS. 🔗',
        SUBTITLE: 'No disruption to your workflow. Our AI syncs with your existing point-of-sale system so orders flow directly into your kitchen without any extra steps.',
        FEATURES: [
          {
            title: 'Menu sync (items, modifiers, prices, taxes)',
            description: 'Always up-to-date pricing and availability'
          },
          {
            title: 'Order injection to POS (pickup, delivery, dine-in)',
            description: 'Orders appear directly in your kitchen system'
          },
          {
            title: 'Stock & 86\'d items respected',
            description: 'Never sell what you don\'t have'
          },
          {
            title: 'Order throttling by kitchen load',
            description: 'Smart pacing to prevent overwhelm'
          },
          {
            title: 'Store hours, service types, and fees honored',
            description: 'Respects your business rules automatically'
          },
          {
            title: 'Receipts + order IDs that match your POS',
            description: 'Perfect tracking and reconciliation'
          }
        ],
        COMPATIBILITY_NOTE: 'Don\'t see yours? We\'ll confirm compatibility.'
      },
      BENEFITS: {
        TITLE: 'Why restaurants love it ❤️',
        DASHBOARD_TITLE: 'It\'s like having a full-time host, server, and marketer… inside your inbox. 🎯',
        DASHBOARD_HEADER: 'AI Dashboard',
        DASHBOARD_LABELS: {
          MESSAGES_TODAY: 'Messages today',
          ORDERS_TAKEN: 'Orders taken',
          TABLES_BOOKED: 'Tables booked',
          RESPONSE_TIME: 'Response time'
        },
        FEATURES: [
          {
            title: '⚡ 24/7 instant replies',
            description: 'Never miss a message, even when you\'re closed or busy'
          },
          {
            title: '🍕 More orders automatically',
            description: 'Turn every message into a potential sale'
          },
          {
            title: '📅 Automatic bookings',
            description: 'Let guests reserve tables without calling'
          },
          {
            title: '⭐ Build loyalty rewards',
            description: 'Keep customers coming back with points and offers'
          },
          {
            title: '🛠️ No extra staff needed',
            description: 'Save on labor costs while improving service'
          },
          {
            title: '📊 Smart insights',
            description: 'Learn what customers ask and improve your business'
          }
        ]
      },
      FAQ: {
        TITLE: 'Frequently Asked Questions',
        SUBTITLE: 'Everything you need to know about AI Concierge.',
        QUESTIONS: [
          {
            question: 'How long does implementation take?',
            answer: 'Opt-in in minutes; content adjustments in 1 hour.'
          },
          {
            question: 'Does it reply like a "robot"?',
            answer: 'No. Uses your tone and FAQs; you can review and improve responses.'
          },
          {
            question: 'What about complaints?',
            answer: 'Channels them privately and notifies your team.'
          },
          {
            question: 'Multi-location?',
            answer: 'Yes, content and hours per location, with metrics per store.'
          },
          {
            question: 'Privacy and consent?',
            answer: 'Opt-in/opt-out and interaction logging included.'
          }
        ]
      },
      FINAL_CTA: {
        TITLE: 'Be everywhere your guests are — without lifting a finger. 🙌',
        SUBTITLE: 'Join hundreds of restaurants already using AI to boost their sales. Start your free trial today and see the difference in 24 hours.',
        CTA: 'Book a Demo Now',
        DISCLAIMER: 'No credit card required • 14-day free trial • Setup in under 5 minutes'
      }
    },
    VOICE_AGENT_PAGE: {
      HERO: {
        TITLE: 'Turn Phone Calls',
        TITLE_HIGHLIGHT: 'Into Orders & Reservations automatically.',
        SUBTITLE: 'Never miss another call! Our AI assistant answers calls, takes orders, makes reservations, and answers menu questions — 24/7, even when your restaurant is closed. 📞',
        BADGES: [
          'Answer calls 24/7',
          'Take phone orders',
          'Menu information',
          'Book tables automatically'
        ]
      },
      PROBLEM: {
        TITLE: 'Too many calls. Not enough staff. 📞',
        ISSUES: [
          'Customers call day and night for orders and reservations',
          'Your staff can\'t answer all the calls',
          'Missed calls = lost orders and frustrated customers'
        ],
        SOLUTION: {
          TITLE: 'Our voice assistant never sleeps. 🤖',
          SUBTITLE: 'Answers all calls in seconds, so you never lose a customer again.'
        }
      },
      POS_INTEGRATION: {
        TITLE: 'Integrated with your existing POS. 🔗',
        SUBTITLE: 'No disruption to your workflow. Our voice assistant syncs with your existing point of sale system so orders flow directly to your kitchen.',
        FEATURES: [
          {
            title: 'Takes complete phone orders',
            description: 'Handles delivery, pickup, and reservation orders automatically'
          },
          {
            title: 'Answers menu questions instantly',
            description: 'Information about ingredients, prices, and availability'
          },
          {
            title: 'Manages reservations automatically',
            description: 'Checks availability and confirms bookings in real-time'
          },
          {
            title: 'Provides location information',
            description: 'Gives directions, hours, and contact information'
          },
          {
            title: 'Handles multiple calls simultaneously',
            description: 'No more busy signals or customers on hold'
          }
        ]
      },
      BENEFITS: {
        TITLE: 'Why restaurants love it ❤️',
        DASHBOARD_TITLE: 'It\'s like having a full-time receptionist... who never gets sick. 📞',
        DASHBOARD_HEADER: 'Voice Assistant Dashboard',
        DASHBOARD_LABELS: {
          CALLS_TODAY: 'Calls today',
          ORDERS_TAKEN: 'Orders taken',
          RESERVATIONS_BOOKED: 'Reservations booked',
          AVG_CALL_TIME: 'Avg call time'
        },
        FEATURES: [
          {
            title: '📞 Answers all calls 24/7',
            description: 'Never miss a call, even when closed or busy'
          },
          {
            title: '🍕 More orders automatically',
            description: 'Turn every call into a potential sale'
          },
          {
            title: '📅 Automatic reservations',
            description: 'Let customers book tables without waiting'
          },
          {
            title: '⭐ Consistent experience',
            description: 'Professional and courteous service on every call'
          },
          {
            title: '🛠️ No additional staff needed',
            description: 'Save on labor costs while improving service'
          }
        ]
      },
      FAQ: {
        TITLE: 'Frequently Asked Questions',
        SUBTITLE: 'Everything you need to know about the Voice Assistant.',
        QUESTIONS: [
          {
            question: 'Does it sound natural or robotic?',
            answer: 'Our voice assistant uses advanced AI to sound natural and conversational. Customers won\'t notice the difference.'
          },
          {
            question: 'Can it handle complex orders?',
            answer: 'Yes, it can take complete orders with modifications, calculate totals, and confirm delivery details.'
          },
          {
            question: 'What if a customer has a complaint?',
            answer: 'The assistant can handle basic complaints and transfer complex calls to your staff when needed.'
          },
          {
            question: 'Does it work with multiple locations?',
            answer: 'Yes, each location can have its own assistant with specific menus and hours.'
          },
          {
            question: 'What languages does it support?',
            answer: 'Currently supports English and Spanish, with more languages coming soon.'
          }
        ]
      },
      FINAL_CTA: {
        TITLE: 'Never miss another call. 📞',
        SUBTITLE: 'Join restaurants already using AI to answer calls and boost sales. Free trial with no commitment.',
        CTA: 'Book a Demo Now',
        DISCLAIMER: 'No credit card required • 14-day free trial • Setup in under 5 minutes'
      }
    },
    LOYALTY_PAGE: {
      HERO: {
        TITLE: 'Offer a rewards program',
        TITLE_HIGHLIGHT: 'like the national chains.',
        SUBTITLE: 'Build customer loyalty with a rewards program. Keep guests coming back for more, just like the big brands.',
        CTA_DEMO: 'Get a demo',
        CTA_PRICING: 'View Pricing'
      },
      FEATURES: {
        TITLE: 'Run a loyalty program your regulars will love',
        LIST: [
          {
            title: 'Use rewards to get more fans',
            description: 'Loyalty points turn occasional buyers into loyal regulars.'
          },
          {
            title: 'No-brainer guest signup',
            description: 'Customers can join your rewards program in seconds.'
          },
          {
            title: 'Easy for guests to track rewards',
            description: 'Guests can track points easily, especially on your app.'
          }
        ]
      },
      BOOST_ORDERS: {
        TITLE: 'Boost your repeat orders',
        SUBTITLE: 'Encourage casual customers to come back.',
        SETUP_TITLE: 'Simple setup. Easy for customers to earn. Easy to track.',
        SETUP_DESCRIPTION: 'Set up your rewards program in minutes and let customers start earning points immediately.'
      },
      SIGNUP: {
        TITLE: 'Quick rewards signup gets more loyal fans.',
        SUCCESS_MESSAGE: 'You\'re now signed up for Ottavio\'s rewards program!'
      },
      FAQ: {
        TITLE: 'FAQs',
        QUESTIONS: [
          {
            question: 'How will this loyalty program help increase my sales?',
            answer: 'Loyalty programs increase customer retention by 5% which can boost profits by 25-95%. Regular customers spend 67% more than new customers and are more likely to try new menu items.'
          },
          {
            question: 'How do customers sign up for my loyalty program?',
            answer: 'Customers can sign up through your app, website, or in-store with just their phone number or email. The process takes less than 30 seconds and they can start earning points immediately.'
          },
          {
            question: 'Can I customize the rewards to fit my restaurant\'s brand?',
            answer: 'Yes! You can customize point values, reward tiers, special offers, and even the look and feel to match your restaurant\'s branding and customer preferences.'
          }
        ]
      },
      TESTIMONIAL: {
        QUOTE: 'The platform has been like a superpower for restaurants that increases sales and drives new customers consistently.',
        AUTHOR: 'Rahul Bhalla',
        POSITION: 'Owner of Satyam Indian Kitchen',
        SALES: '+$4,500,000',
        LOCATIONS: '+4',
        SALES_LABEL: 'in sales',
        LOCATIONS_LABEL: 'locations',
        CTA: 'See Rahul\'s story →'
      },
      GUIDES: {
        TITLE: 'See our guides for loyalty and rewards programs',
        CTA: 'Read the blog',
        GUIDE_1: 'Here\'s How To Build A Profitable Loyalty Program',
        GUIDE_2: 'How a Loyalty Program Dramatically Increased Ottavio\'s Online Sales'
      },
      FINAL_CTA: {
        TITLE: 'Automate marketing to your customers',
        SUBTITLE: 'Run growth marketing campaigns that grow your online sales.',
        CTA: 'Get started today'
      }
    },
    AI_EMPLOYEE_PAGE: {
      HERO: {
        TITLE: 'Your digital employee',
        TITLE_HIGHLIGHT: 'that never sleeps',
        SUBTITLE: 'AI agent that serves your customers 24/7 on WhatsApp, Instagram, your website and Facebook Messenger. Answers menu questions, takes bookings, processes orders and manages loyalty program signups. All integrated with your POS.',
        CTA_DEMO: 'Get a demo',
        CTA_PRICING: 'View Pricing'
      },
      FEATURES: {
        TITLE: 'Everything you need to automate your customer service',
        LIST: [
          {
            TITLE: 'Instant 24/7 responses',
            DESCRIPTION: 'Never lose a customer due to lack of response. Your AI agent is available 24 hours a day, every day.'
          },
          {
            TITLE: 'Integrated multi-platform',
            DESCRIPTION: 'One agent that works on WhatsApp, Instagram, your website and Facebook Messenger simultaneously.'
          },
          {
            TITLE: 'Smart booking management',
            DESCRIPTION: 'Takes, modifies and manages bookings directly from any platform, without the need for human intervention.'
          },
          {
            TITLE: 'Automatic order processing',
            DESCRIPTION: 'Processes delivery orders automatically, verifies availability and confirms everything error-free.'
          },
          {
            TITLE: 'Automatic loyalty signup',
            DESCRIPTION: 'Automatically signs customers up to your loyalty program during natural conversations.'
          }
        ]
      },
      FAQ: {
        TITLE: 'Frequently Asked Questions',
        QUESTIONS: [
          {
            QUESTION: 'How does the AI agent work?',
            ANSWER: 'Our AI agent uses advanced natural language technology to understand and answer questions, process bookings and orders, and manage loyalty program signups. It learns from your menus, hours, policies and more to provide accurate and helpful responses.'
          },
          {
            QUESTION: 'What platforms is it available on?',
            ANSWER: 'The agent is available on WhatsApp, Instagram (direct messages and comments), your website (through a widget) and Facebook Messenger. All platforms are connected and the agent maintains context between conversations.'
          },
          {
            QUESTION: 'Can it take real bookings and orders?',
            ANSWER: 'Yes, the agent can take bookings by checking real-time availability and process delivery orders integrated with your POS system. It also sends automatic confirmations and notifies your team when necessary.'
          },
          {
            QUESTION: 'How does it integrate with my existing system?',
            ANSWER: 'We integrate with major POS systems, booking platforms and loyalty programs. The agent can access menus, hours, availability and more in real-time.'
          },
          {
            QUESTION: 'What happens if the agent doesn\'t know how to answer something?',
            ANSWER: 'The agent is configured to recognize when it needs human help. In those cases, it can transfer the conversation to your team or take contact information for follow-up. It also learns from each interaction to improve.'
          },
          {
            QUESTION: 'How long does it take to set up the agent?',
            ANSWER: 'Initial setup takes approximately 2-3 weeks, including integration with your systems, training the agent with your specific information and testing. We provide complete support throughout the process.'
          }
        ]
      }
    },
    MOBILE_APP_PAGE: {
      HERO: {
        BADGE: 'Custom Mobile App',
        TITLE: 'Imagine having your own',
        TITLE_HIGHLIGHT: 'restaurant mobile app',
        SUBTITLE: 'With a mobile app, send customers order directly — instead of going to third parties.',
        CTA_DEMO: 'Get a demo',
        CTA_PRICING: 'View Pricing',
        STAT_1: '85% more repeat orders',
        STAT_2: 'No commissions'
      },
      BENEFITS: {
        TITLE: 'Every restaurant today needs a mobile app',
        FEATURES: [
          {
            title: 'The fastest way for your regulars to order',
            description: 'Customers can re-order in a few taps. No distractions from other restaurants.'
          },
          {
            title: 'Your own 5-star mobile app',
            description: 'We\'ve helped restaurants earn thousands of 5-star reviews on Apple and Android.'
          },
          {
            title: 'It drives repeat orders',
            description: 'Restaurants with apps get 85% more return customers.'
          }
        ]
      },
      REORDER_SECTION: {
        BADGE: 'Fast ordering',
        TITLE: 'Regulars can reorder in seconds.',
        SUBTITLE: 'Your app saves their favorite orders and payment info for a super-fast reordering experience.'
      },
      SOCIAL_PROOF: {
        BADGE: 'Control delivery options',
        TITLE: 'Thousands of 5-star ratings on Apple and Android. It\'s your turn.',
        APP_STORE_LABEL: 'App Store Reviews',
        GOOGLE_PLAY_LABEL: 'Google Play Reviews',
        LOYALTY_TITLE: 'Customer loyalty',
        LOYALTY_STAT: 'Apps drive 85% more repeat orders.',
        LOYALTY_DESCRIPTION: 'Customers with your app order more frequently and spend more per order.',
        TESTIMONIAL: '"The app makes ordering so easy. I use my saved orders all the time!"'
      },
      FAQ: {
        TITLE: 'FAQs',
        QUESTIONS: [
          {
            question: 'Do independent restaurants really need their own app?',
            answer: 'Yes, especially if you want to compete with national chains. A mobile app gives you direct control over the customer experience and eliminates third-party commissions.'
          },
          {
            question: 'Do you build me a custom app from scratch?',
            answer: 'We create a fully customized app with your branding, colors, logo, and menu. While we use a proven platform, each app is unique to your restaurant.'
          },
          {
            question: 'How much does this cost?',
            answer: 'Our mobile apps start at $270/month with a one-time setup fee. No per-order commissions - all revenue goes directly to you.'
          }
        ]
      },
      FINAL_CTA: {
        TITLE: 'Get your own mobile app today',
        SUBTITLE: 'Join hundreds of restaurants that already have their own custom mobile app.',
        CTA: 'Get started today'
      }
    },
    WEBSITE_BUILDER_PAGE: {
      HERO: {
        BADGE: 'AI-Powered Websites',
        TITLE: 'Restaurant websites built for',
        TITLE_HIGHLIGHT: 'sales first, style second.',
        SUBTITLE: 'RAY builds your website to drive sales. Our proven design grows Google traffic, optimizes delivery apps, and hosts your competition.',
        CTA_DEMO: 'Get a demo',
        CTA_PRICING: 'View Pricing',
        STAT_1: 'Ready in days, not months',
        STAT_2: 'Google optimized'
      },
      FEATURES: {
        TITLE: 'A proven design that drives more traffic',
        SUBTITLE: 'AI-optimized sites boost SEO and Google traffic.',
        LIST: [
          {
            title: 'SEO-Optimized Websites',
            description: 'Websites designed to be found on Google and convert visitors into customers',
            details: [
              'Automatic optimization for local searches',
              'Fast-loading pages for better experience'
            ]
          },
          {
            title: 'Mobile-First Design',
            description: 'Websites that look perfect on any device, especially mobile',
            details: [
              'Responsive design for all screen sizes',
              'Optimized experience for mobile ordering'
            ]
          },
          {
            title: 'Quick Setup',
            description: 'Your new website will be ready in days, not months',
            details: [
              'Automatic setup with your existing information',
              'Proven designs that convert visitors into customers'
            ]
          }
        ]
      },
      FAQ: {
        TITLE: 'Frequently Asked Questions',
        SUBTITLE: 'Everything you need to know about our restaurant website builder.',
        QUESTIONS: [
          {
            question: 'What happens to my current website?',
            answer: 'RAY replaces your current website. We redirect your domain to your new website with RAY, keeping all your online presence intact.'
          },
          {
            question: 'How long does it take to get my new website?',
            answer: 'Most websites are ready in 3-5 business days. You\'ll have a dedicated specialist guiding you through the entire process.'
          },
          {
            question: 'Can I customize my website design?',
            answer: 'Yes, we work with you to customize colors, photos, menus, and content so it perfectly reflects your restaurant\'s brand.'
          }
        ]
      }
    },
    ZERO_COMMISSION_DELIVERY_PAGE: {
      HERO: {
        BADGE: 'Profitable Delivery',
        TITLE: 'Profitable delivery and a',
        TITLE_HIGHLIGHT: 'great guest experience.',
        SUBTITLE: 'Get your customers to order from your app, with top-rated drivers, at a fair price.',
        CTA_DEMO: 'Get a demo',
        CTA_PRICING: 'View Pricing'
      },
      FEATURES: {
        TITLE: 'Delivery that\'s better for you and your guests',
        SUBTITLE: 'Control your delivery experience with quality drivers and transparent pricing.',
        LIST: [
          {
            title: 'Pay a flat rate for delivery',
            description: 'Use third-party drivers at fixed rates favorable for delivery or small drivers, you choose the longer price.',
            details: [
              'Transparent rates with no surprises',
              'Full control over delivery costs'
            ]
          },
          {
            title: 'Get the best drivers, commission free',
            description: 'We only use drivers rated 4.5 stars or higher to deliver your food.',
            details: [
              'Verified and high-quality drivers',
              'Reliable service for your customers'
            ]
          },
          {
            title: 'A direct line to your customers',
            description: 'You can call customers directly. We\'ll cover refunds for any delivery issues.',
            details: [
              'Direct communication with customers',
              'Full support for delivery issues'
            ]
          }
        ]
      },
      FAQ: {
        TITLE: 'FAQs',
        SUBTITLE: 'Answers to common questions about our zero-commission delivery service.',
        QUESTIONS: [
          {
            question: 'Why would customers order from my app instead of third parties?',
            answer: 'Your app offers a more direct and personalized experience. Customers can earn loyalty points, get exclusive offers, and have direct communication with you. Plus, their favorite orders are saved for easy reordering.'
          },
          {
            question: 'Who pays for delivery, the guest or the restaurant?',
            answer: 'You decide. You can charge customers a delivery fee, absorb the cost as part of your pricing strategy, or use a hybrid model. We give you total flexibility to structure your pricing.'
          },
          {
            question: 'Why would third-party apps go for this?',
            answer: 'We work with a network of independent drivers and delivery services looking for more work. By offering fair rates and consistent volume, we create a win-win situation: you get better service, drivers earn more, and customers receive better experience.'
          }
        ]
      }
    },
    HOW_IT_WORKS_PAGE: {
      HERO: {
        TITLE: 'Your restaurant could be making',
        TITLE_HIGHLIGHT: 'way more online sales.',
        SUBTITLE: 'RAY is the simplest way to rank higher on Google, increase direct orders, and create an exceptional experience for your customers.',
        CTA_DEMO: 'Get a demo',
        VIDEO_CTA: 'Watch video'
      },
      FEATURES: {
        FEATURE_1: {
          NUMBER: '01.',
          TITLE: 'Dominate Google search results',
          DESCRIPTION: 'Outrank your competition with a Google-optimized website. Attract more customers actively searching for restaurants in your area.',
          CTA: 'See how'
        },
        FEATURE_2: {
          NUMBER: '02.',
          TITLE: 'Grow sales with super-easy online ordering',
          DESCRIPTION: 'Customers order more when your ordering system is intuitive and familiar. Less friction means more conversions.',
          CTA: 'See how'
        },
        FEATURE_3: {
          NUMBER: '03.',
          TITLE: 'Build loyalty with your mobile app and rewards',
          DESCRIPTION: 'Your own mobile app increases repeat orders. Create Starbucks-style loyalty that keeps customers coming back.',
          CTA: 'See how'
        },
        FEATURE_4: {
          NUMBER: '04.',
          TITLE: 'Sell more with automated marketing',
          DESCRIPTION: 'Automated email and SMS campaigns that drive revenue. Proven marketing that works while you sleep.',
          CTA: 'See how'
        }
      },
      FAQ: {
        TITLE: 'FAQs',
        QUESTIONS: [
          {
            QUESTION: 'What do I need to get started?',
            ANSWER: 'You just need an active restaurant and the desire to grow your online sales. We handle everything else: website, ordering system, POS integrations, and training your team.'
          },
          {
            QUESTION: 'Do you take over my POS?',
            ANSWER: 'Yes, we integrate with major POS systems like Square, Toast, Clover, and many more. Our technical team handles all the setup so your online orders sync automatically with your kitchen.'
          },
          {
            QUESTION: 'What happens to my current website?',
            ANSWER: 'If you already have a website, we can replace it with a RAY-optimized one or integrate with your existing site. We keep your domain and all your online presence intact during the transition.'
          },
          {
            QUESTION: 'Do you do social media marketing?',
            ANSWER: 'Yes, we offer complete social media management including content creation, scheduled posting, and advertising campaigns on Facebook and Instagram to attract more customers.'
          },
          {
            QUESTION: 'How do you get customers to order directly from me?',
            ANSWER: 'We combine multiple strategies: optimize your Google presence, create your custom mobile app, implement QR codes at your tables, and set up ordering through WhatsApp and social media. Everything directs to your own platform.'
          }
        ]
      },
      TESTIMONIAL: {
        QUOTE: 'I have a lot of friends that have restaurants. I tell them they have to switch to RAY.',
        AUTHOR: 'Fermin Iaguirre',
        POSITION: 'Owner of Sado Addicts',
        IMAGE: '/images/testimonial-fermin.jpg'
      },
      FINAL_CTA: {
        TITLE: 'The simplest way to grow your restaurant online.',
        CTA: 'Get a demo'
      }
    }
  }
} as const

// Type helpers for translations
export type TranslationKeys = typeof COPY.es