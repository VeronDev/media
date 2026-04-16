export function detectPlatform(url) {
    if (!url) return null;
    
    const urlLower = url.toLowerCase();
    
    if (urlLower.includes('youtube.com') || urlLower.includes('youtu.be')) {
        return 'youtube';
    }
    if (urlLower.includes('instagram.com')) {
        return 'instagram';
    }
    if (urlLower.includes('tiktok.com')) {
        return 'tiktok';
    }
    if (urlLower.includes('twitter.com') || urlLower.includes('x.com')) {
        return 'twitter';
    }
    if (urlLower.includes('facebook.com') || urlLower.includes('fb.com')) {
        return 'facebook';
    }
    
    return null;
}

export function extractVideoId(url, platform) {
    // Implement extraction logic per platform
    // Example for YouTube
    if (platform === 'youtube') {
        const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:[?&]|$)/);
        return match ? match[1] : null;
    }
    return null;
}