import React,{useState} from 'react';

const Buttons = ({result, setResult, toggled}) => {

    

    const handleClick = e => {
        setResult(result.concat(e.target.name));
    }

    const deleteBack = () => {
        setResult(result.slice(0, result.length - 1))
    }
    const resetCalculator = () =>{
        setResult('');
    }
    
    const calculate = () => {
        try{

            setResult(eval(result).toString());
        } catch(error){
            setResult("Error")
        }
    }


    return ( 
        <>
        {toggled ? 
                <div className="buttons-container_alt">
                     <div className="buttons__grid">
                         <button name="7" className="button_number_alt" onClick={handleClick}>7</button>
                         <button name="8" className="button_number_alt" onClick={handleClick}>8</button>
                         <button name="9" className="button_number_alt" onClick={handleClick}>9</button>
                         <button className="button_letter_alt" onClick={deleteBack}>DEL</button>
     
                         <button name="4" className="button_number_alt" onClick={handleClick}>4</button>
                         <button name="5"className="button_number_alt" onClick={handleClick}>5</button>
                         <button name="6" className="button_number_alt" onClick={handleClick}>6</button>
                         <button name="+" className="button_number_alt" onClick={handleClick}>+</button>
     
                         <button name="1" className="button_number_alt" onClick={handleClick}>1</button>
                         <button name="2" className="button_number_alt" onClick={handleClick}>2</button>
                         <button name="3" className="button_number_alt" onClick={handleClick}>3</button>
                         <button name="-" className="button_number_alt" onClick={handleClick}>-</button>
     
                         <button name="." className="button_number_alt" onClick={handleClick}>.</button>
                         <button name="0" className="button_number_alt" onClick={handleClick}>0</button>
                         <button name="/" className="button_number_alt" onClick={handleClick}>/</button>
                         <button name="*" className="button_number_alt" onClick={handleClick}>x</button>
                     </div>
     
                     <div className="large_buttons">
                         <button className="button_letter_alt" onClick={resetCalculator}>RESET</button>
                         <button className="button_calculate_alt" onClick={calculate}>=</button>
                     </div>
                 
                 </div>
        
        : 
                <div className="buttons-container">
                <div className="buttons__grid">
                    <button name="7" className="button_number" onClick={handleClick}>7</button>
                    <button name="8" className="button_number" onClick={handleClick}>8</button>
                    <button name="9" className="button_number" onClick={handleClick}>9</button>
                    <button className="button_letter" onClick={deleteBack}>DEL</button>

                    <button name="4" className="button_number" onClick={handleClick}>4</button>
                    <button name="5"className="button_number" onClick={handleClick}>5</button>
                    <button name="6" className="button_number" onClick={handleClick}>6</button>
                    <button name="+" className="button_number" onClick={handleClick}>+</button>

                    <button name="1" className="button_number" onClick={handleClick}>1</button>
                    <button name="2" className="button_number" onClick={handleClick}>2</button>
                    <button name="3" className="button_number" onClick={handleClick}>3</button>
                    <button name="-" className="button_number" onClick={handleClick}>-</button>

                    <button name="." className="button_number" onClick={handleClick}>.</button>
                    <button name="0" className="button_number" onClick={handleClick}>0</button>
                    <button name="/" className="button_number" onClick={handleClick}>/</button>
                    <button name="*" className="button_number" onClick={handleClick}>x</button>
                </div>

                <div className="large_buttons">
                    <button className="button_letter" onClick={resetCalculator}>RESET</button>
                    <button className="button_calculate" onClick={calculate}>=</button>
                </div>
            
            </div>
        
        }
            
        
        </>

     );
}
 
export default Buttons;