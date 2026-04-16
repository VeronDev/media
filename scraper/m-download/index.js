// This file exports all scrapers from the m-download folder
// You will add your own scrapers here

// Example exports (uncomment when you add your scrapers):
// export { downloadYouTube } from './youtube.js';
// export { downloadInstagram } from './instagram.js';
// export { downloadTikTok } from './tiktok.js';
// export { downloadTwitter } from './twitter.js';
// export { downloadFacebook } from './facebook.js';

// Placeholder exports - replace with your actual scrapers
export async function downloadYouTube(url, quality) {
    throw new Error('YouTube scraper not implemented yet. Add your scraper to scraper/m-download/youtube.js');
}

export async function downloadInstagram(url) {
    throw new Error('Instagram scraper not implemented yet. Add your scraper to scraper/m-download/instagram.js');
}

export async function downloadTikTok(url) {
    throw new Error('TikTok scraper not implemented yet. Add your scraper to scraper/m-download/tiktok.js');
}

export async function downloadTwitter(url) {
    throw new Error('Twitter scraper not implemented yet. Add your scraper to scraper/m-download/twitter.js');
}

export async function downloadFacebook(url) {
    throw new Error('Facebook scraper not implemented yet. Add your scraper to scraper/m-download/facebook.js');
}