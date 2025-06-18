"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { IconSvgProps } from "@/types";
import { useRouter } from "next/navigation";

export const Card: React.FC<{ className?: string, href?: string, children?: React.ReactNode }> = ({ className, href, children }) => {
  const router = useRouter();

  return(
    <div
      className={cn("border-2 border-white hover:border-red-500 active:border-red-500 rounded-md p-4", className)}
      onClick={() => {href && router.push(href)}}
    >
      {children}
    </div>
  );
};

export const ImageCard: React.FC<{ title: string, text: string, src: string, alt?: string, width?: number, height?: number, size?: number, href: string }> = ({
  title,
  text,
  src,
  alt = "",
  width,
  height,
  size=100,
  href,
}) => {
  return(
    <Card className="flex flex-col md:flex-row md:w-full gap-4" href={href}>
        <Image src={src} alt={alt} className="rounded-md object-cover m-auto" width={width || size} height={height || size} sizes="100vw"/>
      <div className="text-start md:basis-full">
        <h1 className="font-bold text-xl md:text-2xl">{title}</h1>
        <p className="line-clamp-5 text-base">{text}</p>
      </div>
    </Card>
  );
};

export const IconCard: React.FC<{ title: string, text: string, IconComponent: React.ComponentType<IconSvgProps>, href: string }> = ({
  title,
  text,
  IconComponent,
  href,
}) => {
  return(
    <Card className="flex flex-col md:flex-row gap-4 w-full md:h-44" href={href}>
      <div className="text-start basis-1/2 md:basis-full">
        <h1 className="font-bold text-xl md:text-2xl">{title}</h1>
        <p className="line-clamp-4 text-base">{text}</p>
      </div>
      <div className="m-auto md:w-44">
        <IconComponent className="m-auto" size={90}/>
      </div>
    </Card>
  );
};
