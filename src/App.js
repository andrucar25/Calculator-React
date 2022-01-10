import React, {useState, useEffect} from 'react';

import styled from '@emotion/styled';

import HeaderTheme from './components/HeaderTheme';
import Result from './components/Result';
import Buttons from './components/Buttons';


function App() {

  useEffect(() => {
    let state = JSON.parse(localStorage.getItem('toggled'));
    if(!state){
      state=false;
    }
    setToggled(state);
  }, [])
  

  const [result, setResult] = useState('');
  const [toggled, setToggled] = useState(false);
  const handleClick = () => {
      setToggled((s) => !s);
  };

    useEffect( () =>{

      localStorage.setItem('toggled', JSON.stringify(toggled));

  }, [toggled]);

  return (
    
    <>
    {toggled ? 
    
       <div className="main-container">

      <div className="header-theme-container">
        <HeaderTheme
          toggled={toggled}
          onClick={handleClick}
        >

        </HeaderTheme>
      </div>

      <div className="result-container_alt">
        <Result
          result={result}
          toggled={toggled}
        >

        </Result>
      </div>

        <Buttons
          result={result}
          setResult={setResult}
          toggled={toggled}
        >

        </Buttons>


      </div>

    :
    
      <div className="main-container">

      <div className="header-theme-container">
        <HeaderTheme
          toggled={toggled}
          onClick={handleClick}
        >

        </HeaderTheme>
      </div>

      <div className="result-container">
        <Result
          result={result}
          setResult={setResult}
        >

        </Result>
      </div>

        <Buttons
          result={result}
          setResult={setResult}
        >

        </Buttons>


      </div>
      
    }
      
   </>
  );
}

export default App;
