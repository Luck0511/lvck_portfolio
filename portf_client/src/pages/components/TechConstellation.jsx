import { useState, useEffect } from "react";

import "./TechConstellation.scss";

import { api } from "../../api/client.js";

const SLOTS = [
    { x: 150, y: 70 },
    { x: 219, y: 190 },
    { x: 81, y: 190 },
    { x: 150, y: 10 },
    { x: 290, y: 150 },
    { x: 150, y: 290 },
    { x: 10, y: 150 }
];

async function fetchIcon(techName) {
    try {
        const response = await api.get("/svgIcon/" + techName);
        return response.data;
    } catch (error) {
        console.error("Error fetching icon data:", error);
        return null;
    }
};

export const TechConstellation = ({ skills = [] }) => {
    const chips = skills.slice(0, SLOTS.length).map((label, i) => ({ label, ...SLOTS[i] }));
    const [icons, setIcons] = useState([]);
    useEffect(() => {
        const fetchIcons = async () => {
            const iconPromises = skills.map(skill => fetchIcon(skill));
            const iconData = await Promise.all(iconPromises);
            const iconsWithLabels = skills.map((skill, index) => ({
                label: skill,
                icon: iconData[index]
            }));
            setIcons(iconsWithLabels);
        };
        fetchIcons();
    }, []);
    
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
            {chips.map((c) => (
                <div
                key={c.label}
                className="constellation-chip"
                style={{ left: `${c.x}px`, top: `${c.y}px` }}>
                    {function(){
                        const icon = icons.find(icon => icon.label === c.label)?.icon;
                        return icon ? <span className="constellation-chip-icon" dangerouslySetInnerHTML={{ __html: icon }} /> : c.label;
                    }()}
                </div>
            ))}
            <div className="constellation-core"><b>CORE</b></div>
        </div>
    );
};
