"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-medium">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-bold mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Homepage
        </Link>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          
          {/* Header */}
          <div className="bg-slate-950 p-8 md:p-12 text-center border-b border-slate-800">
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sky-400 font-semibold tracking-wide uppercase text-sm">
              Effective Date: July 21, 2026
            </p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-10 text-slate-700 leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">Privacy Policy for Drootle</h2>
              <p>
                At <strong className="text-slate-900">Drootle</strong>, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, submit a lead form, or interact with our services.
              </p>
              <p className="mt-4">
                By using our website or submitting your information, you agree to the practices described in this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">1. Information We Collect</h2>
              <p className="mb-3">We may collect the following information:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-600">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>City and State</li>
                <li>Company Name (if applicable)</li>
                <li>Property preferences or project requirements</li>
                <li>Any information you voluntarily provide through contact forms, WhatsApp, or consultations.</li>
              </ul>
              <p className="mb-3">We may also automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>IP Address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Website usage data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">2. How We Use Your Information</h2>
              <p className="mb-3">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Respond to your enquiries.</li>
                <li>Contact you regarding our services or projects.</li>
                <li>Schedule consultations or meetings.</li>
                <li>Provide our marketing and lead generation services.</li>
                <li>Improve our website and customer experience.</li>
                <li>Send updates, offers, and marketing communications (you can opt out at any time).</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">3. Cookies and Tracking Technologies</h2>
              <p className="mb-3">Our website may use cookies, Meta Pixel, Google Analytics, Google Ads Conversion Tracking, and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-600">
                <li>Measure website traffic.</li>
                <li>Improve user experience.</li>
                <li>Optimize advertising campaigns.</li>
                <li>Understand visitor behavior.</li>
              </ul>
              <p>You can disable cookies through your browser settings.</p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">4. Information Sharing</h2>
              <p className="mb-4">We do <strong>not</strong> sell or rent your personal information.</p>
              <p className="mb-3">We may share information with:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-600">
                <li>Trusted technology providers.</li>
                <li>CRM platforms.</li>
                <li>Marketing automation tools.</li>
                <li>Advertising platforms such as Meta and Google.</li>
                <li>Service providers assisting us in delivering our services.</li>
              </ul>
              <p>These third parties are required to protect your information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">5. Data Security</h2>
              <p>
                We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, misuse, disclosure, or loss.
              </p>
              <p className="mt-4">
                However, no method of internet transmission or electronic storage is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">6. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">7. Your Rights</h2>
              <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-600">
                <li>Request access to your personal information.</li>
                <li>Correct inaccurate information.</li>
                <li>Request deletion of your data.</li>
                <li>Withdraw consent for marketing communications.</li>
                <li>Request information about how your data is processed.</li>
              </ul>
              <p>To exercise these rights, contact us using the details below.</p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">8. Data Retention</h2>
              <p>
                We retain personal information only as long as necessary for business purposes, legal compliance, dispute resolution, or enforcing our agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">9. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page along with the updated Effective Date.
              </p>
            </section>

            <section className="bg-sky-50 rounded-2xl p-6 md:p-8 border border-sky-100 mt-8">
              <h2 className="text-2xl font-black text-slate-900 mb-4">11. Contact Us</h2>
              <p className="mb-4 text-slate-700">
                If you have any questions regarding this Privacy Policy, please contact:
              </p>
              <div className="space-y-2 text-slate-900 font-bold">
                <p>Drootle</p>
                {/* UPDATE THESE DETAILS FOR DROOTLE */}
                <p className="flex items-center gap-2">
                  <span className="text-slate-500 font-medium">Email:</span> 
                  <a href="mailto:team@drootle.com" className="text-sky-600 hover:underline">team@drootle.com</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-slate-500 font-medium">Website:</span> 
                  <a href="https://www.drootle.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">https://www.drootle.com</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-slate-500 font-medium">Location:</span> 
                  New Delhi, India
                </p>
              </div>
            </section>

          </div>
        </div>
        
      </div>
    </div>
  );
}