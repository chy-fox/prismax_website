import { createRequire } from "node:module";
import { mkdir, readdir } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const puppeteer = require("/Users/casper/.cache/puppeteer-test/node_modules/puppeteer");

const ROOT = resolve(fileURLToPath(new URL(".", import.meta.url)));
const OUT_DIR = resolve(ROOT, "temporary screenshots");

const url = process.argv[2];
const label = process.argv[3] || "";
const viewport = process.argv[4] || "desktop";
const mode = process.argv[5] || "full"; // "full" or "folds"

if (!url) {
  console.error("Usage: node screenshot.mjs <url> [label] [desktop|mobile|tablet] [full|folds]");
  process.exit(1);
}

const SIZES = {
  desktop: { width: 1440, height: 900, deviceScaleFactor: 2 },
  tablet: { width: 834, height: 1112, deviceScaleFactor: 2 },
  mobile: { width: 390, height: 844, deviceScaleFactor: 2 },
};

await mkdir(OUT_DIR, { recursive: true });

const existing = await readdir(OUT_DIR).catch(() => []);
const nums = existing
  .map((f) => f.match(/^screenshot-(\d+)/))
  .filter(Boolean)
  .map((m) => parseInt(m[1], 10));
const next = (nums.length ? Math.max(...nums) : 0) + 1;

const suffix = [viewport !== "desktop" ? viewport : "", label].filter(Boolean).join("-");
const filename = `screenshot-${next}${suffix ? "-" + suffix : ""}.png`;
const outPath = resolve(OUT_DIR, filename);

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

try {
  const page = await browser.newPage();
  await page.setViewport(SIZES[viewport] || SIZES.desktop);
  await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });

  // Initial hero settle (Framer hydration, fonts, hero video poster)
  await new Promise((r) => setTimeout(r, 3000));

  // Trigger lazy-loaded content by scrolling through the page
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const step = 300;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        total += step;
        if (total >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 200);
    });
  });
  await new Promise((r) => setTimeout(r, 2000));
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 1500));

  if (mode === "folds") {
    // Capture viewport-sized shots at each scroll fold
    const docHeight = await page.evaluate(() => document.body.scrollHeight);
    const vpHeight = SIZES[viewport].height;
    const numFolds = Math.ceil(docHeight / vpHeight);
    for (let i = 0; i < numFolds; i++) {
      await page.evaluate((y) => window.scrollTo(0, y), i * vpHeight);
      await new Promise((r) => setTimeout(r, 700));
      const foldPath = outPath.replace(/\.png$/, `-fold${i + 1}.png`);
      await page.screenshot({ path: foldPath, fullPage: false });
      console.log("Saved", foldPath);
    }
  } else {
    await page.screenshot({ path: outPath, fullPage: true });
    console.log("Saved", outPath);
  }
} finally {
  await browser.close();
}
