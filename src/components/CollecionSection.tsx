import { getAltFromPath } from "./Utils/GetAltFrompath";
export const CollecionSection = () => {
  const cards = [
    {
      mainImgPath: "/images/CollectionSectionImg/DogNft.png",
      firstMini: "images/CollectionSectionImg/CatNFT.png",
      secondMini: "images/CollectionSectionImg/BearNFT.png",
      authAvatar: "images/CollectionSectionImg/avatar-fox.png",
      title: "DSGN Animals",
      authName: "MrFox",
    },
    {
      mainImgPath: "/images/CollectionSectionImg/mashroomMain.png",
      firstMini: "/images/CollectionSectionImg/mashroomFirst.png",
      secondMini: "public/images/CollectionSectionImg/mashroomSecond.png",
      authAvatar: "public/images/CollectionSectionImg/avatar-AAng.png",
      title: "Magic Mushrooms",
      authName: "Shroomie",
    },
    {
      mainImgPath: "/images/CollectionSectionImg/ComsmoMain.png",
      firstMini: "/images/CollectionSectionImg/CosmoFirst.png",
      secondMini: "/images/CollectionSectionImg/mashroomSecond.png",
      authAvatar: "/images/CollectionSectionImg/CosmoAvatar.png",
      title: "Disco Machines",
      authName: "BeKind2Robots",
    },
  ];
  return (
    <section className="mt-[80px] px-[115px] flex flex-col">
      <div>
        <h1 className="text-4xl font-semibold font-WorkSans capitalize leading-10">
          Trending Collection
        </h1>
        <p className=" text-xl font-normal font-['Work_Sans'] capitalize leading-9 mt-[10px]">
          Checkout our weekly updated trending collection.
        </p>
      </div>
      <div className="flex gap-[30px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col max-w-[330px] gap-[15px] mt-[60px] "
          >
            <img
              src={card.mainImgPath}
              alt={getAltFromPath(card.mainImgPath)}
            />
            <div className="flex gap-[15px]">
              <img src={card.firstMini} alt={getAltFromPath(card.firstMini)} />
              <img
                src={card.secondMini}
                alt={getAltFromPath(card.secondMini)}
              />
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
      </div>
    </section>
  );
};
