import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/client.js";
import { TerminalCard } from "./components/TerminalCard.jsx";
import { TechConstellation } from "./components/TechConstellation.jsx";
import { Timeline } from "./components/Timeline.jsx";
import { buildTimeline } from "../utils/timeline.js";
import "./Home.scss";

export const Home = () => {
    const [author, setAuthor] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAuthor = async () => {
            try {
                const response = await api.get("/author");
                setAuthor(response.data?.author ?? null);
            } catch (error) {
                console.error("Error fetching author data:", error);
            }
        };
        fetchAuthor().catch((error) => console.error(error));
    }, []);

    if (!author) return null;

    return (
        <>
            <section className="hero">
                <div className="hero-intro">
                    <p className="hero-eyebrow">&lt;SoftwareArchitect /&gt;</p>
                    <h1 className="hero-name">{author.authorFullName}</h1>
                    <p className="hero-tagline">{author.bioTagline}</p>
                    <div className="hero-cta">
                        <button className="btn-primary" onClick={() => navigate("/projects")}>
                            View Projects
                        </button>
                        <a className="btn-secondary" href="#contact">Contact</a>
                    </div>
                </div>
                <div className="hero-terminal">
                    <TerminalCard author={author} />
                </div>
            </section>

            <section className="section-constellation">
                <h2>Tech Constellation</h2>
                <p className="section-subtitle">The stack orbiting most of my work</p>
                <TechConstellation skills={author.skills} />
            </section>

            <section className="section-timeline">
                <h2>Trajectory</h2>
                <Timeline items={buildTimeline(author)} />
            </section>
        </>
    );
};
