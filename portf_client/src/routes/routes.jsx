/*routes config file*/

import App from "../App.jsx";

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
                path: 'collection',
                element: <Collection/>,
                children: [
                    {
                        path: 'item',
                        element: <Item />
                    }
                ]
            },
            {
                path: 'about',
                element: <About/>,
            }
        ]
    }
];