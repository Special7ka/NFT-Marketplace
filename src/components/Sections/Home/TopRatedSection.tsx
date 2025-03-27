import { Button } from "../../UI/Button";
import { getAltFromPath } from "../../Utils/GetAltFrompath";

export const TopRatedSection = () => {
  const creators = [
    {
      img: "/images/TopCreatorsImg/Keepitreal.png",
      name: "Keepitreal",
      sales: "34.53 ETH",
    },
    {
      img: "/images/TopCreatorsImg/DigiLab.png",
      name: "DigiLab",
      sales: "34.53 ETH",
    },
    {
      img: "/images/TopCreatorsImg/GravityOne.png",
      name: "GravityOne",
      sales: "34.53 ETH",
    },
    {
      img: "/images/TopCreatorsImg/Juanie.png",
      name: "Juanie",
      sales: "34.53 ETH",
    },
    {
      img: "/images/TopCreatorsImg/BlueWhale.png",
      name: "BlueWhale",
      sales: "34.53 ETH",
    },
    {
      img: "/images/TopCreatorsImg/MrFox.png",
      name: "Mr Fox",
      sales: "34.53 ETH",
    },
    {
      img: "/images/TopCreatorsImg/Shroomie.png",
      name: "Shroomie",
      sales: "34.53 ETH",
    },
    {
      img: "/images/TopCreatorsImg/Pobotica.png",
      name: "Robotica",
      sales: "34.53 ETH",
    },
    {
      img: "/images/TopCreatorsImg/RustyRobot.png",
      name: "RustyRobot",
      sales: "34.53 ETH",
    },
    {
      img: "/images/TopCreatorsImg/Animakid.png",
      name: "Animakid",
      sales: "34.53 ETH",
    },
    {
      img: "/images/TopCreatorsImg/Dotgu.png",
      name: "Dotgu",
      sales: "34.53 ETH",
    },
    {
      img: "/images/TopCreatorsImg/Chiblier.png",
      name: "Ghiblier",
      sales: "34.53 ETH",
    },
  ];
  return (
    <section className="py-[80px] px-[115px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[10px]">
          <h1 className=" text-4xl font-semibold font-WorkSans">
            Top creators
          </h1>
          <p className="text-xl font-WorkSans">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <Button
          iconPath="\images\rocket-launch-purple.svg"
          variant="secondary"
          className="px-[50px] self-end  font-semibold font-WorkSans"
        >
          View Rankings
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-y-[30px] gap-x-[30px] mt-[60px]">
        {creators.map((creator, index) => (
          <div
            key={index}
            className="relative bg-neutral-700 rounded-[20px] p-[20px] flex gap-[20px] flex-col items-center justify-center  "
          >
            <div
              className="absolute top-[20px] left-[20px] text-zinc-500 
                            font-SpaceMono rounded-[20px] 
                            bg-zinc-800 w-[30px] text-center h-[30px] 
                            flex  items-center justify-center"
            >
              {index + 1}
            </div>
            <img src={creator.img} alt={getAltFromPath(creator.img)} />
            <div className="flex flex-col items-center gap-[5px]">
              <p className="text-xl font-semibold">{creator.name}</p>
              <div className="flex gap-[10px]">
                <div className="text-[#858584] font-WorkSans">Total Sales:</div>
                <div>{creator.sales}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
