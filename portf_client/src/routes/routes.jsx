/*routes config file*/

import App from "../App.jsx";
import {ProjectsCmp} from "#pages/components/Projects.cmp.jsx";
import {Home} from "#pages/Home.jsx";

export const routes = [
    {
        element: <App/>,
        path: '/',
        errorElement: <h1>404 not found (custom)</h1>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: 'projects',
                element: <ProjectsCmp/>,
            }
        ]
    }
];