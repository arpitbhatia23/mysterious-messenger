import { EyeIcon, EyeOffIcon } from 'lucide-react'; // Import the required icons
import React, { forwardRef, useId, useState } from 'react';

const Input = (
  {
    label,
    type = 'text',
    className = '',
    placeholder = '',
    ...props
  },
  ref
) => {
  const id = useId();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const inputType = type === 'password' && isPasswordVisible ? 'text' : type;

  return (
    <div className="relative">
      {label && (
        <label className={`${className} px-4 py-2 text-white`} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={inputType}
        className={`${className} px-4 py-4 rounded-2xl bg-white dark:text-white w-full text-black`}
        ref={ref}
        id={id}
        placeholder={placeholder}
        {...props}
      />
      {type === 'password' && (
        <span
          className="absolute right-4 top-10 cursor-pointer text-black"
          onClick={handleToggleVisibility}
        >
          {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
        </span>
      )}
    </div>
  );
};

export default forwardRef(Input);
