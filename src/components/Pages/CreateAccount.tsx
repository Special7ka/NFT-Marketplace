import { Header } from "../Header";
import { MyInput } from "../UI/MyInput";
import { Footer } from "../Footer";

const CreateAccount = () => {
  return (
    <>
      <Header />
      <section className="grid grid-cols-2 gap-x-[60px] font-WorkSans">
        <img src="public/images/CreateAccount.png" alt="CreateAccount.png" />
        <div className="py-[100px]">
          <h1 className="text-5xl font-semibold">Create account</h1>
          <p className="text-xl max-w-[460px] mt-[20px]">
            Welcome! enter your details and start creating, collecting and
            selling NFTs.
          </p>
          <div className="mt-[40px] flex flex-col gap-[15px] max-w-[330px]">
            <MyInput iconPath="/images/user.svg" />
            <MyInput />
            <MyInput />
            <MyInput />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CreateAccount;
