import React, { useState } from 'react';
import {ReactComponent as EmojiIcon} from '../../assets/svg/emoji.svg';
import {ReactComponent as MicIcon} from '../../assets/svg/mic.svg';

const keys = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'backspace'],
  ['123', 'space', 'return'],
];

const KeyBoard = () => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      setInputValue((prev) => prev.slice(0, -1));
    } else if (key === 'return') {
      setInputValue('');
    } else if (key === 'space') {
      setInputValue((prev) => prev + ' ');
    } else if (key === 'shift' || key === '123' || key === 'emoji') {
    } else {
      setInputValue((prev) => prev + key);
    }
  };

  return (
    <div className="w-[375px] h-[291px] flex flex-col gap-[6px] bg-gray400 px-[5px] py-[10px] ">
        {/* Render keys */}
        <div className="grid gap-2">
            {keys.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-[6px]">
                {row.map((key) => (
                <button
                    key={key}
                    onClick={() => handleKeyPress(key)}
                    className={`w-[31px] h-[42px] py-[7px] bg-white rounded-md shadow-gray-300 text-keyboard 
                        ${key === 'space' ? '!w-[179px] h-[42px]' : ''}
                        ${key === 'shift' ? '!w-[42px] h-[42px] !bg-gray500 text-black' : ''}
                        ${key === 'backspace' ? 'w-[42px] h-[42px] !bg-gray500 text-black' : ''}
                        ${key === 'return' ? 'w-[87px] h-[42px] !bg-gray500 text-black text-keyboard-2' : ''}
                        ${key === '123' ? 'w-[87px] h-[42px] !bg-gray500 text-black text-keyboard-2' : ''}`}
                >
                    {key === 'shift' ? '⇧' : key === 'backspace' ? '⌫' : key}
                    {/* {key === 'backspace' ? '⌫' : key} */}
                </button>
                ))}
            </div>
            ))}
        </div>
        <div className='w-full px-6 py-6 flex justify-between items-center'>
            <EmojiIcon/>
            <MicIcon/>
        </div>
    </div>
  );
};

export default KeyBoard;
