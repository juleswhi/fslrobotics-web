"use client";

import { IconCard, ImageCard } from "@/components/card";
import { Typescript } from "@/components/icons";

export default function Home() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col items-center text-center pt-10 px-2 gap-8 basis-4/5">
        <h1 className="text-3xl md:text-4xl">What have we been up to?</h1>
        <a>Here are some things that we have been interested in recently...</a>

        <div className="flex flex-col gap-2 w-full max-w-screen-md items-center">
          <ImageCard
            href="/blog/outreach"
            title="Outreach"
            text="Hear how Rebekah has learned about spreading STEAM skills"
            src="/outreach.jpg"
            width={250}
          />
          <ImageCard
            href="/blog/gamepadex"
            title="GamepadEx"
            text="Ergonomic gamepad bindings"
            src="/controller.jpg"
            width={250}
          />
          <ImageCard
            href="/blog/robotics"
            title="Matthew's Experience of Centerstage"
            text="Discover how our team experienced FTC Centerstage"
            src="/ftc-centerstage.png"
            width={250}
          />
        </div>
      </div>
    </div>
  );
}
