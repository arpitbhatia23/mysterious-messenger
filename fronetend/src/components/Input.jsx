import React, { forwardRef, useId } from 'react'

const Input = ({label,
    type="text",
    className="",
    placeholder="",
    ...props
    
} ,ref) => {
    const id =useId()
  return (
    <div className=''>
        {label&&<label className={`${className} px-4 py-2 text-white  `} htmlFor={id}>
         {label}
            </label>}
            <input type={type}
             className={`${className} px-4 py-4 rounded-2xl sm:w-full text-black`} 
             ref={ref}
             htmlFor={id}
             placeholder={placeholder}
             {...props}
          
            />
      
    </div>
  )
}

export default forwardRef(Input) 
