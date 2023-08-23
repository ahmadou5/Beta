'use client'
import { Nav } from "@/components/Nav";
import { useState } from "react";


export default function Home() {
  const [active, setActive] = useState(0)
   const Menus = [
      {name: 'Home', icon: 'home' , dis: 'translate-x-0', ref: ''},
      {name: 'Swap', icon: 'swap' , dis: 'translate-x-22', ref: 'swap'},
      {name: 'Earn', icon: 'leaf' , dis: 'translate-x-36', ref: 'earn'},
      {name: 'Mint', icon: 'water' , dis: 'translate-x-52', ref: 'mint'},
      {name: 'Wallet', icon: 'wallet' , dis: 'translate-x-70', ref: 'wallet'},
  ]

  const view = () => {
    if( active === 0) {
      return(<h1>Home page</h1>)
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
      <h1>hello</h1>
      {view ()}
    </div>
    <div className=" w-[100%] mb-0 ml-0 mr-0 bg-transparent fixed bottom-0">
    <div className="bg-white max-h-[4.4rem] w-[100] px-6  rounded-t-xl lg:hidden md:hidden">
      <ul className="flex relative">
          
          <span className={`bg-blue-500 border-4 duration-500 ${Menus[active].dis} border-black h-16 w-16 absolute rounded-full -top-5`}>
             <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[20px] rounded-tr-[11px] shadow-myShadow1" ></span>
             <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[20px] rounded-tl-[11px] shadow-myShadow2"></span>
          </span>
          {Menus.map((menu, i) => (
              <li key={i} className="w-20">
                  <div className=" flex flex-col text-center pt-6 " onClick={() => {setActive(i)}}>
                     <span className={`text-xl cursor-pointer duration-500 ${i === active && '-mt-6 text-white'}`}><ion-icon name={menu.icon}></ion-icon></span>
                     <span className={` ${active === i ? 'translate-y-4 duration-700 opacity-100' : 'opacity-0 translate-y-10'}`}>{menu.name}</span>
                  </div> 
              </li>
          ))}
      </ul>
  </div>
    </div>
  </div>
  );
}
