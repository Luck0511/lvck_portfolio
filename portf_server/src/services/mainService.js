//utility imports
import { readFile } from 'fs/promises';

//config import
import {appConfig} from "../config/config.js";

import path from "path";

import projectData from "../../data/projects.json" with { type: "json" };
import authorData from "../../data/author.json" with { type: "json" };
import iconData from "../../data/assets/icons/index.js";


export const getProjectData = async ()=>{
    //get dynamic path
    //const dataPath = path.join(process.cwd(), appConfig.data.dataPath, 'projects.json');
    //read JSON data using path
    //const data = JSON.parse(await readFile(dataPath, 'utf-8'));
    return projectData
}

export const getAuthorData = async ()=>{
    //get dynamic path
    //const dataPath = path.join(process.cwd(), appConfig.data.dataPath, 'author.json');
    //read JSON data using path
    //const data = JSON.parse(await readFile(dataPath, 'utf-8'));
    return authorData
}

export const getIconData = async (iconName)=>{
    //get dynamic path
    //const dataPath = path.join(process.cwd(), appConfig.data.dataPath, `assets/icons/${iconName}.svg`);
    const svg = iconData[iconName + ".svg"] || null;
    return svg;
}
