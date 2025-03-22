import { getAltFromPath } from "./Utils/GetAltFrompath";
export const CollecionSection = () => {
  const cards = [
    {
      mainImgPath: "/images/CollectionSectionImg/DogNft.png",
      firstMini: "images/CollectionSectionImg/CatNFT.png",
      secondMini: "images/CollectionSectionImg/BearNFT.png",
      authAvatar: "images/CollectionSectionImg/avatar-fox.png",
      authName: "MrFox",
      title: "DSGN Animals",
    },
  ];
  return (
    <section className="mt-[80px] px-[115px]">
      <div>
        <h1 className="text-4xl font-semibold font-WorkSans capitalize leading-10">
          Trending Collection
        </h1>
        <p className=" text-xl font-normal font-['Work_Sans'] capitalize leading-9">
          Checkout our weekly updated trending collection.
        </p>
      </div>
      <div className="flex flex-col max-w-[330px] gap-[15px] mt-[60px] ">
        <img src="\images\DogNft.png" alt="DogNFT" />
        <div className=" flex gap-[15px]">
          <img src="\images\CatNFT.png" alt="CatNFT" />
          <img src="\images\BearNFT.png" alt="BearNFT" />
          <div
            className=" 
            w-[100px] rounded-[20px] h-[100px] bg-[#A259FF] flex items-center justify-center 
            text-xl font-bold font-SpaceMono  "
          >
            1025+
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-xl font-semibold font-WorkSans ">DSGN Animals</h1>
          <div className="flex gap-[12px]">
            <img src="\images\avatar-fox.png" alt="avatar-fox.png" />
            <p>MrFox</p>
          </div>
        </div>
      </div>

      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col max-w-[330px] gap-[15px] mt-[60px] "
        >
          <img src={card.mainImgPath} alt={getAltFromPath(card.mainImgPath)} />
          <div className="flex gap-[15px]">
            <img src={card.firstMini} alt={getAltFromPath(card.firstMini)} />
            <img src={card.secondMini} alt={getAltFromPath(card.secondMini)} />
            <div
              className=" 
            w-[100px] rounded-[20px] h-[100px] bg-[#A259FF] flex items-center justify-center 
            text-xl font-bold font-SpaceMono  "
            >
              1025+
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-xl font-semibold font-WorkSans ">
              {card.title}
            </h1>
            <div className="flex gap-[12px]">
              <img
                src={card.authAvatar}
                alt={getAltFromPath(card.authAvatar)}
              />
              <p>{card.authName}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
