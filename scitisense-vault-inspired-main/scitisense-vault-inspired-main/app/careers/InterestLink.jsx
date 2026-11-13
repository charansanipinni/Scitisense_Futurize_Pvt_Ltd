"use client";

export function openInterestForm(event) {
  const form = document.getElementById("apply");
  if (!form) return;
  event.preventDefault();
  event.stopPropagation();
  if (window.location.hash !== "#apply") {
    window.history.pushState(null, "", "#apply");
  }
  form.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    block: "start",
  });
  document.getElementById("career-name")?.focus({ preventScroll: true });
}

export default function InterestLink({ children, className }) {
  return <a href="#apply" className={className} onClick={openInterestForm}>{children}</a>;
}
