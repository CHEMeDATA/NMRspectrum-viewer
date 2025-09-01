// ===================== CONFIG =====================
// copy libraries
const GITHUB_BASE = 'https://raw.githubusercontent.com';
// ===================================================

const fs = require('fs');
const path = require('path');

// Load your JSON data
const data = require('../src/extraMethodsStatements.json'); // Path to your JSON file

// Get parameters: mode + target folder
const mode = process.argv[2] || 'all';
const SRC_DIR = process.argv[3] || './srcTest';

if (!['all', 'diff'].includes(mode)) {
  console.error('Usage: node script.js [all|diff] [targetFolder]');
  process.exit(1);
}

// Ensure SRC_DIR exists
if (!fs.existsSync(SRC_DIR)) {
  fs.mkdirSync(SRC_DIR, { recursive: true });
}

// Helper: download file from GitHub
async function downloadFile(url, destPath) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to download ${url}: ${res.statusText}`);
    const content = await res.text();
    fs.writeFileSync(destPath, content, 'utf8');
    console.log(`✅ Downloaded: ${url} → ${destPath}`);
  } catch (err) {
    console.error(`❌ Error downloading ${url}: ${err.message}`);
  }
}

// Main: loop over JSON and download
async function processLibraries() {
  for (const item of data) {
    for (const lib of item.jsLibrary) {
      const { repository, fileName } = lib;

      // Only download if mode=all OR repository differs from parent
      if (mode === 'all' || repository !== item.repository) {
        const url = `${GITHUB_BASE}/${repository}/main/${fileName}`;
        const destPath = path.join(SRC_DIR, path.basename(fileName));
        await downloadFile(url, destPath);
      }
    }
  }
}

processLibraries();
