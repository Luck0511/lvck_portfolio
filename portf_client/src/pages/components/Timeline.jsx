import { Badge } from "./Badge.jsx";
import "./Timeline.scss";

export const Timeline = ({ items }) => {
    return (
        <ul className="timeline">
            {items.map((t, i) => (
                <li className="timeline-item" key={`${t.title}-${i}`}>
                    <span className="timeline-dot" />
                    <div className="timeline-period">{t.period}</div>
                    <div className="timeline-title">{t.title}</div>
                    <div className="timeline-org">{t.org}</div>
                    <Badge kind={t.kind}>{t.status}</Badge>
                </li>
            ))}
        </ul>
    );
};
