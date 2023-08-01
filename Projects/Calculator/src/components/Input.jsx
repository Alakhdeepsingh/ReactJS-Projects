import React from 'react';
import Button from './Button';
import './input.css';
function Keypad({
  clearResult,
  toggleSign,
  handleOperator,
  inputDigit,
  Decimal,
  calculateFinalResult,
}) {

 
  return (
    <>
    <div className='component-keypad'>
      <div className='container'>
        <Button text='AC' onClick={clearResult} />
        <Button text='+/-' onClick={toggleSign} />
        <Button text='%' onClick={() => handleOperator('%')} />
        <Button text='÷' OrangeButton={true} onClick={() => handleOperator('/')} />
      </div>

      <div className='container'>
        <Button text='7' onClick={() => inputDigit('7')} />
        <Button text='8' onClick={() => inputDigit('8')} />
        <Button text='9' onClick={() => inputDigit('9')} />
        <Button text='x' OrangeButton={true} onClick={() => handleOperator('*')} />
      </div>

      <div className='container'>
        <Button text='4' onClick={() => inputDigit('4')} />
        <Button text='5' onClick={() => inputDigit('5')} />
        <Button text='6' onClick={() => inputDigit('6')} />
        <Button text='-' OrangeButton={true} onClick={() => handleOperator('-')} />
      </div>

      <div className='container'>
        <Button text='1' onClick={() => inputDigit('1')} />
        <Button text='2' onClick={() => inputDigit('2')} />
        <Button text='3' onClick={() => inputDigit('3')} />
        <Button text='+' OrangeButton={true} onClick={() => handleOperator('+')} />
      </div>

      <div className='container'>
        <Button text='0' increasesize onClick={() => inputDigit('0')} />
        <Button text='.' onClick={Decimal} />
        <Button text='=' OrangeButton={true} onClick={calculateFinalResult} />
      </div>
    </div>
  </>
  );
}

export default Keypad;
