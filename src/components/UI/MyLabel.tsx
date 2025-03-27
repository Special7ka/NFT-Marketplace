import { ReactNode } from "react";
import { getAltFromPath } from "../Utils/GetAltFrompath";

type LabelProps = {
  iconPath?: string;
  label?: ReactNode;
};

export const MyLabel = ({ iconPath, label }: LabelProps) => {
  return (
    <div
      className="
                    flex pr-[20px] pl-[40px] bg-neutral-700 rounded-2xl 
                    h-[72px] max-w-[320px] w-full items-center gap-[20px] 
                    text-xl font-semibold font-WorkSans 
                    border-purple-500 border-1
                    "
    >
      <img
        src={iconPath}
        alt={getAltFromPath(iconPath)}
        className="h-[40px] w-[40px]"
      />
      {label}
    </div>
  );
};
