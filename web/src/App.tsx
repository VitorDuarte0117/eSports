import "./styles/main.css";

import logoImg from "./assets/LogoeSports.svg";
import { GamerBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface Game {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        ads: number;
    };
}

function App() {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000/games")
            .then((resp) => resp.json())
            .then((data) => {
                setGames(data);
            });
    }, []);
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
                {games.map((game) => {
                    return (
                        <GamerBanner
                            key={game.id}
                            bannerUrl={game.bannerUrl}
                            title={game.title}
                            adsCount={game._count.ads}
                        />
                    );
                })}
            </div>
            <Dialog.Root>
                <CreateAdBanner />
                <Dialog.Portal>
                    <Dialog.Overlay className="bg-black/60 inset-0 fixed " />
                    <Dialog.Content className="fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
                        <Dialog.Title className="text-3xl text-white font-black">
                            Publish a announcement
                        </Dialog.Title>
                        <Dialog.Content>
                            <Dialog.Content>
                                <form>
                                    <div>
                                        <label htmlFor="game">What game?</label>
                                        <input
                                            type="text"
                                            id="game"
                                            placeholder="Choose your game"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="name">
                                            Your Nickname
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Nickname"
                                        />
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="yearsPlaying">
                                                How many years have you been
                                                playing?
                                            </label>
                                            <input
                                                type="number"
                                                id="yearsPlaying"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="discord">
                                                What's your discord?
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="user#0000"
                                                id="discord"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="weekDays">
                                                When do you play?
                                            </label>
                                        </div>
                                        <div>
                                            <label htmlFor="hourStart">
                                                At which hour?
                                            </label>
                                            <div>
                                                <input
                                                    type="time"
                                                    placeholder="from"
                                                    id="hourStart"
                                                />
                                                <input
                                                    type="time"
                                                    placeholder="To"
                                                    id="hourEnd"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </Dialog.Content>
                        </Dialog.Content>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}

export default App;
