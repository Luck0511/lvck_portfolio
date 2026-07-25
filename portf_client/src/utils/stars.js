export const generateStars = (count = 70, seed = 42) => {
    let s = seed;
    const rand = () => {
        s = (s * 9301 + 49297) % 233280;
        return s / 233280;
    };
    return Array.from({ length: Math.round(count) }).map((_, i) => {
        const size = 1 + rand() * 1.8;
        const duration = 3 + rand() * 4;
        const delay = rand() * 6;
        return {
            id: i,
            top: `${(rand() * 100).toFixed(2)}%`,
            left: `${(rand() * 100).toFixed(2)}%`,
            size: `${size.toFixed(1)}px`,
            animationDuration: `${duration.toFixed(1)}s`,
            animationDelay: `${delay.toFixed(1)}s`
        };
    });
};
