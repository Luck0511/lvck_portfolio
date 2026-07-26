//utility imports
import express from "express";

//service import
import {getAuthorData, getProjectData, getIconData} from "#services/mainService.js"

//set up a authRouter to manage all endpoints
const mainRouter = express.Router();

/*=====================MAIN API=====================*/

//Method: GET - returns all projects data stored locally
mainRouter.get('/projects',async (req, res) => {
    res.status(200).json({
        message: 'Current projects',
        date: new Date().toString(),
        projects: await getProjectData(),
    });
})

//Method: GET - returns all data stored about author
mainRouter.get('/author',async (req, res) => {
    res.status(200).json({
        message: 'Data about me ;)',
        date: new Date().toString(),
        author: await getAuthorData(),
    });
})

//Method: GET - returns svg icon for a give name
mainRouter.get('/svgIcon/:name',async (req, res) => {
    const { name } = req.params;
    const svg = await getIconData(name);
    res.status(200).send(svg);
});

//export the router to be used in app.js
export default mainRouter;