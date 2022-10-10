import { useState } from 'react';
import { useEffect } from 'react';

import './App.css';

// Custom components
import Image from './components/Image';
import Phrase from './components/Phrase';
import Button from './components/Button';

const App = () => {

  const URL_FACT_API = 'https://catfact.ninja/fact';

  const [catFact,useCatFact] = useState('');

  useEffect(()=>{
        
    fetch(URL_FACT_API)
      .then(response => response.json())
      .then(data => {
          const result = data.fact;
          console.log("result", result)
          const array = result.split(" ");
          let firstThreeWords = `${array[0]} ${array[1]} ${array[2]}`
          console.log(firstThreeWords)
          
        })
      .catch(err =>{
        console.log(err)
      })

  },[]);

  return (
    <div className="App">
      <div className='container'>
        <div className='container__block-1'>
          <Image src="./logo.svg" />
          <Phrase text="sdfsd" />
        </div>
        <Button text="Refresh" />
      </div>
    </div>
  );
}
export default App;
