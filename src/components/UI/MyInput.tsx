import { Button } from "./Button";

type InputProps = {
  iconPath?: string;
};

export const MyInput = ({ iconPath }: InputProps) => {
  return (
    <div className="flex  bg-white justify-between pl-[20px] rounded-[21px] items-center ">
      <input
        type="text"
        placeholder="Enter your email here"
        className=" placeholder-opacity-100 placeholder-[#2B2B2B] "
      />
      <Button iconPath={iconPath} className="px-[50px] text-white">
        Subscribe
      </Button>
    </div>
  );
};
