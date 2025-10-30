'use client';
import { useId, useState } from 'react';
import css from './Input.module.css';
import Image from 'next/image';
import clearIcon from '@/img/clear.svg';
import openEye from '@/img/eye-open.svg';
import closeEye from '@/img/eye-closed.svg';

type InputProps = {
  type?: 'password' | 'text';
  clearable?: boolean;
};

export default function Input({
  type = 'text',
  clearable = false,
}: InputProps) {
  const inputid = useId();
  const [visiblePasswd, setVisiblePasswd] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleVisiblePwdClick = () => {
    setVisiblePasswd((prew) => !prew);
  };

  const handleClearClick = () => {
    setInputValue('');
  };

  return (
    <label htmlFor="customInput" className={css.label}>
      Please, enter {type}
      <input
        type={type === 'text' ? type : visiblePasswd ? 'text' : type}
        name="customInput"
        id={inputid}
        className={css.inputField}
        value={inputValue}
        onChange={(evtInp) => setInputValue(evtInp.target.value)}
        placeholder={type}
      />
      <div className={css.buttonsWrapper}>
        {clearable && (
          <button
            type="button"
            onClick={handleClearClick}
            className={css.clearButton}
          >
            <Image
              src={clearIcon}
              alt="Clear input icon"
              className={css.clearIcon}
            />
          </button>
        )}
        {type === 'password' && (
          <button
            type="button"
            className={css.visiblePasswdButton}
            onClick={handleVisiblePwdClick}
          >
            {visiblePasswd ? (
              <Image
                src={closeEye}
                alt="Hide password icon"
                className={css.clearIcon}
              />
            ) : (
              <Image
                src={openEye}
                alt="Show password icon"
                className={css.clearIcon}
              />
            )}
          </button>
        )}
      </div>
    </label>
  );
}
