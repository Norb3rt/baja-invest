import fs from 'fs';
const lines = fs.readFileSync('src/pages/Home.tsx', 'utf-8').split('\n');
lines.slice(140, 160).forEach((l, i) => {
  console.log((140+i) + ': ' + l);
});
