"use client";
export { addPropertyControls, ControlType, RenderTarget } from "./runtime";
// These interactive components handle reduced motion with motion/react.
// Reduced motion must not put live navigation into Framer's noninteractive editor mode.
export function useIsStaticRenderer() { return false; }
