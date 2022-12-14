import "./styles/main.css";

import logoImg from "./assets/LogoeSports.svg";
import { GamerBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";
import { Input } from "./components/Form/Input";

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
                        <form className="mt-8 flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="game" className="font-semibold">
                                    What game?
                                </label>
                                <Input
                                    id="game"
                                    placeholder="Choose your game"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name">Your Nickname</label>
                                <Input
                                    type="text"
                                    id="name"
                                    placeholder="Nickname"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="yearsPlaying">
                                        How many years have you been playing?
                                    </label>
                                    <Input type="number" id="yearsPlaying" />
                                </div>
                                <div className="flex flex-col gap-2 mt-6">
                                    <label htmlFor="discord">
                                        What's your discord?
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="user#0000"
                                        id="discord"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="weekDays">
                                        When do you play?
                                    </label>
                                    <div className="grid grid-cols-4 gap-2">
                                        <button
                                            className="w-8 h-8 rounded-sm bg-zinc-900"
                                            title="Sunday"
                                        >
                                            U
                                        </button>
                                        <button
                                            className="w-8 h-8 rounded-sm bg-zinc-900"
                                            title="Monday"
                                        >
                                            M
                                        </button>
                                        <button
                                            className="w-8 h-8 rounded-sm bg-zinc-900"
                                            title="Tuesday"
                                        >
                                            T
                                        </button>
                                        <button
                                            className="w-8 h-8 rounded-sm bg-zinc-900"
                                            title="Wednesday"
                                        >
                                            W
                                        </button>
                                        <button
                                            className="w-8 h-8 rounded-sm bg-zinc-900"
                                            title="Thursday"
                                        >
                                            R
                                        </button>
                                        <button
                                            className="w-8 h-8 rounded-sm bg-zinc-900"
                                            title="Friday"
                                        >
                                            F
                                        </button>
                                        <button
                                            className="w-8 h-8 rounded-sm bg-zinc-900"
                                            title="Saturday"
                                        >
                                            S
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 flex-1 ml-1">
                                    <label
                                        htmlFor="hourStart"
                                        className="justify-center"
                                    >
                                        What time?
                                    </label>
                                    <div className="flex flex-cols-2 gap-2">
                                        <Input
                                            type="time"
                                            placeholder="from"
                                            id="hourStart"
                                        />
                                        <Input
                                            type="time"
                                            placeholder="To"
                                            id="hourEnd"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 flex gap-2 text-sm">
                                <Input type="checkbox" />
                                Chat voice
                            </div>
                            <footer className="mt-4 flex justify-end gap-4">
                                <Dialog.Close
                                    type="button"
                                    className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                                >
                                    Cancel
                                </Dialog.Close>
                                <button
                                    className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                                    type="submit"
                                >
                                    <GameController className="w-6 h-6" />
                                    Find duo
                                </button>
                            </footer>
                        </form>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}

export default App;
