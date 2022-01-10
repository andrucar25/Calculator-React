import React, {useState} from 'react';

import styled from '@emotion/styled';


const InputResult = styled.input`
   background: none;
    outline: none;
    border: none;
    text-align: end;
    font-size: 1.875rem;
    color: white;
    font-weight: 700;
    width: 100%;
`
const InputResultAlt = styled.input`
   background: none;
    outline: none;
    border: none;
    text-align: end;
    font-size: 1.875rem;
    color: var(--VeryDarkGrayishYellow);
    font-weight: 700;
    width: 100%;
`
const Result = ({result, toggled}) => {

   
    
    return (  
        <>
        {toggled ?
             <InputResultAlt
             type="text"
             value={result}
             disabled
         />
        : <InputResult
                type="text"
                value={result}
                disabled
            /> }
           
        </>

    );
}
 
export default Result;