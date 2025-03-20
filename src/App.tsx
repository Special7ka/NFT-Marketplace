import "./App.css";

function App() {
  return (
    <>
      <header className="py-[20px] px-[50px] flex items-center justify-between text-white font-WorkSans ">
        <div className="flex">
          <img src="\images\logoIcon.svg" alt="" />
          <img
            className="ml-[12px] mb-[3.6px] mt-[8.6px]"
            src="\images\NameLogo.svg"
            alt="nameLogo"
          />
        </div>
        <ul className=" flex gap-[10px] items-center">
          <li className="px-[20px]">Marketplace</li>
          <li className="px-[20px]">Rankings</li>
          <li className="px-[20px]">Connect a wallet</li>
          <button className="inline-flex gap-[12px] h-14 px-7 bg-purple-500 rounded-[20px] items-center">
            <img
              className="w-5 h-5"
              src="public\images\nav-user.svg"
              alt="nav-user.svg"
            />
            Sign Up
          </button>
        </ul>
      </header>
    </>
  );
}

export default App;
