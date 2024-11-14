import './style.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Images2 from './components/Images2';
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <section className="home">
        <Navbar />
        <div className="home-content">
          </div>
          <Cards/>
          
      </section>
      <div className='photos'>
            <Images2/>
          </div>
      <Footer/>
      </div>
  );
}

export default App;
