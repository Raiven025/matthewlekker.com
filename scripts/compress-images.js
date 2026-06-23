const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dirs = [
  'public/images/Interiors',
  'public/images/Hospitality',
  'public/images/Commercial',
  'public/images/Architecture',
  'public/images/Drone',
  'public/images/Landscape',
];

const MAX_WIDTH = 1920;
const QUALITY = 82;

async function compressDir(dir) {
  const files = fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
  console.log(`\n📁 ${dir} — ${files.length} files`);
  let saved = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    const originalSize = stat.size;

    // Skip already small files (under 300KB)
    if (originalSize < 300 * 1024) {
      console.log(`  ✓ skip ${file} (already small)`);
      continue;
    }

    try {
      const ext = path.extname(file).toLowerCase();
      const tmpPath = filePath + '.tmp';

      await sharp(filePath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
        .toFile(tmpPath);

      const newSize = fs.statSync(tmpPath).size;
      fs.renameSync(tmpPath, filePath);
      const reduction = Math.round((1 - newSize / originalSize) * 100);
      saved += originalSize - newSize;
      console.log(`  ✓ ${file}: ${(originalSize/1024/1024).toFixed(1)}MB → ${(newSize/1024/1024).toFixed(1)}MB (-${reduction}%)`);
    } catch (err) {
      console.log(`  ✗ ${file}: ${err.message}`);
      if (fs.existsSync(filePath + '.tmp')) fs.unlinkSync(filePath + '.tmp');
    }
  }
  return saved;
}

async function main() {
  let totalSaved = 0;
  for (const dir of dirs) {
    if (fs.existsSync(dir)) {
      totalSaved += await compressDir(dir);
    }
  }
  console.log(`\n✅ Total saved: ${(totalSaved/1024/1024).toFixed(0)}MB`);
}

main().catch(console.error);
