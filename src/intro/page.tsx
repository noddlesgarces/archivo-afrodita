'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const VIDEO_URL =
  'https://app.hera.video/api/remote-file?url=https%3A%2F%2Fstorage.googleapis.com%2Fhera-video%2Fpreview%2Fdc1826f4-bb46-401d-a01c-d8d566c7ba6c.html%3Ft%3D1760643338336&fps=30&ar=16/9';

export default function IntroPage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [canInteract, setCanInteract] = useState(false);

  // Redirección común (marca cookie y navega a /)
  const goHome = () => {
    // Cookie por 7 días; ajusta Max-Age si quieres
    document.cookie = `seenIntro=1; Path=/; Max-Age=${7 * 24 * 60 * 60}`;
    router.replace('/');
  };

  // Si ya había cookie, no mostrar intro
  useEffect(() => {
    if (document.cookie.includes('seenIntro=1')) {
      router.replace('/');
    } else {
      setCanInteract(true);
    }
  }, [router]);

  // Autoplay fallback en móviles: intenta play() después de interacción mínima
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => {
      v.play().catch(() => {/* en iOS puede requerir otra interacción */});
    };
    // Intento inicial
    tryPlay();
    // Intento tras primer toque/click
    const onFirst = () => { tryPlay(); document.removeEventListener('touchstart', onFirst); document.removeEventListener('click', onFirst); };
    document.addEventListener('touchstart', onFirst, { once: true });
    document.addEventListener('click', onFirst, { once: true });
    return () => {
      document.removeEventListener('touchstart', onFirst);
      document.removeEventListener('click', onFirst);
    };
  }, [canInteract]);

  if (!canInteract) return null;

  return (
    <main className="fixed inset-0 bg-black">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={VIDEO_URL}
        autoPlay
        muted
        playsInline
        // Si quieres que no se repita, deja sin loop; si quieres bucle, añade loop
        onEnded={goHome}
      />
      {/* Gradiente y controles superpuestos */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      <div className="absolute bottom-6 right-6 flex items-center gap-3">
        <button
          onClick={goHome}
          className="pointer-events-auto rounded-full bg-white/90 px-4 py-2 text-sm font-medium shadow hover:bg-white"
        >
          Saltar intro
        </button>
      </div>
    </main>
  );
}
