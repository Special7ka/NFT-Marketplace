import { ReactNode } from "react";

type ButtonProps = {
  iconPath: string;
  children: ReactNode;
  className?: string;
};

export const Button = ({ children, iconPath, className }: ButtonProps) => {
  return (
    <button
      className={`inline-flex gap-[12px]  w-auto h-[60px] bg-purple-500 rounded-[20px] items-center ${className}`}
    >
      <img className="w-5 h-5" src={iconPath} alt="nav-user.svg" />
      {children}
    </button>
  );
};
