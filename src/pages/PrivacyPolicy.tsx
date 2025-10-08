import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-5 py-16">
        <h1 className="text-5xl font-['Lexend'] font-bold text-[#080808] mb-8">
          Privacy Policy
        </h1>
        
        <div className="space-y-8 text-[#080808]">
          <section>
            <p className="text-lg font-light mb-4">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="text-lg font-light leading-relaxed">
              At Fi Q, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our personal finance application.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-['Lexend'] font-semibold mb-4">
              1. Information We Collect
            </h2>
            <p className="text-lg font-light leading-relaxed mb-4">
              We collect the following types of information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg font-light ml-4">
              <li>Email address (for account creation and communication)</li>
              <li>Financial transaction data (stored locally and encrypted)</li>
              <li>Usage data and preferences (to improve your experience)</li>
              <li>Device information (for security and optimization purposes)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-['Lexend'] font-semibold mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-lg font-light leading-relaxed mb-4">
              Your information is used to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg font-light ml-4">
              <li>Provide and improve our personal finance management services</li>
              <li>Personalize your experience with AI-powered insights</li>
              <li>Communicate important updates and features</li>
              <li>Ensure the security and integrity of our application</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-['Lexend'] font-semibold mb-4">
              3. Data Privacy and Security
            </h2>
            <p className="text-lg font-light leading-relaxed mb-4">
              <strong>100% Private:</strong> We do not sell, rent, or share your personal financial data with third parties for marketing purposes.
            </p>
            <p className="text-lg font-light leading-relaxed mb-4">
              Your financial data is encrypted both in transit and at rest. We use industry-standard security measures including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg font-light ml-4">
              <li>End-to-end encryption for sensitive financial information</li>
              <li>Secure authentication protocols</li>
              <li>Regular security audits and updates</li>
              <li>Limited access controls to your personal data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-['Lexend'] font-semibold mb-4">
              4. AI and Machine Learning
            </h2>
            <p className="text-lg font-light leading-relaxed">
              Fi Q uses AI to categorize expenses, identify patterns, and provide personalized insights. All AI processing is done with your privacy in mind, and your financial data is never used to train models that benefit other users or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-['Lexend'] font-semibold mb-4">
              5. Data Retention
            </h2>
            <p className="text-lg font-light leading-relaxed">
              We retain your personal information only as long as necessary to provide our services and comply with legal obligations. You may request deletion of your account and associated data at any time.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-['Lexend'] font-semibold mb-4">
              6. Your Rights
            </h2>
            <p className="text-lg font-light leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg font-light ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your account and data</li>
              <li>Export your financial data</li>
              <li>Opt-out of non-essential communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-['Lexend'] font-semibold mb-4">
              7. Cookies and Tracking
            </h2>
            <p className="text-lg font-light leading-relaxed">
              We use essential cookies to maintain your session and preferences. We do not use tracking cookies for advertising purposes. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-['Lexend'] font-semibold mb-4">
              8. Third-Party Services
            </h2>
            <p className="text-lg font-light leading-relaxed">
              Fi Q may integrate with third-party financial institutions to import transaction data. These connections are secured through bank-level encryption, and we only access the data you explicitly authorize.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-['Lexend'] font-semibold mb-4">
              9. Children's Privacy
            </h2>
            <p className="text-lg font-light leading-relaxed">
              Fi Q is not intended for children under 13 years of age. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-['Lexend'] font-semibold mb-4">
              10. Changes to This Policy
            </h2>
            <p className="text-lg font-light leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through the application. Your continued use of Fi Q after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-['Lexend'] font-semibold mb-4">
              11. Contact Us
            </h2>
            <p className="text-lg font-light leading-relaxed mb-4">
              If you have questions about this Privacy Policy or your personal data, please contact us:
            </p>
            <p className="text-lg font-light leading-relaxed">
              Email: privacy@fi-q.com
            </p>
          </section>

          <div className="pt-8 border-t border-[#080808]">
            <Link 
              to="/" 
              className="text-[#080808] font-medium hover:text-[#FFC726] inline-flex items-center"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
