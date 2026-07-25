import "./Badge.scss";

const KNOWN_KINDS = ["success", "warning", "info", "muted"];

export const Badge = ({ kind, children }) => {
    const cls = KNOWN_KINDS.includes(kind) ? kind : "muted";
    return <span className={`badge badge-${cls}`}>{children}</span>;
};
