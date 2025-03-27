import { getAltFromPath } from "../../Utils/GetAltFrompath";
export const BrowseCategoresSection = () => {
  const CategoriesCards = [
    { imgPath: "/images/CategoryImg/Art.png", title: "Art" },
    {
      imgPath: "/images/CategoryImg/Collectibles.png",
      title: "Collectibles",
    },
    { imgPath: "/images/CategoryImg/Music.png", title: "Music" },
    {
      imgPath: "/images/CategoryImg/photography.png",
      title: "Photography",
    },
    { imgPath: "/images/CategoryImg/Video.png", title: "Video" },
    {
      imgPath: "/images/CategoryImg/Utility.png",
      title: "Utility",
    },
    { imgPath: "/images/CategoryImg/Sport.png", title: "Sport" },
    {
      imgPath: "/images/CategoryImg/VirtualWorlds.png",
      title: "Virtual Worlds",
    },
  ];
  return (
    <section className="flex flex-col py-[80px] px-[115px]">
      <h1 className="text-4xl font-semibold font-WorkSans">
        Browse Categories
      </h1>
      <div className="grid grid-cols-4 mt-[60px] gap-[30px]">
        {CategoriesCards.map((card, index) => (
          <div
            key={index}
            className="bg-[#3B3B3B] rounded-[20px] flex flex-col justify-center"
          >
            <img src={card.imgPath} alt={getAltFromPath(card.imgPath)} />
            <p
              className="px-[30px] pt-[20px] pb-[25px] 
            text-xl font-semibold font-WorkSans capitalize "
            >
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
