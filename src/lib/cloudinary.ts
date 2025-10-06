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
  const serverBase = import.meta.env.VITE_IMAGE_SERVER_BASE || 'http://localhost:3001';
  const url = `${serverBase}/api/images?folder=${encodeURIComponent(folder)}&max=${max}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch images for ${folder}`);
  const data = await res.json();
  return Array.isArray(data.sources) ? data.sources : [];
}


