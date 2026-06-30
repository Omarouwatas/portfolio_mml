import puppeteer from "puppeteer-core";

const SS = process.env.SS;
const url = "http://localhost:5173/";

const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome-stable",
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"],
});

async function shoot(name, width, height) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: "networkidle0" });
  // scroll through to trigger whileInView reveals, then back to top
  await page.evaluate(async () => {
    await new Promise((res) => {
      let y = 0;
      const step = () => {
        y += window.innerHeight * 0.4;
        window.scrollTo(0, y);
        if (y < document.body.scrollHeight) setTimeout(step, 180);
        else res();
      };
      step();
    });
  });
  await new Promise((r) => setTimeout(r, 500));
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: `${SS}/${name}.png`, fullPage: true });
  await page.close();
  console.log("saved", name);
}

await shoot(process.argv[2] || "desktop", Number(process.argv[3]) || 1440, Number(process.argv[4]) || 900);
await browser.close();
