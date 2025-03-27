import { Header } from "../Sections/Shared/Header";
import { Footer } from "../Sections/Shared/Footer";
import { ConnectWalletSection } from "../Sections/ConnectWallet/ConnectWalletSection";

const ConnectWallet = () => {
  return (
    <>
      <Header />
      <ConnectWalletSection />
      <Footer />
    </>
  );
};

export default ConnectWallet;
