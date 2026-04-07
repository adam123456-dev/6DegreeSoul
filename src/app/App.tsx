import { RouterProvider } from 'react-router';
import { router } from './routes';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <SpeedInsights />
    </>
  );
}

export default App;
