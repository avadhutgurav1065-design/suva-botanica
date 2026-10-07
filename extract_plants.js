const fs = require('fs');
const ts = fs.readFileSync('src/data/plants.ts', 'utf8');
const plants = [];
const regex = /id:\s*['"]([^'"]+)['"][\s\S]*?name:\s*['"]([^'"]+)['"]/g;
let m;
while(m = regex.exec(ts)) {
  plants.push({ name: m[2], slug: m[1] });
}
fs.writeFileSync('plants.json', JSON.stringify(plants, null, 2));
