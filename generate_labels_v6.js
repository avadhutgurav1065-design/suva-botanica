const fs = require('fs');

// Use the WHITE logo for the dark green background
const logoPath = "C:\\Users\\avadh\\.gemini\\antigravity-ide\\brain\\daad4bea-9d36-4d81-ad84-096243d76363\\.user_uploaded\\media_1789586791103.png";
const logoB64 = 'data:image/png;base64,' + fs.readFileSync(logoPath).toString('base64');

// Exact array mapping the correct names and slugs based on src/data/plants.ts
const plants = [
  { name: "Poinsettia", slug: "poinsettia" },
  { name: "Aglaonema", slug: "aglaonema" },
  { name: "Alocasia", slug: "alocasia" },
  { name: "Areca Palm", slug: "areca-palm" },
  { name: "Anthurium", slug: "anthurium" },
  { name: "Aralia", slug: "aralia" },
  { name: "Calathea", slug: "calathea" },
  { name: "Carnation", slug: "carnation" },
  { name: "Chrysanthemum", slug: "chrysanthemum" },
  { name: "Dahlia", slug: "dahlia" },
  { name: "Bird's Nest Fern", slug: "bird-nest-fern" },
  { name: "Ficus Bonsai", slug: "ficus-bonsai" },
  { name: "Fishtail Palm", slug: "fishtail-palm" },
  { name: "Guzmania", slug: "guzmania" },
  { name: "Hydrangea", slug: "hydrangea" },
  { name: "Kalanchoe", slug: "kalanchoe" },
  { name: "Lucky Bamboo", slug: "lucky-bamboo" },
  { name: "Mandevilla", slug: "mandevilla" },
  { name: "Monstera", slug: "monstera" },
  { name: "Money Plant", slug: "money-plant" },
  { name: "Philodendron Moonshine", slug: "philodendron-moonshine" },
  { name: "Morpankhi", slug: "morpankhi" },
  { name: "Petra Croton", slug: "petra-croton" },
  { name: "Radermachera", slug: "radermachera" },
  { name: "Rubber Plant", slug: "rubber-plant" },
  { name: "Sansevieria", slug: "sansevieria" },
  { name: "Schefflera Variegated", slug: "schefflera-variegated" },
  { name: "Spathiphyllum", slug: "spathiphyllum" },
  { name: "Syngonium", slug: "syngonium" },
  { name: "Mix Hanging Pot", slug: "mix-hanging-pot" },
  { name: "Zamia (ZZ Plant)", slug: "zamia" },
  { name: "Gerbera Daisy", slug: "gerbera" },
  { name: "Mini Kamini", slug: "mini-kamini" },
  { name: "Ficus Lyrata", slug: "lyrata-ficus" },
  { name: "Mango Keshar", slug: "mango-keshar" },
  { name: "Jade Plant", slug: "jade-plant" }
];

function card(plant) {
  const url = `https://suva-botanica.vercel.app/plants/${plant.slug}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&color=1a3a1a&data=${encodeURIComponent(url)}`;
  return `
  <div class="card">
    <div class="card-header">
      <img src="${logoB64}" class="brand-logo" alt="Suva Botanica" />
    </div>
    <div class="plant-name-band">
      <div class="plant-name">${plant.name}</div>
      <div class="scan-hint">↓ SCAN QR FOR CARE TIPS &amp; DETAILS</div>
    </div>
    <div class="qr-wrapper">
      <img src="${qrUrl}" class="qr-img" alt="QR Code for ${plant.name}" crossorigin="anonymous" />
    </div>
    <div class="card-footer">
      <div class="contact-item">
        <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.56.57 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.06z"/></svg>
        +91 95187 80272
      </div>
      <div class="divider"></div>
      <div class="contact-item">
        <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.756 0 8.332.013 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.013 8.332 0 8.756 0 12c0 3.244.013 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.987 8.756 24 12 24s3.668-.013 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038C23.987 15.668 24 15.244 24 12c0-3.244-.013-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.013 15.244 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        @suvabotanica
      </div>
      <div class="divider"></div>
      <div class="contact-item">
        <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        suvabotanica@gmail.com
      </div>
    </div>
  </div>`;
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Suva Botanica – Plant Labels (Print Ready)</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Inter:wght@300;400;500;600&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', sans-serif; background: #c8c8c8; padding: 30px; }
    h1.page-title { text-align: center; font-size: 12px; color: #555; margin-bottom: 24px; font-weight: 400; letter-spacing: 1.5px; text-transform: uppercase; }
    .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; max-width: 820px; margin: 0 auto; }

    .card {
      background: #fff;
      border-radius: 16px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 6px 24px rgba(0,0,0,0.15);
      page-break-inside: avoid;
      break-inside: avoid;
    }

    /* Dark green header — white logo sits perfectly on it */
    .card-header {
      width: 100%;
      background: #1a3a1a;
      padding: 14px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .brand-logo {
      height: 72px;
      width: auto;
      object-fit: contain;
    }

    .plant-name-band {
      width: 100%;
      background: #f0f7f0;
      border-bottom: 1px solid #d8ead8;
      padding: 12px 20px;
      text-align: center;
    }
    .plant-name {
      font-family: 'Playfair Display', serif;
      font-size: 26px;
      font-weight: 700;
      color: #1a3a1a;
      margin-bottom: 2px;
    }
    .scan-hint {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 1px;
      color: #6a9e6a;
    }

    .qr-wrapper {
      padding: 24px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .qr-img {
      width: 180px;
      height: 180px;
    }

    .card-footer {
      width: 100%;
      background: #f7f9f7;
      padding: 14px 10px; /* reduced side padding to give more room */
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #eee;
    }
    .contact-item {
      display: flex;
      align-items: center;
      gap: 3px; /* slightly less gap between icon and text */
      font-size: 8.5px; /* reduced font size to fit in one line */
      color: #444;
      font-weight: 600; /* slightly bolder for readability at small size */
      white-space: nowrap; /* prevent double line wrap */
      flex-shrink: 0; /* ensure it doesn't get squished */
    }
    .contact-item svg { width: 12px; height: 12px; fill: #1a3a1a; flex-shrink: 0; }
    .divider { width: 1px; min-width: 1px; height: 18px; background: #ccc; flex-shrink: 0; }

    /* Print Settings */
    @page { size: A4 portrait; margin: 15mm; }
    @media print {
      body { background: #fff; padding: 0; }
      .grid { max-width: 100%; gap: 15px; }
      .card { box-shadow: none; border: 1px solid #ccc; }
      .card-header { padding: 12px 20px; }
    }
  </style>
</head>
<body>
  <h1 class="page-title">Suva Botanica — Print File</h1>
  <div class="grid">
    ${plants.map(p => card(p)).join('')}
  </div>
</body>
</html>`;

fs.writeFileSync('c:\\\\suva botanica\\\\suva-botanica-app\\\\plant_labels_print.html', html);
console.log("Successfully generated plant_labels_print.html with exact slugs and PERFECT OLD DESIGN!");
