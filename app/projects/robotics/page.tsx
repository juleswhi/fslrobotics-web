import Image from "next/image";
import React from "react";
import { Link } from "@/components/projects-ui/link";

export default function Robotics() {
  return(
    <div className="flex justify-center w-full pt-8">
      <div className="flex flex-col gap-8 basis-4/5 max-w-screen-md items-center">
        <h1 className="text-xl md:text-3xl text-center font-bold">FTC Centerstage</h1>
        <Image src="/ftc-centerstage.png" alt="FTC Centerstage Logo" sizes="100vw" width="0" height="0" className="w-96 rounded-md"/>
        <p className="text-justify">
          Recently I had the good fortune to compete in the <Link href="https://www.firstinspires.org/robotics/ftc" text="First Tech Challenge"/> nationals at 
          Cambridge University after winning the Inspire Award at Northern Ireland regionals. This was an amazing 
          experience and allowed me to put my STEM skills to the test. Our team put in a huge amount of effort over 
          the whole year, and this was evident as we managed to finish as Division 1 finalists.
        </p>
        <Image src="/robot.png" alt="Robot" sizes="100vw" width="0" height="0" className="w-96 rounded-md"/>
        <p className="text-justify">
          I was in charge of programming our robotic arm and worked with the drivers to improve its ease of use. I orientated the wrist automatically 
          and provided preset heights that could be reached at the click of a button. In addition to this, I limited the robot&#39;s 
          speed while the arm was extended to allow fine-grained control. Working with hardware was quite stressful as I had to ensure
          there were no bug in the code before I pushed it to the robot to prevent the robot from damaging itself. I ended up with the 
          simple code shown below. Based on which button the driver pressed, the 
        </p>
        <Image src="/robotic-arm.png" alt="Robot" sizes="100vw" width="0" height="0" className="w-96 rounded-md"/>
      </div>
    </div>
  );
}
