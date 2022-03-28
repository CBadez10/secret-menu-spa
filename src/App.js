import ImageCarousel from './components/imageCarousel/ImageCarousel';
import NavigationBar from './components/NavigationBar/NavigationBar';
import createIcon from './images/createDrink.jpg'
import likeIcon from './images/like.jpg'
import magGlassIcon from './images/magGlass.jpg'
import './index.css';

function App() {
  return (
    <>
    <NavigationBar />
    <div className='car'>
      <ImageCarousel className='caritem'/>
    </div>
    <div className='box-row'>
      <div className='box-item'>
        <img src={magGlassIcon} />
        <p>Find new ideas and creations</p>
      </div>
      <div className='box-item'>
        <img src={createIcon} />
        <p>Make your own unique recipes</p>
      </div>
      <div className='box-item'>
        <img src={likeIcon} />
        <p>Rate and share for others to see</p>
      </div>
    </div>
    </>
  );
}

export default App;
