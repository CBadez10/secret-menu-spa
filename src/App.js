import ImageCarousel from './components/imageCarousel/ImageCarousel';
import NavigationBar from './components/NavigationBar/NavigationBar';
import createIcon from './images/createDrink.jpg'
import likeIcon from './images/like.jpg'
import magGlassIcon from './images/magGlass.jpg'
import './app.css';

function App() {
  return (
    <>
    
    <NavigationBar />
    <div className='carousel-main'>
      <ImageCarousel className='carousel-main item'/>
    </div>
    <div className='container mid'>
      <div className='row'>
        <div className='col first'>
        
        </div>
        <div className='col second'>
        
        </div>
      </div>
    </div>
    <div className='container'>
      <div className='row icons'>
        <div className='col icons'>
          <img src={magGlassIcon} />
          <p>Find new ideas and creations</p>
        </div>
        <div className='col icons'>
          <img src={createIcon} />
          <p>Make your own unique recipes</p>
        </div>
        <div className='col icons'>
          <img src={likeIcon} />
          <p>Rate and share for others to see</p>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default App;
