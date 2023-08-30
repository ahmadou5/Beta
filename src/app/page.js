"use client";
import { Nav } from "@/components/Nav";

import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(0);
  const Menus = [
    { name: "Home", icon: "home", dis: "translate-x-0", ref: "" },
    { name: "Swap", icon: "swap", dis: "translate-x-15", ref: "swap" },
    { name: "Earn", icon: "leaf", dis: "translate-x-31", ref: "earn" },
    { name: "Mint", icon: "water", dis: "translate-x-45", ref: "mint" },
    { name: "Wallet", icon: "wallet", dis: "translate-x-65", ref: "wallet" },
  ];

  const Mores = [
    { 
      name: "Invest Now",
      url: "invest.png", 
      content: '🌟 Unlock passive income potential with our secure crypto staking project. 🔒 Join a trusted community of investors already earning rewards.' 
    },
    { 
      name: "Secured", 
      url: "sp.png", 
      content: "🛡️ Rest easy knowing our project employs state-of-the-art security measures.🔐 Your assets are safeguarded with the utmost care against any potential threats."
    },
    { 
      name: "Your Wallet", 
      url: "cw.png", 
      content: "🔑 Retain full ownership of your assets by connecting your non-custodial wallets.🛡️ Our platform respects your control and ensures your assets remain in your hands. " 
    },
    { 
      name: "Earn Crypto", 
      url: "cc.png", 
      content: "💰 Generate crypto earnings with YZ tokens through staking, and sell anytime as you wish.🔄 Reinvest your YZ tokens through staking to unlock even greater potential returns." 
    },
    { 
      name: "NFT Staking", 
      url: "nft1.png", 
      content: "💰 Generate crypto earnings with YZ tokens through staking, and sell anytime as you wish.🔄 Reinvest your YZ tokens through staking to unlock even greater potential returns." 
    },
  ];
  const hello = () => {
    if (active === 0) {
      return (
        <>
          <div className="ml-6 mr-6 mt-20 mb-5 bg-inherit items-center text-start text-ellipsis text-4xl">
            <h1 className="text-white font-thin font-sans">👋🏽 Welcome to</h1>

            <h1 className="text-[#359cfc] font-thin font-sans">YieldZone</h1>

            {/**  <div className=" ml-auto mr-3 text-sm items-end">
          <button className="w-40 h-10 py-1 px-1 rounded-3xl bg-[#359cfc] drop-shadow-3xl shadow-3xl hover:bg-[#589ee0] hover:rounded-2xl"> Connect Wallet </button>
      </div>**/}
          </div>
        </>
      );
    }
  };
  const view = () => {
    if (active === 0) {
      return (
        <div>
          <div className="w-[100%] h-auto  mt-2 ">
            <div className="py-4 px-4 ">
              <div  style={{'backdrop-filter': 'blur(280px)'}} className="w-full bg-[#0B0E11] rounded-full py-0 px-0">
                <img
                  className="ml-auto mr-auto w-[95%] h-[50%]"
                  src="./trade.png"
                />
              </div>
              <div style={{'backdrop-filter': 'blur(180px)'}} className=" mr-auto ml-auto bg-[#0B0E11] mt-6  shadow-lg bg-clip-padding bg-opacity-60 flex items-center text-ellipsis text-center w-[95%] h-40 py-1 px-1  rounded-3xl">
                    <p className="ml-auto mr-auto text-[#dfe5eb] text-center content-center font-bold">
                      {'Experience the future of earning with YieldZone: Stake securely, earn effortlessly, and shape the decentralized landscape. Unleash your assets potential today for rewards tomorrow'}
                    </p>
                  </div>
            </div>
          </div>
          <div className=" ml-auto mt-10 mb-14 mr-auto text-sm flex items-center">
            <button className="w-40 h-10 py-1 px-1 rounded-3xl ml-auto mr-auto mb-auto bg-[#359cfc] hover:bg-[#589ee0] hover:rounded-2xl">
              {" "}
              Explore{" "}
            </button>
          </div>
          {Mores.map((more, i) => (
            <div
              key={i}
              style={{
                "background-image": "url(./uu.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="py-1 px-1 mt-14 mb-14 h-96 w-[95%] rounded-3xl ml-auto mr-auto"
            >
              <div className="w-[100%] mt-5 ">
                <div className="py-4 px-4 ">
                  <div style={{'backdrop-filter': 'blur(80px)'}} className="bg-transparent w-[90px] h-[90px] mb-4 shadow-lg bg-clip-padding bg-opacity-60 ml-auto mr-auto  flex items-center rounded-full ">
                    <img className="" src={`./${more.url}`} />
                  </div>
                  <div style={{'backdrop-filter': 'blur(80px)'}} className=" mr-auto ml-auto  bg-transparent shadow-lg bg-clip-padding bg-opacity-60 flex items-center text-ellipsis text-center w-28 h-10 py-1 px-1  rounded-3xl">
                    <p className="ml-auto mr-auto text-[#dfe5eb] text-center content-center font-bold">
                      {more.name}
                    </p>
                  </div>
                  <div style={{'backdrop-filter': 'blur(80px)'}} className=" mr-auto ml-auto  bg-transparent shadow-lg bg-clip-padding bg-opacity-60 flex items-center text-ellipsis text-center w-[90%] mt-4 h-40 py-1 px-1  rounded-3xl">
                    <p className="py-1 px-1 text-[#dfe5eb] text-center content-center font-bold">
                      {more.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-[#0B0E11] mb-40 h-25 w-[95%] flex items-center px-2 py-2 ml-auto mt-20 mr-auto rounded-md lg:hidden md:hidden">
            <div className="h-[5rem]  w-[90%]">
              <p>USDT</p>
              <p>80k</p>
            </div>
          </div>
        </div>
      );
    }
    if (active && active === 1) {
      return <h1>Swap page</h1>;
    }
    if (active && active === 2) {
      return <h1>Earn Page</h1>;
    }
    if (active && active === 3) {
      return <h1>MInt page</h1>;
    }
    if (active && active === 4) {
      return <h1>wallett page</h1>;
    } else return 404;
  };

  return (
    <div>
      <div className="h-[80%] w-[100%] mb-auto">
        {hello()}
        {view()}
      </div>
      <div className=" mb-0 ml-0 mr-0 bg-transparent fixed bottom-0 w-full">
        <div style={{'backdrop-filter': 'blur(16px)'}} className="bg-[#0B0E11] backdrop-blur-lg bg-clip-padding bg-opacity-60  max-h-[4rem] w-[95%] px-6 ml-auto mr-auto rounded-t-xl lg:hidden md:hidden">
          <ul className="flex relative">
            {/**<span className={`bg-blue-500 border-4 duration-500 ${Menus[active].dis} border-black h-16 w-16 absolute rounded-full -top-6`}>
             <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadow1" ></span>
             <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-myShadow2"></span>
  </span>**/}
            {Menus.map((menu, i) => (
              <li key={i} className="w-20">
                <div
                  className=" flex flex-col text-center pt-6 "
                  onClick={() => {
                    setActive(i);
                  }}
                >
                  <span
                    style={{}}
                    className={`text-xl cursor-pointer duration-700 ${
                      i === active && "-mt-6 bg-clip-padding bg-opacity-60  text-transparent"
                    }`}
                  >
                    <ion-icon name={menu.icon}></ion-icon>
                  </span>
                  <span
                    className={` -mt-1 ${
                      active === i
                        ? "translate-y-0 duration-700 text-[#359cfc] opacity-100"
                        : "opacity-0 translate-y-15"
                    }`}
                  >
                    {menu.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
