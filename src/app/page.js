"use client";
import Confetti from "./Confetti";
import TypewriterComponent from "typewriter-effect";
import { useState } from "react";


export default function Home() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [showbtn, setShowbtn] = useState(true);
  const [count, setCount] = useState(0);
  const handleShow = () => {
    setShow(true);
    setShow1(true);
  }
  const handlePray = () => {
    setShow(false);
    setShow1(false);
    setShowbtn(false)
  }

  const view = () => {
    if( show1) {
        return(
        <>
         <div className="w-[100%] mt-5 flex-col ">
            <div
              style={{ "backdrop-filter": "blur(180px)" }}
              className=" mb-5 w-[90%] h-24 flex px-2 py-2 ml-auto mr-auto rounded-2xl items-center text-center "
            >
              <p className="text-center font-mono ml-auto mr-auto text-white">
              <TypewriterComponent
                className=' text-ellipsis font-bold'
                options={{
                  strings:['Happy Birthay Fatima.🎉🎂'],
                  autoStart: true,
                  loop: true,
                }}
              />
              </p>
            </div>
            <div
              style={{ "backdrop-filter": "blur(180px)" }}
              className=" mb-16 w-[90%] h-56 flex px-2 py-2 ml-auto rounded-2xl mt-8 mr-auto items-center text-center "
            >
              <p className="text-center font-mono ml-auto mr-auto text-white">
              <TypewriterComponent
                className=' text-ellipsis  font-bold'
                options={{
                  strings:['Happy Birthday to lady that has a unique way of making my every day brighter. Your intelligence, kindness, and charm are truly captivating. I hope this year brings you even more incredible experiences and that we get to share some of them together. 🎉🎂😊'],
                  autoStart: true,
                  loop: true,
                }}
              />
              </p>
            </div>
            <div className="w-[50%] h-36 ml-auto mr-auto mb-10">
              <img src="./bd.svg" />
            </div>
            <div className="flex items-center">
                <button  style={{ "backdrop-filter": "blur(18px)" }} className="w-36 h-8 mb-12 mt-14 ml-auto mr-auto bg-slate-400 text-black rounded-3xl" onClick={handleShow}>
                  Lets Pray  
                </button>
            </div>
            
          </div>
        </>
        )
    }
    if(showbtn) {
        return(
        <>
         <div className="w-[100%] flex items-center flex-col h-full">
            <div className="mt-auto flex flex-row">
                <p className="text-center font-mono text-white mr-4">it`s</p>
                <p className="text-center font-mono ml-auto mr-auto text-white">
                  <TypewriterComponent
                    className=' text-ellipsis  font-bold'
                    options={{
                      strings:['7-09-2023 ⏰⏰','Your Birthday🎉🎉'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
              </p>
            </div>
            <button  style={{ "backdrop-filter": "blur(18px)" }} className="w-36 h-8 mb-auto mt-9 ml-auto mr-auto bg-slate-400 text-black rounded-3xl" onClick={handleShow}>
                Click Me 🥰
            </button>
        </div>
        </>
        )
    }
  }


  return (
    <div className="h-auto w-full">
      {show && <Confetti />}
      <div className="w-[100%] h-screen flex items-center">
        {view ()}
      </div>
    </div> 
  );
}
