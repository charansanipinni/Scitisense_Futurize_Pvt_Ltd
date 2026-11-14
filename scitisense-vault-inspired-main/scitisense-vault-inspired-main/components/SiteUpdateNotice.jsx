"use client";

import { useEffect, useState } from "react";

export default function SiteUpdateNotice() {
    const [updateAvailable, setUpdateAvailable] = useState(false);

    useEffect(() => {
        const version = process.env.NEXT_PUBLIC_SITE_VERSION;
        if (process.env.NODE_ENV !== "production" || !version) return;
        let lastCheck = 0;
        let controller;
        let stopped = false;

        const checkVersion = async () => {
            if (document.hidden || !navigator.onLine || controller || Date.now() - lastCheck < 30000) return;
            lastCheck = Date.now();
            controller = new AbortController();
            const timeout = window.setTimeout(() => controller?.abort(), 10000);
            try {
                const response = await fetch(`/api/version?t=${Date.now()}`, {
                    cache: "no-store",
                    signal: controller.signal,
                });
                if (!response.ok) return;
                const latest = await response.json();
                if (!stopped && typeof latest.version === "string" && latest.version && latest.version !== version) {
                    setUpdateAvailable(true);
                }
            } catch {
                // Retry on the next check after offline or interrupted requests.
            } finally {
                window.clearTimeout(timeout);
                controller = undefined;
            }
        };

        checkVersion();
        const interval = window.setInterval(checkVersion, 5 * 60 * 1000);
        window.addEventListener("focus", checkVersion);
        window.addEventListener("online", checkVersion);
        window.addEventListener("pageshow", checkVersion);
        document.addEventListener("visibilitychange", checkVersion);
        return () => {
            stopped = true;
            controller?.abort();
            window.clearInterval(interval);
            window.removeEventListener("focus", checkVersion);
            window.removeEventListener("online", checkVersion);
            window.removeEventListener("pageshow", checkVersion);
            document.removeEventListener("visibilitychange", checkVersion);
        };
    }, []);

    if (!updateAvailable) return null;
    return <aside className="site-update-notice" aria-label="Website update">
        <p role="status">A website update is available. Finish any form, then refresh to see the latest changes.</p>
        <button type="button" onClick={() => window.location.reload()}>Refresh website</button>
    </aside>;
}
