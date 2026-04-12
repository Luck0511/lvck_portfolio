import axios from "axios";

import {useEffect, useState} from "react";

const PROJECTS_API = `http://localhost:3000/api/main/projects`;


export const ProjectsCmp = () => {

    /*bestseller collection state*/
    const [response, setResponse] = useState({});

    /*bestsellers collection setUp*/
    useEffect(() => {
        const fetchProjects = async () => {
            console.log('Fetching project list...');
            try {
                //retrieve projects from backend server
                await axios.get(PROJECTS_API)
                    .then((response) => setResponse(response.data))
                console.log('List fetching successful!');
                //save projects in separate state
                console.log(response);
            } catch (error) {
                console.error('Error fetching projects list:', error);
            } finally {
                console.log('Fetching ended');
            }
        }
        fetchProjects().catch((error) => console.error(error));
    }, [])

    return (
        <>{response?.projects != null ?
            Object.entries(response?.projects).map(([key,project]) => (
            <div key={key} className="projectCard_wrapper">
                <div className="projectCard">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            </div>
            ))
            : ''
        }
        </>
    )
}