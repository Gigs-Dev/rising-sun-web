import Image from 'next/image';
import React, { FC, forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";


interface IType {
  type: string;
  className: string;
  className1?: string;
  img?: string;
  placeholder: string;
}


const TextField: FC<IType> = ({type, className, className1, img, placeholder}) => {
  return (
    <div className={`flex items-center ${className1}`}>
        <h1 className=''></h1>
       {img && <Image src={img || ''} alt='' className='w-[40px] h-[40px] object-cover'/>}
        <input type={type} className={`${className} outline-none`} placeholder={placeholder}/>
    </div>
  )
}

export default TextField;



interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  wrapperClass?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", wrapperClass = "", ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-1 ${wrapperClass}`}>
        {label && (
          <label className="text-sm font-medium text-[#fff]">
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={`
            w-full rounded-lg border px-3 py-2 outline-none transition-all 
            ${error ? "border-red-500" : ""} 
            ${className}
          `}
          {...props}
        />

        {error && (
          <p className="text-xs text-red-500 mt-[-2px]">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";




interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  wrapperClass?: string;
}


export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", wrapperClass = "", ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-1 ${wrapperClass}`}>
        {label && (
          <label className="text-sm font-medium text-[#fff]">
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          className={`
            w-full rounded-lg border px-3 py-2 outline-none transition-all 
            ${error ? "border-red-500" : ""} 
            ${className}
          `}
          {...props}
        />

        {error && (
          <p className="text-xs text-red-500 mt-[-2px]">
            {error}
          </p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
