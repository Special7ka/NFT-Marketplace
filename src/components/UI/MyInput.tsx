import { Button } from "./Button";
import { getAltFromPath } from "../Utils/GetAltFrompath";

type InputProps = {
  iconPath?: string;
  btnIconPath?: string;
  isButton?: boolean;
  placeholder: string;
};

export const MyInput = ({
  btnIconPath,
  isButton,
  iconPath,
  placeholder,
}: InputProps) => {
  return (
    <div
      className={`flex  bg-white 
        ${isButton && "justify-between"} 
        pl-[20px] rounded-[21px] items-center min-h-[46px] gap-[12px] `}
    >
      {iconPath && <img src={iconPath} alt={getAltFromPath(iconPath)} />}
      <input
        type="text"
        placeholder={placeholder}
        className=" placeholder-opacity-100 placeholder-[#2B2B2B] "
      />
      {isButton && (
        <Button
          iconPath={btnIconPath}
          className="px-[50px] text-white self-end"
        >
          Subscribe
        </Button>
      )}
    </div>
  );
};
