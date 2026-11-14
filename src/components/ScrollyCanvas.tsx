"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, MotionValue } from "framer-motion";
import { SEQUENCE_CONFIG, FRAME_URLS } from "@/lib/sequenceConfig";

interface ScrollyCanvasProps {
  onProgressChange?: (progress: number) => void;
  scrollYProgress?: MotionValue<number>;
  children?: React.ReactNode;
}

export default function ScrollyCanvas({
  onProgressChange,
  scrollYProgress: externalScrollProgress,
  children,
}: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentIndexRef = useRef<number>(-1);
  const animFrameIdRef = useRef<number | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [loadPercentage, setLoadPercentage] = useState(0);

  // Fallback internal scroll progress if not supplied externally
  const { scrollYProgress: internalScrollProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollProgress = externalScrollProgress || internalScrollProgress;

  // Draw image with object-fit: cover calculation
  const drawImageCover = useCallback(
    (ctx: CanvasRenderingContext2D, img: HTMLImageElement, canvasWidth: number, canvasHeight: number) => {
      const imgWidth = img.naturalWidth || img.width;
      const imgHeight = img.naturalHeight || img.height;

      if (!imgWidth || !imgHeight) return;

      const hRatio = canvasWidth / imgWidth;
      const vRatio = canvasHeight / imgHeight;
      const ratio = Math.max(hRatio, vRatio);

      const renderWidth = imgWidth * ratio;
      const renderHeight = imgHeight * ratio;

      const offsetX = (canvasWidth - renderWidth) / 2;
      const offsetY = (canvasHeight - renderHeight) / 2;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    },
    []
  );

  // Render a specific frame by index
  const renderFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const safeIndex = Math.max(0, Math.min(index, SEQUENCE_CONFIG.totalFrames - 1));
      const image = imagesRef.current[safeIndex];

      if (image && image.complete && image.naturalWidth > 0) {
        drawImageCover(ctx, image, canvas.width, canvas.height);
        currentIndexRef.current = safeIndex;
      }
    },
    [drawImageCover]
  );

  // Preload all frames on mount
  useEffect(() => {
    let loadedCount = 0;
    const total = SEQUENCE_CONFIG.totalFrames;
    const images: HTMLImageElement[] = [];

    const handleSingleLoad = (index: number) => {
      loadedCount++;
      const pct = Math.round((loadedCount / total) * 100);
      setLoadPercentage(pct);

      // Render the very first frame as soon as it's loaded to prevent blank screen
      if (index === 0 && currentIndexRef.current === -1) {
        renderFrame(0);
      }

      if (loadedCount >= total) {
        setIsLoading(false);
      }
    };

    FRAME_URLS.forEach((url, i) => {
      const img = new Image();
      img.src = url;
      img.onload = () => handleSingleLoad(i);
      img.onerror = () => {
        console.warn(`Failed to load sequence frame: ${url}`);
        handleSingleLoad(i);
      };
      images[i] = img;
    });

    imagesRef.current = images;

    return () => {
      imagesRef.current = [];
    };
  }, [renderFrame]);

  // Handle dynamic canvas resizing with devicePixelRatio
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
      }

      // Re-render current frame with new dimensions
      const activeIdx = currentIndexRef.current >= 0 ? currentIndexRef.current : 0;
      renderFrame(activeIdx);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [renderFrame]);

  // Scrub frames on scroll
  useEffect(() => {
    const unsubscribe = scrollProgress.on("change", (latest) => {
      if (onProgressChange) {
        onProgressChange(latest);
      }

      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }

      animFrameIdRef.current = requestAnimationFrame(() => {
        // Map 0 -> 1 progress to 0 -> (totalFrames - 1)
        const frameIndex = Math.min(
          SEQUENCE_CONFIG.totalFrames - 1,
          Math.max(0, Math.floor(latest * SEQUENCE_CONFIG.totalFrames))
        );

        if (frameIndex !== currentIndexRef.current) {
          renderFrame(frameIndex);
        }
      });
    });

    return () => {
      unsubscribe();
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [scrollProgress, onProgressChange, renderFrame]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500vh] bg-[#070a12] selection:bg-cyan-500/30"
    >
      {/* Sticky viewport container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#070a12]">
        {/* Canvas for high-performance sequence rendering */}
        <canvas
          ref={canvasRef}
          className="w-full h-full block object-cover transition-opacity duration-700 pointer-events-none"
          style={{ opacity: isLoading ? 0.2 : 1 }}
        />

        {/* Cinematic Vignette and Edge Blending Mask */}
        <div
          className="pointer-events-none absolute inset-0 z-[5]"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 35%, rgba(7, 10, 18, 0.4) 65%, rgba(7, 10, 18, 0.95) 100%)",
          }}
        />

        {/* Top Fade (Seamless Navbar blend) */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#070a12] via-[#070a12]/70 to-transparent z-[6]" />

        {/* Bottom Fade (Seamless Work Grid blend) */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#070a12] via-[#070a12]/80 to-transparent z-[6]" />

        {/* Subtle Ambient Lighting Glow Accents */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] z-[4]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] z-[4]" />

        {/* Preloader HUD */}
        {isLoading && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#070a12]/95 backdrop-blur-md">
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-ping" />
                <div className="w-12 h-12 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                <span className="text-[10px] font-mono text-cyan-400 font-bold">
                  {loadPercentage}%
                </span>
              </div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400 font-mono">
                  Loading Frame Sequence
                </p>
                <p className="text-[11px] text-slate-600 font-mono mt-1">
                  Buffering {loadPercentage}% of 101 high-res frames
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Overlays (Parallax text and interactive elements) */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {children}
        </div>
      </div>
    </div>
  );
}
