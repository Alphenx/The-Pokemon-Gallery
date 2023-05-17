import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Detail from '../pages/Detail/Detail';
import MainLayout from '../layout/MainLayout';
import Filtered from '../pages/Filtered/Filtered';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/:id',
        element: <Detail />,
      },
      {
        path: '/filter/:type',
        element: <Filtered />,
      },
    ],
  },
]);

export default router;
