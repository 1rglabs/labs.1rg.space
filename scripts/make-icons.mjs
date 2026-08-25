// Generates public/favicon.png, public/apple-touch-icon.png, and public/og.png
// from the logo. Run after changing the logo: node scripts/make-icons.mjs
import sharp from 'sharp';

const LOGO = 'src/assets/1RG-White.webp';
const BG = '#030712';

async function iconOn(size, logoWidth, out) {
  const logo = await sharp(LOGO).resize({ width: logoWidth }).png().toBuffer();
  await sharp({
    create: { width: size, height: size, channels: 4, background: BG },
  })
    .composite([{ input: logo, gravity: 'centre' }])
    .png()
    .toFile(out);
  console.log(out);
}

async function ogCard(out) {
  const logo = await sharp(LOGO).resize({ width: 560 }).png().toBuffer();
  await sharp({
    create: { width: 1200, height: 630, channels: 4, background: BG },
  })
    .composite([{ input: logo, gravity: 'centre' }])
    .png()
    .toFile(out);
  console.log(out);
}

await iconOn(64, 52, 'public/favicon.png');
await iconOn(180, 132, 'public/apple-touch-icon.png');
await ogCard('public/og.png');
