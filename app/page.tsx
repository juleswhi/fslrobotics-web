import Hero from "@/components/hero";
import { Mouse } from "@/components/mouse-art";
import MouseCord from "@/components/mouse-cord";

export default function Home() {
    return (
        <div className="flex relative min-h-screen flex-col pt-10 w-[100] items-center justify-center m-auto">
            <div className="absolute flex flex-col text-center top-[100px] gap-20 w-72
                md:top-[100] md:gap-15 md:text-lg">
                <p>
                    Friends School Robotics
                </p>

            </div>
        </div>
    );
}
