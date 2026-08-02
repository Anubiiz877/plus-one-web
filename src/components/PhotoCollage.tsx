"use client";

import { useEffect, useRef } from "react";

const leftPhotos = [
  "/imagenes/photo1.jpeg",
  "/imagenes/photo2.jpeg",
  "/imagenes/photo3.jpeg",
  "/imagenes/photo4.jpeg",
  "/imagenes/photo5.jpeg",
];

const rightPhotos = [
  "/imagenes/photo6.jpeg",
  "/imagenes/photo7.jpeg",
  "/imagenes/photo8.jpeg",
  "/imagenes/photo9.jpeg",
  "/imagenes/photo10.jpeg",
];

const leftRotations = [-1.8, 2.2, -1.2, 2.8, -2];
const rightRotations = [1.8, -2.8, 1.2, -1.5, 2];

function PhotoColumn({
  images,
  rotations,
  direction,
}: {
  images: string[];
  rotations: number[];
  direction: "up" | "down";
}) {
  const doubled = [...images, ...images];
  const doubledRotations = [...rotations, ...rotations];
  const containerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const speed = 28;
    let halfH = 0;
    let running = true;

    const measure = () => {
      halfH = el.scrollHeight / 2;
    };

    const initPos = () => {
      measure();
      if (halfH > 0) {
        posRef.current = direction === "down" ? -halfH : 0;
        el.style.transform = `translateY(${posRef.current}px)`;
      }
    };

    initPos();

    let lastTime = performance.now();

    const animate = (time: number) => {
      if (!running) return;

      const dt = (time - lastTime) / 1000;
      lastTime = time;

      if (halfH <= 0) {
        measure();
        if (halfH > 0 && direction === "down") {
          posRef.current = -halfH;
        }
      }

      if (halfH > 0) {
        if (direction === "up") {
          posRef.current -= speed * dt;
          if (posRef.current <= -halfH) {
            posRef.current += halfH;
          }
        } else {
          posRef.current += speed * dt;
          if (posRef.current >= 0) {
            posRef.current -= halfH;
          }
        }
        el.style.transform = `translateY(${posRef.current}px)`;
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
    return () => {
      running = false;
    };
  }, [direction]);

  return (
    <div ref={containerRef} className="flex flex-col" style={{ willChange: "transform" }}>
      {doubled.map((src, i) => (
        <div key={i} className="pb-5">
          <div
            className="w-36 rounded-xl bg-white/90 p-2.5 shadow-lg shadow-black/5 ring-1 ring-black/5 backdrop-blur-sm dark:bg-neutral-800/90 dark:ring-white/10"
            style={{ transform: `rotate(${doubledRotations[i]}deg)` }}
          >
            <div className="aspect-[3/4] w-full overflow-hidden rounded-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PhotoCollage() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-y-0 left-0 hidden w-52 overflow-hidden pr-8 xl:flex z-0 justify-end"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      >
        <PhotoColumn
          images={leftPhotos}
          rotations={leftRotations}
          direction="down"
        />
      </div>

      <div
        className="pointer-events-none fixed inset-y-0 right-0 hidden w-52 overflow-hidden pl-8 xl:flex z-0 justify-start"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      >
        <PhotoColumn
          images={rightPhotos}
          rotations={rightRotations}
          direction="up"
        />
      </div>
    </>
  );
}
