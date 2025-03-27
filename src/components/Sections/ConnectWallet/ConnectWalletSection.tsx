import { MyLabel } from "../../UI/MyLabel";

export const ConnectWalletSection = () => {
  return (
    <section className="grid grid-cols-2 gap-[60px] font-WorkSans">
      <img src="public/images/Connect.png" alt="Connect.png" />
      <div className="py-[100px]">
        <h1 className="text-5xl font-semibold">Connect wallet</h1>
        <p className="mt-[20px] max-w-[460px] text-xl">
          Choose a wallet you want to connect.
          <br />
          There are several wallet providers.
        </p>
        <div className="flex flex-col gap-[20px] mt-[40px]">
          <MyLabel iconPath="/images/metamask.svg" label="Metamask" />
          <MyLabel
            iconPath="/images/wallet-connect.svg"
            label="Wallet Connect"
          />
          <MyLabel iconPath="public/images/coinbase.svg" label="Coinbase" />
        </div>
      </div>
    </section>
  );
};
