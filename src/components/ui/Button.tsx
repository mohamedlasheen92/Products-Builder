import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-fit" | "w-full";
}

const Button = ({ children, className, width = "w-full", ...rest }: IProps) => {
  // console.log(rest);
  return (
    <>
      <button
        className={`rounded-md text-white ${width} p-2 ${className}`}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
