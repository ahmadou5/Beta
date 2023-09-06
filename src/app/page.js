"use client";
import Confetti from "./Confetti";
import TypewriterComponent from "typewriter-effect";
import { useState } from "react";


export default function Home() {
  const [show, setShow] = useState(false);
  const [showM, setShowM] = useState(false);
  const [show1, setShow1] = useState(false);
  const [showbtn, setShowbtn] = useState(true);
  const [count, setCount] = useState(true);

  const Mores = [
    
    { 
      name: "Smile", 
      url: "nft1.png", 
      content: "The Smiling Birtday Lady" 
    },
    { 
        name: "Smile", 
        url: "nft1.png", 
        content: "The Smiling Birtday Lady" 
    },
  ];

  const handleShow = () => {
    setShow(true);
    setShow1(true);
  }
  const handlePray = () => {
    setShow(false);
    setShow1(false);
    setShowbtn(false);
    setCount(true)
  }
  const handleExit = () => {
    alert('Auu Namanta da Wata Adduan Allah Yasa Tsayinki Ya Karu');
    setShow(true);
    setShow1(false);
    setShowbtn(true);
    setCount(false)
    setShowM(false)
    alert('Kuma Zan Zo cin Cake')
  }
  const handleMemory = () => {
    setShow(true);
    setShow1(false);
    setShowbtn(false);
    setCount(false)
    setShowM(true)
  }

  const view = () => {
    if( show1) {
        return(
        <>
         <div className="w-[100%] mt-5 flex-col ">
            <div
              style={{ "backdrop-filter": "blur(10px)" }}
              className=" mb-5 w-[90%] h-24 flex px-2 py-2 ml-auto bg-[#0B0E11] mr-auto rounded-2xl shadow-lg bg-clip-padding bg-opacity-60 items-center text-center "
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
              style={{ "backdrop-filter": "blur(10px)" }}
              className=" mb-16 w-[90%]  h-56 flex px-2 py-2 bg-[#0B0E11] ml-auto rounded-2xl shadow-lg bg-clip-padding bg-opacity-60 mt-8 mr-auto items-center text-center "
            >
              <p className="text-center font-mono ml-auto mr-auto text-white">
              <TypewriterComponent
                className=' text-ellipsis  font-bold'
                options={{
                  strings:['Happy Birthday to the lady that has a unique way of making my every day brighter. Your intelligence, kindness, and charm are truly captivating. I hope this year brings you even more incredible experiences and that we get to share some of them together. 🎉🎂😊'],
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
                <button  style={{ "backdrop-filter": "blur(7px)" }} className="w-36 h-8 mb-12 mt-14 ml-auto mr-auto bg-slate-400 text-black rounded-3xl" onClick={handlePray}>
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
                <p className="text-center font-mono text-white mr-4">👋🏽 Hi</p>
                <p className="text-center font-mono ml-auto mr-auto text-white">
                  <TypewriterComponent
                    className=' text-ellipsis  font-bold'
                    options={{
                      strings:['Dear!','Fatima!', 'Mermerh!'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
              </p>
            </div>
            <div className="mt-8 flex flex-row">
                <p className="text-center font-mono text-white mr-4">it`s</p>
                <p className="text-center font-mono ml-auto mr-auto text-white">
                  <TypewriterComponent
                    className=' text-ellipsis  font-bold'
                    options={{
                      strings:['7-09-2023 ⏰⏰','Your Day!!', 'Your Birthday🎉🎉'],
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
    if( count) {
        return(
        <>
         <div className="w-[100%] mt-5 flex-col ">            
            <div
              style={{ "backdrop-filter": "blur(10px)" }}
              className=" mb-16 w-[90%] h-56 flex px-2 py-2 ml-auto rounded-2xl bg-[#0B0E11] shadow-lg bg-clip-padding bg-opacity-60 mt-8 mr-auto items-center text-center "
            >
              <p className="text-center font-bold text-base ml-auto mr-auto text-white">
              <TypewriterComponent
                className=' text-ellipsis  font-bold'
                options={{
                  strings:['اللهم اجعل حياتها مليئة بالسعادة والصحة والسلام. اللهم احفظها وارعها برعايتك الخاصة وسددها إلى الخير والنجاح في كل مساعيها. آمين. 🙏'],
                  autoStart: true,
                  loop: true,
                }}
              />
              </p>
            </div>
            <div
              style={{ "backdrop-filter": "blur(10px)" }}
              className=" mb-5 w-[90%] h-36 flex px-2 py-2 ml-auto mr-auto rounded-2xl bg-[#0B0E11] shadow-lg bg-clip-padding bg-opacity-60 items-center text-center "
            >
              <p className="text-center font-bold ml-auto mr-auto text-white">
              <TypewriterComponent
                className=' text-ellipsis font-bold'
                options={{
                  strings:['عيد ميلاد سعيد! أتمنى لك يومًا مليئًا بالسعادة والفرح. أتمنى أن تحقق جميع أمانيك وأحلامك في السنة الجديدة. 🎉🎂🎉🎂'],
                  autoStart: true,
                  loop: true,
                }}
              />
              </p>
            </div>
            <div className="flex items-center">
                <button  style={{ "backdrop-filter": "blur(18px)" }} className="w-36 h-8 mb-12 mt-14 ml-auto mr-auto bg-slate-400 text-black rounded-3xl" onClick={handleMemory}>
                  Memories  
                </button>
            </div>
            
          </div>
        </>
        )
    }
    if (showM) {
        return(
        <>
        <div className="w-full  h-auto">
         {Mores.map((more, i) => (
            <div
              key={i}
              style={{ "backdrop-filter": "blur(10px)" }}
              className="py-1 px-1 h-42 w-[75%] bg-white flex flex-col md:w-[80%] mt-4 mb-4 shadow-lg bg-clip-padding bg-opacity-60 lg:w-[60%] lg:h-2/3 rounded-3xl ml-auto mr-auto"
            >
              <div className="w-[100%] mt-5 ">
                <div className="py-4 px-4 ">
                  <div style={{'backdrop-filter': 'blur(10px)'}} className="bg-[#0B0E11] w-[110px] h-[110px] mb-4 shadow-lg bg-clip-padding bg-opacity-60 ml-auto mr-auto  flex items-center rounded-lg ">
                    <img className="rounded-full bg-blend-color-burn" src={`./${more.url}`} />
                  </div>
                  <div style={{'backdrop-filter': 'blur(10px)'}} className=" mr-auto ml-auto  bg-[#0B0E11] shadow-lg bg-clip-padding bg-opacity-60 flex items-center text-ellipsis text-center w-28 h-9 py-1 px-1  rounded-3xl">
                    <p className="ml-auto mr-auto text-[#dfe5eb] text-center content-center ">
                      {more.name}
                    </p>
                  </div>
                  <div style={{'backdrop-filter': 'blur(10px)'}} className=" mr-auto ml-auto  bg-[#0B0E11] shadow-lg bg-clip-padding bg-opacity-60 flex items-center text-ellipsis w-[90%] mt-4 text-center h-9 py-1 px-1 rounded-3xl">
                    <p className="py-0 px-0 ml-auto mr-auto text-[#dfe5eb] text-center content-center ">
                      {more.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex items-center">
                <button  style={{ "backdrop-filter": "blur(18px)" }} className="w-36 h-8 mb-12 mt-14 ml-auto mr-auto bg-slate-400 text-black rounded-3xl" onClick={handleExit}>
                  Exit 
                </button>
            </div>
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
