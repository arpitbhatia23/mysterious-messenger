import React from 'react'

const Button = ({children,className,bgcolor='bg-blue-500',type='button',textcolor='text-white',...props}) => {
  return (
    <div>
        <button className={`${className} px-4 py-2 rounded-2xl ${bgcolor} ${textcolor} `} {...props} type={type}>
            {children}
        </button>
      
    </div>
  )
}

export default Button
