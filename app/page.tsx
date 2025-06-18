import Hero from "@/components/hero";
import { Mouse } from "@/components/mouse-art";
import MouseCord from "@/components/mouse-cord";

export default function Home() {
    return (
        <div className="flex relative min-h-screen flex-col pt-10 w-[100] items-center justify-center m-auto">
            <div className="absolute flex flex-col text-center top-[100px] gap-2 w-150
                md:top-[100] md:gap-2 md:text-lg">
                <h1 className="text-3xl md:text-4xl">Friends' School Robotics</h1>

                <p>
                    We are FTC team #25416.
                </p>
                <p>
                    Based in Lisburn, UK.
                </p>
            </div>
        </div>
    );
}
