import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-4xl mx-auto px-5 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          Terms of Service
        </h1>
        
        <div className="space-y-8 text-foreground/80">
          <section>
            <p className="text-lg mb-4">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="text-lg">
              Welcome to Fi-Q. By accessing or using our application, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="mb-3">
              By creating an account or using Fi-Q, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our service.
            </p>
            <p>
              These terms apply to all users, including visitors, registered users, and any other form of access to the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Service Description
            </h2>
            <p className="mb-3">
              Fi-Q is a personal finance management application that helps you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Track expenses and income automatically</li>
              <li>Create and manage budgets tailored to your needs</li>
              <li>Categorize transactions using AI</li>
              <li>Monitor subscriptions and recurring payments</li>
              <li>Gain insights into your financial habits</li>
              <li>Set and track financial goals</li>
            </ul>
            <p className="mt-3">
              We reserve the right to modify, suspend, or discontinue any aspect of the service at any time with or without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Account Terms
            </h2>
            <h3 className="text-xl font-medium text-foreground mb-2">
              3.1 Account Creation
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You must be at least 18 years old to use Fi-Q</li>
              <li>You are responsible for maintaining the security of your account credentials</li>
              <li>You are responsible for all activities that occur under your account</li>
              <li>One person or legal entity may maintain no more than one account</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-2">
              3.2 Account Security
            </h3>
            <p className="mb-2">
              You must immediately notify us of any unauthorized use of your account or any other breach of security. We cannot and will not be liable for any loss or damage arising from your failure to comply with this security obligation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Privacy and Data Protection
            </h2>
            <p className="mb-3">
              Your privacy is paramount to us. Our commitment includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-3">
              <li><strong>100% Privacy:</strong> We never sell, share, or monetize your personal financial data</li>
              <li><strong>Local Storage:</strong> Your data is encrypted and stored securely</li>
              <li><strong>AI Processing:</strong> When AI features are used, data is processed securely and never retained by AI providers</li>
              <li><strong>Data Ownership:</strong> You own all your data and can export or delete it at any time</li>
            </ul>
            <p>
              For complete details about how we handle your data, please review our{" "}
              <Link to="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. User Responsibilities
            </h2>
            <p className="mb-3">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-3">
              <li>Use the service only for lawful purposes</li>
              <li>Provide accurate financial information for tracking</li>
              <li>Not attempt to gain unauthorized access to any part of the service</li>
              <li>Not interfere with or disrupt the service or servers</li>
              <li>Not use the service to transmit any malicious code</li>
              <li>Not reverse engineer, decompile, or disassemble any part of the service</li>
              <li>Not resell, rent, or lease the service to third parties</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Intellectual Property
            </h2>
            <h3 className="text-xl font-medium text-foreground mb-2">
              6.1 Our Content
            </h3>
            <p className="mb-3">
              The service, including all content, features, and functionality (including but not limited to software, text, displays, images, and design), is owned by Fi-Q and is protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-medium text-foreground mb-2">
              6.2 Your Content
            </h3>
            <p className="mb-2">
              You retain all rights to the financial data and information you input into Fi-Q. By using the service, you grant us a limited license to process and display your data solely for the purpose of providing the service to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Financial Disclaimer
            </h2>
            <p className="mb-3">
              <strong>Fi-Q is not a financial advisor.</strong> The service provides tools and insights to help you manage your finances, but:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We do not provide financial, investment, tax, or legal advice</li>
              <li>All financial decisions are your sole responsibility</li>
              <li>The insights and suggestions provided by AI features are for informational purposes only</li>
              <li>You should consult with qualified professionals for specific financial advice</li>
              <li>Past performance and trends do not guarantee future results</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Limitation of Liability
            </h2>
            <p className="mb-3">
              To the fullest extent permitted by law:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fi-Q is provided "as is" without warranties of any kind</li>
              <li>We are not liable for any indirect, incidental, special, or consequential damages</li>
              <li>We are not responsible for any financial losses resulting from the use of our service</li>
              <li>Our total liability shall not exceed the amount you paid us in the past 12 months</li>
              <li>We are not responsible for errors or omissions in the service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Subscription and Payment Terms
            </h2>
            <p className="mb-3">
              If you subscribe to a paid plan:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Subscriptions automatically renew unless cancelled</li>
              <li>You authorize us to charge your payment method for renewal</li>
              <li>Prices may change with 30 days' notice</li>
              <li>Refunds are handled on a case-by-case basis</li>
              <li>You can cancel your subscription at any time</li>
              <li>Upon cancellation, you'll retain access until the end of your billing period</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. Termination
            </h2>
            <p className="mb-3">
              We reserve the right to suspend or terminate your account if:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-3">
              <li>You violate these Terms of Service</li>
              <li>You engage in fraudulent or illegal activity</li>
              <li>We are required to do so by law</li>
              <li>Continuing to provide the service creates a risk for us or other users</li>
            </ul>
            <p>
              You may terminate your account at any time through the account settings. Upon termination, you may request a copy of your data for download.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              11. Changes to Terms
            </h2>
            <p className="mb-3">
              We may update these Terms of Service from time to time. When we do:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-3">
              <li>We will update the "Last Updated" date at the top of this page</li>
              <li>For material changes, we will notify you via email or through the app</li>
              <li>Your continued use of the service after changes constitutes acceptance</li>
              <li>If you don't agree to the new terms, you should stop using the service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              12. Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which Fi-Q operates, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the courts of that jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              13. Contact Us
            </h2>
            <p className="mb-3">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul className="list-none space-y-2">
              <li><strong>Email:</strong> legal@fi-q.com</li>
              <li><strong>Website:</strong> www.fi-q.com</li>
            </ul>
          </section>

          <section className="pt-8 border-t border-border">
            <p className="text-sm italic">
              By using Fi-Q, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;