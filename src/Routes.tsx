import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Episodes } from './pages/Episodes';

export const router = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        children: [
            { path: "episodesChildren", element: <Episodes /> }
        ]
    },
    {
        path: "/episodes",
        element: <Episodes />
    }

])