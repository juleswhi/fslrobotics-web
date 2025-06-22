import Image from "next/image";
import React from "react";
import { Link } from "@/components/projects-ui/link";

export default function Robotics() {
  return (
    <div className="flex justify-center w-full pt-8">
      <div className="flex flex-col gap-8 basis-4/5 max-w-screen-md items-center">
        <h1 className="text-xl md:text-3xl text-center font-bold">Outreach</h1>
        <Image src="/outreach.jpg" alt="FTC Centerstage Logo" sizes="100vw" width="0" height="0" className="w-96 rounded-md" />
        <p className="text-justify">
          Outreach
          As a team, we are very passionate about introducing the next generation of students to the world of robotics, and so organised two visits to a local primary school this season.
          <br />
          <br />
          On March 25th we hosted a workshop where we introduced the pupils to the field of robotics and what is possible within it. We introduced ourselves as a team and explained our roles, then gave a short presentation about what we do at robotics at Friends’. After this we showed them three pre-programmed Bit-Bots (shown below) and taught them how to drive them around makeshift obstacle courses. We also allowed them to design their own robots which prompted some very creative and entertaining designs.
          <br />
          <br />
          Following this initial visit, three of our team members returned on June 17th, where we updated the children on our regional competition. We explained what happened on the day including robot inspections, judges presentations and matches, and shared the news that we would be attending the national competition the following week.
          <br />
          <br />
          We have thoroughly enjoyed both of our visits to the school, and look forward to returning next year to meet the new classes and share more about the world of robotics.
        </p>
        <p className="text-justify">
          By Rebekah McCullough
        </p >
      </div>
    </div >
  );
}
