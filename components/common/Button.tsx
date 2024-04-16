import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = {
  text: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: React.FC<ButtonProps> = ({ text, ...props }) => {
  return <button className="px-[25px] py-[10px] border rounded-[6px]" {...props}>{text}</button>;
};

export default Button;
