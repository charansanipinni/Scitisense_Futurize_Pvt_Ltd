"use client";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import ContactForm from "./ContactForm";

export default function WorkshopEnquiryButton({ className, children }) {
  const dialogRef = useRef(null);
  const titleId = useId();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function openForm() {
    const dialog = dialogRef.current;
    dialog.showModal();
    setOpen(true);
    dialog.scrollTop = 0;
    dialog.querySelector('input[name="name"]').focus({ preventScroll: true });
  }

  return (
    <>
      <button type="button" className={className} onClick={openForm}>
        {children}
        <ArrowUpRight size={18} aria-hidden="true" />
      </button>
      <dialog
        ref={dialogRef}
        className="workshop-dialog"
        aria-labelledby={titleId}
        data-lenis-prevent
        onClose={() => setOpen(false)}
      >
        <div className="workshop-dialog-header">
          <h2 id={titleId}>Discuss a workshop</h2>
          <button
            type="button"
            className="workshop-dialog-close"
            aria-label="Close workshop form"
            onClick={() => dialogRef.current.close()}
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <div className="workshop-dialog-content">
          <ContactForm
            initialService="Training & Consultancy"
            messagePlaceholder="Workshop topic, audience, preferred dates and group size"
          />
        </div>
      </dialog>
    </>
  );
}
