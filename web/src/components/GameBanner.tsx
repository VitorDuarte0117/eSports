interface GameBannerProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
}

export function GamerBanner({ bannerUrl, title, adsCount }: GameBannerProps) {
    return (
        <a className="relative rounded-lg overflow-hidden" href="">
            <img src={bannerUrl} alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                <strong className="text-white font-bold">{title}</strong>
                <span className="text-zinc-400 text-sm block">
                    {adsCount} announcement(s)
                </span>
            </div>
        </a>
    );
}
