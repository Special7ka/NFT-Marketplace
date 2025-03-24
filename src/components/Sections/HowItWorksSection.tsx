import { getAltFromPath } from "../Utils/GetAltFrompath";

export const HowItWorksSection = () => {
  const howItWorksCards = [
    {
      imgPath: "/images/HowItWorksSectionImg/Wallet.png",
      title: "Setup Your wallet",
      content:
        "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
      imgPath: "/images/HowItWorksSectionImg/Collection.png",
      title: "Create Collection",
      content:
        "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
      imgPath: "/images/HowItWorksSectionImg/Earning.png",
      title: "Start Earning",
      content:
        "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
  ];
  return (
    <section className="py-[80px] px-[115px]">
      <div className="flex flex-col gap-[10px]">
        <h1 className="text-4xl font-semibold font-WorkSans">How it works</h1>
        <span className="text-xl font-WorkSans">
          Find out how to get started
        </span>
      </div>
      <div className="grid grid-cols-3 gap-[30px] mt-[45px]">
        {howItWorksCards.map((card, index) => (
          <div
            key={index}
            className="px-[30px] pb-[30px] gap-[20px] bg-[#3B3B3B] rounded-[20px]"
          >
            <img src={card.imgPath} alt={getAltFromPath(card.imgPath)} />
            <div className="flex flex-col  items-center gap-[10px]">
              <h2 className="text-xl font-semibold font-WorkSans">
                {card.title}
              </h2>
              <p className="text-center font-WorkSans">{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
