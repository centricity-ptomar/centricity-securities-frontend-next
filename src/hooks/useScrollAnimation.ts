import { useEffect, useRef } from 'react';

export function useScrollAnimation<T extends HTMLElement>(
    animationType: string = 'fade-up'
) {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        element.setAttribute('data-animate', animationType);
        element.classList.add('animate-hidden');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-visible');
                        entry.target.classList.remove('animate-hidden');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { root: null, threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [animationType]);

    return ref;
}
