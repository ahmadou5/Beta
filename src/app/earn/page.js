'use client'
import { Nav } from "@/components/Nav";
import { Web3Button } from "@web3modal/react";

export default function earn() {
    return(
        <div>
            <h1>This is \earn Interface</h1>
            <div className=" mb-0 ml-0 mr-0 bg-transparent fixed bottom-0">
             <Nav/>
             <Web3Button/>
            </div>
        </div>
        )
}