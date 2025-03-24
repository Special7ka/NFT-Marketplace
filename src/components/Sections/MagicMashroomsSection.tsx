import { Button } from "../UI/Button";
import { getAltFromPath } from "../Utils/GetAltFrompath";
import { Timer } from "../UI/TImer";

export const MagicMashroomsSection = () => {
  return (
    <section className="grid grid-cols-3 bg-[url('/images/MagicMashroomsSection/Mashroom.png')] bg-auto  bg-no-repeat bg-center  h-[640px]  items-end px-[115px] pb-[60px]">
      <div className="flex flex-col  w-fit gap-[30px] col-span-2">
        <div className="px-5 py-2.5 bg-[#3B3B3B] rounded-[20px] flex gap-[12px] w-fit ">
          <img
            src="/images/MagicMashroomsSection/Avatar.png"
            alt={getAltFromPath("/images/MagicMashroomsSection/Avatar.png")}
          />
          <p className=" font-WorkSans">Shroomie</p>
        </div>
        <h1 className="text-5xl font-semibold font-WorkSans">
          Magic Mashrooms
        </h1>
        <Button
          className="px-[50px] bg-white text-black w-fit"
          iconPath="/images/eye.svg"
        >
          See NFT
        </Button>
      </div>
      <Timer />
    </section>
  );
};
