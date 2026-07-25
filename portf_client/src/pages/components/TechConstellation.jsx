import "./TechConstellation.scss";

const SLOTS = [
    { x: 150, y: 70 },
    { x: 219, y: 190 },
    { x: 81, y: 190 },
    { x: 150, y: 10 },
    { x: 290, y: 150 },
    { x: 150, y: 290 },
    { x: 10, y: 150 }
];

export const TechConstellation = ({ skills = [] }) => {
    const chips = skills.slice(0, SLOTS.length).map((label, i) => ({ label, ...SLOTS[i] }));

    return (
        <div className="constellation">
            <div className="constellation-ring constellation-ring-outer" />
            <div className="constellation-ring constellation-ring-inner" />
            <svg width="300" height="300" className="constellation-lines">
                {chips.map((c) => (
                    <line
                        key={c.label}
                        x1="150"
                        y1="150"
                        x2={c.x}
                        y2={c.y}
                        stroke="var(--line-bright)"
                        strokeWidth="1"
                    />
                ))}
            </svg>
            <div className="constellation-core">core</div>
            {chips.map((c) => (
                <div
                    key={c.label}
                    className="constellation-chip"
                    style={{ left: `${c.x}px`, top: `${c.y}px` }}
                >
                    {c.label}
                </div>
            ))}
        </div>
    );
};
