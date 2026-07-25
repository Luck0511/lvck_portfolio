import { useEffect, useState } from "react";
import { api } from "../../api/client.js";
import { Badge } from "./Badge.jsx";
import "./Projects.cmp.scss";

export const ProjectsCmp = () => {
    const [projects, setProjects] = useState(null);
    const [expanded, setExpanded] = useState({});

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await api.get("/projects");
                setProjects(response.data?.projects ?? null);
            } catch (error) {
                console.error("Error fetching projects list:", error);
            }
        };
        fetchProjects().catch((error) => console.error(error));
    }, []);

    const toggleProject = (id) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    if (!projects) return null;

    return (
        <section className="projects-section">
            <h1>Projects</h1>
            <p className="projects-subtitle">A log of what's shipped, in orbit, or still just a spark.</p>
            <div className="projects-grid">
                {Object.entries(projects).map(([id, project]) => {
                    const isOpen = !!expanded[id];
                    return (
                        <div className="project-card" key={id}>
                            <div className="project-card-head">
                                <div>
                                    <div className="project-name">{project.name}</div>
                                    <div className="project-subtitle">{project.subtitle}</div>
                                </div>
                                <Badge kind={project.statusKind}>{project.status}</Badge>
                            </div>
                            <p className="project-summary">{project.description}</p>
                            {isOpen && <p className="project-more">{project.more}</p>}
                            <div className="project-tech">
                                {(project.tech || []).map((tag) => (
                                    <span className="tech-tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                            <div className="project-footer">
                                <button className="project-toggle" onClick={() => toggleProject(id)}>
                                    {isOpen ? "Show less" : "Read more"}
                                </button>
                                {project.link && (
                                    <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                                        View live ↗
                                    </a>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
