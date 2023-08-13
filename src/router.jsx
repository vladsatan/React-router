import { createBrowserRouter } from 'react-router-dom';
import Users from './Pages/Users/Users';
import Albums from './Pages/Albums/Albums';
import { getUsers } from './services/getUsers';
import { ROUTES } from './constants';


export const router = createBrowserRouter([
    {
        path: ROUTES.root,
        element: <Users />,
        loader: getUsers
    },
    {
        path: ROUTES.alboms(),
        element: <Albums />
    }
]); 