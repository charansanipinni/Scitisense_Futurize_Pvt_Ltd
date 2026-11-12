"use client";
// Adapted from the Framer component supplied by the site owner.
import { useEffect, useRef } from "react";
import {
  addPropertyControls,
  ControlType,
  useIsStaticRenderer,
} from "./runtime";

export default function TextFlow({
  text = "Pola",
  particleColor = "#FFFFFF",
  backgroundColor = "#000000",
  particleSize = 2,
  particleDensity = 3,
  mouseRadius = 100,
  returnSpeed = 0.05,
  font,
  verticalAlign = "center",
  horizontalAlign = "center",
  style,
}) {
  const canvasRef = useRef(null);
  const isStatic = useIsStaticRenderer();
  const fontSize = parseFloat(font?.fontSize) || 80;
  const fontWeight = font?.fontWeight || "400";
  const fontStyle = font?.fontStyle || "normal";
  const fontFamily = font?.fontFamily || "Inter, sans-serif";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (isStatic || !canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const sample = document.createElement("canvas");
    const sampleContext = sample.getContext("2d", { willReadFrequently: true });
    if (!sampleContext) return;

    let particles = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let lastTime = 0;
    let inView = false;
    const mouse = { x: -1000, y: -1000 };
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerQuery = window.matchMedia("(pointer: fine)");
    const radiusSquared = mouseRadius * mouseRadius;

    function pause() {
      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
    }

    function draw(now) {
      frame = 0;
      const step = lastTime ? Math.min(2, (now - lastTime) / (1000 / 60)) : 1;
      lastTime = now;
      let moving = false;
      context.clearRect(0, 0, width, height);
      context.fillStyle = particleColor;
      context.beginPath();

      for (const particle of particles) {
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distanceSquared = dx * dx + dy * dy;
        if (!motionQuery.matches && distanceSquared < radiusSquared) {
          const distance = Math.sqrt(distanceSquared);
          const force = (1 - distance / mouseRadius) * 2 * step;
          const divisor = distance || 1;
          particle.vx += (dx / divisor) * force;
          particle.vy += (dy / divisor) * force;
        }
        particle.vx += (particle.baseX - particle.x) * returnSpeed * step;
        particle.vy += (particle.baseY - particle.y) * returnSpeed * step;
        const damping = Math.pow(0.86, step);
        particle.vx *= damping;
        particle.vy *= damping;
        particle.x += particle.vx * step;
        particle.y += particle.vy * step;

        const displacement =
          Math.abs(particle.baseX - particle.x) +
          Math.abs(particle.baseY - particle.y);
        if (
          displacement + Math.abs(particle.vx) + Math.abs(particle.vy) >
          0.05
        ) {
          moving = true;
        } else {
          particle.x = particle.baseX;
          particle.y = particle.baseY;
          particle.vx = 0;
          particle.vy = 0;
        }
        context.moveTo(particle.x + particleSize, particle.y);
        context.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2);
      }
      // One canvas fill for the entire word avoids a draw call per particle.
      context.fill();
      if (moving) wake();
    }

    function wake() {
      if (frame || !inView || document.hidden || motionQuery.matches) return;
      frame = requestAnimationFrame(draw);
    }

    function rebuild() {
      const rect = canvas.getBoundingClientRect();
      const nextWidth = Math.round(rect.width);
      const nextHeight = Math.round(rect.height);
      if (
        !nextWidth ||
        !nextHeight ||
        (width === nextWidth && height === nextHeight)
      )
        return;
      pause();
      width = nextWidth;
      height = nextHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      sample.width = width;
      sample.height = height;
      sampleContext.fillStyle = particleColor;
      sampleContext.font = `${fontStyle} ${fontWeight} ${fontSize}px ${fontFamily}`;
      sampleContext.textAlign = horizontalAlign;
      sampleContext.textBaseline = "middle";

      const padding = fontSize * 0.3;
      const maxWidth = Math.max(1, width - padding * 2);
      const lines = [];
      for (const line of text.split("\n")) {
        let current = "";
        for (const word of line.split(" ")) {
          const candidate = current ? `${current} ${word}` : word;
          if (
            current &&
            sampleContext.measureText(candidate).width > maxWidth
          ) {
            lines.push(current);
            current = word;
          } else {
            current = candidate;
          }
        }
        lines.push(current);
      }
      const lineHeight = fontSize * 1.2;
      const totalHeight = lines.length * lineHeight;
      const startY =
        verticalAlign === "top"
          ? padding + lineHeight / 2
          : verticalAlign === "bottom"
            ? height - totalHeight - padding + lineHeight / 2
            : (height - totalHeight) / 2 + lineHeight / 2;
      const textX =
        horizontalAlign === "left"
          ? padding
          : horizontalAlign === "right"
            ? width - padding
            : width / 2;
      lines.forEach((line, index) =>
        sampleContext.fillText(line, textX, startY + index * lineHeight),
      );

      const pixels = sampleContext.getImageData(0, 0, width, height).data;
      const gap = Math.max(2, particleDensity);
      particles = [];
      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          if (pixels[(y * width + x) * 4 + 3] > 128) {
            particles.push({ x, y, baseX: x, baseY: y, vx: 0, vy: 0 });
          }
        }
      }
      draw(performance.now());
    }

    function onPointerMove(event) {
      if (event.pointerType !== "mouse" || !pointerQuery.matches) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      if (!frame) lastTime = 0;
      wake();
    }

    function onPointerLeave() {
      mouse.x = -1000;
      mouse.y = -1000;
      wake();
    }

    function updateVisibility() {
      if (document.hidden || !inView || motionQuery.matches) pause();
      else wake();
    }

    rebuild();
    const resizeObserver = new ResizeObserver(rebuild);
    resizeObserver.observe(canvas);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      updateVisibility();
    });
    visibilityObserver.observe(canvas);
    document.addEventListener("visibilitychange", updateVisibility);
    motionQuery.addEventListener("change", updateVisibility);
    canvas.addEventListener("pointermove", onPointerMove, { passive: true });
    canvas.addEventListener("pointerleave", onPointerLeave);
    return () => {
      pause();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
      motionQuery.removeEventListener("change", updateVisibility);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [
    text,
    particleColor,
    particleSize,
    particleDensity,
    mouseRadius,
    returnSpeed,
    fontSize,
    fontWeight,
    fontStyle,
    fontFamily,
    verticalAlign,
    horizontalAlign,
    isStatic,
  ]);

  if (isStatic) {
    return (
      <div
        style={{
          ...style,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems:
            verticalAlign === "top"
              ? "flex-start"
              : verticalAlign === "bottom"
                ? "flex-end"
                : "center",
          justifyContent:
            horizontalAlign === "left"
              ? "flex-start"
              : horizontalAlign === "right"
                ? "flex-end"
                : "center",
          backgroundColor,
          color: particleColor,
          textAlign: horizontalAlign,
          whiteSpace: "pre-wrap",
          overflowWrap: "break-word",
          padding: "16px",
          ...font,
        }}
      >
        {text}
      </div>
    );
  }
  return (
    <canvas
      ref={canvasRef}
      style={{ ...style, width: "100%", height: "100%", backgroundColor }}
    />
  );
}
addPropertyControls(TextFlow, {
  text: {
    type: ControlType.String,
    title: "Text",
    defaultValue: "Pola",
    displayTextArea: true,
  },
  font: {
    type: ControlType.Font,
    title: "Font",
    controls: "extended",
    defaultFontType: "sans-serif",
    defaultValue: {
      fontSize: "80px",
      variant: "Regular",
      letterSpacing: "-0.02em",
      lineHeight: "1.2em",
    },
  },
  horizontalAlign: {
    type: ControlType.Enum,
    title: "Horizontal",
    options: ["left", "center", "right"],
    optionTitles: ["Left", "Center", "Right"],
    defaultValue: "center",
    displaySegmentedControl: true,
  },
  verticalAlign: {
    type: ControlType.Enum,
    title: "Vertical",
    options: ["top", "center", "bottom"],
    optionTitles: ["Top", "Center", "Bottom"],
    defaultValue: "center",
    displaySegmentedControl: true,
  },
  particleColor: {
    type: ControlType.Color,
    title: "Particle Color",
    defaultValue: "#FFFFFF",
  },
  backgroundColor: {
    type: ControlType.Color,
    title: "Background",
    defaultValue: "#000000",
  },
  particleSize: {
    type: ControlType.Number,
    title: "Particle Size",
    defaultValue: 2,
    min: 1,
    max: 10,
    step: 0.5,
    unit: "px",
  },
  particleDensity: {
    type: ControlType.Number,
    title: "Density",
    description: "Lower values create more particles (denser text)",
    defaultValue: 3,
    min: 1,
    max: 10,
    step: 1,
    unit: "px",
  },
  mouseRadius: {
    type: ControlType.Number,
    title: "Mouse Radius",
    defaultValue: 100,
    min: 50,
    max: 300,
    step: 10,
    unit: "px",
  },
  returnSpeed: {
    type: ControlType.Number,
    title: "Return Speed",
    defaultValue: 0.05,
    min: 0.01,
    max: 0.2,
    step: 0.01,
  },
});
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "TextFlow",
      slots: [],
      annotations: {
        framerContractVersion: "1",
        framerIntrinsicHeight: "500",
        framerIntrinsicWidth: "500",
        framerSupportedLayoutHeight: "fixed",
        framerSupportedLayoutWidth: "fixed",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
// Original source map: ./ParticleText.map
