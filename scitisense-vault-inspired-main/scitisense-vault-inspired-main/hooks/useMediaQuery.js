"use client";
import { useCallback, useSyncExternalStore } from "react";

const serverSnapshot = () => false;
const subscribeMounted = () => () => {};
const clientSnapshot = () => true;

export function useMounted() {
    return useSyncExternalStore(subscribeMounted, clientSnapshot, serverSnapshot);
}

export function useMediaQuery(query) {
    const subscribe = useCallback((notify) => {
        const media = window.matchMedia(query);
        media.addEventListener("change", notify);
        return () => media.removeEventListener("change", notify);
    }, [query]);
    const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);
    return useSyncExternalStore(subscribe, getSnapshot, serverSnapshot);
}
