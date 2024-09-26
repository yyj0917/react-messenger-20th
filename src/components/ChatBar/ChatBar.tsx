import React, { useState } from 'react';
import {ReactComponent as CameraFillIcon} from '../../assets/svg/cameraFill.svg';
import {ReactComponent as PictureIcon} from '../../assets/svg/picture.svg';
import {ReactComponent as StickerIcon} from '../../assets/svg/sticker.svg';
import {ReactComponent as SearchIcon} from '../../assets/svg/search.svg';
import {ReactComponent as SendIcon} from '../../assets/svg/send.svg';

interface ChatBarProps {
  placeholder: string;
  onSendMessage: (message: string) => void;
}

const ChatBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsFocused(false);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
    //   onSendMessage(inputValue);
      setInputValue(''); // 메시지 전송 후 입력 필드 초기화
    }
  };

  return (
    <div className={`w-full h-[44px] px-2 flex items-center `}>

        {/* Input field */}
        <label className='w-full h-full flex justify-between items-center gap-[10px] py-2 px-[7px] bg-gray100 rounded-3xl'>
            {isFocused ? (
                <>
                    <div className='flex gap-[10px]'>
                        <span className='w-8 h-8 p-[2px] rounded-2xl bg-white'>
                            <SearchIcon className='text-main cursor-pointer'/>
                        </span>
                        <input
                            type="text"
                            placeholder="텍스트를 입력하세요..."
                            value={inputValue}
                            onChange={handleInputChange}
                            onBlur={() => setIsFocused(false)}
                            className={`bg-gray100 placeholder:text-gray600 outline-none`}
                        />
                    </div>
                    <span className='w-[50px] h-[34px] flex justify-center items-center bg-main px-[11px] py-[3px] mr-[5px] rounded-3xl'>
                        <SendIcon className='text-white cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110' onClick={handleSendMessage}/>
                    </span>
                </>
            ) : (
                <>
                    <div className='flex gap-[10px]'>
                        <span className='w-8 h-8 p-[2px] bg-main rounded-2xl'>
                            <CameraFillIcon className='cursor-pointer '/>
                        </span>
                        <input
                            type="text"
                            placeholder="Message..."
                            value={inputValue}
                            onChange={handleInputChange}
                            onFocus={() => setIsFocused(true)}
                            // onBlur={() => setIsFocused(false)}
                            className={`bg-gray100 placeholder:text-gray500 outline-none`}
                        />
                    </div>
                    <span className='flex gap-5 pr-5'>
                        <PictureIcon className='cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110'/>
                        <StickerIcon className='cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110'/>
                    </span>
                </>
            )}
        </label>

        
    </div>
  );
};

export default ChatBar;
