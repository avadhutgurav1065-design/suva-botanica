import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Terms of Service' };

export default function TermsPage() {
  return (
    <>
      <h1>Terms of Service</h1>
      <p className="lastUpdated">Last Updated: September 2026</p>

      <p>Welcome to Suva Botanica. By accessing our digital storefront or purchasing our curated botanical products, you agree to be bound by the following terms. Please read them carefully before placing an order.</p>

      <h2>1. Product Nature & Live Variations</h2>
      <p>Suva Botanica specializes in live, tissue-cultured botanical products. By purchasing, you explicitly acknowledge the following:</p>
      <ul>
        <li><strong>Natural Variance:</strong> Live plants naturally vary in size, leaf structure, and exact coloration. The product images on our website are highly representative, but minor natural variations do not constitute a defect.</li>
        <li><strong>Perishability:</strong> As living entities, plants require immediate care upon delivery. We are not liable for plant deterioration caused by improper watering, incorrect lighting, or neglect after successful delivery.</li>
      </ul>

      <h2>2. Pricing, Payments & Fulfillment</h2>
      <p>All transactions and product offerings are subject to the following conditions:</p>
      <ul>
        <li><strong>Pricing Updates:</strong> All prices are listed in Indian Rupees (INR). We reserve the right to modify prices, update our curated catalog, or discontinue specific items without prior notice.</li>
        <li><strong>Order Cancellation:</strong> We reserve the right to refuse or cancel any order if a product is listed at an incorrect price due to a typographical error, or if local delivery logistics cannot be safely fulfilled.</li>
        <li><strong>Payment Processing:</strong> Secure payments are processed via our authorized third-party payment gateways. Orders are only scheduled for dispatch upon successful payment confirmation.</li>
      </ul>

      <h2>3. Delivery & Replacement Guidelines</h2>
      <ul>
        <li><strong>Delivery Jurisdiction:</strong> We currently execute exclusive, point-to-point hand deliveries solely within Pune and Pimpri-Chinchwad (PCMC).</li>
        <li><strong>Risk of Loss:</strong> The risk of loss passes to you once the package is successfully handed over to our local delivery partner. Since plants cannot be left unattended in warehouses, a failed delivery due to recipient unavailability may incur a redelivery fee.</li>
        <li><strong>Strict Replacements:</strong> We do not accept physical returns due to the perishable nature of our products. Replacements for transit damage are strictly governed by our Returns Policy, which mandates unboxing video proof within 24 hours of delivery.</li>
      </ul>

      <h2>4. Governing Law</h2>
      <p>These Terms of Service shall be governed by and construed in accordance with the laws of India. Any legal disputes, claims, or controversies arising from these terms or your use of our digital storefront shall be subject to the exclusive jurisdiction of the courts located in Pune, Maharashtra.</p>
    </>
  );
}
