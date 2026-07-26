//utility imports
import { readFile } from 'fs/promises';

//config import
import {appConfig} from "../config/config.js";


export const getProjectData = async ()=>{
    //get dynamic path
    const dataPath = `${appConfig.data.dataPath}/projects.json`;
    //read JSON data using path
    const data = JSON.parse(await readFile(dataPath, 'utf-8'));
    return data
}

export const getAuthorData = async ()=>{
    //get dynamic path
    const dataPath = `${appConfig.data.dataPath}/author.json`;
    //read JSON data using path
    const data = JSON.parse(await readFile(dataPath, 'utf-8'));
    return data
}

export const getIconData = async (iconName)=>{
    //get dynamic path
    const dataPath = `${appConfig.data.dataPath}/assets/icons/${iconName}.svg`;
    const svg = await readFile(dataPath, 'utf-8');
    return svg;
}
