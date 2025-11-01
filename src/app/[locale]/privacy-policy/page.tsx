import { Metadata } from 'next'
import { type Locale } from '@/lib/i18n'

interface PrivacyPageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { locale } = params
  
  return {
    title: 'Privacy Policy - RAY',
    description: "RAY's Privacy Policy - Learn how we collect, use, and protect your personal information.",
    robots: 'noindex, nofollow',
    alternates: {
      canonical: `https://www.rayapp.io/${locale}/privacy-policy`,
    },
  }
}

export default function PrivacyPolicyPage({ params }: PrivacyPageProps) {
  const { locale } = params
  
  const privacyContent = locale === 'es' ? (
    <div className="prose prose-lg max-w-none">
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Última actualización: 27 de mayo de 2025
      </p>
      
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Esta Política de Privacidad ("Política de Privacidad") explica cómo BotBit, Inc. (bajo su marca "RAY", "nosotros" o "nuestro") recopila, utiliza, comparte y protege la información personal de las personas que interactúan con nuestro sitio web rayapp.io ("Sitio"), aplicación móvil ("App") o plataforma ("Plataforma") (denominados en conjunto como el "Servicio"), así como la información transaccional de individuos que realicen compras en comercios suscritos a nuestra Plataforma ("Comercios Afiliados").
      </p>
      
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Incluso si usted no se registra como cliente de RAY, es posible que recopilamos, procesamos, utilicemos, almacenemos y compartamos sus datos transaccionales de acuerdo con esta Política de Privacidad. Al utilizar el Servicio, usted acepta las políticas y prácticas descritas en esta Política de Privacidad y en nuestros Términos de Uso. Si no está de acuerdo con nuestras políticas y prácticas, le solicitamos que no utilice el Servicio.
      </p>
      
      <p className="text-ray-darkGray leading-relaxed mb-8">
        RAY puede ofrecer ciertos productos y/o servicios gratuitos. En tales casos, pueden aplicarse términos o requisitos adicionales respecto de la recopilación y uso de información personal. En caso de conflicto entre estos términos adicionales y la presente Política de Privacidad, prevalecerán los términos adicionales.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">1. Responsable del Tratamiento de Datos</h2>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        El responsable del tratamiento de sus datos personales es BotBit, Inc. Para cualquier consulta relacionada con esta Política de Privacidad o nuestras prácticas de protección de datos, puede escribirnos a: <a href="mailto:support@rayapp.io" className="text-ray-blue hover:underline">support@rayapp.io</a>
      </p>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Dependiendo de su ubicación, pueden aplicarse leyes específicas de protección de datos, y nos comprometemos a cumplir, en la medida de lo posible, con toda normativa vigente.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">2. Información que Recopilamos</h2>
      <h3 className="text-xl font-semibold text-ray-dark-900 mt-6 mb-3">2.1 Información proporcionada por usted:</h3>
      <p className="text-ray-darkGray leading-relaxed mb-4">
        Recopilamos la información personal que usted nos proporciona voluntariamente, incluyendo:
      </p>
      <ul className="list-disc list-inside text-ray-darkGray leading-relaxed mb-4 space-y-2">
        <li>Nombre, número de teléfono, dirección de correo electrónico, fotografía y fecha de nacimiento</li>
        <li>Información de ubicación, datos económicos y transaccionales (por ejemplo, detalles de pago o tarjeta de crédito)</li>
        <li>Credenciales de inicio de sesión de servicios de terceros (por ejemplo, redes sociales)</li>
        <li>Otra información derivada de su registro y configuración de privacidad</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-ray-dark-900 mt-6 mb-3">2.2 Información recopilada automáticamente:</h3>
      <p className="text-ray-darkGray leading-relaxed mb-4">
        Recopilamos datos transaccionales automáticamente cuando interactúa con nuestros Comercios Afiliados, incluyendo:
      </p>
      <ul className="list-disc list-inside text-ray-darkGray leading-relaxed mb-4 space-y-2">
        <li>Detalles del recibo (subtotal, total, propina, etc.)</li>
        <li>Información de la tarjeta de pago (por ejemplo, últimos cuatro dígitos)</li>
        <li>Datos de facturas y pedidos (productos adquiridos y sus precios)</li>
      </ul>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        También utilizamos cookies, balizas web, píxeles de seguimiento y otras tecnologías para recopilar información general del usuario, como:
      </p>
      <ul className="list-disc list-inside text-ray-darkGray leading-relaxed mb-6 space-y-2">
        <li>Dirección IP, tipo de navegador, patrones de uso del Servicio</li>
        <li>Datos agregados que no lo identifican personalmente</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-ray-dark-900 mt-6 mb-3">2.3 Combinación de información:</h3>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Podemos combinar la información que recopilamos sobre usted con datos obtenidos de otras fuentes online y offline, incluyendo servicios de terceros que haya integrado con RAY (por ejemplo, cuentas de redes sociales).
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">3. Finalidades del Tratamiento de Datos</h2>
      <p className="text-ray-darkGray leading-relaxed mb-4">
        Procesamos sus datos personales para los siguientes fines:
      </p>
      <ul className="list-disc list-inside text-ray-darkGray leading-relaxed mb-2 space-y-2">
        <li><strong>Prestación del Servicio:</strong> permitir el uso de la Plataforma y facilitar las transacciones con Comercios Afiliados</li>
        <li><strong>Personalización:</strong> adaptar su experiencia, incluyendo promociones y recompensas relevantes</li>
        <li><strong>Análisis y mejora:</strong> analizar patrones de uso, mejorar el Servicio y realizar estudios e investigaciones</li>
        <li><strong>Comunicación:</strong> responder consultas, enviar boletines e informar sobre actualizaciones, promociones o eventos</li>
        <li><strong>Cumplimiento legal:</strong> cumplir obligaciones legales, responder a autoridades y hacer valer nuestras políticas</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">4. Derechos del Usuario</h2>
      <p className="text-ray-darkGray leading-relaxed mb-4">
        Usted tiene ciertos derechos en relación con sus datos personales, conforme a la normativa aplicable, incluyendo el Reglamento General de Protección de Datos (GDPR), cuando corresponda. Estos derechos incluyen:
      </p>
      <ul className="list-disc list-inside text-ray-darkGray leading-relaxed mb-4 space-y-2">
        <li><strong>Acceso:</strong> solicitar acceso a los datos personales que conservamos</li>
        <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos</li>
        <li><strong>Supresión:</strong> solicitar la eliminación de sus datos, con excepciones legales</li>
        <li><strong>Limitación:</strong> restringir el tratamiento de sus datos a ciertas finalidades</li>
        <li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado y transferirlos a otro responsable</li>
        <li><strong>Oposición:</strong> oponerse al tratamiento en determinadas circunstancias</li>
      </ul>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Para ejercer estos derechos, contáctenos a <a href="mailto:support@rayapp.io" className="text-ray-blue hover:underline">support@rayapp.io</a> con el asunto "Solicitud GDPR". Responderemos su solicitud dentro de los 30 días, con posibilidad de prórroga hasta 90 días si estuviera justificado.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">5. Compartición con Terceros</h2>
      <p className="text-ray-darkGray leading-relaxed mb-4">
        Podemos compartir sus datos personales con:
      </p>
      <ul className="list-disc list-inside text-ray-darkGray leading-relaxed mb-2 space-y-2">
        <li><strong>Proveedores de servicios:</strong> terceros que nos asisten en la prestación del Servicio (hosting, emails, atención al cliente, pagos, etc.). Estos sólo pueden usar los datos para prestar sus servicios.</li>
        <li><strong>Socios comerciales:</strong> empresas con las que colaboramos para ofrecer servicios adicionales o promociones conjuntas</li>
        <li><strong>Autoridades:</strong> entidades públicas cuando sea legalmente requerido o para proteger nuestros derechos o propiedad</li>
        <li><strong>Transferencias internacionales:</strong> si transferimos datos a países con distinta normativa de protección, aplicaremos garantías como cláusulas contractuales tipo u otros mecanismos legales válidos</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">6. Cookies y Tecnologías de Seguimiento</h2>
      <p className="text-ray-darkGray leading-relaxed mb-4">
        Utilizamos cookies y tecnologías similares para mejorar la experiencia del usuario, analizar el uso del sitio y ofrecer contenido personalizado. Puede gestionar sus preferencias de cookies desde la configuración de su navegador:
      </p>
      <ul className="list-disc list-inside text-ray-darkGray leading-relaxed mb-4 space-y-2">
        <li><strong>Internet Explorer:</strong> Herramientas &gt; Opciones de Internet &gt; Privacidad &gt; Configuración avanzada</li>
        <li><strong>Firefox:</strong> Herramientas &gt; Opciones &gt; Privacidad &gt; Cookies</li>
        <li><strong>Chrome:</strong> Configuración &gt; Privacidad &gt; Configuración de contenido</li>
        <li><strong>Safari:</strong> Preferencias &gt; Privacidad</li>
      </ul>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        El bloqueo de cookies puede afectar el funcionamiento del Servicio.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">7. Seguridad de los Datos</h2>
      <p className="text-ray-darkGray leading-relaxed mb-4">
        Implementamos medidas técnicas y organizativas adecuadas para proteger sus datos personales, incluyendo:
      </p>
      <ul className="list-disc list-inside text-ray-darkGray leading-relaxed mb-4 space-y-2">
        <li><strong>Cifrado:</strong> uso de tecnología SSL para proteger las transmisiones</li>
        <li><strong>Control de acceso:</strong> acceso limitado a empleados y contratistas autorizados</li>
        <li><strong>Cumplimiento de terceros:</strong> verificación de que nuestros socios cumplan estándares similares de seguridad</li>
      </ul>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        A pesar de nuestros esfuerzos, ningún sistema es 100% seguro. Mantenemos protocolos robustos para mitigar incidentes.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">8. Privacidad de Menores</h2>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        El Servicio no está destinado a menores de 18 años. No recopilamos intencionadamente datos de menores. Si usted es menor de edad, no utilice el Servicio ni proporcione datos personales. Los padres o tutores deben supervisar la actividad en línea de los menores.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">9. Cambios en Esta Política de Privacidad</h2>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Podemos actualizar esta Política de Privacidad periódicamente. Si realizamos cambios relevantes, se lo notificaremos por correo electrónico o mediante un aviso en la Plataforma. Le sugerimos revisar con regularidad.
      </p>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Su uso continuado del Servicio después de los cambios constituye aceptación de la política actualizada.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">10. Contacto</h2>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Si tiene preguntas o inquietudes sobre esta Política de Privacidad o nuestras prácticas de datos, puede contactarnos a: <a href="mailto:support@rayapp.io" className="text-ray-blue hover:underline">support@rayapp.io</a>
      </p>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Estamos comprometidos con la protección de su privacidad y atenderemos cualquier inquietud que pueda tener.
      </p>
    </div>
  ) : (
    <div className="prose prose-lg max-w-none">
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Last Updated: May 27th, 2025.
      </p>
      
      <p className="text-ray-darkGray leading-relaxed mb-6">
        This Privacy Policy ("Privacy Policy") explains how BotBit, Inc. (through its brand "RAY," "we," "our," or "us") collects, uses, shares, and protects the personal information of individuals who interact with our website rayapp.io ("Site"), mobile application ("App"), or platform ("Platform") (collectively referred to as the "Service"), and the transactional information of individuals who make purchases from merchants who have subscribed to our Platform ("Rewards Providers").
      </p>
      
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Even if you do not register as a RAY customer, we may still collect, process, use, store, and share your transactional data in accordance with this Privacy Policy. By using the Service, you agree to the policies and practices described in this Privacy Policy and our Terms of Use. If you do not agree with our policies and practices, you may choose not to use the Service.
      </p>
      
      <p className="text-ray-darkGray leading-relaxed mb-8">
        RAY may offer certain products and/or services for a fee or for evaluation purposes. In such situations, additional terms or requirements may apply to our collection and use of personal information. If there is any conflict between such additional terms and this Privacy Policy, the additional terms shall control.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">1. Data Controller Information</h2>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        The data controller for your personal information is BotBit, Inc. For any inquiries regarding this Privacy Policy or our data practices, you can contact us at: <a href="mailto:support@rayapp.io" className="text-ray-blue hover:underline">support@rayapp.io</a>
      </p>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Depending on your location, specific data protection laws may apply, and we will do our best effort to comply with all relevant regulations.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">2. Information We Collect</h2>
      <h3 className="text-xl font-semibold text-ray-dark-900 mt-6 mb-3">2.1 Information You Provide:</h3>
      <p className="text-ray-darkGray leading-relaxed mb-4">
        We collect personal information that you voluntarily provide to us, including:
      </p>
      <ul className="list-disc list-inside text-ray-darkGray leading-relaxed mb-4 space-y-2">
        <li>Name, phone number, email address, photograph, and date of birth</li>
        <li>Location information, economic and transactional data (e.g., payment or credit card details)</li>
        <li>Third-party service login credentials (e.g., social media accounts)</li>
        <li>Other information based on your registration and privacy settings</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-ray-dark-900 mt-6 mb-3">2.2 Information Collected Automatically:</h3>
      <p className="text-ray-darkGray leading-relaxed mb-4">
        We automatically collect transactional data when you interact with our Rewards Providers, including:
      </p>
      <ul className="list-disc list-inside text-ray-darkGray leading-relaxed mb-4 space-y-2">
        <li>Details of your receipt (e.g., subtotal, total, and tip amount)</li>
        <li>Payment card information (e.g., the last four digits of your card number)</li>
        <li>Invoice and order ticket data (e.g., items purchased and their prices)</li>
      </ul>
      <p className="text-ray-darkGray leading-relaxed mb-4">
        We also use cookies, web beacons, pixel tags, and other tracking technologies to collect general user data, such as:
      </p>
      <ul className="list-disc list-inside text-ray-darkGray leading-relaxed mb-6 space-y-2">
        <li>Your IP address, browser type, and usage patterns on the Service</li>
        <li>Aggregated data that does not personally identify you</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-ray-dark-900 mt-6 mb-3">2.3 Combination of Information:</h3>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        We may combine information we receive from or about you with information from other online and offline sources, including third-party services you integrate into your RAY experience (e.g., social media accounts).
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">3. Purposes for Processing Your Data</h2>
      <p className="text-ray-darkGray leading-relaxed mb-4">
        We process your personal data for the following purposes:
      </p>
      <ul className="list-disc list-inside text-ray-darkGray leading-relaxed mb-2 space-y-2">
        <li><strong>Providing the Service:</strong> To offer you access to the features of our Platform and facilitate transactions with Rewards Providers.</li>
        <li><strong>Personalization:</strong> To personalize your experience, including offering relevant rewards and promotions.</li>
        <li><strong>Analytics and Improvement:</strong> To analyze usage patterns, improve our Service, and conduct research and benchmarking.</li>
        <li><strong>Communication:</strong> To respond to inquiries, send you newsletters, and inform you about updates, promotions, or events.</li>
        <li><strong>Compliance:</strong> To comply with legal obligations, respond to government requests, and enforce our policies.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">4. User Rights</h2>
      <p className="text-ray-darkGray leading-relaxed mb-4">
        As a user, you have specific rights regarding your personal data under applicable laws, including the General Data Protection Regulation (GDPR) where applicable. These rights include:
      </p>
      <ul className="list-disc list-inside text-ray-darkGray leading-relaxed mb-4 space-y-2">
        <li><strong>Access:</strong> Request access to the personal data we hold about you.</li>
        <li><strong>Rectification:</strong> Correct inaccurate or incomplete data.</li>
        <li><strong>Erasure:</strong> Request the deletion of your personal data, subject to legal exceptions.</li>
        <li><strong>Restriction:</strong> Limit the processing of your data to specific purposes.</li>
        <li><strong>Portability:</strong> Receive your data in a structured, commonly used format and transfer it to another data controller.</li>
        <li><strong>Objection:</strong> Object to the processing of your data in certain circumstances.</li>
      </ul>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        To exercise any of these rights, please contact us at <a href="mailto:support@rayapp.io" className="text-ray-blue hover:underline">support@rayapp.io</a> with the subject line "GDPR Request." We will respond to your request within 30 days, with a possible extension to 90 days if justified.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">5. Third-Party Sharing</h2>
      <p className="text-ray-darkGray leading-relaxed mb-4">
        We may share your personal data with third parties, including:
      </p>
      <ul className="list-disc list-inside text-ray-darkGray leading-relaxed mb-2 space-y-2">
        <li><strong>Service Providers:</strong> Third-party companies that assist us in providing the Service (e.g., hosting, email, customer interaction, payment processing). These providers are authorized to use your data only as necessary to provide their services.</li>
        <li><strong>Business Partners:</strong> Partners with whom we collaborate to offer additional services or promotions.</li>
        <li><strong>Authorities:</strong> Legal authorities, if required by law, to comply with legal processes or protect our rights and property.</li>
        <li><strong>International Data Transfers:</strong> If we transfer your personal data to countries with different data protection standards, we will ensure adequate safeguards, such as Standard Contractual Clauses or equivalent legal measures.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">6. Cookies and Tracking Technologies</h2>
      <p className="text-ray-darkGray leading-relaxed mb-4">
        Our Service uses cookies and similar technologies to improve user experience, track site usage, and provide personalized content. You can manage your cookie preferences through your browser settings:
      </p>
      <ul className="list-disc list-inside text-ray-darkGray leading-relaxed mb-4 space-y-2">
        <li><strong>Internet Explorer:</strong> Tools &gt; Internet Options &gt; Privacy &gt; Advanced Settings</li>
        <li><strong>Firefox:</strong> Tools &gt; Options &gt; Privacy &gt; Cookies</li>
        <li><strong>Chrome:</strong> Settings &gt; Privacy &gt; Content Settings</li>
        <li><strong>Safari:</strong> Preferences &gt; Privacy</li>
      </ul>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Blocking or rejecting cookies may impact the functionality of our Service.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">7. Data Security</h2>
      <p className="text-ray-darkGray leading-relaxed mb-4">
        We implement appropriate technical and organizational measures to ensure the security of your personal data, including:
      </p>
      <ul className="list-disc list-inside text-ray-darkGray leading-relaxed mb-4 space-y-2">
        <li><strong>Encryption:</strong> Using SSL technology to secure data transmissions.</li>
        <li><strong>Access Control:</strong> Limiting access to personal data to authorized employees and contractors who need it to perform their job functions.</li>
        <li><strong>Third-Party Compliance:</strong> Ensuring that service providers and partners adhere to similar security standards.</li>
      </ul>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Despite our efforts, no method of data transmission or storage is entirely secure. We cannot guarantee absolute security but maintain robust security protocols to respond to any incidents.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">8. Minors' Privacy</h2>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Our Service is not intended for individuals under 18 years of age. We do not knowingly collect personal data from minors. If you are under 18, please do not use our Service or provide any personal information. Parents or legal guardians should supervise their children's internet activities.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">9. Changes to This Privacy Policy</h2>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. If we make significant changes, we will notify you via email or through a notice on our Platform. Please review this Privacy Policy periodically.
      </p>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        The last update to this Privacy Policy was on May 27th, 2025. Your continued use of the Service after any changes indicates your acceptance of the updated Privacy Policy.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">10. Contact Us</h2>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at: <a href="mailto:support@rayapp.io" className="text-ray-blue hover:underline">support@rayapp.io</a>
      </p>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        We are committed to protecting your privacy and addressing any concerns you may have.
      </p>
    </div>
  )
  
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-ray-dark-900 mb-8">
            {locale === 'es' ? 'Política de Privacidad de RAY' : 'RAY Privacy Policy'}
          </h1>
          {privacyContent}
        </div>
      </div>
    </div>
  )
}
