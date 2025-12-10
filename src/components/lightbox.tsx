"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Download, Info } from "lucide-react";

interface LightboxImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  author?: string;
  year?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, currentIndex, isOpen, onClose, onNavigate }: LightboxProps) {
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (currentIndex > 0) {
            onNavigate(currentIndex - 1);
          }
          break;
        case 'ArrowRight':
          if (currentIndex < images.length - 1) {
            onNavigate(currentIndex + 1);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = currentImage.src;
    link.download = `${currentImage.title || 'imagen'}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={onClose}
      />

      {/* Controles superiores */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-4 text-white">
          <span className="text-sm">
            {currentIndex + 1} de {images.length}
          </span>
          {currentImage.title && (
            <h3 className="font-serif font-medium">
              {currentImage.title}
            </h3>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-colors"
            title="Información"
          >
            <Info className="h-5 w-5" />
          </button>

          <button
            onClick={handleDownload}
            className="p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-colors"
            title="Descargar imagen"
          >
            <Download className="h-5 w-5" />
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-colors"
            title="Cerrar (Esc)"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Navegación izquierda */}
      {currentIndex > 0 && (
        <button
          onClick={handlePrevious}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-colors z-10"
          title="Imagen anterior (←)"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {/* Imagen principal */}
      <div className="relative max-w-7xl max-h-[80vh] mx-auto px-20">
        <div className="relative w-full h-full">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            width={1200}
            height={800}
            className="max-w-full max-h-[80vh] object-contain"
            priority
          />
        </div>
      </div>

      {/* Navegación derecha */}
      {currentIndex < images.length - 1 && (
        <button
          onClick={handleNext}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-colors z-10"
          title="Siguiente imagen (→)"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}

      {/* Panel de información */}
      {showInfo && currentImage && (
        <div className="absolute bottom-6 left-6 right-6 bg-black bg-opacity-80 text-white p-6 rounded-lg z-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              {currentImage.title && (
                <h3 className="font-serif font-semibold text-lg mb-2">
                  {currentImage.title}
                </h3>
              )}
              {currentImage.description && (
                <p className="text-sm leading-relaxed text-neutral-300">
                  {currentImage.description}
                </p>
              )}
            </div>

            <div className="space-y-2 text-sm">
              {currentImage.author && (
                <div>
                  <span className="text-neutral-400">Autor:</span>
                  <span className="ml-2">{currentImage.author}</span>
                </div>
              )}
              {currentImage.year && (
                <div>
                  <span className="text-neutral-400">Año:</span>
                  <span className="ml-2">{currentImage.year}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Miniaturas inferiores */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => onNavigate(index)}
            className={`w-12 h-12 rounded overflow-hidden transition-opacity ${
              index === currentIndex ? 'opacity-100' : 'opacity-50 hover:opacity-75'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
