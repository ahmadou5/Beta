'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { activeStore } from "@/utils/store"
export function Nav() {
    const router = useRouter();
    
    const Menus = [
        {name: 'Home', icon: 'home' , dis: 'translate-x-0', ref: ''},
        {name: 'Swap', icon: 'swap' , dis: 'translate-x-16', ref: 'swap'},
        {name: 'Earn', icon: 'leaf' , dis: 'translate-x-32', ref: 'earn'},
        {name: 'Mint', icon: 'water' , dis: 'translate-x-48', ref: 'mint'},
        {name: 'Wallet', icon: 'wallet' , dis: 'translate-x-64', ref: 'wallet'},
    ]
    const [active, setActive] = useState(0)

    const navigate = (id) => {
        router.push(`/${Menus[id].ref}`)
    }
    return(
    <div className="bg-white max-h-[4.4rem] px-6 rounded-t-xl lg:hidden md:hidden">
        <ul className="flex relative">
            
            <span className={`bg-blue-500 border-4 duration-500 ${Menus[active].dis} border-black h-16 w-16 absolute rounded-full -top-5`}>
               <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadow1" ></span>
               <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-myShadow2"></span>
            </span>
            {Menus.map((menu, i) => (
                <li key={i} className="w-16">
                    c
                    <div className=" flex flex-col text-center pt-6 " onClick={() => {setActive(i); navigate(i) }}>
                       <span className={`text-xl cursor-pointer duration-500 ${i === active && '-mt-6 text-white'}`}><ion-icon name={menu.icon}></ion-icon></span>
                       <span className={` ${active === i ? 'translate-y-4 duration-700 opacity-100' : 'opacity-0 translate-y-10'}`}>{menu.name}</span>
                    </div> 
                </li>
            ))}
        </ul>
    </div>
    )
}