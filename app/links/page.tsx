"use client";

import { IconCard, ImageCard } from "@/components/card";
import { Typescript } from "@/components/icons";

export default function Home() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col items-center text-center pt-10 px-2 gap-8 basis-4/5">
        <h1 className="text-3xl md:text-4xl">Useful Links</h1>
        <a>Here are some useful resources we have created or used...</a>

        <div className="flex flex-col gap-2 w-full max-w-screen-md items-center">
          <ImageCard
            href="https://github.com/Friends-Robotics/GamepadEx"
            title="GamepadEx"
            text="Ergonomic gamepad bindings"
            src="/controller.jpg"
            width={250}
          />
          <ImageCard
            href="https://cad.onshape.com/documents/3c335093b2455b841e93946f/w/fe1a515bd1a7fbedc991c16c/e/859169eec7096adbf981933b?renderMode=0&uiState=685715a3359a0d5c9f25dfd0"
            title="Into The Deep CAD"
            text="Our CAD for out Into The Deep Robot"
            src="/onshape.jpeg"
            width={250}
          />
          <ImageCard
            href="https://pedropathing.com/"
            title="Pedro Pathing"
            text="GOATED Reactive Vector Follower (RVF) for autonomous"
            src="/pedro.png"
            width={250}
          />
        </div>
      </div>
    </div>
  );
}
