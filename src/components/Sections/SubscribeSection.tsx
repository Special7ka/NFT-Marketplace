import { getAltFromPath } from "../Utils/GetAltFrompath";
import { MyInput } from "../UI/MyInput";

export const SubscribeSection = () => {
  return (
    <section className="pt-[40px] pb-[80px] px-[115px]">
      <div className="max-w-[1050px] p-[60px] flex gap-[80px] bg-[#3B3B3B] rounded-[20px] ">
        <img
          src="public/images/Comsos.png"
          alt={getAltFromPath("public/images/Comsos.png")}
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-semibold font-WorkSans max-w-[400px] leading-10">
            Join our weekly Digest
          </h1>
          <p className="text-xl font-normal font-WorkSans mt-[10px] leading-9 mb-[40px]">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <MyInput />
        </div>
      </div>
    </section>
  );
};
