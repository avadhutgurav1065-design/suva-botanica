import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Shipping & Delivery' };

export default function ShippingPage() {
  return (
    <>
      <h1>Shipping & Delivery</h1>
      <p className="lastUpdated">The Suva Botanica Transit Standard</p>

      <p>At Suva Botanica, we do not ship products; we transport living keepsakes. Because our botanical gifts are perishable and housed in premium ceramic planters, we bypass traditional courier networks entirely. Every order is handled with precision to ensure it arrives at its destination in immaculate, gift-ready condition.</p>

      <h2>1. Delivery Zones</h2>
      <p>To maintain absolute quality control over our transit process, we currently operate exclusively on a hyper-local model.</p>
      <ul>
        <li><strong>Active Zones:</strong> We provide direct point-to-point delivery across Pune and Pimpri-Chinchwad (PCMC).</li>
        <li><strong>Pan-India Shipping:</strong> Due to the risk of transit damage to live plants and premium pottery, we do not currently offer pan-India shipping.</li>
      </ul>

      <h2>2. The "Soil-Lock" Transit System</h2>
      <p>We have engineered a proprietary packaging solution to solve the biggest problem with online plant delivery.</p>
      <ul>
        <li><strong>Zero-Spill Guarantee:</strong> Your plant is secured using our custom "Soil-Lock" engineering, meaning the cocopeat and soil remain firmly inside the pot, even over Pune's speed breakers.</li>
        <li><strong>Point-to-Point Hand Delivery:</strong> Your gift is never thrown into the back of a sorting truck. We utilize dedicated local delivery partners to transport your order directly from our studio to the recipient's door.</li>
      </ul>

      <h2>3. Order Processing & Timelines</h2>
      <p>We understand that gifts are time-sensitive, especially for anniversaries, birthdays, and corporate events.</p>
      <ul>
        <li><strong>Processing Time:</strong> Orders placed before 12:00 PM (IST) are processed on the same day. Orders placed after 12:00 PM will be processed the following business day.</li>
        <li><strong>Delivery Window:</strong> Once processed, your living keepsake will be hand-delivered within 24 to 48 hours.</li>
        <li><strong>Scheduled Gifting:</strong> If you need a gift delivered on a specific future date, please add a note during checkout or contact our founders directly via WhatsApp after placing your order.</li>
      </ul>

      <h2>4. Receiving the Delivery (Important)</h2>
      <p>Because live plants cannot survive sitting inside a closed, unventilated box for days, a successful delivery requires coordination:</p>
      <ul>
        <li><strong>Recipient Availability:</strong> Someone must be available at the destination address to receive the package.</li>
        <li><strong>Failed Deliveries:</strong> If a delivery fails because the recipient is unavailable or the provided address is incorrect, the plant must be routed back to our studio. In such cases, a redelivery fee of ₹150 will apply to cover the secondary transit costs.</li>
      </ul>

      <h2>5. Weather & Unforeseen Delays</h2>
      <p>While we pride ourselves on punctuality, the safety of the plant comes first. During extreme weather conditions (heavy monsoon rains or severe heatwaves) or unforeseen logistical roadblocks in Pune, deliveries may be paused or delayed to ensure the plant's survival. We will proactively notify you of any such delays.</p>
    </>
  );
}
