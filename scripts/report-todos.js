const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const extensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.md']);
const results = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['.git', 'node_modules', '.next'].includes(entry.name)) continue;
      walk(full);
      continue;
    }
    if (!extensions.has(path.extname(entry.name))) continue;
    const text = fs.readFileSync(full, 'utf8');
    const lines = text.split(/\r?\n/);
    lines.forEach((line, idx) => {
      if (line.includes('<Todo>') || line.includes('TODO:')) {
        const rel = path.relative(root, full).replace(/\\/g, '/');
        results.push(`${rel}:${idx + 1}:${line.trim()}`);
      }
    });
  }
}

walk(root);

if (results.length === 0) {
  console.log('No TODO markers found.');
  return;
}

console.log('TODO report:');
for (const item of results) {
  console.log(item);
}
