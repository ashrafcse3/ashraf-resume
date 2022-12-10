import './App.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

function App() {
  return (
    <div className='mx-auto max-w-[1200px] px-4'>

      <RouterProvider router={router}>
        <Toaster position='top-center' />
      </RouterProvider>
    </div>
  );
}

export default App;
