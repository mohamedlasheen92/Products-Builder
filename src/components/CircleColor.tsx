import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}

const CircleColor = ({color, ...rest}: IProps) => {

  return (
    <>
      <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" {...rest} style={{backgroundColor: color}}></span>
    </>
  );
}

export default CircleColor