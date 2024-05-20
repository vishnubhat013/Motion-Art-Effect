import Header from './components/Header';
import './App.css';
import Homeone from './components/Homeone';
import Footer from './components/Footer';
import Background from './components/Background';
function App() {

  return (
    <>
    <div className='z-0'>
      <Background />
    </div>
    <div className='flex flex-col z-50 absolute w-full'>
    <Header/>
    <Homeone/>
    <Footer/>
    </div>
    
    </>
  );
}

export default App;
