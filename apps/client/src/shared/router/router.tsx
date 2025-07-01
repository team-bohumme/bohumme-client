import { createBrowserRouter } from 'react-router';

import GlobalLayout from './global-layout';
import { routePath } from './path';

export const router = createBrowserRouter([
  {
    path: routePath.LAYOUT,
    element: <GlobalLayout />,
  },
]);
