"use client";

import { useEffect } from "react";
import { Accessibility } from "accessibility";

export default function AccessibilityWidget() {
    useEffect(() => {
        // Only initialize on the client
        if (typeof window !== "undefined") {
            try {
                // To avoid multiple instances during React strict mode renders, checking if it already exists
                if (!document.querySelector('.accessibility-menu')) {
                    new Accessibility({
                        // Explicitly set language for the text-to-speech feature to ensure sound works properly
                        // The library requires it in both the root and the `language` nested object to pass internal voice checks
                        textToSpeechLang: 'en-US',
                        speechToTextLang: 'en-US',
                        language: {
                            textToSpeechLang: 'en-US',
                            speechToTextLang: 'en-US'
                        }
                    });
                }
            } catch (error) {
                console.error("Failed to initialize accessibility widget", error);
            }
        }
    }, []);

    return null; // The widget injects itself into the DOM globally
}
