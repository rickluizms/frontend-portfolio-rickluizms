"use client";

import { useState, useEffect, useRef } from "react";
import { HERO_SUFFIXES } from "@/lib/mock-data";

const TYPING_SPEED = 111;
const PAUSE_AFTER_TYPED = 2369;
const PAUSE_AFTER_DELETED = 639;

function useTypingEffect(prefix: string, suffixes: string[]) {
    const [displayPrefix, setDisplayPrefix] = useState("");
    const [displaySuffix, setDisplaySuffix] = useState("");
    const [prefixDone, setPrefixDone] = useState(false);

    const suffixIndex = useRef(0);
    const charIndex = useRef(0);
    const isDeleting = useRef(false);
    const isPaused = useRef(false);

    // Phase 1: Type the prefix
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            i++;
            setDisplayPrefix(prefix.slice(0, i));
            if (i >= prefix.length) {
                clearInterval(interval);
                setPrefixDone(true);
            }
        }, TYPING_SPEED);

        return () => clearInterval(interval);
    }, [prefix]);

    // Phase 2: Cycle through suffixes
    useEffect(() => {
        if (!prefixDone) return;

        const interval = setInterval(() => {
            if (isPaused.current) return;

            const currentSuffix = suffixes[suffixIndex.current];

            if (!isDeleting.current) {
                // Typing
                charIndex.current++;
                setDisplaySuffix(currentSuffix.slice(0, charIndex.current));

                if (charIndex.current >= currentSuffix.length) {
                    isPaused.current = true;
                    setTimeout(() => {
                        isDeleting.current = true;
                        isPaused.current = false;
                    }, PAUSE_AFTER_TYPED);
                }
            } else {
                // Deleting
                charIndex.current--;
                setDisplaySuffix(currentSuffix.slice(0, charIndex.current));

                if (charIndex.current <= 0) {
                    isDeleting.current = false;
                    suffixIndex.current =
                        (suffixIndex.current + 1) % suffixes.length;
                    isPaused.current = true;
                    setTimeout(() => {
                        isPaused.current = false;
                    }, PAUSE_AFTER_DELETED);
                }
            }
        }, TYPING_SPEED);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [prefixDone]);

    return {
        displayText: displayPrefix + displaySuffix,
        prefixDone,
    };
}

export function Hero() {
    const { displayText, prefixDone } = useTypingEffect("Olá, eu sou ", HERO_SUFFIXES);

    const [showSubtitle, setShowSubtitle] = useState(false);

    useEffect(() => {
        if (prefixDone) {
            const timeout = setTimeout(() => setShowSubtitle(true), 400);
            return () => clearTimeout(timeout);
        }
    }, [prefixDone]);

    return (
        <section className="flex min-h-screen items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
                    {displayText}
                    <span className="inline-block w-[3px] ml-1 h-[1em] align-middle bg-primary animate-blink" />
                </h1>

                <p
                    className={`mt-6 text-lg text-muted-foreground sm:text-xl md:text-2xl transition-all duration-700 ease-out ${showSubtitle
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                        }`}
                >
                    Bem vindo ao meu portfólio
                </p>
            </div>
        </section>
    );
}