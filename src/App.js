import { useState } from 'react';
import { useEffect } from 'react';

import './App.css';

// Custom components
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

  
  const loadImage = () =>{
    handleButton(true)
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

  useEffect(fetchAPIs,[])

  useEffect(()=>{
    gifService.getGit(threeFirstWords)
      .then(response =>{        
        setImgSrc(response.data[0].images.original.url) 
        // setImgSrc(response.data[0].images.preview_gif.url)                     
      })
      .catch(err =>{
        console.log("Error", err);
      })
  },[threeFirstWords])

  const handleClick = () => {
    fetchAPIs();
    handleButton(false);
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='container__block-1'>
          <Image handleLoad={loadImage} src={imgSrc} />
          <Phrase text={loading ? 'Loading...' : catFact} />
        </div>
        <Button handleClick={handleClick} />
      </div>
    </div>
  );
}
export default App;
