import { Button } from "./UI/Button";

export const Header = () => {
  return (
    <header className="py-[20px] px-[50px] flex items-center justify-between text-white font-WorkSans ">
      <div className="flex">
        <img src="\images\logoIcon.svg" alt="" />
        <img
          className="ml-[12px] mb-[3.6px] mt-[8.6px]"
          src="\images\NameLogo.svg"
          alt="nameLogo"
        />
      </div>
      <ul className=" flex gap-[10px] items-center">
        <li className="px-[20px]">Marketplace</li>
        <li className="px-[20px]">Rankings</li>
        <li className="px-[20px]">Connect a wallet</li>
        <Button iconPath="/images/nav-user.svg" className="px-[30px]">
          Sign up
        </Button>
      </ul>
    </header>
  );
};
