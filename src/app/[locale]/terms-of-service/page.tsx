import { Metadata } from 'next'
import { type Locale } from '@/lib/i18n'

interface TermsPageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
  const { locale } = params
  
  return {
    title: 'Terms of Service - RAY',
    description: "RAY's Terms of Service - Learn about the terms and conditions for using our restaurant marketing platform.",
    robots: 'noindex, nofollow',
    alternates: {
      canonical: `https://www.rayapp.io/${locale}/terms-of-service`,
    },
  }
}

export default function TermsOfServicePage({ params }: TermsPageProps) {
  const { locale } = params
  
  const termsContent = locale === 'es' ? (
    <div className="prose prose-lg max-w-none">
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Fecha de última actualización: 1 de septiembre de 2024
      </p>
      
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Los presentes Términos y Condiciones de Uso regulan el acceso y uso de la plataforma www.rayapp.io, www.rayapp.ai y cualquier otro sitio web, aplicación o servicio operado por BotBit S.A.S., CUIT 30-71580329-8, con domicilio en Av. Gral. Mosconi 2581, Ciudad Autónoma de Buenos Aires, Argentina ("RAY" o "nosotros"), incluyendo todos los servicios ofrecidos a través de la plataforma ("Servicios").
      </p>
      
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Al acceder, registrarse o utilizar la plataforma, usted ("Usuario" o "usted") declara haber leído, comprendido y aceptado estos Términos y Condiciones ("Términos") y la Política de Privacidad, la cual forma parte integrante del presente documento.
      </p>
      
      <p className="text-ray-darkGray leading-relaxed mb-8">
        RAY se compromete a cumplir con la Ley 25.326 sobre Protección de los Datos Personales, así como con las normativas internacionales aplicables al tratamiento de datos, como el Reglamento General de Protección de Datos (GDPR) de la Unión Europea, en caso de corresponder.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">1. DEFINICIONES</h2>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>1.1.</strong> "Plataforma": el sitio web www.rayapp.io, www.rayapp.ai y cualquier otro sitio web, plataforma o aplicación operada por RAY.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>1.2.</strong> "RAY" o "nosotros": la empresa BotBit S.A.S.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>1.3.</strong> "Cliente": persona o entidad que acepta estos Términos y adquiere los Servicios.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>1.4.</strong> "Servicio de suscripción": el servicio RAY Local SEO & Reputation Management.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>1.5.</strong> "Servicios": incluye el Servicio de suscripción y los servicios profesionales asociados.</p>
      <p className="text-ray-darkGray leading-relaxed mb-6"><strong>1.6.</strong> "Sitios de terceros": cualquier sitio web o servicio externo a RAY.</p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">2. ACEPTACIÓN DE TÉRMINOS</h2>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        La contratación del servicio implica la aceptación plena, expresa e informada de estos Términos por parte del Cliente.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">3. DESCRIPCIÓN DE LOS SERVICIOS</h2>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>3.1.</strong> RAY prestará el Servicio de suscripción y los Servicios profesionales conforme a estos Términos. La implementación puede tardar entre 2 horas y 4 semanas. El Cliente debe colaborar activamente en el proceso.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>3.2.</strong> RAY no es responsable por los términos, contenido ni políticas de privacidad de sitios o software de terceros integrados. El Cliente acepta sus términos (Google, Facebook, Yelp, etc.).</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>3.3.</strong> El Cliente puede mostrar datos generados por RAY en su sitio web, pero no debe modificarlos ni utilizarlos con otros fines sin autorización escrita.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>3.4.</strong> El Cliente se obliga a cumplir los términos de los Sitios de terceros y se abstendrá de usarlos para bloquear reseñas o eludir sus políticas. RAY podrá suspender la cuenta tras 30 días de incumplimiento.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>3.5.</strong> El Cliente es responsable del cumplimiento de la Resolución 243/2019 ("No Llame") y de obtener consentimiento para el envío de SMS y correos electrónicos.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>3.6.</strong> El Cliente debe salvaguardar sus credenciales y desactivarlas ante posibles accesos no autorizados.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>3.7.</strong> RAY podrá limitar el acceso o aplicar tarifas adicionales si el Cliente excede el uso razonable según la Política de Uso Justo.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>3.8.</strong> El Cliente se compromete a usar los Servicios con fines lícitos. Será responsable de cualquier uso indebido, incluyendo el de terceros con acceso a los Servicios.</p>
      <p className="text-ray-darkGray leading-relaxed mb-6"><strong>3.9.</strong> El Cliente es único responsable del contenido que publique, y RAY no se hace responsable por el uso o difusión de dicha información por parte del Cliente o sus usuarios.</p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">4. TARIFAS Y PAGO</h2>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>4.1.</strong> Las tarifas son prepagas, no reembolsables. No incluyen impuestos, que serán a cargo del Cliente. Las actualizaciones de tarifas entrarán en vigor en el siguiente período con notificación previa.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>4.2.</strong> En caso de mora, RAY podrá aplicar intereses punitorios, suspender o rescindir los Servicios sin derecho a indemnización.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>4.3.</strong> Salvo indicación contraria, los Servicios se renovarán automáticamente. La no renovación debe notificarse con 30 días de antelación.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>4.4.</strong> Las facturas se enviarán por correo electrónico.</p>
      <p className="text-ray-darkGray leading-relaxed mb-6"><strong>4.5.</strong> La cancelación debe solicitarse por correo electrónico y se considerará efectiva una vez saldadas todas las tarifas pendientes.</p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">5. DERECHOS DE PROPIEDAD</h2>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>5.1.</strong> RAY conserva todos los derechos de propiedad intelectual sobre la Plataforma y Servicios. El Cliente recibe una licencia limitada, revocable y no transferible.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>5.2.</strong> El Cliente no puede copiar, modificar ni revender los Servicios sin autorización escrita.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>5.3.</strong> Los Datos del Cliente son propiedad del Cliente, quien autoriza a RAY a usarlos para la prestación del Servicio. Los Datos de RAY y los de terceros deben ser utilizados conforme a estos Términos.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>5.4.</strong> El tratamiento de datos personales se rige por la Política de Privacidad.</p>
      <p className="text-ray-darkGray leading-relaxed mb-6"><strong>5.5.</strong> Ambas partes se comprometen a mantener la confidencialidad de la información.</p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">6. GARANTÍAS, LIMITACIONES E INDEMNIDAD</h2>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>6.1.</strong> RAY garantiza la prestación de los Servicios conforme a estos Términos.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>6.2.</strong> El Cliente garantiza contar con los consentimientos necesarios para utilizar los Servicios.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>6.3.</strong> Salvo lo previsto en 6.1, se excluyen todas las demás garantías.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>6.4.</strong> La responsabilidad de RAY se limita al total pagado por el Cliente en los 12 meses previos al incidente. No responde por daños indirectos, pérdida de datos o lucro cesante.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>6.5.</strong> El Cliente deberá indemnizar a RAY por reclamos derivados del uso indebido de los Servicios.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>6.6.</strong> RAY se compromete a defender al Cliente ante reclamos por infracción de propiedad intelectual, sujeto a ciertas condiciones.</p>
      <p className="text-ray-darkGray leading-relaxed mb-6"><strong>6.7.</strong> Las obligaciones de indemnización están sujetas a notificación previa, control de defensa y cooperación.</p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">7. PLAZO Y TERMINACIÓN</h2>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>7.1.</strong> Los Términos se mantendrán vigentes mientras exista un formulario de pedido activo.</p>
      <p className="text-ray-darkGray leading-relaxed mb-6"><strong>7.2.</strong> Cualquiera de las partes podrá rescindir el contrato ante un incumplimiento no subsanado dentro de los 30 días.</p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">8. PAGOS</h2>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        RAY utiliza procesadores de pago de terceros. El Cliente acepta sus términos y condiciones.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">9. VARIOS</h2>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>9.1.</strong> Las partes actúan como contratistas independientes.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>9.2.</strong> RAY puede subcontratar, siendo responsable por el cumplimiento de sus subcontratistas.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>9.3.</strong> No se considerará incumplimiento el retraso por causas de fuerza mayor.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>9.4.</strong> Las partes no podrán ceder sus derechos sin autorización previa, salvo lo previsto en estos Términos.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>9.5.</strong> El Cliente reembolsará los gastos de viaje razonables vinculados con Servicios Profesionales.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>9.6.</strong> Las notificaciones se enviarán a los datos de contacto proporcionados por las partes. El correo electrónico del Cliente constituye su domicilio electrónico constituido.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>9.7.</strong> Ambas partes se comprometen a cumplir con la normativa vigente aplicable.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>9.8.</strong> Estos Términos se rigen por las leyes de la República Argentina. Toda controversia será sometida a los Tribunales Ordinarios de la Ciudad Autónoma de Buenos Aires.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>9.9.</strong> Estos Términos constituyen el acuerdo completo. Las modificaciones se notificarán y entrarán en vigor a los 10 días. El uso continuado implica aceptación.</p>
      <p className="text-ray-darkGray leading-relaxed mb-6"><strong>9.10.</strong> Si alguna disposición es inválida, las restantes seguirán vigentes.</p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">10. PRUEBAS GRATUITAS</h2>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        RAY podrá ofrecer pruebas gratuitas que estarán sujetas a términos específicos. Durante estos períodos, no aplicarán garantías ni obligaciones de indemnización.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">11. ALCANCE INTERNACIONAL</h2>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        El uso de la Plataforma fuera de Argentina es bajo responsabilidad exclusiva del Cliente, quien debe garantizar el cumplimiento de las leyes locales que resulten aplicables.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">12. RESOLUCIÓN ALTERNATIVA DE CONFLICTOS</h2>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Siempre las partes procurarán resolver cualquier controversia mediante mediación ante el Centro de Mediación del Ministerio de Justicia de la Nación.
      </p>
    </div>
  ) : (
    <div className="prose prose-lg max-w-none">
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Last updated: May 27th, 2025
      </p>
      
      <p className="text-ray-darkGray leading-relaxed mb-6">
        These Terms and Conditions of Use govern access to and use of the www.rayapp.io, www.rayapp.ai and any other website, application, or service operated by BotBit S.A.S., CUIT 30-71580329-8, with its registered office at Av. Gral. Mosconi 2581, Buenos Aires City, Argentina ("RAY" or "we"), including all services offered through the platform ("Services").
      </p>
      
      <p className="text-ray-darkGray leading-relaxed mb-6">
        By accessing, registering, or using the platform, you ("User" or "you") declare that you have read, understood, and accepted these Terms and Conditions ("Terms") and the Privacy Policy, which is an integral part of this document.
      </p>
      
      <p className="text-ray-darkGray leading-relaxed mb-8">
        RAY is committed to complying with Argentine Law 25.326 on Personal Data Protection, as well as international regulations applicable to data processing, such as the European Union's General Data Protection Regulation (GDPR), where applicable.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">1. DEFINITIONS</h2>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>1.1.</strong> "Platform": the website www.rayapp.io, www.rayapp.ai and any other website, platform, or application operated by RAY.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>1.2.</strong> "RAY" or "we": the company BotBit S.A.S.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>1.3.</strong> "Client": any person or entity that accepts these Terms and acquires the Services.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>1.4.</strong> "Subscription Service": the RAY Local SEO & Reputation Management service.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>1.5.</strong> "Services": includes the Subscription Service and related professional services.</p>
      <p className="text-ray-darkGray leading-relaxed mb-6"><strong>1.6.</strong> "Third-party Sites": any website or external service not operated by RAY.</p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">2. ACCEPTANCE OF TERMS</h2>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        By contracting the service, the Client fully, expressly, and knowingly accepts these Terms.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">3. DESCRIPTION OF SERVICES</h2>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>3.1.</strong> RAY will provide the Subscription Service and related professional services in accordance with these Terms. Implementation may take between 2 hours and 4 weeks. The Client must actively participate in the process.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>3.2.</strong> RAY is not responsible for the terms, content, or privacy policies of integrated third-party sites or software. The Client accepts their terms (e.g., Google, Facebook, Yelp).</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>3.3.</strong> The Client may display data generated by RAY on their website but must not modify or use them for other purposes without prior written authorization.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>3.4.</strong> The Client agrees to comply with the terms of review platforms and refrain from using them to block reviews or circumvent policies. RAY may suspend the account after 30 days of noncompliance.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>3.5.</strong> The Client is responsible for complying with Resolution 243/2019 ("Do Not Call Registry") and obtaining consent for sending SMS or emails.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>3.6.</strong> The Client must safeguard their credentials and deactivate them if unauthorized access is suspected.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>3.7.</strong> RAY may limit access or apply additional fees if the Client exceeds reasonable usage according to the Fair Use Policy.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>3.8.</strong> The Client agrees to use the Services lawfully. They are responsible for any misuse, including by third parties with access to the Services.</p>
      <p className="text-ray-darkGray leading-relaxed mb-6"><strong>3.9.</strong> The Client is solely responsible for any content they publish. RAY is not liable for the use or dissemination of such content by the Client or their users.</p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">4. FEES AND PAYMENT</h2>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>4.1.</strong> Fees are prepaid and non-refundable. Taxes are not included and are the Client's responsibility. Fee updates will take effect in the next billing cycle with prior notice.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>4.2.</strong> In case of default, RAY may apply late fees, suspend, or terminate the Services without indemnity.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>4.3.</strong> Unless otherwise indicated, Services will automatically renew. Clients must notify cancellation at least 30 days in advance.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>4.4.</strong> Invoices will be sent electronically.</p>
      <p className="text-ray-darkGray leading-relaxed mb-6"><strong>4.5.</strong> Cancellation must be requested by email and becomes effective once all outstanding fees are paid.</p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">5. INTELLECTUAL PROPERTY RIGHTS</h2>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>5.1.</strong> RAY retains all intellectual property rights over the Platform and Services. The Client receives a limited, revocable, non-transferable license.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>5.2.</strong> The Client may not copy, modify, or resell the Services without written authorization.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>5.3.</strong> Client Data belongs to the Client, who authorizes RAY to use it as needed for service delivery. RAY and third-party data must be used under these Terms.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>5.4.</strong> Data processing is governed by the Privacy Policy.</p>
      <p className="text-ray-darkGray leading-relaxed mb-6"><strong>5.5.</strong> Both parties agree to maintain the confidentiality of information.</p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">6. WARRANTIES, LIMITATIONS, AND INDEMNITY</h2>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>6.1.</strong> RAY guarantees service provision as described in these Terms.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>6.2.</strong> The Client guarantees they have all necessary consents for service use.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>6.3.</strong> Except as stated in 6.1, all other warranties are excluded.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>6.4.</strong> RAY's liability is limited to the amount paid by the Client in the 12 months prior to the incident. RAY is not liable for indirect damages, data loss, or lost profits.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>6.5.</strong> The Client must indemnify RAY against any claims arising from improper use of the Services.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>6.6.</strong> RAY agrees to defend the Client against third-party IP claims subject to conditions.</p>
      <p className="text-ray-darkGray leading-relaxed mb-6"><strong>6.7.</strong> Indemnity obligations are subject to prompt notice, defense control, and cooperation.</p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">7. TERM AND TERMINATION</h2>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>7.1.</strong> These Terms remain in effect while an order form referencing them is active.</p>
      <p className="text-ray-darkGray leading-relaxed mb-6"><strong>7.2.</strong> Either party may terminate the agreement for material breach not remedied within 30 days.</p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">8. PAYMENTS</h2>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        RAY uses third-party payment processors (e.g., Increase). The Client agrees to their terms.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">9. MISCELLANEOUS</h2>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>9.1.</strong> The parties are independent contractors.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>9.2.</strong> RAY may subcontract and is responsible for subcontractors' compliance.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>9.3.</strong> Delay due to force majeure does not constitute breach.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>9.4.</strong> Neither party may assign rights without the other's prior consent, unless provided otherwise herein.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>9.5.</strong> The Client will reimburse reasonable travel expenses related to Professional Services.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>9.6.</strong> Notices will be sent to the contact details provided. The Client's registered email is their official electronic address.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>9.7.</strong> Both parties agree to comply with applicable laws.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>9.8.</strong> These Terms are governed by Argentine law. Any dispute will be submitted to the Ordinary Courts of Buenos Aires City.</p>
      <p className="text-ray-darkGray leading-relaxed mb-2"><strong>9.9.</strong> These Terms constitute the entire agreement. Modifications will be notified and effective within 10 days. Continued use constitutes acceptance.</p>
      <p className="text-ray-darkGray leading-relaxed mb-6"><strong>9.10.</strong> If any provision is invalid, the remaining provisions will remain in force.</p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">10. FREE TRIALS</h2>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        RAY may offer free trials subject to specific terms. During such periods, warranties and indemnities do not apply.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">11. INTERNATIONAL USE</h2>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Use of the Platform outside Argentina is the Client's sole responsibility. Compliance with local laws is required.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">12. ALTERNATIVE DISPUTE RESOLUTION</h2>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Before taking legal action, the parties will attempt to resolve any dispute through mediation before the Mediation Center of Argentina's Ministry of Justice.
      </p>
    </div>
  )
  
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-ray-dark-900 mb-8">
            {locale === 'es' ? 'Términos y Condiciones de Uso de la Plataforma RAY' : 'Terms and Conditions of Use of the RAY Platform'}
          </h1>
          {termsContent}
        </div>
      </div>
    </div>
  )
}
