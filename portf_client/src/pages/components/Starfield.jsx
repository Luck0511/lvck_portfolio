import { useMemo } from "react";
import { generateStars } from "../../utils/stars.js";
import "./Starfield.scss";

export const Starfield = ({ density = 70 }) => {
    const stars = useMemo(() => generateStars(density), [density]);

    return (
        <div className="starfield">
            {stars.map((s) => (
                <span
                    key={s.id}
                    className="star"
                    style={{
                        top: s.top,
                        left: s.left,
                        width: s.size,
                        height: s.size,
                        animationDuration: s.animationDuration,
                        animationDelay: s.animationDelay
                    }}
                />
            ))}
        </div>
    );
};
