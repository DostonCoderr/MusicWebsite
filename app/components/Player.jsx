"use client";

import Image from "next/image";
import { AudioPlayer } from "react-audio-play";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Player = () => {
  return (
    <motion.div
      variants={fadeIn("up", 1.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="bg-gradient-to-tr from-black to-primary/10 backdrop:-blur-[15px] h-[122px] flex items-center relative z-40"
    >
      <div className="container mx-auto flex flex-col justify-between items-center xl:flex-row">
        {/* Text & Rasm */}
        <div className="hidden w-[300px] xl:flex items-center gap-x-4">
          <div className="relative w-16 h-16">
            <Image src={"/assets/player/miyagi.jfif"} fill alt="" priority />
          </div>
          <div className="leading-none">
            <div className="text-lg font-medium">Miyagi & Endshpil</div>
            <div className="text-sm font-light">Freeman</div>
          </div>
        </div>
        {/* Player */}
        <div>
          <AudioPlayer
            loop
            preload="none"
            color="#fff"
            volume={40}
            volumePlacement="top"
            src="/assets/music/Miyagi/MiyagiFireman.mp3"
            style={{
              background: "transparent",
              boxShadow: "none",
              width: "100%",
              margin: "0 auto",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Player;
