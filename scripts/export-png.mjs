import { chromium } from 'playwright';
import { resolve } from 'node:path';

const fileUrl = `file:///${resolve('index.html').replace(/\\/g, '/')}`;

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
await page.goto(fileUrl, { waitUntil: 'networkidle' });
await page.screenshot({
  path: 'azure-speech-sdk-crl-urgent-guide-1080x1920.png',
  fullPage: true,
  type: 'png'
});
await browser.close();

console.log('PNG exported: azure-speech-sdk-crl-urgent-guide-1080x1920.png');
