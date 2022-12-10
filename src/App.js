import './App.css';
import Banner from './components/Banner';
import MyProjects from './components/MyProjects/MyProjects';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='mx-auto max-w-[1200px] px-4'>
      <Navbar />
      <Banner />
      <MyProjects />
    </div>
  );
}

export default App;
