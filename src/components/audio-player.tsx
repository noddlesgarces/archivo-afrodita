"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Download, RotateCcw } from "lucide-react";

interface AudioTrack {
  id: string;
  title: string;
  artist?: string;
  duration?: string;
  src: string; // En un caso real, sería una URL real de audio
  description?: string;
}

interface AudioPlayerProps {
  track: AudioTrack;
  autoPlay?: boolean;
  showDownload?: boolean;
}

export default function AudioPlayer({ track, autoPlay = false, showDownload = true }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsLoading(false);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const progressBar = progressRef.current;
    if (!audio || !progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * duration;

    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.volume = volume;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const resetAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = 0;
    setCurrentTime(0);
    setIsPlaying(false);
    audio.pause();
  };

  const handleDownload = () => {
    // En un caso real, esto sería una URL de descarga válida
    const link = document.createElement('a');
    link.href = track.src;
    link.download = `${track.title}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-white border border-neutral-200 p-6 space-y-4">
      {/* Audio element (hidden) */}
      <audio
        ref={audioRef}
        src={track.src}
        preload="metadata"
        autoPlay={autoPlay}
      />

      {/* Información del track */}
      <div className="space-y-2">
        <h3 className="font-serif font-semibold text-neutral-900">
          {track.title}
        </h3>
        {track.artist && (
          <p className="text-sm text-neutral-600">
            {track.artist}
          </p>
        )}
        {track.description && (
          <p className="text-sm text-neutral-600 leading-relaxed">
            {track.description}
          </p>
        )}
      </div>

      {/* Controles principales */}
      <div className="flex items-center gap-4">
        <button
          onClick={togglePlayPause}
          disabled={isLoading}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 text-white hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5 ml-0.5" />
          )}
        </button>

        <button
          onClick={resetAudio}
          className="p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
          title="Reiniciar"
        >
          <RotateCcw className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2 text-sm text-neutral-600">
          <span>{formatTime(currentTime)}</span>
          <span>/</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Barra de progreso */}
      <div className="space-y-2">
        <div
          ref={progressRef}
          onClick={handleProgressClick}
          className="w-full h-2 bg-neutral-200 rounded-full cursor-pointer group"
        >
          <div
            className="h-full bg-neutral-900 rounded-full transition-all duration-150 group-hover:bg-neutral-700"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Controles secundarios */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMute}
            className="p-1 text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-20 h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {showDownload && (
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-3 py-1 text-xs font-medium text-neutral-600 hover:text-neutral-900 border border-neutral-300 hover:border-neutral-400 transition-colors"
          >
            <Download className="h-3 w-3" />
            Descargar
          </button>
        )}
      </div>
    </div>
  );
}

// Componente para una lista de pistas de audio
interface AudioPlaylistProps {
  tracks: AudioTrack[];
  title?: string;
}

export function AudioPlaylist({ tracks, title }: AudioPlaylistProps) {
  const [currentTrack, setCurrentTrack] = useState(0);

  if (tracks.length === 0) return null;

  return (
    <div className="space-y-6">
      {title && (
        <h2 className="text-xl font-serif font-semibold text-neutral-900">
          {title}
        </h2>
      )}

      {tracks.length > 1 && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-neutral-700">
            Lista de reproducción
          </h3>
          <div className="space-y-1">
            {tracks.map((track, index) => (
              <button
                key={track.id}
                onClick={() => setCurrentTrack(index)}
                className={`w-full text-left p-2 text-sm transition-colors ${
                  index === currentTrack
                    ? 'bg-neutral-100 text-neutral-900'
                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                }`}
              >
                <div className="font-medium">{track.title}</div>
                {track.artist && (
                  <div className="text-xs text-neutral-500">{track.artist}</div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      <AudioPlayer
        track={tracks[currentTrack]}
        key={tracks[currentTrack].id}
      />
    </div>
  );
}
