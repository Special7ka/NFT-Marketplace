import { Button } from "./UI/Button";

export const HeroSection = () => {
  const stats = [
    { value: "240k+", label: "Total Sale" },
    { value: "100k+", label: "Auctions" },
    { value: "240k+", label: "Artists" },
  ];
  return (
    <section className=" grid grid-cols-2 py-[80px] px-[115px] gap-x-[30px] text-start">
      <div className=" flex flex-col items-start gap-[30px]">
        <div className="flex flex-col items-start gap-[20px]">
          <h1 className="text-7xl font-semibold capitalize leading-[73.70px] font-WorkSans ">
            Discover digital art & Collect NFTs
          </h1>
          <p className="text-xl font-normal font-WorkSans max-w-[520px] leading-9 capitalize text-left">
            NFT marketplace UI created with Anima for <br /> Figma. Collect, buy
            and sell art from more <br /> than 20k NFT artists.
          </p>
        </div>
        <Button iconPath="\images\rocket-launch.svg" className="px-[50px]">
          Get Started
        </Button>
        <div className="flex gap-[30px]">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-start ">
              <span className="text-3xl font-bold font-SpaceMono">
                {stat.value}
              </span>
              <span className="text-white text-2xl font-normal font-WorkSans">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img src="/images/HeroSectionImg/HeroCard.png" alt="HeroCard" />
        <div className=" h-28 p-5 bg-neutral-700 rounded-bl-[20px] rounded-br-[20px] flex flex-col gap-[10px]">
          <h1 className="font-semibold text-xl leading-loose max-h-[31px]">
            Space Walking
          </h1>
          <div className="flex gap-[12px] items-center">
            <img
              src="/images/HeroSectionImg/avatar-Hero.png"
              alt="heroAvatar"
            />
            <span className=" font-WorkSans leading-snug">Animakid</span>
          </div>
        </div>
      </div>
    </section>
  );
};
