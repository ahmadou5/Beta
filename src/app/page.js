'use client'
import { Nav } from "@/components/Nav";

import { useState } from "react";


export default function Home() {
  const [active, setActive] = useState(0)
  const Menus = [
      {name: 'Home', icon: 'home' , dis: 'translate-x-0', ref: ''},
      {name: 'Swap', icon: 'swap' , dis: 'translate-x-15', ref: 'swap'},
      {name: 'Earn', icon: 'leaf' , dis: 'translate-x-31', ref: 'earn'},
      {name: 'Mint', icon: 'water' , dis: 'translate-x-45', ref: 'mint'},
      {name: 'Wallet', icon: 'wallet' , dis: 'translate-x-65', ref: 'wallet'},
  ]
  const hello = () => {
    if( active === 0) {
      return(<>
      <div className="ml-6 mr-6 mt-20 mb-5 bg-inherit items-center text-start text-ellipsis text-4xl">
        <h1 className="text-white font-thin font-sans">👋🏽 Welcome to</h1>
        
        <h1 className="text-[#359cfc] font-thin font-sans">YieldZone</h1>

       {/**  <div className=" ml-auto mr-3 text-sm items-end">
          <button className="w-40 h-10 py-1 px-1 rounded-3xl bg-[#359cfc] drop-shadow-3xl shadow-3xl hover:bg-[#589ee0] hover:rounded-2xl"> Connect Wallet </button>
      </div>**/}
      </div>
      </>
      )
    }
  }
  const view = () => {
    if( active === 0) {
      return(
      <div>
          <div className="w-[100%] h-auto  mt-2 ">
            <div className="py-4 px-4 ">
              <div className="w-full bg-[#0B0E11] rounded-full py-0 px-0">
                <img className='ml-auto mr-auto w-[95%] h-[50%]' src='./trade.png' />
              </div>
              <div className="mt-5 bg-[#0B0E11] flex items-center w-[99%] h-[10rem] py-1 px-1  rounded-md">
                <p className="py-1 px-1 text-center font-bold">Experience the future of earning with YieldZone Stake securely, earn effortlessly, and shape the decentralized landscape. Unleash your assets' potential today for rewards tomorrow</p>
              </div>
            </div>
          </div>
          <div className=" ml-auto mt-10 mb-14 mr-auto text-sm flex items-center">
              <button className="w-40 h-10 py-1 px-1 rounded-3xl ml-auto mr-auto mb-auto bg-[#359cfc] hover:bg-[#589ee0] hover:rounded-2xl"> Explore </button>
          </div>
          <div style={{'background-image':'url(./uu.png)','backgroundRepeat':'no-repeat', 'backgroundSize':'cover'}} className="mt-8 mb-9">
            <div className="w-[100%] mt-5 ">
              <div className="py-4 px-4 ">
                <div className=" w-20 h-20 ml-8 bg-[#0B0E11] rounded-full ">
                  <img className='' src='./invest.png' />
                </div>
                <div className="mt-3 mr-auto ml-auto bg-[#0B0E11] flex items-center w-56 h-56 py-1 px-1  rounded-full">
                  <p className="py-1 px-1 text-center font-bold">Invest in the Most Safe Place</p>
                </div>
              </div>
            </div>

            <div className="w-[100%] mt-5 ">
              <div className="py-4 px-4 ">
                <div className=" w-20 h-20 ml-8 bg-[#0B0E11] rounded-full ">
                  <img className='' src='./invest.png' />
                </div>
                <div className="mt-3 mr-auto ml-auto bg-[#0B0E11] flex items-center w-56 h-56 py-1 px-1  rounded-full">
                  <p className="py-1 px-1 text-center font-bold">Invest in the Most Safe Place</p>
                </div>
              </div>
            </div>

            <div className="w-[100%] mt-5 ">
              <div className="py-4 px-4 ">
                <div className=" w-20 h-20 ml-8 bg-[#0B0E11] rounded-full ">
                  <img className='' src='./invest.png' />
                </div>
                <div className="mt-3 mr-auto ml-auto bg-[#0B0E11] flex items-center w-56 h-56 py-1 px-1  rounded-full">
                  <p className="py-1 px-1 text-center font-bold">Invest in the Most Safe Place</p>
                </div>
              </div>
            </div>
            
          </div>
          
          <div className="bg-[#0B0E11] mb-40 h-25 w-[95%] flex items-center px-2 py-2 ml-auto mt-20 mr-auto rounded-md lg:hidden md:hidden">
            <div className="h-[5rem]  w-[90%]">
              <p>USDT</p>
              <p>80k</p>
            </div>
          </div>
      </div>
      )
    }
    if( active && active === 1) {
      return(<h1>Swap page</h1>)
    }
    if( active && active === 2) {
      return(<h1>Earn Page</h1>)
    }
    if( active && active === 3) {
      return(<h1>MInt page</h1>)
    }
    if( active && active === 4) {
      return(<h1>wallett page</h1>)
    }
    else return 404;
  }
  
  
  return(
  <div>
    <div className="h-[80%] w-[100%] mb-auto">
      {hello ()}
      {view ()}
    </div>
    <div className=" mb-0 ml-0 mr-0 bg-transparent fixed bottom-0 w-full">
    <div className="bg-[#0B0E11] max-h-[4rem] w-[95%] px-6 ml-auto mr-auto rounded-t-xl lg:hidden md:hidden">
      <ul className="flex relative">
          
          {/**<span className={`bg-blue-500 border-4 duration-500 ${Menus[active].dis} border-black h-16 w-16 absolute rounded-full -top-6`}>
             <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadow1" ></span>
             <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-myShadow2"></span>
  </span>**/}
          {Menus.map((menu, i) => (
              <li key={i} className="w-20">
                  <div className=" flex flex-col text-center pt-6 " onClick={() => {setActive(i)}}>
                     <span className={`text-xl cursor-pointer duration-500 ${i === active && '-mt-6 text-[#0B0E11]'}`}><ion-icon name={menu.icon}></ion-icon></span>
                     <span className={` -mt-1 ${active === i ? 'translate-y-0 duration-700 text-[#359cfc] opacity-100' : 'opacity-0 translate-y-15'}`}>{menu.name}</span>
                  </div> 
              </li>
          ))}
      </ul>
  </div>
    </div>
  </div>
  );
}