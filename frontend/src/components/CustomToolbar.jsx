import React from 'react';
import teb from '../assets/images/teb.png';
import tei from '../assets/images/tei.png';
import teu from '../assets/images/teu.png';
import teal from '../assets/images/teal.png';
import teac from '../assets/images/teac.png';
import tear from '../assets/images/tear.png';
import teaj from '../assets/images/teaj.png';
import Linkicon from '../assets/images/linkicon.png';

const CustomToolbar = () => {
  const handleButtonClick = (action) => {
    switch(action) {
      case 'bold':
        document.execCommand('bold', false, null);
        break;
      case 'italic':
        document.execCommand('italic', false, null);
        break;
      case 'underline':
        document.execCommand('underline', false, null);
        break;
      case 'align-left':
        document.execCommand('justifyLeft', false, null);
        break;
      case 'align-center':
        document.execCommand('justifyCenter', false, null);
        break;
      case 'align-right':
        document.execCommand('justifyRight', false, null);
        break;
      case 'justify':
        document.execCommand('justifyFull', false, null);
        break;
      case 'insert-link':
        const url = prompt('Enter the URL');
        document.execCommand('createLink', false, url);
        break;
      default:
        console.log('Unknown action');
    }
  };

  return (
    <div id="custom-toolbar">
      <button className='p-2 bg-zinc-100 rounded-md hover:scale-75' onClick={() => handleButtonClick('bold')}>
        <img className='w-4' src={teb} alt="Bold" />
      </button>
      <button className='p-2 bg-zinc-100 rounded-md hover:scale-75' onClick={() => handleButtonClick('italic')}>
        <img className='w-4' src={tei} alt="Italic" />
      </button>
      <button className='p-2 bg-zinc-100 rounded-md hover:scale-75' onClick={() => handleButtonClick('underline')}>
        <img className='w-4' src={teu} alt="Underline" />
      </button>
      <button className='p-2 bg-zinc-100 rounded-md hover:scale-75' onClick={() => handleButtonClick('align-left')}>
        <img className='w-4' src={teal} alt="Align Left" />
      </button>
      <button className='p-2 bg-zinc-100 rounded-md hover:scale-75' onClick={() => handleButtonClick('align-center')}>
        <img className='w-4' src={teac} alt="Align Center" />
      </button>
      <button className='p-2 bg-zinc-100 rounded-md hover:scale-75' onClick={() => handleButtonClick('align-right')}>
        <img className='w-4' src={tear} alt="Align Right" />
      </button>
      <button className='p-2 bg-zinc-100 rounded-md hover:scale-75' onClick={() => handleButtonClick('justify')}>
        <img className='w-4' src={teaj} alt="Justify" />
      </button>
      <button className='p-2 bg-zinc-100 rounded-md hover:scale-75' onClick={() => handleButtonClick('insert-link')}>
        <img className='w-4' src={Linkicon} alt="Insert Link" />
      </button>
    </div>
  );
};

export default CustomToolbar;
