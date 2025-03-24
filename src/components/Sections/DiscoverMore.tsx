import { getAltFromPath } from "../Utils/GetAltFrompath";
import { Button } from "../UI/Button";

export const DiscoverMore = () => {
  const DiscoverCards = [
    {
      imgPath: "/images/DisvocerSectionImg/distantGalaxy.png",
      title: "Distant Galaxy",
      authIcon: "/images/DisvocerSectionImg/AvatarOne.png",
      authName: "MoonDancer",
      price: "1.63 ETH",
      Bid: "0.33 wETH",
    },
    {
      imgPath: "/images/DisvocerSectionImg/LifeOnMars.png",
      title: "Life On Edena",
      authIcon: "/images/DisvocerSectionImg/AvatarTwo.png",
      authName: "NebulaKid",
      price: "1.63 ETH",
      Bid: "0.33 wETH",
    },
    {
      imgPath: "/images/DisvocerSectionImg/AstroFiction.png",
      title: "AstroFiction",
      authIcon: "/images/DisvocerSectionImg/AvatarThree.png",
      authName: "Spaceone",
      price: "1.63 ETH",
      Bid: "0.33 wETH",
    },
  ];
  return (
    <section className="py-[80px] px-[115px] flex flex-col">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-4xl  font-semibold font-WorkSans">
            Discover More NFTs
          </h1>
          <p className="text-xl font-normal font-WorkSans">
            Explore new trending NFTs
          </p>
        </div>
        <Button
          className="px-[50px]"
          iconPath="/images/eye.svg"
          variant="secondary"
        >
          See All
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-[30px] mt-[60px]">
        {DiscoverCards.map((card, index) => (
          <div
            key={index}
            className=" flex flex-col bg-[#3B3B3B] rounded-[20px]"
          >
            <img src={card.imgPath} alt={getAltFromPath(card.imgPath)} />
            <div className="px-[30px] pt-[20px] pb-[25px]">
              <h2 className="text-xl font-semibold font-WorkSans">
                {card.title}
              </h2>
              <div className="flex mt-[5px] gap-[12px]">
                <img src={card.authIcon} alt={getAltFromPath(card.authIcon)} />
                <span className="font-SpaceMono">MoonDancer</span>
              </div>
              <div className="flex justify-between text-[#71717a] text-xs font-SpaceMono mt-[25px]">
                <div className="flex flex-col gap-[8px]">
                  <p>Price</p>
                  <p className="text-base text-white">{card.price}</p>
                </div>
                <div className="text-right flex flex-col gap-[8px]">
                  <p>Highest Bid</p>
                  <p className="text-base text-white">{card.Bid}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
