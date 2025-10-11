// Music configuration for style pages
// You can replace these YouTube URLs with your preferred songs

export const MUSIC_CONFIG = {
  event: {
    url: 'https://www.youtube.com/watch?v=EYGGd2NKwtI', // Replace with your event style song
    title: 'Event Style Music'
  },
    sport: {
      url: 'https://youtu.be/7P3XfgzclJ8?si=7KCmbzCrTpsLZsG0&t=47', // Sport style song starting at 47 seconds
      title: 'Sport Style Music'
    },
  indoor: {
    url: 'https://youtu.be/1NBnN0IAljQ?si=SFaxzFY6-UKVZ6P1&t=28', // Replace with your indoor style song
    title: 'Indoor Style Music'
  },
  outdoor: {
    url: 'https://www.youtube.com/watch?v=OrL4tIYnS7Y', // Replace with your outdoor style song
    title: 'Outdoor Style Music'
  },
  wedding: {
    url: 'https://www.youtube.com/watch?v=rt7SPm7N6D8', // Replace with your wedding style song
    title: 'Wedding Style Music'
  }
};

// Helper function to extract YouTube video ID from URL
export function getYouTubeVideoId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
  return match ? match[1] : null;
}

// Helper function to get YouTube embed URL
export function getYouTubeEmbedUrl(url: string): string | null {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) return null;
  
  // Extract timestamp parameter from original URL
  const urlObj = new URL(url);
  const timestamp = urlObj.searchParams.get('t');
  
  // Build embed URL with timestamp if present
  let embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;
  if (timestamp) {
    embedUrl += `&start=${timestamp}`;
  }
  
  return embedUrl;
}
