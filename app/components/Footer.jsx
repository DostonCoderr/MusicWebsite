"use client"
import Link from "next/link";
import Socials from "./Socials";
import Nav from "./Nav";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Footer = () => {
  return (
    <footer className="section h-[500px] xl:h-auto">
      <div className="container mx-auto h-full flex flex-col items-center gap-y-8">
        <div>
          <Link href='#'>
          <h2 className="text-[24px] lg:text-[38px] font-semibold leading-tight">otkurovdoston69@gmail.com</h2>
          </Link>
          <div>
            <Nav containerStyles="flex flex-col xl:flex-row justify-center items-center gap-y-4 xl:gap-x-8 text-sm uppercase font-semibold " linkStyles="hover:text-blue transition-all " />
          </div>
          <div>
            <Socials
              containerStyles="flex text-[24px] gap-x-8 justify-center py-2"
              iconStyles="hover:text-primary/80 transition-all justify-center "
            />
          </div>
        </div>
          <div>
            <Link href="#" className="relative w-[250px] h-[50px] flex transition-all mb-4 xl:mb-0">
            <Image 
            src={'/assets/header/miyagi3.png'}
            fill
            className="object-contain"
            alt=""
            />
            </Link>
          </div>
          <div>
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <p className="text-sm text-center text-white">© 2024 Dostoncoder. All rights reserved.</p>
            </motion.div>
          </div>

      </div>
    </footer>
  )
}

export default Footer
