import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Botanical & Safety Disclaimer' };

export default function DisclaimerPage() {
  return (
    <>
      <h1>Botanical & Safety Disclaimer</h1>
      <p className="lastUpdated">Last Updated: September 2026</p>

      <p>The information, products, and services provided by Suva Botanica are for ornamental, aesthetic, and gifting purposes only. By purchasing or interacting with our products, you acknowledge and agree to the following disclaimers:</p>

      <h2>1. Plant Toxicity & Pet Safety</h2>
      <p>Many indoor and exotic plants contain compounds that can be harmful or fatal to pets (including cats, dogs, and birds) and humans if ingested.</p>
      <ul>
        <li><strong>Not for Consumption:</strong> Suva Botanica products are strictly non-edible.</li>
        <li><strong>Buyer Responsibility:</strong> It is the sole responsibility of the purchaser or the gift recipient to research the toxicity of a specific plant and keep it out of reach of children and domestic animals. Suva Botanica assumes no liability for any illness, injury, or veterinary emergencies resulting from the ingestion of or contact with our plants.</li>
      </ul>

      <h2>2. Medical & Allergen Disclaimer</h2>
      <p>Our living keepsakes, potting mediums (including cocopeat and moss), and fertilizers may trigger allergic reactions in sensitive individuals through touch or airborne spores.</p>
      <p>No product sold by Suva Botanica is intended to diagnose, treat, cure, or prevent any physical or mental health condition. Do not use our ornamental botanicals for self-medication, teas, or topical treatments.</p>

      <h2>3. Plant Lifespan & Environmental Variables</h2>
      <p>We guarantee that our tissue-cultured plants leave our facilities in pristine, virus-free health. However, as living organisms, their survival depends entirely on their new environment.</p>
      <p>Suva Botanica is not liable for plant mortality or decline caused by inadequate lighting, overwatering, underwatering, improper temperature control, or failure to follow the provided care instructions after a successful delivery.</p>

      <h2>4. General Information Disclaimer</h2>
      <p>The plant care guides, botanical histories, and symbolism provided on our website, social media, and physical care cards are for general informational purposes. While curated by horticultural professionals, these guides are not absolute guarantees of plant behavior, as indoor micro-climates vary drastically from home to home.</p>
    </>
  );
}
