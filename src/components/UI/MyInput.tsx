import { Button } from "./Button";

type InputProps = {
  btnIconPath?: string;
  isButton?: boolean;
};

export const MyInput = ({ btnIconPath, isButton }: InputProps) => {
  return (
    <div className="flex  bg-white justify-between pl-[20px] rounded-[21px] items-center min-h-[46px] ">
      <input
        type="text"
        placeholder="Enter your email here"
        className=" placeholder-opacity-100 placeholder-[#2B2B2B] "
      />
      {isButton && (
        <Button iconPath={btnIconPath} className="px-[50px] text-white">
          Subscribe
        </Button>
      )}
    </div>
  );
};
