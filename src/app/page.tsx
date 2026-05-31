"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SplashPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleIngresar = () => {
    router.push("/home");
  };

  // Retorno prematuro durante la hidratación del lado del servidor
  if (!mounted) {
    return <div style={{ background: "#0a0a0a", position: "fixed", inset: 0 }} />;
  }

  return (
    <div className="splash-root">
      {/* Imagen de fondo con animación Ken Burns */}
      <div className="splash-bg" />

      {/* Overlay oscuro */}
      <div className="splash-overlay" />

      {/* Contenido */}
      <div className={`splash-content ${visible ? "splash-visible" : ""}`}>
        <p className="splash-eyebrow">Archivo Histórico</p>
        <h1 className="splash-title">Sindicato<br />Afrodita</h1>
        <div className="splash-divider" />
        <button className="splash-btn" onClick={handleIngresar}>
          Ingresar
        </button>
      </div>

      <style jsx>{`
        .splash-root {
          position: fixed;
          inset: 0;
          overflow: hidden;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .splash-bg {
          position: absolute;
          inset: -10%;
          background-image: url('https://cdn.archivoafrodita.cl/imagenes/1.webp');
          background-size: cover;
          background-position: center;
          filter: grayscale(60%) brightness(0.5);
          animation: kenburns 20s ease-in-out infinite alternate;
        }

        @keyframes kenburns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.15) translate(-2%, -2%);
          }
        }

        .splash-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.6) 60%,
            rgba(0, 0, 0, 0.85) 100%
          );
        }

        .splash-content {
          position: relative;
          z-index: 10;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 1.2s ease, transform 1.2s ease;
        }

        .splash-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .splash-eyebrow {
          font-family: 'Georgia', serif;
          font-size: 0.75rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }

        .splash-title {
          font-family: 'Georgia', serif;
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 400;
          color: #ffffff;
          line-height: 1.1;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .splash-divider {
          width: 40px;
          height: 1px;
          background: rgba(255, 255, 255, 0.3);
        }

        .splash-btn {
          font-family: 'Georgia', serif;
          font-size: 0.8rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #ffffff;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.4);
          padding: 0.85rem 2.5rem;
          cursor: pointer;
          transition: background 0.3s ease, border-color 0.3s ease;
          margin-top: 0.5rem;
        }

        .splash-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </div>
  );
}