"use client";
import { useSyncExternalStore } from "react";
// Framer editor controls have no runtime role in Next.js. Preserve the
// supplied animation code while replacing only the editor-specific APIs.
export const ControlType = new Proxy({}, { get: (_, key) => key });
export function addPropertyControls() {}
export const RenderTarget = { current: () => "preview", canvas: "canvas" };
const subscribe = (listener) => {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", listener);
  return () => media.removeEventListener("change", listener);
};
export function useIsStaticRenderer() {
  return useSyncExternalStore(subscribe, () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, () => false);
}
