//utility imports
import express from "express";

//service import
import {getAuthorData, getProjectData} from "#services/mainService.js"

//set up a authRouter to manage all endpoints
const mainRouter = express.Router();

/*=====================LOBBY API=====================*/

//Method: GET - returns all projects data stored locally
mainRouter.get('/projects',async (req, res) => {
    res.status(200).json({
        message: 'Current projects available',
        projects: await getProjectData(),
    });
})

//Method: GET - returns all data stored about author
mainRouter.get('/author',async (req, res) => {
    res.status(200).json({
        message: 'Data about me ;)',
        projects: await getAuthorData(),
    });
})

//export the router to be used in app.js
export default mainRouter;