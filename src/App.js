import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='mx-auto max-w-[1200px]'>
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
