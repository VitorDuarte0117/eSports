import "./styles/main.css";

import logoImg from "./assets/LogoeSports.svg";

function App() {
    return (
        <div className=" max-w-[1344px] mx-auto flex flex-col items-center my-20 ">
            <img src={logoImg} alt="" />
            <h1 className="text-6xl text-white font-black mt-20">
                Your
                <span className="text-transparent bg-nlw-gradient bg-clip-text">
                    {" "}
                    duo{" "}
                </span>
                is here.
            </h1>
            <div className="grid grid-cols-6 gap-6 mt-16">
                <a className="relative rounded-lg overflow-hidden" href="">
                    <img src="/game1.png" alt="" />
                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                        <strong className="text-white font-bold">
                            League of Legends
                        </strong>
                        <span className="text-zinc-400 text-sm block">
                            4 announcements
                        </span>
                    </div>
                </a>
                <a className="relative rounded-lg overflow-hidden" href="">
                    <img src="/game2.png" alt="" />
                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                        <strong className="text-white font-bold">DOTA 2</strong>
                        <span className="text-zinc-400 text-sm block">
                            4 announcements
                        </span>
                    </div>
                </a>
                <a className="relative rounded-lg overflow-hidden" href="">
                    <img src="/game3.png" alt="" />
                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                        <strong className="text-white font-bold">
                            Counter Strike
                        </strong>
                        <span className="text-zinc-400 text-sm block">
                            4 announcements
                        </span>
                    </div>
                </a>
                <a className="relative rounded-lg overflow-hidden" href="">
                    <img src="/game4.png" alt="" />
                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                        <strong className="text-white font-bold">
                            Apex Legends
                        </strong>
                        <span className="text-zinc-400 text-sm block">
                            4 announcements
                        </span>
                    </div>
                </a>
                <a className="relative rounded-lg overflow-hidden" href="">
                    <img src="/game5.png" alt="" />
                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                        <strong className="text-white font-bold">
                            Fortnite
                        </strong>
                        <span className="text-zinc-400 text-sm block">
                            4 announcements
                        </span>
                    </div>
                </a>
                <a className="relative rounded-lg overflow-hidden" href="">
                    <img src="/game6.png" alt="" />
                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                        <strong className="text-white font-bold">
                            World of WarCraft
                        </strong>
                        <span className="text-zinc-400 text-sm block">
                            4 announcements
                        </span>
                    </div>
                </a>
            </div>
            <div className="pt-1 bg-nlw-gradient self-stretch  rounded-lg">
                <div className="bg-[#2A2634] px-8 py-6 mt-8 "></div>
            </div>
        </div>
    );
}

export default App;
