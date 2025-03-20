import { ReactNode } from "react";

type ButtonProps = {
  iconPath: string;
  children: ReactNode;
};

export const Button = ({ children, iconPath }: ButtonProps) => {
  return (
    <button
      className="
          inline-flex gap-[12px] h-14 px-7 bg-purple-500 rounded-[20px] items-center
          "
    >
      <img className="w-5 h-5" src={iconPath} alt="nav-user.svg" />
      {children}
    </button>
  );
};
