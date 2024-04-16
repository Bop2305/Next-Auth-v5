import React, { ButtonHTMLAttributes, DetailedHTMLProps, InputHTMLAttributes } from "react";

type ButtonProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<ButtonProps> = ({ ...props }) => {
  return <input className="px-[25px] py-[10px] border rounded-[6px]" {...props} />
};

export default Input;