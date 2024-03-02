import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Episodes } from './pages/Episodes';

export const router = createBrowserRouter([
    
    // {
    //     path: "/",
    //     element: <App />,
    //     children: [
    //         { path: "episodes", element: <Episodes /> }
    //     ]
    // }

    {
        path: "/",
        element: <App />
    },
    {
        path: "/episodes",
        element: <Episodes />
    }

])