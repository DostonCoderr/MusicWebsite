"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { RiMapPin2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
const EventBox = ({ events }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-secondary/60 rounded-[10px] p-4 xl:p-12 relative"
    >
      <div className="flex flex-col xl:flex-row justify-between h-[620px] xl:h-full gap-x-4">
        <div className="hidden xl:flex w-[400px]">
          <Image
            src={"/assets/events/Miyagi.png"}
            width={358}
            height={489}
            priority
            quality={100}
            alt=""
          />
        </div>
        <div className="flex-1 h-[500px] flex flex-col justify-between overflow-y-scroll scrollbar-thin scrollbar-thumb-accent scrollbar-track-white/10 xl:pr-6">
          {events.map((event) => {
            return (
              <div
                key={event.id}
                className="flex flex-col xl:flex-row items-center justify-between gap-y-4 xl:gap-y-0 text-center xl:text-left my-4 xl:my-0 border-b border-white/10 pb-10 xl:py-3 last-of-type:border-none first-of-type:pt-0"
              >
                <div className="flex flex-col xl:flex-row  items-center  gap-x-4">
                  {/* Kun % Oy */}
                  <div className="flex flex-col justify-center items-center leading-tight w-[80px] mb-4 xl:mb-0">
                    <div className="text-[44px] font-black text-accent">
                      {event.date.day}
                    </div>
                    <div className="text-[20px] font-extrabold">
                      {event.date.month}
                    </div>
                  </div>
                  {/* Location */}
                  <div className="w-64 flex flex-col gap-y-2">
                    <div className="text-lg leading-none font-bold">{`${event.location.city}, ${event.location.country}`}</div>
                    <div className="flex items-center gap-x-1 justify-center xl:justify-start">
                      <div className="text-accent text-lg">
                        <RiMapPin2Fill />
                      </div>
                      <div className="font-light">{event.location.address}</div>
                    </div>
                  </div>
                </div>
                {/* Narx Budjet */}
                <div className="w-[100px] text-[17px] text-center text-accent font-bold">
                  {event.priceRange}
                </div>
                {/* btn */}
                <Link href={"https://iticket.uz/"}>
                  <button className="btn btn-sm btn-accent">Get tickets</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default EventBox;
