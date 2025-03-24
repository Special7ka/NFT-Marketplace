import { getAltFromPath } from "../Utils/GetAltFrompath";
import { Button } from "../UI/Button";

export const DiscoverMore = () => {
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
    </section>
  );
};
