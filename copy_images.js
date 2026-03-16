const fs = require('fs');
const path = require('path');

const src = path.join('C:', 'Users', 'Dennis N', '.gemini', 'antigravity', 'brain', '28c2680e-63c6-4041-9277-5b4f7ad58ece');
const dest = path.join(__dirname, 'images');

if (!fs.existsSync(dest)) fs.mkdirSync(dest);

const files = [
  ['nairobi_exterior_1773614220945.png', 'fallback1.png'],
  ['nairobi_living_room_1773614303025.png', 'fallback2.png'],
  ['nairobi_kitchen_1773614323160.png', 'fallback3.png'],
  ['nairobi_bedroom_1773614340598.png', 'fallback4.png'],
  ['nairobi_pool_area_1773614354933.png', 'fallback5.png'],
  ['nairobi_skyline_view_1773614511145.png', 'fallback6.png'],
];

files.forEach(([from, to]) => {
  const s = path.join(src, from);
  const d = path.join(dest, to);
  if (fs.existsSync(s)) {
    fs.copyFileSync(s, d);
    console.log('Copied:', to, '(' + Math.round(fs.statSync(d).size / 1024) + ' KB)');
  } else {
    console.log('NOT FOUND:', s);
  }
});
console.log('Done!');
