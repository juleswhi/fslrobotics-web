"use client";

import { IconCard, ImageCard } from "@/components/card";
import { Typescript } from "@/components/icons";

export default function Home() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col items-center text-center pt-10 px-2 gap-8 basis-4/5">
        <h1 className="text-3xl md:text-4xl">What have we been upto?</h1>
        <a>Here are some things that we have been interested in recently...</a>

        <div className="flex flex-col gap-2 w-full max-w-screen-md items-center">
          <ImageCard
            href="/projects/gamepadex"
            title="GamepadEx"
            text="Super ergonomic gamepad binding"
            src="/controller.jpg"
            width={250}
          />
        </div>
      </div>
    </div>
  );
}
