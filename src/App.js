import './App.css';
import Banner from './components/Banner';
import ContactUs from './components/ContactUs';
import MyProjects from './components/MyProjects/MyProjects';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='mx-auto max-w-[1200px] px-4'>
      <Navbar />
      <Banner />
      <MyProjects />
      <ContactUs />
    </div>
  );
}

export default App;
