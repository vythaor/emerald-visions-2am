const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "ddwq9besf";

export function cloudinaryUrl(path: string, transformation?: string) {
  const base = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;
  if (transformation && transformation.trim().length > 0) {
    return `${base}/${transformation}/${path}`;
  }
  return `${base}/${path}`;
}

export function folderImage(folder: string, filename: string, transformation?: string) {
  return cloudinaryUrl(`${folder}/${filename}`, transformation);
}

export const DEFAULT_TRANSFORM = "f_auto,q_auto";

export function resolveCloudinarySource(pathOrUrl: string, transformation: string = DEFAULT_TRANSFORM) {
  if (!pathOrUrl) return pathOrUrl;
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl; // already a full URL
  }
  return cloudinaryUrl(pathOrUrl, transformation);
}

export interface ImageResponse {
  images: string[];
  hasMore: boolean;
  nextCursor: string | null;
  count: number;
}

export async function fetchFolderSources(folder: string, max: number = 30, offset: number = 0): Promise<ImageResponse> {
  // Auto-detect server base URL based on environment
  const serverBase = import.meta.env.VITE_IMAGE_SERVER_BASE || 
    (import.meta.env.PROD 
      ? 'https://emerald-visions-backend.vercel.app'  // Replace with your deployed backend URL
      : 'http://localhost:3001' // In development, use local server
    );
  
  const url = `${serverBase}/api/images?folder=${encodeURIComponent(folder)}&max=${max}&offset=${offset}`;
  console.log(`[cloudinary] Fetching images from: ${url}`);
  
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Server returned ${res.status}`);
    const data = await res.json();
    
    return {
      images: Array.isArray(data.images) ? data.images.map((img: any) => img.url) : [],
      hasMore: data.hasMore || false,
      nextCursor: data.nextCursor || null,
      count: data.count || 0
    };
  } catch (error) {
    console.warn(`[cloudinary] Server unavailable, returning empty response for ${folder}:`, error);
    return {
      images: [],
      hasMore: false,
      nextCursor: null,
      count: 0
    };
  }
}



