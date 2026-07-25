import { titleCaseKey } from "../../utils/timeline.js";
import "./TerminalCard.scss";

export const TerminalCard = ({ author }) => {
    const { authorFullName, authorNick, currentCity, nativeRegion, employment, studies, certifications } = author;

    const currentJob = (employment || []).find((job) => job.contracts?.some((c) => c.ongoing));
    const currentContract = currentJob?.contracts?.find((c) => c.ongoing);
    const its = studies.ITS;

    return (
        <div className="terminal-card">
            <div className="terminal-titlebar">
                <span className="terminal-titlebar-label">visitor@lvck-portfolio: ~</span>
                <div className="terminal-controls">
                    <span className="terminal-btn terminal-btn-min" />
                    <span className="terminal-btn terminal-btn-max" />
                    <span className="terminal-btn terminal-btn-close">&#10005;</span>
                </div>
            </div>
            <div className="terminal-body">
                <div><span className="terminal-prompt">$</span> whoami</div>
                <div className="terminal-comment">// {authorFullName} — "{authorNick}"</div>
                {currentContract && currentJob && (
                    <div className="terminal-comment">// {currentContract.role} @ {currentJob.company}</div>
                )}
                <div className="terminal-comment">// Base: {currentCity}, IT · from {nativeRegion}</div>
                <div className="terminal-comment">
                    // {its.completed ? "Studied" : "Studying"}: {its.course}, {its.ITSName}
                    {its.completed && its.finalGrade ? ` — ${its.finalGrade}` : ""}
                </div>
                <div className="terminal-line-gap">
                    <span className="terminal-prompt">$</span> cat certifications.log
                </div>
                {Object.entries(certifications || {}).map(([key, cert]) => (
                    <div className="terminal-comment" key={key}>
                        // {titleCaseKey(key)} {cert.name} — {cert.issued}
                    </div>
                ))}
            </div>
        </div>
    );
};
