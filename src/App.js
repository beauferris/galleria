import { useState } from 'react';
import './App.css';
import data from './data.json';
import GalleryImage from './components/GalleryImage';
import Details from './components/Details/Details';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Image from './components/Image';


function App() {

  const [currentImage, setCurrentImage] = useState(data[0]);

  const [imageVisible, setImageVisible] = useState(false);

  const showImageHandler = () =>{
    setImageVisible(true);
  }

  const hideImageHandler = () =>{
    setImageVisible(false);
  }


  const nextImageHandler = () => {
    const currentImageIndex = data.indexOf(currentImage);

    if (currentImageIndex === data.length - 1) {
    } else {
      setCurrentImage(data[currentImageIndex + 1]);
    }
  }

  const prevImageHandler = () => {
    const currentImageIndex = data.indexOf(currentImage);

    if (currentImageIndex === 0) {
    } else {
      setCurrentImage(data[currentImageIndex - 1]);
    }
  
  }

  const imgs = data.map(img =>
    <GalleryImage artist={img.artist.name} name={img.name} img={img.images.thumbnail}></GalleryImage>
  )


  const image = imageVisible? <Image onClose ={hideImageHandler} image={currentImage.images.gallery}></Image>:"";

  return (
    <Router>
      <div className="App">
        <div className={'header'}>
          <Header />
        </div>
        <Switch>
          <Route path='/slideshow'
            render={() => <><Details url={currentImage.images.hero.large}
              artist={currentImage.artist.name}
              desc={currentImage.description}
              date={currentImage.year}
              artistUrl={currentImage.artist.image}
              name={currentImage.name}
              nextImage={nextImageHandler}
              prevImage={prevImageHandler} 
              maximize = {showImageHandler}/> 
            {image}
           </>
            }
          />
          <Route path='/' exact
            render={() => <div className={"gallery"}>
              {imgs}
            </div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
