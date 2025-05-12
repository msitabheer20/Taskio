import { Medal } from "lucide-react";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react"
import Reveal from "@/utils/Reveal";

const headingFont = localFont({ src: '../../public/fonts/font.woff2' })

const textFont = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
});

const MarketingPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 px-4 md:px-12">
      {/* Left: Content */}
      <div className="flex-1 flex flex-col items-center md:items-start lg:items-center justify-center">
        <div className={cn(
          "flex items-center justify-center flex-col md:items-start lg:items-center",
          headingFont.className,
        )}>
          <Reveal axis="x" axisValue={100} duration={0.4} delay={1.0}>
            <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
              <Medal className="h-6 w-6 mr-2" />
              No 1 task management
            </div>
          </Reveal>

          <Reveal axis="x" axisValue={100} duration={0.4} delay={1.2}>
            <h1 className="text-3xl md:text-6xl text-center md:text-left text-neural-800 mb-6">
              Kanban helps team move
            </h1>
          </Reveal>
          <Reveal axis="x" axisValue={100} duration={0.4} delay={1.4}>
            <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
              work forward.
            </div>
          </Reveal>
        </div>
        <Reveal axis="x" axisValue={100} duration={0.4} delay={1.6}>
          <div className={cn(
            "text-sm md:text-xl mt-4 text-neutral-400 max-w-xs md:max-w-2xl text-center md:text-left lg:text-center mx-auto md:mx-0",
            textFont.className
          )}>
            Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way you work is unique — accomplish it all with Kanban.
          </div>
        </Reveal>
        <Reveal axis="x" axisValue={100} duration={0.4} delay={1.8}>
          <Button className="mt-6 self-center md:self-start lg:self-center" size="lg" asChild>
            <Link href="/sign-up">
              Get Kanban for free
            </Link>
          </Button>
        </Reveal>
      </div>

      {/* Right: Video */}
      <div className="flex-1 flex items-center justify-center w-full max-w-xl">
        <video
          className="w-full h-auto object-cover"
          width="720"
          height="480"
          // controls
          autoPlay
          // loop
          muted
          playsInline
          src="/home-video.mp4"
        />
      </div>
    </div>
  )
}

export default MarketingPage;