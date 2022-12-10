import './App.css';
import Banner from './components/Banner';
import ContactUs from './components/ContactUs';
import MyProjects from './components/MyProjects/MyProjects';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='mx-auto max-w-[1200px] px-4'>
      <Navbar />
      <Banner />
      <MyProjects />
      <ContactUs />
      <Toaster position='top-center' />
    </div>
  );
}

export default App;
