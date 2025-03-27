import { MyInput } from "./UI/MyInput";

export const Footer = () => {
  return (
    <footer className="bg-[#3B3B3B] py-[40px] px-[115px] flex flex-col font-WorkSans  text-[#CCCCCC]">
      <div className="grid grid-cols-[0.8fr_0.5fr_1fr]">
        <div className="flex flex-col mx-[31px]">
          <div className="flex max-w-[] ">
            <img src="/images/storefront.svg" alt="storefront.svg" />
            <img src="/images/NameLogo.svg" alt="NameLogo.svg" />
          </div>
          <p className="mt-[30px] max-w-[238px]">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <p className="mt-[20px]">Join our community</p>
          <div className="flex mt-[15px] gap-[10px]">
            <img src="/images/discord-logo.svg" alt="discord-logo.svg" />
            <img src="/images/youtube-logo.svg" alt="youtube-logo.svg" />
            <img src="/images/twitter-logo.svg" alt="twitter-logo.svg" />
            <img src="/images/instagram-logo.svg" alt="instagram-logo.svg" />
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h2 className=" text-xl font-bold font-SpaceMono text-white">
            Explore
          </h2>
          <p className="mt-[14px]">Marketplace</p>
          <p>Rankings</p>
          <p>Connect a wallet</p>
        </div>
        <div className="flex flex-col pr-[31px]">
          <h2 className="text-white text-xl font-bold">
            Join our weekly digest
          </h2>
          <p className="mt-[32px] mb-[20px] max-w-[330px]">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <MyInput isButton />
        </div>
      </div>
      <hr className="mt-[30px]" />
      <p className="mt-[20px] text-xs font-WorkSans">
        Ⓒ NFT Market. Use this template freely.
      </p>
    </footer>
  );
};
