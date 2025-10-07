import React from 'react'
import { Helmet } from 'react-helmet-async'

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - RAY</title>
        <meta name="description" content="RAY's Privacy Policy - Learn how we collect, use, and protect your personal information." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://rayapp.io/privacy-policy" />
      </Helmet>
      
      <div className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-ray-dark-900 mb-8">
              RAY Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none text-ray-dark-700">
              <p className="text-ray-darkGray mb-6">
                <strong>Last Updated: May 27th, 2025</strong>
              </p>
              
              <p className="mb-6 leading-relaxed">
                This Privacy Policy ("Privacy Policy") explains how BotBit, Inc. (through its brand "RAY," "we," "our," or "us") collects, uses, shares, and protects the personal information of individuals who interact with our website rayapp.io ("Site"), mobile application ("App"), or platform ("Platform") (collectively referred to as the "Service"), and the transactional information of individuals who make purchases from merchants who have subscribed to our Platform ("Rewards Providers").
              </p>
              
              <p className="mb-6 leading-relaxed">
                Even if you do not register as a RAY customer, we may still collect, process, use, store, and share your transactional data in accordance with this Privacy Policy. By using the Service, you agree to the policies and practices described in this Privacy Policy and our Terms of Use. If you do not agree with our policies and practices, you may choose not to use the Service.
              </p>
              
              <p className="mb-8 leading-relaxed">
                RAY may offer certain products and/or services for a fee or for evaluation purposes. In such situations, additional terms or requirements may apply to our collection and use of personal information. If there is any conflict between such additional terms and this Privacy Policy, the additional terms shall control.
              </p>
              
              <h2 className="text-2xl font-bold text-ray-dark-900 mb-4 mt-8">
                1. Data Controller Information
              </h2>
              <p className="mb-6 leading-relaxed">
                The data controller for your personal information is BotBit, Inc. For any inquiries regarding this Privacy Policy or our data practices, you can contact us at:{' '}
                <a href="mailto:support@rayapp.io" className="text-ray-blue hover:underline">
                  support@rayapp.io
                </a>
              </p>
              <p className="mb-6 leading-relaxed">
                Depending on your location, specific data protection laws may apply, and we will do our best effort to comply with all relevant regulations.
              </p>
              
              <h2 className="text-2xl font-bold text-ray-dark-900 mb-4 mt-8">
                2. Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-ray-dark-900 mb-3">
                2.1 Information You Provide:
              </h3>
              <p className="mb-4 leading-relaxed">
                We collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Name, phone number, email address, photograph, and date of birth</li>
                <li>Location information, economic and transactional data (e.g., payment or credit card details)</li>
                <li>Third-party service login credentials (e.g., social media accounts)</li>
                <li>Other information based on your registration and privacy settings</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-ray-dark-900 mb-3">
                2.2 Information Collected Automatically:
              </h3>
              <p className="mb-4 leading-relaxed">
                We automatically collect transactional data when you interact with our Rewards Providers, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Details of your receipt (e.g., subtotal, total, and tip amount)</li>
                <li>Payment card information (e.g., the last four digits of your card number)</li>
                <li>Invoice and order ticket data (e.g., items purchased and their prices)</li>
              </ul>
              <p className="mb-4 leading-relaxed">
                We also use cookies, web beacons, pixel tags, and other tracking technologies to collect general user data, such as:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Your IP address, browser type, and usage patterns on the Service</li>
                <li>Aggregated data that does not personally identify you</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-ray-dark-900 mb-3">
                2.3 Combination of Information:
              </h3>
              <p className="mb-6 leading-relaxed">
                We may combine information we receive from or about you with information from other online and offline sources, including third-party services you integrate into your RAY experience (e.g., social media accounts).
              </p>
              
              <h2 className="text-2xl font-bold text-ray-dark-900 mb-4 mt-8">
                3. Purposes for Processing Your Data
              </h2>
              <p className="mb-4 leading-relaxed">
                We process your personal data for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Providing the Service:</strong> To offer you access to the features of our Platform and facilitate transactions with Rewards Providers.</li>
                <li><strong>Personalization:</strong> To personalize your experience, including offering relevant rewards and promotions.</li>
                <li><strong>Analytics and Improvement:</strong> To analyze usage patterns, improve our Service, and conduct research and benchmarking.</li>
                <li><strong>Communication:</strong> To respond to inquiries, send you newsletters, and inform you about updates, promotions, or events.</li>
                <li><strong>Compliance:</strong> To comply with legal obligations, respond to government requests, and enforce our policies.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-ray-dark-900 mb-4 mt-8">
                4. User Rights
              </h2>
              <p className="mb-4 leading-relaxed">
                As a user, you have specific rights regarding your personal data under applicable laws, including the General Data Protection Regulation (GDPR) where applicable. These rights include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Access:</strong> Request access to the personal data we hold about you.</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data.</li>
                <li><strong>Erasure:</strong> Request the deletion of your personal data, subject to legal exceptions.</li>
                <li><strong>Restriction:</strong> Limit the processing of your data to specific purposes.</li>
                <li><strong>Portability:</strong> Receive your data in a structured, commonly used format and transfer it to another data controller.</li>
                <li><strong>Objection:</strong> Object to the processing of your data in certain circumstances.</li>
              </ul>
              <p className="mb-6 leading-relaxed">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:support@rayapp.io" className="text-ray-blue hover:underline">
                  support@rayapp.io
                </a>{' '}
                with the subject line "GDPR Request.\" We will respond to your request within 30 days, with a possible extension to 90 days if justified.
              </p>
              
              <h2 className="text-2xl font-bold text-ray-dark-900 mb-4 mt-8">
                5. Third-Party Sharing
              </h2>
              <p className="mb-4 leading-relaxed">
                We may share your personal data with third parties, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Service Providers:</strong> Third-party companies that assist us in providing the Service (e.g., hosting, email, customer interaction, payment processing). These providers are authorized to use your data only as necessary to provide their services.</li>
                <li><strong>Business Partners:</strong> Partners with whom we collaborate to offer additional services or promotions.</li>
                <li><strong>Authorities:</strong> Legal authorities, if required by law, to comply with legal processes or protect our rights and property.</li>
              </ul>
              <p className="mb-6 leading-relaxed">
                <strong>International Data Transfers:</strong> If we transfer your personal data to countries with different data protection standards, we will ensure adequate safeguards, such as Standard Contractual Clauses or equivalent legal measures.
              </p>
              
              <h2 className="text-2xl font-bold text-ray-dark-900 mb-4 mt-8">
                6. Cookies and Tracking Technologies
              </h2>
              <p className="mb-4 leading-relaxed">
                Our Service uses cookies and similar technologies to improve user experience, track site usage, and provide personalized content. You can manage your cookie preferences through your browser settings:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Internet Explorer:</strong> Tools &gt; Internet Options &gt; Privacy &gt; Advanced Settings</li>
                <li><strong>Firefox:</strong> Tools &gt; Options &gt; Privacy &gt; Cookies</li>
                <li><strong>Chrome:</strong> Settings &gt; Privacy &gt; Content Settings</li>
                <li><strong>Safari:</strong> Preferences &gt; Privacy</li>
              </ul>
              <p className="mb-6 leading-relaxed">
                Blocking or rejecting cookies may impact the functionality of our Service.
              </p>
              
              <h2 className="text-2xl font-bold text-ray-dark-900 mb-4 mt-8">
                7. Data Security
              </h2>
              <p className="mb-4 leading-relaxed">
                We implement appropriate technical and organizational measures to ensure the security of your personal data, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Encryption:</strong> Using SSL technology to secure data transmissions.</li>
                <li><strong>Access Control:</strong> Limiting access to personal data to authorized employees and contractors who need it to perform their job functions.</li>
                <li><strong>Third-Party Compliance:</strong> Ensuring that service providers and partners adhere to similar security standards.</li>
              </ul>
              <p className="mb-6 leading-relaxed">
                Despite our efforts, no method of data transmission or storage is entirely secure. We cannot guarantee absolute security but maintain robust security protocols to respond to any incidents.
              </p>
              
              <h2 className="text-2xl font-bold text-ray-dark-900 mb-4 mt-8">
                8. Minors' Privacy
              </h2>
              <p className="mb-6 leading-relaxed">
                Our Service is not intended for individuals under 18 years of age. We do not knowingly collect personal data from minors. If you are under 18, please do not use our Service or provide any personal information. Parents or legal guardians should supervise their children's internet activities.
              </p>
              
              <h2 className="text-2xl font-bold text-ray-dark-900 mb-4 mt-8">
                9. Changes to This Privacy Policy
              </h2>
              <p className="mb-4 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. If we make significant changes, we will notify you via email or through a notice on our Platform. Please review this Privacy Policy periodically.
              </p>
              <p className="mb-6 leading-relaxed">
                The last update to this Privacy Policy was on May 27th, 2025. Your continued use of the Service after any changes indicates your acceptance of the updated Privacy Policy.
              </p>
              
              <h2 className="text-2xl font-bold text-ray-dark-900 mb-4 mt-8">
                10. Contact Us
              </h2>
              <p className="mb-4 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:{' '}
                <a href="mailto:support@rayapp.io" className="text-ray-blue hover:underline">
                  support@rayapp.io
                </a>
              </p>
              <p className="leading-relaxed">
                We are committed to protecting your privacy and addressing any concerns you may have.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy