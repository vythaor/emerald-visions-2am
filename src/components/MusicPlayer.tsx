import { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { MUSIC_CONFIG } from '@/config/music';

interface MusicPlayerProps {
  styleType: 'event' | 'sport' | 'indoor' | 'outdoor' | 'wedding';
  playbackRate?: number; // Speed multiplier (1.0 = normal, 1.25 = 1.25x speed, etc.)
}

const MusicPlayer = ({ styleType, playbackRate = 1.0 }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Get music config for this style from centralized config
  const currentMusic = MUSIC_CONFIG[styleType];
  
  // Extract YouTube video ID
  const getYouTubeVideoId = (url: string): string | null => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  // Get YouTube embed URL
  const getYouTubeEmbedUrl = (url: string, autoplay: boolean = false, muted: boolean = true, speed: number = 1.0): string | null => {
    const videoId = getYouTubeVideoId(url);
    if (!videoId) return null;
    
    const params = new URLSearchParams({
      autoplay: autoplay ? '1' : '0',
      mute: muted ? '1' : '0',
      loop: '1',
      playlist: videoId,
      controls: '0',
      showinfo: '0',
      rel: '0',
      modestbranding: '1',
      // Note: YouTube embed API doesn't directly support playbackRate in URL params
      // We'll need to use postMessage API to control playback speed
    });
    
    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  };

  const embedUrl = getYouTubeEmbedUrl(currentMusic.url, isPlaying, isMuted, playbackRate);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    setIsMuted(!isPlaying); // When starting to play, unmute
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Send commands to YouTube iframe
  const sendYouTubeCommand = (command: string, args: any[] = []) => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: command,
          args: args
        }),
        'https://www.youtube.com'
      );
    }
  };

  // Auto-play when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPlaying(true);
      setIsMuted(false);
    }, 1000); // Start playing after 1 second

    return () => clearTimeout(timer);
  }, []);

  // Set playback speed when iframe loads and when playbackRate changes
  useEffect(() => {
    if (isPlaying && playbackRate !== 1.0) {
      const speedTimer = setTimeout(() => {
        sendYouTubeCommand('setPlaybackRate', [playbackRate]);
      }, 2000); // Wait for video to load

      return () => clearTimeout(speedTimer);
    }
  }, [isPlaying, playbackRate]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Hidden YouTube iframe */}
      {embedUrl && (
        <iframe
          ref={iframeRef}
          src={embedUrl}
          width="0"
          height="0"
          style={{ display: 'none' }}
          allow="autoplay; encrypted-media"
          title={currentMusic.title}
          allowFullScreen
        />
      )}

      {/* Music Player UI */}
      <div className="glass-card rounded-full p-4 border border-primary/30 backdrop-blur-xl">
        <div className="relative">
          {/* Spinning Music Disc */}
          <button
            onClick={togglePlayPause}
            className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 border-2 border-primary/50 hover:border-primary/70 transition-all duration-300 hover:scale-105 group"
          >
            {/* Disc grooves */}
            <div className="absolute inset-2 rounded-full border border-primary/30"></div>
            <div className="absolute inset-4 rounded-full border border-primary/20"></div>
            <div className="absolute inset-6 rounded-full border border-primary/10"></div>
            
            {/* Center hole */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border border-primary/40"></div>
            
            {/* Music icon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Music 
                size={16} 
                className={`text-primary transition-colors duration-300 ${isPlaying ? 'animate-pulse' : ''}`} 
              />
            </div>

            {/* Spinning animation */}
            <div 
              className={`absolute inset-0 rounded-full transition-transform duration-300 ${
                isPlaying ? 'animate-spin' : ''
              }`}
              style={{ animationDuration: '3s' }}
            >
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-transparent via-primary/10 to-transparent"></div>
            </div>
          </button>

          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute}
            className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-background border border-primary/40 hover:border-primary/70 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          >
            {isMuted ? (
              <VolumeX size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
            ) : (
              <Volume2 size={14} className="text-primary group-hover:text-primary-foreground transition-colors" />
            )}
          </button>

          {/* Status indicator */}
          <div className={`absolute -top-2 -left-2 w-3 h-3 rounded-full border-2 border-background transition-all duration-300 ${
            isPlaying ? 'bg-green-500 animate-pulse' : 'bg-muted-foreground'
          }`}></div>

          {/* Speed indicator */}
          {playbackRate !== 1.0 && (
            <div className="absolute -top-2 -right-2 w-6 h-4 rounded-full bg-primary/80 border border-primary text-white text-xs flex items-center justify-center font-bold">
              {playbackRate}x
            </div>
          )}
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-background/90 border border-primary/30 rounded-lg text-xs text-muted-foreground whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {isPlaying ? (isMuted ? 'Unmute' : 'Mute') : 'Play'} {currentMusic.title}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
