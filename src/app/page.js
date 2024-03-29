"use client";
import truncate from 'truncate-ethereum-address'
import { useAccount,useBalance ,useToken } from "wagmi";
import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import { useState } from "react";
import TypewriterComponent from "typewriter-effect";
import { Splide, SplideSlide } from "@splidejs/splide";
import truncateEthAddress from 'truncate-eth-address';

export default function Home1() {
  const account = useAccount();
  const [active, setActive] = useState(0);
  const [splited, setSplited] = useState('0x0000000000000000000000000000000dead')

  const link = [
    {name: 'github', url: './discord.svg'},
    {name: 'github', url: './tiktok.svg'},
    {name: 'github', url: './twitter.svg'}
  ]
  const Socials = [
    { name: "Tiktok", icon: "./tiktok.svg" },
    { name: "X", icon: "./twitter.svg" },
    { name: "Telegram", icon: "./tg.svg" },
    { name: "Discord", icon: "./discord.svg" },
    { name: "Youtube", icon: "./next.svg" },
  ];

  const tokens = [
    {name: 'YielZone Token', bln: 6000, lg: 'YZ Token' },
    {name: 'Ethereum',  bln: 10, lg: 'ETH' },
    {name: 'BNB',  bln: 3460, lg: 'BNB' },
    {name: 'MATIC ',  bln: 2322260, lg: 'MATIC' }
  ]
  const chains = [
    { name: "Polygon", icon: "./matic.svg" },
    { name: "Binance", icon: "./bnb.svg" },
    { name: "BASE", icon: "./base.svg" },
    { name: "Optimism", icon: "./op.svg" },
  ];

  const products = [
    { name: "Swap" },
    { name: "Staking" },
    { name: "NFT-Staking" },
  ];

  const others = [
    { name: "Careers" },
    { name: "Blog" },
    { name: "Contact-Us" },
    { name: "Help-Center" },
    { name: "Docs" },
  ];
  const Menus = [
    { name: "Home", icon: "home", dis: "translate-x-0", ref: "" },
    { name: "Swap", icon: "swap", dis: "translate-x-15", ref: "swap" },
    { name: "Earn", icon: "leaf", dis: "translate-x-31", ref: "earn" },
    { name: "Mint", icon: "water", dis: "translate-x-45", ref: "mint" },
    { name: "Wallet", icon: "wallet", dis: "translate-x-65", ref: "wallet" },
  ];

  const [open, setOpen] = useState(false);

  const Mores = [
    {
      name: "Invest Now",
      url: "invest.png",
      content:
        "🌟 Unlock passive income potential with our secure crypto staking project. 🔒 Join a trusted community of investors already earning rewards.",
    },
    {
      name: "Secured",
      url: "sp.png",
      content:
        "🛡️ Rest easy knowing our project employs state-of-the-art security measures.🔐 Your assets are safeguarded with the utmost care against any potential threats.",
    },
    {
      name: "Your Wallet",
      url: "cw.png",
      content:
        "🔑 Retain full ownership of your assets by connecting your non-custodial wallets.🛡️ Our platform respects your control and ensures your assets remain in your hands. ",
    },
    {
      name: "Earn Crypto",
      url: "cc.png",
      content:
        "💰 Generate crypto earnings with YZ tokens through staking, and sell anytime as you wish.🔄 Reinvest your YZ tokens through staking to unlock even greater potential returns.",
    },
    {
      name: "NFT Staking",
      url: "nft1.png",
      content:
        "🎨 Dive into NFT staking – simply mint your NFTs to get started!🌟 Your NFT creations can now earn rewards through our innovative staking platform.",
    },
  ];
  const hello = () => {
    if (active === 0) {
      return (
        <>
          <div className="ml-6 mr-6 mt-20 lg:mt-28 lg:ml-14 lg:mr-14 flex flex-row mb-5 lg:mb-10 bg-inherit items-center  text-start text-ellipsis text-4xl">
            <div className="mr-auto">
              <h1 className="text-white font-bold  ">👋🏽 Welcome to</h1>
              <div className=" text-[#359cfc] font-bold ">
                <TypewriterComponent
                  className=" text-ellipsis  font-bold"
                  options={{
                    strings: ["YieldZone.", "SafeZone.", "EarnZone."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>

            <div className=" hidden lg:flex text-sm ml-auto items-end">
              {
                <Web3Button
                  className="w-96 ml-9 mr-9"
                  icon="false"
                  balance="show"
                  label="Connect Wallet"
                />
              }
              <div className="ml-2 mr-2">
                {account.isConnected && <Web3NetworkSwitch />}
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  const view = () => {
    if (active === 0) {
      return (
        <div>
          <div className="w-[100%] h-auto lg:mt-9 mt-2 ">
            <div className="py-4 px-4 lg:flex lg:flex-row ">
              <div
                style={{ "backdrop-filter": "blur(280px)" }}
                className="w-full bg-[#0B0E11] ml-auto mr-auto lg:w-[40%] shadow-lg bg-clip-padding bg-opacity-60 rounded-full py-0 px-0"
              >
                <img
                  className="ml-auto mr-auto w-[95%] lg:h-[95%]  h-[50%]"
                  src="./trade.png"
                />
              </div>
              <div
                style={{ "backdrop-filter": "blur(180px)" }}
                className=" mr-auto ml-auto lg:mt-auto lg:mb-auto bg-[#0B0E11] mt-6 lg:w-[45%] lg:py-4 lg:px-4 shadow-lg bg-clip-padding bg-opacity-60 flex items-center text-ellipsis text-center w-[95%] h-40 py-1 px-1  rounded-3xl"
              >
                <p className="ml-auto mr-auto text-[#dfe5eb] text-center content-center ">
                  {
                    "Experience the future of earning with YieldZone: Stake securely, earn effortlessly, and shape the decentralized landscape. Unleash your assets potential today for rewards tomorrow"
                  }
                </p>
              </div>
            </div>
          </div>
          <div className=" ml-auto mt-10 mb-14 mr-auto text-sm flex items-center">
            <button className="w-40 h-10 py-1 px-1 text-[#1E2329] rounded-3xl ml-auto mr-auto mb-auto bg-[#359cfc] hover:bg-[#589ee0] hover:rounded-2xl">
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
              className="py-1 px-1 mt-14 mb-14 h-96 w-[95%] md:w-[80%] lg:w-[60%] lg:h-2/3 rounded-3xl ml-auto mr-auto"
            >
              <div className="w-[100%] mt-5 ">
                <div className="py-4 px-4 ">
                  <div
                    style={{ "backdrop-filter": "blur(180px)" }}
                    className="bg-transparent w-[90px] h-[90px] mb-4 shadow-lg bg-clip-padding bg-opacity-60 ml-auto mr-auto  flex items-center rounded-full "
                  >
                    <img className="" src={`./${more.url}`} />
                  </div>
                  <div
                    style={{ "backdrop-filter": "blur(180px)" }}
                    className=" mr-auto ml-auto  bg-transparent shadow-lg bg-clip-padding bg-opacity-60 flex items-center text-ellipsis text-center w-28 h-10 py-1 px-1  rounded-3xl"
                  >
                    <p className="ml-auto mr-auto text-[#dfe5eb] text-center content-center ">
                      {more.name}
                    </p>
                  </div>
                  <div
                    style={{ "backdrop-filter": "blur(180px)" }}
                    className=" mr-auto ml-auto  bg-transparent shadow-lg bg-clip-padding bg-opacity-60 flex items-center text-ellipsis text-center w-[90%] mt-4 h-40 py-1 px-1  rounded-3xl"
                  >
                    <p className="py-1 px-1 text-[#dfe5eb] text-center content-center ">
                      {more.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div
            style={{ "backdrop-filter": "blur(180px)" }}
            className="bg-[#0B0E11] mb-5 lg:h-96 w-full h-1/3 flex px-2 py-2 ml-auto mt-5 mr-auto lg:flex "
          >
            <div className=" ml-auto lg:mt-auto lg:mb-auto mr-auto w-full">
              <p className="text-white flex items-center ml-8 mr-8 mb-6 shadow-lg backdrop-brightness-100 mt-5 text-2xl font-thin">
                Powered by{" "}
              </p>
              <div className="flex  flex-col lg:items-start lg:flex-row mb-9 items-center">
                {chains.map((social, index) => (
                  <>
                    <div
                      key={index}
                      style={{ "backdrop-filter": "blur(280px)" }}
                      className=" ml-auto  lg:flex lg:flex-col items-start bg-[#1E2329]  py-2 px-2 rounded-full mr-auto  mt-2 mb-2 w-28 h-28"
                    >
                      <div
                        style={{ "backdrop-filter": "blur(280px)" }}
                        className="w-[80%] h-[80%] mt-3 mb-1 items-start  ml-auto mr-auto  py-2 px-2"
                      >
                        <img
                          className="w-full h-full mt-auto mb-auto"
                          src={social.icon}
                        />
                      </div>
                      <div className="hidden md:flex lg:flex">
                        {" "}
                        {social.name}
                      </div>
                      <div className="lg:hidden sm:flex"> {social.name}</div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{ "backdrop-filter": "blur(180px)" }}
            className="bg-[#0B0E11] mb-16 lg:h-96 w-full h-1/3 flex px-2 py-2 ml-auto mt-16 mr-auto lg:flex "
          >
            <div className=" ml-auto lg:mt-auto lg:mb-auto mr-auto w-full">
              <p className="text-white flex items-center ml-4 mr-4 mb-6 mt-5 text-3xl font-thin">
                YieldZone{" "}
              </p>
              <div className="flex  flex-col lg:items-start lg:flex-row mb-9 items-center">
                <div className="items-start flex flex-col w-[100%] h-auto ml-10 mb-14">
                  <p className=" font-light text-xl mt-1 mb-6">
                    Keep Up With Latest News From YieldZone
                  </p>
                </div>
                <div className="flex w-[90%] flex-col">
                  <p className="text-xl font-light mb-10">
                    Subscribe to our Weekly News Letter
                  </p>
                  <div className="flex flex-row mt6 items-center mr-3 ">
                    <div className=" w-[90%] h-10 ml-3 mr-3">
                      <input
                        type="email"
                        placeholder="AndreCronje@mail.com"
                        className="h-[100%] w-[100%] bg-[#1E2329] px-2 rounded-2xl"
                      />
                    </div>
                    <div className=" w-[50%] h-10 ml-3 mr-3">
                      <button className="w-[100%] h-[100%] px-1 text-[#1E2329] rounded-3xl ml-auto mr-auto mb-auto bg-[#359cfc] hover:bg-[#589ee0] hover:rounded-2xl">
                        {" "}
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div></div>
            <div className="w-full h-68 lg:ml-14 lg:mr-16 flex items-center">
              <div
                className="w-[90%] h-64 ml-5 "
                style={{ "backdrop-filter": "blur(180px)" }}
              >
                <div className="font-semibold mb-4 text-blue-500">Socials</div>
                {Socials.map((social, index) => (
                  <div key={index}>{social.name}</div>
                ))}
              </div>
              <div
                className="w-[90%] h-64  "
                style={{ "backdrop-filter": "blur(180px)" }}
              >
                <div className="font-semibold mb-4 text-blue-500">Products</div>
                {products.map((product, index) => (
                  <div key={index}>{product.name}</div>
                ))}
              </div>
              <div
                className="w-[90%] h-64 mr-2 "
                style={{ "backdrop-filter": "blur(180px)" }}
              >
                <div className="font-semibold mb-4 text-blue-500">Company</div>
                {others.map((product, index) => (
                  <div key={index}>{product.name}</div>
                ))}
              </div>
            </div>
            <div className="mb-24 lg:mb-3 ml-6 flex flex-row font-semibold">
              <p className="w-[45%] ">
                © {new Date().getFullYear()} YieldZone
              </p>
              <div  className="w-[15%] ml-auto mr-16 flex flex-row">
              {link.map((links, i) => (
                <img key={i}  className="w-6 h-6 ml-1 mr-1" src={`./${links.url}`} />
              ))
              }
              </div>
            </div> 
          </div>
        </div>
      );
    }
    if (active && active === 1) {
      return <h1>Swap page</h1>;
    }
    if (active && active === 2) {
      console.log("habu pa");
      return <h1>Earn Page</h1>;
    }
    if (active && active === 3) {
      return <h1>MInt page</h1>;
    }
    if (active && active === 4) {
      return (
        <div className="flex items-center flex-col justify-center ">
          <div></div>
          {!open && (
          <>
          <div
            style={{
              "background-image": "url(./uu.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="py-1 px-1 mt-0 mb-5 h-96 w-full rounded-b-3xl ml-auto mr-auto"
          >
            <div
              style={{ "backdrop-filter": "blur(180px)" }}
              className="bg-transparent  w-[80%] h-[80%] py-1 px-1 mb-5 mt-7 shadow-lg bg-clip-padding bg-opacity-60 ml-auto mr-auto  flex items-center rounded-full "
            >
              <img className="" src="./cw.png" />
            </div>
            
          </div>
          <div onClick={() => setOpen(true)} className="mt-10 ml-auto mr-auto">
           <Web3Button />
          </div>
          </>
          )}
          
          { open && (
            <>
              <div className="w-[100%] h-[100%] ">
                <div className="h-56 w-full py-2 px-2">
                <div className=" ml-auto mt-5 mb-8 mr-auto text-sm flex items-end">
                  <Web3NetworkSwitch />
                </div>
                  <div style={{ "backdrop-filter": "blur(18px)" }}  className="h-9 py-2 px-2 text-center rounded-3xl ml-auto mr-auto mb-auto shadow-lg bg-clip-padding bg-opacity-60 bg-[#0B0E11] w-[92%]  text-[#f1f4f8]">{truncateEthAddress(splited)}</div>
                  <div className=" ml-auto mt-10 mb-3 mr-auto text-sm flex items-end">
                  <button className="w-32 h-10 py-1 px-1 rounded-3xl ml-auto mr-auto bg-[#359cfc] hover:bg-[#589ee0] text-[#1E2329]">
                    {" "}
                    Send{" "}
                  </button>
                  <button className="w-32 h-10 py-1 px-1 rounded-3xl ml-auto mr-auto  bg-[#359cfc] hover:bg-[#589ee0] text-[#1E2329]">
                    {" "}
                    Receive{" "}
                  </button>
                </div>
                </div>
                <div className=" bg-[#359cfc] shadow-lg  py-2 px-2 w-full rounded-t-3xl fixed bottom-0 h-[60%]">
                  <div  className="w-[98%] bg-[#1E2329] py-3 px-3 h-[99%] mt-4 ml-auto mr-auto flex flex-col rounded-3xl">
                    <div className="flex flex-row w-full">
                      <p className="font-light text-xl ml-auto mr-auto mt-3 mb-4">Tokens</p>
                      <p className="font-light text-xl ml-auto mr-auto mt-3 mb-4">Balance</p>
                    </div>
                    { tokens.map((token, i) => (
                      <div key={i} className="flex flex-row w-ful bg-black rounded-3xl mt-2 mb-2">
                        <p className="font-light  ml-5 mr-auto mt-3 mb-4">{token.lg}</p>
                        <p className="font-light ml-auto mr-6 mt-3 mb-4">{token.bln}</p>
                      </div>
                    ))
                    }
                    
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      );
    } else return 404;
  };

  return (
    <>
      <div>
        <div className="h-[80%] w-[100%] mb-auto">
          {hello()}
          {view()}
        </div>
        <div className=" mb-4 ml-0 mr-0 bg-transparent fixed bottom-0 w-full">
          <div
            style={{ "backdrop-filter": "blur(14px)" }}
            className="bg-[#0B0E11] backdrop-blur-lg bg-clip-padding bg-opacity-60  max-h-[4rem] w-[95%] px-5 ml-auto mr-auto rounded-full lg:hidden md:hidden"
          >
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
                        i === active &&
                        "-mt-6 bg-clip-padding bg-opacity-60  text-transparent"
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
    </>
  );
}
