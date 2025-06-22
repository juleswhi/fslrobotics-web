import Image from "next/image";
import React from "react";
import { Link } from "@/components/projects-ui/link";

export default function Robotics() {
  return (
    <div className="flex justify-center w-full pt-8">
      <div className="flex flex-col gap-8 basis-4/5 max-w-screen-md items-center">
        <h1 className="text-xl md:text-3xl text-center font-bold">Driving Struggles</h1>
        <p className="text-justify">
          In the past, our drivers typically used only a couple of buttons on each gamepad, usually one for updating a specific state on the robot, such as toggling the claw position. Changing from this regular control scheme to one that employs a near-zero state, where each button is mapped to a single action, proved highly successful. This approach works because of the high number of buttons on the controllers themselves, totalling 36 distinct buttons across both of the gamepads.
          <br />
          <br />
          We found that as the drivers had fewer things to keep in mind, they could be more precise in their actions, which resulted in faster scoring despite having to learn more individual keybinds.
        </p>
        <h1 className="text-xl md:text-3xl text-center font-bold">Innovating Control Flow</h1>
        <p className="text-justify">
          A key difficulty in developing software for the robot is the inadequate scaling of large TeleOp classes. Even basic TeleOps can be challenging to navigate and edit, raising concerns about developer velocity and ergonomics. We agreed that each solution must be simple for users and straightforward in its syntax. The first issue was the outdated method for handling controller input. Double-nested if statements were common, and the excess of curly brackets made it challenging to track scopes. We aimed to create a system that separates the “binding” part of the main TeleOp loop, allowing different buttons to be “bound” to an action outside the main loop, keeping it tidy and precise. Another problem was using rising and falling edges. While helpful for detecting single button presses, they added unnecessary complexity and distracted from writing functional code.
        </p>
        <h1 className="text-xl md:text-3xl text-center font-bold">GamepadEx</h1>
        <p className="text-justify">
          GamepadEx addressed our earlier issues by abstracting complexity, enabling programmers to prioritise the robot's function over implementation. It maps gamepad buttons to actions at initialisation instead of runtime. It significantly simplifies edge detection, executing code when a button's state changes.
          <br />
          <br />
          We found we could reduce code volume by up to 10 times in most cases.  However, adopting Gamepadex wasn't automatic; we carefully considered its impact on program readability. Debugging would require investigating both Gamepadex and our code. Furthermore, abstracting control flow can complicate understanding. Ultimately, we chose to use GamepadEx because it performed reliably, with its abstraction mainly concealing boilerplate code, which increased indentation and complexity.
          <br />
          <br />
          By adding several overloads for optional functionality, GamepadEx maintains a clean balance between simplicity and ergonomics.

          <br />
          <br />
          GamepadEx can be found here <Link href={"https://github.com/Friends-Robotics/GamepadEx"} text={"here"} />.
        </p>
        <p className="text-justify">
          By Callum White
        </p >
      </div>
    </div >
  );
}

