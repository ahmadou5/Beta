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
      <div className="ml-6 mr-6 mt-5 bg-inherit text-start text-ellipsis text-4xl">
        <h1 className="text-white font-thin font-sans">Hello</h1>
      </div>
      </>
      )
    }
  }
  const view = () => {
    if( active === 0) {
      return(
      <div>
          <div className="w-[90%] ml-auto mr-auto mt-2 bg-slate-600 max-h-[5rem]">
            <p>ggg</p>
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
    <div className="bg-slate-700 max-h-[4rem] w-[95%] px-6 ml-auto mr-auto rounded-t-xl lg:hidden md:hidden">
      <ul className="flex relative">
          
          {/**<span className={`bg-blue-500 border-4 duration-500 ${Menus[active].dis} border-black h-16 w-16 absolute rounded-full -top-6`}>
             <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadow1" ></span>
             <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-myShadow2"></span>
  </span>**/}
          {Menus.map((menu, i) => (
              <li key={i} className="w-20">
                  <div className=" flex flex-col text-center pt-6 " onClick={() => {setActive(i)}}>
                     <span className={`text-xl cursor-pointer duration-500 ${i === active && '-mt-6 text-slate-700'}`}><ion-icon name={menu.icon}></ion-icon></span>
                     <span className={` -mt-1 ${active === i ? 'translate-y-0 duration-700 text-blue-400 opacity-100' : 'opacity-0 translate-y-15'}`}>{menu.name}</span>
                  </div> 
              </li>
          ))}
      </ul>
  </div>
    </div>
  </div>
  );
}