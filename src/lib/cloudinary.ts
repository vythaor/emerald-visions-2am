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

export async function fetchFolderSources(folder: string, max: number = 30): Promise<string[]> {
  // Auto-detect server base URL based on environment
  const serverBase = import.meta.env.VITE_IMAGE_SERVER_BASE || 
    (import.meta.env.PROD 
      ? 'https://studio2am.lovable.app'  // Your specific Loveable domain
      : 'http://localhost:3001' // In development, use local server
    );
  
  const url = `${serverBase}/api/images?folder=${encodeURIComponent(folder)}&max=${max}`;
  console.log(`[cloudinary] Fetching images from: ${url}`);
  
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Server returned ${res.status}`);
    const data = await res.json();
    return Array.isArray(data.sources) ? data.sources : [];
  } catch (error) {
    console.warn(`[cloudinary] Server unavailable, using fallback for ${folder}:`, error);
    // Fallback: return some sample images for each folder
    return getFallbackImages(folder, max);
  }
}

// Fallback images when server is not available
function getFallbackImages(folder: string, max: number): string[] {
  const fallbackImages = {
    wedding: [
      'DSCF0482_gcxzks.jpg',
      'DSCF0483_gcxzks.jpg', 
      'DSCF0484_gcxzks.jpg',
      'DSCF0485_gcxzks.jpg',
      'DSCF0486_gcxzks.jpg'
    ],
    event: [
      'DSC08986_rjjyff.jpg',
      'DSC08987_rjjyff.jpg',
      'DSC08988_rjjyff.jpg',
      'DSC08989_rjjyff.jpg',
      'DSC08990_rjjyff.jpg'
    ],
    indoor: [
      'DSC03710_oah2bk.jpg',
      'DSC03711_oah2bk.jpg',
      'DSC03712_oah2bk.jpg',
      'DSC03713_oah2bk.jpg',
      'DSC03714_oah2bk.jpg'
    ],
    outdoor: [
      'DSCF0100_zidqs2.jpg',
      'DSCF0101_zidqs2.jpg',
      'DSCF0102_zidqs2.jpg',
      'DSCF0103_zidqs2.jpg',
      'DSCF0104_zidqs2.jpg'
    ],
    sport: [
      'DSC03440_hemqqo.jpg',
      'DSC03441_hemqqo.jpg',
      'DSC03442_hemqqo.jpg',
      'DSC03443_hemqqo.jpg',
      'DSC03444_hemqqo.jpg'
    ]
  };
  
  const images = fallbackImages[folder as keyof typeof fallbackImages] || [];
  return images.slice(0, max).map(img => cloudinaryUrl(img, DEFAULT_TRANSFORM));
}


