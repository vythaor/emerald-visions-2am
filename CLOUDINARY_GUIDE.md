# Cloudinary Image Integration Guide

## How Images Are Fetched from Cloudinary

This project uses a **two-tier system** to fetch images from Cloudinary:

### 1. **Backend API Endpoint** (Primary Method)
The frontend calls a backend API that queries Cloudinary's Admin API to list images in folders.

**API Endpoint:** `GET /api/images?folder={folderName}&max={count}&cursor={cursor}`

- **Location:** `src/lib/cloudinary.ts` → `fetchFolderSources()` function
- **Backend URL:** 
  - Production: `https://emerald-visions-backend.vercel.app`
  - Development: `http://localhost:3001`
- **How it works:**
  1. Frontend sends request: `GET /api/images?folder=portraits&max=20`
  2. Backend queries Cloudinary Admin API for images in that folder
  3. Backend returns array of image URLs
  4. Frontend displays the images

### 2. **Fallback System** (When Backend is Unavailable)
If the backend API fails, the system falls back to hardcoded image filenames.

**Location:** `src/lib/cloudinary.ts` → `fallbackImages` object (lines 60-103)

---

## How to Add a New Cloudinary Folder

### Step 1: Upload Images to Cloudinary

1. Go to your [Cloudinary Dashboard](https://cloudinary.com/console)
2. Navigate to **Media Library**
3. Create a new folder (or use existing folder)
4. Upload your images to that folder

**Important:** The folder name in Cloudinary must match what you'll use in code (case-sensitive).

### Step 2: Update Your Component

#### Option A: Using `useImageGallery` Hook (Recommended)

This is the easiest way - just add a new hook call:

```tsx
import { useImageGallery } from "@/hooks/use-image-gallery";

const MyComponent = () => {
  // Add a new hook for your folder
  const { images: newFolderImages } = useImageGallery({
    folder: 'your-new-folder-name',  // Must match Cloudinary folder name
    fallbackImage: "DSC03710_oah2bk.jpg",  // Fallback if no images found
    pageSize: 20  // Number of images to fetch per page
  });

  // Use the images
  return (
    <div>
      {newFolderImages.map((src, idx) => (
        <img key={idx} src={src} alt={`Image ${idx + 1}`} />
      ))}
    </div>
  );
};
```

#### Option B: Direct API Call

If you need more control, use `fetchFolderSources` directly:

```tsx
import { fetchFolderSources } from "@/lib/cloudinary";
import { useEffect, useState } from "react";

const MyComponent = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const response = await fetchFolderSources('your-new-folder-name', 20);
      setImages(response.images);
    };
    loadImages();
  }, []);

  return (
    <div>
      {images.map((src, idx) => (
        <img key={idx} src={src} alt={`Image ${idx + 1}`} />
      ))}
    </div>
  );
};
```

### Step 3: Add Fallback Images (Optional but Recommended)

If you want fallback images when the backend is unavailable, add them to `src/lib/cloudinary.ts`:

```typescript
const fallbackImages: Record<string, string[]> = {
  // ... existing folders ...
  'your-new-folder-name': [
    'image1_filename.jpg',
    'image2_filename.jpg',
    'image3_filename.jpg',
  ],
};
```

**Note:** Fallback images should be filenames (not full paths) that exist in your Cloudinary root or the folder.

---

## Example: Adding a "Nature" Folder

### 1. In Cloudinary:
- Create folder named `nature`
- Upload images: `nature1.jpg`, `nature2.jpg`, etc.

### 2. In Your Component (`Portfolio.tsx`):

```tsx
const Portfolio = () => {
  // Add the new hook
  const { images: natureImages } = useImageGallery({
    folder: 'nature',
    fallbackImage: "DSC03710_oah2bk.jpg",
    pageSize: 20
  });

  // Add to genres array
  const genres = [
    // ... existing genres ...
    {
      name: "Nature",
      images: natureImages.slice(0, 20).map((src, idx) => ({
        id: `nature-${idx + 1}`,
        src,
        alt: `Nature ${idx + 1}`,
      })),
    },
  ];

  // Rest of component...
};
```

### 3. Add Fallback (Optional):

In `src/lib/cloudinary.ts`, add to `fallbackImages`:

```typescript
const fallbackImages: Record<string, string[]> = {
  // ... existing ...
  'nature': [
    'nature1.jpg',
    'nature2.jpg',
    'nature3.jpg',
  ],
};
```

---

## Current Folder Structure

Based on your code, these folders are currently configured:

- `portraits` - Portrait photography
- `prewedding` - Pre-wedding photos
- `activities` - Event/activity photos
- `landscape` - Landscape photography
- `mmu` - MMU Events
- `indoor` - Indoor/studio photography
- `outdoor` - Outdoor photography
- `wedding` - Wedding photography
- `sport` - Sports photography
- `event` - Event photography
- `enhance` - Enhanced/edited photos

---

## How the Backend Works

The backend API endpoint (`/api/images`) does the following:

1. **Receives request** with folder name and pagination params
2. **Queries Cloudinary Admin API** using:
   ```javascript
   cloudinary.search()
     .expression(`folder:${folderName}`)
     .max_results(max)
     .next_cursor(cursor)
     .execute()
   ```
3. **Returns JSON response**:
   ```json
   {
     "images": [
       { "url": "https://res.cloudinary.com/.../image1.jpg" },
       { "url": "https://res.cloudinary.com/.../image2.jpg" }
     ],
     "hasMore": true,
     "nextCursor": "abc123...",
     "count": 20
   }
   ```

---

## Troubleshooting

### Images Not Showing?

1. **Check folder name** - Must match exactly (case-sensitive)
2. **Check backend is running** - The API endpoint must be accessible
3. **Check Cloudinary credentials** - Backend needs valid Cloudinary API keys
4. **Check browser console** - Look for error messages
5. **Verify images exist** - Check Cloudinary dashboard that images are in the folder

### Backend Not Available?

The system will automatically fall back to hardcoded images. Make sure you've added your folder to the `fallbackImages` object in `cloudinary.ts`.

### Adding Images to Existing Folder?

Just upload new images to the Cloudinary folder - they'll automatically appear (no code changes needed). The backend queries Cloudinary in real-time.

---

## Environment Variables

Make sure these are set (for the backend):

```env
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

For frontend (optional, defaults provided):
```env
VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name
VITE_IMAGE_SERVER_BASE=http://localhost:3001  # or your backend URL
```

---

## Summary

**To add a new folder:**
1. ✅ Upload images to Cloudinary folder
2. ✅ Add `useImageGallery` hook with folder name
3. ✅ Use the images in your component
4. ✅ (Optional) Add fallback images to `cloudinary.ts`

That's it! The backend automatically queries Cloudinary for any folder name you provide.
