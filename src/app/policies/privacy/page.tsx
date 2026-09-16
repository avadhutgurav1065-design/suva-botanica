import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="lastUpdated">Last updated: September 2026</p>

      <h2>1. Information We Collect</h2>
      <p>When you interact with Suva Botanica, we may collect:</p>
      <ul>
        <li>Personal information (name, email, phone number) when you contact us or place an order</li>
        <li>Delivery address for order fulfillment</li>
        <li>Usage data (pages visited, time spent) through analytics tools</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Process and deliver your orders</li>
        <li>Communicate about your orders and inquiries</li>
        <li>Improve our website and customer experience</li>
        <li>Send promotional communications (only with your consent)</li>
      </ul>

      <h2>3. Data Protection</h2>
      <p>We implement appropriate security measures to protect your personal information. We do not sell, trade, or rent your personal data to third parties.</p>

      <h2>4. Cookies</h2>
      <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect certain website functionalities.</p>

      <h2>5. Third-Party Services</h2>
      <p>We may use third-party services (e.g., WhatsApp, analytics) that have their own privacy policies. We encourage you to review their policies separately.</p>

      <h2>6. Your Rights</h2>
      <p>You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:suvabotanica@gmail.com">suvabotanica@gmail.com</a>.</p>

      <h2>7. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>
    </>
  );
}
