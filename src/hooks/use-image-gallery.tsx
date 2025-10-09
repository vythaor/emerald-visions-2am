import { useState, useCallback, useEffect } from 'react';
import { fetchFolderSources, cloudinaryUrl, DEFAULT_TRANSFORM } from '@/lib/cloudinary';
import { useInfiniteScroll } from './use-infinite-scroll';

interface UseImageGalleryOptions {
  folder: string;
  fallbackImage?: string;
  pageSize?: number;
}

export function useImageGallery({ 
  folder, 
  fallbackImage = "DSCF0482_gcxzks.jpg", 
  pageSize = 30 
}: UseImageGalleryOptions) {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [initialLoad, setInitialLoad] = useState(true);

  // Load more images function
  const loadMoreImages = useCallback(async () => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    try {
      const response = await fetchFolderSources(folder, pageSize, nextCursor);
      setImages(prev => [...prev, ...response.images]);
      setHasMore(response.hasMore);
      setNextCursor(response.nextCursor);
    } catch (error) {
      console.error('Error loading more images:', error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasMore, nextCursor, folder, pageSize]);

  // Infinite scroll hook
  const { setLoadMoreRef } = useInfiniteScroll({
    hasMore,
    isLoading,
    onLoadMore: loadMoreImages,
    threshold: 200
  });

  // Initial load
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetchFolderSources(folder, pageSize, null);
        if (!cancelled) {
          if (response.images.length > 0) {
            setImages(response.images);
            setHasMore(response.hasMore);
            setNextCursor(response.nextCursor);
          } else {
            // Fallback to single image if no images found
            setImages([cloudinaryUrl(fallbackImage, DEFAULT_TRANSFORM)]);
            setHasMore(false);
          }
        }
      } catch (e) {
        if (!cancelled) {
          setImages([cloudinaryUrl(fallbackImage, DEFAULT_TRANSFORM)]);
          setHasMore(false);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
          setInitialLoad(false);
        }
      }
    })();
    return () => {
      cancelled = true;
    }
  }, [folder, fallbackImage, pageSize]);

  return {
    images,
    isLoading,
    hasMore,
    initialLoad,
    setLoadMoreRef,
    loadMoreImages
  };
}
