import { getAltFromPath } from "../../Utils/GetAltFrompath";
export const BrowseCategoresSection = () => {
  const CategoriesCards = [
    { imgPath: "/images/BrowseCategoriesSectionImg/Art.png", title: "Art" },
    {
      imgPath: "/images/BrowseCategoriesSectionImg/Collectibles.png",
      title: "Collectibles",
    },
    { imgPath: "/images/BrowseCategoriesSectionImg/Music.png", title: "Music" },
    {
      imgPath: "/images/BrowseCategoriesSectionImg/photography.png",
      title: "Photography",
    },
    { imgPath: "/images/BrowseCategoriesSectionImg/Video.png", title: "Video" },
    {
      imgPath: "/images/BrowseCategoriesSectionImg/Utility.png",
      title: "Utility",
    },
    { imgPath: "/images/BrowseCategoriesSectionImg/Sport.png", title: "Sport" },
    {
      imgPath: "/images/BrowseCategoriesSectionImg/VirtualWorlds.png",
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
