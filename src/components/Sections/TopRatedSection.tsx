import { Button } from "../UI/Button";

export const TopRatedSection = () => {
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
          className="px-[50px] self-end"
        >
          View Rankings
        </Button>
      </div>
    </section>
  );
};
