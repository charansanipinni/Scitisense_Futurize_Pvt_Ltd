"use client";
// Adapted from the owner-supplied Codex Reveal / AsciiWaterReveal Framer component.
import { useEffect, useRef } from "react";
import { useIsStaticRenderer } from "./runtime";

export default function CodexReveal() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const isStatic = useIsStaticRenderer();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const hero = container?.parentElement;
    const eventTarget = hero?.closest(".hero-composition") || hero;
    const context = canvas?.getContext("2d");
    if (!context || !hero) return;

    const fontSize = 14;
    const colSpacing = 14;
    const rowSpacing = 19;
    const damping = 0.94;
    const waveSpeed = 0.48;
    const characters = ["\u00b7", ".", "-", "~", "=", "+", "x", "*", "o"];
    const alphaSteps = 14;
    const glyphSize = 22;
    const atlas = document.createElement("canvas");
    atlas.width = glyphSize * characters.length;
    atlas.height = glyphSize * (alphaSteps + 1);
    const atlasContext = atlas.getContext("2d");
    if (!atlasContext) return;
    atlasContext.font = `${fontSize}px monospace`;
    atlasContext.textBaseline = "middle";
    atlasContext.textAlign = "center";
    for (let alpha = 1; alpha <= alphaSteps; alpha++) {
      atlasContext.fillStyle = `rgba(173, 203, 229, ${(alpha / alphaSteps) * 0.35})`;
      characters.forEach((character, index) => {
        atlasContext.fillText(
          character,
          (index + 0.5) * glyphSize,
          (alpha + 0.5) * glyphSize,
        );
      });
    }

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let current;
    let previous;
    let frame = 0;
    let ambientTimer = 0;
    let visible = false;
    let lastTime = 0;
    let accumulatedTime = 0;
    let sequence = 0;
    const mouse = { x: -1, y: -1, down: false };

    function stop() {
      cancelAnimationFrame(frame);
      clearTimeout(ambientTimer);
      frame = 0;
      ambientTimer = 0;
      lastTime = 0;
      accumulatedTime = 0;
    }

    function wake() {
      if (frame || !visible || document.hidden || isStatic) return;
      frame = requestAnimationFrame(render);
    }

    function drop(x, y, radius, strength) {
      const gridX = Math.floor(x / colSpacing);
      const gridY = Math.floor(y / rowSpacing);
      const radiusSquared = radius * radius;
      for (let row = -radius; row <= radius; row++) {
        for (let col = -radius; col <= radius; col++) {
          const nx = gridX + col;
          const ny = gridY + row;
          const distance = col * col + row * row;
          if (
            nx > 0 &&
            nx < cols - 1 &&
            ny > 0 &&
            ny < rows - 1 &&
            distance < radiusSquared
          ) {
            current[ny * cols + nx] +=
              strength * (1 - distance / radiusSquared);
          }
        }
      }
      wake();
    }

    function stepPhysics() {
      for (let y = 1; y < rows - 1; y++) {
        const row = y * cols;
        for (let x = 1; x < cols - 1; x++) {
          const index = row + x;
          previous[index] =
            ((current[index - 1] +
              current[index + 1] +
              current[index - cols] +
              current[index + cols]) *
              waveSpeed -
              previous[index]) *
            damping;
        }
      }
      const swap = previous;
      previous = current;
      current = swap;
    }

    function paint() {
      context.clearRect(0, 0, width, height);
      let active = false;
      for (let y = 1; y < rows - 1; y++) {
        for (let x = 1; x < cols - 1; x++) {
          const intensity = Math.abs(current[y * cols + x]);
          const alpha = Math.min(Math.floor(intensity * 6), alphaSteps);
          if (!alpha) continue;
          active = true;
          const character = Math.min(
            Math.floor(intensity * 2.2),
            characters.length - 1,
          );
          context.drawImage(
            atlas,
            character * glyphSize,
            alpha * glyphSize,
            glyphSize,
            glyphSize,
            x * colSpacing - glyphSize / 2,
            y * rowSpacing - glyphSize / 2,
            glyphSize,
            glyphSize,
          );
        }
      }
      return active;
    }

    function render(now) {
      frame = 0;
      // Keep the source's wave physics at 60 steps per second on every refresh rate.
      const elapsed = lastTime ? Math.min(50, now - lastTime) : 1000 / 60;
      lastTime = now;
      accumulatedTime += elapsed;
      const steps = Math.floor(accumulatedTime / (1000 / 60));
      accumulatedTime -= steps * (1000 / 60);
      if (!steps) {
        wake();
        return;
      }
      for (let index = 0; index < steps; index++) stepPhysics();
      if (paint()) wake();
      else {
        lastTime = 0;
        accumulatedTime = 0;
      }
    }

    function resize() {
      const nextWidth = Math.round(container.clientWidth);
      const nextHeight = Math.round(container.clientHeight);
      if (
        !nextWidth ||
        !nextHeight ||
        (nextWidth === width && nextHeight === height)
      )
        return;
      stop();
      width = nextWidth;
      height = nextHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / colSpacing) + 2;
      rows = Math.ceil(height / rowSpacing) + 2;
      current = new Float32Array(cols * rows);
      previous = new Float32Array(cols * rows);
      drop(width * 0.76, height * 0.44, 6, 7);
      drop(width * 0.2, height * 0.75, 5, 5);
      if (isStatic) {
        for (let step = 0; step < 12; step++) stepPhysics();
        paint();
      } else {
        startAmbient();
      }
    }

    function startAmbient() {
      if (ambientTimer || !visible || document.hidden || isStatic) return;
      ambientTimer = window.setTimeout(() => {
        ambientTimer = 0;
        sequence++;
        drop(width * (0.2 + (sequence % 3) * 0.3), height * 0.55, 5, 5);
        startAmbient();
      }, 7000);
    }

    function syncVisibility() {
      if (!visible || document.hidden) stop();
      else {
        wake();
        startAmbient();
      }
    }

    function onPointerMove(event) {
      if (event.pointerType !== "mouse" || !visible || document.hidden) return;
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (mouse.x >= 0) {
        const distance = Math.hypot(x - mouse.x, y - mouse.y);
        if (distance > 2)
          drop(x, y, mouse.down ? 3 : 2, Math.min(distance * 0.12, 3.5));
      }
      mouse.x = x;
      mouse.y = y;
    }

    function onPointerDown(event) {
      if (!visible || document.hidden) return;
      const rect = container.getBoundingClientRect();
      mouse.down = true;
      drop(event.clientX - rect.left, event.clientY - rect.top, 5, 7);
    }

    function onPointerUp() {
      mouse.down = false;
    }
    function onPointerLeave() {
      mouse.x = -1;
      mouse.y = -1;
      mouse.down = false;
    }

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncVisibility();
    });
    visibilityObserver.observe(hero);
    document.addEventListener("visibilitychange", syncVisibility);
    if (!isStatic) {
      eventTarget.addEventListener("pointermove", onPointerMove, {
        passive: true,
      });
      eventTarget.addEventListener("pointerdown", onPointerDown, {
        passive: true,
      });
      eventTarget.addEventListener("pointerleave", onPointerLeave);
      window.addEventListener("pointerup", onPointerUp, { passive: true });
      window.addEventListener("pointercancel", onPointerUp, { passive: true });
    }
    return () => {
      stop();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", syncVisibility);
      eventTarget.removeEventListener("pointermove", onPointerMove);
      eventTarget.removeEventListener("pointerdown", onPointerDown);
      eventTarget.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, [isStatic]);

  return (
    <div
      ref={containerRef}
      className="hero-reveal-background"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
