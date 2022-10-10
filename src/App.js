import { useState } from 'react';
import { useEffect } from 'react';

import './App.css';

// Custom components
import Image from './components/Image';
import Phrase from './components/Phrase';
import Button from './components/Button';

//Service components
import factService from './services/HandleFact'

const handleButton = (activator) =>{  
  
  const button = document.getElementById('button');  
  
  if(activator){
    button.classList.remove('onclick');
    button.classList.add('btn-hover');
  }
  if(!activator){
    button.classList.add('onclick');
    button.classList.remove('btn-hover');
  }  
}

const App = () => {

  const [catFact, setCatFact] = useState('');
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    factService.getFact().then(data => {
      setTimeout(() => {
        setCatFact(data.fact)
        setLoading(false)
        handleButton(true);
      }, 2000)
    })
  }, []);

  const handleClick = () => {
    
    factService.getFact()
      .then(data => {
        setCatFact(data.fact)
        setLoading(false)
        handleButton(true);
      })
      .catch(err => {
        console.log(err)
      })

    handleButton(false);

  }

  return (
    <div className="App">
      <div className='container'>
        <div className='container__block-1'>
          <Image src="./logo.svg" />
          <Phrase text={loading ? 'Loading...' : catFact} />
        </div>
        <Button handleClick={handleClick} />
      </div>
    </div>
  );
}
export default App;
