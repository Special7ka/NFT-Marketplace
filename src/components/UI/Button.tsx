import { ReactNode } from "react";

type ButtonProps = {
  iconPath?: string;
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

export const Button = ({
  children,
  iconPath,
  className,
  variant = "primary",
}: ButtonProps) => {
  const base = `inline-flex gap-[12px] w-auto h-[60px] rounded-[20px] items-center font-WorkSans ${className} `;
  const styles = {
    primary: "bg-purple-500",
    secondary: "border-2 border-[#A259FF]",
  };

  return (
    <button className={` ${base} ${styles[variant]} `}>
      <img className="w-5 h-5 " src={iconPath} alt="nav-user.svg" />
      {children}
    </button>
  );
};
