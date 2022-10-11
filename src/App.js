import { useState } from 'react';
import { useEffect } from 'react';

import './App.css';

// Custom components
import Toogle from './components/Toogle';
import Image from './components/Image';
import Phrase from './components/Phrase';
import Button from './components/Button';

//Service components
import factService from './services/HandleFact'
import gifService from './services/handleGiphy'


const App = () => {

  const [catFact, setCatFact] = useState('');
  const [threeFirstWords, setThreeFirstWords] = useState('');
  const [loading, setLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState('');
  const [toogle, setToogle] = useState(false);

  const handleButton = (activator) => {

    const button = document.getElementById('button');

    if (activator) {
      button.removeAttribute("disabled")
      button.classList.remove('onclick');
      button.classList.add('btn-hover');
    }
    if (!activator) {
      button.setAttribute("disabled", true)
      button.classList.add('onclick');
      button.classList.remove('btn-hover');
    }
  }

  const handleToogleSytle = activator => {
    const toogle = document.getElementById('toogle');
    if(activator){
      toogle.removeAttribute("disabled")
      toogle.classList.remove('toogle-disabled');
    }
    if(!activator){
      toogle.setAttribute("disabled", true)
      toogle.classList.add('toogle-disabled');
    }
  }


  const loadImage = () => {
    handleButton(true)
    handleToogleSytle(true);
  }

  const fetchAPIs = () => {
    factService.getFact()
      .then(data => {
        let array = data.fact.split(" ");
        setThreeFirstWords(`${array[0]} ${array[1]} ${array[2]}`);
        setCatFact(data.fact)
        setLoading(false)
      })
      .catch(err => {
        console.log("Error", err);
      })
  }

  useEffect(fetchAPIs, [])

  useEffect(() => {
    gifService.getGit(threeFirstWords)
      .then(response => {
        if (toogle) {
          console.log("HD")
          setImgSrc(response.data[0].images.original.url)
        }
        if (!toogle) {
          console.log("HQ")
          setImgSrc(response.data[0].images.preview_gif.url)
        }
      })
      .catch(err => {
        console.log("Error", err);
      })
  }, [threeFirstWords, toogle])

  const handleClick = () => {
    fetchAPIs();
    handleToogleSytle(false)
    handleButton(false);
  }

  const handleToogle = e => {
    handleButton(false)
    handleToogleSytle(false)
    if (e.currentTarget.checked) {
      setToogle(true)
    } else {
      setToogle(false)
    }
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='container__block-1'>
          <Image handleLoad={loadImage} src={imgSrc} />
          <Phrase text={loading ? 'Loading...' : catFact} />
        </div>
        <Toogle handleCheck={handleToogle} />
        <Button handleClick={handleClick} />
      </div>
    </div>
  );
}
export default App;
