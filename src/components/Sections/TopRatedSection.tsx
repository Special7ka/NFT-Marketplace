import { Button } from "../UI/Button";
import { getAltFromPath } from "../Utils/GetAltFrompath";

export const TopRatedSection = () => {
  const creators = [
    {
      img: "/images/TopCreatorsImg/Keepitreal.png",
      name: "Keepitreal",
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
      <div className="grid grid-cols-4">
        {creators.map((creator, index) => (
          <div
            key={index}
            className="bg-neutral-700 rounded-[20px] p-[20px] flex gap-[20px] flex-col items-center justify-center  max-w-[240px]"
          >
            <img src={creator.img} alt={getAltFromPath(creator.img)} />
            <div className="flex flex-col items-center gap-[5px]">
              <p className="text-xl font-semibold">Keepitreal</p>
              <div className="flex gap-[10px]">
                <div className="text-zinc-500 font-WorkSans">Total Sales:</div>
                <div>{creator.sales}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
