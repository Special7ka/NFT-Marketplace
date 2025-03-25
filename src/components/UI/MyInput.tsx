import { Button } from "./Button";

export const MyInput = () => {
  return (
    <div className="flex  bg-white justify-end rounded-[21px] items-center ">
      <input
        type="text"
        placeholder="Enter your email here"
        className=" placeholder-opacity-100 placeholder-[#2B2B2B] "
      />
      <Button iconPath="/images/email.svg" className="px-[50px]">
        Subscribe
      </Button>
    </div>
  );
};
